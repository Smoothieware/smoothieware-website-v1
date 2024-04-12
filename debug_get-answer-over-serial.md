
# VBB Power Input

VBB is the main power input on the Smoothieboard.

You connect your 12 or 24V [Power Supply](http://en.wikipedia.org/wiki/Power_supply_unit_%28computer%29) to it, and that power is then used to power:

- The stepper motor drivers
- The mixed mosfets (the mosfets that are present only on the 5XC variant)
- The small mosfets if you install a jumper to allow them to power themselves from VBB (see [relevant guide](/3d-printer-guide.md#toc13))
- The [voltage regulator](/voltageregulator.md) if it is installed

Here we are trying to figure out if your board is successfully powered via VBB.

First, connect the power cables from your PSU, to the VBB input on the Smoothieboard (be careful of the polarity).

Then, turn the PSU on (be ready to turn it off fast if something goes wrong).

Then, look at the VBB LED on the board.

If it is lit up like this:

![VBB LED Lit](http://chibidibidiwah.wdfiles.com/local--files/debug%3Aget-answer-over-serial/leds-vbblit.png)

Then everything is good, and you can answer **Yes**.

Otherwise, if it is not lit up, like so:

![VBB LED Unlit](http://chibidibidiwah.wdfiles.com/local--files/debug%3Aget-answer-over-serial/leds-vbbunlit.png)

Then **immediately** turn the Power Supply off, then answer **No**.

---

[**Yes**](/debug:vbb_is_getting_power.md){: .btn .btn-success .btn-lg .btn-block }

[**No**](/debug:vbb_is_not_getting_power.md){: .btn .btn-warning .btn-lg .btn-block }
