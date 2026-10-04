# TurboTaig 2.2 limit connector reference

Scope: the aftermarket TurboTaig 2.2 board documented in its manual. This is not the stock Taig DSLS controller. The fitted TurboTaig revision and retained harness on any particular Taig mill are unknown.

## Source

- Peter Homann, *TurboTaig 2.2 User Manual*, PDF revision 2.2, hosted at <https://www.homanndesigns.com/pdfs/TurboTaig-2_2.pdf>.
- Local source capture: `/tmp/turbotaig-2_2-20260927.pdf`, SHA-256 `3e12ce179e23e963973ad92573a7a575edf0873ddd33029b0fc8e5a3aa368ccd`.
- PDF page 6, Table 1: J9/J10 are alternative PC parallel-port pin allocations; the table defines signal direction relative to the computer. J9 and J10 must not be combined.
- PDF page 7, “Limit switch connectors” and Figure 3: J1, J2, J29 and J30 are three-pin limit-switch connectors. The manual identifies pin 1 as GND and says a simple NC or NO switch connects between pin 1 and the center contact. It also says the connector may supply 5 V for opto-interrupter sensors. Figure 3's board view shows the GND and +5 V ends; the center signal contact is described in the text.
- PDF page 11, “Emergency Switch Input”: J3 is shown as a three-position board connector. The emergency signal is the center contact; the manual also names GND but the captured drawing does not support assigning that role to a numbered position here.
- PDF pages 12–13, “Enable Input”: J4 is shown as a two-position switch connector. With J5 in Switch mode, closing the switch at J4 grounds the enable signal. The manual does not number J4's two positions. J5 is a configuration jumper, not an external machine connector.
- These emergency and enable functions are not treated as ordinary endstop wires. No SmoothieBox route is inferred for them.

## Captured contact view

The generated reference cards show all three board-view positions for each named limit connector:

| Board-view position | Source-backed label | Boundary |
| --- | --- | --- |
| 1 | GND / switch common | The manual explicitly names pin 1 as GND. |
| 2 | Center limit-switch signal | The manual says the switch connects to the center contact; active logic depends on configuration. |
| 3 | +5 V sensor supply | Figure 3 shows the +5 V end of the connector and the text permits 5 V opto-interrupter sensors. Verify board orientation before mating. |

The PDF figure places four connectors beside X/Y/Z/A labels, but this capture does not establish a reliable J-number-to-axis correspondence for every placement. The atlas therefore keeps J1, J2, J29 and J30 as separate named references instead of assigning axis labels or routing them to a SmoothieBox endstop. The connectors are source-described; their presence on a specific installed mill is unverified.

The J9/J10 DB25 remains a machine-side peripheral in the SmoothieBox diagram. Its 14 STEP/DIR correspondences remain dotted guesses: the manual does not establish electrical compatibility, the installed option, cable continuity, or a safe direct retrofit. No route is added from limit contacts, emergency, enable, relay, or an assumed shared ground.

The same diagram also shows all three J3 board-view positions and both J4 board-view positions. Only J3's center emergency-signal role and J4's switch-closure-to-ground behavior are transcribed; source position numbering or unambiguous pin assignments are not supplied for those connections, so their remaining roles stay OPEN. Do not use this map as an emergency-stop design or retrofit instruction.
