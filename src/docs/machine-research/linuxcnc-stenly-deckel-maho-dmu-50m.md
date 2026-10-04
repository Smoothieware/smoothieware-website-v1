# stenly's Deckel Maho DMU 50M LinuxCNC retrofit

## Machine and retrofit state

LinuxCNC Forum member stenly reports retrofitting a Deckel Maho DMU 50M with LinuxCNC and Mesa 7i97t plus 7i84u hardware. As of the inspected posts on 24 February 2026, the retrofit was not safe to use: on roughly three of five servo-enable/brake-release attempts, the Z axis dropped by about 10 mm, after which the servo drive showed a red fault LED and required a hard restart. stenly said the intermittent failure made the machine impossible to work with.

The machine retained Siemens Simodrive hardware; stenly identifies servo modules 6SN1118-0AD11-0AA1 and control board 6SN1121-0BA11-0AA1. The owner says the original Heidenhain TNC 310 did not exhibit the Z drop. The post describes a separately operated AC-power/E-stop circuit: the operator starts LinuxCNC, enables it with F2, manually powers the servo AC circuit, then a drive feedback signal returns to Mesa and HAL releases the brake after a short delay. The brake/release signal is shared across XYZ in the described setup.

Replies proposed possible causes including servo-drive timing and brake-control arrangements, but the inspected thread does not establish a diagnosis or successful remedy. Do not treat those suggestions as wiring or commissioning instructions. The thread's attachments were not readable in the inspected page text, so no full HAL, INI, schematic, or connector map is reproduced here. stenly also mentions having another exact DMU 50M with the original control; that is a separate machine, not this retrofit target.

## I/O and connector evidence

The inspected post gives board models and describes a logical sequence involving LinuxCNC enable, manually switched AC power, drive-ready feedback, and timed brake release. It does not identify the Mesa connector pins or screw terminals carrying those signals, electrical levels, contact numbers, or full machine harness mapping. This is not a pinout.

## Forum source

- stenly, [“DMU 50M retrofit 99% done, Z axis falling on brake release”](https://forum.linuxcnc.org/38-general-linuxcnc-questions/58415-dmu-50m-retrofit-99-done-z-axis-falling-on-brake-release), LinuxCNC Forum, inspected page 1, posts dated 2026-02-24.
