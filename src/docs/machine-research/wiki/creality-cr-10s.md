# Creality CR-10S source and interface dossier

Research updated 2026-09-27. This dossier separates model-level references from evidence about MakeICT's retired physical unit.

## Identity and machine status

MakeICT identifies a Creality CR-10S and lists it as retired. The wiki specifications are not measurements of the retired unit; its installed motherboard revision, firmware, modifications, and connector condition are unknown. [MakeICT CR-10S](https://wiki.makeict.org/wiki/Creality_CR-10S) · [retired equipment inventory](https://wiki.makeict.org/wiki/Equipment).

## Manufacturer manual evidence

The Creality-branded CR-10 Series User Manual V5.1 explicitly covers CR-10S models. The available PDF is hosted by a third-party mirror, not an official Creality download domain; it is treated as model-level manual evidence, not evidence about MakeICT’s installed unit. Its specifications table reports 300 × 300 × 400 mm build volume, 12 V output, 270 W total power, one nozzle, bed maximum 100 °C, nozzle maximum 250 °C, filament detector, and dual Z. The same manual warns hardware/software may differ.

On p.4 (PDF p.9), the connection illustration identifies X/Y/Z/E stepper groups and X/Y/Z limit-switch groups. It describes stepper connections as 6-position, 4-wire and limit-switch connections as 3-position, 2-wire, matched by yellow labels. The motor and limit plugs are shown as white rectangular housings. A separate photo labels circular control-box ports as aviation connectors; it does not identify the motor or switch plug series. The manual does **not** supply cavity numbering or viewing orientation, stepper conductor-to-cavity or winding-pair maps, endstop polarity/NO-NC state, connector pin functions, board pinout, fitted unit revision, or SmoothieBox compatibility. The 33 visible schedule entries in the diagram are stable editorial form-slot indices, not source-assigned cavity numbers.

Source: [Creality CR-10 Series User Manual V5.1](https://agelectronica.lat/pdfs/textos/C/CR-10.PDF), local PDF SHA-256 `f2c57077a7158c3472125dff51fe3bf7c70402705a39d2f5437e7400833c8722`.

## Firmware pin maps are internal board references

The upstream Klipper file explicitly targets the 2017 CR-10S and assigns MCU pins to X/Y/Z/E motion, endstops, heaters, sensors, fan, and display functions. Creality's factory Marlin source selects a RAMPS 1.3 EFB logical board map and names the associated Arduino-style pins. These are firmware/controller assignments; they do not identify external harness cavities or prove the MakeICT machine has the referenced board. They are not machine-side connector contacts and are not routed to SmoothieBox in this diagram. Klipper’s bed section sets `max_temp: 130`, while the manual lists a 100 °C bed maximum; that firmware example threshold does not establish a higher machine operating rating.

Sources: [Klipper 2017 CR-10S configuration](https://github.com/Klipper3d/klipper/blob/master/config/printer-creality-cr10s-2017.cfg) (captured SHA-256 `a7dfd747aee1c874d9d73519777a78f4c9b2fbc00f2c31850fc64f09d1368cf3`); [Creality CR-10S firmware repository](https://github.com/Creality3DPrinting/CR-10S).

## Contact and route status

The diagram lists 24 nominal form slots across four manual-identified stepper groups (X, Y, Z, E) and 9 nominal form slots across three manual-identified limit-switch groups (X, Y, Z). The manual's counts describe connector forms; the displayed indices are editorial and do not establish individual installed cavities. Every cavity function and conductor identity remains OPEN. No SmoothieBox-to-machine edge is supported. In particular, the SmoothieBox MOTOR CONTROL terminals expose STEP/DIR/ENABLE logic, while CR-10S firmware references an integrated-driver controller. Do not connect the motor harness to these logic contacts or infer a replacement driver stage.

No source reviewed establishes contacts for the CR-10S motherboard's heater, bed, thermistor, fan, LCD, filament-sensor, USB, SD, or mains-power connectors as physical numbered pin maps. They remain outside the 33-contact manual diagram until revision-matched board evidence is available. The manual's mains selector warning is not authorization to handle mains wiring.

The MakeICT wiki is not a pinout source. Its equipment entry describes a retired unit and does not establish its current physical revision.
