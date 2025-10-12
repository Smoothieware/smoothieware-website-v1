---
layout: default
title: Temperature Control PID
---

# Temperature Control PID

{::nomarkdown}
<a href="images/temperaturecontrol.gif">
  <img src="images/temperaturecontrol.gif" alt="TemperatureControl" width="430" height="auto" style="float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

## Why PID is Important

PID is crucial for stable temperature control.

Without PID, a simple way to control temperature would be:

- If temperature too cold, turn heater on
- If temperature too hot, turn heater off

But there is a big problem with that method.

Due to temperature not traveling instantly from the heater to the thermistor, when the thermistor reads a given temperature, the heater is already hotter than what the thermistor reads.

This overshooting is something we do not want.

It means reaching temperatures that could be undesirable, and it means you will not be able to correctly stabilize the temperature.

---

## What is PID?

The solution to this is [PID](http://en.wikipedia.org/wiki/PID_controller).

It uses some math, allowing us to correct those problems by turning the heater on and off in a smarter sequence.

**PID stands for:**

- **P**roportional - Responds to current error
- **I**ntegral - Responds to accumulated error over time
- **D**erivative - Responds to rate of change of error

---

## Configuring PID Values

The P, I, and D factors are configured in your config file as follows:

```gcode
temperature_control.hotend.p_factor     100
temperature_control.hotend.i_factor     0.1
temperature_control.hotend.d_factor     100
```

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Important:</strong> Do not try to use PID settings from Marlin as they are not compatible. Smoothie uses different PID algorithms and the values will not translate directly.
</sl-alert>

---

## Finding the Right Values

The really tricky thing is to find the right values for these 3 factors.

The default ones are most probably wrong for your setup.

So unless you have been given those values with your hardware, or you are a PID grand-master, you will need some help finding the optimal values.

### PID Auto-Tuning

<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>Recommended Method:</strong> Use Smoothie's built-in PID auto-tuning feature to automatically calculate optimal PID values for your hardware.
</sl-alert>

To auto-tune your PID values:

1. **Start the auto-tune process:**
   ```gcode
   M303 E0 S200
   ```
   - `E0` specifies the hotend (use E1, E2, etc. for other extruders)
   - `S200` is the target temperature (adjust to your typical printing temperature)

2. **Wait for completion** - The process will take several minutes as it cycles the heater and measures response

3. **Review the results** - The auto-tune will output the calculated PID values

4. **Update your config** - Add the new values to your config file

5. **Test** - Heat to your target temperature and verify stability

---

## Manual PID Tuning

If auto-tuning doesn't work well for your setup, you can manually tune:

### Starting Values

Begin with conservative values:

```gcode
p_factor = 100
i_factor = 0.1
d_factor = 100
```

### Tuning Process

1. **Adjust P first:**
   - Too low: Slow to reach temperature, large oscillations
   - Too high: Fast oscillations, unstable

2. **Then adjust I:**
   - Too low: Won't eliminate steady-state error
   - Too high: Overshoots, slow to stabilize

3. **Finally adjust D:**
   - Too low: More overshoot
   - Too high: Very sensitive, noisy

<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Tip:</strong> Make small adjustments (10-20% at a time) and test thoroughly after each change. Monitor temperature graphs to see the effect of your changes.
</sl-alert>

---

## Different Heater Types

Different heater configurations may require different tuning approaches:

### High-Power Heaters

High-power heaters (like cartridge heaters) may need:
- Lower P values
- Higher D values
- Faster response times

### Low-Power Heaters

Low-power heaters (like resistive wire) may need:
- Higher P values
- More integral action
- Slower response tuning

### Heated Beds

Heated beds typically need:
- Much lower P values due to large thermal mass
- More integral action for steady-state
- Lower D values due to slow thermal response

---

## Troubleshooting PID Issues

### Temperature Oscillates

**Symptom:** Temperature swings up and down around target

**Solutions:**
- Reduce P factor
- Increase D factor
- Check for good thermal coupling between heater and thermistor

### Slow to Reach Temperature

**Symptom:** Takes a long time to heat up

**Solutions:**
- Increase P factor
- Check PWM frequency settings
- Verify heater power is adequate

### Overshoots Temperature

**Symptom:** Temperature goes past target then settles

**Solutions:**
- Reduce P factor
- Increase D factor
- Reduce I factor

### Won't Stabilize

**Symptom:** Can't maintain steady temperature

**Solutions:**
- Increase I factor slightly
- Check for environmental factors (drafts, etc.)
- Verify thermistor is working correctly

---

## Advanced Configuration

### PWM Frequency

The PWM frequency can affect PID performance:

```gcode
temperature_control.hotend.pwm_frequency    1000
```

Higher frequencies (1000-4000 Hz) are typically better for solid-state relays and MOSFETs.

### Bang-Bang Mode

For very simple setups, you can disable PID entirely:

```gcode
temperature_control.hotend.bang_bang    true
```

This uses simple on/off control. Not recommended for most applications.

---

## Further Reading

- [Temperature Control module documentation](temperaturecontrol)
- [Thermistor configuration](thermistors)
- [Heater configuration](heater)
- [M303 G-code documentation](supported-g-codes)

---

## Safety Notes

<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Safety Warning:</strong>
  <ul>
    <li>Never leave heaters unattended during PID tuning</li>
    <li>Ensure thermal runaway protection is enabled</li>
    <li>Monitor temperatures closely during tuning</li>
    <li>Have a fire extinguisher nearby</li>
    <li>Stop immediately if anything seems wrong</li>
  </ul>
</sl-alert>
