import { experimental_wrapLanguageModel as wrapLanguageModel } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';

const openai = createOpenAI({
  // custom settings, e.g.
  compatibility: 'strict', // strict mode, enable when using the OpenAI API
  baseURL: process.env.OPENAI_API_URL,
  apiKey: process.env.OPENAI_API_KEY,
});

import { customMiddleware } from './custom-middleware';

export const customModel = (apiIdentifier: string) => {
  return wrapLanguageModel({
    model: openai(apiIdentifier),
    middleware: customMiddleware,
  });
};
