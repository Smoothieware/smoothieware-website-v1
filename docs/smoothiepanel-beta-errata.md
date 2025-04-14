
# Smoothiepanel Beta Proto1 Errata

The limited release Smoothiepanel Beta Proto1 boards have a couple of bugs / gotchas, and so they are being documented here:

- Only the 5V power pin is necessary as the board provides its own 3.3V power.
- JP2 and JP3 are both I2C ports with the same pinout. The pinout is listed near the JP3 connector. **BUT** the `sda` and `scl` are labeled backwards on the silk. On a related note, the Smoothieboard Beta run from TrinityLabs has a weird I2C pinout too so watch out for that, too. It is wired `3v3 sda scl gnd` instead of `3v3 gnd sda scl`.
- R10 and R21 are unpopulated in the prototype. I thought that was enough... but it turns out that can lead to it *sometimes working* and *sometimes not* for random static electricity related reasons. The bottom pad of each needs to be tied to ground to solve this problem. In the following pic the relevant pads on R10 and R21 are circled in red and some convenient nearby gnd points are circled in blue.
- The click encoder signal is not transmitted over the I2C bus. `ENC_A` and `ENC_B` will need to be wired to two pins, suggested is `P1.22` and `P1.23`

![SmoothiePanelBeta-Proto1 Errata](images/smoothiepanel-beta-errata/SmoothiePanelBeta-Proto1-errata0.png)

- The I2C port pull-ups are not populated which may be a problem for some. These are R7 and R8 and anything in the general vicinity of 1k to 10k should work, though a smaller number should generally lead to more stable comms that can be run at higher speed.
