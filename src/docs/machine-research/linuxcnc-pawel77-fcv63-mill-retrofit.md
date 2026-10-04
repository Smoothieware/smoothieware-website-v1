# pawel77's FCV63 milling-machine LinuxCNC retrofit

## Machine and reported retrofit

LinuxCNC Forum member pawel77 identifies the machine as an FCV63 milling machine. In a post dated 2024-01-28, the owner says it was converted to CNC using Mesa 7i97 and 7i84 hardware plus a PLC. The machine has DC motors and MEZOMATIK DC servo drives, and the owner says it remains usable as a conventional manually operated mill while also supporting CNC operation.

The spindle gearbox has two stages. The owner reports that its gear-change program runs separately in the PLC and the PLC signals LinuxCNC when the gearbox is ready. At the time of the post, the owner said the gearbox could still be troublesome because of its solenoid valves and mechanical gears. The owner also says a forum-linked video shows the mill cutting under load, with the demonstration described as a test.

## Configuration evidence from the attached project

The forum post attaches a ZIP project archive. Its `FCV63.hal` configuration names the HostMot2 Ethernet board as `hm2_7i97` and includes these logical LinuxCNC channel assignments:

| Function named in the HAL file | Logical channel in the attached configuration |
|---|---|
| X home | `hm2_7i97.0.7i84.0.0.input-31-not` |
| X limit | `hm2_7i97.0.7i84.0.0.input-02` |
| Y home | `hm2_7i97.0.7i84.0.0.input-24-not` |
| Y limit | `hm2_7i97.0.7i84.0.0.input-04` |
| Z home | `hm2_7i97.0.7i84.0.0.input-03-not` |
| Z limit | `hm2_7i97.0.7i84.0.0.input-05` |
| Spindle-at-speed | `hm2_7i97.0.inmux.00.input-10` |
| Spindle PLC-ready check | `hm2_7i97.0.7i84.0.0.input-06` |
| Panel spindle-stop input | `hm2_7i97.0.7i84.0.0.input-15-not` |
| Spindle start request | `hm2_7i97.0.inmux.00.input-00` |
| Spindle-enable signal to PLC | `hm2_7i97.0.ssr.00.out-03` |
| Gearbox spindle-start outputs | `hm2_7i97.0.ssr.00.out-04` (CW) and `.out-05` (CCW), gated by the PLC-ready signal |
| Motion-enabled indicator | `hm2_7i97.0.ssr.00.out-00` |

These are logical HostMot2/HAL signal names copied from the forum attachment, not physical screw-terminal numbers. The ZIP does not, in the inspected files, establish the installed 7i97 connector revision, terminal-to-channel mapping, field wiring, polarity at the machine, or independent verification that the archived configuration exactly matches the running machine. Do not use this table alone to wire hardware.

The attached HAL configuration also shows three closed-loop axis PID sections and a fourth spindle PID section, with encoder feedback and PWM-generator outputs. The separate spindle HAL file contains timing and PLC-interlock logic for the two spindle directions. The archive contains LinuxCNC INI/HAL files, PLC project files, and user-interface resources, but these are owner-supplied project artifacts rather than an independently validated as-built schematic.

## Forum source and attachment identity

- pawel77, “[Retrofit FCV63](https://forum.linuxcnc.org/show-your-stuff/51516-retrofit-fcv63),” LinuxCNC Forum, posts dated 2024-01-28.
- Forum attachment, [`FCV63_v2-20240128T202305Z-001.zip`](https://forum.linuxcnc.org/media/kunena/attachments/22669/FCV63_v2-20240128T202305Z-001.zip), downloaded and inspected as an archive without running its contents. SHA-256: `7def81413bc50070cff81931266a69ad844d488916298a0c2a4aa6eb20e3ddf9`.
