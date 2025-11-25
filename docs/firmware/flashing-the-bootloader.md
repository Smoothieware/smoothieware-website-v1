---
permalink: /flashing-the-bootloader
---

# Flashing the Bootloader

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Homemade Boards Only (v1)</strong>
  <p>This page covers SD bootloader flashing for Smoothieware V1.</p>
  <p>This is relevant only on homemade boards.</p>
  <p>This is not needed on all recent purchased boards (after summer 2013), they come with the bootloader pre-flashed.</p>
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="info" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>V2 Users: Different Flashing Method</strong>
  <p>Smoothieware V2 uses a different firmware flashing mechanism via <raw>flashme.bin</raw> files and DFU mode.</p>
  <p>See the <a href="/flashing-smoothie-firmware">firmware flashing guide</a> for V2 instructions.</p>
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

## What is the Bootloader?

The SD bootloader is used to facilitate firmware updates.

You only need to flash it once, and it makes the first firmware flashing and subsequent firmware updates much more simple.

Basically, at boot/reset, it looks for the `firmware.bin` file on the SD card, and if found, flashes it to the board's FLASH memory (then renames the file to `firmware.cur`, so check for that to see if it worked).

So once the bootloader is installed, updating the firmware is as simple as copying it to the SD card and reset.

The bootloader was written by Triffid_Hunter and can be found [here](https://github.com/triffid/LPC17xx-DFU-Bootloader) on GitHub.

## LPCXpresso1769 or SmoothieBoard

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

This page documents the v1 SD bootloader. V2 uses different mechanisms - see the [firmware flashing guide](/flashing-smoothie-firmware) for V2 bootloader and DFU information.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

To flash the bootloader you need a Serial-USB (can be a FTDI cable, an Arduino, CP2102, etc.) cable connected to the UART0 pins of the LPC1769 (6-pin connector noted as "Serial" on a [Smoothieboard](smoothieboard)), and the "reset" and "bootloader" (ISP) buttons connected.

If you have a Smoothieboard, all of this is already there, just connect the Serial-USB/FTDI cable.

(Well, actually if you have a SmoothieBoard it comes with the bootloader pre-flashed, just move ahead to the actual firmware flashing. Except for the beta board where you might want to flash anyway to get SDHC support).

If you have an LPCXpresso1769, you want to look at [Smoothie On A Breadboard](smoothie-on-a-breadboard) for how to wire the serial cable and the buttons.

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Connection Note:</strong> Sometimes it is better connecting TXD->RXD and RXD->TXD. You should not use USB to RS232, because it can be +15/-15v, but MCU is 3.3V.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

(V2 content would go here - see [firmware flashing guide](/flashing-smoothie-firmware))

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

### Entering Bootloader Mode

In order to flash the SD bootloader to the chip, you must first enter the Serial Bootloader mode.

This mode allows you to write new code to the FLASH memory via UART0.

To enter this mode do the following:

1. Press the `RESET` button
2. Press the `BOOTLOADER` (ISP) button
3. Release the `RESET` button
4. Release the `BOOTLOADER` (ISP) button

### Flashing the SD Bootloader

First install the [lpc21isp](http://sourceforge.net/projects/lpc21isp/) program if you are using Linux, or the [FlashMagic](http://www.flashmagictool.com/) tool if you are using Windows.

For 64-bit OS X, lpc21isp is checked into Smoothie's git repository under the [build/osx64/lpc21isp](https://github.com/arthurwolf/Smoothie/tree/edge/build/osx64/lpc21isp) directory.

#### Using FlashMagic (Windows)

For FlashMagic you have to set the proper LPC device (or better select menu ISP>Read Device Signature..) and select COM port of your cable.

Use:
- 38400 Baud
- Interface None (ISP)
- Oscillator 12 MHz
- Check "erase blocks used by hex file"

After selecting your HEX file and pressing the "Start" button FlashMagic will program it.

#### Getting the Bootloader

You can either compile the bootloader [from source](https://github.com/triffid/LPC17xx-DFU-Bootloader), or simply download the .hex file [here](https://github.com/Smoothieware/Smoothieware/tree/edge/bootloader).

Simply clicking the link may display it as a text file. You may need to do a "save as" to download the file.

#### Flashing Process

Flashing is pretty simple for Windows, simply feed it the .hex file.

For Linux you want to do the following:

```bash
lpc21isp -wipe DFU-Bootloader.hex /dev/ttyACM0 230400 12000
```

Change `/dev/ttyACM0` to whatever matches your Serial-USB cable.

Now flashing occurs, and that's it!

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

V2 bootloader flashing is handled differently. See the [firmware flashing guide](/flashing-smoothie-firmware) for V2 instructions.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

## Mbed

Because the mBed has its own USB flashing thing, you don't want to use the SD bootloader with it.

Instead, simply replace the file **mbed/src/vendor/NXP/cmsis/LPC1768/GCC_ARM/LPC1768.ld**, with [this](https://gist.github.com/nullsub/10f4551eb0f3e2422409).

Localstorage does not work out of the box with the mBed. But you can place your **config** into **src/config.default**. Your configuration will then be included in the `firmware.bin`.

If you want to use pins `P0_9`, `P0_8`, `P0_7`, `P0_6`, you need to comment SDcard support in **src/main.cpp**:

```cpp
//SDCard sd(P0_9, P0_8, P0_7, P0_6);      // this selects SPI1 as the sdcard as it is on Smoothieboard
```

To create the Smoothie firmware run the following command from the root Smoothie directory:

```bash
./BuildShell && make clean all
```

Once you have compiled Smoothie simply copy the generated **LPC1768/main.bin** file to the mBed's drive.

A working fork is available [here](https://github.com/nullsub/Smoothieware).

**Old:** You can find a more detailed guide at running smoothie on the mbed [here](http://mbed.org/users/scotto/notebook/smoothie-firmware-for-mbed/).

## Direct Serial Bootloader Flashing

Instead of using mBed's own USB flashing util, we can use the [lpc21isp](http://sourceforge.net/projects/lpc21isp/) program to flash Smoothieware directly.

This means we will not be getting SD card support, as we'll be flashing over the SD bootloader.

The approach is similar to what's explained in the Mbed section.

A working fork for this based upon the Mbed USB flashing, can be found [here](https://github.com/Skeen/Smoothieware).

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

**Mbed and direct serial flashing are v1-only methods.** For V2 firmware updates, use the methods described in the [firmware flashing guide](/flashing-smoothie-firmware).

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}
