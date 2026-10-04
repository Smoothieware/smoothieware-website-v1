# Makera Carvera

Research capture: 2026-09-23. Status: wiki-grounded draft; integration and whole-repository deduplication pending.

## Identity, use and deduplication

Happylab’s original Carvera desktop CNC, not Carvera Air. Exact electronics revision is unknown. Checked against Nomad 3, Genmitsu, Shapeoko and the other atlas desktop mills; Makera Carvera is a distinct named machine, not a retrofit of those models.

## Wiki-supported machine facts

Wiki lists 360 × 240 × 140 mm work area, 200 W / 15000 rpm spindle, and 3.175 mm (1/8 inch) collet. The six-position tool changer uses a dummy in slot 6 at this installation. [Community machine page](https://wiki.happylab.at/w/Carvera).

## Control, setup and use

Use the Carvera ATC postprocessor in VCarve and working tool slots 1–5. The page warns that 3 mm shanks can slip in the 1/8-inch collet. Auto-level/probing needs observation to avoid lateral collisions. FlatCAM is documented for PCB work. A USB-powered UV lamp is mentioned, but this supplies no machine USB pinout or current rating. [Community machine page](https://wiki.happylab.at/w/Carvera).

## Connections and pinout

| Circuit / connector | Pin/contact and signal | Direction / polarity | Electrical details | Evidence status |
|---|---|---|---|---|
| Controller logic and communication | Unknown physical connector pin assignments | Unknown | Unknown | No machine-specific contact map found in inspected wiki sources |
| Motors and spindle | Unknown contact assignments | Unknown | Only the separately cited component ratings are known | Do not translate a motor rating into logic voltage |
| Limits, probe, E-stop and protective circuits | Unknown | Unknown | Unknown | Button appearance and workflow do not identify safety wiring |

## Visual evidence and transcription

[Wiki source page](https://wiki.happylab.at/w/Carvera) · [Original wiki-hosted media](https://wiki.happylab.at/images/thumb/7/78/Carvera_im_Happylab.jpg/600px-Carvera_im_Happylab.jpg) · [Retained original](images/carvera.jpg).

Photo: enclosed desktop mill with translucent cover; tablet/controller and keyboard beside it; a separate red mushroom switch on the worktop. Its cable destination and contact wiring cannot be traced. Image evidence establishes the installation appearance, not a circuit.

The image belongs to its source; retaining it records research evidence and does not assert ownership or a reuse license. Consult the source for licensing before republication.

## Conflicts and open questions

Do not import Carvera Air specifications. The dummy tool position is a Happylab setup detail, not proof of a universal factory slot assignment.

## Evidence limits and integration gate

This is a wiki-derived dossier, not a manufacturer-certified wiring instruction. `Unknown` means the inspected sources did not establish that field. A photographed stop button does not establish its contact logic, safety rating, or interlock circuit. Do not infer a machine pinout from its software, controller family, cable color, or connector appearance.

Deduplication was checked against the complete frozen atlas-label inventory supplied in the native fallback payload, including the prior controller leads. The rest of the repository and concurrent new dossiers were not inspected by this advisor. The parent must perform that broader check before crediting this toward 100 new machines.
