---
permalink: /voltage-monitor
title: Voltage Monitor
---

# Voltage Monitor

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Smoothieware V2 Only:</strong> The Voltage Monitor feature is only available in Smoothieware V2. It is not supported on Smoothieboard V1 hardware.
</sl-alert>
{:/nomarkdown}

The Voltage Monitor feature allows Smoothieware V2 to monitor power supply voltages through dedicated ADC (Analog-to-Digital Converter) channels. This is useful for:

- Monitoring motor supply voltage (Vbb/Vmotor)
- Monitoring FET power supply voltage (Vfet)
- Detecting power supply issues before they cause problems
- Ensuring the stepper drivers have proper voltage before initialization

## How It Works

The STM32H7 processor in Smoothieboard V2 has multiple ADC peripherals. ADC3 is dedicated to voltage monitoring, with several channels available for different voltage rails. The firmware reads these voltage levels and makes them available through console commands.

### Built-in Voltage Monitors

On the Smoothieboard V2 Prime, two voltage monitors are automatically configured by default:

| Monitor | Description | ADC Channel | Default Scale |
|---------|-------------|-------------|---------------|
| **vmotor** | Motor supply voltage (Vbb) | ADC3_5 | 11.0 |
| **vfet** | FET supply voltage | ADC3_2 | 11.0 |

Additionally, two internal voltage references are always available:

| Monitor | Description | Notes |
|---------|-------------|-------|
| **vref** | Internal reference voltage | ~3.3V |
| **vbat** | Backup battery voltage | Scaled by 4.0 |

## Configuration

You can add custom voltage monitors by defining them in the `[voltage monitor]` section of your configuration file. Each monitor requires an ADC3 channel and optionally a scale factor.

```ini
[voltage monitor]
# Format: name = ADC3_channel,scale
# scale is optional, defaults to 11.0 (appropriate for typical voltage dividers)

vmotor = ADC3_5,11.0  # monitors motor voltage (Vbb)
vfet = ADC3_2,11.0    # monitors FET voltage
# custom = ADC3_0,5.5   # example custom monitor with different scale
```

### Configuration Options

| Option | Description | Default |
|--------|-------------|---------|
| `name` | Any valid identifier for your monitor | - |
| `ADC3_n` | ADC3 channel number (0-5) | - |
| `scale` | Voltage divider scale factor | 11.0 |

### Understanding the Scale Factor

The scale factor accounts for the voltage divider on the board. The ADC can only measure voltages up to 3.3V, so higher voltages are divided down. A scale of 11.0 means the actual voltage is 11 times the measured voltage (e.g., a 1:11 voltage divider for measuring 24V supplies).

## Console Commands

You can check voltage readings using the `voltage` console command:

```
> voltage
vmotor: 24.12V
vfet: 24.08V
vref: 3.30V
vbat: 3.28V
```

### Usage

Simply type `voltage` at the console to see all configured voltage monitors and their current readings.

## Troubleshooting

### Stepper Drivers Not Initializing

The TMC stepper drivers on V2 boards require proper motor voltage (Vmotor/Vbb) before they can be configured. If you see errors about driver initialization, check:

1. Motor power supply is connected and powered on
2. Voltage monitor shows reasonable Vmotor reading (typically 12-48V depending on your setup)
3. The motor power supply voltage matches your driver and motor requirements

### Voltage Reading Shows 0 or Incorrect Value

- Verify the ADC channel number matches your hardware
- Check the scale factor is appropriate for your voltage divider
- Ensure the voltage monitor section is properly formatted

### Common Voltage Ranges

| Application | Typical Vmotor |
|-------------|----------------|
| 3D Printer (NEMA 17) | 12-24V |
| CNC Mill (NEMA 23) | 24-48V |
| Large CNC (NEMA 34) | 36-80V |

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Warning:</strong> Always ensure your power supply voltage matches the specifications of your stepper drivers and motors. Excessive voltage can damage components, while insufficient voltage may cause poor performance or driver errors.
</sl-alert>
{:/nomarkdown}

## Related Documentation

- [Smoothieboard V2 Prime](/smoothieboard-v2-prime)
- [Current Control](/currentcontrol)
- [TMC Driver Configuration](/smoothieboard-v2-differences#2-stepper-motor-drivers)

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  If you want to learn more about this feature, or are curious how it works, Smoothie is Open-Source and you can simply go look at the code, <a href="https://github.com/Smoothieware/SmoothieV2/blob/master/Firmware/src/main.cpp">here</a>.
</sl-alert>
{:/nomarkdown}
