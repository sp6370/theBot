# Try the app on [funnycloud.work](https://funnycloud.work) and chat with the world’s best Kubernetes salesman!

### Hosting the web app
- Install the dependencies with `pnpm install`
- Set values for the following in the `.env` file:
  - `OPENAI_API_URL`
  - `OPENAI_API_KEY`
  - `AUTH_SECRET`
  - `POSTGRES_URL`
  - `REGULAR_PROMPT`
  - `AUTH_TRUST_HOST`
- Run `pnpm dev` and you are ready to go.
- For hosting, Postgres, and webapp, I am using [Northflank](https://northflank.com/).

### LLM Inference

#### Installation

1. Install the Modal CLI: [Modal CLI Guide](https://modal.com/docs/guide)
2. Log in with the CLI:
    ```sh
    modal token set
    ```

#### Upload Model Weights

3. Upload the model weights to the volume:
    ```sh
    modal run upload_model_weights.py
    ```

#### Deploy Model for Inference

4. Deploy the model on Modal for inference with vLLM:
    ```sh
    modal deploy inference.py
    ```

### Acknowledgements

- Vercel for the fantastic chatbot starter: [Vercel AI Chatbot](https://github.com/vercel/ai-chatbot)
- Modal for LLM hosting: [Modal Examples](https://github.com/modal-labs/modal-examples/tree/main)
- Dani for the original system prompt: [Dani Balcells](https://www.linkedin.com/in/danibalcells/)