# Inventables X-Carve / X-Controller option 2 contact references

Checked 2026-09-26 against the manufacturer's [X-Controller upgrade usage page](https://x-carve-instructions.inventables.com/upgrade/step3/2usage/), its [rear wiring diagram](https://x-carve-instructions.inventables.com/1000mm/step8/x-controllerWiringDiagramFIXED.jpg), and its [terminal photograph](https://x-carve-instructions.inventables.com/1000mm/step8/P1211535EDIT.jpg).

The source describes two alternative upgrade paths. **Option 1** keeps the existing stepper cable arrangement and adjusts Y current. **Option 2** adds a new cable to give each of the four motors its own driver. The diagram used for the contact lists below illustrates option 2, viewed from the rear of the X-Controller. It shows the black and green conductors swapped at Y2 so the opposed Y motors rotate together. Do not apply this illustrated Y2 order to option 1 without inspecting that machine's harness.

The source image does not stamp cavity numbers or name motor coil/phase polarity. The drawing-order positions below are descriptive **left-to-right ordinals in this image**, not connector part pin numbers, STEP/DIR controller inputs, or proven wire identities at the motor end. X, Y1, and Z show white, red, green, black. Y2 shows white, red, black, green. These conductors enter X-Controller motor outputs after its drivers; a SmoothieBox motion STEP/DIR output must not be drawn directly to them.

| Rear motor plug | Drawing-order 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- |
| X | White | Red | Green | Black |
| Y1 | White | Red | Green | Black |
| Y2 | White | Red | Black | Green |
| Z | White | Red | Green | Black |

The lower-left removable terminal block shows eight positions in this left-to-right order: X LIMIT, GND, Y LIMIT, GND, Z LIMIT, GND, PROBE, GND. The lower-right block shows seven: M7 (MIST), GND, M8 (FLOOD), GND, SPINDLE (PWM), SPINDLE (0–10V), GND. `POWER` at the right of this block labels an indicator, not an eighth terminal. The manufacturer says the limit switches have separate signal and ground positions; it warns that spindle terminals are control signals rather than spindle power. The page describes PWM/GND to a DC spindle speed controller or PWM as an AC-spindle relay enable, but the particular X-Carve's fitted spindle controller and signal interface are not established.

These are reference contacts on the former X-Controller and its option-2 motor plugs. No installed harness, coil map, connector mating face, signal voltage compatibility, returns, isolation, safety circuit, or SmoothieBox route is established. Keep all source contacts OPEN in the atlas and keep option 1 explicitly outside this numbered reference.
