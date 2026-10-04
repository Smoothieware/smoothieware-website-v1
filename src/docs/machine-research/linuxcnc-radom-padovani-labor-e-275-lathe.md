# radom's Padovani Labor-e 275 lathe retrofit

## Machine and reported retrofit

LinuxCNC Forum member radom identifies the machine as a Padovani Labor-e 275 lathe. The owner bought it with a broken Fagor 8050 controller and reports Simodrive 611 drive modules with Siemens motors. The owner says the drives appeared to work when tested with a 1.2 V battery. Their retrofit started with Mesa 5i25 and 7i77 cards and reuse of existing cables.

In a July 2019 update, the owner said the retrofit appeared to be working and that they already had jobs to do. They had not yet tuned the PID loops; cables were still loose and machine lights were not installed. The owner reported testing a threading operation at 3 mm pitch and 400 rpm. This supports reported basic machining operation at that point, not complete commissioning or finished wiring.

The owner later identifies D1-8 spindle noses at both ends and a 108 mm spindle bore. A different forum participant mentions a Padovani Labor-e 200, and another mentions a Labor-e 255; those are separate machines and their details are not attributed to this Labor-e 275.

## Limited analog-signal wiring evidence

The owner says the existing shielded six-wire cable carried differential analog inputs for X, Z, and spindle together, with the shield formerly connected only at the old controller end. A LinuxCNC forum moderator provided a generic Mesa 7i77-to-drive analog-output recommendation in the thread:

| Forum advice for a 7i77 analog command pair | Role |
|---|---|
| `TB5 AOUT` | Connect to drive `IN+` |
| `TB5 AGND` | Connect to drive `IN−` and terminate the cable shield at the 7i77 end only |

This is a replyer's generic connection advice, not an as-built Padovani wiring schedule. The owner later reported that the machine appeared to work, but the inspected posts do not confirm the exact TB5 terminations or map the shared cable cores to axis and spindle drive contacts. No complete axis feedback, encoder, motor-power, drive-enable, field-I/O, spindle, or safety wiring diagram is supplied. Do not treat the partial analog example as a complete machine pinout.

## Forum source

- radom, “[Padovani Labor-e 275 lathe retrofit](https://www.forum.linuxcnc.org/30-cnc-machines/36886-padovani-labor-e-275-lathe-retrofit),” LinuxCNC Forum, inspected page 1, posts dated 2019-06-29 through 2019-11-22. The web cache did not return the remaining thread pages during this inspection.
