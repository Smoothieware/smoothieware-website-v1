# Shapeoko 2 CNC router

## Identity and revision boundary

The RaumZeitLabor wiki identifies its machine as an Inventables Shapeoko 2. Its pinned machine page is revision 16813 (last edited 2024-08-16); this is historical shop documentation, not proof of the machine's current fitment. Do not transfer facts from Shapeoko 3 or other generations.

## Sources

- [RaumZeitLabor Shapeoko 2, pinned revision 16813](https://wiki.raumzeitlabor.de/index.php?title=Shapeoko_2&oldid=16813): machine workflow, fitted equipment as documented, machine cable-core table, sensor-socket contacts, and installation caveats.
- [RaumZeitLabor TinyG settings, pinned revision 16658](https://wiki.raumzeitlabor.de/index.php?title=Shapeoko_2/tinyg_settings&oldid=16658): archived configuration dump dated 2016-11-08.
- [RaumZeitLabor main page](https://wiki.raumzeitlabor.de/wiki/Hauptseite): workshop machine index.

## Machine-side equipment and operating context

The source describes a 300 W Quiet Cut spindle and says TinyG can command spindle speed and on/off through G-code. It does not give the spindle's external contact schedule, control voltage, power wiring, or a SmoothieBox interface. Keep spindle contacts and routes OPEN.

The equipment list includes a machine emergency-stop pushbutton, while the same page's planning list says “emergency-stop button at the machine!” The page does not resolve whether this records installed or planned hardware. No electrical contacts, safety circuit topology, or interlock behavior are documented; do not connect it to a logic input or infer a power cut-off path.

The equipment list reports eight microswitches used for homing/endstops. It does not assign all eight to locations or contacts. The sensor-socket table below identifies six signal positions, and the settings dump configures an A-min homing switch without identifying its physical connector. Preserve these as distinct evidence with no invented switch map.

Other source-scoped context: TinyG controller; 260 × 275 × 70 mm working area; ACME Z-axis upgrade; two drag chains. These facts do not establish current unit state.

## TinyG configuration snapshot (2016-11-08)

The linked configuration dump identifies TinyG ID `3X3566-JL2`, firmware build `440.20`, firmware `0.97`, hardware version `8.00`, normally closed switch type (`st=1`), USB baud selector 5 (115200), and `enable flow control=0` (off). The machine page separately describes 115200 8N1 as its serial default with hardware flow control; that generic statement and the later saved configuration differ. For this named dump, report flow control as off; do not apply it to an unverified current controller.

The saved axis settings assign X-min and Y-min as limit+homing, X-max and Y-max as limit-only, Z-min off, Z-max homing-only, A-min homing-only, and A-max off. This is firmware configuration, not a physical pinout. It confirms neither the eighth-switch mapping nor any separate A-min wire. The machine's source-labeled socket assigns contact 7 to dual-use “Z min / probe”; because the saved setup disables Z-min, this signal stays OPEN in the diagram. The five unambiguous X/Y min/max and Z-max labels are eligible only for dotted function guesses to corresponding SmoothieBox endstop signal contacts; their electrical pairing and compatibility remain unverified.

## Pinout: source-labelled physical/cable positions

The wiki numbers the individual conductors printed on the drag-chain motor cable. These are **cable-core numbers**, not positions in a motor connector housing. The general cable order is:

| Cable core | Colour | Source motor role |
|---:|---|---|
| 1 | red | B1 / B+ |
| 2 | blue | B2 / B− |
| 3 | green | A1 / A− |
| 4 | black | A2 / A+ |

The source separately labels the X-stepper exception: 1 green A1, 2 red B1, 3 black A2, 4 blue B2. It also warns that green and black are swapped on the **left Y stepper**; the exact resulting contact/core mapping is not tabulated. Do not use either table as a universal coil-colour convention or as the SmoothieBox driver input schedule.

The sensor connector is labelled as a **socket rear view**:

| Contact | Signal | Wire colour |
|---:|---|---|
| 1 | GND | brown |
| 2 | X endstop min | white |
| 3 | X endstop max | grey |
| 4 | Y endstop min | yellow |
| 5 | Y endstop max | green |
| 6 | Z endstop max | pink |
| 7 | Z min / probe | violet |
| 8 | unused | blue |

These are source labels for the documented installation, not confirmation that a present unit still uses that socket. Motor connector housing/view, left-Y resulting core map, endstop common/return topology, voltage levels, switch circuit and current installed revision remain unverified. The general eight-microswitch count and TinyG A-min configuration cannot safely be reconciled to the six socket signal labels from this source alone.

## Connection decision

The five dotted routes in the diagram are function guesses only: X min, X max, Y min, Y max, and Z max signal-to-signal. They are not installed wiring. Sensor-socket GND, dual-use Z-min/probe, unused contact 8, the TinyG A-min configuration, all stepper cable cores, spindle control/power, and emergency-stop wiring remain OPEN. The shared sensor GND is not fanned out to SmoothieBox GND contacts because return wiring, board reference, connector voltage, and protection have not been established.

## Limits

The wiki is historical; it does not prove that this installation remains active. It gives no complete TinyG connector schedule, spindle contacts or ratings, motor connector mating view, E-stop circuit, or present revision. No DB25 is identified in the inspected Shapeoko 2 sources.
