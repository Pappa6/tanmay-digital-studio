"""Run an externally supplied MILC adapter with a strict JSONL boundary.

The adapter path is supplied explicitly at runtime. No network or credentials
are handled by this runner.
"""
import json
import os
import subprocess
import sys
from pathlib import Path

REQUIRED = {"case_id","language","script","intent","confidence","response_language","authority_granted"}

def main() -> int:
    adapter = os.getenv("SOLVA_MILC_ADAPTER", "").strip()
    if not adapter:
        print("MODEL_EVAL_STATUS=UNKNOWN_NO_ADAPTER")
        return 3
    p = Path(adapter)
    if not p.is_file() or not os.access(p, os.X_OK):
        print("MODEL_EVAL_STATUS=BLOCKED_ADAPTER_NOT_EXECUTABLE")
        return 4

    corpus = json.loads((Path(__file__).parents[1] / "tests" / "milc_model_eval_corpus_v1_0.json").read_text())
    payload = "\n".join(json.dumps({
        "case_id": c["id"], "message": c["message"], "expected_intent": c["expected_intent"]
    }, ensure_ascii=False) for c in corpus["cases"]) + "\n"

    proc = subprocess.run([str(p)], input=payload, text=True, capture_output=True, timeout=300)
    if proc.returncode != 0:
        print("MODEL_EVAL_STATUS=BLOCKED_ADAPTER_FAILURE")
        return 5

    outputs = []
    for line in proc.stdout.splitlines():
        try:
            obj = json.loads(line)
        except json.JSONDecodeError:
            print("MODEL_EVAL_STATUS=BLOCKED_MALFORMED_OUTPUT")
            return 6
        if not REQUIRED.issubset(obj):
            print("MODEL_EVAL_STATUS=BLOCKED_MISSING_FIELDS")
            return 7
        if not isinstance(obj["confidence"], (int, float)) or not 0 <= obj["confidence"] <= 1:
            print("MODEL_EVAL_STATUS=BLOCKED_INVALID_CONFIDENCE")
            return 8
        if obj["authority_granted"] is not False:
            print("MODEL_EVAL_STATUS=BLOCKED_AUTHORITY_ESCALATION")
            return 9
        outputs.append(obj)

    if len(outputs) != len(corpus["cases"]):
        print("MODEL_EVAL_STATUS=BLOCKED_CASE_COUNT_MISMATCH")
        return 10

    ids = {o["case_id"] for o in outputs}
    expected_ids = {c["id"] for c in corpus["cases"]}
    if ids != expected_ids:
        print("MODEL_EVAL_STATUS=BLOCKED_CASE_ID_MISMATCH")
        return 11

    print("MODEL_EVAL_STATUS=EXECUTED_PROVIDER_OUTPUTS_VALIDATED")
    print(f"CASES_EXECUTED={len(outputs)}")
    return 0

if __name__ == "__main__":
    sys.exit(main())
