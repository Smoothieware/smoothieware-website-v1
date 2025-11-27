
# Migrating to Smoothie

{::nomarkdown}
<a href="/images/migration.png">
  <img src="/images/migration.png" alt="Migration" style="width: 320px; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

If you are migrating from another firmware, here are guides to help you understand how some values from your old firmware match the values in your new Smoothie system.

Smoothie uses different configuration parameters and approaches than other common CNC/3D printer firmwares. These guides will help you translate your existing settings.

## Migration Guides

Choose the guide that matches your current firmware:

- [Moving from Marlin to Smoothie](from-marlin) - For users coming from Marlin (common in 3D printers)
- [Moving from GRBL to Smoothie](from-grbl) - For users coming from GRBL (common in CNC mills and laser cutters)

## Configuration Format Comparison

Smoothie V1 uses a flat configuration file format, while Smoothie V2 uses an INI-style format with sections. Understanding these differences is crucial for migration.

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

**Smoothie V1 Configuration Format** - Flat key-value pairs:

```
# Example V1 configuration (config file)
alpha_steps_per_mm                           80
alpha_max_rate                               30000.0
beta_steps_per_mm                            80
beta_max_rate                                30000.0
gamma_steps_per_mm                           1600
gamma_max_rate                               300.0
default_feed_rate                            4000
default_seek_rate                            4000
mm_per_arc_segment                           0.5
```

All settings are at the top level with descriptive names. Related settings are grouped by prefix (alpha, beta, gamma for axes).

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

**Smoothie V2 Configuration Format** - INI-style with sections:

```ini
; Example V2 configuration (config.ini)
[motion control]
default_feed_rate = 4000
default_seek_rate = 4000
mm_per_arc_segment = 0.5

[alpha]
steps_per_mm = 80
max_rate = 30000.0

[beta]
steps_per_mm = 80
max_rate = 30000.0

[gamma]
steps_per_mm = 1600
max_rate = 300.0
```

Settings are organized into logical sections with cleaner syntax. Comments use semicolons instead of hash marks.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

## Choosing Between V1 and V2

Before migrating, you need to decide which version of Smoothie is right for your needs.

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

**Choose Smoothie V1 if you:**

- Have existing Smoothieboard hardware (3X, 4X, 5X series)
- Need a stable, well-tested firmware with years of production use
- Want extensive community support and documentation
- Are migrating from Marlin or GRBL with known working configurations
- Prefer a mature ecosystem with proven reliability
- Don't need cutting-edge features or latest hardware support

**V1 Advantages:**
- Battle-tested stability
- Extensive documentation
- Large user base and community support
- Wide compatibility with existing tools and software
- Flat configuration format is simple for basic setups

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

**Choose Smoothie V2 if you:**

- Have new Smoothieboard V2 hardware
- Need support for modern microcontrollers and peripherals
- Want improved performance and advanced features
- Are building a new machine and can test thoroughly
- Need better configuration organization for complex setups
- Want to be on the latest development branch

**V2 Advantages:**
- Modern architecture and codebase
- INI-style configuration is clearer for complex machines
- Better performance on newer hardware
- Improved modularity and extensibility
- Active development with new features

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Hardware Compatibility:</strong> Make sure your board is compatible with the version you choose. Smoothie V2 requires V2-compatible hardware and will not run on V1 boards.
</sl-alert>
{:/nomarkdown}

## General Tips

When migrating to Smoothie:

- **Back up your existing configuration** before making changes
- **Start with a fresh config file** from the Smoothie repository as a template
- **Transfer settings gradually** rather than all at once
- **Test each major change** before proceeding to the next
- **Consult the troubleshooting guide** if you encounter issues

## Common Migration Pitfalls

Avoid these common mistakes when migrating to Smoothie:

### Configuration Errors

**Syntax Mistakes:**
- V1: Don't forget spaces around values (`steps_per_mm 80` not `steps_per_mm80`)
- V2: Use equals signs with spaces (`steps_per_mm = 80`)
- Both: Comment characters matter (V1 uses `#`, V2 uses `;`)

**Unit Confusion:**
- Smoothie uses **millimeters** as the primary unit, not inches
- Feed rates are in **mm/minute**, not mm/second
- Steps per mm must account for microstepping settings
- Acceleration values are in **mm/s²**

### Motor Direction and Homing

**Inverted Axes:**
- Motors may run backwards compared to your old firmware
- Use `alpha_dir_pin` with `!` prefix to invert (V1) or `dir_pin = !` (V2)
- Test each axis individually before running complex moves

**Homing Issues:**
- Endstop logic may be inverted (`^` for pullup, `!` for invert)
- Homing directions are set per-axis (`alpha_homing_direction`)
- Home to minimum (0) or maximum depends on your machine layout

### Temperature Control

**Thermistor Tables:**
- Smoothie uses different thermistor table numbers than Marlin
- Verify your thermistor type matches the table number
- Test temperature readings before heating

**PID Tuning:**
- PID values from Marlin/other firmwares won't work directly
- Always run PID autotune after migration (`M303` command)
- Different heater/cooling setups need different PID values

### Network and Communication

**Baud Rate:**
- Default baud rate is 115200 (different from some firmwares)
- Network configuration requires IP settings if using Ethernet
- USB serial and network can be used simultaneously

**G-code Differences:**
- Some G-codes work differently (especially `M` commands)
- Check the G-code reference for Smoothie-specific syntax
- RepRap G-code is mostly compatible but verify critical commands

### Performance Issues

**Step Rate Limits:**
- If motors stall or skip steps, reduce `max_rate` values
- Check microstepping settings match driver configuration
- Verify acceleration isn't too aggressive for your machine

**Planning Queue:**
- Short segments (arcs, circles) can overwhelm the planner
- Increase `mm_per_arc_segment` if curves are jerky
- Reduce `junction_deviation` if corners are rounded too much

### File System and SD Cards

**SD Card Compatibility:**
- Use FAT32 formatted cards (not exFAT or NTFS)
- Some high-capacity cards don't work reliably
- Stick to Class 10 or better, 32GB or smaller recommended

**Config File Location:**
- V1: `/sd/config` file on SD card
- V2: `/sd/config.ini` file on SD card
- File must be in root directory of SD card
- Check for typos in filename (common mistake)

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>Pro Tip:</strong> Keep your old firmware configuration file as reference. Comment out sections in your new Smoothie config as you verify they work, so you can track migration progress.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  Need help with your migration? Visit the <a href="irc">IRC channel</a> or check the <a href="troubleshooting">troubleshooting guide</a>.
</sl-alert>
{:/nomarkdown}
