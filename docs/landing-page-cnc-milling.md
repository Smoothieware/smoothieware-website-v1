# Affordable CNC Mill Retrofit with Professional Features

**Convert your manual mill to CNC or upgrade your existing controller** with Smoothieboard v2. Powerful 32-bit control handles complex 3D toolpaths, multi-axis operations, and production work. Used in everything from desktop mills to Bridgeport conversions. $200 vs $1000+ commercial controllers.

![CNC mill machining aluminum with Smoothieboard visible](/images/smoothieboard-cnc-mill-hero.jpg)

**Control Your CNC Mill - $200**

[Shop Now - $200 at Robosprout](https://www.robosprout.com)

✅ **Handles Complex 3D Toolpaths from Fusion 360**
✅ **Native 4-Axis and 5-Axis Milling Support**
✅ **Production Reliable - Runs 8-Hour Aluminum Jobs**
✅ **$200 vs $1000+ Commercial Controllers**

---

## Upgrading or Building a CNC Mill? Common Problems:

### Controller Limitations:
- ❌ **Memory Constraints** - Can't load large CAM files from Fusion 360/HSMWorks
- ❌ **Limited Axes** - Stuck at 3-axis, need 4th for indexing
- ❌ **Expensive Options** - Commercial controllers cost $1000-3000
- ❌ **Unreliable Cheap Options** - $50 Chinese boards fail during long cuts
- ❌ **Complex Setup** - Parallel port cards, driver boxes, complicated wiring

### For Production-Quality Results:
Need balance of:
- Sufficient processing power (complex toolpaths)
- Reliability (can't crash mid-cut)
- Expandability (probes, tool changers, multi-axis)
- Affordability (hobby/small shop budgets)

---

## Professional CNC Mill Control at Hobbyist Price

### Technical Capabilities:

**Processing Power:**
- 32-bit STM32H745 dual-core @ 400MHz
- 1MB RAM - loads massive CAM files
- Advanced lookahead planning
- Smooth acceleration profiles
- Jerk control for clean finishes

**Multi-Axis Support:**
- **3-Axis:** X, Y, Z (standard milling)
- **4-Axis:** Add A-axis for rotary indexing
- **5-Axis:** A+B or A+C for full 5-axis simultaneous
- Native support - no hacks or firmware mods

**Milling-Specific Features:**
- **G-Code Interpreter:** Full RS274/NGC support
- **Work Coordinate Systems:** G54-G59 (multiple setups)
- **Tool Length Offsets:** G43/G49 support
- **Canned Cycles:** G81-G89 drilling/boring cycles
- **Probing:** Touch probe support (G38.x)
- **Spindle Control:** PWM or relay for VFD
- **Coolant Control:** M7/M8/M9 support

**Motion Quality:**
- Advanced trajectory planning
- Smooth cornering
- Minimal tool marks
- Consistent surface finish

---

## Proven in These CNC Mill Conversions

### Desktop Mills:
- Sherline mills (5400 series)
- Taig micro mills
- Sieg X1/X2/X3 mills
- Proxxon MF70
- Custom desktop builds

### Benchtop Mills:
- Grizzly G0704
- Sieg X2/SX2
- Harbor Freight 44991
- Bolton Tools mills
- PM-25 / PM-30 mills

### Industrial Conversions:
- Bridgeport Series 1 conversions
- Lagun mills
- Webb mills
- Generic knee mills
- Custom industrial retrofits

### Specialty:
- PCB milling machines
- Engraving machines
- Jewelry mills
- Dental mills

---

## Works with Professional CAM Software

### Fusion 360 / HSMWorks:
- ✅ Smoothie post-processor available
- ✅ Adaptive clearing toolpaths work perfectly
- ✅ 3D contour and surfacing supported
- ✅ Multi-axis toolpaths (4-axis, 5-axis)

### Vectric (VCarve, Aspire):
- ✅ Standard G-code output compatible
- ✅ 3D carving toolpaths
- ✅ V-carving for signs
- ✅ Rotary (4-axis) support

### Other CAM:
- ✅ SolidCAM, Mastercam (G-code export)
- ✅ FreCAD Path
- ✅ PyCAM
- ✅ EstlCAM
- ✅ FlatCAM (PCB milling)

### G-Code Senders:
- ✅ bCNC (popular choice for mills)
- ✅ CNCjs (web-based)
- ✅ Universal G-Code Sender (UGS)
- ✅ LinuxCNC UI (via network)

---

## Expand to 4-Axis and 5-Axis Milling

### 4-Axis (Rotary) Milling:

**Applications:**
- Indexing operations (drill holes around cylinder)
- Wrapped engraving (text around part)
- Cam machining
- Rotary fixtures

**Setup with Smoothie:**
```
# Add 4th axis (A-axis) config
delta_steps_per_mm     50      # Rotary steps/degree
delta_max_rate         30000   # Rotary speed
```

### 5-Axis Milling:

**Applications:**
- Complex sculpted surfaces
- Undercuts and overhangs
- Single-setup parts (no repositioning)
- Impeller machining
- Aerospace/medical parts

**Smoothie Supports:**
- A+B axis (tilt+rotate)
- A+C axis (rotate+swivel)
- Native 5-axis kinematics
- Works with 5-axis CAM output

---

## Reliable Enough for Production Work

### For Small Shops & Job Shops:

**Reliability:**
- Run 8-10 hour roughing operations
- No crashes during deep aluminum cuts
- Proven in production environments
- Repairable if needed (open hardware)

**Efficiency:**
- Network control - queue jobs remotely
- Automatic tool length sensing
- Work coordinate systems - multiple setups
- Repeat jobs easily

**Quality:**
- Smooth motion = better surface finish
- Consistent feedrates
- Advanced acceleration control
- Minimal tool marks

**Workflow:**
- CAM → Smoothie → Part
- Standard G-code (no proprietary format)
- Works with existing toolchains
- Easy operator training

---

## Advanced Features for Precision Work

### Touch Probe Support:
- G38.2/G38.3 probing G-codes
- Part alignment and zero-finding
- Surface mapping
- Tool length measurement

### Tool Change:
- Manual tool change prompts (M6)
- Automatic tool changer support (via GPIO)
- Tool length offset tables
- Tool wear compensation

### Work Coordinate Systems:
- G54-G59 (6 work offsets)
- G92 temporary offsets
- Multiple part setups
- Fixture offsets

---

## Bridgeport Conversion: Before & After

### Example: Bridgeport Series 1 Retrofit

**Before (Parallel Port LinuxCNC):**
- Expensive PC requirement
- Parallel port breakout boards
- Complex wiring
- Setup/configuration difficult
- Total cost: $800-1200

**After (Smoothieboard):**
- Standalone controller
- Simplified wiring
- Text-file configuration
- Network or USB connection
- Total cost: ~$300 (board + drivers if needed)

### Performance Comparison:
| Metric | Parallel Port | Smoothieboard |
|--------|---------------|---------------|
| Reliability | Driver issues, latency | Rock solid |
| Setup Time | 20+ hours | 4-8 hours |
| Configuration | Compiled HAL files | Text file editing |
| Expandability | Limited PC ports | 63 GPIO |
| Cost | $800+ | $300 |

---

## Real CNC Mill Conversions with Smoothieboard

### Photo Gallery:
- Grizzly G0704 conversions
- Bridgeport conversions
- Desktop mill builds
- 4-axis rotary setups
- 5-axis trunnion tables

### Testimonials:
> "Converted my G0704 with Smoothie. Runs Fusion 360 adaptive toolpaths like a champ. Best $200 I've spent on the mill."
> — Small shop owner

> "Bridgeport retrofit with Smoothie. Way easier than LinuxCNC parallel port setup, and just as capable."
> — Retired machinist

---

## CNC Mill Controller Questions

**Q: Can Smoothie handle rigid tapping?**
A: Not natively. Smoothie is best for general milling, not rigid tapping. Use floating tap holders.

**Q: What's the maximum feedrate?**
A: Depends on mechanical limits, but Smoothie can command very high speeds. Typically limited by your mill, not the controller.

**Q: Can I use Mach3/Mach4 with this?**
A: No. Mach3/4 require specific motion controllers. Use bCNC, CNCjs, or other G-code senders instead.

**Q: Will it work with my VFD spindle?**
A: Yes. PWM or relay output can control VFD via analog or digital input.

**Q: Can I add a tool height sensor?**
A: Yes. Touch probe or tool length sensor via probe input.

**Q: Is it powerful enough for aluminum milling?**
A: Absolutely. Processor is powerful, motion is smooth. Proven in aluminum production work. Also powerful enough for steel milling and any material milling.

**Q: Can I use this for lathe support?**
A: Lathe support is currently being added, so this is something you'll be able to re-use the board for later on.

**Q: What about gang tooling or turrets?**
A: Manual tool change (M6) is straightforward. ATC possible with GPIO programming.

---

## Upgrade Your CNC Mill Today

### Smoothieboard v2 Prime - $200

#### Milling Resources (Free):
- CNC mill wiring diagrams
- Configuration examples (3/4/5-axis)
- Fusion 360 post-processor
- bCNC setup guide
- Probing configuration

#### Where to Buy:
- [Robosprout (USA) - Ships worldwide](https://www.robosprout.com)

#### Additional Notes:
- External stepper driver support available for larger machines (see [wiring guide](http://smoothieware.org/general-appendixes))
- Board can be re-used for lasers, 3D printers, vinyl cutters, pick and place machines, gluing machines, etc.

---

## Control Your CNC Mill with Professional 32-Bit Power

**[Control Your CNC Mill - $200](https://www.robosprout.com)**

- 4-Axis & 5-Axis Ready
- Production Reliable
- $200 vs $1000+ Commercial
- Handles Complex CAM Files

---

*Smoothieboard v2 is OSHWA certified open hardware (FR000021). 15 years of proven performance in CNC milling applications. Used by thousands of machinists and hobbyists worldwide.*

**Found an error on this page? [Contact us quickly](mailto:wolf.arthur@gmail.com) - we'd immensely appreciate it!**