"use node"

import 'dotenv/config'
import { ConvexVectorStore } from "@langchain/community/vectorstores/convex";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { TaskType } from "@google/generative-ai";
import { action } from "./_generated/server.js";
import { v } from 'convex/values';

export const ingest = action({
  args: {
    splitText : v.any(),
    fileId:v.string()
  },
  handler: async (ctx, args) => {
    await ConvexVectorStore.fromTexts(
      args.splitText,
      args.splitText.map(() => ({ fileId: args.fileId })),
      new GoogleGenerativeAIEmbeddings({
        apiKey : 'AIzaSyCXUBgUmiHPpmTA_JNKBsjOrqpFer3Wp4w',
        model: "text-embedding-004", 
        taskType: TaskType.RETRIEVAL_DOCUMENT,
        title: "Document title",
      }),
      { ctx }
    );
    return "Completed...."
  },
});

export const search = action({
  args: {
    query: v.string(),
    fileId : v.string()
  },
  handler: async (ctx, args) => {

    const vectorStore = new ConvexVectorStore(new GoogleGenerativeAIEmbeddings({
        apiKey : 'AIzaSyCXUBgUmiHPpmTA_JNKBsjOrqpFer3Wp4w',
        model: "text-embedding-004", 
        taskType: TaskType.RETRIEVAL_DOCUMENT,
        title: "Document title",
      }), { ctx });

    const resultOne = await (await vectorStore.similaritySearch(args.query, 1))
                      .filter(q=>q.metadata.fileId==args.fileId);
    console.log(resultOne);
    return JSON.stringify(resultOne);
  },
});