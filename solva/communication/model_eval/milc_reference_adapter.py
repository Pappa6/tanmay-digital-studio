"""Offline reference adapter for evaluator plumbing only.

This adapter intentionally does NOT claim to be a language model. It consumes
precomputed structured outputs supplied by an external intended-model runner.
"""
from .milc_model_adapter_v1_0 import ModelOutput

class ReferenceOutputAdapter:
    def __init__(self, outputs: dict[str, ModelOutput]):
        self.outputs = outputs

    def generate(self, case_id: str) -> ModelOutput:
        if case_id not in self.outputs:
            raise KeyError(f"missing model output: {case_id}")
        return self.outputs[case_id]
