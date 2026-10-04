# Genmitsu PROVerXL 4030 V1 control-box contacts

Checked: 2026-09-26. These are manufacturer-reference positions for `mill-g3`. They do not identify the control-box revision or wiring fitted to a particular machine, and they are not SmoothieBox wiring instructions.

## Sources and revision boundary

- [SainSmart's PROVerXL 4030 resource page](https://docs.sainsmart.com/article/vdgvaufcu1-genmitsu-prover-xl-4030-resources) links the [V1.3 June 2021 manual](https://genmitsu.s3.us-east-1.amazonaws.com/101-60-4030PROVER/PROVERXL_4030_MANUAL_V1.3_EN%2BDE_2021.06.04.pdf). Captured `/tmp/atlas-genmitsu-4030-proverxl-v1-manual.pdf`, SHA-256 `a49e7c13b7600398ea3a148fac78c2b28f02c6230c3a9055b97d5b558ff3adca` (75 PDF pages). PDF p. 27, printed p. 26 shows separate X, Y1, Y2 and Z motor output connectors on the rear and laser, X/Y/Z limits, Z probe and spindle groups on the side. PDF p. 28, printed p. 27 identifies `Spindle +` and `Spindle -` polarity. Neither illustration establishes the individual motor winding order or limit/probe cavity roles.
- [SainSmart's 4030 laser rotary installation guide](https://docs.sainsmart.com/article/jmu0gg2z77-how-to-install-the-laser-rotary-roller-in-the-4030-cnc) explicitly describes four wires on the X-axis screw terminal and photographs one example. It notes that wire colors may differ. It also identifies four internal stepper drivers in port order, so the rear motor terminals are **post-driver motor winding outputs**, not STEP/DIR control inputs.
- [SainSmart's model-specific laser installation table](https://docs.sainsmart.com/article/1z4ikdh3rb-cnc-and-laser-module-installation-guide) lists an optional V1 three-pin green cable in `12V PWM GND` table order; its V2 cable is listed `12V GND PWM`. The [4030 laser cross-use guide](https://docs.sainsmart.com/article/mwio53n3p2-how-to-use-a-3018-laser-module-with-your-4030-prover-xl-cnc) instead labels a photographed controller view `12V/GND/PWM`. A board view and a cable view cannot be equated without confirmed orientation. The physical V1 middle-position assignment is therefore disputed.

## Selected individually identified positions

| Reference object | Positions | Source and limit |
| --- | --- | --- |
| X-axis motor output green screw terminal | 1–4 | The laser rotary guide explicitly says four wires; numbers enumerate positions for the diagram, not manufacturer terminal numbers. Example wire colors and coil order are not transferable. Former-controller motor power output; OPEN. |
| Spindle motor output | `Spindle +`, `Spindle -` | Manual label table, PDF p. 28. Polarity is identified, but spindle driver voltage/current, switching and installed tool are not qualified; OPEN. |
| Optional V1 laser cable | `12V`, `PWM`, `GND` | Three named functions in SainSmart's V1 cable table, **not a physical left-to-right cavity assignment**. The separate board-photo order conflicts. No connected laser module or SmoothieBox-compatible power/PWM interface is proved; OPEN. |

These nine source-scoped marks are **REFERENCE ONLY / OPEN** in the primary atlas SVG. No dotted function guess is selected because these particular source views leave the SmoothieBox electrical interface and physical laser cavity order unresolved.

## Named groups left without invented pins

The manual names four motor outputs, but only the X terminal's four individual conductors are explicitly counted in the corroborating guide. Its Y1, Y2 and Z motor outputs remain named groups pending close-up counts and coil mapping. X/Y/Z limit and Z-probe connectors also remain named groups pending contact-count, order, voltage and switch-circuit evidence. The original control-box emergency stop is an integrated switch, not a proved safety-rated SmoothieBox input. Do not transfer PROVerXL 4030 **V2** closed-loop drawings or the V2 laser cable order to this V1 reference.
