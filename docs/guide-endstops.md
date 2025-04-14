<img src="images/limit-switch.png" alt="Guide-End Stops">

*It's essentially just a switch*

# Endstops

End-stops are small interrupters that you put at the end of each of your axes. When you boot your machine up, Smoothie has no way of knowing the position of each axis. When it starts a print, Smoothie moves the axis until it touches that interrupter, and when it is hit, it declares that that is position **0** for that axis. And does so for all axes.

This allows Smoothie to then precisely know where everything is relative to that initial position. It is quite convenient as it saves you the hassle of actually moving the machine into that position when you want to start a print. Automation is great.

However, end-stops are not necessary, you could do without them. They are just so convenient that most machines use them.

End-stops can also be used as limit switches which prevent the machine from attempting to move beyond the physical limits of the axis (by pausing/stopping movement when triggered), see the [Endstops page](endstops.md) for details about configuring Smoothie to use End Stops as limit switches.

> [!NOTE]
> To make things as simple as possible: In Smoothie, endstops do three things: 
> * Homing (move til endstop is hit)
> * Hard endstops (stop when endstop is hit, which is optional)
> * Soft endstop (once homed, do not go further than a set position, which is also optional)

> [!WARNING]
> Smoothie does not allow you to use a zprobe as an endstop. An endstop must be dedicated to being an endstop and cannot be used as a zprobe and vice versa. This does not mean *ANY* kind of feature is missing, you can still do everything you expect, this is just a subtility in vocabulary and in how configuration is organized, that new users are generally fine with, *except* if they come from another system which has a different paradigm.

<img src="images/limit-switch.png" width="430px"><br/>

*There are 6 of them, two for each axis*

## Mechanical endstop wiring

This will concentrate on the most common type of end-stops: the mechanical ones. Other types exist like optical or hall-o sensors.

> [!WARNING]
> There are plenty of fun and futuristic endstop types around: optical, laser, magnetic, force-sensitive, infrared, inductive, etc...
> 
> However, please note that the general feedback from the community, is that most of those are either less precise, less repeatable, or much more difficult to get to "work right", compared to the classical "mechanical" endstop.
> 
> The mechanical endstop is actually likely the most precise, repeatable and easy to get to work option you have at your disposal. Just because these other options exist and have been explored by the community, does not mean they are better. 
> 
> You might happen have a good reason to use a fancy endstop, but if you don't, it's likely a good idea to stick with a mechanical one.

[Mechanical end-stops](http://reprap.org/wiki/Mechanical_Endstop) are simple interrupters: when not pressed, they do not let the current pass, when pressed, they let the current pass. By connecting a digital input pin on the Smoothieboard to the interrupter, and connecting the other side of the interrupter to Ground, the Smoothieboard can read whether or not it is connected to Ground, and therefore whether or not the end-stop is pressed.

Most mechanical end-stops have 3 connection points, to which you have to attach your wires: 

* **C**: Common
* **NO**: Normally Open, meaning it is not connected to **C** when the interrupter is not pressed, and connected to **C** when the interrupter is pressed.
* **NC**: Normally Closed, meaning it is connected to **C** when the interrupter is not pressed, and not connected to **C** when the interrupter is pressed.
<img src="images/end-stops.png" width="620px"><br/>
*You want to connect the **Signal** (green in the schematic) and **Ground** (blue in the schematic) pins for the end-stop on the Smoothieboard, to the **C** and **NC** connection points on the end-stop.*

> [!NOTE]
> For each endstop, we connect C to Signal and NC to Ground because this means the digital input pin (endstop connector) will be connected to Ground in its normal state and cut from Ground when the button is pressed. This approach is less prone to noise than the reverse. See [here](http://wot.lv/combating-endstop-noise-on-a-reprap.html) for more information.
> 
> Another positive effect of this approach is, that if a wire breaks for some reason you get the same signal as if the endstop is pressed. That makes sure that even with a damaged wire you are not able to overrun the endstop.

> [!DANGER]
> Make absolutely sure that you do not connect VCC (red) and GND (blue) to a mechanical (microswitch) endstop! Depending on your wiring this may fry your smoothieboard instantly or when the switch gets pressed. There is certain wiring where this won't happen when you switch the signal between VCC and GND, but if you're not careful enough you will damage your board.

You want to connect your X end-stop to the X min pins, Y end-stop to the Y min pins, and Z end-stop to the Z min pins.

## Powered endstops wiring

Mechanical endstops are simple switches, they simply let a signal pass through, or not, allowing us to detect their status with an endstop input. It has no intelligence of its own.

There are more sophisticated endstops. Those are "powered endstops", for example: Hall-O (magnetic) or optical endstops.

The only difference between a mechanical endstop and those powered endstops is that they require being provided with 5V power.

This means that where for a mechanical endstop you connect the `Signal` and `GND` pins, for a powered endstop, you connect the `Signal`, `GND` and `5V` pins.

Other than this, it works exactly the same as a mechanical endstop: The `Signal` pin receives something different depending on whether the endstop is triggered or not.

Different powered endstops have different behaviors: 

Some connect `Signal` to `Ground` when triggered, and `Signal` to `5V` when not triggered.

Others connect `Signal` to `5V` when triggered, and `Signal` to `Ground` when not triggered.

To know exactly what your endstop does, see its documentation.

If once wired, your endstop reports the opposite of what it should via the `M119` command (`1` when triggered/pushed, and `0` when not triggered), see the "Testing" section.

Some endstops might require removing their "pull-up" configuration, in this case, change:

```
alpha_min_endstop                            1.28^
```

To:

```
alpha_min_endstop                            1.28
```

And if you need it to be a pull-down, change it to:

```
alpha_min_endstop                            1.28v
```

In some very rare cases, the endstop reading circuit on the Smoothieboard will not be adequate for your endstop type. In this case, you should use a "free" GPIO pin on the Smoothieboard that nothing else uses to connect your endstop to.

See [Pinout](pinout.md) to find adequate pins.

## Testing

The default configuration most probably already has everything you need: the pins are already correct and the default speeds are reasonable.

Once they are wired, you can test your end-stops.

To do this, reset your Smoothieboard, then connect to it using host software like Pronterface or the [web interface](network.md).

Now connect to your Smoothieboard over the serial interface. Power your machine on by plugging the PSU into the wall.

Now in Pronterface, home one axis by clicking the small "home" icon for that axis. Begin with X, then Y, then Z.

If your axis moves until it hits the end-stop, then stops when it hits it, moves a small distance back, then goes a bit slower back to the end-stop and stops, that end-stop is working fine.

On the other hand, if the axis moves a small distance in the wrong direction, then stops, you have a problem: your Smoothieboard always reads the end-stop as being pressed. So when you ask it to move until the end-stop is hit, it reads it immediately as pressed and stops there.

Another problem can be that the axis moves and never stops, even after the end-stop is physically hit. This means your Smoothieboard actually never reads the end-stop as being pressed.

There is a command that allows you to debug this kind of situation: in Pronterface, enter the "**M119**" G-code.

Smoothie will answer with the status of each endstop like this:

```
X min:1 Y min:0 Z min:0
```

This means: X endstop is pressed, Y and Z endstops are not pressed.

Use a combination of this command, and manually pressing end-stop, to determine what is going on.

If an end-stop is read as always pressed, or never pressed, even when you press or release it, then you probably have a wiring problem, check everything.

If an endstop is read as pressed when it is not, and not pressed when it is, then your end-stop is inverted.

You can fix that situation by inverting the digital input pin in your configuration file. For example if your X min endstop pin is inverted, change:

```
alpha_min_endstop                            1.28^
```

To:

```
alpha_min_endstop                            1.28^!
```

Here is the exact mapping of pin names to inputs on the Smoothieboard:

| Endstop      | X MIN     | X MAX     | Y MIN     | Y MAX    | Z MIN     | Z MAX     |
| ------------ | --------- | --------- | --------- | -------- | --------- | --------- |
| Config value | alpha_min | alpha_max | beta_min  | beta_max | gamma_min | gamma_max |
| Pin name     | 1.24      | 1.25      | 1.26      | 1.27     | 1.28      | 1.29      |

More information can be found [here](endstops.md).
