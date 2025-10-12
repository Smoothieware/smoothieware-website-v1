
# Printing, milling or cutting from the SD card

Printing, milling or cutting from the SD card on Smoothieboard is easy.

First, you transfer your gcode files to the card. You can do this by moving the SD card to your computer and copying the files to it or simply copy the files to the card when it mounts on your desktop.

If it isn't mounting automatically, you are probably running Linux and have automount disabled. You can change that or manually mount it.

The other option is to use the built-in [Web Server](network) if you have installed the RJ45 connector and an ethernet connection to the board. You can upload files to the SD card with this convenient Web interface.

## Running files from the SD card

Now, with your gcode files on the SD card, there are a few options to run it from there:

### Serial terminal

<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Using a Serial Terminal</strong><br><br>

  You can use a serial port terminal application like <a href="http://freeware.the-meiers.org">CoolTerm</a> (it supports OSX, Windows, Linux) or <a href="https://help.ubuntu.com/community/Cutecom">Cutecom</a> (OSX and Linux). Once connected, enter <code>help</code> to get a list of <a href="console-commands">supported console commands</a>.<br><br>

  If you use <a href="http://www.pronterface.com">Pronterface</a> with your 3D printer, you can use its built-in serial terminal feature - just prefix serial commands with an "@". So, once connected to smoothie send <code>@help</code> and it will list all of the available commands.<br><br>

  You can find more information about using the <code>play</code> command <a href="player">here</a>.<br><br>

  You can also use the <code>M24</code> G-code to play files from the SD card, see <a href="supported-g-codes">Supported G-codes</a>.
</sl-alert>

### Web interface

<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Using the Web Interface</strong><br><br>

  Another option is to use the <a href="network">Web interface</a> to control playback from your SD card.
</sl-alert>

### Panel

<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Using a Panel</strong><br><br>

  If you have a <a href="panel">panel</a> (like the <a href="http://reprap.org/wiki/RepRapDiscount_Full_Graphic_Smart_Controller">RepRapDiscount GLCD</a>) you can use the panel menus to run/pause/stop printing your gcode files.
</sl-alert>
