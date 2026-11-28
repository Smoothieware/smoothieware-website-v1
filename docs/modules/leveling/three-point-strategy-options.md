---
title: "Three point strategy options"
permalink: /three-point-strategy-options
---

{::nomarkdown}
<span id="three-point-leveling-configuration-options"></span>
{:/nomarkdown}

<!-- learning-diagram:31-three-point-plane -->
{::nomarkdown}
<figure id="learning-diagram-31-three-point-plane" style="clear: both; max-width: 960px; margin: 2rem auto; scroll-margin-top: 16vh;">
  <a href="/images/learning-diagrams/31-three-point-plane.svg">
    <img src="/images/learning-diagrams/31-three-point-plane.svg" alt="Three probe points define the bed plane: Smoothie keeps Z parallel to the measured plane during the job." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto; border-radius: 0.1rem;"/>
  </a>
  <figcaption style="margin-top: 0.6rem; font-size: 0.92rem; opacity: 0.82; text-align: center;">Three probe points define the bed plane <a href="#learning-diagram-31-three-point-plane" aria-label="Permanent link to Three probe points define the bed plane" style="margin-left: 0.35rem; text-decoration: none;">#</a></figcaption>
</figure>
{:/nomarkdown}

The three-point leveling strategy in Smoothieware probes three points on your bed to define a plane, then keeps the Z axis parallel to that plane during printing.

This is useful if your Z plate/bed is not perfectly aligned with your XY gantry.

The following table lists the configuration options for this leveling strategy:

| Option | Value | Description |
| ------ | :-----: | ----------- |
| <setting v1="leveling-strategy.three-point-leveling.enable" v2="zprobe.leveling"></setting> | {::nomarkdown}<raw>`true`</raw>{:/nomarkdown} | Set to `true` to enable the leveling strategy that probes three points to define a plane and then keeps the Z parallel to that plane. This is useful if your Z plate/bed is not perfectly aligned with your XY gantry. |
| <setting v1="leveling-strategy.three-point-leveling.point1"></setting> | {::nomarkdown}<raw>`100.0,0.0`</raw>{:/nomarkdown} | The first probe point (X, Y). |
| <setting v1="leveling-strategy.three-point-leveling.point2"></setting> | {::nomarkdown}<raw>`200.0,200.0`</raw>{:/nomarkdown} | The second probe point (X, Y). |
| <setting v1="leveling-strategy.three-point-leveling.point3"></setting> | {::nomarkdown}<raw>`0.0,200.0`</raw>{:/nomarkdown} | The third probe point (X, Y). |
| <setting v1="leveling-strategy.three-point-leveling.home_first" v2="three point leveling strategy.home_first"></setting> | {::nomarkdown}<raw>`true`</raw>{:/nomarkdown} | Home the X and Y axes before probing. |
| <setting v1="leveling-strategy.three-point-leveling.tolerance" v2="three point leveling strategy.tolerance"></setting> | {::nomarkdown}<raw>`0.03`</raw>{:/nomarkdown} | The probe tolerance in millimeters, anything less than this will be ignored, default is `0.03mm`. |
| <setting v1="leveling-strategy.three-point-leveling.probe_offsets" v2="three point leveling strategy.probe_offsets"></setting> | {::nomarkdown}<raw>`0,0,0`</raw>{:/nomarkdown} | The probe offset from nozzle, must be X,Y,Z (Z should always be 0), default is no offset. This is used if your nozzle is not exactly at the same position as where your tool would be. |
| <setting v1="leveling-strategy.three-point-leveling.save_plane" v2="three point leveling strategy.save_plane"></setting> | {::nomarkdown}<raw>`false`</raw>{:/nomarkdown} | Set to `true` to allow the bed plane to be saved with {::nomarkdown}<mcode>M500</mcode>{:/nomarkdown}, default is `false`. |

## Three-point levelling

If your plate is perfectly flat, but not perfectly level, this is all you need. It is for Cartesians, do not use it on deltas, it just won't work.

The firmware probes three user specified points on the bed, and determines the plane of the bed relative to the probe. As the head moves in X and Y it will adjust Z to keep the head tram with the bed.

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  The probe does not set the bed height. It finds the relative level of the bed based on the first probe point, so after you have defined the bed plane with <gcode>G32</gcode>, you then set the bed height at the first probe point and use <mcode>M206</mcode> or <mcode>M306</mcode> to set the homing offset. Once saved you do not need to do the Z probe or bed height again. In this case it is best to have a Z endstop as well as the Z probe, the Z endstop is used to set the bed height after the probe. This is different to other firmware, and is deliberate : it allows people to use temporary Z probes, and not have a permanent Z probe or know the exact Z offset of the probe in relation to the nozzle. In addition the Z component of <code>probe_offsets</code> should always be zero.
</sl-alert>
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  The three probe points MUST be the three corners of a triangle, they MUST NOT be on a straight line, or the math and coordinate system will get corrupt and you will need to reset.
</sl-alert>
{:/nomarkdown}

The strategy must be enabled in the config, as well as the Z probe. The three probe points are best if they are the three points of an equilateral triangle, as far apart as possible. They can be defined in the config file, or defined ( and saved with {::nomarkdown}<mcode>M500</mcode>{:/nomarkdown} ) using {::nomarkdown}<mcode>M557</mcode>{:/nomarkdown} P0 X30 Y40.5 where P is 0, 1 or 2. The probe offsets may also be set with {::nomarkdown}<mcode>M565</mcode>{:/nomarkdown} X0 Y0 Z0.

You can save the bed plane so it can be used again without probing again, presuming the bed stays flat. For this to be effective you must do your Z home to the first probe point defined when creating the plane. Set the Z height to zero at the first probe point, then the bed plane should be relative from that point on. You save it with {::nomarkdown}<mcode>M500</mcode>{:/nomarkdown}, although it will not display with {::nomarkdown}<mcode>M503</mcode>{:/nomarkdown} as it is not a user settable value.

## Usage

After configuring three-point leveling, you need to:

1. Home your machine: Use {::nomarkdown}<gcode>G28</gcode>{:/nomarkdown} to home all axes
2. Run the leveling: Use {::nomarkdown}<gcode>G32</gcode>{:/nomarkdown} to execute the three-point probe sequence
3. Save (optional): If `save_plane` is true, use {::nomarkdown}<mcode>M500</mcode>{:/nomarkdown} to save the results

The leveling will be applied to all subsequent moves automatically.

## Related Documentation

- [ZProbe](zprobe) - Z-probe configuration and usage
- [ZProbe Options](zprobe-options) - All Z-probe configuration options
- [3D Printer Guide](3d-printer-guide) - Complete printer setup guide
- [Configuration Options](configuration-options) - All Smoothieware configuration options
