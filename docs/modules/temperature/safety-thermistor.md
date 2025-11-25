---
permalink: /safety-thermistor
---

# Safety Thermistor

Hot-ends have a heating element (controlled by a MOSFET) and a thermistor to read its temperature.

When the thermistor is read, the Smoothie calculates the temperature, and then turns the heater on or off depending on whether heat is needed or not.

A few bad things can happen:

- The thermistor can get disconnected from the board, in this case, Smoothie detects it and turns everything off.
- The thermistor can fall off the heater, in which case Smoothie will think the hot-end is cold, and heat it too much.
- The MOSFET can fail, and be always on, resulting in the hot-end being over-heated.

One way to prevent the last two bad things is to add a second thermistor to the hot-end.

The second thermistor also reads the temperature on the hot-end, and if something goes bad, Smoothie turns the PSU off, preventing damage.

## Implementation

To implement this, you need three things:

- A [switch](switch) module that turns the PSU on and OFF. (See the [Switch](switch) documentation.)
- A [temperaturecontrol](temperaturecontrol) module that doesn't control any MOSFET but reads just the safety thermistor.
- A [temperatureswitch](temperatureswitch) module that turns a switch off if a temperaturecontrol module goes above a given temperature.

## Example Configuration

{::nomarkdown}
<review id="safety-thermistor:configuration">
<proposal>
{:/nomarkdown}

Here is an example configuration:

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

**V1 Configuration (flat namespace):**

```markdown
temperatureswitch.psu.enable               false            # Enable temperatureswitch module for PSU
temperatureswitch.psu.switch               psuswitch        # Designate switch module to use
temperatureswitch.psu.designator           F                # Designator for the safety thermistor
temperatureswitch.psu.threshold_temp       45               # Turn the PSU OFF above this temperature, and ON below this temperature. In °C.

switch.psuswitch.enable                    true             # Enable switch module for PSU
switch.psuswitch.input_on_command          M80              # Command to turn PSU on
switch.psuswitch.input_off_command         M81              # Command to turn PSU off
switch.psuswitch.output_pin                1.22!            # Pin for the switch control, 3rd small FET, or pin on header
switch.psuswitch.output_type               digital          # Output type, on/off only

# Define a read-only temperaturecontrol for a PSU cutoff
temperature_control.psu.enable             true             # Enable temperaturecontrol module for PSU
temperature_control.psu.thermistor_pin     0.25             # Pin for the safety thermistor to read
temperature_control.psu.heater_pin         nc               # Set to 'nc' for read-only temperature control
temperature_control.psu.thermistor         Semitec          # Thermistor type
temperature_control.psu.designator         F                # Designator for the safety thermistor
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

**V2 Configuration (INI sections):**

```ini
[temperature switch]
psu.enable = false               # Enable temperatureswitch module for PSU
psu.switch = psuswitch           # Designate switch module to use
psu.designator = F               # Designator for the safety thermistor
psu.threshold_temp = 45          # Turn the PSU OFF above this temperature, and ON below this temperature. In °C.

[switch]
psuswitch.enable = true                # Enable switch module for PSU
psuswitch.input_on_command = M80       # Command to turn PSU on
psuswitch.input_off_command = M81      # Command to turn PSU off
psuswitch.output_pin = 1.22!           # Pin for the switch control, 3rd small FET, or pin on header
psuswitch.output_type = digital        # Output type, on/off only

# Define a read-only temperaturecontrol for a PSU cutoff
[temperature control]
psu.enable = true            # Enable temperaturecontrol module for PSU
psu.thermistor_pin = 0.25    # Pin for the safety thermistor to read
psu.heater_pin = nc          # Set to 'nc' for read-only temperature control
psu.thermistor = Semitec     # Thermistor type
psu.designator = F           # Designator for the safety thermistor
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

Here is an example configuration:

```markdown
temperatureswitch.psu.enable               false            # Enable temperatureswitch module for PSU
temperatureswitch.psu.switch               psuswitch        # Designate switch module to use
temperatureswitch.psu.designator           F                # Designator for the safety thermistor
temperatureswitch.psu.threshold_temp       45               # Turn the PSU OFF above this temperature, and ON below this temperature. In °C.

switch.psuswitch.enable                    true             # Enable switch module for PSU
switch.psuswitch.input_on_command          M80              # Command to turn PSU on
switch.psuswitch.input_off_command         M81              # Command to turn PSU off
switch.psuswitch.output_pin                1.22!            # Pin for the switch control, 3rd small FET, or pin on header
switch.psuswitch.output_type               digital          # Output type, on/off only

# Define a read-only temperaturecontrol for a PSU cutoff
temperature_control.psu.enable             true             # Enable temperaturecontrol module for PSU
temperature_control.psu.thermistor_pin     0.25             # Pin for the safety thermistor to read
temperature_control.psu.heater_pin         nc               # Set to 'nc' for read-only temperature control
temperature_control.psu.thermistor         Semitec          # Thermistor type
temperature_control.psu.designator         F                # Designator for the safety thermistor
```

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

## Important Notes

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>5V Voltage Regulator Limitation:</strong> If you have a voltage regulator as your only 5V source on Smoothieboard, this will not work, as turning the PSU off will also turn the 5V off.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>ATX PSU Solution:</strong> If you use an ATX PSU, you can wire the 5VSB supply to the 5V input on the Smoothieboard, in which case the Smoothieboard will still get its 5V even if the PSU is shut down by the switch module.
  <br><br>
  Wire the ATX PS_ON to the ground of a small MOSFET. This will allow it to turn on/off with <mcode>M80</mcode>/<mcode>M81</mcode>, and will also shut off in case of a crash.
</sl-alert>
{:/nomarkdown}
