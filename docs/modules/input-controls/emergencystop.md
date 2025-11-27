---
permalink: /emergencystop
---


# Emergency Stop Setup

This chapter should give you an idea about how to realize a proper emergency stop setup.

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Warning</strong><br><br>
  The Smoothieboard is not able to ensure that in case of an accident or some other reason that requires an emergency stop, to safely stop your machine!

  There may be flaws in the code or in the board itself that cause the emergency stop (if only wired to the Smoothieboard) to not work properly.

  Even in industrial grade CNC controllers it is necessary to have an external emergency circuit (If the CNC controller does not provide safety integrated features).
</sl-alert>
{:/nomarkdown}

A small 3D printer driven by a Smoothieboard may not endanger a user under normal conditions due to the small stepper motors used, but if the machine gets bigger the risk also increases.

Anyway, it's always a good idea to have a proper emergency circuit in place to prevent any kind of danger.

## Basic Emergency Stop Setup

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>E-stop wiring</strong><br><br>
  For safety reasons, emergency buttons are wired as NC (normally closed) switches. This makes sure that in case of a cable break, an emergency stop is triggered.
</sl-alert>
{:/nomarkdown}

To provide the bare minimum of safety, you should be able to stop all motors immediately in case of an accident.

To do so, you could just use the play/pause switch of the Smoothieboard, but as mentioned above, this could not work properly for several reasons.

Instead, you should rely on an external circuit that cuts the power for the steppers.

{::nomarkdown}
<div style="text-align: center; margin: 2rem 0;">
  <a href="/images/temporary/emergency-stop-generic.jpg">
    <img src="/images/temporary/emergency-stop-generic.jpg" alt="Emergency Stop Wiring 1" style="min-width: 640px; height: auto;"/>
  </a>
</div>
{:/nomarkdown}

The Emergency stop button can be wired directly in the + line of VBB to achieve this, but maybe the current for the stepper motors exceeds the ratings of the push button.

So it's a better idea to use a contactor/relay that switches the VBB and the Emergency stop button just switches the contactor/relay.

{::nomarkdown}
<div style="text-align: center; margin: 2rem 0;">
  <a href="/images/temporary/emergency-stop-generic.jpg">
    <img src="/images/temporary/emergency-stop-generic.jpg" alt="Emergency Stop Wiring 2" style="min-width: 640px; height: auto;"/>
  </a>
</div>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Logic Power Supply</strong><br><br>
  If you interrupt the VBB line for emergency stop, the Smoothieboard may be powered off as well if you use the voltage regulator on board to supply the MCU.

  To avoid this, you can power it separately by supplying 5V to the same connector. For details, check out the section about <a href="main-power-input">power input</a>.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Contactor Coil Voltage</strong><br><br>
  Make sure that the rated voltage of your contactor coil is the same as your PSU output voltage! If that doesn't apply, you need to separate the pushbutton and coil circuit from the voltage switched by the contactor.
</sl-alert>
{:/nomarkdown}

This setup will stop all parts that are powered through the VBB connector.

But be aware that the Smoothieboard will continue to send pulse signals. If you release the emergency stop button, the drives will continue to move!

But there is a way to stop the Smoothieboard as well, described in the next chapter.

## Advanced Emergency Stop Setup Example

This wiring will stop all motor movement and all power outputs as long as they are powered through the VBB connector.

If you power them from another source, you need to add contactors for that supply or use the same circuit.

Below is an example of how a proper emergency stop circuit for my 3 axis CNC mill with a dual Y-axis and a VFD could be realized.

We assume all stepper drivers are external ones.

{::nomarkdown}
<div style="text-align: center; margin: 2rem 0;">
  <a href="/images/temporary/emergency-stop-generic.jpg">
    <img src="/images/temporary/emergency-stop-generic.jpg" alt="Emergency Stop Wiring 4" style="min-width: 640px; height: auto;"/>
  </a>
</div>
{:/nomarkdown}

We assume the mill is large, let's say 1.2m by 1.2m big, that means that a normal person needs more than one e-stop button because you want to make sure that you can reach one from every position around the machine.

The four buttons (S1 - S4, all NC) are simply wired in series, that means that if one is pressed, the contactors are all going to be switched off because they are no longer supplied with 24VDC.

The separate 24VDC power supply is needed because the external stepper drivers are supplied with a higher voltage, 60VDC for example, and getting contactors with that coil voltage is not easy.

The push button S5 is a normal OFF button, S6 is the ON button, K1 is the self-latching relay.

We have four 60VDC power supplies, one for each stepper driver, therefore we will use 4 separate contactors, one for each driver.

The VFD is powered via mains directly, so we will disconnect it as well.

<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>Stay Alive</strong><br><br>
  Working with mains voltage and even DC voltages above 50VDC is considered deadly! Make sure you know what you do or if not, ask a person with the necessary skills to help you!
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  Maybe the VFD has an E-Stop input and I'm going to use that input and not the mains variant, but that needs to be checked for the certain VFD.
</sl-alert>
{:/nomarkdown}

The K1 relay is wired to the play/pause button ([see the details here](pausebutton)).

This has the effect that if you push an emergency stop button, the Smoothieboard will be stopped as well.

So if you release the button, the machine will not start to move again.

## Hardware vs Software Emergency Stop Methods

It's important to understand the difference between hardware and software emergency stop methods:

**Hardware Emergency Stop (Recommended for Critical Applications):**
- External circuit that physically cuts power to stepper motors and other components
- Works independently of the Smoothieboard firmware
- Most reliable method as it doesn't depend on software functioning correctly
- Examples: Emergency stop button wired to contactor/relay that interrupts VBB power

**Software Emergency Stop (Kill Button Module):**
- Uses Smoothieboard firmware to halt operations when a kill button is triggered
- Configured via the Kill Button Module (see link below)
- Depends on firmware responding correctly to the kill signal
- Less reliable than hardware methods for critical safety applications
- Can be used in combination with hardware methods for defense-in-depth

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Software-Based Emergency Stop</strong><br><br>
  For software-based emergency stop functionality using the Kill Button Module, see the <a href="/killbutton">Kill Button Module documentation</a>. This provides firmware-level emergency stop that can complement (but should not replace) hardware-based emergency circuits.
</sl-alert>
{:/nomarkdown}

## Kill Button Safety Configuration

If you're using the software-based Kill Button Module, the `unkill_enable` configuration option controls whether the board can recover from a kill state:

<setting v1="kill_button.unkill_enable" v2=""></setting>

**When `unkill_enable` is set to `false` (safer option for critical applications):**
- The board **cannot** recover from a kill state through software commands
- A physical reset or power cycle is required to resume operations
- This prevents accidental restart after an emergency stop
- Recommended for machines where safety is critical
- Ensures human intervention is required before restart

**When `unkill_enable` is set to `true`:**
- The board can be "unkilled" through software commands
- Less safe as the machine could potentially restart without physical intervention
- May be appropriate for non-critical applications or testing

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Safety Recommendation</strong><br><br>
  For critical applications, always set <code>unkill_enable = false</code> to ensure that recovery from an emergency stop requires physical reset or power cycle. This adds an extra layer of safety by requiring human intervention.
</sl-alert>
{:/nomarkdown}

## Testing Emergency Stop Functionality

After configuring your emergency stop setup, it's essential to verify that it works correctly:

### Testing Software Kill Button

1. **Check endstop states** using the <mcode>M119</mcode> command in the console
   - This will show the current state of all configured endstops and kill buttons
   - Verify that your kill button shows the correct state (triggered/not triggered)

2. **Test software emergency stop** with the `M112` command
   - Send `M112` from the console to trigger a firmware emergency stop
   - Verify that all motion stops immediately
   - If `unkill_enable = false`, verify that you cannot resume without reset/power cycle
   - If `unkill_enable = true`, test the unkill command to verify recovery works

3. **Test physical kill button**
   - Press the physical kill button
   - Verify all motion stops immediately
   - Check that the board enters kill state
   - Attempt to send motion commands (they should be rejected)
   - Test recovery procedure appropriate to your configuration

### Testing Hardware Emergency Stop

1. **Test contactor operation**
   - Press emergency stop button
   - Verify that power to motors is immediately cut
   - Check that contactor releases audibly/visibly
   - Verify motors are de-energized

2. **Test multiple e-stop buttons** (if applicable)
   - Test each emergency stop button individually
   - Verify all buttons trigger the emergency stop circuit

3. **Test recovery procedure**
   - Release emergency stop button
   - Verify motors do not restart automatically
   - Test ON button (if using latching circuit)
   - Verify clean power restoration

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>Regular Testing</strong><br><br>
  Emergency stop systems should be tested regularly (weekly or monthly depending on machine usage) to ensure they remain functional. Include emergency stop testing in your machine maintenance checklist.
</sl-alert>
{:/nomarkdown}

## Troubleshooting

### Kill Button Not Responding

If your software kill button is not working correctly, check these common causes:

**Wrong Pin Configuration:**
- Verify the pin specified in your configuration matches the physical connection
- Check the pin naming convention (format: `2.12`, not `P2.12` or `2_12`)
- Ensure the pin supports input functionality (refer to pinout diagrams)

**Inverted Logic:**
- Kill buttons typically use NC (normally closed) wiring for safety
- If the button appears to work backwards, check the `!` (invert) prefix in your pin configuration
- NC buttons should typically use `!` prefix (e.g., `kill_button.pin !2.12`)

**Wiring Issues:**
- Verify NC (normally closed) connection for safety (cable break triggers stop)
- Check for loose connections or damaged wiring
- Test continuity with a multimeter
- Verify pull-up/pull-down resistor configuration if needed

**Configuration Not Loaded:**
- Verify the Kill Button Module is enabled in your configuration
- Check that configuration changes were saved to the SD card
- Confirm the board was reset after configuration changes
- Look for configuration errors in the console output during boot

**Testing with M119:**
- Use <mcode>M119</mcode> command to check current kill button state
- Press and release the button while monitoring <mcode>M119</mcode> output
- The state should change when button is pressed/released
- If state doesn't change, there's likely a wiring or configuration issue
