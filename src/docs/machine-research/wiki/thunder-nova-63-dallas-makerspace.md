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


## Nova 63 family-manual interfaces (reference only)

Thunder Laser's [Nova Series Unified User Manual](https://cdn.thunderlaser.com/download/down/NovaSeriesUnifiedUser.pdf) covers Nova 24, 35, 51 and 63. Its machine-view text names a PC USB port, U-disk USB port and Ethernet port, and states that the Nova 35/51/63 enclosure houses the laser controller, motor drivers, 24 V and 36 V supplies, TL-Timer, flap-sensor board and main cables. Its machine view also names the laser supply socket, chiller power socket, exhaust hose, blow-air port, water IN/OUT ports, and “No-Water protection” signal port. These are family-manual interface names; Dallas-installed forms, revisions and internal contact maps remain unverified.

The unified manual's TL-Timer section (printed pp. 57–58) identifies these interface-level functions:

| Manual ID | Source-named function | Evidence limit |
|---|---|---|
| OUT1 | Green warning-light control | Function reference, not a contact/cavity map. |
| OUT2 | Red warning-light control | Function reference, not a contact/cavity map. |
| OUT3 | Exhaust fan control | Function reference, not a contact/cavity map. |
| OUT4 | Low-volume air-assist control | Function reference, not a contact/cavity map. |
| OUT5 | High-volume air-assist control | Function reference, not a contact/cavity map. |
| OUT6 | Fire-alarm system control; high temperature triggers alarm and stops the machine | Function reference, not a contact/cavity map. |
| OUT7 | Rotary-device power control | Function reference, not a contact/cavity map. |
| OUT8 | Spare interface | Manual labels as spare; not an electrical NC claim. |
| 5V Output 1 | 5 V DC output for red-light pointer | Function reference; pin count/polarity map not published. |
| 5V Output 2 | 5 V DC spare output | Function reference; pin count/polarity map not published. |
| Upgrade | Upgrade interface | Pin functions and count not published. |
| 24V Input | 24 V DC voltage input | Function reference; pin count/polarity map not published. |
| In1 | Working-state interface | Function reference, not a contact/cavity map. |
| In2 | Spare interface | Manual labels as spare; not an electrical NC claim. |
| In3 | Air-assist mode selection | Function reference, not a contact/cavity map. |
| In4 | Low-volume air-assist control | Function reference, not a contact/cavity map. |
| In5 | High-volume air-assist control | Function reference, not a contact/cavity map. |
| In6 | Temperature detection | Function reference, not a contact/cavity map. |
| In7 | Rotary-connection state detection | Function reference, not a contact/cavity map. |
| In8 | Spare interface | Manual labels as spare; not an electrical NC claim. |

These 20 entries are manufacturer interface/function IDs, not 20 individual pins. The manual does not state the number, ordering, electrical level, polarity, ratings, connector form, or mating view of each terminal group. Its documented rotary, safety, air-assist, exhaust, warning-light and temperature functions do not establish a compatible SmoothieBox path. All function references remain OPEN and un-routed. The 2024 unified manual differs in detail from older Nova-35 TL-Timer documentation; it is kept as its own series-manual reference and is not merged with Nova-35 contact schedules.

The AC laser supply socket and chiller power connection are identified as mains/power equipment but are not transcribed as candidate low-voltage terminals. No mains, laser-power, heater, exhaust, air-assist or safety wiring is proposed. The water IN/OUT fittings, pump/chiller choice and protection-signal port likewise remain source-named family interfaces only; the Dallas page does not establish its installed chiller or water circuit. No DB25 or other numbered machine connector is identified.

**Added manufacturer source:** [Thunder Laser Nova Series Unified User Manual](https://cdn.thunderlaser.com/download/down/NovaSeriesUnifiedUser.pdf), March 2024, printed pp. 34–35 and 57–58. The current [NOVA Series Wiring Diagram TL Timer V8.4 article](https://support.thunderlaser.com/portal/en/kb/articles/nova-series-wiring-diagram-tl-timer-v8-4) says its drawings are for Nova machines as of February 2025, but the captured attachment images did not provide a readable connector pin map.
