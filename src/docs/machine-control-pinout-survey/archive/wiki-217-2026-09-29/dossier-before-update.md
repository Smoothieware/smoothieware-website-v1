# Thunder Laser Nova 35 — FabLab Region Nürnberg

**Wiki evidence status:** dedicated local page; the wiki marks the Nürnberg installation functional. The page lists Thunderlaser/Allplast as maker, a Nova 35 model, a roughly 80 W laser, and a 900 × 600 mm work area. The wiki notes that the Nova 35 installations in Nürnberg and Veitsbronn have different tubes; this dossier is scoped to Nürnberg.

## Local setup and software

This laser is available only after instruction and is not approved for open-lab use, according to the wiki. The local workflow recommends Inkscape with VisiCut; RDWorks is named as the Windows-only software supplied with the laser. VisiCut can connect over the local network at `172.22.30.50` / `nova35.fablab.lan`, or use USB storage or serial USB (`/dev/ttyUSB0` on Linux, `COM4` as one Windows example). The page warns that many VisiCut “recommended” material profiles are wrong or untested and asks users to use a small test cut and compare the material table.

## Preparation and operation

Before use, the wiki instructs the operator to connect the Nova's exhaust hose to the external extraction, power the extraction, switch on the laser and press its red reset button. The machine needs the lid closed for the display/reset sequence. Material is placed on the bed and held with magnets or weights if needed. The operator uses the cursor keys and start-position control, then the Box function to preview the job bounds. For focusing, the page describes using the supplied 20 mm gauge between nozzle tip and material surface.

After transferring the file, the local procedure checks the extraction setup, selects Auto and Nova on the extraction controls, then starts with Start/Pause and verifies that the ventilation runs. The wiki says to wait about 30 seconds after cutting for smoke to clear. It warns that the head can move quickly and the blue nozzle sits only 20 mm above the work, creating a collision risk.

The local wiki includes a material table with power, speed, minimum power and frequency. These are installation-specific starting values; the page notes the other Nova 35 has a different tube and directs users to test settings.

## Visuals and pinouts

The page lists machine photos but no readable wiring schematic or controller connector map. Network and USB connection details describe data transfer, not electrical pin assignments. The manufacturer [Nova Series user manual](https://www.thunderlaser.com/download/down/nova_series_unified_user_manual.pdf) gives a generic water-cooling hookup: chiller `OUTLET` to machine `Water IN`, machine `Water OUT` to chiller `INLET`, plus a supplied “No Water protection” cable from chiller `ALARM OUTLET` to the machine's signal port. It also describes a pump alternative. The FabLab page does not identify the Nürnberg chiller, so show this only as an optional manufacturer reference, not a verified local connection.

| Source-named connection | Source-described relationship | Scope limit |
|---|---|---|
| Chiller `OUTLET` → machine `Water IN` | Coolant supply hose. | Manufacturer Nova-series setup; local cooler configuration unknown. |
| Machine `Water OUT` → chiller `INLET` | Coolant return hose. | Manufacturer Nova-series setup; local cooler configuration unknown. |
| Chiller `ALARM OUTLET` ↔ machine “No Water protection” port | Supplied protection-signal cable. | Connector contacts, signal levels and polarity are not specified in the accessible manual text. |

These are two hose paths and one cable path, not numbered electrical pin assignments. The manual does not establish the Nürnberg unit's tube, controller revision, chiller, or water-protection circuit.

## Sources

- [Nova 35 — FabLab Region Nürnberg Wiki](https://wiki.fablab-nuernberg.de/w/Nova_35) — identity, status, local controls, setup, software, operating sequence, risks, and material table.
- [Lasercutter category — FabLab Region Nürnberg Wiki](https://wiki.fablab-nuernberg.de/w/Kategorie%3ALasercutter) — distinct local inventory entry alongside the Zing 4030.
- [Thunder Laser Nova Series user manual](https://www.thunderlaser.com/download/down/nova_series_unified_user_manual.pdf) — manufacturer accessory connection reference for Nova-series chiller/pump, not proof of the local chiller wiring.

**Unknowns:** exact tube and controller revision in Nürnberg, serial number, calibration status, wiring diagrams, connector assignments, and current approval/training state.
