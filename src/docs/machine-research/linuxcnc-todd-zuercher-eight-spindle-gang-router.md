# Todd Zuercher's eight-spindle gang router

## Machine and rebuild

LinuxCNC Forum member Todd Zuercher describes an eight-spindle gang router with eight independent Z axes driven by closed-loop stepper motors, tandem servos on the Y gantry, and a servo on X. The machine evolved from his first LinuxCNC retrofit. Originally, it had three joints and one servo moving a large aluminium plate carrying all eight spindles; each spindle's depth was adjusted manually. The Y gantry used paired helical rack-and-pinion drives joined by a long torque tube, while X used a servo and leadscrew.

After about 20 years of use, the owner refreshed much of the machine's linear motion. X received new linear ways and a directly coupled 25 mm × 5 mm lead ballscrew. Y received larger linear ways and two 25 mm × 10 mm lead ballscrews with 2:1 belt reduction, driven by the existing Y and former Z servos. The former Z plate was divided into eight spindle mounts, each with linear ways, a ballscrew, and a NEMA 23 closed-loop stepper.

The owner supplied a LinuxCNC configuration directory with the post. Each spindle is represented as an extra joint under a dummy master Z joint. The operator panel enables only selected spindle joints, offsets each from the master, homes disabled joints, and supports probing each tool to update that spindle's tool offset. The owner posted in September 2024 that the retrofit was essentially complete, but the machine was likely to be sold at auction before it returned to production. In November 2024, the owner said the auction was scheduled for 2024-12-18; the inspected forum thread does not establish the sale outcome.

## Logical I/O evidence in the attached configuration

The forum attachment `Digital68ZConfig.zip` contains a `Digital6/Digital6.hal` file. It uses a Mesa 5i25 with a 7i84 Smart Serial board in its configuration. The file assigns these LinuxCNC logical channels:

| HAL role in the configuration | Logical channel |
|---|---|
| J4 through J9 enable outputs | `hm2_5i25.0.7i84.0.0.output-00` through `output-05` |
| X enable output | `hm2_5i25.0.7i84.0.0.output-06` |
| E-stop output | `hm2_5i25.0.7i84.0.0.output-13` |
| Vacuum output | `hm2_5i25.0.7i84.0.0.output-14` |
| J4 through J11 home inputs | `hm2_5i25.0.7i84.0.0.input-00-not` through `input-07-not` |
| J4 through J11 error inputs | `hm2_5i25.0.7i84.0.0.input-08` through `input-15` |
| X maximum limit, minimum home, fault | `input-16-not`, `input-17-not`, `input-18` |
| Y maximum home, minimum limit, fault | `input-19-not`, `input-20-not`, `input-21` |
| Second Y-side home, limit, fault | `input-22-not`, `input-23-not`, `input-24` |
| Probe input | `input-25-not` |
| X-enable verification, E-stop input | `input-30`, `input-31` |

These are configuration-level Smart Serial signal names, not 7i84 screw-terminal numbers. The attachment does not prove the field wiring, connector view, voltage domains, or that the archived version was the final machine state. Some output channels are deliberately commented as unused; the table records the HAL file's configured roles only. Do not use it as a physical wiring map.

## Forum source and attachment identity

- Todd Zuercher, “[8 Spindle Gang Router](https://www.forum.linuxcnc.org/show-your-stuff/53675-8-spindle-gang-router),” LinuxCNC Forum, posts dated 2024-08-27 through 2024-11-25.
- Forum attachment, [`Digital68ZConfig.zip`](https://www.forum.linuxcnc.org/media/kunena/attachments/3190/Digital68ZConfig.zip), downloaded and inspected as an archive without running its contents. SHA-256: `db878b053b6daf001ed143395a9b337229682a2eb47cd35240bf082db364d415`.
