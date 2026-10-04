# Elegoo Mars 3 4K

Research status: manufacturer-manual external-interface increment, 2026-09-27. The local Appropedia catalogue calls the unit “Elegoo Mars 3 4K”; its exact installed submodel and hardware revision are not recorded.

## Wiki-supported identity

The catalogue gives a 143 × 89 × 175 mm build volume, identifies a 4K SLA machine, and notes an OSHWA UID. It does not document local hardware revision, controller, or electrical interface.

## Manufacturer manual scope

ELEGOO’s official Mars 3 manual linked from its Mars 3 support page states that the manual applies to Mars 3 and Mars 3 Pro. The components illustration labels a front USB interface and a rear DC Input. The technical specification page gives XY resolution 0.035 mm (4098×2560) and power requirements 100–240 V, 50/60 Hz; the packing list includes an adapter. The printing procedure says to export sliced files to a U Disk or SD Card and plug the U Disk into the printer. These are family-manual claims and do not establish the exact submodel, adapter output, or fitted machine.

## External-interface inventory

The diagram names two source-visible peripherals: USB storage interface and DC power input. The manual does not publish contact numbers or functions, mating-face view, USB connector generation, DC-input polarity, adapter DC output voltage/current, or installed cable details. Both groups therefore have zero declared numbered contacts and remain OPEN; no generic USB pin map, barrel-jack polarity, route, or guessed conductor is added. Power requirements are a family-level printer specification, not a contact-level DC input rating.

The manual contains no revision-specific controller, LCD ribbon, UV exposure, motor, or limit-switch pin schedule. Those internal connections are not mapped.

## Sources

- [Appropedia machine catalogue](https://www.appropedia.org/Open_Source_Machine_Tools), local identity row.
- [ELEGOO Mars 3 support files](https://us.elegoo.com/blogs/3d-printing/mars-3-3d-printer-support-files), official model resources.
- [ELEGOO Mars 3 and Mars 3 Pro manual, English, 2022-06-14](https://download.elegoo.com/04%20LCD%20Printer/05%20Mars%203/Manual/ELEGOO%20MARS%203%26MARS%203%20PRO-Manual%20Book-English-20220614.pdf), pp. 2, 4–6, 14. Captured PDF SHA-256: `65ff905bb7472725bf820575fe432de71cc5e26646e7e0d155d5e212d8df6ca2`.

## Evidence limits

The manual covers Mars 3 and Mars 3 Pro, so it does not independently identify which exact submodel corresponds to the local catalogue row. No fitted board, port continuity, adapter output, contact polarity, voltage at the DC input, or SmoothieBox compatibility is established. The reference diagram is not a wiring instruction or approval.
