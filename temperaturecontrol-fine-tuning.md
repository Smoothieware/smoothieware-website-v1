
### If you are using a 12v heater on a 24v system

You need to set `max_pwm` to 64:

```markdown
temperature_control.hotend.max_pwm 64 #
```

### If you are getting 10°C or more initial overshoot of temperature

You can set `i_max` to a lower value (default is `max_pwm`). 128 seems to be a good value, but it can be tuned with `M301 S0 Xnnn` where `nnn` is a number less than or equal to `max_pwm`:

```markdown
temperature_control.hotend.i_max 128 #
```

### To avoid accidental setting of too high a temperature

You can set `max_temp` to the maximum temp that is safe for the target heater. This will ignore any setting of temperatures that are higher than this and instead set the temp to `max_temp`. It will also shutdown if this temperature is exceeded.

```markdown
temperature_control.hotend.max_temp 230    #
```
