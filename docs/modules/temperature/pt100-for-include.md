
# PT100 Temperature Sensors

A [PT100](https://en.wikipedia.org/wiki/Resistance_thermometer) is a commonly used RTD (Resistance Temperature Detector).

Compared to NTC (the most common) thermistors, the PT100 is "PTC" so the change in resistance with temperature is the "other way around".

PT100 sensors also have a very different curve than NTCs handled by the Thermistor class.

## What is PTC?

"PTC" means "positive temperature coefficient" so electrical resistance increases with raising temperature.

They cannot be used as-is, you must use an amplifier circuit to raise the voltage change so they become usable by SmoothieBoard.

## Supported Amplifiers

Currently, Smoothie only supports E3D's PT100 amplifier board.

Other PT100 amplifiers may be supported later (i.e. MAX31865 via SPI).

{::nomarkdown}
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>CRITICAL POWER REQUIREMENT:</strong> The PT100 E3D amplifier needs to be powered from the AVCC and AGND header pins on the SmoothieBoard, only newer boards have this header.
  <br><br>
  If you do not have AVCC/AGND pins, you can use 3.3V and GND. However, this may introduce noise in the ADC system and may affect all temperature readings from analog sources (i.e. thermistors and PT100).
  <br><br>
  <strong>DO NOT power from 5v or you will kill the port.</strong>
</sl-alert>
{:/nomarkdown}

## Configuration

You wire a PT100 *almost* the same way you would a thermistor, but you need to specify to Smoothie it is a PT100 and where you connected the amplifier signal output:

```markdown
temperature_control.hotend.enable              true
temperature_control.hotend.sensor              pt100_e3d
temperature_control.hotend.e3d_amplifier_pin   1.30        # must be a free ADC pin, not a temperature input
```

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  When using a PT100 sensor type you do not need to set values for the thermistor kind or thermistor_pin. If you do, these values will be ignored.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>IMPORTANT:</strong> You <strong>must</strong> use a spare ADC pin to connect the amplifier signal; you <strong>cannot</strong> use a thermistor input due to the pull-up that is already on the board. On most boards that means either <pin>1.30</pin> or <pin>1.31</pin>, depending on what is more convenient.
</sl-alert>
{:/nomarkdown}
