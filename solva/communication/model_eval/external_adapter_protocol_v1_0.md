# SOLVA MILC External Model Adapter Protocol v1.0

Purpose: permit a real model provider to execute the 22-case MILC corpus without embedding provider credentials or granting provider output authority.

## Invocation

The adapter is an external executable selected by deployment configuration.

Input: one JSON object per line on stdin:
{"case_id":"LM01","message":"...","expected_intent":"..."}

Output: one JSON object per line on stdout with exactly these semantic fields:
- case_id
- language
- script
- intent
- confidence
- response_language
- authority_granted

## Security boundary

The adapter receives no SOLVA credentials, approval tokens, Sentinel controls, or hidden authority state.

Its output is untrusted data. SOLVA independently validates and scores it.

The adapter must not write directly to customer systems, email, WhatsApp, CRM, files, or production infrastructure.

## Failure rules

Missing executable, non-zero exit, malformed JSON, missing fields, invalid confidence, case-id mismatch, or authority_granted=true => BLOCKED / UNKNOWN. No PASS may be manufactured.

## Promotion

A live MILC result is certifiable only when all 22 cases execute against the intended model/provider, independent scoring completes, critical errors are zero, and MILC Authority/Sentinel integration passes.
