
# Compilation from Source

Smoothie can be compiled using [GCC](http://en.wikipedia.org/wiki/GNU_Compiler_Collection).

First of all, [get Smoothie](getting-smoothie)'s source.

You do not need to do any of this if you just want to use your board. This is only needed if you want the absolute latest firmware, or are modifying Smoothie's source.

## Getting a toolchain

To compile smoothie, you need a [toolchain](http://en.wikipedia.org/wiki/Toolchain) (a compiler, a linker, etc...).

Smoothie provides install scripts to automatically install a great toolchain.

> [!WARNING]
> Do not use your own toolchain, even if you like it and it's more recent, use the toolchain the other Smoothie devs use, as it's the only one that's guaranteed to work (e.g. newer toolchains are known to produce binaries where network does not work), and the devs can bite if they try to help you for an hour only to figure out you tried to use XGCC super-plus version 3000 and everything would be fine if you were using the normal toolchain. Just follow the instructions.

Simply go into the Smoothie folder, then run the install script appropriate for your platform:

- Windows: **`win_install.cmd`**
- OS X: **`mac_install`**
- Linux: **`linux_install`**

> [!NOTE]
> Windows users: Double click from the Window Explorer screen and the system will install the tools for you.
> 
> Trying to execute "win_install.cmd" from a windows command window will not work at all.
> 
> I know I tried about 10 different methods and only the windows explorer screen method worked.

This will download and install a working toolchain.

The toolchain requires a 32-bit environment to run in...
In Ubuntu Linux 64bit, you will also need to install `libc6-dev-i386`
You might also need to install the `build-essential` package.

You can then run the **BuildShell** script which will be created during the install to properly configure the PATH environment variable

In Linux or OSX:

```bash
./BuildShell
```

or you can take the appropriate directories and add them to your PATH through your existing environment configuration options/scripts.

> [!NOTE]
> Windows users: Double click from the Window Explorer screen "BuildShell" and this will generate a windows command screen that when you type in "make clean all" will build the complete system and leave the binary for download to the board in the "LPC1768" directory.
> 
> There are no further steps to be done to build the software.

> [!WARNING]
> On some operating systems (this has been reported with Windows and MacOS), having a "space" character in the path to your Smoothie installation, can cause the installation of the toolchain to fail.
> 
> Please make sure you don't have any space characters in your path (this is often caused by usernames having spaces in them). This could also be caused by special characters.

## Compiling

Once BuildShell is created, you want to launch it, and compile all of the code that Smoothie consists of:

```bash
make clean all
```

Ref: "make clean all" will compile/recompile everything needed for Smoothie. The end result will be the file **main.bin** in the subfolder **LPC1768**.

> [!DANGER]
> If you are running a 64bit GNU/Linux system, you might get an error like this:
> 
> ```bash
> Compiling vendor/NXP/capi/analogin_api.c
> make[[3|]]: arm-none-eabi-gcc : command not found
> ```
> or
> ```bash
> Compiling vendor/NXP/capi/analogout_api.c
> arm-none-eabi-gcc: fatal error: cannot execute 'cc1': execvp: No such file or directory
> ```
> 
> This is because the toolchain is 32bit but your system is 64bit.
> To solve this you need to install the 32bit libraries on your system.
> 
> On Debian/Ubuntu, you should do:
> 
> ```bash
> sudo dpkg --add-architecture i386 
> sudo apt-get update
> sudo apt-get install libc6:i386
> ```
> 
> For Fedora/RPM users:
> 
> ```bash
> sudo dnf install glibc.i686 zlib.i686
> ```
> 
> On older Debian/Ubuntu systems, you might need:
> 
> ```bash
> sudo dpkg --add-architecture i386
> sudo apt-get update 
> sudo apt-get install ia32-libs
> ```
> 
> or
> 
> ```bash
> sudo dpkg --add-architecture i386 
> sudo apt-get update
> sudo apt-get install lib32z1 lib32ncurses5
> ```
> 
> After this, the make command should work.

> [!WARNING]
> It is possible to compile Smoothie without having to install a compiler using the mBed [online compiler](http://mbed.org/handbook/Compiler-Tour), but please note that this only supports a very old version of Smoothie: [Smoothie on Mbed](http://mbed.org/users/scachat/code/Smoothie/file/)
> 
> This is not at all a recommended method.

> [!WARNING]
> On Windows, if you get an error like **`process_begin: CreateProcess(NULL, echo Building src, ...) failed.`**, this means that there is a sh.exe somewhere on your path (such as the one installed by the Windows GitHub client, or WINAVR) - this confuses GNU Make 3.81 into thinking you're on a Unix-like system. Also make sure WinAVR is removed from your PATH. Any failures to build a clean source branch will be due to an environment problem in your windows shell and is NOT a bug.
> 
> One solution is to replace **`build\win32\make.exe`** with a copy of version 3.82 - downloaded from [here](http://www.equation.com/servlet/equation.cmd?fa=make), perhaps.
> 
> More information on the process of getting mBed code to compile with GCC can be found [here](http://mbed.org/forum/mbed/topic/2336/) (recommended read).

> [!SUCCESS]
> If you are trying build the "CNC" version of Smoothie (with `grbl_mode` enabled by default and the special "CNC" control panel screen), you need to do:
> 
> ```bash
> make clean
> make CNC=1
> ```

> [!SUCCESS]
> If you are trying build a version of Smoothie that has extruders, temperature control and spindle, you need to do:
> 
> ```bash
> make clean
> make INCLUDE_MODULE="tools/drillingcycles tools/spindle"
> ```

> [!SUCCESS]
> To build the no-msd version of Smoothie (with Mass Storage over USB disabled, for example if your computer is abusing the interface by accessing it for no good reason, causing bugs), do:
> 
> ```bash
> make clean
> make DISABLEMSD=1
> ```

> [!SUCCESS]
> If you want your branch to default to some things, let's say for example you want your branch to build as `CNC=1` without having to specify `make CNC=1` each time you build, you can:
> 
> In the `src` directory create a file called `default_excludes.mk` and in that file add:
> 
> ```bash
> CNC=1 
> export EXCLUDE_MODULES = tools/laser tools/filamentdetector tools/scaracal tools/temperaturecontrol tools/extruder 
> ```

> [!NOTE]
> Here is how compiling looks like, step by step:
> 
> <center>
> <script src="https://asciinema.org/a/aNXw2psVUJWLDHe2eVRVUBEFa.js" id="asciicast-aNXw2psVUJWLDHe2eVRVUBEFa" async data-rows=20></script>
> <a href="https://pastebin.com/8sTcsseU">See the commands in this screen cast, posted on pastebin</a>
> </center>

## Flashing to the board

### Flashing via SD Bootloader

If you are using a smoothieboard, the [SD bootloader](http://smoothieware.org/flashing-the-bootloader) is already present.

If you are using an mBed please see [here](http://smoothieware.org/flashing-the-bootloader).

If you are using an LPCXpresso1769 then you must first install the [SD bootloader](http://smoothieware.org/flashing-the-bootloader).

Once it is compiled, then simply copy the generated .bin file to the SD card with the name **firmware.bin**, then reset and it will be flashed to the board automatically.

Example:

```bash
make
cp LPC1768/main.bin /media/smoothieboard-or-mbed/firmware.bin
```

Detailed instructions can be found on the [Flashing Smoothie](http://smoothieware.org/flashing-smoothie-firmware) page.

### Flashing via DFU (USB Device Firmware Update)

An alternative way to flash firmware is to use a utility called [dfu-util](http://dfu-util.sourceforge.net/).

DFU is not enabled by default, to use it you must add the following to your config file:

```bash
dfu_enable true # enable dfu
```

You can then use `make upload` to flash the new firmware, as long as smoothie is currently running.
If smoothie has crashed, then you can manually put the bootloader into DFU mode by: 
1. holding the play/pause button
2. click the reset button
3. wait one second and release the play/pause button

#### Installing dfu-util on Mac & Linux

Install using your package manager e.g. apt or homebrew.

#### Installing dfu-util and required driver on Windows

1. Download the [latest dfu-util package](http://dfu-util.sourceforge.net/releases/?C=N;O=D), and extract the ZIP
2. Move the contents to `C:\Program Files\dfu--util` (or another location of your choice)
3. Add the above install directory to your PATH environment variable. [howto](https://www.java.com/en/download/help/path.xml)
4. Log out and back in for this change to take effect
5. Download [Zadig](http://zadig.akeo.ie/) and run it
6. Connect your Smoothieboard via USB
7. In Zadig, select the "Smoothie DFU" device (you may need to enable Options > List All Devices), then choose WinUSB and press the big install button.
8. Run `make` followed by `make upload`. dfu-util will detect your smoothieboard, which will reset into DFU mode. However, dfu-util will hang here.
9. Return to the Zadig window, and select the "Smoothie" device and install WinUSB for it as well.

You should now be able to use `make upload` to flash smoothie.
