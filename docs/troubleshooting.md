
# Troubleshooting a problem with your Smoothieboard

<img src="https://imgs.xkcd.com/comics/fixing_problems.png" width="50%">

If you have a problem with your Smoothieboard, don't panic.

First of all, make sure you have read the documentation on this website, it is likely the information you are looking for is here, it is a very complete documentation. In particular take a look at: 

- [3D Printer guide](3d-printer-guide.md)
- [Laser cutter guide](laser-cutter-guide.md)
- [CNC Mill/Router guide](cnc-mill-guide.md)

If you can't find your answer here, you can also ask for help in the community. There are many channels:
- [IRC for live chat, quicker answers quite often](irc.md)
- [Forum](http://smoothieware.org/forum-welcome-mat)
- [Support Mailing list](http://groups.google.com/group/smoothie-dev)
- [Google+ community](https://groups.google.com/g/smoothieware-support)

> [!WARNING]
> Before doing anything else, including asking for help, please read the "How to troubleshoot" section below.
> 
> And of course try to find the answer to your question on this page too.

Below is the list of the most common problems and things you can try to solve them :

## Table of contents

<!-- TOC -->

## How to troubleshoot

Here are some of the things you should do when running into trouble, and before asking any kind of help around : 

### 1. Backup your configuration file

Take your SD card out, and save your configuration file to your computer. If you are going to be messing around with the printer, you'd better be safe and make sure if anything happens to your SD card, you will not lose the work you put into your configuration file.

You should really have done this already, it's just good sense.

### 2. Clean your SD card

Sometimes SD cards get corrupted, and it can cause all sorts of weird and difficult to understand problems.

You should : 

- Format your SD card ( as FAT32 )
- Paste the [most recent firmware](getting-smoothie.md) file on your SD card
- Paste your configuration file to the SD card
- Insert the SD card back into the board and reset it

Then see if your problem still exists or not.

It's probably a good idea to do this even if you don't think it's a SD card related problem, quite often people think it's not and it fixes the issue anyway.

{% include_relative override-warning.md %}

### 3. Incremental wiring

This may not apply to your specific problem, but if it does : 

Unplug everything from your board, then plug things back into the board one at a time, resetting the board and testing your problem each time you do.

Start with USB, then the power supply, then do the same for each peripheral in turn until everything is plugged back in. If you do not know what the problem is, it should help you pinpoint it.

### 4. Prepare your config for asking for help.

Open your configuration file.

Copy its content.

Now go on the [pastebin.com](http://pastebin.com/) website.

Paste your configuration file's content into the « New paste » box

Click on « Create new paste »

The website will give you a link. You can now give this link to people on IRC or the forums, without having to copy/paste the entire file, and people will be able to see your config and help you.

### 5. Isolate the problem as much as possible

You want to make sure your remove as many influencing factors when debugging an issue. This makes sure you don't confuse a problem with another, or miss the fact that two problems are actually working together to ruin your life.

For example, let's say your ethernet is not working, then you want to do a few things : 

- Unplug everything from the board except USB ( which you need for power ) and Ethernet. This makes sure the problem isn't coming from some of the rest of the wiring
- Use the latest version of the edge firmware ( see [Getting Smoothie](getting-smoothie.md) ). This makes sure people helping you have the same frame of reference as you
- Use the latest version of the example config file ( see [Configuring Smoothie](configuring-smoothie.md) ), and strictly only modify the lines related to Ethernet, leave all the rest unchanged. This makes sure the rest of your config isn't part of the problem
- Try at least two different Ethernet cables, this makes sure the problem isn't the cable
- Try at least two different routers/networks, this makes sure the problem isn't the network

Of course, this is for network problems, adapt depending on your exact case. Use your smarts.

Make sure this is not a hardware problem before asking for help also, is your laser mirror path well aligned? Are all your screws tightened? Is your machine rigid enough for the task? Is your belt tight? Etc.

Finally, make sure you mention all those steps you have taken when asking the community for help, if you don't people will start telling you to do things you have already done.

### 6. Describe/Take a picture of your setup

Take a picture of your Smoothieboard, a global view of it ( tip : pictures are much sharper and therefore useful, if neither the camera nor the subject are moving. Deposit your camera on a flat surface or fix it in some fashion. If you think pressing the button will make it move, remember you can use a 5-second countdown to take pictures. )

Also take pictures of the connectors, wiring, motors, and overall machine. A picture is worth a thousand words.

When posting on a forum/social media to get help, attach your config ( it's pastebin link ), but also these pictures, as well as a description of your machine/setup ( as detailed as you can be patient for, with special time taken for anything that is not commonly done/unusual ).

If using a mailing list, do not insert the pictures in the body of your email, but rather attach them to the email. This make things easier for volunteers helping you, and not doing so often leads to ridiculously weird email client layouts ( for example if the picture is much larger than the screen ).

### 7. Before asking the community for help.

If you have an Open-Source board like the Smoothieboard, a board from Panucatt, or one of the many designed by the community and that support the project, ignore this.

If you chose to buy a closed-source derivative board, however, please understand that those are considered to be toxic to the project, and that asking the community for help with those would be similar to asking the community to help with destroying itself.

Please ask for help from the person that sold you that board, before asking the community for help. Providing support for their product is the absolute very least they can do. And of course unsurprisingly they are well known for not doing even that. But please ask them first.

If they don't help you, then feel free to ask the community, but please be aware even then some won't accept to help. If this happens please remember that the community helping you is a service they are giving you, and that when they choose not to, they are only not doing you a favor.

Always make sure you have your board updated to the very latest version of the firmware before you ask for help.

You will likely be asked to provide the result of the [version command](console-commands.md) so make sure to prepare that in advance.

Ideally, use Pronterface when troubleshooting, for various reasons ( one of which is that some hosts hide error messages. Another one is it helps us be better at helping you if everybody we help has the same host ).

1000% make sure you use the very latest example config file ( with your values ported over to it ), and the very latest firmware versions. This can't be repeated enough. This is said here and everywhere many times. If you come in asking for help, and after an hour everyone realizes your firmware is a year old, there is going to be a lot of frustration at you, you probably want to avoid that if you can.

## Power supply problems

### Smoothieboard does not work at all

First off, do any LEDs turn on on the board when plugged in via USB ?

If not, that's very bad, contact your seller.

If LEDs turn on, it then depends on what they do : 

There is a series of LEDs on your board, near the center. 

They are labelled `VBB` ( red ), `3.3V` ( orange ), and `1` `2` `3` and `4` ( all green ).

We are still only interested in the green LEDs.

Different behavior can represent different situations and problems for the board : 

> [!NOTE]
> Normal pattern
> 
> If your LEDs do this : 
> 
> ![Normal LED behavior](images/debug/leds.normal.gif)
> 
> Then the firmware is running, and the LEDs are displaying correct behavior.

> [!WARNING]
> SD card problem
> 
> If your LEDs do this : 
> 
> ![SD card problem LED behavior](images/debug/leds.nosdcard.gif)
> 
> Then the firmware is running, but the board encountered a problem reading or accessing the SD card, or the configuration file on the SD card. 
> 
> Try taking the card in and out of the board several times, or try using another SD card ( [here is how to set up a new card](sd-card.md) ).
> 
> See below for more details.

> [!DANGER]
> Firmware crash
> 
> If your LEDs do this : 
> 
> ![Firmware crash LED behavior](images/missing.png)
> 
> Or this : 
> 
> ![Firmware crash LED behavior](images/missing.png)
> 
> Then the firmware is not running. You can try [flashing the firmware again](flashing-smoothie-firmware.md).
> 
> See below for more details.

### Plugged in and 3.3V LED is OFF

This means the microcontroller on your Smoothieboard is not getting any power.

Smoothieboard gets this power from your USB cable (unless you are using the optional voltage regulator or the 5V input): check that Smoothieboard is correctly connected to a USB port or otherwise powered.

If it is, but the 3.3V LED is still not lit up, one other possible reason would be a short on your board.

Unplug the USB cable, and disconnect everything else from your Smoothieboard. Then plug the USB cable back in and check if it starts working again. 

If so, there is a short in one of the peripherals. Quite often this is due to incorrectly wired Endstops (shorting 3.3V to GND instead of connecting GND to Signal for example).

If this still does not solve the problem, examine the board for problems with your soldering of components/connectors and any other anomalies you can detect.

If you can still not find anything, [contact the community](getting-help-community.md).

### The 3.3V LED is ON but LED4 is not ON

LED4 indicates SD card status. If it is not lit up, it means there is a problem with your SD card.

First thing to try is taking the microSD card out of your Smoothieboard and testing it on your computer with a SD card reader.

If it works there, copy the files that are on it elsewhere, format it (as FAT32), copy the files back on it and try again.

If it still does not work in the Smoothieboard after this, take another microSD card, format it (as FAT32), copy the files to it, then try again.

If it still fails, then as you tried two SD cards they are probably both fine. The problem could be with the files on it. 

Format a SD card as FAT32, and on that fresh card, copy two files: 

- **firmware.bin** , with this exact name, which you can find [here](getting-smoothie.md)
- **config** , with this exact name, which you can find [here](configuring-smoothie.md)

Then insert the card into your Smoothieboard and try again.

### The 3.3V LED is ON but none of the 1 through 4 LEDS is ON

Or LED1 and LED4 are ON, but LED2 and LED3 are not blinking.

This could be caused by a firmware bug, or by a problem with your configuration file. 

Try with a [fresh configuration file](configuring-smoothie.md), and if it does not solve the problem [contact the community](getting-help-community.md).

If you soldered the smoothieboard then check either the 12 MHz oscillator or the SD card/SD card slot.
*This could be a bad solder joint with the 12 MHz oscillator (crystal), a bad SD card slot, a bad SD card, and/or a bad config file. 

### The 3.3V LED is ON, and LEDs 1 and 3 are ON and 3 is not blinking, LEDs 2 and 4 are OFF

This could mean your board has no bootloader, which is very wrong. Contact whomever sold you your Smoothieboard.

### The 3.3V LED is ON, and LEDs 1, 2, 3 and 4 are ON and none are blinking

This could mean you have a bootloader but no firmware was ever flashed or found on the SD card. Again, this is very wrong, contact whomever sold you your Smoothieboard.

### 12 or 24V power is plugged in but the VBB LED is not ON

Unplug power immediately !

Check that your power is not in reverse polarity. 

Even if you think you have it correct (read the instructions carefully, the markings on the board can be a bit confusing), try reversing it just in case.

### All LEDs are on but LED 2 and 3 are solid

Firmware didn't get flashed, you need to flash it and also make sure you uploaded a valid config.

### It smells like something is burning!

Whaaaaa! Unplug everything! Get a fire extinguisher!

Now, try to remember exactly what you were doing with your board, and contact whomever sold it to you.

### Mosfets are never turning on

You configured everything right and plugged the heating elements into your mosfet outputs, but no matter what you do, they do not turn on.

Note Smoothieboard does not have a single power input. It has one for the motors, and then the big mosfets have their own inputs, and the small ones have theirs. You need to provide power to each, according to the mosfets you are using. See the documentation on this, it goes into great detail and has diagrams.

### Grounding problems

If you don't know about grounding, it's a great idea to read this post : [Earth, Ground, and the Grid](http://hackaday.com/2017/07/25/earth-ground-and-the-grid/)

## Configuration problems

### Changes to configuration are ignored in general

The config changes are not taken into account, files do not appear or do not update on the SD card

If anything like this happens, that could be related to the SD card "messing up", format the SD card ( as VFAT/FAT32 ), then paste your files back on it.

See [SD card](sd-card.md).

Sometimes the SD card can get corrupted after which it will do strange things. Always make sure you unmount ( virtually not physically ) your SD card after doing anything on it

For configuration changes which are being made in the `config` file and are not being applied, check that they are not being overridden in the `config-override` file in the same folder:

{% include_relative override-warning.md %}

### Changes to configuration are ignored on a particular line

If a line begins with the `#` character, it means it is "commented out" and Smoothieboard will ignore it. 

You need to remove the `#` character and Smoothie will now take the line into account.

### «  No strategy found to handle G32 »

If you try to run bed leveling or calibration, and the board answers something like «  No strategy found to handle G32 », please do the following : 

- Flash the very latest [firmware](flashing-smoothie-firmware.md)
- Start your configuration fresh from the very latest [example configuration file](configuring-smoothie.md)
- Enable the calibration strategy by following the exact instructions at [zprobe](zprobe.md)

This error message most of the time means your config and firmware aren't up to date with each other. Upgrading everything solves the issue.

### Bed leveling seems to have no effect

If you try to run bed leveling or calibration, and it seems to have no effect at all, please do the following : 

- Flash the very latest [firmware](flashing-smoothie-firmware.md)
- Start your configuration fresh from the very latest [example configuration file](configuring-smoothie.md)
- Enable the calibration strategy by following the exact instructions at [zprobe](zprobe.md)

This symptom most of the time means your config and firmware aren't up to date with each other. Upgrading everything solves the issue.

## Movement problems

### My stepper motor does not turn correctly

If it always turns in the same direction, and/or turns only weakly, and/or makes a strange sound, one very common cause of that is that only 3 of the wires of the motor are connected to the stepper motor driver.

Check your connector and your cables.

If that doesn't help, do the following : 
- Try this motor on another stepper motor driver
- Try another motor on this stepper motor driver

### My stepper motor does not turn at all and makes a very high-pitched sound

This can happen with Z axis (or any leadscrew driven stepper motor) due to the high steps per millimeter number. You are probably trying to move it too fast. Try asking it to move at a much lower speed ( for example `G1 Z100 F100` ).

It's also possible you are trying to home, or to probe too fast. See the corresponding modules for how to modify the default speeds.

If you are using external stepper motor drivers (driven by ENn, Stn and DIRn pins) check polarity, voltage and timings of signals to your driver. Also consider increasing `microseconds_per_step_pulse` slightly if the default 1us pulse width is too narrow for your driver or cable lengths.

### My stepper motor does not turn at all

And it does not present any resistance/torque when turning it manually :

This means the stepper motor driver is maybe not able to power the stepper motor. 

Try wiring a different motor to that driver and try again. If the new motor works on this driver, then the motor is the problem. Otherwise the driver is probably the problem.

If you changed any of the stepper