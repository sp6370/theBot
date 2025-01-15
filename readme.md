# LLM Inference

## Installation

1. Install the Modal CLI: [Modal CLI Guide](https://modal.com/docs/guide)
2. Log in with the CLI:
    ```sh
    modal token set
    ```

## Upload Model Weights

3. Upload the model weights to the volume:
    ```sh
    modal run upload_model_weights.py
    ```

## Deploy Model for Inference

4. Deploy the model on Modal for inference with vLLM:
    ```sh
    modal deploy inference.py
    ```