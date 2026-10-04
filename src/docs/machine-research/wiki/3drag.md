# 3Drag FFF printer

## Identity

The RepRap wiki identifies the Futura Elettronica/OpenElectronics 3Drag printer, release version 1.0. The structured specification calls its model “Mendel”; 3Drag is the named machine identity used here.

## Wiki evidence

- [RepRap 3drag](https://www.reprap.org/wiki/3drag): specifications, photos, assembly sequence, wiring, limit-switch calibration and firmware variants.
- [RepRap 3Drag controller](https://reprap.org/wiki/3Drag_controller): A4988 stepper-driver and schematic/driver-image discussion.

## Specifications and operation

The wiki lists a 200 × 200 × 200 mm envelope, four NEMA 17 steppers, 15 V/3 A maximum supply, FTDI USB-to-serial connection, 3 mm filament and nominal 120 mm/s speed. Its assembly chapters include Z limit installation, X/Y limit calibration and extruder-arm height adjustment. The page lists different display/controller variants, including no display, VM8201 and a RepRapDiscount full-graphic controller.

## Pinout and diagrams

The [RepRap assembly page's original connector/wiring diagram](https://reprap.org/mediawiki/images/7/71/Schema_collegamento.jpg) is a machine-side source image, not a controller pinout. Its rendered labels establish connector groups and functional paths, but it gives no numbered contacts or connector-face view.

| Diagram label / group | Source-supported relationship | Contact-level detail not established |
|---|---|---|
| X motor, Y motor, Z motor, E motor | Four separate motor cable groups connect to matching X, Y, Z and E motor outputs on the 3Drag controller. The assembly procedure describes 4-conductor, 0.5 mm² motor cable. | Coil/contact order, cavity numbering, phase polarity and connector view. Do not infer a motor pin order from the schematic's drawn wire colours. |
| X home, Y home, Z home | Three separate home microswitch cable groups are shown at the controller. Assembly text names each cable and says they connect to the board's pin strips. | Pin numbers, switch contact selection, active polarity and connector view. |
| Heated bed | A separate two-conductor path is drawn between the bed and board output. | Polarity, connector contact order and current rating. |
| Extruder heater and thermistor | The schematic shows separate extruder-heater and thermistor connections. The controller article documents two temperature-sensor inputs and MOSFET outputs for extruder and bed heaters. | Header contact numbers, thermistor curve, heater voltage/current and installed board revision. |
| Thermistor, fan | The schematic labels the thermistor and fan groups; the controller description documents a low-tension fan output. | Contact positions, fan voltage/current and sensor wiring order. |
| Power supply | A two-wire supply path feeds the board. The assembly page explicitly says to set the power supply to 15 V. | Board terminal polarity/contact view and exact supply/board revision. |
| PC USB | A USB cable connects the PC to the board's Mini-USB connector. The controller source identifies an FT232RL USB/serial interface used for programming and PC control. | USB connector contacts and any electrical protection details. |

The controller article identifies its own **release version 1.0** as an ATmega2560 board based on Sanguinololu, with up to four Pololu-compatible stepper drivers and A4988 driver circuitry described in its schematic section. That board architecture is not proof that every 3Drag machine uses this exact electronics revision: the printer page lists multiple display/controller options, including no display, VM8201 and a RepRapDiscount full-graphic controller. Keep those variants separate. No complete numbered machine-side or board-header contact map was recovered.

## Limits

The wiki's dimensional accuracy table contains an apparent Z-value anomaly; this dossier does not repeat it as a trusted performance figure.

The original wiring diagram's source page and image identify the depicted functional groups only; there is no labelled mating/board view. The source images were inspected directly from the linked wiki asset, but the exact physical installation and board revision of an individual 3Drag remain unverified. Do not draw or use this material as a reconnectable pin-by-pin map.

## Manufacturer controller reference — manual updated 20/06/2013

The earlier wiki-only snapshot above is retained. The manufacturer reference below adds contact marks and schematic locators for the existing 14 groups; it does not identify the controller fitted to an individual 3Drag or establish a reconnectable machine pinout. All entries remain OPEN, with no selected SmoothieBox endpoint and no proposed guessed connection.

The [official Futura manual](https://futuranet.it/futurashop/Allegato_PDF_IT/7350-3DCONTR-DRIVER.pdf) was inspected directly: printed p.2 covers the variants and ratings, p.3 the top view and board layout (§§3.1–3.2), pp.4–5 the circuit schematic (§4), pp.6–7 the wiring drawing (§5), and p.12 the update date 20/06/2013. This date identifies the document, not the installed board revision.

| Existing group | Supported reference entries | Roles and separate cable evidence | Still unknown |
|---|---|---|---|
| 001 · X motor harness | X-MOTOR: 1B, 1A, 2A, 2B — four board-header contacts | Post-driver winding outputs; p.6 draws four leads but no added X extension gauge. | Fitted motor-side cavities, phase/wire mapping and replacement driver interface. |
| 002 · Y motor harness | Y-MOTOR: 1B, 1A, 2A, 2B — four board-header contacts | Post-driver winding outputs; p.6 separately labels a 4 × 0.5 mm² extension. | Motor-side cavity order, winding mapping and fitted driver. |
| 003 · Z motor harness | Z-MOTOR: 1B, 1A, 2A, 2B — four board-header contacts | Post-driver winding outputs; pp.6-7 label the extension 4 × 0.5 mm². | Motor-side cavity order, winding mapping and fitted driver. |
| 004 · E motor harness | E-MOTOR: 1B, 1A, 2A, 2B — four board-header contacts | Post-driver winding outputs; p.7 labels a 4 × 0.5 mm² extension. | Motor termination, fitted driver and any SmoothieBox A-channel selection. |
| 005 · X HOME harness | XSTOP: +, S, - — three board contacts; separate switch: C, unlabelled middle lug, NC — three drawn lugs | Source header: JPV supply, input, ground. p.7 switch/cable: C/NC pair; 2 × 0.2 mm². | Individual lug-to-header continuity, middle-lug role, fitted switch, MIN/MAX selection and input conditions. |
| 006 · Y HOME harness | YSTOP: +, S, - — three board contacts; separate switch: C, unlabelled middle lug, NC — three drawn lugs | Source header: JPV supply, input, ground. p.7 cable: 2 × 0.2 mm² ultraflessibile. | Individual lug-to-header continuity, middle-lug role, fitted switch, MIN/MAX selection and input conditions. |
| 007 · Z HOME harness | ZSTOP: +, S, - — three board contacts; separate switch: C, unlabelled middle lug, NC — three drawn lugs | Source header: JPV supply, input, ground. p.7 cable: 2 × 0.2 mm². | Individual lug-to-header continuity, middle-lug role, fitted switch, MIN/MAX selection and input conditions. |
| 008 · Heated-bed cable | HEATER2: +, +, -, - — four header contacts | p.4: both plus contacts join +Vin; both minus contacts join the T3-switched node. p.6 draws two load conductors without a specified gauge. | Fitted bed option/firmware, load terminations, ratings and replacement switching/protection. |
| 009 · Extruder-heater cable | HEATER1: +, +, -, - — four header contacts | p.4: both plus contacts join +Vin; both minus contacts join the T2-switched node. p.7 cable: 2 × 1 mm². | Heater-end terminals, installed ratings and replacement switching/protection. |
| 010 · Extruder thermistor cable | THERM1: two unnumbered schematic contact circles | p.5: upper circle is PK5 sense; lower is ground. Two sensor conductors share the p.7 4 × 0.2 mm² cable with two fan conductors. | Physical cavity order, fitted sensor curve, continuity and replacement input/channel. |
| 011 · Bed thermistor cable | THERM2: two unnumbered schematic contact circles | p.5: upper circle is PK6 sense; lower is ground. p.6 draws two sensor leads; no gauge is borrowed from the other sensor/fan cable. | Physical cavity order, fitted bed sensor/curve, continuity and replacement input/channel. |
| 012 · Fan cable | FAN: +, - — two board contacts | p.4: plus is +Vin; minus is T1-switched. p.7 describes a 12 V / 100 mA fan; two fan wires share the extruder-sensor four-core cable. | Installed fan/voltage, actual rail, load compatibility, continuity and replacement switching. |
| 013 · Controller power cable | PWR/+, PWR/- — two contacts; separate alternative PL1 + and - — two schematic symbols | p.2 identifies alternative input arrangements; p.6 shows a center-positive 5.5 × 2.1 mm plug. PWR names the connector. | Selected feed, actual jack footprint/switch contacts, installed polarity, supply/protection and SmoothieBox power interface. |
| 014 · PC USB link | USB schematic positions 1, 2, 3, 5 — four explicitly drawn positions; position 4 omitted | p.5: 1 supply, 2 U3 DM, 3 U3 DP, 5 ground. p.6 depicts the Type-A-to-Mini-USB cable. | Full physical connector implementation, omitted position 4, shield/cable continuity and SmoothieBox service interface. |

### Contact representation and route decision

The inventory contains 56 individually represented reference entries on 18 cards: 16 motor-output contacts, 9 board HOME contacts, 9 separately drawn switch lugs, 8 heater contacts, 4 thermistor circles, 2 FAN contacts, 2 PWR contacts, 2 alternative PL1 symbols and 4 explicitly drawn USB positions. These are not 56 verified physical contacts on the fitted printer. Three switch middle lugs have source_unlisted roles. Cable-core counts create no extra connector contacts or numbered cores.

Motor 1B/1A/2A/2B contacts are post-driver winding outputs. They must not be equated with SmoothieBox STEP/DIR/ENABLE inputs. Board HOME S and ground are source-circuit roles; no individual C/NC lug-to-header relationship or SmoothieBox MIN/MAX choice is selected. JPV-selected supply is recorded as a source reference, without asserting the installed voltage. NC means normally closed at the switch; atlas OPEN means no selected route.

Repeated heater marks remain +, +, -, -. The identifiers upper +, lower +, upper -, lower - are unique p.4 schematic locators, not silkscreen numbers or physical cavities. THERM1/THERM2 upper circle and lower circle are p.5 schematic locators for unnumbered symbols. Header mark listing order is not the physical mating view.

HEATER1 is the extruder output and HEATER2 the heated-bed output. Four header contacts remain listed even when the load cable has two conductors. FAN+ is connected to +Vin in the schematic; the separate 12 V / 100 mA accessory description does not prove a regulated 12 V rail. PWR is a connector name; its source marks are + and -. PL1 is an alternative supply input; no simultaneous PWR/PL1 feed is selected or additional jack-switch contacts inferred. USB position 4 is omitted by this schematic, not declared NC; no full physical Mini-USB cavity inventory is claimed.

Choose no guess for any of the 56 entries. The source supplies no jointly qualified reference endpoint, installed harness and complete SmoothieBox electrical endpoint. The violet dotted GUESS legend stays visible; there are zero route instances. No DB25 is evidenced in this scoped inventory. ICSP, configuration/programming jumpers, expansion contacts and driver-module sockets are outside this audit of the existing 14 groups; it is not a complete controller netlist.

### Source boundaries and remaining qualification

The manual distinguishes 3DCONTR-DRIVER from 3DCONTROLLER without driver modules and says the bed option is not factory-enabled in either. Do not transfer this inventory to an unidentified Sanguinololu, VM8201, display or other board variant. The earlier wiki 15 V / 3 A specification and the manufacturer controller recommendations of 15 V / 5 A without a bed and at least 10 A with a bed are separate source scopes. Neither establishes the installed supply.

The [Futura product page](https://futuranet.it/prodotto/controller-con-driver-per-stampante-3drag/) identifies SKU 7350-3DCONTR-DRIVER under Descrizione. Its + e PWR wording is retained as a source discrepancy, not used as a third contact or negative-contact mark; manual pp.2–4 establish PWR/+ and PWR/-. The manual says supplied drivers are calibrated, while the product page says calibration is needed before use. Neither statement proves the fitted adjustment. The [manufacturer circuit article](https://www.open-electronics.org/a-new-board-for-the-3drag-theres-more-than-sanguinololu/) under The diagram independently distinguishes motor winding outputs from STEP inputs and identifies HEATER1/extruder, HEATER2/bed, THERM1/extruder sensor and THERM2/bed sensor. The [RepRap assembly](https://www.reprap.org/wiki/3drag) and [controller page](https://reprap.org/wiki/3Drag_controller) provide machine/variant context; cable counts are not numbered-cavity evidence.

Before any physical wiring, identify the fitted controller and options, obtain actual connector and cable views, measure continuity, identify motor windings and the replacement-driver interface, qualify heater/fan loads and protection, confirm complete thermistor curves and input conditions, select one power arrangement, and obtain the complete SmoothieBox electrical contract. Contact facts remain source references until those requirements are met.

### Atlas acceptance checks

- Apply only this profile increment after comparing the exact baselines and reviewing the patch; preserve all unrelated working-tree changes.
- Regenerate only wiki-109 with the existing generator and check 18 reference cards, 56 individual entries, 56 OPEN positions, zero guessed routes, all 82 exterior contacts and four service ports. Check each mark/locator and source scope, including the three source_unlisted switch lugs.
- Confirm all 14 graph aliases retain their original identities/names and the original graph is untouched. Do not drop any earlier connector or use cable counts to add contacts.
- Confirm this full dossier matches the displayed dossier, all 330 article identities remain, and the other 329 article bytes are unchanged. Inspect the current figure and closed histories with fullscreen, zoom and pan.
- Confirm the earlier primary SVG archive is byte-identical with SHA-256 3fdbf3fa10b81ff9470842e9bc5242a4f3e29f082a1a4b4636020eedd86fe63d, and the earlier 227-contact SVG remains byte-identical with SHA-256 5fc83fc5e16cbe3c5f416895c854387015a204ec65b69f4cf5f7c98acf39816c.
- Check source links and the already-authorized automatic publication. Local generation, publication and installed electrical qualification are separate acceptance stages.

