"use node"

import 'dotenv/config'
import { ConvexVectorStore } from "@langchain/community/vectorstores/convex";
import { HuggingFaceInferenceEmbeddings } from "@langchain/community/embeddings/hf";
import { action } from "./_generated/server.js";
import { v } from 'convex/values';

export const ingest = action({
  args: {
    splitText: v.any(),
    fileId: v.string()
  },
  handler: async (ctx, args) => {
    try {
      console.log(`Starting embedding for fileId: ${args.fileId}, chunks: ${args.splitText.length}`);

      const embeddings = new HuggingFaceInferenceEmbeddings({
        apiKey: process.env.HUGGINGFACE_API_KEY,
        model: "sentence-transformers/all-MiniLM-L6-v2",
        maxRetries: 3,
      });

      await ConvexVectorStore.fromTexts(
        args.splitText,
        args.splitText.map(() => ({ fileId: args.fileId })),
        embeddings,
        { ctx }
      );

      console.log(`Successfully embedded ${args.splitText.length} chunks for fileId: ${args.fileId}`);
      return "Completed....";
    } catch (error) {
      console.error(`Error during embedding for fileId ${args.fileId}:`, error.message);
      throw new Error(`Failed to embed document: ${error.message}`);
    }
  },
});

export const search = action({
  args: {
    query: v.string(),
    fileId: v.string()
  },
  handler: async (ctx, args) => {

    const vectorStore = new ConvexVectorStore(new HuggingFaceInferenceEmbeddings({
      apiKey: process.env.HUGGINGFACE_API_KEY,
      model: "sentence-transformers/all-MiniLM-L6-v2",
    }), { ctx });

    const resultOne = await (await vectorStore.similaritySearch(args.query, 1))
      .filter(q => q.metadata.fileId == args.fileId);
    console.log(resultOne);
    return JSON.stringify(resultOne);
  },
});