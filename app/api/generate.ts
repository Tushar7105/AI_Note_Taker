import type { NextApiRequest, NextApiResponse } from 'next';
import { GoogleGenAI } from '@google/genai';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: 'Prompt is required' });

  try {
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY, // server-side only
    });

    const model = 'gemini-2.5-flash';
    const config = {
      thinkingConfig: { thinkingBudget: -1 },
      responseModalities: ['TEXT'],
    };

    const contents = [
      { role: 'user', parts: [{ text: prompt }] },
    ];

    let responseText = '';
    const response = await ai.models.generateContentStream({ model, config, contents });

    for await (const chunk of response) {
      if (chunk.text) responseText += chunk.text;
    }

    res.status(200).json({ result: responseText });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to generate response' });
  }
}
