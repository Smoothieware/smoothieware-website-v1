---
permalink: /pcb-milling
layout: default
title: PCB Milling
---

# PCB Milling

<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  When using PCB milling one really needs to fully understand the CNC coordinate systems involved. See the <a href="http://wiki.linuxcnc.org/cgi-bin/wiki.pl?CoordinateSystems">LinuxCNC Coordinate Systems documentation</a> for more information.
</sl-alert>

Build-in leveling made Smoothieware a very powerful tool for PCB milling - no need to recalculate G-codes, just run leveling using `G31`/`G32` and mill.

---

## Grid Leveling "By Two Corners"

Two corners rectangular mode of "rectangular-grid" made leveling even simpler.

You can use any grid position, grid size and number of probing points.

It also allows for changing these parameters on the fly.

Enable it in the configuration with:

```gcode
leveling-strategy.rectangular-grid.only_by_two_corners        true
```

Before two corners mode, you had to correct machine (0,0) and bed size according to the desired probing grid position and size.

"Two corners" is not an absolutely correct name for this mode, because it uses only one corner and rectangle size. Name from one of CAD.

<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Important:</strong> All positions for probing are in the MCS (Machine Coordinate System) and not in the WCS (Work Coordinate System).
</sl-alert>

In the latest version, there is a quick way to use two corners mode without enabling it in the configuration.

`G32 R1 X0 Y0 A30 B30`

The R1 sets a special two corners mode which uses the current position of the head as the start x and y, the X and Y specified in the G32 will be offsets from that and would usually be specified as 0.

**NOTE:** If there is a probe offset, which is not recommended, then it will move the probe to where we asked it to start from.

---

### Usage

| Command | Description |
| ------- | ----------- |
| `G32 Xnn Ynn Ann Bnn Inn Jnn` | Probes the grid from X, Y (Machine coordinates), with X size = A, Y size = B, with X grid size = I, Y grid size = J. I*J must be <= grid size from configuration. Omitting I or J or both will use grid size from configuration |

---

### Example Commands

```gcode
G32 X0 Y50 A50 B100
```
Probes the grid from X=0, Y=50, X size = 50, Y size = 100, with grid size from configuration

```gcode
G32 X0 Y50 A50 B100 I5 J9
```
Probes the grid from X=0, Y=50, X size = 50, Y size = 100, X grid size = 5, Y grid size = 9

```gcode
G32 X50 Y0 A100 B50
```
Probes the grid from X=50, Y=0, X size = 100, Y size = 50, with grid size from configuration

```gcode
G32 X50 Y0 A100 B50 I9 J5
```
Probes the grid from X=50, Y=0, X size = 100, Y size = 50, X grid size = 9, Y grid size = 5

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Version Note:</strong> Older versions of Smoothieware used <code>G31</code> for probing when the "two corners" mode was enabled. This has now been changed to <code>G32</code>.
</sl-alert>

---

## Further Reading

- [ZProbe module documentation](zprobe)
- [Leveling strategies](leveling-strategy)
- [CNC Mill Guide](cnc-mill-guide)
- [G31 and G32 G-codes](supported-g-codes)
