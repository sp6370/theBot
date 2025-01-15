from pathlib import Path

import modal

app = modal.App("the-bot")

volume = modal.Volume.from_name("llamas", create_if_missing=True)

MODELS_DIR = Path("/llamas")
MODEL_NAME = "neuralmagic/Meta-Llama-3.1-8B-Instruct-quantized.w4a16"
MODEL_REVISION = "a7c09948d9a632c2c840722f519672cd94af885d"

download_image = (
    modal.Image.debian_slim()
    .pip_install("huggingface_hub[hf_transfer]")
    .env({"HF_HUB_ENABLE_HF_TRANSFER": "1"})
)

inference_image = modal.Image.debian_slim().pip_install("transformers")

@app.function(
    volumes={MODELS_DIR: volume},
    image=download_image,
)
def download_model(
    repo_id: str = MODEL_NAME,
    revision: str = MODEL_REVISION,
):
    print("Triggered")
    from huggingface_hub import snapshot_download

    target_dir = MODELS_DIR / repo_id
    snapshot_download(repo_id=repo_id, local_dir=target_dir, revision=revision)
    print(f"Model downloaded to {target_dir}")
