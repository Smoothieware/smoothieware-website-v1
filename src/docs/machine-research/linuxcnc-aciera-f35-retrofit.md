# Reto’s Aciera F35 CNC LinuxCNC retrofit

**Machine identity:** Reto (`Rx13bTT`)’s individual Aciera F35 CNC, bought with the goal of converting it to LinuxCNC. The owner describes retaining the original brushed DC servos and glass scales while replacing/augmenting the control system. This is distinct from other Aciera F35s and from generic F35 wiring.

**Novelty check:** On 2026-09-23, repository Markdown and HTML were searched for `Rx13bTT`, `Aciera F35`, and the thread title; no existing matching dossier was found, including in the separate wiki dossier directory and local atlas. Exact-text absence is not proof against differently named coverage.

**Operating state:** In December 2020 the owner was troubleshooting oscillation and follow error. He later reported successful jogging without swinging after changing the feedback to step-generator feedback and setting the scale to -4000, but said the servo sound was not smooth and he still planned to reconnect the glass scales. On 10 January 2021 he reported first chips, said tuning had been the issue, and described the result as mostly fine. He reported approximately 0.005 mm glass-scale resolution and adding 0.001 mm or more deadband. The post’s last reported state is not a complete commissioning or accuracy report.

## Owner-reported hardware and control path

| Area | Reported details | Limits and attribution |
|---|---|---|
| Machine | Aciera F35 CNC, described by the owner as an older machine. | Year, travel, spindle options, and serial/revision are not given. |
| Servos | Three original fitted BBC/CEM FDE T4C4B3 brushed DC servos; owner gives 200 V, 12.8 A, approximately 2.5 kW. | Which value applies per motor and the exact motor/drive wiring are not mapped in the post. These are owner-reported nameplate details. |
| Servo drives | Three Granite Devices Argon drives. Owner said he tuned in torque and velocity modes and could move smoothly in the vendor software. | The owner initially considered velocity mode, but forum advice says the Mesa 7i95 path requires position mode and 7i77 is the velocity-mode route. The thread does not independently validate drive parameters. |
| Command and feedback | Owner says the Mesa 7i95 sends step/direction to the Argons. New 5000-count rotary encoders were fitted to the servos. | Connector, step/dir timing, encoder wiring/polarity, scale factors for each axis, and electrical levels are not established by this dossier. |
| Linear feedback | Original glass scales pass through a SIN/COS signal converter to the Mesa 7i95; the owner’s goal was dual-loop control. | Converter make/model, signal levels, pin/channel assignment, and final dual-loop configuration are not specified. |
| Software/configuration | LinuxCNC HAL and INI configuration; the owner posted initial `.ini` and `.hal` attachments and later said he attached the latest versions. | Forum attachment downloads were not recoverable in this pass. Do not substitute the example INI/HAL posted by another forum member: those snippets explicitly came from that respondent’s own configuration. |

## Tuning sequence reported in the discussion

The owner first reported oscillation that grew after direction changes, large follow error, and lingering motion after jogging. Forum respondents recommended tuning the Argon drives separately, creating a basic step/dir configuration, and only then adding encoder feedback. One respondent specifically said the 7i95 requires the drives in position mode; analog velocity command was described as a 7i77 use case. These are forum participants’ advice, not universal vendor commissioning instructions.

The owner later reported switching HAL position feedback to `stepgen.00.feedback-fb`, changing `STEP_SCALE` to `-4000`, and obtaining jogs that ended without swinging. He still described the servo as not sounding smooth and intended to reconnect the glass scales. In January he reported first chips; he attributed remaining stationary micron-range motion to the 0.005 mm scale resolution and said deadband of at least 0.001 mm helped. These values are historical context for this owner’s setup, not safe presets for another machine.

## Forum visuals and attachments

The thread offers two initial owner configuration attachments (`.ini`, 4 KB; `.hal`, 15 KB) and later says the final HAL/INI were attached. A supported retrieval attempt through the forum attachment links returned an internal fetch error, so their contents could not be inspected. The thread’s tuning plot is discussed by participants, but the plotted pixels were not inspected here. Consult the [original LinuxCNC thread](https://forum.linuxcnc.org/38-general-linuxcnc-questions/40847-retrofit-aciera-f35-cnc-axis-don-t-stand-still) for attachments and discussion.

## Pinout and commissioning limits

The post names the Mesa 7i95, Argon drives, encoder feedback, and SIN/COS conversion, but does not provide an owner-authored full connector map. No E-stop/safety chain, home/limit assignment, spindle control, axis connector pinout, feedback scaling per axis, or final glass-scale reconnection is verified. The example code in a reply belongs to a different machine and uses `hm2_7i76e`; it is deliberately not presented as Reto’s wiring. Do not use this dossier as a wiring recipe or as a substitute for the exact drive/card documentation.

## Source

1. LinuxCNC Forum, Reto (`Rx13bTT`), [“Retrofit Aciera F35 CNC, Axis don't stand still”](https://forum.linuxcnc.org/38-general-linuxcnc-questions/40847-retrofit-aciera-f35-cnc-axis-don-t-stand-still), owner posts dated 12–13 December 2020 and 10 January 2021. Owner posts establish the machine, drives/motors, Mesa command card, feedback intent, reported tuning changes, first chips, scale resolution, and deadband. Forum guidance is labeled as such and is not elevated to a confirmed machine fact.
