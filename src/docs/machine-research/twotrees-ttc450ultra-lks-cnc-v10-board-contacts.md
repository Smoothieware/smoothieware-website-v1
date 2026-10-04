# TwoTrees TTC450Ultra LKS CNC V1.0 board contacts

Research capture: 2026-09-26. Atlas profile: `primary-twotrees-ttc450ultra`. The [TwoTrees TTC450Ultra motherboard page](https://wiki.twotrees3d.com/zh/CNCEngravingMachine/TTC450Ultra/Mainboard-schematic-diagram) contains the [manufacturer's labelled board image](https://oss.twotrees3d.com/CNCEngravingMachine/TTC450Ultra/450Ultra%E4%B8%BB%E6%9D%BF.png), 1785 × 1028 PNG, local capture `/tmp/atlas-ttc450ultra-board.png` SHA-256 `9aec92730ff355b2d2fdf59c6100ce38c77592e6c08ea3fe4bf6803866661dc1`. Its central board print reads **LKS CNC V1.0**. This is the manufacturer's reference drawing for this profile, not an inspected installed machine or a mating-face drawing.

## Visible interface inventory

The position counts below refer only to visible through-hole marks in the **published board top view**. Inventory ordinals used in the SVG are not stamped numbers, connector cavity numbers, coil phases or an installed harness order. Every position is REFERENCE ONLY / OPEN to SmoothieBox.

| Reference in image | Source heading or adjacent label | Visible positions | What can be read |
| --- | --- | ---: | --- |
| J27 | X-Motor | 4 | Former board's on-board-driver motor winding output. No coil or cable order. |
| J29 | Y1-Motor | 4 | Former board motor winding output. |
| J28 | Y2-Motor | 4 | Former board motor winding output. The source image alone does not prove a second Y motor is fitted. |
| J30 | Z-Motor | 4 | Former board motor winding output. |
| J16 | A-Motor | 4 | Board option. The image does not prove an installed fourth axis. |
| J9 | X-axis limit | 3 | Board silkscreen above the socket reads `S GND 5V`, left to right in this image. Signal type, switch type and cable view unverified. |
| J10 | Y-axis limit | 3 | Board silkscreen reads `S GND 5V`, left to right in this image. |
| J11 | Z-axis limit | 3 | Three positions visible; the board image does not clearly expose every individual mark. |
| J12 | A-axis limit | 3 | Board option with three visible positions. No fitted A switch is established. |
| J21 | Probe | 3 | Three positions visible; individual functions not confidently legible. |
| J22 | Flame | 3 | Three positions visible; source does not establish a fitted sensor. |
| J20 | Door | 3 | Three positions visible; source does not establish a wired safety circuit. |
| J4 | Low-power laser | 3 | Three visible positions; the image does not supply a reliable complete pin role or module-side map. |
| Laser high-power vertical socket | High-power laser | 3 | Adjacent vertical board labels appear as `TTL`, `GND`, `VIN` from top to bottom. No voltage/rating or module-side contract is supplied. |
| J23 | Air pump | 2 | Two visible positions; no pump rating/driver contract. |
| J7 | Spindle | 2 | Two visible positions and `-SPINDLE+` silkscreen; no spindle or VFD electrical contract. |
| J3 | E-STOP | 2 | Two visible positions; no source circuit or contact state. |
| J39 | `(0–10V)` | 2 | The board drawing marks `+` and `−` by the two positions; no load, isolation, reference or VFD matching proof. |

This inventory comprises **55** source-view positions. It does **not** include all board connectors. The same image also shows multiple VIN/power sockets, a power switch, plug-in driver carrier footprints, an external-driver area, a screen connector, EXP1/EXP2 and USB/TF interfaces. They are not a machine harness map and are deliberately outside this 55-position machine-control reference set; their untranscribed status must not be read as a claim that the board has only 55 contacts. Do not use `E S D G` labels at the driver-carrier footprints as an external SmoothieBox driver pinout. The source distinguishes the plug-in driver area from the separately captioned external-driver area; the latter's electrical pin contract was not recovered here.

## Retrofit boundary

The five motor sockets are **after** the former board's integrated stepper drivers. They are not STEP/DIR inputs. J9/J10 `S GND 5V` are board-side input marks, not a proven switch mating-face sequence; J11/J12 and the probe/safety sockets lack individual readable roles here. The high-power laser's `VIN` is an input-fed supply mark, not an established regulated output voltage. The manufacturer image does not establish the installed board subrevision, connected Y2/A options, motor winding pairs, switch electrical type, spindle drive stage, supply rails, emergency-stop safety topology or direct SmoothieBox compatibility. Accordingly no SmoothieBox route is selected. The older abstract diagram stays in the closed historical disclosure.
