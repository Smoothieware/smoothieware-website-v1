# Genmitsu 4040-PRO board and harness contacts

Checked: 2026-09-26. This is a manufacturer-reference inventory for `mill-g4`, not a wiring instruction or a claim about the board revision fitted to a particular machine.

## Sources and version boundary

- [SainSmart's 4040-PRO resource page](https://docs.sainsmart.com/article/oq9mdxodpe-genmitsu-4040-pro-resource-page) links the [current user manual](https://genmitsu.s3.dualstack.us-east-1.amazonaws.com/101-60-4040PRO/Genmitsu_4040-PRO_User_Manual_V3.0_EN_DE_JP_202607.pdf). The PDF cover reads **V2.1 Jun 2026**, despite the URL's `V3.0` and `202607` filename. Captured `/tmp/atlas-genmitsu-4040-pro-manual.pdf`, SHA-256 `69c4ab0d95c6d9fefefe2657beee77d9f439e29091964db78cce9c7b201c5fd6` (136 PDF pages). The English wiring is printed pp. 18–20, PDF pp. 20–22.
- The same resource page links SainSmart's [XY extension guide](https://docs.sainsmart.com/article/k4my1v1sb1-xy-axis-extension-kit-assembly-guide-for-4040-pro) and its [manufacturer PDF](https://genmitsu.s3.us-east-1.amazonaws.com/101-60-4040PRO/Genmitsu_4040-PRO_Extension_User_Manual_V1.0_EN_202402.pdf). Captured `/tmp/atlas-genmitsu-4040-pro-extension.pdf`, SHA-256 `5b4e3127c77db1ea4782c603aaa9c08b1c259f790eda7815c97c367f679d712d` (130 PDF pages). PDF p. 49, printed p. 45, photographs the X-axis local board with X-limit, Z-limit, X-motor and Z-motor sockets. It is an extension-kit view, not proof that every earlier or later 4040-PRO uses an identical board.

## Selected individually visible positions

| Reference object | Individual marks | Source and limit |
| --- | --- | --- |
| X-axis local-board X-limit socket | GND, G, 12V | Extension guide PDF p. 49 photographs a three-position socket and adjacent silk in that top-to-bottom board-photo order. The role of `G` and the switch's electrical circuit are not established. This is board view, not the cable mating face. |
| X-axis local-board Z-limit socket | GND, G, 12V | Same photograph, second three-position socket. The image does not establish a SmoothieBox-safe voltage or direct retrofit route. |
| Z-axis motor-end plug | Positions 1–6 | Current user manual PDF p. 21, printed p. 19, explicitly calls it the `6 PIN terminal marked Z` and shows the motor-end receptacle. Four visible black conductors do not identify active cavities, phases, or a driver input. The motor plug is downstream of the former control electronics. |
| 775 DC spindle motor leads | Red positive, black negative | Current user manual PDF p. 20, printed p. 18. These are two motor-power conductors, not SmoothieBox logic terminals. The manual specifies a 12–24 V 775 motor and 24 V/4 A machine supply on printed p. 3; it does not qualify a replacement spindle driver. |

These 14 positions are **REFERENCE ONLY / OPEN** in the primary atlas SVG. No dotted guess is selected because the source does not identify an electrically qualified path from a SmoothieBox exterior terminal to a particular motor drive, spindle power stage, or 12 V limit circuit.

## Deliberately untranscribed positions

The extension guide photograph also shows an X-motor socket, a large X–Z module multipin connector and other local-board connectors. The current manual shows the X–Z cable interface and right-Y motor extension. Their contact counts, cavity orientation or individual conductor roles are not securely established by these views, so these remain named groups rather than invented cavities. The X/Z local-board motor sockets in the extension guide are former-board winding outputs, not STEP/DIR inputs. The printed silk adjacent to the X/Z limit housings does not demonstrate that the two manuals describe the same PCB subrevision or a completed SmoothieBox route. A fitted harness, connector revision, switch polarity, motor coil continuity, spindle-driver rating and safety circuit need machine-specific inspection before wiring.
