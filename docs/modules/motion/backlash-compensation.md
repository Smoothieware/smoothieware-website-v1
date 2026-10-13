---
permalink: /backlash-compensation
title: Backlash Compensation (Experimental)
---

# Backlash Compensation (Experimental)

Mechanical backlash is free movement between reversing a drive and seeing the axis move. The experimental implementation adds extra motor steps after a direction change while keeping the reported actuator position unchanged.

Repair loose couplings, worn nuts, belt play, or poor preload before testing software compensation. Compensation can reduce repeatable reversal error, but it cannot remove changing backlash or restore machine rigidity.

## Availability and configuration

{::nomarkdown}
<versioned orientation="vertical">
<v1>
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>V1: unmerged experimental branch.</strong> Backlash compensation is proposed in <a href="https://github.com/Smoothieware/Smoothieware/pull/1543">PR #1543</a> on the <code>add/backlash</code> branch. The PR remains open as checked on 2026-10-06. It is absent from normal V1 <code>edge</code> firmware.
</sl-alert>
{:/nomarkdown}

### V1 build requirement

Check out the V1 `add/backlash` branch and build it with `BACKLASH=1`. The preprocessor flag includes the compensation code:

```shell
make BACKLASH=1
```

Test the resulting firmware on a non-critical machine and keep a known-working firmware image available.

### V1 flat configuration

Set the startup state and measured reversal error for each actuator:

```plaintext
backlash_enable                             false
alpha_backlash_mm                          0.050
beta_backlash_mm                           0.030
gamma_backlash_mm                          0.000
```

{::nomarkdown}
</v1>
<v2>
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>V2: pending firmware PR.</strong> The <a href="https://github.com/Smoothieware/SmoothieV2/wiki/Backlash-Compensation">new upstream wiki page</a> describes <a href="https://github.com/Smoothieware/SmoothieV2/pull/9">PR #9</a>, which remains open and unmerged as checked on 2026-10-06. The feature is not available in normal V2 <code>master</code> firmware; these examples require a build containing that PR.
</sl-alert>
{:/nomarkdown}

### V2 INI configuration

Configure the measured distances in `config.ini`. Omit an actuator's setting, or set it to zero, to leave that actuator uncompensated:

```ini
[actuator]
alpha.backlash_mm = 0.050
beta.backlash_mm = 0.030
gamma.backlash_mm = 0.000

[motion control]
backlash_enable = false
```

Compensation is disabled by default. Once measurements and low-speed tests are satisfactory, set `backlash_enable = true` to enable it on boot. The V1 `BACKLASH=1` build flag is not a requirement of the proposed V2 implementation.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

`alpha`, `beta`, and `gamma` normally correspond to X, Y, and Z on a Cartesian machine. Enter positive distances in millimetres. Start with compensation disabled.

## Measuring and checking backlash

1. Disable compensation with `M425 P0`. Position a dial indicator against the axis, with enough travel for the test.
2. Move in one direction to take up play; zero the indicator and the displayed position at that point.
3. Move 10 mm farther in the same direction, then return to the zero position. The indicator's shortfall is the measured reversal error.
4. Set a temporary correction, for example `M425 X0.050 P1`, and repeat the same test. Adjust until the indicator returns to zero consistently.
5. Repeat for each axis, then record the verified distances in the configuration format for your firmware version.

Choose a smaller test distance if indicator travel or machine clearance requires it. The example distances are illustrative; measure your own machine rather than treating them as recommended settings.

## M425 runtime control

Both experimental implementations use the same runtime commands:

```gcode
M425                 ; report state and configured distances
M425 P1              ; enable compensation
M425 P0              ; disable compensation
M425 X0.050 Y0.030   ; change X and Y distances for this session
```

`M425` reports each configured value and whether compensation is enabled. Values changed through `M425` are not saved by `M500`; edit the configuration file to keep them across a reset.

Compensation steps do not contribute to the recorded move distance or final DRO position. Verify the physical position with the indicator rather than expecting the display to show the extra travel.

## Limits and test cases

- The implementation adds compensation on direction changes only.
- Use it only for repeatable mechanical play. Load-dependent or temperature-dependent error needs mechanical correction.
- Recheck homing, probing, arcs, and short alternating moves after enabling it.
- Confirm the physical position with an indicator. A correct console position does not prove that the axis moved by the intended amount.
- Disable the feature with `M425 P0` if a test shows over-travel, chatter, or inconsistent dimensions.

## Source

- [Experimental branch at commit `eb2f0e87`](https://github.com/Smoothieware/Smoothieware/commit/eb2f0e87a4b330153dd1e99574c051835177cda0)
- [`Robot.cpp` `M425` implementation](https://github.com/Smoothieware/Smoothieware/blob/eb2f0e87a4b330153dd1e99574c051835177cda0/src/modules/robot/Robot.cpp#L952-L971)
- [`Planner.cpp` compensation steps](https://github.com/Smoothieware/Smoothieware/blob/eb2f0e87a4b330153dd1e99574c051835177cda0/src/modules/robot/Planner.cpp#L59-L97)
- [V2 wiki page added on 2026-10-05](https://github.com/Smoothieware/SmoothieV2/wiki/Backlash-Compensation)
- [V2 PR #9 and implementation diff](https://github.com/Smoothieware/SmoothieV2/pull/9/files) (checked at PR head `6cce6787d19b9e9c1fdf95e3d91f0ad383d955d4` on 2026-10-06)
