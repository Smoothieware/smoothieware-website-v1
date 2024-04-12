
There is a series of [LEDs](http://en.wikipedia.org/wiki/Light-emitting_diode) on your board, near the center.

They are labelled `VBB` (red), `3.3V` (orange), and `1` `2` `3` and `4` (all green).

We are still only interested in the green LEDs.

Different behavior can represent different situations and problems for the board:

> [!SUCCESS]
> **Normal pattern**
>
> If your LEDs do this:
>
> ![LEDs Normal Pattern](/images/debug/leds-normal.gif)
>
> Then the firmware is running, and the LEDs are displaying correct behavior.
>
> Click on [Normal pattern](/debug/firmware_running.md)

> [!WARNING]
> **SD Card problem**
>
> If your LEDs do this:
>
> ![LEDs No SD Card](/images/debug/leds-nosdcard.gif)
>
> Then the firmware is running, but the board encountered a problem reading or accessing the SD card, or the configuration file on the SD card.
>
> Click on [SD Card problem](/debug/sd_card_problem.md)

> [!DANGER]
> **Firmware crash**
>
> If your LEDs do this:
>
> ![LEDs All On](/images/debug/leds-all.png)
>
> Or this:
>
> ![LEDs 1 and 4 On](/images/debug/leds-14.png)
>
> Then the firmware is not running.
>
> Click on [Firmware crash](/debug/firmware_crash.md)

- [Normal pattern](/debug/firmware_running.md)
- [SD Card problem](/debug/sd_card_problem.md)
- [Firmware crash](/debug/firmware_crash.md)
