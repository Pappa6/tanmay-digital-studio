"""Deterministic SOLVA Runtime Security Layer policy evaluator.

This module is deliberately model-agnostic. It does not reason about natural
language; it evaluates structured execution requests and runtime state.
"""

from dataclasses import dataclass
from typing import Any, Dict, List


@dataclass(frozen=True)
class Decision:
    decision: str
    reason: str
    controls: tuple[str, ...]


BLOCK = "BLOCK"
ESCALATE = "ESCALATE"
ALLOW = "ALLOW"


def evaluate(request: Dict[str, Any], state: Dict[str, Any]) -> Decision:
    controls: List[str] = []

    if not state.get("runtime_integrity", True):
        return Decision(BLOCK, "runtime_integrity_uncertain", tuple(controls))

    if not state.get("policy_available", True):
        return Decision(BLOCK, "policy_unavailable", tuple(controls))

    if request.get("prompt_injection_detected", False):
        return Decision(BLOCK, "untrusted_content_cannot_change_runtime_authority", tuple(controls))

    if request.get("credential_requested", False) and request.get("credential_in_agent_context", False):
        return Decision(BLOCK, "credential_material_must_not_enter_agent_context", tuple(controls))

    if request.get("scope_changed_after_authorization", False):
        return Decision(BLOCK, "scope_change_requires_fresh_authorization", tuple(controls))

    if request.get("authority_parameter_drift", False):
        return Decision(BLOCK, "authority_bearing_parameter_drift", tuple(controls))

    if not state.get("sandbox_integrity", True):
        return Decision(BLOCK, "sandbox_integrity_failure", tuple(controls))

    if not state.get("sentinel_available", True):
        return Decision(BLOCK, "sentinel_unavailable", tuple(controls))

    if not state.get("audit_available", True):
        return Decision(BLOCK, "audit_unavailable", tuple(controls))

    if request.get("identity_verified", True) is not True:
        return Decision(BLOCK, "external_identity_unresolved", tuple(controls))

    if request.get("target_verified", True) is not True:
        return Decision(BLOCK, "external_target_unresolved", tuple(controls))

    if request.get("tool_allowed", True) is not True:
        return Decision(BLOCK, "tool_outside_authorized_scope", tuple(controls))

    if request.get("network_allowed", True) is not True:
        return Decision(BLOCK, "network_endpoint_outside_policy", tuple(controls))

    if request.get("filesystem_allowed", True) is not True:
        return Decision(BLOCK, "filesystem_path_outside_sandbox", tuple(controls))

    if request.get("process_allowed", True) is not True:
        return Decision(BLOCK, "process_outside_sandbox_policy", tuple(controls))

    if request.get("credential_binding_valid", True) is not True:
        return Decision(BLOCK, "credential_binding_invalid", tuple(controls))

    if request.get("idempotency_conflict", False):
        return Decision(BLOCK, "duplicate_consequential_request", tuple(controls))

    if request.get("ambiguous_external_state", False):
        return Decision(ESCALATE, "external_state_ambiguous_no_unsafe_retry", tuple(controls))

    if request.get("resource_exhaustion", False):
        return Decision(ESCALATE, "runtime_resource_exhaustion", tuple(controls))

    if request.get("approval_required", False) and request.get("approval_bound", False) is not True:
        return Decision(ESCALATE, "exact_action_approval_required", tuple(controls))

    controls.extend([
        "policy_checked",
        "sandbox_checked",
        "sentinel_checked",
        "audit_checked",
        "identity_checked",
        "target_checked",
        "tool_scope_checked",
        "network_scope_checked",
        "credential_binding_checked",
        "idempotency_checked",
    ])
    return Decision(ALLOW, "all_runtime_controls_satisfied", tuple(controls))
