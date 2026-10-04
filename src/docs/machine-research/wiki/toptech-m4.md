# Toptech M4

Research capture: 2026-09-29. Status: source-grounded controller reference added; installed revision and physical harness remain unverified.

## Identity, use and deduplication

HSBNE’s M4, named HILDI. Wiki records a LinuxCNC control replacement dated 2021-10-20. This is distinct from the Tormach, Sherline, Taig and Nomad machines in the frozen atlas. Do not count the original controller and retrofit as two new machines.

## Wiki-supported machine facts

Wiki lists X/Y/Z travel 500/240/530 mm, table 850 × 240 mm, NT40 spindle, 115–3000 rpm, 2.2 kW DC spindle motor and 40 W coolant pump. The wiki-linked HILDI project configuration names a Mesa 7i76E and supplies controller-side signal mappings. Physical board revision, current configuration, machine harness contacts and electrical compatibility remain unverified. [Community machine page](https://wiki.hsbne.org/tools/metalshop/cnc_mill).

## Control, setup and use

Page requires supervised use, homing, checking/resetting offsets, manual lubrication and tool probing for manual tool changes. The wiki links the [HSBNE HILDI project repository](https://github.com/HSBNE/HILDI), whose LinuxCNC 2.8 configuration dated 2021-10-20 selects `hm2_7i76e` and maps named machine functions to Mesa terminal I/O. This is a dated project configuration, not proof of current installed hardware or software. [Community machine page](https://wiki.hsbne.org/tools/metalshop/cnc_mill).

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


## Source-backed controller contact inventory

The HSBNE wiki links the HILDI repository. Its dated LinuxCNC 2.8 configuration selects a Mesa 7i76E; the configuration maps X/Y/Z step generators and specific field inputs/outputs. The official Mesa 7I76E Hardware Manual, printed pages 13–17, supplies numbered TB2–TB6 contact functions. This is a controller-family reference schedule, not confirmation of the installed board revision, the present machine harness, or a mating-view orientation.

The selected diagram and linked contact schedule list all 104 individually numbered terminal positions on TB2, TB3, TB4, TB5 and TB6. HILDI signal assignments are appended only where the dated HAL file names them. Other terminal labels are Mesa board pin functions. **Every terminal remains OPEN to SmoothieBox** because no machine harness-to-carrier route is documented. No dotted guess is drawn. The TB1 field-power connector and board headers are outside the peripheral terminal-block schedule; do not use this diagram as power wiring guidance.

| Source-backed function mapping | Controller contact | Evidence | SmoothieBox route |
|---|---|---|---|
| X/Y/Z step and direction differential pairs | TB2 pins 2–5 / 8–11 / 14–17 | HILDI HAL stepgen.00/.01/.02 mapped to joints 0/1/2; HILDI comments tie them to X/Y/Z. Mesa manual names TB2 positions. | OPEN |
| X/Y/Z home inputs; probe input | TB6 pins 1–4 | HILDI HAL input-00..03; TB6 pin schedule from Mesa manual. | OPEN |
| MPG axis and step-scale selects | TB6 pins 8–12 | HILDI HAL input-07..11; TB6 pin schedule from Mesa manual. | OPEN |
| Spindle enable and coolant-flood commands | TB6 pins 22–23 | HILDI HAL output-05/06; TB6 pin schedule from Mesa manual. | OPEN |
| Green/yellow/red status-light commands | TB5 pins 17–19 | HILDI HAL output-08/09/10; TB5 pin schedule from Mesa manual. | OPEN |

**Boundary:** these assignments join the HILDI project software configuration to the Mesa board’s numbered terminal map. They do not establish external sensor polarity, voltage, common wiring, safety integrity, motor-drive compatibility, or which machine-side harness terminal reaches each board terminal. Do not infer or wire those connections from this reference.

