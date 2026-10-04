# petmakris's MAHO MH500W LinuxCNC retrofit

## Machine and retrofit state

LinuxCNC Forum member petmakris describes retrofitting an approximately 1989–1990 MAHO MH500W with about 500 × 350 × 380 mm axis travel. The machine uses Indramat servos and a 3TRM2 amplifier, and has a 2.2 kW three-phase spindle motor with variable-pulley speed control. The retrofit uses Mesa 7i97 and 7i84 boards and a MinisForum GK41 computer.

In a December 2023 update, petmakris reports that the machine was working and calls the retrofit successful, while noting unresolved accuracy issues thought to be related to ballscrews. The same thread later includes a different member's separate MH500W2 conversion; that second machine is not included in this dossier.

## Logical control signals described in forum posts

The owner distinguishes `/ESTOP`, described as an external E-stop input, from `P_ON`, used to control relay K1. The owner says `/ESTOP` going low deactivates the amplifier and that handwheel-related amplifier deactivation can be done through 8K1, 9K1, and 10K1. The 8K1/9K1/10K1 outputs are described as directly driven by LinuxCNC outputs. These are forum-described logical/control roles only; the inspected source does not establish Mesa physical terminal numbers, connector positions, wiring polarity/voltage at every interface, or a complete harness map.

## Forum source

- petmakris, [“Retrofitting a MAHO MH500W '89-'90 with hand-feed”](https://forum.linuxcnc.org/30-cnc-machines/47876-retrofitting-a-maho-mh500w-89-90-with-hand-feed), LinuxCNC Forum, inspected search-indexed posts from 2023-01-07 through 2023-12-07; the direct page fetch was unavailable in this session.
