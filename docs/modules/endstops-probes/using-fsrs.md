---
permalink: /using-fsrs
---

# Using FSRs with Smoothieboard

FSRs (Force Sensing Resistors) can be used as bed leveling sensors with Smoothieboard to provide automatic bed leveling for 3D printers.

## Overview

To use FSRs with the Smoothieboard, an auxiliary board is needed to interface the FSRs to the Smoothieboard's endstop input.

Smoothieware will accept this input as if it were a simple mechanical switch.

## Available FSR Controller Boards

### JohnSL FSR Endstop Board

JohnSL on [GitHub](https://github.com/JohnSL/FSR_Endstop) has created an FSR controller board specifically for this purpose.

**Where to buy:**

- [AndOrNot](http://www.andornot.co.uk/product/fsr-controller)
- [TriD Printing](http://www.tridprinting.com/Electronics/#3D-Printer-FSR)
- [UltiBots](http://www.ultibots.com/fsr-leveling)

**Resources:**

- [John's blog post](http://trains.socha.com/2014/05/auto-adjust-fsr-end-stop-detector.html) about the board
- [FSR pad design](http://www.andornot.co.uk/fsr-leveling/) by AndOrNot for delta printers

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  This board is powered directly from the endstop pins, making installation straightforward.
</sl-alert>
{:/nomarkdown}

### Toucher - 4-Point FSR Controller

For Cartesian machines with square heat beds, there is a 4-point FSR controller called "Toucher".

**Resources:**

- [Toucher on GitHub](https://github.com/random-builder/toucher)
- [FSR mount design on Thingiverse](https://www.thingiverse.com/thing:2461845)

## Community Discussion and Resources

The [Deltabot group](https://groups.google.com/forum/#!searchin/deltabot/fsr) is where most discussion on using FSRs is located.

**Topics to look for:**

- Alternative boards like the Arduino Mini
- WingWong's Trinket-derived design
- FSR mounting techniques and best practices

## Configuration

Once you have your FSR controller board connected to an endstop input, you need to configure Smoothieware to use it as a Z probe.

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

```
# Z probe configuration for FSR
zprobe.enable                        true
zprobe.probe_pin                     1.28!^       # Pin connected to FSR controller output
zprobe.slow_feedrate                 5            # Slow probe speed in mm/sec
zprobe.fast_feedrate                 100          # Fast probe speed in mm/sec
zprobe.return_feedrate               50           # Speed to return after probe
zprobe.probe_height                  5            # Height above bed to start probe
zprobe.debounce_count                10           # Number of samples for debouncing

# Leveling strategy
leveling-strategy.three-point-leveling.enable  true
leveling-strategy.three-point-leveling.point1  10.0,10.0    # First probe point
leveling-strategy.three-point-leveling.point2  190.0,10.0   # Second probe point
leveling-strategy.three-point-leveling.point3  100.0,190.0  # Third probe point
```

**Pin syntax:**
- `1.28!^` means pin 1.28, inverted (`!`), with pull-up enabled (`^`)
- Adjust based on which endstop connector you're using

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```ini
[zprobe]
enable = true
probe_pin = P1_28!^                  # Pin connected to FSR controller output
slow_feedrate = 5                    # Slow probe speed in mm/sec
fast_feedrate = 100                  # Fast probe speed in mm/sec
return_feedrate = 50                 # Speed to return after probe
probe_height = 5                     # Height above bed to start probe
debounce_count = 10                  # Number of samples for debouncing

[leveling_strategy.three_point]
enable = true
point1 = 10.0, 10.0                  # First probe point
point2 = 190.0, 10.0                 # Second probe point
point3 = 100.0, 190.0                # Third probe point
```

**Pin syntax:**
- `P1_28!^` means pin P1.28, inverted (`!`), with pull-up enabled (`^`)
- Adjust based on which endstop connector you're using

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  The probe pin configuration depends on which endstop connector you're using. Refer to the <a href="/pinout">Smoothieboard pinout</a> to identify the correct pin for your setup.
</sl-alert>
{:/nomarkdown}

## Troubleshooting

### Common Issues

**FSR Not Triggering:**

- **Check wiring:** Verify all connections between FSRs, controller board, and Smoothieboard
- **Test controller output:** Use a multimeter to verify the controller board outputs a signal when FSRs are pressed
- **Verify pin configuration:** Ensure the probe pin matches the physical connection
- **Check inversion:** Try removing or adding the `!` (inversion) flag in the pin configuration
- **Adjust sensitivity:** Most FSR controller boards have a potentiometer to adjust trigger threshold - try increasing sensitivity

**False Triggers:**

- **Reduce sensitivity:** Adjust the controller board's potentiometer to require more force
- **Add debounce:** Increase `zprobe.debounce_count` to filter electrical noise
- **Check mechanical stability:** Ensure FSRs are mounted firmly and the bed doesn't wobble
- **Shield wiring:** Use shielded cable if electrical noise is suspected
- **Verify weight distribution:** Make sure the nozzle contacts all FSRs evenly during probing

**Intermittent Detection:**

- **FSR placement:** Ensure FSRs are positioned where the nozzle will consistently contact them
- **FSR condition:** Check for damaged or worn FSRs - they degrade over time with use
- **Temperature effects:** FSRs can be affected by heat - keep them away from heated beds
- **Connector issues:** Verify all connectors are secure and making good contact
- **Update debounce:** Try different `zprobe.debounce_count` values (typically 5-20)

### Testing Your Setup

To test if your FSR setup is working:

1. Send `M119` to check endstop status
2. Press down on the bed to trigger the FSRs
3. Send `M119` again - the Z min endstop should show as triggered
4. If it doesn't change state, check wiring and configuration

## FSRs vs BLTouch

Both FSRs and BLTouch can provide automatic bed leveling, but with different characteristics:

**FSRs:**
- Sense actual nozzle contact with the bed
- More reliable on textured or irregular surfaces
- Require mounting under the bed or build plate
- Need auxiliary controller board
- Measure true "nozzle-to-bed" distance
- More complex installation

**BLTouch:**
- Optical/mechanical probe with deployable pin
- Easier to mount (attaches to print head)
- May have issues with certain bed surfaces (glass, mirrors)
- Self-contained unit (no additional controller needed)
- Measures "probe-to-bed" distance (requires Z offset)
- Simpler installation

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  FSRs are often preferred for delta printers where the entire effector contacts the bed evenly, while BLTouch is popular for Cartesian printers where mounting a probe near the nozzle is straightforward.
</sl-alert>
{:/nomarkdown}

For more information about BLTouch, see the [BLTouch documentation](bltouch).

## Related Documentation

For more information about bed leveling and probing, see:

- [ZProbe](zprobe) - Main probing documentation
- [Endstops](endstops) - Endstop configuration
- [3D Printer Guide](3d-printer-guide) - General 3D printing setup
