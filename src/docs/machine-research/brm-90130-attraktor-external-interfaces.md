# BRM 90130 / Attraktor external-interface evidence

Checked: 2026-09-27. Atlas profile: `wiki-119`, Attraktor's BRM 90130 CO₂ laser cutter.

## Capture and scope

The model-level source is the BRM 90130 operating manual, Version 2, dated 2016-04-09 (the PDF prints `09-04-16`, pages 1–121). Captured PDF: `/tmp/atlas-brm-90130-manual-20260927.pdf`, SHA-256 `df498f827afdca3b15c0fe8e8bd2f05095441118e7b5be0475b6e500f113db30`. The page-specific text extraction is `/tmp/atlas-brm-90130-manual-20260927.txt`; it was used as a search aid and checked against rendered page images. Printed pages 26–29, 116, and 120 were inspected. The immutable consultation packet retains copies of the PDF and evidence text under `/home/arthur/dev/.astra-calls/attachments/2026-09-27_05-11-59-brm-90130-interfaces/`.

The machine-specific source is Attraktor's current [Lasercutter page](https://wiki.attraktor.org/Lasercutter), accessed 2026-09-27. It identifies the machine as a BRM 90130 and records that its 150 W tube and matching power supply were replaced in 2024. The page also contains older 100 W/150 W descriptions; those model/history statements are not a pinout and must not overwrite the dated replacement fact. The live page is identified by its URL and access date; no local raw-response hash is claimed.

The manual is a model-level installation guide, not proof that every option is fitted to Attraktor's machine. The Attraktor page establishes the 2024 tube and matching-PSU replacement, but it does not expose their electrical terminals, cable contacts, or signal assignments.

## External connection evidence

- **Chiller and laser cooling:** printed p. 26 shows two coolant hoses and one alarm cable between the laser and cooler. Laser water outlet goes to cooler water inlet; cooler water outlet returns to laser water inlet. Printed p. 27 says the cooler alarm signal indicates adequate cooling; if flow/cooling fails, the signal stops and the laser does not cut for safety. Neither page assigns connector contacts, polarity, voltage, or a SmoothieBox input. Keep the existing chiller safety dependency intact; do not replace it with a GPIO route.
- **Air compressor:** printed p. 27 says the compressor uses a rear machine power outlet and the rear air-supply connection, after which air is routed internally to a valve at the laser head. The manual does not number contacts or provide a compressor control pinout. Fitted compressor identity and connector details at Attraktor are not established by this model-level statement.
- **Exhaust / BOFA:** printed p. 28 documents the machine's rear air outlet for an exhaust fan or optional BOFA filter and a rear 230/240 V, 50 Hz power socket for the extractor. These are separate process-air and mains-power interfaces; the mains outlet is not a SmoothieBox motor or GPIO terminal. The exact outlet pin schedule and installed extractor model are not given.
- **Side-panel controls and host connections:** printed p. 29 identifies three USB ports for PC, UDisk, and mouse, plus an Internet/network port. The illustration labels the visible receptacles `Internet`, `UDisk`, `Mouse`, and `PC`; it also labels an emergency-stop button and its reset. These are source-visible interface/control identities, not contact schedules. The manual does not publish a BRM-specific pin map or identify the installed controller's internal wiring. Do not infer controller signals, USB pin assignments, network pair roles, orientation, emergency-stop wiring, or an installed cable from the photograph alone.
- **Internal electrical schematic:** printed p. 120 is titled `Elektroschaltplan` and is a low-resolution power/electrical schematic. The manual says more circuit diagrams are available on request. This does not provide an external low-voltage connector pinout and does not authorize converting internal mains, laser-power, or safety circuitry into SmoothieBox routes.

The manual's external-equipment descriptions justify nine source-reference cards: the chiller alarm; the two-hose coolant loop; compressor air inlet; shared extraction duct; one aggregate rear-accessory-mains card for the two outlets; and the four labeled PC, UDisk, Mouse, and Internet side-panel ports. The card count is an editorial grouping, not a count of electrical connectors. The p. 29 emergency-stop and reset labels are control identities, not a published external connector map, so they remain in the article narrative rather than as a machine-peripheral card. The 2024 tube/PSU replacement is machine-revision context, not an externally mapped peripheral. They do not justify numbered machine contacts or wire routes. The current profile sources do not establish stepper-driver terminals, a spindle connector, a laser-PSU control terminal map, an E-stop pin map, or a fitted harness contact schedule. Those remain OPEN. No dotted GUESS route is justified by the available pin-level evidence.

## Diagram treatment

The `wiki-119` primary SVG retains all named SmoothieBox exterior contacts and presents only machine interfaces supported above. Machine-side pin/contact numbers and signal labels are shown only when a source supplies them; otherwise the card states that the contact map is not published. No route is drawn where either endpoint or its interface qualification is unknown. The prior diagrams and contact schedules remain in their existing collapsed disclosure. No DB25 machine-side connector is identified in these sources.

## Sources

- Attraktor, [Lasercutter](https://wiki.attraktor.org/Lasercutter), current machine identity and 2024 tube/PSU replacement statement, accessed 2026-09-27.
- BRM, [90130 operating manual, Version 2](https://wiki.attraktor.org/images/5/59/BRM_90130_Gebrauchsanleitung.pdf), dated 2016-04-09; printed pp. 26–29, 116, and 120 inspected. Captured-file SHA-256 is recorded above.
- The Attraktor page links a China service manual at `https://wiki.attraktor.org/images/4/46/BRM_90130_Maintaince_manual.pdf`. Retrieval was denied by that source site's robots.txt in the permitted access path. Its content was not inspected, bypassed, or replaced with a mirror; no fact is inferred from it.
