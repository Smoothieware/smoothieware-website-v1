# (Kossel) Alpha axis crashes into end stop AFTER successful homing

*Original post date: 2016-01-01*

---

tested the solution, and it works. I'm going to go with this. Thanks! 

Okay, so the user is talking about a problem with their Kossel 3D printer where the alpha axis crashes into the end stop after a successful homing. They mentioned they tested a solution and it works, so they're going to go with that. Let me break down what might be happening here.

First, I need to recall how Kossel printers work. Kossel is a delta printer, right? So the alpha, beta, and gamma axes are the three towers that move the print head. Homing in a delta printer usually involves moving each tower to its end stop to establish the origin point. If the alpha axis is crashing into the end stop, that suggests that during homing, the motor is moving too far, or the end stop isn't being detected properly.

The user mentioned they tested a solution. What could that be? Maybe they adjusted the end stop position, checked the wiring, or modified the firmware settings. Since they said it works now, maybe the issue was a misalignment in the end stop or a firmware parameter that was incorrect.

Another possibility is the homing sequence itself. If the homing G-code is not correctly configured, the printer might not stop at the end stop. For example, if the homing speed is too fast, the end stop might not trigger in time. Or maybe the end stop is not properly calibrated in the firmware.

Also, mechanical issues could be a factor. If the end stop is loose or not mounted correctly, it might not trigger when it should. The user might have checked the physical alignment of the end stop and made sure it's securely attached.

Another angle is the use of limit switches versus end stops. Some printers use limit switches that need to be triggered in a specific direction. If the switch is set up to trigger when the axis moves away from the end stop instead of towards it, that could cause the motor to keep moving past the stop.

The user might have also checked the connections to the end stop. If there's a loose wire or a faulty switch, the printer might not detect the end stop, leading to the motor continuing to move.

In firmware settings, parameters like the homing direction, the steps per unit, or the maximum position might be misconfigured. Adjusting these could resolve the issue. For example, if the maximum position for the alpha axis is set too high, the printer might not stop at the end stop.

Since the user confirmed the solution works, they probably addressed one of these issues. It's good that they tested it and found the fix. For others facing similar problems, checking the end stop alignment, wiring, firmware settings, and homing G-code would be the next steps.
</think>

The issue with the Kossel 3D printer's alpha axis crashing into the end stop after homing was resolved by addressing one of the following potential causes:

1. **End Stop Alignment or Mounting**: The end stop might have been misaligned or loosely mounted, preventing proper detection. Ensuring the end stop is securely fastened and correctly positioned relative to the axis movement would resolve this.

2. **Firmware Configuration**: Incorrect firmware settings (e.g., homing direction, maximum position limits, or steps per unit) could cause the printer to overshoot the end stop. Adjusting these parameters in the firmware to match the printer's mechanical setup would fix the issue.

3. **Homing G-code**: If the homing sequence in the G-code was improperly configured (e.g., incorrect speed or direction), the printer might not stop at the end stop. Modifying the G-code to ensure the axis stops correctly upon end stop detection would address the problem.

4. **Limit Switch Wiring**: A loose or faulty connection to the end stop (limit switch) could prevent the printer from detecting the stop. Checking and securing the wiring would ensure proper signal transmission.

By testing and confirming the solution, the user likely resolved one of these issues, allowing the printer to home correctly without crashing into the end stop. For others facing similar problems, systematically checking these areas is recommended.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150826210007/http://smoothieware.org/forum/t-980195/kossel-alpha-axis-crashes-into-end-stop-after-successful-hom)*
