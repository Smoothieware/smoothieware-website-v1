# Ortur Laser Master 3 manual port and button references

Research capture: 2026-09-27. Scope: the English Ortur OLM3 User Manual (231125), PDF viewer page 22 / printed page 16, “Ports and Buttons.” The official Ortur OLM3 support page identifies the OLM-ESP-PRO-V2.4 board family; the installed machine’s exact board subrevision is not inspected here.

## What the manual shows

The manual's labeled exterior view assigns locator numbers 1–14 to these items:

1. Interface of WIFI
2. Power Input
3. Interface of USB
4. Main Power Button (Status Light)
5. Key Switch (Child Lock)
6. Emergency Stop Button
7. TF-card Slot
8. Restore Button
9. Reset Button
10. Expand Interface
11. Interface of Main Wire
12. Interface of Y-axis Motor Wire
13. YRR Switch
14. Interface of YRR Adapter Wire

These numbers identify locations in the manual illustration. They are **not electrical pin numbers**. The drawing provides no connector cavity counts, mating-face orientation, contact functions, wire colors, voltages, or continuity between any of these items. The 14 labels are therefore shown as separate source-reference cards without pin circles.

The manual says to switch to YRR when connecting YRR or YRC. This is operating guidance only; it does not identify motor, encoder, power, or control contacts. The emergency-stop and key-switch labels do not disclose contact topology or establish a safety circuit. No SmoothieBox route or dotted guess is supported by this page.

## Revision and boundary

The official [OLM3 support page](https://ortur.net/pages/support-olm3) identifies OLM-ESP-PRO-V2.4. Ortur's comparison material also names an OLM3 V2.4D variant and separates OLM3 LE/H10 options; do not transfer connector assumptions between these variants. No contact assignment in this dossier should be read as pin compatibility or retrofit approval.

Primary source: [OLM3 User Manual](https://cdn.shopify.com/s/files/1/0503/4734/4056/files/OLM3-User_Manua-EN-231125.pdf?v=1711530573), downloaded for inspection; captured PDF SHA-256 `e255480c861d468c156569a1ec7760a43de7d359319fabbbe3c22dbad3f21195`.
