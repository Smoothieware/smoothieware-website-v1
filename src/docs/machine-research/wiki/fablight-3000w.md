# 3D FabLight 3000 W sheet-metal laser

## Identity

Artisans Asylum's wiki identifies a 3D FabLight sheet-metal laser, model recorded as “3,000 Watt,” serial 30450. That model field is a power designation in the wiki, not a conventional alphanumeric model number.

## Wiki evidence

- [Artisans Asylum 3DFabLight page](https://wiki.artisansasylum.com/wiki/3DFabLight): machine identity, supported sheet materials/thicknesses, operation prerequisites and startup sequence.
- The page says the machine cuts thin sheet metal using a laser and air pressure. It requires both AC plugs, shop air, extraction, a closed door, released E-stop and homing before jobs.
- Its material restrictions explicitly exclude stainless steel, galvanized/painted/coated stock and all non-metals, with fume/fire warnings.

## Operation and visuals

The wiki directs operators to its operation manual and FabCreator instructions. It describes the offline → initialized → machine-not-homed → homed state sequence. The wiki page includes machine/control imagery; it does not provide an electrical connector map in the reviewed text.

## Pinout

The inspected Artisans Asylum page does not publish a controller pinout or numbered signal assignment. A manufacturer-authored FabLight Operator's Manual v4.3 (2021) for the 1500/3000/4500 family documents the Utility Panel and I/O controls. This is family-reference evidence only: the local wiki identifies serial 30450, but does not establish that its fitted panel/revision matches the 2021 manual.

### Family-level external interface references

- The manual's Utility Panel image labels MAIN POWER, ETHERNET, GAS IN, GAS EXHAUST, VACUUM, and VACUUM POWER. It describes 3/8-inch tubing connectors for gas input and regulator exhaust, and a rear exhaust-duct port.
- The supplied VACUUM cord has a C14 machine end and a NEMA 5-15R receptacle, so the family manual implies a C13 appliance outlet at the labelled VACUUM position. The VACUUM POWER cord has a C13 machine end and a NEMA 5-15P wall plug, implying a C14 appliance inlet. These are deductions from the cord ends and IEC appliance-coupler relationship, not verified fitted connectors on serial 30450.
- The C13/C14 reference contacts are labelled L (line), N (neutral), and PE (protective earth), following Interpower's C13 terminal drawing and the IEC 60320 appliance-coupler scope. The drawing records functional terminal identities only; it does not claim a mating-face order or local cable continuity.
- The manual describes MAINS and ON indicators, a momentary key switch, and an Emergency Stop. These controls belong to the machine's existing control/safety system; they are not external SmoothieBox pin assignments. No safety bypass or machine-control retrofit is proposed.
- The machine-side graph contains these family reference groups and six named IEC positions. Every machine route remains OPEN, and no dotted connection guesses are warranted by the sources.

### Sources

- [FabLight Operator's Manual v4.3 (2021), pages 15-18](https://maker-hub.georgefox.edu/w/images/5/51/FabLight_Operator_Manual_v4.3.pdf). The downloaded PDF's metadata title says v4.2, while the printed page footers say v4.3; the family, port, and control statements cited above are visible in those printed pages.
- [Interpower IEC 60320 C13 connector drawing, form 83012521](https://www.interpower.com/docs/wi83012521.pdf), revision 12-1-2023, assigns neutral to N, earth to the center marked terminal, and line to L.
- [IEC 60320-1:2015](https://webstore.iec.ch/en/publication/22762), general requirements for appliance couplers and appliance inlets/outlets. The catalog page notes a newer 2021 edition; this dossier uses it only for terminology/scope, not as evidence of the machine's installed connector.

Retrieved PDF SHA-256 values (temporary research copies): FabLight family manual `ed51ae09e8470dbcc72c0ef5314c72e6f0cbc63b1dd0b1485da27b3a65272673`; Interpower C13 drawing `ed4075a1a8e7fb10fdf3e3adfe1c9c139eeccad1b0449b4a792699d665c5990e`.

## Scope

This is industrial sheet-metal laser equipment and a distinct machine class from the CO₂ gantry cutters elsewhere in this research set.
