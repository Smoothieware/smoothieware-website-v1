# PrintNC

**Evidence depth:** CNC mill; steel-frame gantry design. Machine identity and dimensions come from the Appropedia wiki entry. A separate official PrintNC v3 guide is retained below as a design reference, not evidence of this catalogue machine's installed electronics.

## Wiki-supported identity and facts

The wiki catalogue lists a nominal 1200 × 900 mm format with variable sizing, a steel frame, and 3D-printed parts. It also notes that some source files are missing from the listed source set.

## Use, visuals, and electrical connections

The captured wiki catalogue row does not provide a machine-specific operating procedure, connector table, electrical pinout, or transcribable wiring diagram for this model. Those items are recorded as unknown, rather than inferred from the model name or from the page's external links. The v3 design reference below does not resolve the catalogue row's build revision or fitted controller.

## Supplemental PrintNC v3 wiring reference

The official, archived [PrintNC v3 wiring guide](https://wiki.printnc.info/en/v3/wiring-archived#breakout-board-to-stepper-driver) describes an example breakout-board-to-external-driver arrangement. It names four driver channels: X, first Y, second Y (A), and Z. For each channel the guide names `PUL+`, `PUL−`, `DIR+`, and `DIR−` on the driver; its example connects the breakout board's 5 V to `PUL+` and `DIR+`, its axis clock output to `PUL−`, and its axis direction output to `DIR−`. The guide separately names driver `VCC` and `GND` power terminals and `A+`, `A−`, `B+`, and `B−` motor terminals. It presents a VFD/spindle example and directs readers to the actual VFD manual for that device's wiring.

These are **source-scoped v3 reference terminal names**, not contact numbers or a mating-face view. The archived guide itself says its information is somewhat outdated and points readers to Discord for current wiring information. PrintNC is a configurable build, and the Appropedia catalogue row does not establish that its machine uses this v3 arrangement, driver model, breakout board, or VFD. The guide's common-positive 5 V example also does not prove that SmoothieBox step/direction output polarity, drive strength, protection, supply, or returns are compatible. No direct SmoothieBox route is established from these reference terminals.

## Source

- [Tolocar / Open Source Machine Tools — Appropedia wiki](https://www.appropedia.org/Open_Source_Machine_Tools) — machine catalogue entry.
- [Wiring the PrintNC — archived v3 guide](https://wiki.printnc.info/en/v3/wiring-archived) — reference driver-channel and terminal names; not evidence of the catalogue machine's installed controller or a SmoothieBox interface.
