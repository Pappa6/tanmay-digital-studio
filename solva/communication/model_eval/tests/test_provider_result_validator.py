from solva.communication.model_eval.provider_result_validator import validate

def good():
    return {
        "language":"Kannada","script":"Kannada","intent":"asks what services the company offers",
        "confidence":0.99,"response_language":"Kannada","authority_granted":False
    }

def test_valid_result_passes():
    assert validate(good())["language"] == "Kannada"

def test_missing_field_blocks():
    x=good(); del x["intent"]
    try: validate(x)
    except ValueError as e: assert "MISSING_FIELDS" in str(e)
    else: assert False

def test_bad_confidence_blocks():
    x=good(); x["confidence"]=2
    try: validate(x)
    except ValueError as e: assert str(e)=="INVALID_CONFIDENCE"
    else: assert False

def test_model_cannot_grant_authority():
    x=good(); x["authority_granted"]=True
    try: validate(x)
    except ValueError as e: assert str(e)=="MODEL_CANNOT_GRANT_AUTHORITY"
    else: assert False
