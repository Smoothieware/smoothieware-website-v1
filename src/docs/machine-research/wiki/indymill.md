# IndyMill CNC mill

**Profile scope:** the atlas entry identifies an IndyMill from a catalogue row; it does not identify a particular builder, controller, or build revision. This dossier separates that generic identity from the official Indystry IndyShield V2 reference design and from examples of other community builds.

## Catalogue identity

Appropedia's Open Source Machine Tools catalogue lists the IndyMill as belt-driven, with a 520 × 400 × 115 mm work area, a small Dremel-derived spindle, and 3D-printed parts. The local atlas row supplies no individual machine record or controller identification.

## Optional IndyShield V2 family reference

Indystry describes IndyShield as an Arduino Uno GRBL shield and publishes a V2 Eagle schematic/board archive. The archive's 2020-03-29 board design and its Eagle netlist can be paired with official GRBL's Arduino Uno CPU map to label the reference contacts. This is not evidence that an atlas machine contains that board or the listed wiring.

The reference schedule records 32 positions across the Eagle-design X/Y/Z four-position axis blocks; X/Y/Z two-position limit blocks; spindle-enable/PWM and spindle-direction blocks; and RESET, HOLD, START, COOL, and PROBE two-position blocks. The axis connector netlist maps contacts 1–3 to X/Y/Z STEP, DIR, and shared ENABLE respectively, with contact 4 GND. Limit contacts 1/2 are GND/signal; X/Y/Z use Uno D9/D10/D12 in the design's variable-spindle arrangement. Each other two-position control block uses contact 1 GND and contact 2 named signal. The contacts identify the design's screw-terminal nets, not a field-installed cable or mating-face view.

The official Indystry parts list also describes one IndyShield, four NEMA 23 motors, four DM542 drivers, an Arduino Uno, a 36 V 16.6 A supply, and a four-unit quantity for 4-pin connectors. That list does not reconcile cleanly with the published V2 schematic's three labeled X/Y/Z axis blocks. IndyMill's author documents later personal changes and many community variations. Therefore no fourth-axis port, dual-Y split, motor/driver assignment, controller replacement interface, voltage compatibility, or SmoothieBox route is inferred.

The design files are external-controller hardware. If such a shield is fitted, it belongs to the controller being replaced; the downstream driver inputs are the eventual machine-side target, but their exact fitted terminals and electrical levels remain unverified here. All reference positions remain OPEN.

## Sources

- [Tolocar / Open Source Machine Tools — Appropedia](https://www.appropedia.org/Open_Source_Machine_Tools) — catalogue identity and listed dimensions/components.
- [IndyMill project page — Indystry.cc](https://indystry.cc/indymill/) — official project parts list, description of the optional IndyShield V2 Eagle files, author's later upgrades, and community-build variability.
- [IndyShield V2 Eagle archive — Indystry.cc](https://indystry.cc/wp-content/uploads/2021/02/IndyShield-V2-indystry.cc.zip) — source schematic and board; retrieved archive SHA-256 `8329d78a960043433ad6c7f4119797e2d0658f5a1f09ea879495f05053ed8e87`.
- [GRBL Arduino Uno CPU pin map](https://github.com/gnea/grbl/blob/master/grbl/cpu_map.h) — STEP, DIR, enable, limit, control, probe, spindle and coolant MCU pin functions used to label the reference board nets.

**Unknowns:** individual machine builder/build revision, fitted controller and firmware, exact four-driver topology, fourth-axis/dual-Y wiring, limit-switch configuration, spindle interface, safety button and enclosure wiring, and electrical compatibility with SmoothieBox.
