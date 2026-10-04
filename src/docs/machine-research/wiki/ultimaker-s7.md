# Ultimaker S7

**Evidence depth:** Appropedia catalogue identity lead plus official UltiMaker S7 installation/user manual v1.2 and official quick-start guide. These records do not establish the fitted unit's revision. The manufacturer documents named external interfaces but publishes no pin/contact schedule in these sources.

## Wiki-supported identity and facts

The Appropedia catalogue entry is an identity lead for the Ultimaker S7. It does not establish the installed controller or harness revision.

## Manufacturer-documented interfaces (model family; fitment unverified)

The official S7 Installation and User Manual v1.2, printed page 8 (PDF page 9), labels the rear USB port, Ethernet port, NFC port, UMB OUT port, and power socket/switch. Its setup pages describe the Air Manager cable and connect it to the S7 UMB OUT port in standalone configuration. The manual says the spool holder and its NFC cable connect to the NFC socket in standalone configuration and are replaced by a cap when paired with the optional Material Station. In that combined setup, the Air Manager cable connects at the Material Station UMB OUT, and a separate Material Station cable links Material Station UMB IN to S7 UMB OUT. The manual also identifies a USB stick and an Ethernet cable among the supplied accessories.

These documents do **not** give connector designators, pin counts, cavity numbering, contact functions, voltages, polarity, cable pinouts, or board revision for those machine-side interfaces. The rear-panel illustration is a location/key diagram, not a mating-face or electrical drawing. Therefore the atlas currently records named external interfaces only; it does not assign individual physical pin numbers to USB/Ethernet/NFC/UMB/power, and no contact is routed to SmoothieBox. Standard connector pinouts and S3/S5 or older Ultimaker schematics are not substituted for missing S7 evidence. No DB25 interface is shown in these S7 sources.

The Material Station is an optional configuration and is not assumed fitted. The S7 manual includes Air Manager and spool-holder setup, but local accessory fitment is not independently verified. All named interfaces remain manufacturer-family references; local fitted revision and harness are not identified.

## Use, visuals, and electrical connections

The captured wiki catalogue row does not provide a machine-specific wiring diagram. Official user-facing documentation supports interface names and setup relationships only, not electrical contacts. All SmoothieBox contacts and all source-scoped machine contact routes remain OPEN; no guessed route is proposed.

## Source

- [Tolocar / Open Source Machine Tools — Appropedia wiki](https://www.appropedia.org/Open_Source_Machine_Tools) — machine catalogue entry.
- [UltiMaker S7 Installation and User Manual v1.2 (official PDF)](https://um-support-files.ultimaker.com/manuals/user-manual/S7/EN-UltiMaker-S7-V1.2.pdf) — rear-panel interface labels (printed p. 8 / PDF p. 9), connection setup, optional equipment (PDF pages 12–14).
- [UltiMaker S7 Quick Start Guide (official PDF)](https://um-support-files.ultimaker.com/manuals/quick-start/UMS7-QSG%20%28all%20languages%29.pdf) — optional Material Station and Air Manager setup.
- [UltiMaker S-line mainboard repair manual v1.0 (official PDF)](https://um-support-files.ultimaker.com/manuals/repair-calibration/S-series/Repair%20manual%20-%20S-line%20mainboard.pdf) — explicitly lists products S3 and S5 R2; excluded as S7 pinout evidence.

## Captured source identity

- S7 Installation and User Manual v1.2: downloaded official PDF SHA-256 `83c90af672aa6b0d80b4b317747e1ca7db244e811d9122285a15dc201e250bad` (38 pages; creation date 2023-02-03).
- S7 Quick Start Guide: downloaded official PDF SHA-256 `75fc294128bdc584fb25717bb3172fd366fe30cf70a7e186245af362b21b0aaa` (65 pages; creation date 2022-09-22).
