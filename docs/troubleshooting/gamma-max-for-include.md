# Configuring Z height

After homing (with {::nomarkdown}<gcode>G28</gcode>{:/nomarkdown}), the machine knows it is at Z maximum position if your machine homes to max, and at Z minimum position if your machine homes to min.

Because of this, it will read the configuration option {::nomarkdown}<setting v1="gamma_max"></setting>{:/nomarkdown} or {::nomarkdown}<setting v1="gamma_min"></setting>{:/nomarkdown} depending and set the current Z position to that value.

So after homing, the Z position is set to {::nomarkdown}<setting v1="gamma_max"></setting>{:/nomarkdown} or {::nomarkdown}<setting v1="gamma_min"></setting>{:/nomarkdown}.

This means for example if you home to max that if your hotend is 300mm above your bed after homing, and you set {::nomarkdown}<setting v1="gamma_max"></setting>{:/nomarkdown} to 300, after homing, you can just tell the machine to go to Z position 0, and it will go to the bed's height.

To put it simply, setting {::nomarkdown}<setting v1="gamma_max"></setting>{:/nomarkdown} or {::nomarkdown}<setting v1="gamma_min"></setting>{:/nomarkdown} is your way of telling Smoothie what the distance is between your bed, and the hotend, when the machine has just homed.

To find the right value for {::nomarkdown}<setting v1="gamma_max"></setting>{:/nomarkdown} or {::nomarkdown}<setting v1="gamma_min"></setting>{:/nomarkdown} do one of the following: 

## Simplified manual adjustment method (Recommended method)

First home the machine:

```
G28
```

Then move to the point the machine currently thinks is Z 0:

```
G0 Z0
```

Then move the head to the bed by jogging, using [Pronterface](pronterface)'s arrows, the panel, the web interface or whatever other method is adequate in your case.

Finally issue the {::nomarkdown}<mcode>M306</mcode>{:/nomarkdown} Z0 command which will use the current Z position as a homing offset:

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  You cannot use <mcode>M306</mcode> unless you have Z homing endstops, if you can't home Z then you can't set homing offsets.
</sl-alert>
{:/nomarkdown}

```
M306 Z0
```

Then save to the SD card with {::nomarkdown}<mcode>M500</mcode>{:/nomarkdown}:

```
M500
```

Next time you home, the machine will know how high above the bed it is.

{::nomarkdown}
<a href="/images/height-adjustment.png">
  <img src="/images/height-adjustment.png" alt="Height adjustment diagram showing the Z axis configuration" style="display: block; margin: 2rem auto; min-width: 640px; width: 80%; max-width: 800px;"/>
</a>
{:/nomarkdown}


## Finding gamma_max manually

First home the machine:

```
G28
```

Then set the current Z position to 0:

```
G92 Z0
```

Then move the head to the bed by jogging, using [Pronterface](pronterface)'s arrows, the panel, the web interface or whatever other method is adequate in your case.

Once the head is exactly at the bed, issue this command:

```
M114
```

This will return the position of all axes. The current position of the Z axis is the value you must use as your {::nomarkdown}<setting v1="gamma_max"></setting>{:/nomarkdown} value.

Now simply edit the [configuration file](configuring-smoothie) to set this value, and reset the board.

Alternatively (delta only) you can use the {::nomarkdown}<mcode>M665</mcode>{:/nomarkdown} Z(distance) command to set the value in the [config override system](configuring-smoothie), and {::nomarkdown}<mcode>M500</mcode>{:/nomarkdown} to save that value to the SD card.

The {::nomarkdown}<setting v1="gamma_max"></setting>{:/nomarkdown} value in the configuration file is ignored if {::nomarkdown}<mcode>M665</mcode>{:/nomarkdown} is set and saved.

Next time you home, the machine will know how high above the bed it is.

## Finding gamma_max with a probe

If you have some sort of probe attached to your head ( or below your head ), which triggers when the hotend gets close to the bed, then you can use this to find your gamma_max value without manually jogging.

Now there are two different cases here:

* Either when the probe is triggered, the hotend is exactly at bed level (this is the case of probes under the bed, or probes that trigger when the hotend itself is pushed)
* Or, when the probe is triggered, the hotend is above the bed by a given distance, which we will call the z probe offset (this is the case of servo-retracted probes, bltouch, inductive probes, IR probes, etc).

{::nomarkdown}
<a href="/images/temporary/3d-printer-probe.jpg">
  <img src="/images/temporary/3d-printer-probe.jpg" alt="Diagram showing Z probe offset measurement" style="display: block; margin: 2rem auto; min-width: 640px; width: 80%; max-width: 800px;"/>
</a>
{:/nomarkdown}

First home the machine:

```
G28
```

Then ask the probe to go find the bed:

```
G30
```

This will report the distance traveled by the probe.

Your {::nomarkdown}<setting v1="gamma_max"></setting>{:/nomarkdown} value is that reported distance, plus the z probe offset ( distance between the probe triggering point, and the bed ).

For example, if you home, then do {::nomarkdown}<gcode>G30</gcode>{:/nomarkdown}, and it reports a height of 311mm, and your probe is 7mm below your hotend, then your {::nomarkdown}<setting v1="gamma_max"></setting>{:/nomarkdown} is 311 + 7 = 318mm.

Simply edit the [configuration file](configuring-smoothie) to set this value, and reset the board.

Alternatively you can use the {::nomarkdown}<mcode>M665</mcode>{:/nomarkdown} Z(distance) command to set the value in the [config override system](configuring-smoothie), and {::nomarkdown}<mcode>M500</mcode>{:/nomarkdown} to save that value to the SD card.

The {::nomarkdown}<setting v1="gamma_max"></setting>{:/nomarkdown} value in the configuration file is ignored if {::nomarkdown}<mcode>M665</mcode>{:/nomarkdown} is set and saved.

Next time you home, the machine will know how high above the bed it is.

## Automatically finding the bed with a probe

Smoothie allows you to save both the Z height, and the delta calibration data, to the SD card.

This means you do not need to probe every time you start the machine, you only need to do it once, and save the values, which will then stay valid as long as your machine's geometry doesn't change.

This means you can have a removable probe that you only connect and attach to the head at the rare occasions when you need it.

However, if for whatever reason you have a fixed ( or retractable ) probe on your head ( or sensors below your bed ), then you might want to automatically probe at the beginning of each print.

To do so, simply change your slicing program's "beginning of file" G-code sequence, and replace:

```
G28
```

with:

```
G28
G30 Znnn
```

When `nnn` is the distance between your probe's triggering point, and the bed (or probe offset):

{::nomarkdown}
<a href="/images/temporary/3d-printer-probe.jpg">
  <img src="/images/temporary/3d-printer-probe.jpg" alt="Diagram showing Z probe offset measurement" style="display: block; margin: 2rem auto; min-width: 640px; width: 80%; max-width: 800px;"/>
</a>
{:/nomarkdown}

The {::nomarkdown}<gcode>G30</gcode>{:/nomarkdown} Znnn command moves the head until the probe triggers, then sets the current Z height to nnn.

So for example if your probe triggers when the hotend is 5mm above the bed, do {::nomarkdown}<gcode>G30</gcode>{:/nomarkdown} Z5, and if your probe triggers exactly when the hotend touches the bed, do {::nomarkdown}<gcode>G30</gcode>{:/nomarkdown} Z0.

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  Behind the scenes <gcode>G30</gcode> Z0 does a <gcode>G92</gcode> Z0, so you can save this if you set 'save_g92 true' in config and issue <mcode>M500</mcode> that saves the offset at 0. Note that <gcode>G92</gcode> is creating a new coordinate system called the Workspace coordinate system (WCS) it is worth reading up on how that works.
</sl-alert>
{:/nomarkdown}

If you are doing this manually you can save time by jogging the Z to within 5mm of the bed then issue the {::nomarkdown}<gcode>G30</gcode>{:/nomarkdown} Z0.
