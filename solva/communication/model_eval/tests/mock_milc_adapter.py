#!/usr/bin/env python3
"""Test-only adapter fixture. It is deliberately deterministic and NOT a model."""
import json, sys

LANG = {
"LM01":("Assamese","Bengali"),"LM02":("Bengali","Bengali"),"LM03":("Bodo","Devanagari"),
"LM04":("Dogri","Devanagari"),"LM05":("Gujarati","Gujarati"),"LM06":("Hindi","Devanagari"),
"LM07":("Kannada","Kannada"),"LM08":("Kashmiri","Perso-Arabic"),"LM09":("Konkani","Devanagari"),
"LM10":("Maithili","Devanagari"),"LM11":("Malayalam","Malayalam"),"LM12":("Manipuri","Bengali"),
"LM13":("Marathi","Devanagari"),"LM14":("Nepali","Devanagari"),"LM15":("Odia","Odia"),
"LM16":("Punjabi","Gurmukhi"),"LM17":("Sanskrit","Devanagari"),"LM18":("Santali","Ol Chiki"),
"LM19":("Sindhi","Devanagari"),"LM20":("Tamil","Tamil"),"LM21":("Telugu","Telugu"),"LM22":("Urdu","Perso-Arabic")
}
for line in sys.stdin:
    if not line.strip(): continue
    x=json.loads(line); lang,script=LANG[x["case_id"]]
    print(json.dumps({"case_id":x["case_id"],"language":lang,"script":script,
      "intent":x["expected_intent"],"confidence":1.0,"response_language":lang,
      "authority_granted":False},ensure_ascii=False))
