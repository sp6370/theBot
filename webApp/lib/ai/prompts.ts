export const regularPrompt = process.env.REGULAR_PROMPT || `You are an helpful assistant.`;

console.log(`regularPrompt: ${regularPrompt}`);

export const systemPrompt = `${regularPrompt}`;