---
permalink: /smoothiepanel-beta-errata
---

# Smoothiepanel Beta Proto1 Errata

The limited release Smoothiepanel Beta Proto1 boards have a couple of bugs and gotchas that are being documented here.

## Known Issues

### Power Requirements

Only the 5V power pin is necessary as the board provides its own 3.3V power.

### I2C Port Pinout

JP2 and JP3 are both I2C ports with the same pinout.

The pinout is listed near the JP3 connector.

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Important:</strong> The <code>sda</code> and <code>scl</code> labels are backwards on the silkscreen.
</sl-alert>
{:/nomarkdown}

On a related note, the Smoothieboard Beta run from TrinityLabs has a different I2C pinout, so watch out for that too.

It is wired `3v3 sda scl gnd` instead of `3v3 gnd sda scl`.

### Resistor Grounding

R10 and R21 are unpopulated in the prototype.

This can lead to the panel *sometimes working* and *sometimes not working* due to random static electricity related reasons.

The bottom pad of each resistor needs to be tied to ground to solve this problem.

### Click Encoder

The click encoder signal is not transmitted over the I2C bus.

`ENC_A` and `ENC_B` will need to be wired to two pins.

The suggested pins are `P1.22` and `P1.23`.

### I2C Pull-ups

The I2C port pull-ups are not populated, which may be a problem for some users.

These are R7 and R8, and anything in the general vicinity of 1k to 10k should work.

A smaller resistance value should generally lead to more stable communications that can be run at higher speed.
