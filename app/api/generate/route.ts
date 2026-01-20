import { NextRequest, NextResponse } from 'next/server';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function POST(request: NextRequest) {
    try {
        const { prompt } = await request.json();

        if (!prompt) {
            return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
        }

        const apiKey = process.env.GROQ_API_KEY;

        if (!apiKey) {
            return NextResponse.json({ error: 'Groq API key is not configured. Please add GROQ_API_KEY to your .env.local' }, { status: 500 });
        }

        const apiUrl = 'https://api.groq.com/openai/v1/chat/completions';

        const maxRetries = 3;
        let lastError: Error | null = null;

        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${apiKey}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        model: 'llama-3.3-70b-versatile',
                        messages: [
                            {
                                role: 'user',
                                content: prompt
                            }
                        ],
                        max_tokens: 2048,
                        temperature: 0.7,
                    }),
                });

                if (!response.ok) {
                    const errorData = await response.json().catch(() => ({ error: response.statusText }));

                    // Rate limiting
                    if (response.status === 429) {
                        console.log(`Rate limited, waiting before retry ${attempt}/${maxRetries}...`);
                        await sleep(2000 * attempt);
                        continue;
                    }

                    throw new Error(`Groq API error: ${response.status} - ${JSON.stringify(errorData)}`);
                }

                const result = await response.json();

                // OpenAI-compatible response format
                let responseText = '';
                if (result.choices && result.choices.length > 0) {
                    responseText = result.choices[0].message?.content || '';
                }

                return NextResponse.json({ result: responseText });
            } catch (error) {
                lastError = error as Error;
                console.error(`Attempt ${attempt}/${maxRetries} failed:`, lastError.message);

                if (attempt < maxRetries) {
                    await sleep(1000 * attempt);
                }
            }
        }

        throw lastError || new Error('Failed to generate result after multiple attempts');
    } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error';
        console.error('Generate API error:', errorMessage);
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
