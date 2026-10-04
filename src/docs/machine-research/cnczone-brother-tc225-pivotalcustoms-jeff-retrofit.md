# Brother TC-225 rebuild and LinuxCNC retrofit (PIVOTALCUSTOMS → jefflikesbagels)

**Machine identity:** One Brother TC-225 drill/tap center that passed from forum member PIVOTALCUSTOMS to Jeff (`jefflikesbagels`). PIVOTALCUSTOMS began a mechanical rebuild and control retrofit in 2013–2014. Jeff revived the same mill after it had sat in storage for years and documented a new LinuxCNC/Mesa retrofit in 2026. This dossier keeps the two owners’ configurations and states separate.

**Novelty check:** Repository search on 2026-09-23 for `PIVOTALCUSTOMS`, `jefflikesbagels`, `Brother TC-225`, and thread ID `205110` found no matching machine dossier. The second Brother TC-321 purchased in the original owner’s deal was sold to another buyer and is not part of this machine record.

**Current state from latest inspected forum update (March 2026):** The machine is under active electrical/control reconstruction. LinuxCNC, Mesa IO, a custom HMI, cabinet and power changes are in progress. The owner lists spindle, tool-changer feedback, lubrication, coolant, servo tuning, and LinuxCNC IO/control tasks as unfinished. No completed machining operation is reported in the inspected continuation.

## Machine history and owner handoff

| Period / owner | Forum-reported state |
|---|---|
| Purchase and teardown, 2013 — PIVOTALCUSTOMS | Bought two Brother CNC machines for $2,000 total after both powered on and the axes/spindle sounded good. Kept the TC-225 and sold the TC-321; the original owner said the TC-225 had an older conversational control that did not support G-code. The initial goal was a complete rebuild with Mach3 and a MachMotion motion board. |
| Mechanical rebuild, 2013–2014 — PIVOTALCUSTOMS | Stripped to castings, refinished parts, inspected and cleaned ballscrews, replaced damaged rail blocks/rails, re-balled the ballnuts, and installed a central lubrication system. The owner reported a 10 HP / 10,000 rpm replacement spindle beside the original 5 HP / 6,000 rpm unit, and later bought MIGE servos. |
| First retrofit electronics, 2014 — PIVOTALCUSTOMS | The owner changed the initial plan and said they chose Mach rather than LinuxCNC, then identified a CS-LAB CSIMO-IPA controller with MPG, spindle encoder, and extra IO; two 1 kW / 4 Nm / 2,500 rpm servos for X/Y and one 1.8 kW / 6 Nm / 3,000 rpm servo for Z. The last inspected 2014 owner update says the machine still needed power-up and spindle/electronics completion. The thread does not establish successful commissioning or machining by this owner. |
| Handoff and renewed retrofit, April 2024–March 2026 — jefflikesbagels | New owner says he acquired the same mill from PIVOTALCUSTOMS after it had been stored for years. He restarted the project, updated the machine computer from Debian 9 to Debian 13, arranged 240 VAC three-phase power through an American Rotary AD20 converter from his 240 VAC single-phase supply, and began replacing/rewiring controls for LinuxCNC. |

## Current-owner control and power work

| Subsystem | Owner-reported details as of March 2026 | State and limits |
|---|---|---|
| Control stack | LinuxCNC on Debian 13; owner is developing a custom QtDragon HMI. | Active setup; no complete machine configuration or proven machining cycle is shown. |
| Mesa cards / HMI | Mesa 7i84 and 7i73 cards in a custom front HMI enclosure for IO and MPG; CAT6 runs from the HMI enclosure to a 7i84 in the electrical cabinet. A 7i76E was damaged during initial wiring and replaced with a 7i76EU. | Reported components and routing intent; no connector/terminal schedule, pin map, firmware, or completed HAL configuration is supplied. |
| Main contactor and voltage conversion | Replaced the MCC contactor with a Fuji SC-N3 using a 240 VAC coil. Added a 150 VA buck transformer for the ATC motor and coolant-pump motor; the owner describes dropping about 48 V to suit the original 200 V loads. A voltage monitor is intended to prevent energizing unless the rotary phase converter is running. | Components and rationale are owner-reported. No complete mains, transformer, or contactor schematic is provided. |
| ATC motor/brake | Wired an SBR32-ZP brake pack for the ATC motor and added circuit protection for that motor. | Motor/drive model, brake circuit terminals, ATC sequence and tool-change commissioning are not stated. |
| Coolant | Added a contactor for the pump motor and replaced an original 100 VAC solenoid valve with a CKD 24 VDC valve. The owner plans a recirculation/manual-washdown/flood-coolant arrangement and G-code or HAL behavior around tool changes. | The proposed plumbing and automation are unfinished; do not present as an operating feature. |
| Cabinet auxiliaries | Replaced 100 VAC heat-exchanger fans with 24 VDC fans and wired a thermostat; added a 24 VDC work light. Owner reports rearranging wiring paths and replacing an 8-relay board with slim Murrelektronik relays. | Exact fan, relay, and terminal models are not fully given. |
| Emergency stop / safety relay | Owner reports adding a Pilz safety relay, with a single-chain E-stop arrangement because the MPG and E-stop buttons do not support dual-chain wiring; the Mesa receives a feedback input and the relay receives contactor-coil feedback. | This is a description of the owner’s in-progress hobby installation. The forum does not show a safety validation or certified design. |
| Servo motors | The original owner had reported buying two 1 kW MIGE servos for X/Y and one 1.8 kW MIGE servo for Z. The new owner’s remaining-work list says servo tuning remains. | The 2026 owner does not re-identify the installed motors by model or confirm that all 2014 parts were retained. Preserve the 2014 values as historical, not a verified current bill of materials. |
| Planned robot cell | Jeff says he obtained a FANUC 200iB robot to integrate with the LinuxCNC system; at the time of the post it did not boot. | Separate project hardware, not an operating part of the TC-225. Integration is explicitly planned and unverified. |

## Tool-changer feedback and open IO questions

Jeff says he still needs to remove the ATC cover and probe the encoder wiring. He identifies four optical BCD signals that report the active tool plus a separate deceleration signal, and says he does not have the original electrical schematics. He also lists integrating ATC logic, a Z-axis brake relay, servo tuning, and all new IO into LinuxCNC/HAL as unfinished work.

This gives a useful forum-reported signal count and functional description, but it does **not** map any signal to a connector, terminal, voltage, polarity, or Mesa pin. The four BCD bits and deceleration signal must not be treated as a usable pinout. The owner also reports that a 7i76E was accidentally damaged during initial wiring and replaced by a 7i76EU; this is part of the retrofit history, not a wiring procedure.

## Forum visuals

The thread contains earlier teardown/refinishing photographs and new-owner attachments showing the mill’s state in April 2024 and the cabinet/HMI work in March 2026. The forum text marks those attachments as blocked from the research extraction, so the image pixels have not been reviewed. They remain available from the [original CNCZone project log, now redirected through CNC Arena](https://www.cnczone.com/forums/vertical-mill-lathe-project-log/205110-cnc-manufacturing-machinist.html).

## Pinout and commissioning gaps

The forum provides a useful component and signal inventory but no full connector-level schematic, Mesa terminal map, motor/drive wiring, ATC encoder pin assignment, spindle VFD/encoder IO, robot handshakes, coolant wiring, E-stop schematic, interlock verification, or completed motion/cutting test. The machine remains an in-progress retrofit in the latest inspected post.

## Source

1. CNCZone project-log thread [“Brother TC-225 Rebuild & Retrofit”](https://www.cnczone.com/forums/vertical-mill-lathe-project-log/205110-cnc-manufacturing-machinist.html), currently redirected to CNC Arena as `Brother TC-225 Rebuild & Retrofit`. PIVOTALCUSTOMS’ posts dated 20 December 2013 to 24 April 2014 document purchase, tear-down, mechanical work, early controller plan, CS-LAB/MIGE component selection, and the still-uncommissioned status. Jeff (`jefflikesbagels`) revived the same thread on 28 March 2026, reporting the 2024 handoff, LinuxCNC/Mesa work, power conversion and cabinet changes, four BCD tool-position signals plus a deceleration signal, and remaining tasks. Claims from other participants are not used as this machine’s configuration.
