"""Provider-gated MILC model evaluation entry point.

No provider implementation is bundled here. The runner fails closed when the
provider configuration or adapter is absent; it never fabricates model output.
"""
import os
import sys
from pathlib import Path
import json

def main() -> int:
    corpus_path = Path(__file__).parents[1] / "tests" / "milc_model_eval_corpus_v1_0.json"
    corpus = json.loads(corpus_path.read_text(encoding="utf-8"))
    if len(corpus.get("cases", [])) != 22:
        print("MODEL_EVAL_STATUS=BLOCKED_INVALID_CORPUS")
        return 2

    provider = os.getenv("SOLVA_MODEL_PROVIDER", "").strip()
    endpoint = os.getenv("SOLVA_MODEL_ENDPOINT", "").strip()
    if not provider or not endpoint:
        print("MODEL_EVAL_STATUS=UNKNOWN_NO_PROVIDER")
        return 3

    print("MODEL_EVAL_STATUS=BLOCKED_NO_PROVIDER_ADAPTER")
    print(f"provider={provider}")
    print("Provider configuration exists, but a provider-specific adapter is not installed.")
    return 4

if __name__ == "__main__":
    sys.exit(main())
