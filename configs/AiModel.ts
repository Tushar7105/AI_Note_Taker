// AI Model wrapper that uses the server-side API route
// This avoids CORS issues by routing through Next.js API

export const generateResult = async (prompt: string): Promise<string> => {
  try {
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('API Error:', data.error);
      throw new Error(data.error || `API error: ${response.status}`);
    }

    return data.result || '';
  } catch (error) {
    console.error('generateResult error:', error);
    throw error;
  }
};
