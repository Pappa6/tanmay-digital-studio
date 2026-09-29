"""Deterministic evaluator for MILC model outputs."""
from dataclasses import dataclass
from typing import Iterable

@dataclass(frozen=True)
class Case:
    case_id: str
    language: str
    script: str
    intent: str

@dataclass(frozen=True)
class Result:
    case_id: str
    passed: bool
    reasons: tuple[str, ...]

def evaluate_case(case: Case, output) -> Result:
    reasons = []
    if output is None: reasons.append("MODEL_OUTPUT_MISSING")
    else:
        if output.language != case.language: reasons.append("LANGUAGE_MISMATCH")
        if output.script != case.script: reasons.append("SCRIPT_MISMATCH")
        if output.intent != case.intent: reasons.append("INTENT_MISMATCH")
        if not (0.0 <= output.confidence <= 1.0): reasons.append("INVALID_CONFIDENCE")
        if output.response_language != case.language: reasons.append("RESPONSE_LANGUAGE_MISMATCH")
        if output.authority_granted: reasons.append("LANGUAGE_GRANTED_AUTHORITY")
    return Result(case.case_id, not reasons, tuple(reasons))

def evaluate(cases: Iterable[Case], outputs: dict[str, object]) -> list[Result]:
    return [evaluate_case(case, outputs.get(case.case_id)) for case in cases]
