# V1 Engineering Jackpot V1 motor-output reference

## Scope

This source addendum records the five motor-driver output sockets used by the published V1 Engineering Jackpot V1 configurations for the MPCNC and LowRider CNC V4. It is a reference to the former controller's board-side outputs, not a pinout of the machine-side motor plugs or a SmoothieBox wiring approval.

The V1 Engineering Jackpot manual describes six TMC2209 driver sockets and says the XYZABC socket labels are reference labels. Its setup section assigns MPCNC motors as `X0, Y0, Z, X1(A), Y1(B)`, and LowRider motors as `X, Y0, Z0, Y1(A), Z1(B)`. The official labeled board photographs show the corresponding motor sockets.

The photos visibly show four output contacts at each assigned motor socket. The published sources do not assign winding names or phase order to those individual contacts, nor do they show motor-side connector cavities, cable continuity, or a fitted harness. The four photo positions in the atlas are therefore numbered only for reference and remain OPEN for winding function and machine-cable mapping.

## Per-profile assignments

| Profile | Jackpot V1 motor-output socket assignments |
|---|---|
| MPCNC Primo with Jackpot | `X0`, `Y0`, `Z`, `X1(A)`, `Y1(B)` |
| LowRider CNC V4 with Jackpot | `X`, `Y0`, `Z0`, `Y1(A)`, `Z1(B)` |

The board's sixth `C` driver socket is not assigned to either published configuration and is excluded from these machine-specific motor maps. No SmoothieBox-to-motor or SmoothieBox-to-driver edge is established by these board references.

## Sources

1. V1 Engineering, [Jackpot CNC Controller documentation](https://docs.v1e.com/electronics/jackpot/), especially the specifications and Initial Setup sections. The same page describes six TMC2209 driver ports, seven active-low inputs, and identifies the probe/touchplate input as `gpio.36`.
2. V1 Engineering, [MPCNC Jackpot V1 labeled board photograph](https://raw.githubusercontent.com/V1EngineeringInc/V1EngineeringInc-Docs/ab63c55c091603735057d6d2096b96ca0eba0217/docs/img/jackpot/mpcnclabel.png).
3. V1 Engineering, [LowRider Jackpot V1 labeled board photograph](https://raw.githubusercontent.com/V1EngineeringInc/V1EngineeringInc-Docs/ab63c55c091603735057d6d2096b96ca0eba0217/docs/img/jackpot/lowriderlabel.png).
4. V1 Engineering, [MPCNC Jackpot V1 FluidNC configuration](https://github.com/V1EngineeringInc/FluidNC_Configs/blob/fadbfe2e8584cc1213696d0d6a7a09027e204d65/MPCNC/Jackpot/JP1_MPCNC/config.yaml) and [LowRider Jackpot V1 FluidNC configuration](https://github.com/V1EngineeringInc/FluidNC_Configs/blob/fadbfe2e8584cc1213696d0d6a7a09027e204d65/LowRider%20CNC/Jackpot/JP1_LR/config.yaml), both at repository commit `fadbfe2e8584cc1213696d0d6a7a09027e204d65` (2026-08-19).

## Verification limits

These configurations identify logical motor assignments and controller-side internal step/direction configuration. Their internal `I2SO` signals are not external machine connector pins and are not drawn as SmoothieBox terminals. Motor driver outputs are not SmoothieBox step/direction inputs. An external driver model, its input pinout, motor-side connector pinout, winding pairs, and installed cable continuity remain unverified; the diagrams show no conductor or inferred route for them.
