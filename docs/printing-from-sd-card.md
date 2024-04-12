
# Printing, milling or cutting from the SD card

Printing, milling or cutting from the SD card on Smoothieboard is easy. First, you transfer your gcode files to the card. You can do this by moving the SD card to your computer and copying the files to it or simply copy the files to the card when it mounts on your desktop. If it isn't mounting automatically, you are probably running Linux and have automount disabled. You can change that or manually mount it. The other option is to use the built-in [Web Server](network.md) if you have installed the RJ45 connector and an ethernet connection to the board. You can upload files to the SD card with this convenient Web interface.

Now, with your gcode files on the SD card, there are a few options to run it from there:

> [!NOTE]
> **Serial terminal**
> You can use a serial port terminal application like [CoolTerm](http://freeware.the-meiers.org) (it supports OSX, Windows, Linux) or [Cutecom](https://help.ubuntu.com/community/Cutecom) (OSX and Linux). Once connected, enter `help` to get a list of [supported console commands](console-commands.md).
>
> If you use [Pronterface](http://www.pronterface.com) with your 3D printer, you can use its built-in serial terminal feature - just prefix serial commands with an "@". So, once connected to smoothie send `@help` and it will list all of the available commands.
>
> You can find more information about using the `play` command [here](http://smoothieware.org/player).
>
> You can also use the `M24` G-code to play files from the SD card, see [Supported G-codes](http://smoothieware.org/supported-g-codes).

> [!NOTE]
> **Web interface**
> Another option is to use the [Web interface](network.md) mentioned above.

> [!NOTE]
> **Panel**
> If you have a [panel](panel.md) (like the [RepRapDiscount GLCD](http://reprap.org/wiki/RepRapDiscount_Full_Graphic_Smart_Controller)) you can use the panel menus to run/pause/stop printing your gcode files.
