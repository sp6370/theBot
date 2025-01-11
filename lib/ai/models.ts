// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const models: Array<Model> = [
  {
    id: 'llama3.2-1B-ollama',
    label: 'Llama 3.2',
    apiIdentifier: 'llama3.2:1b',
    description: 'Small 1B model for fast, lightweight tasks',
  },
] as const;

export const DEFAULT_MODEL_NAME: string = 'llama3.2-1B-ollama';
