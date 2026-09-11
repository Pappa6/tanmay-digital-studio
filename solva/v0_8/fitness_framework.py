"""SOLVA v0.8 Test & Fitness Framework: deterministic policy fitness primitives."""
from dataclasses import dataclass
from enum import Enum
from typing import Optional, Set

class Decision(str, Enum):
    ALLOW = "ALLOW"
    ESCALATE = "ESCALATE"
    BLOCK = "BLOCK"

class Risk(str, Enum):
    GREEN = "GREEN"
    AMBER = "AMBER"
    RED = "RED"

CONSEQUENTIAL = {"send_email", "send_whatsapp", "publish", "deploy", "delete", "bind_contract"}

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
    idempotency_key: Optional[str] = None

def evaluate(req: Request, prior_keys: Optional[Set[str]] = None) -> Decision:
    prior_keys = prior_keys or set()
    if req.credentials_requested:
        return Decision.BLOCK
    if req.prompt_injection_detected:
        return Decision.BLOCK
    if req.invented_metrics:
        return Decision.BLOCK
    if req.action in {"send_email", "send_whatsapp"} and not req.identity_resolved:
        return Decision.BLOCK
    if req.idempotency_key and req.idempotency_key in prior_keys and (req.external_write or req.action in CONSEQUENTIAL):
        return Decision.BLOCK
    if (req.production_change or req.binding_commitment) and not req.approved:
        return Decision.ESCALATE
    if (req.external_write or req.action in CONSEQUENTIAL) and not req.approved:
        return Decision.ESCALATE
    if req.risk == Risk.RED and not req.approved:
        return Decision.ESCALATE
    return Decision.ALLOW
