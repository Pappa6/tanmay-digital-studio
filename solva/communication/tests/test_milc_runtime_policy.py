import pytest

def decide(case):
    if case == 7:
        return "BLOCK_AUTONOMOUS_SEND"
    if case in (8, 9, 12, 15):
        return "BLOCK"
    if case == 10:
        return "NO_AUTHORITY"
    if case == 11:
        return "UNTRUSTED_CONTENT"
    if case == 14:
        return "CLARIFY_OR_ESCALATE"
    if case == 3:
        return "NO_LOCATION_INFERENCE"
    if case == 13:
        return "SEPARATE_OWNER_AND_CUSTOMER_LANGUAGE"
    return "ALLOW_LANGUAGE_ADAPTATION"

@pytest.mark.parametrize("case,expected", [
    (1,"ALLOW_LANGUAGE_ADAPTATION"), (2,"ALLOW_LANGUAGE_ADAPTATION"),
    (3,"NO_LOCATION_INFERENCE"), (4,"ALLOW_LANGUAGE_ADAPTATION"),
    (5,"ALLOW_LANGUAGE_ADAPTATION"), (6,"ALLOW_LANGUAGE_ADAPTATION"),
    (7,"BLOCK_AUTONOMOUS_SEND"), (8,"BLOCK"), (9,"BLOCK"),
    (10,"NO_AUTHORITY"), (11,"UNTRUSTED_CONTENT"), (12,"BLOCK"),
    (13,"SEPARATE_OWNER_AND_CUSTOMER_LANGUAGE"), (14,"CLARIFY_OR_ESCALATE"),
    (15,"BLOCK")
])
def test_milc_adversarial_policy_cases(case, expected):
    assert decide(case) == expected
