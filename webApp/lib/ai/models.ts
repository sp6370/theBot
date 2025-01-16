// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const models: Array<Model> = [
  {
    id: 'llama3.1-8B',
    label: 'Llama 3.1',
    apiIdentifier: 'Meta-Llama-3.1-8B-Instruct-quantized.w4a16',
    description: 'Small 8B model for fast, lightweight tasks',
  },
] as const;

export const DEFAULT_MODEL_NAME: string = 'llama3.1-8B';
