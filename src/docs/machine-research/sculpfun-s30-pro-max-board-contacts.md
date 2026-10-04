# Sculpfun S30 Pro Max: separate motherboard contact evidence

## Source and revision boundary

- Sculpfun's [32-bit motherboard product listing](https://www.sculpfun.com/products/sculpfun-motherboard-32bit) offers `S30 Pro Max` separately from `S6/S9/S10/S30/S30 Pro`. Its [Pro Max variant photograph](https://www.sculpfun.com/cdn/shop/files/S30PM.jpg?v=1751621854&width=720) shows silk `DLC32-S30_V1.0 2024.09.19`. The photo documents a replacement-board *variant*, not the fitted board revision of every shipped Pro Max or a connector mating-face view. Do not transfer the S30/S30 Pro `De By Lv2` board's contacts to this profile.
- The [S30 series manual](https://cdn.shopify.com/s/files/1/0628/0695/0066/files/SCULPFUN_S30_Series_User_Manual_2.pdf?v=1780025023), PDF SHA-256 `213f2ee090d7a613caa5cfbc6b62007d257754bda81c940d801d887e28bbc16d`, English PDF pages 8 and 10, depicts separate X/Y motor leads, XY limits, laser cable and air pump. It does not establish cable cavity numbers, phases, or installed continuity to this photographed board revision.
- The [model-specific S30 Pro Max listing](https://www.sculpfun.com/products/sculpfun-s30-pro-max-laser-engraver-machine) specifies `24 V 5 A` machine input and a `24 V` mainboard-controlled air pump. Its packing list instead names an `S30 Pro` laser, `12 V` pump and `12 V 5 A` adapter. Treat that list as inconsistent with the Pro Max specification; do not infer the voltage of an individual installed pump from it. A [Sculpfun-hosted third-party S30 series article](https://www.sculpfun.com/blogs/blog/sculpfun-s30-series) also describes 24 V at the Pro Max laser supply, while its summary table calls the pump 12 V. This secondary text reinforces the need to measure the actual harness, not to normalize the conflicting pump statements.

## Individual contacts visible in the manufacturer board photograph

| Board reference | Contacts represented in `laserplot-24` | Evidence limit |
| --- | --- | --- |
| `XMOTOR` | 1, 2, 3, 4: X motor winding conductors, phase unknown | Four visible output positions downstream of the on-board driver. Ordinals distinguish positions in this photo, not stamped housing cavity numbers. No coil-pair map. |
| `YMOTOR` | 1, 2, 3, 4: Y motor winding conductors, phase unknown | Same limit. Separate `YMOTOR2` is present on the board but is not established as part of the standard installed harness. |
| X limit | `X` signal, `G` ground, `V` accessory voltage | Three silk-screened board-input functions; fitted switch use of `V`, voltage level, polarity and housing orientation unverified. |
| Y limit | `Y` signal, `G` ground, `V` accessory voltage | Same limit. |
| `Laser` | `PWM`, `V-`, `V+` | Three silk-screened board-output functions. The photo does not establish the module-side housing, supply rating, PWM level, or installed cable continuity. |
| `Air` | `Air-`, `Air+` | Two silk-screened pump-power output functions, not a logic-level air-assist input. Output rating and installed pump variant unverified. |

The image also contains `- 12/24V`, `G TTL S`, `YMOTOR2`, `- 5V +`, and emergency-stop facilities. The manual and Pro Max product listing do not establish these as connected parts of the standard machine harness, so they are not converted into installed-machine cards. `Air-`/`Air+` and `Laser V-`/`V+` are power-path reference labels; they cannot be connected directly to SmoothieBox signal outputs. The motor contacts are outputs of the *former controller's* integrated drivers, while SmoothieBox STEP/DIR outputs require qualified external drivers. Every displayed Pro Max reference contact remains **OPEN** until the actual board, module, driver, pump, supply and cable are identified and checked. No physical SmoothieBox route is established by these sources.
