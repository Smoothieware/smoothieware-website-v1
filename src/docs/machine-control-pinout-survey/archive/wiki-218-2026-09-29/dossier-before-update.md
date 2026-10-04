# Thunder Laser Nova 63 — Dallas Makerspace

Research capture: 2026-09-23. Dallas Makerspace's laser wiki names its large-format unit “Big Thunder,” a Thunder Nova 63.

## Wiki-recorded configuration and operation

The wiki lists a 1600 × 1000 mm work area and 130 W output. Its general Thunder Nova notes state that Nova 35 and Nova 63 machines use servo systems described as steppers with optical encoders. The page warns that detected skipped steps can make a machine stop tracking its position and crash the head; it says Reset forces a re-home. It notes the same loss-of-position issue may occur with the rotary attachment. The community wiki requires its Laser Basics certification class for Thunder lasers and describes the curriculum as covering safety, RDWorks, and Thunder operation.

The same page identifies two separate Nova 35 units, Donner and Blitzen. They are not counted as separate model identities in this dossier, and this Nova 63 dossier is kept distinct from the existing Nova 35 entry. The generic servo and reset guidance applies to both families per the wiki; the page does not establish Nova-63-specific controller parameters or wiring.

## Connections and visuals

No controller board revision, motor connector, laser supply, limit input, or pin/contact assignment is identified for the Dallas unit in the inspected wiki source. The manufacturer [Nova Series user manual](https://www.thunderlaser.com/download/down/nova_series_unified_user_manual.pdf) gives a general water-cooling cable/hose relationship: chiller `OUTLET` to machine `Water IN`, machine `Water OUT` to chiller `INLET`, and the supplied “No Water protection” signal cable between the chiller `ALARM OUTLET` and machine signal port. The manual also documents a pump alternative with water hoses; the Dallas page does not establish which option or chiller model is installed.

| Source-named connection | Source-described relationship | Scope limit |
|---|---|---|
| Chiller `OUTLET` → machine `Water IN` | Coolant supply hose. | Manufacturer Nova-series setup; installed Dallas cooler unknown. |
| Machine `Water OUT` → chiller `INLET` | Coolant return hose. | Manufacturer Nova-series setup; installed Dallas cooler unknown. |
| Chiller `ALARM OUTLET` ↔ machine “No Water protection” port | Supplied protection-signal cable. | Connector contacts, signal levels and polarity are not specified in the accessible manual text. |

Keep these as separate hose/cable paths. Do not invent internal connector contacts or a machine-to-V2 connection from this generic accessory setup. The manual is a manufacturer source but is not evidence of the Dallas machine's present chiller, wiring, board revision or controller parameters.

## Source and limits

Sources: [Laser committee wiki page — Dallas Makerspace](https://wiki.dallasmakerspace.org/wiki/Category%3ALaser); [Thunder Laser Nova Series user manual](https://www.thunderlaser.com/download/down/nova_series_unified_user_manual.pdf). The community page identifies the local model and some operating guidance; the manufacturer manual describes generic Nova-series chiller/pump connections. Neither supplies the Dallas install's connector contact map.
