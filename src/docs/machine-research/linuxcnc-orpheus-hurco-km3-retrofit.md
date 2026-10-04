# orpheus's 1984 Hurco KM3 LinuxCNC retrofit

## Machine and retrofit

Forum member orpheus identifies the machine as a 1984 Hurco KM3 with its original BX controller. The owner says it had been used by his father since they bought it in 1984. A carbonized servo lead sent approximately 60 V into the logic boards; attempted replacements did not resolve the servo-system problems, so the owner replaced the control while retaining the original Electrocraft servos and Randtronics servo amplifiers. The retrofit was completed in late October 2016 after about three weeks of work, according to the June 2017 forum post.

The owner reports using Mesa 5i20, 7i33, 7i42, and 7i37 hardware. A new spindle encoder was added for rigid tapping. Most of the left-hand control panel was retained, leaving much of the machine hardware-controlled. A sealed kiosk keyboard and mouse were added, primarily for NativeCAM. The owner also describes a LinuxCNC trajectory-planner change that exposed which axis was moving, so an independent Z feed override could reproduce a feature of the Hurco control that his father valued.

The forum post links a video of the machine pocketing acetal for a mould pattern and describes the retrofit as finished and operating. This is owner-reported evidence; the linked video is not treated as an independent source.

## Wiring evidence and limits

The post says the Mesa boards were mounted in a housing installed in the original logic-board enclosure and includes a photograph of the old control cabinet. Those photographs show installation context but do not provide a readable connector schedule or wire-by-wire mapping.

No axis-drive terminal assignments, Mesa connector contact map, spindle encoder pinout, safety-circuit diagram, I/O table, or drive parameter set is documented in the inspected thread. The exact Electrocraft servo and Randtronics amplifier model numbers are also not stated. The Mesa board model list is not a machine-specific wiring pinout; do not use it to infer connections.

## Forum source

- orpheus, “[Hurco KM3 Retrofit](https://www.forum.linuxcnc.org/show-your-stuff/32901-hurco-km3-retrofit),” LinuxCNC Forum, original post dated 2017-06-11; owner says the retrofit was completed in October 2016. Follow-up replies through 2020 were also inspected.
