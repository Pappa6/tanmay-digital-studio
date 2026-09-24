import json, os, subprocess, sys
from pathlib import Path

ROOT=Path(__file__).parents[1]
RUNNER=ROOT/"run_external_adapter.py"
ADAPTER=Path(__file__).with_name("mock_milc_adapter.py")

def test_fixture_executes_all_22_cases():
    env=os.environ.copy(); env["SOLVA_MILC_ADAPTER"]=str(ADAPTER)
    p=subprocess.run([sys.executable,str(RUNNER)],env=env,text=True,capture_output=True)
    assert p.returncode==0, p.stdout+p.stderr
    assert "CASES_EXECUTED=22" in p.stdout

def test_fixture_is_not_claimed_as_model():
    assert "NOT a model" in ADAPTER.read_text()
