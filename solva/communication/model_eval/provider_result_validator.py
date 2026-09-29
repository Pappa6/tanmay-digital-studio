"""Fail-closed validation of external model-provider results."""
REQUIRED = {"language","script","intent","confidence","response_language","authority_granted"}

def validate(raw):
    if not isinstance(raw, dict):
        raise ValueError("MODEL_OUTPUT_NOT_OBJECT")
    missing = REQUIRED - set(raw)
    if missing:
        raise ValueError("MODEL_OUTPUT_MISSING_FIELDS:" + ",".join(sorted(missing)))
    if not isinstance(raw["confidence"], (int, float)) or not 0 <= raw["confidence"] <= 1:
        raise ValueError("INVALID_CONFIDENCE")
    if not isinstance(raw["authority_granted"], bool):
        raise ValueError("INVALID_AUTHORITY_FLAG")
    if raw["authority_granted"]:
        raise ValueError("MODEL_CANNOT_GRANT_AUTHORITY")
    for key in ("language","script","intent","response_language"):
        if not isinstance(raw[key], str) or not raw[key].strip():
            raise ValueError("INVALID_" + key.upper())
    return raw
