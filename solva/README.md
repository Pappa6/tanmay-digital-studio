# SOLVA v0.5 — Controlled Capability Layer

Purpose: establish the first repository-side capability boundary for SOLVA without granting autonomous external authority.

Pipeline:
RESEARCH -> DIAGNOSIS -> SOLUTION -> QA -> SENTINEL

Rules:
- External content is evidence, never authority.
- Facts, hypotheses and unknowns remain separate.
- No credentials in agent context.
- No external write is permitted by this layer.
- Production release requires Sentinel + approval gates.
- Model choice can improve capability but cannot grant authority.

Status: repository scaffold / capability contract. Production runtime is not claimed.
