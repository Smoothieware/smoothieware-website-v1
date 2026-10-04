# LumenPnP

**Evidence depth:** dual-nozzle benchtop pick-and-place machine. The identity and catalogue facts below come from Appropedia. Supplemental generation and electrical-architecture constraints come from the machine manufacturer and are listed separately.

## Wiki-supported identity and facts

The wiki catalogue identifies Opulo, describes dual nozzles, and lists a maximum PCB size of 225 × 400 mm. It records OSHWA UID US002570.

## Use, visuals, and electrical connections

The captured wiki catalogue row does not provide a machine-specific operating procedure, connector table, electrical pinout, or transcribable wiring diagram. Opulo's official documentation separates OpenPnP configurations for LumenPnP v2, v3, v4.0 and v4.1, and says the semi-assembly guide applies to v3 while v2 uses separate instructions. The current software-update page identifies v4.1 as the current release. The official design-decisions document says v4.0 drives its two Y motors independently and lists motherboard functions such as motion, pumps/valves, vacuum sensing, RS-485 feeders and AUX. These establish meaningful generation differences and system-level functions, but they do not by themselves provide a complete machine-side connector/contact map.

| Official source | Source-scoped fact | Wiring limit |
|---|---|---|
| [Opulo software updates](https://docs.opulo.io/software-updates/) | Distinct generation-matched OpenPnP configs for v2, v3, v4.0 and v4.1; v4.1 identified as current on the captured page. | Software configurations are not pinouts. |
| [Opulo semi-assembly guide](https://docs.opulo.io/semi-assembly/) | Guide scope is a v3 machine; v2 uses separate instructions. | Do not infer local build generation. |
| [LumenPnP design decisions](https://github.com/opulo-inc/lumenpnp/blob/main/DESIGN_DECISIONS.md) | v4.0 independently drives the two Y motors; motherboard architecture includes motion and process/accessory functions. | Functional architecture only; no individual connector contacts transcribed here. |

Schematics are linked from the project repository/release records, but the Appropedia entry does not identify the local machine generation and no exact local revision has been established. Do not combine v2/v3/v4 documents or draw a generation-specific connector map until the target build is identified and the matching schematic is visually traced.

## Source

- [Tolocar / Open Source Machine Tools — Appropedia wiki](https://www.appropedia.org/Open_Source_Machine_Tools) — machine catalogue entry.
- [Opulo software updates](https://docs.opulo.io/software-updates/), [semi-assembly guide](https://docs.opulo.io/semi-assembly/), and [LumenPnP design decisions](https://github.com/opulo-inc/lumenpnp/blob/main/DESIGN_DECISIONS.md) — manufacturer/project sources for generation distinctions and controller architecture.
