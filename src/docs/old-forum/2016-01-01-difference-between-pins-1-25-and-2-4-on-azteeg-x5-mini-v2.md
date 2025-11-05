# Difference between pins 1.25 and 2.4 on Azteeg X5 mini v2?

*Original post date: 2016-01-01*

---

# Difference between pins 1.25 and 2.4 on Azteeg X5 mini v2?

**WillAdams** 15 Aug 2016 17:19

Almost got it.

Only issue now should be fan not responding beyond twitching to M106/107 when configured on pin 2.4

Fan works full tilt on 1.25

Using

1. Switch module for fan control

```plaintext
switch.fan.enable true #
switch.fan.input_on_command M106 #
switch.fan.input_off_command M107 #
switch.fan.output_pin 2.4 #
switch.fan.output_type pwm
switch.fan.max_pwm 255


---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20161007174805/http://smoothieware.org/forum/t-1795421/difference-between-pins-1-25-and-2-4-on-azteeg-x5-mini-v2)*
