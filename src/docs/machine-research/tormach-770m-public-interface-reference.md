# Tormach 770M public interface references

Research capture: 2026-09-27. This dossier uses publicly accessible Tormach troubleshooting and reference pages only. The 37361 Rev J drawing remains withheld because it is marked proprietary/confidential; none of its contact assignments are reproduced.

## Source scope

- [All axes will not move when commanded (770M)](https://knowledgebase.tormach.com/770m/all-axes-won-t-move-when-commanded-770m) identifies ECM J6 as a 26-pin IDC ribbon interface and names axis driver harnesses 423.1 (X), 423.2 (Y), and 423.3 (Z), each using a 10-pin IDC interface.
- [Limit switch troubleshooting for M machines](https://knowledgebase.tormach.com/770m/limit-switch-troubleshooting-for-m-machines) documents diagnostic test pairs 409↔414 (X), 410↔414 (Y), and 411↔414 (Z).
- [770M electrical panel layout and fuse table](https://knowledgebase.tormach.com/770m/electrical-panel-layout-and-fuse-table-770m) lists cabinet equipment including ECM, X/Y/Z/A drivers, 24 V supply, spindle VFD, contactor, and DC bus. This is an inventory, not proof that every option is fitted or a contact map.
- [770M pneumatic and electrical schematics](https://knowledgebase.tormach.com/770m/pneumatic-and-electrical-schematics) is an index to source-specific electrical sheets; it does not publish a reusable external pin map.

## Contact inventory limits

The SVG shows the J6 26-position and X/Y/Z 10-position IDC groups as **count-only placeholders**. The numbers 1…26 and 1…10 are renderer marks for counting positions; the cited public troubleshooting pages do not establish cavity numbering orientation or mating-face order. They are not function labels. Every position remains OPEN.

The 409/410/411/414 values are **diagnostic wire/test-point marks**, not connector cavity numbers. The source describes temporary test pairs; it does not say that 414 is signal GND, nor identify the installed switch connector cavities. These marks are isolated on a diagnostic reference card and are not wired to SmoothieBox.

The panel equipment list does not establish whether an A-axis drive, accessory interface, door/interlock, or a particular spindle option is installed on this machine. Such items remain separate unassigned context cards: A-axis driver (fit unverified), door/interlock, accessories, spindle VFD, and spindle motor power. These cards have no contact circles. DB25 is not present in the public evidence. There are no selected SmoothieBox routes or function guesses because the permitted sources do not establish compatible signal levels, returns, isolation, or machine-side assignments.

This public reference improves the visible inventory while leaving the confidential assignments withheld. It is not a mating-face pinout, retrofit instruction, safety design, or wiring approval. Verify the installed board revision, harnesses, electrical characteristics, and safety chain using an authorized, revision-matched source before engineering a connection.
