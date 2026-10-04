# moosedesign's Bridgeport Series 2 Interact 4 mill retrofit

**Machine identity:** A Bridgeport Series 2 Interact 4 CNC mill owned by forum member moosedesign, who relocated it from Canada to New Zealand. The exact year/model plate, travels, spindle motor rating, and original machine wiring are not transcribed in the thread. The thread title and owner identify the mill; `Bridgeport_Mill` is the LinuxCNC configuration directory/name shown in an attached error report.

**Novelty check:** On 2026-09-23, the flat machine-dossier directory, separate wiki dossier directory, and local survey HTML were searched for `moosedesign`, `Bridgeport Series 2 Interact 4`, and `7i92/7i85 with 7i83`. No matching dossier for this individual machine/retrofit was found. This is distinct from other Bridgeport Interact and BOSS machine dossiers.

## Machine history and intended use

The owner says he bought the machine in 2015 as a partly completed retrofit, temporarily put it back together with Mach3, and ran it for about seven years making parts for friends. The 2022 project was a move from that Mach3 setup to LinuxCNC. The opening post also describes an aging Dynapath system and identifies the machine as a Hurco bed mill in its topic history; the exact sequence of original Dynapath, the half-done retrofit, and the interim Mach3 arrangement is not fully documented. Do not assume the original control remained installed during the LinuxCNC conversion.

In the first forum photo, the mill is a substantial enclosed knee/bed-style machine with a large worktable and a pendant/control enclosure. The photo is dated 2017 in its EXIF, several years before the LinuxCNC conversion thread. Other attached images show machined parts from the machine, but do not prove those parts were made under LinuxCNC.

The owner describes the spindle as a metric Bridgeport-clone variable-speed belt head with an NMTB 30 spindle, controlled through contactors in the then-existing installation. X and Y had handwheels on their leadscrews; Z was power driven in the owner's initial description. The thread does not supply spindle speed range, motor details, work envelope, or an operating manual.

## Reported retrofit electronics

The first interface kit was a Mesa 5i25 with 7i76. The owner later reported a startup error, `hm2_5i25.0.7i76.0.0.output-00 does not exist`, and suspected that he had shorted the 7i76. The attached LinuxCNC error report records a 5i25 loading with generic I/O pins under its detected firmware and the missing `7i76` output pin; it does not independently establish that the board was physically damaged. The owner then set that configuration aside.

The replacement/test arrangement he documented was:

- Mesa 7i92 Ethernet host with 7i85 daughter card, using the `7i92_7i85xD.bit` firmware image.
- Mesa 7i83 analog-output and 7i84 digital-I/O Smart Serial boards for axes and I/O, plus a 7i73 serial operator-interface board.
- Allen-Bradley Ultra 3000i servo drives; the owner says these drives accept step/direction as well as 10 V control. His intended configuration used analog output with encoder feedback, although he initially returned to the 7i76 for tests.
- LinuxCNC 2.8, with PNCconf-generated HAL configuration. The first error-report attachment shows the AXIS display and XYZ coordinates.

The equipment list changed during troubleshooting. The owner reports that the 7i73 watchdog indicator worked, that he tested the 7i84, and that he later generated a configuration using a 7i92/7i77 selection in PNCconf with 7i84 serial I/O, then corrected the assigned analog pins to match his 7i83. He reported obtaining stable tuning values and planned to finish wiring relays for the tool changer and coolant before making a part. The thread does not confirm a later LinuxCNC production cut or a fully commissioned machine.

## Connector and signal evidence from the attached files

The opening post describes a proposed reuse of the machine's original controller cables through breakout boards: three female DB15 breakouts for encoder connectors, a DB25 breakout for the operator-panel connector, and an IDC40 breakout for the Dynapath I/O board. Those are owner-listed connector families and intended roles, not a complete pinout. No numbered contact-to-function table for the machine's DB15, DB25, IDC40, motor, encoder, or spindle cables appears in the thread.

An attached HAL file from the initial 5i25/7i76 attempt contains candidate logical mappings for X/Y/Z enables, coolant, spindle CW/CCW, axis home/limit inputs, cycle start, and E-stop. The output mappings are commented out in the later file, and the setup encountered a missing-pin error. They are therefore configuration drafts, not proof of the final physical wire assignments.

A later `analogue.hal` attachment explicitly names the logical E-stop input `hm2_7i92.0.7i84.0.0.input-00`. This is a LinuxCNC Smart Serial pin name, not a 7i84 screw-terminal number. The owner reported an `input-00` that appeared high with nothing connected, and later suspected a 7i84 fault or a field-power issue at `VFIELDA`/TB3; he also said TB2 I/O behaved as expected. Because the forum does not map those logical channel names to connector contacts in this build, do not translate them into terminal numbers.

| Evidence item | What is documented | What is not established |
|---|---|---|
| Original machine interface | DB15 encoders, DB25 operator panel, IDC40 Dynapath I/O were listed for breakout reuse | Pin numbers, signal direction/polarity, voltage domain, connector view, and final reuse |
| First 7i76 HAL draft | Candidate logical names for X/Y/Z enable, home/limits, coolant, spindle direction, cycle start, and E-stop | Wiring or operation; draft referenced a 7i76 output absent from the loaded firmware |
| 7i84 HAL test | `hm2_7i92.0.7i84.0.0.input-00` was assigned as external E-stop input | Actual TB contact number, stable input behavior, and final E-stop circuit |
| Axis/servo interface | Drives described as step/direction and 10 V capable; later plan used 7i83 analog output with encoder feedback | Drive connector numbers, encoder wiring/polarity, analog scaling, enable/interlock circuit, and axis-specific terminal map |

The forum discussion also notes a 24 V field supply at the 7i76 and a 5 V supply for the 7i92/logic path during tests. A forum moderator specifically reminded the owner that the 7i76 requires 8–32 V field power on its orange connector. These statements describe troubleshooting in this thread, not a safe power-up checklist for another machine. Match the board's own manual and actual wiring before applying power.

## Setup and troubleshooting chronology

1. The 5i25/7i76 configuration loaded step-generator pins but failed when HAL requested `hm2_5i25.0.7i76.0.0.output-00`. A Mesa support forum participant pointed out that a 7i76 requires compatible firmware, logic power, field power, and the correct host-card port. The attached configuration/error evidence supports a firmware/configuration mismatch as a possibility; the owner also suspected damage, so the physical board condition remains unknown.
2. The owner tested the 7i92/7i85 plus 7i84 setup and created an E-stop input in HAL. `input-00` appeared high without a connected input and did not change when he applied 24 V to that input. A Mesa forum moderator said the symptom looked like a damaged 7i84; the owner later reported working I/O on TB2 but no 24 V at `VFIELDA` for TB3 inputs. These are intermediate observations and forum diagnosis, not an independently verified root cause.
3. He tested the 7i83 analog output board and initially expected a voltage at an enable output. He later corrected himself after rereading the manual: that enable is a switch output, and he reported it working. No pin-level wiring diagram was posted.
4. On 23 January 2022, he reported that a PNCconf configuration based on a 7i92/7i77 with a 7i84 Smart Serial board worked after correcting the analog pin assignments to the 7i83. He tuned with the forum's general servo tutorial, reported P values around 150, and said the system appeared stable. A forum moderator cautioned that a Ziegler–Nichols method would halve the gain at oscillation; the owner had described backing off only 10 from the onset of oscillation. Treat his tuning as an incomplete report, not a validated servo-tuning recipe.
5. At that point he planned to finish relay wiring for the tool changer and coolant, then make a part. The thread's later December 2022 post is a different user's request for an Allen-Bradley Ultra 3000 wiring diagram; the original owner did not provide one there.

## Forum images reviewed

This older photograph shows the physical mill and its enclosure. It supports machine identification and broad layout only; its date predates the documented LinuxCNC change.

![Bridgeport Series 2 Interact 4 mill in its workshop](https://forum.linuxcnc.org/media/kunena/attachments/31070/IMG_1253-550x733_2022-01-17.jpg)

The next photograph shows a machined part held in a hand. The image demonstrates that the machine had been used to make parts in the earlier period; the post does not attribute it to LinuxCNC.

![Machined part shown in the retrofit thread](https://forum.linuxcnc.org/media/kunena/attachments/31070/IMG_3891-scaled-e1614331827803-768x641.jpeg)

The attached HAL Configuration screenshot lists Smart Serial channels such as `hm2_7i92.0.7i84.0.0.input-00`; it is software-state evidence, not a view of the 7i84 terminal block.

![LinuxCNC HAL Configuration showing 7i84 logical input pins](https://forum.linuxcnc.org/media/kunena/attachments/31070/HALConfig.jpg)

## Remaining unknowns and safe interpretation

No complete machine schematic, connector contact map, exact motor/encoder model list, Allen-Bradley drive part numbers, axis-specific voltage/current values, homing sensor map, spindle contactor circuit, tool-changer sequence, coolant relay circuit, safety-rated E-stop chain, protective-earth arrangement, or final LinuxCNC test cut is documented in the thread. The machine's LinuxCNC migration should be described as an in-progress retrofit with successful configuration experiments, not as a completed machine commissioning. The available HAL files are useful examples of software pin naming and troubleshooting history, but should not be copied as a machine wiring plan.

## Forum sources and inspected attachments

LinuxCNC Forum, moosedesign, [“Bridgeport Series 2 Interact 4 Retrofit”](https://forum.linuxcnc.org/12-milling/44851-bridgeport-series-2-interact-4-retrofit), posts #232167–#232865 and follow-up replies through #259900 (January 2022–December 2022). The first two pages include the owner’s setup history, hardware inventory, error investigation, Smart Serial/analog tests, and the unresolved production-cut plan.

Attachments inspected without execution: [`linuxcnc.txt`](https://forum.linuxcnc.org/media/kunena/attachments/31070/linuxcnc.txt), [`bridgeport.hal`](https://forum.linuxcnc.org/media/kunena/attachments/31070/bridgeport.hal), [`bridgeport_2022-01-18.hal`](https://forum.linuxcnc.org/media/kunena/attachments/31070/bridgeport_2022-01-18.hal), [`analogue.hal`](https://forum.linuxcnc.org/media/kunena/attachments/31070/analogue.hal), and [`pins.txt`](https://forum.linuxcnc.org/media/kunena/attachments/31070/pins.txt). Local inspection copies were not committed. SHA-256: `linuxcnc.txt` `8e1032be9b372570713c7a0c37ca618cea1ee0a79cbb406ea8b2e3ae5d2086eb`; `bridgeport.hal` `c0bfae6433b41ba9f3995f5c033e66be5570cda36ceb703239510fed0251864d`; `bridgeport_2022-01-18.hal` `ed9b647aefe8c4059c8f5aeb2c9599ddaa380595cfe35a4805a85ec3a5a01817`; `analogue.hal` `08350f5862b2ceb36281fa7d1364d39ef7d4e6e442b0a936ecf8060c2ac835b1`; `pins.txt` `36ff3ce4d3569eb720796d38a6f9cd95e5426f819d0445b4d3a6063f5a0c20f0`.
