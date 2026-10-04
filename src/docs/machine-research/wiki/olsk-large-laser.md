# OLSK Large Laser

**Evidence depth:** CO2 laser cutter. This dossier is grounded in the Appropedia wiki entry only; references from that page to vendor, GitHub, or other non-wiki pages were not used as evidence.

## Wiki-supported identity and facts

The wiki catalogue identifies Inmachines and lists a 1000 × 700 mm format with a 75 W CO2 laser.

## Use, visuals, and electrical connections

The captured wiki catalogue row does not provide a machine-specific operating procedure, connector table, electrical pinout, or transcribable wiring diagram for this model. Those items are recorded as unknown, rather than inferred from the model name or from the page's external links. The source may link further documentation, but that non-wiki content is outside this source-only research scope.

## Source

- [Tolocar / Open Source Machine Tools — Appropedia wiki](https://www.appropedia.org/Open_Source_Machine_Tools) — machine catalogue entry.


## Original-project source addendum — 2026-09-23

The [OLSK Large Laser V1 Board2022 schematic](https://github.com/Open-Lab-Starter-Kit/OLSK-Large-Laser/blob/main/OLSK_Large_Laser_V1/OLSK_Large_Laser_V1_Wiring%20Schematic_Board2022.pdf) is a one-page drawing whose PDF metadata creation date is 2024-04-25. It depicts X/Y drivers and endstops, a window sensor, chiller sensor, laser power supply, emergency and mains/power circuitry. The laser-supply block uses printed terminal labels including `5V`, `IN`, `G`, `P`, `L`, `H`, `N`, `V+` and `V−`. The motor-driver drawing uses `PUL±`, `DIR±` and `ENA±` terminal names.

Those labels describe the schematic's terminals and nets; they are not numbered connector contacts and do not identify a physical mating view. The source filename says `Board2022`, while the PDF metadata date is 2024; treat this as a named V1 design reference, not as proof of a particular board or local build. The Appropedia 75 W / 1000 × 700 mm catalogue values remain catalogue claims.

The original [OLSK Large Laser V1 README](https://github.com/Open-Lab-Starter-Kit/OLSK-Large-Laser/blob/main/OLSK_Large_Laser_V1/README.md) and the separate current-generation project files should be checked before selecting a design revision. No installed hardware, connector-face orientation, or complete machine terminal map is established here.


### V1 controller-source conflict

The [V1 README](https://github.com/Open-Lab-Starter-Kit/OLSK-Large-Laser/blob/main/OLSK_Large_Laser_V1/README.md) describes its controller as MKS-SBASE with grbl-LPC, but its firmware link is named `grblHAL_Teensy4_OLSK_Large_Laser.zip`. Together with the `Board2022` filename and the schematic PDF's 2024-04-25 metadata date, this leaves the controller/firmware-to-schematic relationship unresolved. Keep the diagram and firmware claims revision-labelled; do not infer a single verified V1 electronics build from these references.


## Contact-level source reconciliation — 2026-09-28

This section supersedes the earlier wiki-only scope statement above. The machine diagram uses the official [OLSK Large Laser V1 Board2022 wiring schematic](https://raw.githubusercontent.com/Open-Lab-Starter-Kit/OLSK-Large-Laser/main/OLSK_Large_Laser_V1/OLSK_Large_Laser_V1_Wiring%20Schematic_Board2022.pdf) and the separate [OLSK Electronics repository](https://github.com/Open-Lab-Starter-Kit/OLSK-Electronics) design reference `OLD/Laser_Controller_Shield_V1-0/Schematic_Laser_Controller_Shield_V1-0.pdf`. The repository README names Laser Controller Shield V1.0 as the board used in OLSK Large Laser V1 and OLSK Small Laser V2; the shield PDF itself is revision 1.0, dated 2022-09-19, and names InMachines Ingrassia GmbH. The shield sheet shows four CN1 positions labelled X_Step, X_Dir, and GND; four CN2 positions labelled Y_Step, Y_Dir, and GND; and three CN3 positions labelled Laser_In, Laser_En, and GND. It also shows a Teensy 4.1, an ATtiny45, and a relay. These are reference design contacts only. The separate machine schematic does not identify these CN connectors or prove that this shield is the controller shown or installed. In particular, do not resolve the MKS-SBASE / grbl-LPC versus Teensy / grblHAL source conflict by combining the sheets.

The machine-sheet X and Y driver blocks each print the terminal marks `B-`, `B*`, `A-`, `A*`, `VCC`, `GND`, `COM-`, `BRK`, `ALM`, `ENA-`, `ENA+`, `DIR-`, `DIR+`, `PUL-`, and `PUL+`. A separate unidentified 12-position block prints `VCC`, `GND`, `A+`, `A-`, `B+`, `B-`, `PUL+`, `PUL-`, `DIR+`, `DIR-`, `ENA+`, and `ENA-`; it is not silently identified as either the controller shield or another driver. The depicted laser PSU has three `V+` and three `V-` terminal marks, plus `GND`, `N`, `L`, and low-voltage `5V`, `IN`, `G`, `P`, `L`, `H` positions. A separate seven-position supply row is marked `L`, `N`, `GND`, two `V-`, and two `V+`; another unnamed supply block shows `N`, `L`, and `GND`. The power plug nets are marked `L`, `N`, and `Earth`. A three-position chiller-sensor connector is marked 1, 2, 3; the drawing wires positions 1 and 3 and shows no conductor at position 2. The X and Y endstop symbols each show two switch leads without electrical functions or connector-face numbering. The window sensor also shows two conductors without functions or numbered contacts. The sheet marks a logic cable as 3 core plus grounded shield, a second cable as 2 core plus shield, and one unlabelled six-position plug; it does not give individual functions or a mating view for those items. USB is shown without a transcribed pin schedule.

The shield schematic’s source-numbered external connectors are transcribed separately: CN1 pins 1–4 are `X_Step`, `GND`, `X_Dir`, `GND`; CN2 pins 1–4 are `Y_Step`, `GND`, `Y_Dir`, `GND`; CN3 pins 1–3 are `GND`, `Laser_En`, `Laser_In`; U6 pins 1–4 are `GND`, `GND`, `VIN(12V)`, `VIN(12V)`. Its X-STOP connector pins 1–3 are `VIN(12V)`, `X_Stop`, `GND`; Y-STOP pins 1–3 are `VIN(12V)`, `Y_Stop`, `GND`. These are shield-design contacts, not proof of sensor or driver harnesses on the separately drawn machine. In particular the three-pin 12 V STOP inputs do not resolve the two-lead endstop symbols in the machine wiring sheet. Across the 22 catalogued groups, source-named contacts and editorially indexed but function-unknown positions remain separately marked; the drawing does not join the shield and machine sheet as one harness.

The diagram assigns no SmoothieBox-to-mains, high-voltage, laser-enable, fire, water-protection, sensor-ground, or otherwise unqualified controller route.

The machine wiring PDF was captured at SHA-256 `80d9ac5405e785f9cae2eb428524cca1c7ac7bd29f486c3c4a7c3b1dc17e8735`; its metadata creation date is 2024-04-25. The shield schematic PDF is at repository revision `main` under `OLD/Laser_Controller_Shield_V1-0`; its downloaded bytes are not treated as an immutable installed-board record. A 2025 Small Laser V2 paper discusses signal conversion and delayed laser enable for that distinct model; those claims are not applied to the Large Laser V1 as-built configuration.


## Visual transcription correction — 2026-09-28

This correction supersedes the 22-group / 113-position transcription above. In the one-page Board2022 drawing, the fan-equipped enclosure with nine terminals (`V+` three times, `V-` three times, `GND`, `N`, `L`) is drawn separately from the far-right laser PSU. The far-right enclosure carries both the six-terminal `5V`, `IN`, `G`, `P`, `L`, `H` control block and its three-terminal `N`, `L`, `GND` mains block. These are distinct drawn blocks, not duplicate views of one terminal bank. The nine-terminal supply's model, output voltage and rating are not printed; its `V+` / `V-` labels must not be identified as the laser high-voltage output. The existing catalog group IDs are retained for traceability, with their names and scopes corrected.

The chiller-sensor drawing labels only two leads, `1` and `3`. It does not depict or print contact `2`, a three-position connector body, or an NC contact. The earlier position-2 entry is withdrawn. The unidentified six-position-plug entry is also withdrawn: no source location or connector identity establishes that six-contact claim. The upper horizontal features show repeated rectangular marks and two wired edge pads; those repeated marks are not a numbered contact schedule. The controller's lower edge instead depicts two separate three-position headers. Neither observation establishes the earlier single six-position plug.

After those two withdrawals, the retained catalog contains 21 groups and 106 reference positions: 85 positions in 15 machine-sheet groups, including its empty USB reference group, plus 21 positions in six separately sourced shield field-connector groups. Across both references, 93 positions use printed source marks and 13 are explicitly editorial lead/conductor references. These totals describe the retained reference inventory; they do not establish a complete physical machine contact map. The machine drawing's unnamed controller terminals, other depicted component leads and the shield's board-local programming/test contacts still lack a reconciled field inventory. Shield J1 is a six-contact ISP programming interface and J2 a two-pad solder-jumper; neither is part of the 21-contact shield field-connector subtotal.

Shield CN1 `X_Step` / `X_Dir` and CN2 `Y_Step` / `Y_Dir` connect to the Teensy's controller GPIO nets in this reference design. They are intended controller outputs, so a SmoothieBox step/direction output must not be proposed as a direct connection to them. CN3 `Laser_En` is also a controller command net, and `Laser_In` is a relay-gated signal from the shield's conversion circuit; its name does not make it an input for another controller. No output-isolation or controller-replacement arrangement is established. Every retained position remains OPEN and zero candidate routes are selected. The printed driver `PUL±` / `DIR±` labels suggest possible command functions, but do not select a polarity, current, return, input topology or qualified SmoothieBox terminal route.

Captured reference identities: the machine PDF SHA-256 is `80d9ac5405e785f9cae2eb428524cca1c7ac7bd29f486c3c4a7c3b1dc17e8735` at OLSK-Large-Laser commit `408791d663b78f78765e9174be382254046eba8c`; the shield PDF SHA-256 is `1a17338a546db27189b6350798b9ae7e262954ab4b72b534885196136d957227` at OLSK-Electronics commit `71206ee216746f52b813f2e888df25521233dc98`. These immutable design-reference captures establish neither fitted hardware nor a shared as-built harness.
