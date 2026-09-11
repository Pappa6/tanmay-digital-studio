from dataclasses import dataclass
from enum import Enum

class Decision(str, Enum):
    ALLOW = "ALLOW"
    ESCALATE = "ESCALATE"
    BLOCK = "BLOCK"

class Risk(str, Enum):
    GREEN = "GREEN"
    AMBER = "AMBER"
    RED = "RED"

@dataclass(frozen=True)
class Request:
    action: str
    risk: Risk
    external_write: bool = False
    credentials_requested: bool = False
    production_change: bool = False
    binding_commitment: bool = False
    identity_resolved: bool = True
    invented_metrics: bool = False
    prompt_injection_detected: bool = False
    approved: bool = False
    idempotency_key: str | None = None

@dataclass(frozen=True)
class ControlResult:
    decision: Decision
    reason: str

CONSEQUENTIAL = {"send_email", "send_whatsapp", "publish", "deploy", "delete", "bind_contract"}

def evaluate(req: Request, prior_keys: set[str] | None = None) -> ControlResult:
    prior_keys = prior_keys or set()
    if req.credentials_requested:
        return ControlResult(Decision.BLOCK, "credential access is denied")
    if req.prompt_injection_detected:
        return ControlResult(Decision.BLOCK, "untrusted content cannot change authority")
    if req.invented_metrics:
        return ControlResult(Decision.BLOCK, "invented metrics are prohibited")
    if req.action in {"send_email", "send_whatsapp"} and not req.identity_resolved:
        return ControlResult(Decision.BLOCK, "identity must be resolved before outreach")
    if req.idempotency_key and req.idempotency_key in prior_keys:
        return ControlResult(Decision.BLOCK, "duplicate consequential action")
    if req.production_change or req.binding_commitment:
        if not req.approved:
            return ControlResult(Decision.ESCALATE, "explicit approval required")
    if req.external_write or req.action in CONSEQUENTIAL:
        if not req.approved:
            return ControlResult(Decision.ESCALATE, "external/consequential action requires approval")
    if req.risk == Risk.RED and not req.approved:
        return ControlResult(Decision.ESCALATE, "RED action requires approval")
    return ControlResult(Decision.ALLOW, "policy conditions satisfied")
