---
permalink: /backlash-compensation
title: Backlash Compensation (Experimental V1 Branch)
---

# Backlash Compensation (Experimental V1 Branch)

{::nomarkdown}
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>This is unmerged experimental code.</strong> Backlash compensation exists only on Smoothieware V1's <a href="https://github.com/Smoothieware/Smoothieware/tree/add/backlash"><code>add/backlash</code> branch</a> at the source checked on 2026-09-13. It is absent from Smoothieware V1 <code>edge</code> and SmoothieV2 <code>master</code>. A normal firmware binary does not provide these settings or <code>M425</code> behavior.
</sl-alert>
{:/nomarkdown}

Mechanical backlash is free movement between reversing a drive and seeing the axis move. The experimental implementation adds extra motor steps after a direction change while keeping the reported actuator position unchanged.

Repair loose couplings, worn nuts, belt play, or poor preload before testing software compensation. Compensation can reduce repeatable reversal error, but it cannot remove changing backlash or restore machine rigidity.

## Build requirement

Check out the V1 `add/backlash` branch and build it with `BACKLASH=1`. The preprocessor flag includes the compensation code:

```shell
make BACKLASH=1
```

The project has not merged this branch into a normal V1 or V2 release. Test the resulting firmware on a non-critical machine and keep a known-working firmware image available.

## Configuration

Set the startup state and the measured reversal error for each actuator in the V1 flat configuration:

```plaintext
backlash_enable                             false
alpha_backlash_mm                          0.050
beta_backlash_mm                           0.030
gamma_backlash_mm                          0.000
```

`alpha`, `beta`, and `gamma` normally correspond to X, Y, and Z on a Cartesian machine. Enter positive distances in millimetres. Start with compensation disabled, measure each axis in both directions with a dial indicator, and test at low speed.

## M425 runtime control

The branch adds `M425`:

```gcode
M425                 ; report state and configured distances
M425 P1              ; enable compensation
M425 P0              ; disable compensation
M425 X0.050 Y0.030   ; change X and Y distances for this session
```

`M425` reports each configured value and whether compensation is enabled. Values changed through `M425` are not saved by `M500`; edit the configuration file to keep them across a reset.

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
