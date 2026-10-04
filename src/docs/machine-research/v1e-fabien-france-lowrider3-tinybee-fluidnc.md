# Fabien's LowRider 3 in France: MKS TinyBee and FluidNC

**Machine identity:** Fabien's individual LowRider CNC, rebuilt from his earlier LowRider 2 into an LR3 during 2023. This dossier follows one evolving physical machine; the earlier LR2 and converted LR3 are not counted as separate machines. The build thread title notes an MKS TinyBee controller and side-mounted Y belt.

**Evidence state:** The owner posted a FluidNC configuration on 5 July 2023 while reporting unresolved steps-per-mm values and two replacement stepper drivers. Later posts document router cuts, a LaserTree 10 W optical laser module, and a subsequent 1.5 kW spindle. At least the Y homing direction and spindle hardware later changed, so the published July configuration is a historical snapshot, not a validated current configuration.

**Novelty check:** On 2026-09-23, repository Markdown was searched for `Fabien`, `LR3 France`, `MKS TinyBee`, `side-mounted Y belt`, and the thread identity. No matching flat forum dossier or other machine record was found. This identifies a distinct owner build, not a unique LowRider design.

## Build and work area

Fabien began the earlier LR2 in November 2019. He reported unexpected mid-job shutdowns, later resumed it with a changed controller and other modifications, and managed a few cuts, but said operation remained unreliable. In June 2023, he used the LR2 to cut parts for the LR3 conversion. He reported that milling most of those parts failed; he cut mirrored plates from 5 mm plywood, glued them together, and noted that the LR2 was not square. He also said laser cutting 10–15 mm MDF or plywood caused substantial charring.

By 30 June 2023 the LR3 was assembled but still needed wiring and a table. Fabien described a wall-to-wall workbench 3 m long and 1.35 m wide. In the 5 July wiring post he said the front belt obstructed the table and that he moved it to the side. The thread records printed braces and a custom TinyBee enclosure, but it does not give a complete bill of materials or a measured cutting envelope.

An early motor test had X movement, while Z bound until Fabien changed to looser couplers; he described the result as working but squeaky. The same thread reports a Z calibration difference of about +4% from the printer used to make the conversion parts. These are owner observations from assembly, not machine metrology.

## Controller and published FluidNC configuration

On 5 July 2023, Fabien posted a configuration headed `MKS TinyBee V1.0 XYYZZ`. He said he was still investigating unusual `steps_per_mm` values and replacing two burnt drivers. The mapping below records the post as written. The thread does not establish whether the posted values were subsequently corrected or whether every assignment was tested. It must not be used as a wiring procedure.

### Board and step engine

| Setting | Published value |
|---|---|
| Board | `MKS TinyBee V1.0 XYYZZ` |
| Kinematics | Cartesian |
| I2S clock/data/word-select | GPIO25 / GPIO27 / GPIO26 |
| SPI MISO/MOSI/SCK | GPIO19 / GPIO23 / GPIO18 |
| SD chip-select | GPIO5 |
| SD card detect | GPIO34, active low; owner comment says jumper J2 must be set to SDDET |
| Step engine | `I2S_STATIC` |
| Idle timeout | 255 ms |
| Pulse / direction / disable delay | 4 μs / 1 μs / 2 μs |

### Axis parameters and motor signals

The pin names below preserve the `I2SO` labels from the owner's configuration. They are FluidNC logical assignments in that post; this table does not independently validate board connector routing, electrical levels, driver health, or endstop wiring.

| Axis / motor | Motion parameters | Limit assignment | Step / direction / disable |
|---|---|---|---|
| X / motor0 | 100 steps/mm; max rate 8000 mm/min; acceleration 80 mm/s²; max travel 850 mm; soft limits off; homing cycle 2, negative direction, mpos 0 mm, feed 300 mm/min, seek 1000 mm/min, settle 500 ms, seek/feed scalers 1.1 | Negative limit GPIO33 `:high:pu`; hard limits on; pull-off 5 mm | `I2SO.1` / `I2SO.2` / `I2SO.0` |
| Y / motor0 | 100 steps/mm; max rate 8000 mm/min; acceleration 70 mm/s²; max travel 1800 mm; soft limits off; homing cycle 3, negative direction, mpos 0 mm, feed 300 mm/min, seek 1000 mm/min, settle 500 ms, seek/feed scalers 1.1 | Positive limit GPIO35; hard limits off; pull-off 5 mm. Owner comment identifies this as the second-Y-axis limit on MT_DET. | `I2SO.4` / `I2SO.5` / `I2SO.3` |
| Y / motor1 | Second Y motor; owner comment says to use E0 driver | Positive limit GPIO32 `:high:pu`; hard limits on; pull-off 5 mm | `I2SO.10` / `I2SO.11` / `I2SO.9` |
| Z / motor0 | 1600 steps/mm; max rate 1000 mm/min; acceleration 60 mm/s²; max travel 75 mm; soft limits off; homing cycle 2, positive direction, mpos 0 mm, feed 50 mm/min, seek 200 mm/min, settle 500 ms, seek/feed scalers 1.1 | Positive limit GPIO22 `:high:pu`; hard limits on; pull-off 3 mm | `I2SO.7` / `I2SO.8` / `I2SO.6` |
| Z / motor1 | Second Z motor; owner comment says to use E1 driver | Positive limit GPIO36 `:high`; hard limits off; pull-off 3 mm | `I2SO.13` / `I2SO.14:low` / `I2SO.12` |

The configuration sets `soft_limits: false` on all axes. The early snapshot sets `positive_direction: false` for Y; in a later July post Fabien says he changed the machine to home Y+ so it parks beside his preferred location, with small blocks to trip the limit. That later change supersedes the July 5 Y homing direction, but no replacement full configuration is shown in the cited evidence.

### Controls, coolant outputs, spindle and laser

| Function | Published assignment and owner comments |
|---|---|
| Safety door | `NO_PIN` |
| Reset / feed hold / cycle start | Commented, not active in the posted block: GPIO35 low on MT_DET; GPIO36 low on TH1; GPIO39 low on TB |
| Macros 0–3 | `NO_PIN` |
| Flood / mist outputs | `I2SO.16` / `I2SO.17`; comments label these the heated-bed and HE0 terminal blocks |
| Router/spindle PWM | 2500 Hz, GPIO15 `:high`, tool 0, `s0_with_disable: true`, 4000 ms spin-up and spin-down, map 0–12000 to 0–100% |
| Laser PWM | 5000 Hz, GPIO2 `:high:pd`, tool 1, `s0_with_disable: true`, map 0–1000 to 0–100% |
| Start behavior | `must_home: false` |

Fabien's configuration comment warns that GPIO15 on EXP1 can emit brief pulses at boot that may activate the spindle, and suggests GPIO17 on EXP1 to avoid that behavior. The same block labels GPIO2 as the PWM on the 3D Touch connector and describes that connector as having `pdwn` plus PWM. These are the owner's comments, not independent verification of safe output behavior. The post does not provide a complete interlock, emergency-stop, laser-enable, grounding, or mains wiring diagram.

## Reported cutting and later changes

Fabien reported the LR3's first router cut in July 2023 while making a slot for a sliding door. He noticed X-axis deflection as the tool entered wood and asked whether he should increase the X driver Vref; the cited posts do not establish the cause or a confirmed correction.

In July he also said an 80 W-labelled, 10 W optical LaserTree module had been working well, while cuts thicker than 5 mm were difficult and heavily scorched. He noted that air assist was not connected at first and linked the scorch marks to that omission. Photos in the thread show the machine in use with a laser, but do not reveal its electrical wiring. The owner described designing a mount for the laser and a daughterboard mount inside the TinyBee case.

By 8 December 2023 Fabien said he had changed from a Makita clone to a 1.5 kW spindle; the forum post links a VEVOR spindle listing. He reported similar cutting speed and quality with the earlier router but less noise from the spindle, then reported 2 mm depth of cut at 1500 mm/min in oak and 3 mm at 2000 mm/min in HDF using a 6 mm roughing end mill. These are the owner's reported trials, not independently measured performance ratings.

Later posts describe installing the PSU inside the struts and fitting a printed drag chain. In December Fabien reported that the chain did not strike the wall but the rails tended to fall off their base, and he considered shortening it. In a later post he said he had run for months without an X limit switch because the original switch arm did not reliably reach its target, then described making a printed adapter. Those reports show ongoing mechanical changes; they do not provide an updated controller configuration.

## Forum photos reviewed

The first image shows the assembled LR3 spanning the large workbench in the workshop. It supports the overall layout and scale context only; no wiring detail is inferred.

![Fabien's LowRider 3 over the large workshop workbench, forum image IMG20230702235251](https://us2.dh-cdn.net/uploads/db5587/original/3X/8/5/8525d58f2e3886fbc853ab7d523a9077456fcb40.jpeg)

This image shows the tool gantry above sheet stock with a blue-violet light spot; it supports that the machine was used in the laser-cutting context described by the owner. It does not establish electrical connections, optical output, or safety interlocks.

![Fabien's LR3 tool gantry above sheet stock during the reported laser use](https://us2.dh-cdn.net/uploads/db5587/original/3X/1/f/1f7ca8e09fca14e2271b0963b34fd29fb905a7b6.jpeg)

## Evidence limits

The July 2023 YAML is a historical owner-posted configuration from a time when he explicitly reported replacing burnt drivers and investigating step calibration. Later changes are described narratively and do not include a complete replacement file. The thread does not supply a validated as-built wiring diagram, verified connector-by-connector map, full safety circuit, measured positioning accuracy, or authoritative confirmation that the old settings remain active. Do not copy the YAML into a machine or treat this dossier as wiring or laser-safety instructions.

## Forum sources

1. V1E.com Forum, Fabien, [“LR3 - France - MKS TinyBee / FluidNC - Side-mounted Y belt”](https://forum.v1e.com/t/lr3-france-mks-tinybee-fluidnc-side-mounted-y-belt/38766), opening posts and [posts 19–20](https://forum.v1e.com/t/lr3-france-mks-tinybee-fluidnc-side-mounted-y-belt/38766/19), 25 June–2 July 2023. Owner posts describe the LR2 history, conversion parts, first assembly, workbench dimensions, and posted photos.
2. Same thread, [post 24](https://forum.v1e.com/t/lr3-france-mks-tinybee-fluidnc-side-mounted-y-belt/38766/24), 5 July 2023, owner-posted MKS TinyBee / FluidNC configuration and the contemporaneous driver, calibration, belt and wiring issues.
3. Same thread, [page 2](https://forum.v1e.com/t/lr3-france-mks-tinybee-fluidnc-side-mounted-y-belt/38766?page=2), posts 23–40, 3–10 July 2023, owner motor test, first router cut and laser reports. Third-party replies are not treated as verified machine facts.
4. Same thread, [page 4](https://forum.v1e.com/t/lr3-france-mks-tinybee-fluidnc-side-mounted-y-belt/38766?page=4), July 2023, owner report of changing the Y homing direction to Y+.
5. Same thread, [page 5](https://forum.v1e.com/t/lr3-france-mks-tinybee-fluidnc-side-mounted-y-belt/38766?page=5), posts 81–91, 8–21 December 2023, owner reports on the later spindle, cuts, PSU, and drag chain.
