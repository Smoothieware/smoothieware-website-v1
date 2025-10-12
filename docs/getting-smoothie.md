
# Binaries

<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Smoothieboards come pre-flashed</strong><br><br>

  You do not need to flash your Smoothieboard when you get it. You only need to do so to update it to a newer version of the firmware if you wish.<br><br>

  When you upgrade to a newer version, make sure you also upgrade your <a href="configuring-smoothie">configuration file</a>.<br><br>

  Make sure the very first time you plug your board in, you let it on for at least 20 seconds: it might try flashing its firmware the first time it boots, and interrupting it is bad (solution if this happens: flashing it again).
</sl-alert>

Recent stable builds of the firmware can be found here: [https://github.com/Smoothieware/Smoothieware/tree/edge/FirmwareBin](https://github.com/Smoothieware/Smoothieware/tree/edge/FirmwareBin)

Very latest are called `..._latest.bin`

You can also find automated builds [here](#automated-builds).

<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>CNC-specific builds</strong><br><br>

  For CNC machines, a CNC specific build can be found <a href="https://github.com/Smoothieware/Smoothieware/blob/edge/FirmwareBin/firmware-cnc.bin?raw=true">here</a> and rename to <code>firmware.bin</code>.<br><br>

  This build has the spindle module compiled in, but not the extruder or temperature control modules. It also only has 3 axes compiled in.
</sl-alert>

Then you can flash the new binary by following the guidelines [here](flashing-smoothie-firmware).

If you want the very latest bleeding edge, you can also compile it yourself, come to [IRC](irc) if you need help with [compilation](compiling-smoothie).

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>IMPORTANT</strong><br><br>

  If you are upgrading from a previous version of master or edge check for upgrade notes in the GitHub root directory: <a href="https://github.com/Smoothieware/Smoothieware/blob/edge/upgrade-notes.md">https://github.com/Smoothieware/Smoothieware/blob/edge/upgrade-notes.md</a>
</sl-alert>

## From source

Smoothie can be found on GitHub at the following address:

- [https://github.com/Smoothieware/Smoothieware](https://github.com/Smoothieware/Smoothieware)

You can retrieve the code using [git](http://git-scm.com/download):

```bash
git clone git://github.com/Smoothieware/Smoothie.git
```

For instruction to compile Smoothie from source, please see [compiling-smoothie](compiling-smoothie).

{% include_relative latest-firmware-compact.md %}

### Edge branch

You will be on the edge branch by default.

The [edge](https://github.com/Smoothieware/Smoothieware/tree/edge) branch is always more up to date.

You probably **want to be on the edge branch** to compile.

If you want to compile the master branch, please do:

```bash
git checkout master
```

Unless you can say «I fully understand why I need the master branch», it's pretty certain you don't. Please use edge.

### Automated builds

The edge branch is automatically built for every new commit to the repository.

You can find these automatic builds below with different possible configurations, in particular the default build (for 3D printers), and the CNC build for different amounts of axes:

{% include_relative builds-edge.md %}
