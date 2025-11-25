---
permalink: /mri-debugging
---


---
layout: default
title: Debugging with MRI
---

# Debugging with MRI

{::nomarkdown}
<review id="mri-debugging:intro-versioning">
<proposal>
{:/nomarkdown}

<versioned orientation="vertical">
<v1>
{:/nomarkdown}

If Smoothie crashes, or you manually tell it to, it can go into a special mode (MRI), where if you use a serial cable to connect to its hardware serial port (UART0), you can use GDB to connect to it, and step through the code, add breakpoints, print values, and more generally debug the code. This is a feature that would otherwise require an expensive JTAG adapter.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

Smoothieware V2 uses professional debugging tools instead of MRI. You can use hardware debuggers like J-Link or ST-Link to connect via SWD (Serial Wire Debug) port. This provides full debugging capabilities including hardware breakpoints, live memory inspection, and real-time variable monitoring without needing the MRI monitor.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

If Smoothie crashes, or you manually tell it to, it can go into a special mode (MRI), where if you use a serial cable to connect to its hardware serial port (UART0), you can use GDB to connect to it, and step through the code, add breakpoints, print values, and more generally debug the code. This is a feature that would otherwise require an expensive JTAG adapter.

If you are using a JTAG debugger with your Smoothie project, you can scroll down to the sections which discuss mini and full dumps since those are applicable to JTAG debugging as well.

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

If you are using a JTAG debugger with your Smoothie project, you can scroll down to the sections which discuss mini and full dumps since those are applicable to JTAG debugging as well.

---

## What is MRI?

{::nomarkdown}
<review id="mri-debugging:what-is-mri">
<proposal>
{:/nomarkdown}

<versioned orientation="vertical">
<v1>
{:/nomarkdown}

Smoothie contains the Monitor for Remote Inspection, MRI, a debug monitor for the NXP LPC1768 device.

This monitor allows the GNU Debugger, GDB, to be connected to the device when a hard fault occurs.

It can also be configured to break on start and then used to step through any desired Smoothie source code but this isn't the default configuration in the Smoothie project where it is primarily used for crash analysis.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

Smoothieware V2 does not use MRI because the STM32H745 microcontroller has professional debug support through standard debugging protocols (SWD - Serial Wire Debug). Instead of MRI, V2 uses industry-standard debuggers like J-Link or ST-Link which provide superior debugging capabilities including hardware breakpoints, live memory inspection, and step-through execution.

See the [Debugging V2](/debug-v2) page for information on using standard debuggers with Smoothieware V2.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

Smoothie contains the Monitor for Remote Inspection, MRI, a debug monitor for the NXP LPC1768 device.

This monitor allows the GNU Debugger, GDB, to be connected to the device when a hard fault occurs.

It can also be configured to break on start and then used to step through any desired Smoothie source code but this isn't the default configuration in the Smoothie project where it is primarily used for crash analysis.

{::nomarkdown}
</original>
</review>
{:/nomarkdown}


## Indication of Crash

When Smoothie crashes and MRI takes over control of the device, you will see this text dumped to the serial console:

```
$T0b0c:20430010;0d:e07c0010;0e:a1960000;0f:58410010;
```

This line is MRI attempting to tell GDB that Smoothie has stopped for some reason.

If an unexpected exception was thrown to cause the crash then you will see something like this before the $T packet.

```
**Hard Fault**
Status Register: 0x40000000
Forced
**Bus Fault**
Status Register: 0x04
Imprecise Data Access
```

## Causing Smoothie to go into MRI mode

Smoothie will go into MRI mode automatically if a problem occurs.

But sometimes you want to put Smoothie into MRI mode to poke around in its brain, run code step by step, etc.

If you want to do that, you have two ways to cause Smoothie to enter MRI mode:

- **Press the ISP button** next to the Reset button on your Smoothieboard
- **Send the break command** over any serial interface (UART, USB/Serial, or Telnet)

---

{::nomarkdown}
<review id="mri-debugging:connecting-gdb-v1-only">
<proposal>
{:/nomarkdown}

<versioned orientation="vertical">
<v1>
{:/nomarkdown}

## Connecting GDB to MRI

GDB should have been installed along with the GCC compiler and other GNU tools used to build the Smoothie source code.

Note that you need to compile Smoothie yourself before you can do any debugging, please see [compiling-smoothie](compiling-smoothie).

From a Terminal or Command Prompt that is able to build Smoothie, you should be able to set the current directory to the root of the Smoothie project which contains main.bin, main.elf, etc and run one of the following commands to launch GDB.

The main difference between the OS's is the type of name used for the serial port.

You should use the same serial port name and baud rate when launching GDB as you used for the Terminal application in which you saw the $T packet.

**Please note:** You must first disconnect your terminal application from Smoothie before attempting to connect GDB to MRI.

In these following examples, we will assume that you are in the root directory of the Smoothie source tree and that your .ELF file is therefore located in the LPC1768/ subdirectory.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

## Debugging with Professional Tools

Smoothieware V2 uses standard hardware debuggers instead of MRI serial debugging. You can use J-Link, ST-Link, or similar SWD-compatible debuggers for full debugging capabilities.

For detailed instructions on setting up V2 debugging, see the [Debugging V2](/debug-v2) documentation which covers J-Link setup, ST-Link configuration, and using GDB with hardware debuggers.

**Note:** V2 debugging does not require serial terminal connections - you debug through the SWD port using professional IDE integrations or command-line GDB with hardware server software.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

## Connecting GDB to MRI

GDB should have been installed along with the GCC compiler and other GNU tools used to build the Smoothie source code.

Note that you need to compile Smoothie yourself before you can do any debugging, please see [compiling-smoothie](compiling-smoothie).

From a Terminal or Command Prompt that is able to build Smoothie, you should be able to set the current directory to the root of the Smoothie project which contains main.bin, main.elf, etc and run one of the following commands to launch GDB.

The main difference between the OS's is the type of name used for the serial port.

You should use the same serial port name and baud rate when launching GDB as you used for the Terminal application in which you saw the $T packet.

**Please note:** You must first disconnect your terminal application from Smoothie before attempting to connect GDB to MRI.

In these following examples, we will assume that you are in the root directory of the Smoothie source tree and that your .ELF file is therefore located in the LPC1768/ subdirectory.

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Important:</strong> You need to connect a USB/UART adapter cable to the UART (Serial) 6-pin connector on the Smoothieboard (next to the USB connector, close to the endstops). And then use that connection to talk to MRI. <strong>You cannot talk to MRI over the USB cable</strong>.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<review id="mri-debugging:serial-platform-commands">
<proposal>
{:/nomarkdown}

<versioned orientation="vertical">
<v1>
{:/nomarkdown}

### Windows

```
arm-none-eabi-gdb LPC1768\main.elf --baud 115200 -ex "set target-charset ASCII" -ex "set remotelogfile mri.log" -ex "target remote com1" -ex "set mem inaccessible-by-default off"
```

### OS X and Linux

```
arm-none-eabi-gdb LPC1768/main.elf --baud 115200 -ex "set target-charset ASCII" -ex "set remotelogfile mri.log" -ex "target remote /dev/tty.usbmodem412" -ex "set mem inaccessible-by-default off"
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

**V2 Debugger Setup:**

For Smoothieware V2, use hardware debuggers instead of serial connections. Refer to the [Debugging V2](/debug-v2) page for platform-specific setup instructions for J-Link or ST-Link.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

### Windows

```
arm-none-eabi-gdb LPC1768\main.elf --baud 115200 -ex "set target-charset ASCII" -ex "set remotelogfile mri.log" -ex "target remote com1" -ex "set mem inaccessible-by-default off"
```

### OS X and Linux

```
arm-none-eabi-gdb LPC1768/main.elf --baud 115200 -ex "set target-charset ASCII" -ex "set remotelogfile mri.log" -ex "target remote /dev/tty.usbmodem412" -ex "set mem inaccessible-by-default off"
```

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

{::nomarkdown}
<review id="mri-debugging:dump-commands">
<proposal>
{:/nomarkdown}

<versioned orientation="vertical">
<v1>
{:/nomarkdown}

## Gathering mini-dump to send for analysis

If you hit a crash in Smoothie, you should obtain a mini-dump and send it to the Smoothie community for analysis. A mini-dump can be created using this sequence of GDB commands:

```
set pagination off
set logging on
bt
list
disass
set var $ptr=$sp
while $ptr < 0x10008000
x/4wa $ptr
set var $ptr+=16
end
info registers
set logging off
set pagination on
```

What is all of that doing?

- Turn pagination off so that you don't have to keep pressing Enter to continue the text as it spews to the debug console.
- Ask GDB to save the output from the rest of these commands to a file named **gdb.txt** in the current directory from which GDB was launched. This is one of the files that you will want to send to the Smoothie community for analysis.
- Get a stack 'back trace'.
- List the source code around the line where the debug event occurred.
- Disassemble the function in which the crash occurred.
- Then a debugger variable is used to enter a loop within the debugger itself to dump the stack 4 words at a time from the current stack location to the end of the stack, which is at 0x10008000 on the LPC1768.
- Dump the CPU registers.
- Stop the logging of information to gdb.txt now that we have collected all of the useful information we need.
- Turn pagination back on which is more friendly for interactive debugging.

## Gathering full dump to send for analysis

The mini-dump discussed in the previous section only contains the contents of the stack. A full dump will provide a dump of all of the lower 32K of RAM on the CPU. It takes longer to capture this full dump but it provides the community with the contents of all globals and even dynamic allocations from the heap. A full dump can be created using this sequence of GDB commands:

```
set pagination off
set logging on
bt
list
disass
set var $ptr=0x10000000
while $ptr < 0x10008000
x/4wa $ptr
set var $ptr+=16
end
info registers
set logging off
set pagination on
```

The only command which is different from the mini-dump is the line which initializes the $ptr variable. Instead of setting it to the current value of the stack pointer, it is instead initialized to the beginning of RAM.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

## Collecting Crash Data with Hardware Debuggers

When debugging Smoothieware V2 with hardware debuggers (J-Link, ST-Link), you can capture crash information directly through the debugger:

**With J-Link:**
- Use the J-Link Software and Documentation pack
- Connect via SWD port
- Capture memory dumps and registers through the debugger interface
- Refer to [Debugging V2](/debug-v2) for detailed commands

**With GDB and hardware server:**
- Set up logging: `set logging on`
- Capture backtrace: `bt`
- Dump memory of interest: `x/1024x <address>`
- Save all relevant data before disconnecting

The advantage of V2 debugging is real-time access to memory and registers without needing specialized dump commands - you can inspect any memory region directly.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

## Gathering mini-dump to send for analysis

If you hit a crash in Smoothie, you should obtain a mini-dump and send it to the Smoothie community for analysis. A mini-dump can be created using this sequence of GDB commands:

```
set pagination off
set logging on
bt
list
disass
set var $ptr=$sp
while $ptr < 0x10008000
x/4wa $ptr
set var $ptr+=16
end
info registers
set logging off
set pagination on
```

What is all of that doing?

- Turn pagination off so that you don't have to keep pressing Enter to continue the text as it spews to the debug console.
- Ask GDB to save the output from the rest of these commands to a file named **gdb.txt** in the current directory from which GDB was launched. This is one of the files that you will want to send to the Smoothie community for analysis.
- Get a stack 'back trace'.
- List the source code around the line where the debug event occurred.
- Disassemble the function in which the crash occurred.
- Then a debugger variable is used to enter a loop within the debugger itself to dump the stack 4 words at a time from the current stack location to the end of the stack, which is at 0x10008000 on the LPC1768.
- Dump the CPU registers.
- Stop the logging of information to gdb.txt now that we have collected all of the useful information we need.
- Turn pagination back on which is more friendly for interactive debugging.

## Gathering full dump to send for analysis

The mini-dump discussed in the previous section only contains the contents of the stack. A full dump will provide a dump of all of the lower 32K of RAM on the CPU. It takes longer to capture this full dump but it provides the community with the contents of all globals and even dynamic allocations from the heap. A full dump can be created using this sequence of GDB commands:

```
set pagination off
set logging on
bt
list
disass
set var $ptr=0x10000000
while $ptr < 0x10008000
x/4wa $ptr
set var $ptr+=16
end
info registers
set logging off
set pagination on
```

The only command which is different from the mini-dump is the line which initializes the $ptr variable. Instead of setting it to the current value of the stack pointer, it is instead initialized to the beginning of RAM.

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

{::nomarkdown}
<review id="mri-debugging:sending-dumps-version-note">
<proposal>
{:/nomarkdown}

<versioned orientation="vertical">
<v1>
{:/nomarkdown}

## Sending a mini or full dump to Smoothie community for analysis

The above steps will have generated a **gdb.txt** dump file (mini or full) in the current directory from which you launched GDB. You want to send this file along with your corresponding **main.elf** to the Smoothie community. You should also let the community know what version of the Smoothie sources you were using when you encountered this crash.

Where to send your dump? You can use any **one** of these methods to get your crash information to the community.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

## Sending Debug Information to Smoothie Community

When you encounter a crash with Smoothieware V2 and capture debug information with your hardware debugger, follow similar procedures to share the information. See [Debugging V2](/debug-v2) for V2-specific debugging and crash reporting procedures.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

## Sending a mini or full dump to Smoothie community for analysis

The above steps will have generated a **gdb.txt** dump file (mini or full) in the current directory from which you launched GDB. You want to send this file along with your corresponding **main.elf** to the Smoothie community. You should also let the community know what version of the Smoothie sources you were using when you encountered this crash.

Where to send your dump? You can use any **one** of these methods to get your crash information to the community.

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

{::nomarkdown}
<review id="mri-debugging:sending-dumps-contact-methods">
<proposal>
{:/nomarkdown}

<versioned orientation="vertical">
<v1>
{:/nomarkdown}

- Create a [gist](https://gist.github.com) and attach to it your **gdb.txt** and **main.elf** files. Then create an issue at [Smoothieware Issues](https://github.com/Smoothieware/Smoothieware/issues) and provide a link to your gist. In the issue, you can also give information about what version of the Smoothie sources you were using and anything else about your setup that you think will be interesting to the developer looking into your issue. This is the preferred method since it provides a convenient method to track progress on your crash, assign responsibility to the appropriate developer, and helps ensure that your item doesn't get lost.
- If you are already communicating with the Smoothie community on IRC, then you can post a link to your [gist](https://gist.github.com) or [pastebin](http://pastebin.com) which contains the text of your **gdb.txt**. They will probably request that you send them your corresponding **main.elf** as well if you haven't already attached it to your gist. This approach may give you the quickest response but if it isn't investigated and diagnosed quickly, it could get lost.
- E-mail your **gdb.txt** and **main.elf** to wolf.arthur@gmail.com.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

Create an issue at [Smoothieware Issues](https://github.com/Smoothieware/Smoothieware/issues) with your debug logs and describe the crash conditions. Include your firmware version and any relevant setup information.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

- Create a [gist](https://gist.github.com) and attach to it your **gdb.txt** and **main.elf** files. Then create an issue at [Smoothieware Issues](https://github.com/Smoothieware/Smoothieware/issues) and provide a link to your gist. In the issue, you can also give information about what version of the Smoothie sources you were using and anything else about your setup that you think will be interesting to the developer looking into your issue. This is the preferred method since it provides a convenient method to track progress on your crash, assign responsibility to the appropriate developer, and helps ensure that your item doesn't get lost.
- If you are already communicating with the Smoothie community on IRC, then you can post a link to your [gist](https://gist.github.com) or [pastebin](http://pastebin.com) which contains the text of your **gdb.txt**. They will probably request that you send them your corresponding **main.elf** as well if you haven't already attached it to your gist. This approach may give you the quickest response but if it isn't investigated and diagnosed quickly, it could get lost.
- E-mail your **gdb.txt** and **main.elf** to wolf.arthur@gmail.com.

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

{::nomarkdown}
<review id="mri-debugging:debug-symbols-and-commands">
<proposal>
{:/nomarkdown}

<versioned orientation="vertical">
<v1>
{:/nomarkdown}

## Turning on full Debug Symbols

To get more meaningful use out of GDB the Build should be set to Debug in the src/makefile `BUILD_TYPE=Debug`, however due to the fact all modules are compiled in this will now cause the image to be bigger than flash, so you need to turn some stuff off, the easiest is to do `make NONETWORK=1` which turns off networking and saves a good deal of flash space.

## More Useful GDB Commands

A copy of gdb.pdf should have been installed when you installed the GNU tools used to build Smoothie. "Chapter 1 - A Sample GDB Session" of this manual provides an overview of the most useful GDB commands. Here are some of the commands we have found most useful.

- `bt` - Dump a stack back trace showing the call graph which generated the debug stop.
- `list` - Lists the source code around the line on which the program stopped.
- `p expression` - Prints the result of a C/C++ expression. For example `p *kernel` would attempt to dump the object pointed to by a local variable pointer called kernel. Note: The effectiveness of this command won't be perfect when Smoothie is built with optimizations turned on.
- `up` - Changes the context for commands like p to be the next function up in the callstack.
- `down` - Changes the context for command like p to be the next function down in the callstack.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

## Debug Symbols and GDB with Hardware Debuggers

For Smoothieware V2, build with debug symbols enabled in the Makefile to get better debugging information. Hardware debuggers automatically provide access to symbols and source code when properly configured.

Refer to the [Debugging V2](/debug-v2) page for V2-specific debug symbol configuration and GDB command examples with hardware debuggers.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

## Turning on full Debug Symbols

To get more meaningful use out of GDB the Build should be set to Debug in the src/makefile `BUILD_TYPE=Debug`, however due to the fact all modules are compiled in this will now cause the image to be bigger than flash, so you need to turn some stuff off, the easiest is to do `make NONETWORK=1` which turns off networking and saves a good deal of flash space.

## More Useful GDB Commands

A copy of gdb.pdf should have been installed when you installed the GNU tools used to build Smoothie. "Chapter 1 - A Sample GDB Session" of this manual provides an overview of the most useful GDB commands. Here are some of the commands we have found most useful.

- `bt` - Dump a stack back trace showing the call graph which generated the debug stop.
- `list` - Lists the source code around the line on which the program stopped.
- `p expression` - Prints the result of a C/C++ expression. For example `p *kernel` would attempt to dump the object pointed to by a local variable pointer called kernel. Note: The effectiveness of this command won't be perfect when Smoothie is built with optimizations turned on.
- `up` - Changes the context for commands like p to be the next function up in the callstack.
- `down` - Changes the context for command like p to be the next function down in the callstack.

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

{::nomarkdown}
<review id="mri-debugging:flash-optimization-v1-only">
<proposal>
{:/nomarkdown}

<versioned orientation="vertical">
<v1>
{:/nomarkdown}

## Flash size, optimizations and makefile

Code optimizations are a way for the compiler to make the compiled machine code more compact and faster to execute. It's enabled by default in Smoothie.

Because Smoothie is now close to filling the fully 512 kB of flash with code and data, if you disable code optimizations, it suddenly becomes too big to fit into the flash.

But when you are debugging, if optimizations are enabled, you will not be able to do some things (like see some values, use some features).

This means that when debugging an issue, you might want to disable optimizations, and at the same time, make Smoothie smaller by disabling some things so that they don't take flash space.

This is done by editing the Makefile: [Smoothie Makefile](https://github.com/Smoothieware/Smoothieware/blob/edge/src/makefile)

First, change `BUILD_TYPE` from `Checked` to `Debug`:

```
BUILD_TYPE=Debug
```

Smoothie will still compile, but it's now too big to fit the flash.

One thing you can do for example is to disable networking (which takes quite a bit of space, and which you don't need while debugging, unless you are debugging a network-specific problem).

You do this by uncommenting `NONETWORK`:

```
export NONETWORK = 1
```

If you still need to reduce size further, you can also disable specific modules:

```
export EXCLUDE_MODULES = tools/touchprobe tools/laser tools/temperaturecontrol tools/extruder
```

For the firmware to run correctly, you'll also want to disable the watchdog:

```
watchdog_timeout 0 # watchdog timeout in seconds, default is 10, set to 0 to disable the watchdog
```

And reduce the base stepping frequency:

```
base_stepping_frequency 50000 # Base frequency for stepping
```

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>Tip:</strong> You can add your module excludes in the <code>src/default_excludes.mk</code> file. Because it is not saved by git, it is useful for development as you can delete it once you are done, and you do not risk committing a modified makefile with your code.
  <br/><br/>
  For example, you can add this to it:
  <pre>export CNC=1
export NONETWORK=1
export EXCLUDE_MODULES = tools/laser tools/filamentdetector tools/scaracal tools/temperaturecontrol tools/extruder tools/zprobe tools/endstops</pre>
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

## Building with Debug Symbols for V2

Smoothieware V2 has 2 MB of flash (vs V1's 512 KB), so flash size constraints are much less restrictive. You can build with full debug symbols without worrying about running out of flash space.

Refer to the [Debugging V2](/debug-v2) documentation for build configuration and debug symbol setup specific to V2.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

## Flash size, optimizations and makefile

Code optimizations are a way for the compiler to make the compiled machine code more compact and faster to execute. It's enabled by default in Smoothie.

Because Smoothie is now close to filling the fully 512 kB of flash with code and data, if you disable code optimizations, it suddenly becomes too big to fit into the flash.

But when you are debugging, if optimizations are enabled, you will not be able to do some things (like see some values, use some features).

This means that when debugging an issue, you might want to disable optimizations, and at the same time, make Smoothie smaller by disabling some things so that they don't take flash space.

This is done by editing the Makefile: [Smoothie Makefile](https://github.com/Smoothieware/Smoothieware/blob/edge/src/makefile)

First, change `BUILD_TYPE` from `Checked` to `Debug`:

```
BUILD_TYPE=Debug
```

Smoothie will still compile, but it's now too big to fit the flash.

One thing you can do for example is to disable networking (which takes quite a bit of space, and which you don't need while debugging, unless you are debugging a network-specific problem).

You do this by uncommenting `NONETWORK`:

```
export NONETWORK = 1
```

If you still need to reduce size further, you can also disable specific modules:

```
export EXCLUDE_MODULES = tools/touchprobe tools/laser tools/temperaturecontrol tools/extruder
```

For the firmware to run correctly, you'll also want to disable the watchdog:

```
watchdog_timeout 0 # watchdog timeout in seconds, default is 10, set to 0 to disable the watchdog
```

And reduce the base stepping frequency:

```
base_stepping_frequency 50000 # Base frequency for stepping
```

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>Tip:</strong> You can add your module excludes in the <code>src/default_excludes.mk</code> file. Because it is not saved by git, it is useful for development as you can delete it once you are done, and you do not risk committing a modified makefile with your code.
  <br/><br/>
  For example, you can add this to it:
  <pre>export CNC=1
export NONETWORK=1
export EXCLUDE_MODULES = tools/laser tools/filamentdetector tools/scaracal tools/temperaturecontrol tools/extruder tools/zprobe tools/endstops</pre>
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

{::nomarkdown}
<review id="mri-debugging:more-docs-link">
<proposal>
{:/nomarkdown}

<versioned orientation="vertical">
<v1>
{:/nomarkdown}

## More documentation

Information about using MRI, as well as a more complete debugging session example, can be found [here](https://github.com/adamgreen/mri#mri---monitor-for-remote-inspection).

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

## More documentation

For Smoothieware V2 debugging documentation, see the [Debugging V2](/debug-v2) page for information on using J-Link, ST-Link, and other professional hardware debuggers.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

## More documentation

Information about using MRI, as well as a more complete debugging session example, can be found [here](https://github.com/adamgreen/mri#mri---monitor-for-remote-inspection).

{::nomarkdown}
</original>
</review>
{:/nomarkdown}
