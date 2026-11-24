"""Reproducible typography-only reader derivative; never changes the source drawing.

The original wholeboard-wiring.svg remains the qualified source-study snapshot.
This derivative changes four top-level overview font sizes from 85 to 95 units.
Every source board, contact, route, wire stroke and other byte is preserved.
Electrical/physical acceptance and complete powered wiring remain unresolved.
"""
from pathlib import Path
import hashlib,json,re

D=Path(__file__).resolve().parent
SOURCE_SHA='380c45c5dd89ea65f80bc0864479cabe7d29c683b9f55ea242a4bad723a02fa4'
LABELS=[('150','225'),('2600','380'),('2600','2420'),('90','2860')]
def digest(data):return hashlib.sha256(data).hexdigest()
def derive(data):
    if digest(data)!=SOURCE_SHA:raise ValueError('Original whole-board source changed; review before rebuilding')
    text=data.decode();original=text
    edits=[]
    for x,y in LABELS:
        before=f'<text font-family="DejaVu Sans" x="{x}" y="{y}" font-size="85"'
        after=before.replace('font-size="85"','font-size="95"')
        if text.count(before)!=1:raise ValueError(f'Expected one source heading at {x},{y}')
        text=text.replace(before,after,1);edits.append({'x':x,'y':y,'before_font_size':85,'after_font_size':95})
    restored=text
    for x,y in LABELS:
        after=f'<text font-family="DejaVu Sans" x="{x}" y="{y}" font-size="95"'
        restored=restored.replace(after,after.replace('font-size="95"','font-size="85"'),1)
    if restored!=original:raise ValueError('Derivative is not exactly reversible')
    return text.encode(),edits

def main():
    data=(D/'wholeboard-wiring.svg').read_bytes();output,edits=derive(data)
    target=D/'wholeboard-wiring-reader.svg'
    # A changed existing derivative belongs to another edit and must be reviewed.
    if target.exists() and target.read_bytes()!=output:raise ValueError('Existing reader output differs; preserve and review')
    target.write_bytes(output)
    manifest={'kind':'typography-only reader derivative','source':'wholeboard-wiring.svg','source_sha256':digest(data),'output':target.name,'output_sha256':digest(output),'edits':edits,'inverse_restores_source_byte_for_byte':True,'all_other_bytes_unchanged':True,'electrical_scope':'Three unpowered individual host leads; powered installation incomplete','qualification':'Source geometry retained; this derivative does not extend electrical, hardware or whole-guide acceptance.'}
    (D/'reader-wiring-provenance.json').write_text(json.dumps(manifest,indent=2)+'\n')
    print(json.dumps({'type':'result',**manifest}))
if __name__=='__main__':main()
