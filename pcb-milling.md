
# PCB milling

> [!NOTE]
> When using PCB milling one really needs to fully understand the CNC coordinate systems involved... [CoordinateSystems](http://wiki.linuxcnc.org/cgi-bin/wiki.pl?CoordinateSystems)

Build-in leveling made Smoothieware a very powerful tool for PCB milling - no need to recalculate G-codes, just run leveling using `G31`/`G32` and mill.

## Grid leveling "by two corners"

Two corners rectangular mode of "rectangular-grid" made leveling even simpler. You can use any grid position, grid size and number of probing points. It also allows for changing these parameters on the fly. Enable it in the configuration with:

```markdown
leveling-strategy.rectangular-grid.only_by_two_corners        true
```

Before two corners mode, you had to correct machine (0,0) and bed size according to the desired probing grid position and size.

"Two corners" is not an absolutely correct name for this mode, because it uses only one corner and rectangle size. Name from one of CAD.

> [!NOTE]
> that all positions for probing are in the MCS (machine coordinate system) and not in the WCS (work coordinate system).

In the latest version, there is a quick way to use two corners mode without enabling it in the configuration.  
`G32 R1 X0 Y0 A30 B30` The R1 sets a special two corners mode which uses the current position of the head as the start x and y, the X and Y specified in the G32 will be offsets from that and would usually be specified as 0. (**NOTE** if there is a probe offset, which is not recommended, then it will move the probe to where we asked it to start from.)

### Usage

| Command | Description |
| ------- | ----------- |
| `G32 Xnn Ynn Ann Bnn Inn Jnn` | Probes the grid from X, Y (Machine coordinates), with X size = A, Y size = B, with X grid size = I, Y grid size = J. I*J must be <= grid size from configuration. Omitting I or J or both will use grid size from configuration |

Example use:

```markdown
G32 X0 Y50 A50 B100 - Probes the grid from X=0, Y=50, X size = 50, Y size = 100, with grid size from configuration  
G32 X0 Y50 A50 B100 I5 J9 - Probes the grid from X=0, Y=50, X size = 50, Y size = 100, X grid size = 5, Y grid size = 9

G32 X50 Y0 A100 B50 - Probes the grid from X=50, Y=0, X size = 100, Y size = 50, with grid size from configuration
G32 X50 Y0 A100 B50 I9 J5 - Probes the grid from X=50, Y=0, X size = 100, Y size = 50, X grid size = 9, Y grid size = 5
```

> [!NOTE]
> Older versions of Smoothieware used `G31` for probing when the "two corners" mode was enabled. This has now been changed to `G32`.

---
