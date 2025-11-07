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
