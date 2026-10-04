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


## Manufacturer manual connector inventory (family reference only)

The accessible 2018 [Nova 35 user's manual](https://thunderlaser.co.uk/wp-content/uploads/2018/12/User-manual-NOVA35.pdf) identifies two USB-A ports (PC connection and U-disk), an Ethernet port, and an AC supply socket in its connection-panel and machine-view figures (printed pp. 23 and 29). The USB contact labels below use the USB 2.0 Standard-A signal convention; this does not establish protocol revision, host/device role beyond the manual's names, connector mating view, controller circuit, or any SmoothieBox compatibility. The eight Ethernet positions are counted from the standard 8P8C port form; their signal assignments are unreported. The manual does not establish the local chassis revision. These are source-family inventories, not proof that the pictured revision is installed in Nürnberg.

| Family-reference connector | Position | Source-bounded label | Limitation |
|---|---:|---|---|
| PC connection USB Standard-A | 1 | VBUS | Standard contact function; actual receptacle implementation unverified. |
| PC connection USB Standard-A | 2 | D− | Standard contact function; actual receptacle implementation unverified. |
| PC connection USB Standard-A | 3 | D+ | Standard contact function; actual receptacle implementation unverified. |
| PC connection USB Standard-A | 4 | GND | Standard contact function; actual receptacle implementation unverified. |
| U-disk USB Standard-A | 1 | VBUS | Standard contact function; actual receptacle implementation unverified. |
| U-disk USB Standard-A | 2 | D− | Standard contact function; actual receptacle implementation unverified. |
| U-disk USB Standard-A | 3 | D+ | Standard contact function; actual receptacle implementation unverified. |
| U-disk USB Standard-A | 4 | GND | Standard contact function; actual receptacle implementation unverified. |
| Ethernet 8P8C port | 1–8 | Position counted; function OPEN | The manual names an Ethernet port but gives no pin assignment or PHY details. |

The same 2018 manual's TL-Timer illustration (printed p. 34) labels interfaces 1–4 as channel blocks (warning lamp, spare, exhaust fan, spare), and interfaces 9–11 as lid state, working state, and 5 V DC supply. The image shows three screw positions at each channel block and two at each of interfaces 9–11. These are individually listed as image-counted positions below, not numbered manufacturer terminals; all electrical functions within each block remain OPEN. The board illustration appears to mark interface 11 `+5V` and `GND`; this is a drawing-level identification only and does not establish local fitment or ratings. The manual does not publish individual cavity numbering, contact polarity for interfaces 9/10, or an electrical map for channel contacts. TL-Timer fitment/revision in the Nürnberg machine is unverified.

No contact-level route is justified between the SmoothieBox and these machine-family references. The PC/U-disk/Ethernet ports are data interfaces whose implementation/protocol compatibility is not established for the SmoothieBox; timer channel, interlock, and supply contacts lack local-fitment and electrical qualification. All listed contacts remain OPEN. The AC socket is not transcribed into candidate low-voltage contacts, and no mains, heater, laser, fan, or safety wiring is proposed. The manual's generic water IN/OUT and no-water signal-port discussion remains hose/cable context without numbered contacts.

**Additional source:** [2018 Nova 35 user's manual](https://thunderlaser.co.uk/wp-content/uploads/2018/12/User-manual-NOVA35.pdf), printed pp. 23, 29, 34 (panel/machine-view/TL-Timer illustrations); [USB-IF USB 2.0 Specification](https://www.usb.org/document-library/usb-20-specification) for Standard-A pin functions. The manufacturer support article titled “NOVA Series Wiring Diagram TL Timer V8.4” was checked, but its linked images did not provide a readable wiring schematic in the captured retrieval; it does not add a contact schedule here.
