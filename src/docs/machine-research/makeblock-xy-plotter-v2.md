# Makeblock XY Plotter V2.0 · connector and module paths

Checked: 2026-09-27

## Scope and source identity

This record applies to the XY Plotter V2.0 assembly documented by Makeblock's official `XY Plotter V2.0 Assembly Instruction` PDF. The captured PDF is 53 pages, 17,016,917 bytes, SHA-256 `3c851a44200a9653d7325350e4a4190c5069ed9d95e73f84ff96e47b13b5fff2`. Its official repository URL is listed below. PDF page 45 is the assembly wiring diagram; it names five Me Baseboard ports, three adapter modules, two stepper driver modules, and one 9 g servo.

Page 45 explicitly calls each inter-module cable `6P6C RJ25` and gives lengths. This establishes six fitted contact positions per named cable endpoint, but the page does not draw a mating-face view, number the six contacts, state any contact function, or show cable continuity. Accordingly, the 30 marks in the atlas are count-only OPEN reference positions. Their displayed sequence is an inventory index only; it is not cavity numbering, color order, polarity, or pin function.

## Transcription from the exact V2.0 assembly diagram

| Machine part | Source-documented path | What remains unknown |
| --- | --- | --- |
| 42BYG stepper motor 1 | Me Stepper Driver 1 → 6P6C RJ25 cable, 35 cm → Me Baseboard Port 1 | RJ25 contact functions/orientation, voltage and signal levels, fitted board revision, wiring suitability for SmoothieBox |
| 42BYG stepper motor 2 | Me Stepper Driver 2 → 6P6C RJ25 cable, 20 cm → Me Baseboard Port 2 | Same unknowns as motor 1 |
| Limit switches 1 and 2 | Me RJ25 Adapter 1 → 6P6C RJ25 cable, 20 cm → Port 3 | Adapter contact order and polarity are not shown on page 45 |
| Limit switches 3 and 4 | Me RJ25 Adapter 3 → 6P6C RJ25 cable, 50 cm → Port 8 | Adapter contact order and polarity are not shown on page 45 |
| 9 g micro servo | Me RJ25 Adapter 2 → 6P6C RJ25 cable, 50 cm → Port 7 | Adapter contact order, power rail, polarity, and servo signal pin are not shown on page 45 |

The diagram in the PDF is a module/port path. It is not a SmoothieBox retrofit schematic and does not prove any pin-to-pin conductor. No conductive routes or dotted guesses are recorded for this profile until a source supports a specific interface contact and the electrical boundary can be stated.

## Corroborating and conflicting evidence

The Makeblock Me Stepper Driver datasheet identifies the module as a bipolar stepper driver, says it uses two I/O signals for stepping and direction, and names a 6–12 V DC drive-voltage range. A publicly hosted copy of the Makeblock datasheet's programming example maps Port 1 Slot 1 to DIR and Port 1 Slot 2 to STEP. These are useful functional facts about the module family, not proof of the XY Plotter V2.0 harness's six RJ25 cavity identities, port-contact orientation, or installed revision. They are not used to assign pin numbers in the SVG.

An indexed text extract of Makeblock's product FAQ (PDF p. 113) says Limit Switches 1/2 use Adapter 1 slots 2/1 and Port 3; it says Limit Switches 3/4 use Adapter 3 slots 2/1 and Port 6. That latter destination conflicts with the exact V2.0 assembly PDF p. 45, which says Port 8. The FAQ was indexed but its PDF endpoint did not open during this capture (HTTP 526), and the FAQ extract does not establish it is specific to the exact V2.0 assembly revision. Therefore the SVG and V2.0 table retain Port 8 and do not merge or silently substitute the family-level Port 6 claim. The FAQ also reports a working switch reads 1 when pressed and 0 when unpressed; this is recorded only as family-level software behavior, not as polarity or RJ25 contact assignment.

## Captured sources

1. Makeblock-official, [XY Plotter V2.0 Assembly Instruction](https://github.com/Makeblock-official/XY-Plotter-2.0/blob/master/XY%20Plotter%20V2.0%20Assembly%20Instruction.pdf), PDF page 45. The repository's raw PDF was captured locally for visual inspection; its hash is recorded above.
2. Makeblock, [FAQs for Makeblock products](https://qiniu.makeblock.com/makeblock-download/FAQs%20for%20Makeblock%20products.pdf), indexed extract at PDF page 113. Direct retrieval failed with HTTP 526, so only the indexed text shown in the search result was available; its exact applicability remains unresolved.
3. Makeblock, [Me Stepper Driver datasheet copy](https://media.digikey.com/pdf/Data%20Sheets/Makeblock%20PDFs/Me_Stepper_Driver_Web.pdf), pp. 1–3. This is a hosted copy of a Makeblock-authored datasheet, consulted for module context only.
4. Makeblock-official, [Makeblock-Libraries `MePort.h`](https://github.com/Makeblock-official/Makeblock-Libraries/blob/master/src/MePort.h), port/slot API. It documents logical slot access, not the exact V2.0 port-cable cavity view.

## Diagram inventory

The primary SmoothieBox SVG shows the 82 named SmoothieBox exterior contacts and five Makeblock machine-side 6P6C groups. Each group contains six individually displayed count-only OPEN marks: 30 positions total. It displays no conductor or guessed route. The five groups are `RJ25 Port 1 motor 1`, `RJ25 Port 2 motor 2`, `Port 3 limit 1/2`, `Port 7 servo`, and `Port 8 limit 3/4`. The broader older V2 Core contact schedule remains retained in its collapsed historical section and is not used as a source for these machine-side pin assignments.
