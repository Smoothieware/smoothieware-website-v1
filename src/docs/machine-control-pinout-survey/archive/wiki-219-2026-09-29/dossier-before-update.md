# Toptech M4

Research capture: 2026-09-23. Status: wiki-grounded draft; integration and whole-repository deduplication pending.

## Identity, use and deduplication

HSBNE’s M4, named HILDI. Wiki records a LinuxCNC control replacement dated 2021-10-20. This is distinct from the Tormach, Sherline, Taig and Nomad machines in the frozen atlas. Do not count the original controller and retrofit as two new machines.

## Wiki-supported machine facts

Wiki lists X/Y/Z travel 500/240/530 mm, table 850 × 240 mm, NT40 spindle, 115–3000 rpm, 2.2 kW DC spindle motor and 40 W coolant pump. Installed controller I/O-board model and electrical connector map remain unknown. [Community machine page](https://wiki.hsbne.org/tools/metalshop/cnc_mill).

## Control, setup and use

Page requires supervised use, homing, checking/resetting offsets, manual lubrication and tool probing for manual tool changes. Its external code-repository link was not used as evidence because it is outside wiki-only scope. [Community machine page](https://wiki.hsbne.org/tools/metalshop/cnc_mill).

## Connections and pinout

| Circuit / connector | Pin/contact and signal | Direction / polarity | Electrical details | Evidence status |
|---|---|---|---|---|
| Controller logic and communication | Unknown physical connector pin assignments | Unknown | Unknown | No machine-specific contact map found in inspected wiki sources |
| Motors and spindle | Unknown contact assignments | Unknown | Only the separately cited component ratings are known | Do not translate a motor rating into logic voltage |
| Limits, probe, E-stop and protective circuits | Unknown | Unknown | Unknown | Button appearance and workflow do not identify safety wiring |

## Visual evidence and transcription

[Wiki source page](https://wiki.hsbne.org/tools/metalshop/cnc_mill) · [Original wiki-hosted media](https://wiki.hsbne.org/_media/tools/metalshop/toptech_m4_imagerendering_57368_04908_67754.1545326877.jpg) · [Retained original](images/toptech.jpg).

Illustration reads “M4 CNC”, “TOPTECH” and “Siemens 802S CNC controller”. Insets depict ports and an electrical enclosure but their contact labels are unreadable at the supplied resolution. This is a product illustration, not evidence of the later installed LinuxCNC electronics.

The image belongs to its source; retaining it records research evidence and does not assert ownership or a reuse license. Consult the source for licensing before republication.

## Conflicts and open questions

The illustration depicts the original Siemens control, while prose records a later retrofit. Keep both dated scopes. Generic copied safety/template text on the page is not reliable model-specific evidence.

## Evidence limits and integration gate

This is a wiki-derived dossier, not a manufacturer-certified wiring instruction. `Unknown` means the inspected sources did not establish that field. A photographed stop button does not establish its contact logic, safety rating, or interlock circuit. Do not infer a machine pinout from its software, controller family, cable color, or connector appearance.

Deduplication was checked against the complete frozen atlas-label inventory supplied in the native fallback payload, including the prior controller leads. The rest of the repository and concurrent new dossiers were not inspected by this advisor. The parent must perform that broader check before crediting this toward 100 new machines.
