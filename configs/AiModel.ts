// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import {
  GoogleGenAI,
} from '@google/genai';

export const generateResult = async (prompt : string)=>{
    const ai = new GoogleGenAI({
      apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
    });

  const model = 'gemini-2.5-flash';
  const config = {
    thinkingConfig: { thinkingBudget: -1 },
    responseModalities: ['TEXT'], // ensure text only
  };

  const contents = [
    {
      role: 'user',
      parts: [{ text: prompt }],
    },
  ];

  let responseText = '';
  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });

  for await (const chunk of response) {
    if (chunk.text) responseText += chunk.text;
  }

  return responseText;
}
