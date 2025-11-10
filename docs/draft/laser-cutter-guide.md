---
permalink: /draft-laser-cutter-guide
---


# Your guide to installing Smoothieboard in a Laser Cutting machine

{::nomarkdown}
<a href="/images/guide-laser.png">
  <img src="/images/guide-laser.png" alt="Laser icon" width="100" height="100" style="float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

A Laser Cutter is pretty much a [CNC router](cnc-mill-guide) with a weird and very very thin tool.

As far as installing Smoothieboard in a machine goes, they are probably the simplest machine to set up.

They can also be quite dangerous, so, be cautious. {::nomarkdown}<span style="background-color: #4a1515; padding: 2px 4px; border-radius: 2px;">Most laser cutters are Class IV lasers - CO2 lasers operate at <raw>10.6μm</raw> (invisible), diode lasers at <raw>405-980nm</raw> (some visible, some not), and fiber lasers at <raw>1064nm</raw> (invisible). All can cause permanent eye damage instantly.</span>{:/nomarkdown}

This is a step-by-step guide to connecting your board to the various components of the laser cutter, configuring everything, from the beginning to actually cutting material.

This guide is a [community](irc) effort, and this page is a Wiki.

Please don't hesitate to [edit it](#_editpage) to fix mistakes and add information, any help is very welcome.



{::nomarkdown}
<a href="/images/smoothieboard-fritzing.png">
  <img src="/images/smoothieboard-fritzing.png" alt="Smoothieboard Fritzing" style="float: right; margin-left: 1rem; width: 500px;"/>
</a>
{:/nomarkdown}

On a typical laser cutter setup, installing a Smoothieboard will mean you do the following things:



- Read all of the guide before you start, best way to avoid mistakes {::nomarkdown}<span style="background-color: #4a1515; padding: 2px 4px; border-radius: 2px;">Laser cutters involve multiple safety-critical systems (cooling, ventilation, high voltage) - understanding the complete picture before starting prevents dangerous mistakes.</span>{:/nomarkdown}
- Install some [Software](software) to talk to your board
- Install the [Windows drivers](windows-drivers) if using that OS
- Connect your board via [USB](usb) and practice talking to it
- Take a look at the [configuration](configuring-smoothie)
- Upgrade your [firmware](flashing-smoothie-firmware) to the latest version if you feel like it
- Wire your power supply and provide it with power {::nomarkdown}<span style="background-color: #4a1515; padding: 2px 4px; border-radius: 2px;">Ensure proper grounding of the machine chassis to building ground - this is critical for both safety and EMI reduction.</span>{:/nomarkdown}
- Wire the power supply to Smoothieboard's motor input
- Connect motors to the stepper motor driver outputs
- Edit your configuration to match your motors
- Test the motors, and admire your accomplishment for hours
- Connect [Endstops](guide-endstops) to the endstop inputs {::nomarkdown}<span style="background-color: #4a1515; padding: 2px 4px; border-radius: 2px;">Use twisted pair cables for endstop wiring and add ferrite beads near the controller to reduce electromagnetic interference from stepper motors.</span>{:/nomarkdown}
- Edit your configuration to match your endstops
- Test your endstops by homing the machine
- Connect your laser power supply and your Smoothieboard together {::nomarkdown}<span style="background-color: #4a1515; padding: 2px 4px; border-radius: 2px;">WARNING: CO2 laser power supplies operate at extremely high voltage (<raw>40,000V</raw>). Diode and fiber lasers use low voltage but can still be dangerous - always disconnect power before working on connections.</span>{:/nomarkdown}
- Configure it so you can control the power supply's output, and test {::nomarkdown}<span style="background-color: #4a1515; padding: 2px 4px; border-radius: 2px;">Always start with very low power tests - use toilet paper first (burns easily at 5-10% power) to verify laser firing safely.</span>{:/nomarkdown}
- Connect, configure and test any probes you may have
- Setup leveling if relevant
- Configure your CAM [software](software) and generate a G-code file
- Use your host [software](software) to send your new G-code file to the Smoothieboard
- Watch as the machine cuts using your new Smoothieboard system {::nomarkdown}<span style="background-color: #4a1515; padding: 2px 4px; border-radius: 2px;">NEVER leave an operating laser unattended - fires can start within seconds even on materials that have cut successfully before.</span>{:/nomarkdown}
- Be happy

This guide will walk through everything you need to accomplish to successfully perform these steps.

At the end of this guide, you should have a fully working machine. {::nomarkdown}<span style="background-color: #4a1515; padding: 2px 4px; border-radius: 2px;">Always test on scrap material first - start with toilet paper at low power to verify safe operation before progressing to actual cutting.</span>{:/nomarkdown}



{% include_relative laser-guides-for-include.md %}

# Pre-Installation Checklist


{::nomarkdown}
<div class="draft-addition" style="background-color: #4a1515; padding: 15px; border-left: 5px solid #ff4444; margin: 20px 0; border-radius: 4px;">
{:/nomarkdown}

Before you begin installing your Smoothieboard in your laser cutter, ensure you have the following safety equipment, workspace preparation, and materials ready:

## Safety Equipment

- **Fire extinguisher**: CO2 or powder type, accessible within immediate reach
- **First aid kit**: Know its location before starting
- **Laser safety glasses**: Wavelength-specific protection (10.6μm for CO2, 405-980nm for diode, 1064nm for fiber)
- **Fire-resistant work surface**: Clear area of all flammable materials

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Eye Protection Must Match Your Laser:</strong><br><br>
  CO2 laser glasses (10.6μm) will NOT protect against diode lasers (405-980nm). Diode laser glasses will NOT protect against CO2 lasers. Always use wavelength-specific eye protection rated for your laser type.
</sl-alert>
{:/nomarkdown}

## Workspace Requirements

- **Adequate ventilation**: Fume extraction must vent outside building (never recirculate)
- **Network connectivity**: Ethernet and WiFi on same network if using network features
- **Clean workspace**: Provide clean ground/surface area (installation involves floor work)
- **Access verification**: Ensure machine can pass through all entries/doors/hallways
- **Electrical access**: Proper grounding and adequate power capacity

## Required Materials and Supplies

- **Distilled water** (CO2 lasers only): Minimum 5-10 liters for chiller/cooling system (NEVER use tap water)
- **Cleaning supplies**: Isopropyl alcohol (90%+ purity), lint-free optical wipes
- **Test materials**: Toilet paper (for low-power testing), A4 paper, scrap material
- **Tools**: Basic hand tools, cable management supplies
- **Documentation**: This guide, Smoothieboard documentation, laser power supply manual

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Cooling Requirements by Laser Type:</strong><br><br>
  <strong>CO2 lasers:</strong> Require water cooling with distilled water (mandatory).<br>
  <strong>Diode lasers:</strong> Typically use passive heatsink or fan cooling (no water required).<br>
  <strong>Fiber lasers:</strong> Low-power use fans, high-power may use water cooling.
</sl-alert>
{:/nomarkdown}

## Pre-Installation Safety Verification

Before proceeding with installation:

1. Locate and verify accessibility of fire extinguisher
2. Locate and verify accessibility of first aid kit
3. Know where emergency exits are located
4. Ensure adequate lighting in workspace
5. Remove all unnecessary flammable materials from area
6. Test emergency power shutoff if available
7. Verify cooling water supply is adequate

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Important:</strong> Never begin laser cutter installation without proper fire safety equipment immediately accessible. Laser cutting poses significant fire risk, and fires can start within seconds.
</sl-alert>
{:/nomarkdown}


{::nomarkdown}
</div>
{:/nomarkdown}


{% include getting-started/unboxing.md %}

{% include migration/migrating.md %}

# Safety

{% include_relative laser-warning.md %}

{% include hardware/wiring/warning.md %}

{% include hardware/power/logic-power-for-include.md %}

{% include hardware/power/main-power-input-for-include.md %}

{% include hardware/wiring/stepper-motors.md %}

{% include modules/endstops-probes/guide-endstops-for-include.md %}

{::nomarkdown}
<div style="text-align: center; margin: 2rem 0;">
  <a href="/images/recovered/firebrick-laser-tube.jpg">
    <img src="/images/recovered/firebrick-laser-tube.jpg" alt="A laser tube" style="min-width: 640px; width: 80%; height: auto;"/>
  </a>
  <p><em>They look nice but they are dangerous</em></p>

{::nomarkdown}
</div>
{:/nomarkdown}

{:/nomarkdown}

# Laser control



{% include_relative laser-for-include.md %}

{% include modules/endstops-probes/z-probe-guide-for-include.md %}

{% include hardware/panels/panel-guide.md %}

# Startup Automation

For laser cutters, safety is paramount. You can use startup automation to ensure your laser is in a safe state every time the machine boots.

## Safe Laser Startup

Create a file called <raw>on_boot.gcode</raw> in the root of your SD card with safe default commands:

```gcode
G21          ; Metric units
G90          ; Absolute positioning
M5           ; Laser OFF (critical for safety!)
M3 S0        ; Set laser power to 0
G28 X Y      ; Home X and Y (typically don't home Z for lasers)
G0 X5 Y5     ; Move away from origin
```

{::nomarkdown}
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>Safety Critical:</strong> Always ensure your on_boot.gcode starts with commands that turn OFF the laser (<raw>M5</raw>) and set power to zero (<raw>M3 S0</raw>). Never enable the laser automatically in startup scripts.
</sl-alert>
{:/nomarkdown}

Enable the <raw>on_boot.gcode</raw> file in your config:

```
on_boot_gcode_enable true
on_boot_gcode /sd/on_boot.gcode
```

{::nomarkdown}<span style="background-color: #4a1515; padding: 2px 4px; border-radius: 2px;">Startup automation ensures the laser is always in a safe state after power-up, preventing accidental firing during initialization.</span>{:/nomarkdown}

Note: The <setting v1="on_boot_gcode_enable" v2="startup.on_boot_gcode_enable"></setting> and <setting v1="on_boot_gcode" v2="startup.on_boot_gcode"></setting> settings control this behavior.

For more information and examples, see the [<raw>on_boot.gcode</raw> documentation](on_boot.gcode).

# Appendixes

{% include hardware/wiring/general-appendixes.md %}

### Laser engraving

Smoothie does not ( yet, it's being worked on ) support native laser raster engraving. {::nomarkdown}<span style="background-color: #4a1515; padding: 2px 4px; border-radius: 2px;">Raster engraving requires different power and speed settings than cutting - typically faster speeds with lower power to create surface marks without cutting through.</span>{:/nomarkdown}

However, as Smoothie interprets G-code unusually fast, a method to do raster engraving is to convert bitmap images into G-code files.

Here are some tools that allow to do this:

- [Raster2Gcode](http://fablabo.net/wiki/Raster2Gcode)
- [PicEngrave](http://www.picengrave.com/)

The main issue here is sending the gcode fast enough, and there is a tool on the github called `fast-stream.py` that will send it as fast as possible. {::nomarkdown}<span style="background-color: #4a1515; padding: 2px 4px; border-radius: 2px;">Raster engraving generates massive G-code files - a single photo can produce millions of G-code commands requiring fast streaming to avoid pauses.</span>{:/nomarkdown}

I have managed over `100mm/sec` feedrate using this script to send the gcode.



## Troubleshooting

If you run into trouble, something doesn't work as it should, head over to the [Troubleshooting](troubleshooting) page for a list of common problems and means of diagnosis. {::nomarkdown}<span style="background-color: #4a1515; padding: 2px 4px; border-radius: 2px;">Most laser issues fall into four categories: cut quality (check focus and optics first), positioning (check belt tension), power (check cooling and alignment), or control (check EMI and cables).</span>{:/nomarkdown}

You can also contact the [Community](irc) for help if you can't find an answer in the documentation.

# bCNC configuration

{% include software/host-software/bcnc-for-include.md %}

# Software

See the comprehensive [Software Compatibility List](software) for all software that works with Smoothieware.

# Laser Components Appendix

For detailed technical information about CO2, diode, and fiber laser system components, beam delivery systems, and focus lens specifications, see the [Laser System Components Appendix](draft-laser-components-appendix).

{% include_relative laser-components-appendix.md %}

# Laser Safety Appendix

For detailed safety procedures, prohibited materials, electrical hazards, and regulatory information, see the [Laser Safety Appendix](draft-laser-safety-appendix).

{% include_relative laser-safety-appendix.md %}

# Appendix: Operating Procedures


{::nomarkdown}
<div class="draft-addition" style="background-color: #4a1515; padding: 15px; border-left: 5px solid #ff4444; margin: 20px 0; border-radius: 4px;">
{:/nomarkdown}

Proper operating procedures are essential for safe and successful laser cutting. Following systematic procedures prevents most common operational failures and safety incidents.

## Pre-Operation Checklist

**Before EVERY laser cutting operation, verify:**

1. **Cooling system is running**: Check water flow and temperature indicators
2. **Ventilation/fume extraction is operating**: Verify fan is running and exhaust is clear
3. **Material is secured flat to bed**: No warping or movement possible
4. **Focus distance is correct**: Adjust for actual material thickness
5. **Optics are clean**: Clean lens and mirrors if any contamination visible
6. **Fire extinguisher is accessible**: Within immediate reach and fully charged
7. **Work area is clear**: Remove all flammable materials not being cut
8. **Emergency stop is functional**: Test button before starting job
9. **Air assist is functioning**: Verify airflow at nozzle (if equipped)
10. **Job file preview is correct**: Verify path matches intended cut

{::nomarkdown}
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>Critical Safety Rule:</strong> NEVER start a laser cutting job without completing this entire checklist. Skipping steps risks fire, material damage, or equipment failure.
</sl-alert>
{:/nomarkdown}

## Test Cutting Methodology

**ALWAYS run test cuts before production:**

- Test on scrap piece of same material before production cut
- Test cut validates: power level, speed, focus, and air assist settings
- Start with conservative settings (lower power, slower speed than expected)
- For new materials, create test matrix with varying power/speed combinations
- Document successful settings for future reference
- Small test cuts save significant time and material vs. failed production runs

**Progressive Testing Approach:**

1. **Toilet paper test**: Ultra-low power verification (burns easily, very safe for initial testing)
2. **A4 paper test**: Low-power burn pattern testing
3. **Scrap material test**: Actual material at conservative settings
4. **Setting optimization**: Adjust one parameter at a time until optimal

## Monitoring During Operation

**Continuous monitoring is mandatory for laser cutting safety:**

- **Watch for**: Flames, excessive smoke, material shifting, incomplete cutting
- **Listen for**: Unusual motor sounds, cooling pump issues, excessive mechanical noise
- **Be ready**: Keep hand near emergency stop button during entire operation
- **Never walk away**: NEVER leave operating laser unattended, even for "safe" materials
- **First piece focus**: Monitor first piece of multi-piece job carefully (subsequent pieces often identical)

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Fire Safety:</strong> Fires can start mid-job even on materials that have cut successfully before. Residual heat can cause delayed ignition after cutting completes. Constant visual monitoring is required.
</sl-alert>
{:/nomarkdown}

## Post-Operation Procedures

**After job completes:**

1. **Allow ventilation to run**: 30-60 seconds after job ends to clear fumes
2. **Check for hot spots**: Inspect cut pieces for residual heat (especially wood edges)
3. **Remove debris promptly**: Clear cut pieces and small debris from bed
4. **Clean optics if needed**: Remove any contamination that occurred during job
5. **Check mirrors for debris**: Verify no material debris on optical surfaces
6. **Clean cutting bed**: Remove accumulated small debris
7. **Log issues**: Document any problems observed for troubleshooting
8. **Verify cooling**: If doing multiple jobs, confirm cooling system still functioning

## First Piece Inspection

**Quality control after first piece:**

- **Cut completeness**: Are all cuts complete with no tabs remaining?
- **Edge quality**: Clean edges or excessive charring?
- **Detail sharpness**: Is detail sharp or rounded/missing?
- **Dimensional accuracy**: Verify dimensions are correct
- **Material condition**: Did material shift during cut? Evidence of flames/excessive heat?

**When to stop and adjust:**

- Incomplete cuts → increase power or decrease speed
- Excessive charring → decrease power or increase speed
- Poor detail → check focus, clean optics
- Positioning errors → check belt tension, reduce speed


{::nomarkdown}
</div>
{:/nomarkdown}


# Appendix: Best Practices


{::nomarkdown}
<div class="draft-addition" style="background-color: #4a1515; padding: 15px; border-left: 5px solid #ff4444; margin: 20px 0; border-radius: 4px;">
{:/nomarkdown}

Professional laser cutting techniques go beyond just correct settings. These best practices optimize cut quality, efficiency, and safety.

## Cut Quality Optimization

### Focus is the Most Critical Factor

- Use consistent focusing method (distance shims, measurement, or tilt shims)
- Re-check focus when changing material thickness
- Consider depth of focus vs. material thickness relationship
- Clean optics maintain consistent focus performance

### Air Assist Optimization

- Blows away smoke and debris from cut path
- Prevents flame-up on flammable materials
- Reduces charring on wood (creates cleaner edges)
- Protects lens from back-spatter and contamination
- **Pressure considerations**: Too high can blow small parts away; adjust for material weight

### Multi-Pass Strategy

**When to use multiple light passes:**

- Multiple light passes often better than single heavy pass for thick materials
- Reduces heat buildup and material warping
- Produces cleaner edges on thick materials
- First pass cuts most material, subsequent passes clean up
- Allow material to cool between passes if warping occurs

### Cut Order Optimization

**Strategic sequencing improves results:**

- Cut interior features before exterior outlines (keeps parts registered to bed)
- Sequence cuts to minimize vibration (cut small delicate parts first)
- Consider gravity (support parts that will drop when cut free)
- Use tabs/micro-tabs to keep small parts in place until job completes

### Speed vs. Quality Trade-offs

- Slower speeds generally produce better quality
- Very slow speeds can cause excessive heat buildup (charring)
- Find optimal speed for each material through systematic testing
- Document successful settings for repeatability

## Engraving Techniques

### Raster vs. Vector Engraving

**Raster Engraving:**

- Vector shapes filled with raster scan pattern
- Speed/power settings differ from cutting (usually faster speed, lower power)
- Resolution (DPI) affects detail and time (150-600 DPI typical range)
- Line spacing affects appearance (tighter spacing = darker, smoother result)
- Scan direction can show grain pattern (test both X and Y orientations)

**Vector Engraving:**

- Follows paths at low power
- Good for outlines and fine detail work
- Faster than raster for simple graphics
- Power/speed settings critical (too much power creates grooves)

### Image Preparation for Engraving

- Convert photos to grayscale or dithered black/white
- Increase contrast for better engraving results
- Size image to actual engraving dimensions before processing
- Test on scrap material first (especially for photographs)

### Depth Control

- Lower power = lighter engraving surface marks
- Multiple passes for deeper engraving
- Different materials engrave to different depths at same settings
- Material-specific behavior: Acrylic engraves white, wood engraves dark

## Design for Laser Cutting

### Kerf Compensation

**Understanding kerf (material removed by laser beam):**

- **CO2 lasers**: Typically 0.1-0.3mm kerf width (depends on focal length and power)
- **Diode lasers**: Typically 0.2-0.5mm kerf width (larger spot size than CO2)
- **Fiber lasers**: Typically 0.1-0.2mm kerf width (excellent beam quality, small spot)
- Parts end up slightly smaller than drawn
- Compensate in design for precision fit parts
- Kerf width varies with power, speed, and focus settings
- Test actual kerf width on your material before production

### Minimum Feature Size

- **CO2 lasers**: ~0.1-0.2mm spot diameter (excellent for fine detail)
- **Diode lasers**: ~0.2-0.4mm spot diameter (larger than CO2, less fine detail)
- **Fiber lasers**: ~0.05-0.15mm spot diameter (best for extremely fine detail)
- Fine details require optimal focus and clean optics
- Very small holes may close due to kerf and charring effects
- Test minimum feature size on scrap before incorporating into design

### Joint Design

**Common laser-cut joints:**

- **Finger joints**: Account for kerf in finger width
- **Tab and slot**: Size slots slightly larger than tab thickness
- **Living hinges**: Score lines that allow material to flex
- Test joints on scrap material before cutting final parts

### Support and Breakaway Tabs

- Small parts need micro-tabs to prevent drop-out during cutting
- Consider cut order for complex parts (interior first, outline last)
- Parts can shift if cut completely free too early in job
- Tabs should be easy to remove but strong enough to hold during cutting


{::nomarkdown}
</div>
{:/nomarkdown}


# Appendix: Systematic Calibration


{::nomarkdown}
<div class="draft-addition" style="background-color: #4a1515; padding: 15px; border-left: 5px solid #ff4444; margin: 20px 0; border-radius: 4px;">
{:/nomarkdown}

Systematic calibration ensures optimal laser performance and identifies issues before they affect production work.

## 3x3 Grid Alignment Test

**Purpose**: Detects bed leveling inconsistencies and mirror alignment issues

**Procedure:**

1. Create test pattern with 9 identical engravings in 3x3 grid across entire work area
2. Position engravings at: corners (4), midpoints of edges (4), and center (1)
3. Run test at consistent power/speed settings
4. Compare engraving depth and quality across all 9 positions

**Analysis:**

- **All equal**: Bed level and alignment are good
- **One side weaker**: Mirror alignment issue
- **Corners/edges weaker**: Focus or bed leveling issue
- **Progressive change**: Bed tilt or systematic alignment error

## Power/Speed Test Grid

**Purpose**: Determines optimal settings for new materials

**Procedure:**

1. Create test grid with varying power levels (columns) and speed settings (rows)
2. Typical ranges: Power 10-100% in 10% steps; Speed from slow to fast
3. Cut grid on scrap material
4. Label each cell with its power/speed combination
5. Identify cells with optimal cut quality

**Parameters to test:**

- **Cutting**: Find minimum power/maximum speed that cuts completely through
- **Engraving**: Find power/speed that achieves desired depth without excessive charring
- **Document results**: Record successful settings for future use

## Focus Point Calibration

**Purpose**: Determines optimal focal distance for material thickness

**Procedure:**

1. Set up test with 5-7 identical cuts at different Z heights
2. Vary Z height in 0.5mm increments above and below estimated focus
3. Run test cuts at consistent power/speed
4. Measure cut quality: edge sharpness, kerf width, cut completeness
5. Identify Z height that produces best results

**Focus Methods:**

- **Distance shims**: Physical spacers set exact lens-to-material distance
- **Tilt shims**: Adjustable angle spacers for precise positioning
- **Absolute Z positioning**: Measure material thickness, calculate focus offset from known focal length

## Progressive Testing Approach

**Safe low-to-high power methodology:**

1. **Toilet paper test** (ultra-low power):
   - Place single sheet of toilet paper on bed
   - Set laser to very low power (5-10%)
   - Pulse laser briefly
   - Toilet paper should char or burn through
   - Confirms laser is firing and beam path is clear

2. **A4 paper test** (low power):
   - Use standard printer paper
   - Test at low power (15-25%)
   - Check for consistent burn pattern
   - Verifies focus and alignment

3. **Material test** (production power):
   - Use actual scrap material
   - Start at conservative settings
   - Increase power/decrease speed incrementally
   - Document successful settings

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Why Progressive Testing?</strong> Starting with toilet paper is extremely safe - it burns at very low power, making it ideal for verifying laser operation without risk of equipment damage or excessive power.
</sl-alert>
{:/nomarkdown}


{::nomarkdown}
</div>
{:/nomarkdown}


# Appendix: Material Safety


{::nomarkdown}
<div class="draft-addition" style="background-color: #4a1515; padding: 15px; border-left: 5px solid #ff4444; margin: 20px 0; border-radius: 4px;">
{:/nomarkdown}

Material selection is critical for both safety and successful laser cutting. Some materials are dangerous and must NEVER be used in a laser cutter.

## Safe Materials

**These materials are generally safe for CO2 laser cutting:**

- **Wood and wood products**: Solid wood, plywood, MDF, bamboo
- **Paper and cardboard**: All paper products
- **Acrylic (PMMA)**: Plexiglas, Perspex, cast and extruded acrylic
- **Leather and suede**: Natural leather only
- **Fabric**: Cotton, polyester, felt, canvas
- **Rubber**: Natural rubber, some synthetic rubbers (verify first)
- **Cork**: Natural cork
- **Food products**: For engraving only

## PROHIBITED Materials

{::nomarkdown}
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>NEVER cut these materials - they are extremely dangerous:</strong>
</sl-alert>
{:/nomarkdown}

**Chemistry-based prohibitions:**

- **PVC (polyvinyl chloride)**: Produces chlorine gas and hydrochloric acid (highly corrosive, damages machine and lungs)
- **Vinyl**: Same hazard as PVC (contains chlorine)
- **ABS plastic**: Produces cyanide gas (extremely toxic)
- **Polycarbonate**: Catches fire easily, produces toxic smoke
- **Fiberglass**: Releases harmful glass particulates and toxic fumes
- **Materials containing halogens**: Fluorine, chlorine, bromine compounds
- **Carbon fiber**: Conductive dust poses fire and electrical hazard
- **Reflective metals**: Reflects beam back into laser tube, causing catastrophic damage

**Why these materials are dangerous:**

- **Halogenated plastics** (PVC, vinyl): Produce corrosive acids that damage machine components and harm operator
- **Cyanide-producing materials** (ABS): Create immediately toxic fumes
- **Reflective materials**: Laser beam reflects back into optics/tube, destroying expensive components
- **Conductive materials**: Carbon fiber dust creates electrical/fire hazards

## Material Preparation and Fixturing

**Proper material preparation ensures successful cuts:**

- **Flatness requirement**: Material must be perfectly flat against bed (warping causes focus variation)
- **Securing methods**: Use tape, magnets, vacuum hold-down, or pin jigs
- **Small/light pieces**: MUST be secured (can shift during cut or be ejected by air assist)
- **Thickness measurement**: Measure actual material thickness (don't trust nominal specifications)
- **Surface preparation**: Clean material surface (dust/oil affects cut quality)
- **Support overhangs**: Support overhanging parts to prevent tipping into beam path

## Test Cutting on Scrap

**ALWAYS test on scrap material first:**

- Use scrap piece from same material batch as production piece
- Material properties vary between batches (moisture content, density, composition)
- Test validates all settings before committing to production
- Small test cuts are inexpensive insurance against failed production runs


{::nomarkdown}
</div>
{:/nomarkdown}


# Appendix: Troubleshooting Methodology


{::nomarkdown}
<div class="draft-addition" style="background-color: #4a1515; padding: 15px; border-left: 5px solid #ff4444; margin: 20px 0; border-radius: 4px;">
{:/nomarkdown}

Systematic troubleshooting identifies root causes quickly and prevents misdiagnosis of problems.

## Systematic Diagnostic Approach

**Follow this process for any laser cutter problem:**

1. **Observe symptoms precisely**:
   - What is happening vs. what should happen?
   - When did problem start (suddenly or gradually)?
   - Does problem occur consistently or intermittently?
   - Which axis/component is affected?

2. **Check recent changes**:
   - New material type or batch?
   - Changed settings in software or configuration?
   - Recent maintenance performed?
   - Software or firmware updates?

3. **Test systematically**:
   - Start with simplest and safest tests first
   - Change ONE variable at a time
   - Document test results (what worked, what didn't)
   - Return to known-good baseline between tests

4. **Verify basics first before complex diagnostics**:
   - Is cooling system running properly?
   - Is ventilation/fume extraction working?
   - Is material properly secured to bed?
   - Is focus distance correct?
   - Are optics (lens and mirrors) clean?

## Symptom Categories and Common Causes

### Category 1: Cut Quality Issues

**Symptoms**: Incomplete cuts, rough edges, varying depth, excessive charring

**Common causes (in order of likelihood):**

1. **Wrong focus distance**: Most common cause
2. **Dirty optics**: Lens or mirrors contaminated
3. **Insufficient laser power**: Settings too low for material
4. **Speed too fast**: Not enough dwell time
5. **Material inconsistency**: Density/moisture variation

**Diagnostic approach**: Test cut on known-good settings, check focus systematically, inspect and clean optics

### Category 2: Positioning and Movement Issues

**Symptoms**: Lost steps, grinding noise, shifted artwork, layer misalignment

**Common causes:**

1. **Belt tension incorrect**: Too loose (skipping) or too tight (binding)
2. **Motor current too low**: Insufficient holding torque
3. **Speed/acceleration too high**: Exceeds mechanical capability
4. **Mechanical binding**: Debris, misalignment, or lack of lubrication
5. **Loose pulley or coupling**: Set screws loosened

**Diagnostic approach**: Jog axes manually to feel resistance, check belt tension, inspect for obstructions

### Category 3: Laser Power Issues

**Symptoms**: Weak cutting, no laser output, inconsistent power

**Common causes:**

1. **Tube degradation**: Gradual power loss over tube life (2000-8000 hours)
2. **Mirror misalignment**: Beam clipping edges, power loss
3. **Cooling system failure**: Overheating protection shutdown
4. **Dirty optics**: Absorbing laser energy
5. **Power supply failure**: Electronics malfunction

**Diagnostic approach**: Check cooling temperature and flow, verify mirror alignment with low-power test, clean all optics, check tube age/hours

### Category 4: Control and Communication Issues

**Symptoms**: Job won't start, machine not responding, random pauses, USB disconnects

**Common causes:**

1. **USB cable issues**: Poor quality cable, electromagnetic interference
2. **SD card corruption**: File system errors
3. **Electromagnetic interference (EMI)**: From stepper motors, power supply, nearby equipment
4. **Firmware bugs**: Software issues
5. **Power supply noise**: Electrical interference

**Diagnostic approach**: Test different USB cable, try different port, check SD card, update firmware, add ferrite beads to cables

## EMI (Electromagnetic Interference) Issues

**EMI is a common source of intermittent problems:**

**Symptoms of EMI problems:**

- Random USB disconnects
- Occasional position errors or lost steps
- Intermittent communication failures
- Machine pauses or resets randomly

**EMI mitigation techniques:**

1. **Ferrite beads**: Add to stepper motor wires, endstop wires, USB cable, Ethernet cable
2. **Cable routing**: Separate high-power cables from signal cables
3. **Twisted pair cables**: Reduces electromagnetic pickup
4. **Shielded cables**: Use for long signal runs
5. **Proper grounding**: Ensure machine chassis is properly grounded

**Where to add ferrite beads:**

- Stepper motor driver wires (close to drivers)
- Endstop wires (both ends if possible)
- USB cable (both ends)
- Ethernet cable (if using network features)
- Any long signal cables

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>EMI Note:</strong> Large laser cutters are particularly susceptible to electromagnetic interference. High-voltage laser power supplies, stepper motors, and long cable runs all contribute to EMI. Systematic EMI mitigation prevents mysterious intermittent problems.
</sl-alert>
{:/nomarkdown}


{::nomarkdown}
</div>
{:/nomarkdown}
