
# New features, please test

We just merged a massive code refactor into Smoothie ( [Smoothieware Pull Request #961](https://github.com/Smoothieware/Smoothieware/pull/961) ).
This was truly a massive chunk of work, but it does need more testing.

This changes Smoothie to calculate acceleration for every step instead of 1000 times a second, which results in even smoother/better quality movement.
It also comes with many many smaller improvements to planning and step generation. It solves many small problems users experienced in some circumstances. Amongst those, it is expected to fix the infamous "S3D bug", so please test that.
It is also expected to make Smoothie more sturdy overall, and is a first step towards implementing some more refactors.

A few things have changed for users, so please read [the upgrade notes](https://github.com/Smoothieware/Smoothieware/blob/edge/upgrade-notes.md) before upgrading.

To upgrade, the procedure is as usual, and you can find it here: [Flashing Smoothie Firmware](http://smoothieware.org/flashing-smoothie-firmware)

Please tell us if you encounter any problems, and what you think about your Smoothie's new step generation.

If you are not up for a little testing, then please use the master branch instead.

Cheers :)
