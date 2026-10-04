# Genmitsu 4040-PRO MAX machine-side wiring contacts

Checked: 2026-09-26. Manufacturer-reference inventory for `mill-g7`; not a claim that a particular installed board or accessory has this exact wiring, and not a SmoothieBox wiring instruction.

## Model and revision boundary

- [SainSmart's 4040-PRO MAX resource page](https://docs.sainsmart.com/article/mh831nmx5x-4040-pro-max) links the [user guide](https://genmitsu.s3.dualstack.us-east-1.amazonaws.com/101-60-4040PM/Genmitsu_4040_PRO_MAX_User_Manual_V2_0_EN_DE_JP_2607.pdf). Its cover reads **V2.0 Jun 2026**. Captured `/tmp/atlas-genmitsu-4040-pro-max-manual.pdf`, SHA-256 `acb91ad723041676f569050b0325c3d8b24ab050665b541937741b1cfdafb88a` (141 PDF pages). Printed p. 20, PDF p. 22 explicitly names the black `3p signal cable` to the Z-axis limit-switch board and the white `4p motor cable` to the Z-axis motor. It also shows the X–Z axis cable connecting the left Y module to the X-axis module, but gives no secure X–Z multipin map.
- The resource page separately links an [XZ-axis module upgrade guide](https://genmitsu.s3.us-east-1.amazonaws.com/101-60-4040PM/Genmitsu_4040-PRO_MAX_XZ_Axis_Module_User_Manual_V1.0_EN_DE_JP_2407.pdf), captured `/tmp/atlas-genmitsu-4040-pro-max-xz-module.pdf`, SHA-256 `a04dbaed2dd4a5a539b539ab6611593c4f67973f7a310d3a6ac976db87278d96` (50 PDF pages). Its printed p. 10 repeats the 3-pin Z limit and 4-pin Z motor cable counts on the *optional replacement module*. This is corroborating geometry, not permission to transfer its entire module board to every base machine.
- SainSmart's [4040-PRO MAX control-box grounding troubleshooting sheet](https://cdn.shopify.com/s/files/1/1978/9859/files/4040-Pro_Electrical_Control_Box_Grounding_Troublesh.pdf?v=1736407157), captured `/tmp/atlas-4040pm-grounding.pdf`, SHA-256 `9c4455317177653457a1a959ccdbaee482f417f0c9ba8b5511e3c54880d9612b` (5 PDF pages), photographs an example internal `RYC-GMC4M4-V2.1` PCB and 24VDC enclosure input. It does not establish that every bundled box uses that PCB. It describes an unwanted chassis-to-board-GND continuity condition; do not assume a safe/common earth or transfer its internal pad names to an exterior SmoothieBox terminal.
- The [manufacturer's wireless Z-probe accessory listing](https://www.sainsmart.com/products/wireless-z-axis-probe-tool-setter) explicitly lists 4040-PRO MAX among models for its **dedicated three-pin XH2.54 cable**. Its separate universal open-header cable has wire function names, but the product page warns that control-board pinout must be checked; those names are not a proven cavity order for the dedicated Genmitsu cable. This accessory is optional.

## Selected individual positions

| Object | Individual positions | Evidence and limit |
| --- | --- | --- |
| Base-machine Z limit-switch board cable | 1–3 | User guide printed p. 20 explicitly calls it 3p. Ordinals enumerate housing positions for this drawing, not manufacturer cavity numbering or a proven GND/signal/supply map. OPEN. |
| Base-machine Z motor-end cable | 1–4 | Same page explicitly calls it 4p. Motor winding output, not STEP/DIR input. Coil pairing, wire order and external driver are unverified. OPEN. |
| Optional wireless Z-probe dedicated cable | 1–3 | Manufacturer accessory page says XH2.54 three-pin and lists this model. This does not prove the accessory is fitted or which cable cavity is supply, return or probe signal. OPEN. |

These ten positions are **REFERENCE ONLY / OPEN** in the primary SVG. There is no selected dotted functional guess because no reliable source identifies a particular Z limit, motor-winding or optional probe cavity that can be matched to a SmoothieBox exterior terminal. The previously published machine-side groups remain visible for the X–Z cable, left/right Y modules and control box; their individual contacts are not invented.

## Router power is separate

The base user guide's printed pp. 18 and 22 show the supplied **710 W compact router** with its own power cord routed along the machine. The manual does not show that mains cord entering the GRBL control box or establish a SmoothieBox switched-load contact. The router is a separately powered peripheral, not a generic DC spindle output. A mains-rated switching and safety arrangement would need its own evidence and design before any route is drawn. The optional laser retaining-ring illustration on printed pp. 27–28 likewise does not give a MAX-specific electrical connector map; do not import 4040-PRO laser cable order.
