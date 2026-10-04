# Ian's customized WorkBee CNC router

**Machine identity:** Ian's custom, all-in-one CNC router based substantially on the open-source WorkBee design above the spoilboard; the integrated cabinet/base and electronics arrangement below the spoilboard are Ian's own design.  
**Evidence state:** Ian reported the build finished on 29 March 2019, made successful MDF test cuts by 12 April, and reported working CNC-controlled spindle speed/enable functions. The thread does not show the later aluminium test result or a long-term reliability record.  
**Novelty check:** searches of `src/docs/` and `docs/` text on 2026-09-23 for “Ian”, the DIY Forums thread identifier, “WorkBee”, and the reported 1.5 kW spindle found no match outside this research directory. This is a text search and does not establish that no WorkBee documentation exists under another name.

## Frame and integrated cabinet

Ian says he bought the 6 mm black plates for a WorkBee build, then sourced other components separately to customize the machine. The upper machine, above spoilboard level, is mostly based on the WorkBee design; the structure below is his design. He describes the machine as an all-in-one unit with a more capable electronics bay, control panel, and storage for cutting stock.

The frame uses mainly Misumi 2020 aluminum extrusion, with 2020 V-slot extrusion for gantry parts. The forum thread does not provide overall dimensions, axis travel, measured accuracy, rail/screw configuration, or the exact WorkBee size variant. Do not infer a standard WorkBee envelope from the design family name.

## Spindle, electronics, and operator controls

The machine was built around a 1.5 kW spindle and a Huanyang VFD. Ian says the spindle's four-pin connector did not earth the spindle, so he opened it and corrected that issue. This owner-reported intervention is specific to the spindle he had; it should not be generalized to all spindles or treated as a wiring procedure.

Ian reports an electronics bay containing the VFD, Arduino controllers, Raspberry Pi, power supplies, and stepper drivers. The exterior has motor, probe, and endstop connection points, plus status indicators. The front panel includes start/hold/stop buttons, emergency stop, spindle-enable switch, touchscreen for job progress and control, and jogging joysticks. Two filter housings and exhaust fans are described as an airflow path intended to keep dust out; the owner was still evaluating the design.

He used shielded CY cable for spindle power, stepper, and control cables, intending to reduce electrical noise and prevent false endstop triggers. This is a description of his installation and intent, not a validated EMC test.

The spindle was reported to reach up to 24,000 rpm. Ian says CNC software controls VFD speed and enable; after calibration, selecting a speed on the touchscreen made the spindle start at the requested RPM. He also installed a physical switch required before the spindle could spin, and a relay was described as disabling the VFD enable input if the control board failed. The post does not provide circuit details or a safety validation of those functions.

## Test use

Ian's 29 March post says the machine was physically finished but that he still needed to order aluminum plate and planned to begin with feed/speed experiments in wood. On 12 April he reported a levelled spoilboard and successful MDF test cuts. He then planned a 100 × 100 × 10 mm cast-aluminum XYZ touch plate as an experiment and said he would start slowly while determining feeds and speeds. The inspected thread does not confirm the aluminum test result or publish a tested recipe.

## Pinout and operation limits

The forum includes a rear view showing groups of external motor, probe, and endstop connectors, but no terminal-by-terminal signal labels or connector pin map. The VFD speed/enable relationship is described only at a functional level. No Arduino/Raspberry Pi model, stepper-driver model, VFD terminal assignment, limit/probe polarity, control-board I/O map, emergency-stop circuit, or recovery procedure is documented. Do not use connector appearance or photographs to invent a pinout.

The owner stated that the machine was new to him and had not yet been fully put through its paces in March 2019. The successful MDF cuts reported in April are evidence of initial operation, not proof of reliable aluminum cutting, long-term performance, or present-day operating condition.

## Forum visuals

The original thread embeds a rear photograph of the motor/probe/endstop connection area and a front photograph of the control panel and integrated machine. The captured page identifies these as attachments in posts 1 and 2, but the image files were not successfully retrieved for pixel inspection in this pass. They are linked in context in the [DIY Forums build thread](https://www.diy-forums.com/threads/workbee-cnc-build.289863/), especially post 1 (29 March 2019). No wiring detail has been transcribed from the images.

## Forum sources

1. DIY Forums, Ian, [“Workbee CNC Build”](https://www.diy-forums.com/threads/workbee-cnc-build.289863/), started 29 March 2019. Post 1 covers design, frame, hardware, controls, and initial build state; post 3 (30 March 2019) adds VFD/control and cable details; post 5 (12 April 2019) reports successful MDF test cuts and a planned aluminum touch-plate test. Post 2 is adviser Retired's comment and is not treated as owner evidence.
