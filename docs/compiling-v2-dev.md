
# Compiling and Installing the NuttX on Bambino 200E board

This tutorial is for Ubuntu 16.04 LTS, but can be adapted for other distros.

This guide will walk you through the process of compiling and installing NuttX on the Bambino 200E board.

## Pre-requisites

First, install the necessary packages:

```bash
sudo apt-get install automake bison build-essential flex gperf git libncurses5-dev libtool libusb-dev libusb-1.0.0-dev
```

## Work folder

Create a workspace directory:

```bash
mkdir -p ~/nuttxspace
cd ~/nuttxspace
```

## Toolchain installation

Install the ARM GCC Toolchain, ensuring a version >= gcc version 6.3.1 20170620.

### From the repositories

```bash
sudo apt-get install gcc-arm-none-eabi
```

## Cloning NuttX

Clone the NuttX repositories:

```bash
git clone https://bitbucket.org/nuttx/nuttx
git clone https://bitbucket.org/nuttx/apps
git clone https://bitbucket.org/nuttx/tools
```

## Compiling Kconfig

Compile kconfig in `tools/kconfig-frontends/`:

```bash
cd tools/kconfig-frontends/
./bootstrap
./configure
make
sudo make install
```

This installs kconfig in `/usr/local/bin`.

## Compiling NuttX

Compile NuttX for the Bambino board:

```bash
cd ~/nuttxspace/nuttx/tools
./configure.sh bambino-200e/nsh
cd ..
make
```

This creates `nuttx.bin` to be flashed onto the Bambino board.

## Flashing to the board

Several methods are available for flashing the board.

Choose the method that matches your available hardware.

### Using a STLink-v2 with OpenOCD

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Note:</strong> OpenOCD version 0.10 or newer is required.
</sl-alert>
{:/nomarkdown}

Connect the ST-Link v2 to the J5 connector on the board and use:

```bash
sudo openocd -f interface/stlink-v2.cfg -f target/lpc4350.cfg -c init -c "reset halt" -c "flash write_image erase nuttx.bin 0x14000000"
```

Use a USB/Serial board connected to Slot 5 and a terminal like "minicom" set to 115200 8n1 to access the NuttX prompt.

### Using JLink with OpenOCD

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Note:</strong> OpenOCD version 0.10 or newer is required.
</sl-alert>
{:/nomarkdown}

Edit `jlink.cfg` to use SWD:

```bash
sudo vi /usr/local/share/openocd/scripts/interface/jlink.cfg
```

Add:

```bash
transport select swd
```

Then flash with:

```bash
sudo openocd -f interface/jlink.cfg -f target/lpc4350.cfg -c init -c "reset halt" -c "flash write_image erase nuttx.bin 0x14000000"
```

Or:

```bash
sudo openocd -f interface/jlink.cfg -f board/lpc4350_spifi_generic.cfg -c init -c "reset halt" -c "flash write_image erase nuttx.bin 0x14000000"
```

### Using lpc21isp

Install lpc21isp:

```bash
sudo apt-get install lpc21isp
```

Produce a .hex file:

```bash
make menuconfig
```

Select **Intel HEX binary format**, save, and exit. Then:

```bash
make
```

Flash the firmware:

```bash
lpc21isp nuttx.hex /dev/ttyUSB0 115200 12000
```

Change `/dev/ttyUSB0` to match your device.

### Using J-link

Install SEGGER's Software & documentation pack from their [website](https://www.segger.com/jlink-software.html).

Start the debug server and GDB:

```bash
JLinkGDBServer -device LPC4330_M4 -endian little -if JTAG -speed 10000 -localhostonly
arm-none-eabi-gdb -ex "set target-charset ASCII" -ex "set print pretty on" -ex "target remote :2331" -ex "set mem inaccessible-by-default off" nuttx
```

Upload code with GDB:

```bash
Ctrl+C
load
monitor reset
continue
```

### Using LPCScrypt

Follow the User Guide from NXP, particularly sections 3.2 and 3.3. Install LPCScrypt from their [website](http://www.nxp.com/products/software-and-tools/software-development-tools/software-tools/lpc-microcontroller-utilities/lpcscrypt-v1.8.0:LPCSCRYPT?tab=Design_Tools_Tab).

Enter bootloader mode:

- Hold the ISP button.
- Press and release the RESET button.
- Release the ISP button.

Flash firmware with LPCScrypt:

```bash
./scripts/boot_lpcscrypt 
./bin/lpcscrypt program +c /path/to/nuttx/nuttx.bin BankA
./bin/lpcscrypt resetCore
```

Or:

```bash
sleep 1
./bin/lpcscrypt -d /dev/ttyACM0 program +c LPC4330_M4/Smoothie2.bin SPIFI
sleep 1
./bin/lpcscrypt -d /dev/ttyACM0 resetCore
```

## Verifying NuttX Initialization

After flashing `nuttx.bin`, connect a USB/Serial board to Slot 5 and use "minicom" at 115200 8n1. Press "RESET" and you should see:

```bash
NuttShell (NSH)                                                                    
nsh>
```

Type "help" or "?" for commands.

## Testing Ethernet

Compile with:

```bash
cd ~/nuttxspace/nuttx/tools
./configure.sh bambino-200e/netnsh
cd ..
make
```

Flash `nuttx.bin`, connect to your router, and use `telnet` with the IP assigned to the board.

## Testing USB

Compile with:

```bash
cd ~/nuttxspace/nuttx/tools
./configure.sh bambino-200e/usbnsh
cd ..
make
```

Flash `nuttx.bin`, connect USB0 to your PC, reset the board, and use "minicom" with `/dev/ttyACM0` at 115200 8N1.

## Testing SD Card

TODO
