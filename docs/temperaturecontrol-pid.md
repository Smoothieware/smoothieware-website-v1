{::nomarkdown}
<img src="images/temperaturecontrol.gif" alt="TemperatureControl" width="430px"><br/>

{:/nomarkdown}
*It's not very refined*

PID is important. Without PID, a simple way to control temperature would be:

- If temperature too cold, turn heater on
- If temperature too hot, turn heater off

But there is a big problem with that method. Due to temperature not traveling instantly in what you heat from the heater to the thermistor, when the thermistor reads a given temperature, the heater is already hotter than what the thermistor reads. And that overshooting is something we do not want. It means reaching temperatures that could be undesirable, and it means you will not be able to correctly stabilize the temperature.

The solution to this is [PID](http://en.wikipedia.org/wiki/PID_controller). It uses some math, allowing us to correct those problems by turning the heater on and off in a smarter sequence.

The P, I, and D factors are configured as follows:

```
temperature_control.hotend.p_factor     100
temperature_control.hotend.i_factor     0.1
temperature_control.hotend.d_factor     100
```

But the really tricky thing is to find the right values for these 3 factors: the default ones are most probably wrong for your setup. So unless you have been given those values with your hardware, or you are a PID grand-master, you will need some help:

> [!WARNING]
> Do not try to use PID settings from Marlin as they are not compatible.
