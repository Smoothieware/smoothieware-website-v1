
# Pick and Place

<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Note:</strong> This page is not a "full" guide like for the other machines yet. However, you should be able to use the <a href="cnc-mill-guide">CNC guide</a> and this page together to get your OpenPNP Pick and Place running easily.
</sl-alert>

## Compilation

To get an OpenPNP machine to run, we recommend using the [CNC version of the firmware](grbl-mode).

However, if you are using a vacuum sensor, that sensor requires you to use the [Temperature Control](temperaturecontrol) module, which is not enabled by default in the CNC build.

Therefore, you will need to build your own firmware, which is very easy if you follow [this simple guide](compiling-smoothie).

Make sure you compile the "CNC build" (`make CNC=1`), not the normal/default build, this is explained in the simple guide.

Once you have used this guide to compile your own CNC build, you need to make one small modification so the next time you compile, it will include the [Temperature Control](temperaturecontrol) module, which the CNC build does not include by default (it's more typical of 3D printer builds, so the flash space for it is wasted if it's included typically).

There are two ways to make it so compilation will include this module, both methods are valid, the first one (user file creation) is preferred:

### User file method

Just create a file named `src/default_excludes.mk` (that is, it is in the `src/` folder in your copy of Smoothie's source).

Inside of it, add these lines:

```bash
export CNC=1
export EXCLUDE_MODULES = tools/laser tools/filamentdetector tools/scaracal tools/extruder
```

By default, the version of the second line that is present in the CNC build makefile contains `tools/temperaturecontrol`, so here we are removing that item so it's no longer excluded when compiling.

Now every time you compile your firmware, it will use the CNC build, and include the temperature-control module!

Simply do:

```bash
make clean
make
```

Use the resulting `.bin` file, and you're good to go!

### Command line option

This method does not require creating a file, but it also means you have to remember to add this option to your command line **every time** you compile the firmware, so this is probably not the best method if you are a forgetful person.

In itself, it's very easy though. Instead of compiling your CNC build of the firmware with:

```bash
make clean
make CNC=1
```

You instead use:

```bash
make clean
make CNC=1 INCLUDE_MODULES=tools/temperaturecontrol
```

That's it! Now your firmware will compile with the temperature-control module included, and the resulting `.bin` file can be flashed to give you a CNC build with temperature-control support so you can read vacuum sensors through your ADCs.

Just remember to use the right command instead of the default one next time you update your firmware!

<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  Thanks to wolfmanjm for both methods!
</sl-alert>

## Vacuum sensor

<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>TODO:</strong> Here add the right configuration to be able to use the temperature-control module to directly read ADCs, bypassing the actual thermistor math for direct/linear reading. This will be added as soon as Shai provides his configuration.
</sl-alert>

Example vacuum sensor configuration:

```plaintext
# VACUUM SENSING

# LEFT Nozzle Vacuum configuration

temperature_control.vac_n1.enable                 true             # Whether to activate this ( "hotend" ) module at all.
temperature_control.vac_n1.sensor                   ad8495           #
temperature_control.vac_n1.ad8495_pin             0.23             # Pin for the thermistor to read
temperature_control.vac_n1.ad8495_offset          0                #
temperature_control.vac_n1.heater_pin             nc               # Pin to controls the heater, nc if a read only thermistor.
temperature_control.vac_n1.readings_per_second      500                # How many times per second to read temperature from the sensor.
temperature_control.vac_n1.get_m_code               104                  # Calling this M-code will return the current temperature.
temperature_control.vac_n1.designator             VAC              # Designator letter for this module
temperature_control.vac_n1.rt_curve               20.0,220,120,6000,220,120000

# RIGHT Nozzle Vacuum configuration

temperature_control.vac_n2.enable                 true             # Whether to activate this ( "hotend" ) module at all.
temperature_control.vac_n2.sensor                   ad8495           #
temperature_control.vac_n2.ad8495_pin             0.24             # Pin for the thermistor to read
temperature_control.vac_n2.ad8495_offset          0                #
temperature_control.vac_n2.heater_pin             nc               # Pin to controls the heater, nc if a read only thermistor.
temperature_control.vac_n2.readings_per_second      500              # How many times per second to read temperature from the sensor.
temperature_control.vac_n2.get_m_code               105                  # Calling this M-code will return the current temperature.
temperature_control.vac_n2.designator             VAC              # Designator letter for this module
temperature_control.vac_n2.rt_curve               20.0,220,120,6000,220,120000
```

## Servos as axes

On some Pick and Place machines, the head (Z axis) is controlled by a hobby servo motor.

However, by default in Smoothie, those are controlled via the [Switch](switch) module using M-codes such as `M280`.

This works, but that's not how you usually address a Z axis.

If you want a bit of extra convenience, by being able to talk to your hobby servo as if it was a Z axis (which means you will also be able to use it in places like homing or probing the way you typically use a Z axis, if this is something you need), then you can use this special branch of Smoothie that implements this feature:

* [Slave Switch](https://github.com/Smoothieware/Smoothieware/tree/feature/slaveswitch)

Once you compile this branch, you will be able to use your hobby servo as a Z axis (and other such switch <-> axis associations). Note this is not documented right now, but the configuration is very easy to extract from the new file in the source code, and if you can't figure it out, the community can help you easily, just ask!
