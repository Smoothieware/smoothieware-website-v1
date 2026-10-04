---
permalink: /forth
title: Forth on Smoothieboard V2 (Experimental)
---

{::nomarkdown}
<sl-alert variant="warning" open>
  <strong>Experimental feature, separate firmware branch required.</strong> Forth support lives in Jim Morris's <a href="https://github.com/wolfmanjm/SmoothieV2/tree/add/forth"><code>add/forth</code> branch</a>. Use a Smoothieboard V2 with an STM32H745: Forth runs on its M4 core alongside Smoothie on the M7. The ordinary SmoothieV2 <code>master</code> and <code>edge</code> branches do not include this integration at the revision checked below. Some scripting features remain incomplete; see the notes beside each feature.
</sl-alert>
{:/nomarkdown}

# Forth on Smoothieboard V2

Forth lets you write and run small programs on the board. You can define a function, try it from a terminal, change it, and try again without rebuilding the C++ firmware. Mecrisp-Stellaris, the Forth implementation used here, compiles your definitions into machine code on the board.

Smoothie keeps running on the M7 core. Your Forth program runs on the M4 core and can access hardware peripherals. The integration also aims to let your programs ask Smoothie to execute G-code, for probing routines, canned moves, and button-triggered macros.

This walkthrough covers the branch at commit [`c87dac5c`](https://github.com/wolfmanjm/SmoothieV2/tree/c87dac5c9c37a52bedd96c25c044074548ad7390), checked on 2026-10-03. It does not apply to Smoothieboard V1 or to the single-core STM32H743.

## Get and flash the Forth branch

### 1. Build the Smoothie firmware

Use Linux, Ruby/Rake, and the ARM GCC toolchain described in the branch's [build instructions](https://github.com/wolfmanjm/SmoothieV2/blob/add/forth/README.md). GCC 10.3.1 is the tested version. Set `ARMTOOLS` to your toolchain's `bin` directory if it is not in the default location.

Clone the Forth branch into its own directory so you keep your usual firmware source:

```shell
git clone --branch add/forth --single-branch https://github.com/wolfmanjm/SmoothieV2.git SmoothieV2-forth
cd SmoothieV2-forth/Firmware
nice -n 10 ionice -c 2 -n 7 rake target=Prime -m
```

The output is `smoothiev2_Prime/smoothiev2.bin`. This is the Smoothie firmware with the Forth communications module. The M4 Forth kernel is a separate file, installed in step 3.

### 2. Install the Smoothie firmware

On a board already running Smoothie V2, copy the new `smoothiev2.bin` to the SD card as `flashme.bin`. Safely eject the card or its USB mass-storage mount, then reboot the board. Smoothie flashes that image on boot when `flash_on_boot` is enabled, which is the default.

Keep your working firmware and configuration available while testing this branch. For initial programming or recovery, follow the branch's [firmware flashing instructions](https://github.com/wolfmanjm/SmoothieV2/blob/add/forth/Firmware/README.md) or the [flashing guide](flashing-smoothie).

### 3. Enable Forth and install the M4 kernel

Copy `tools/forth/forth-cm4.bin` from the same branch to the root of the SD card. Add this section to `config.ini`:

```ini
[forthcomms]
enable = true
```

The upstream Forth README currently says `[forth]`. At the checked revision, the module reads **`[forthcomms]`**, so use that spelling.

For a separate Forth USB connection, enable the second serial port in the existing `[consoles]` section:

```ini
[consoles]
second_usb_serial_enable = true
```

Safely eject the SD card if you mounted it over USB, then reboot to load the configuration. Open a Smoothie console and enter:

```text
fth -h
fth flash /sd/forth-cm4.bin
```

Confirm that the flash command reports `Flashing ok`. This command installs the M4 kernel into the upper internal flash bank; it does not replace the main Smoothie image. You normally do this once, then repeat it only when replacing the Forth kernel. Reflashing can erase definitions you previously saved in that flash area.

If Smoothie does not recognize `fth`, check that you installed the Forth branch and enabled `[forthcomms]` before proceeding.

## Connect to Forth

Open a USB serial terminal, preferably on the second USB serial port. On Linux this might be `/dev/ttyACM1`; check which device belongs to your board rather than assuming that number.

At the Smoothie prompt, enter:

```text
fth terminal
```

`fth t` is the short form. This starts the M4 core and redirects that connection to the Forth interpreter. Other Smoothie connections remain available. Only one Forth terminal can connect at a time, and this implementation requires USB rather than a network shell or UART connection.

Turn off local echo in your terminal: Forth echoes the characters itself. In picocom, **Ctrl-A, Ctrl-C** toggles local echo. An `ok.` response means Forth accepted the input.

Press **Ctrl-D** to leave the Forth terminal and return to the Smoothie console. Leaving the terminal does not itself stop a program already running on the M4.

## Your first Forth words

### Calculate with the stack

Forth keeps values on a stack. You put values on it, then call an operation that takes those values and leaves a result. The operator comes after its arguments:

```forth
2 3 + .
```

This prints `5`. The `+` word takes two numbers and leaves their sum. The `.` word takes the result and prints it.

Try these lines separately:

```forth
10 4 - .
6 7 * .
20 4 / .
```

They print `6`, `42`, and `5`. These examples use integer arithmetic.

Some useful stack words are:

| Word | Effect |
|------|--------|
| `dup` | Duplicate the top value |
| `drop` | Remove the top value |
| `swap` | Exchange the top two values |
| `over` | Copy the second value to the top |
| `.s` | Display the stack without consuming its values |

For example, `7 dup * .` prints `49`: `dup` gives the multiplication two copies of `7`.

### Define a function

Forth calls named operations **words**. Define your own with `:` and `;`:

```forth
compiletoram
: square ( n -- n-squared ) dup * ;
7 square .
```

This prints `49`. `compiletoram` puts new definitions in RAM while you experiment. The comment `( n -- n-squared )` describes the stack before and after the word runs; it does not declare types or parameters.

Define another word using the first:

```forth
: sum-of-squares ( a b -- result ) square swap square + ;
3 4 sum-of-squares .
```

This prints `25`. You can combine words into larger routines without rebuilding Smoothie.

### Make a decision

Put conditionals inside a word definition:

```forth
: describe-sign ( n -- )
    0 < if
        ." negative"
    else
        ." zero or positive"
    then
    cr
;

-3 describe-sign
```

`0 <` tests whether the supplied number is less than zero. `if` consumes that result. `."` prints the following string, and `cr` prints a newline.

### Repeat an operation

```forth
: count-ten ( -- )
    10 0 do
        i .
    loop
    cr
;

count-ten
```

The loop takes its limit first and its starting index second. It prints `0` through `9`; `i` gives you the current loop index.

### Keep a value between calls

```forth
0 variable counter

: count-one ( -- ) 1 counter +! ;
: show-count ( -- ) counter @ . ;

count-one
count-one
show-count
```

This prints `2`. A variable word leaves the address of its value on the stack. `@` reads that address, `!` writes to it, and `+!` adds to the stored value. For example, `0 counter !` resets this counter.

The counter value lives in RAM; it is not a persistent setting.

## Work with Forth source files

Keep longer programs in `.fs` files on your computer. Jim's [forth-console](https://github.com/wolfmanjm/forth-console) provides editing, command history, filename completion, and uploads. Its README lists the available binaries and build instructions.

First enter `fth terminal` using your usual terminal, then disconnect that terminal without sending Ctrl-D. Connect forth-console to the same USB device:

```shell
forthcon -d /dev/ttyACM1
```

Replace the device name with your board's port. Close the previous terminal connection first so both programs do not compete for the serial device.

At the forth-console prompt, use:

```text
\i my-program.fs
```

This uploads one line at a time and waits for `ok.` after each line. It stops when a line fails, which helps when developing a new program. The faster `\d my-program.fs` upload needs additional Forth download-support words; follow the console README before using it.

The host console processes `#require` and `#include` directives to upload dependencies. These are host-tool directives, not ordinary Forth interpreter words. The branch also includes picocom and e4thcom launch scripts under `tools/forth/`; its picocom transfer helper is named `xfr.py`.

In forth-console, Ctrl-D quits the host program. Use its `\br` command to send Ctrl-D to the board and return the board connection to Smoothie mode.

## Save definitions across resets

Once you have tested a word in RAM, Mecrisp can compile a definition to flash:

```forth
compiletoflash
: sum-two ( a b -- sum ) + ;
compiletoram
```

Switching back to `compiletoram` keeps later experiments in RAM. Flash definitions survive a reset; RAM definitions do not. Saving a word does not make it run automatically at boot, and saving a variable's definition does not preserve changes to its runtime value.

Follow the [Mecrisp documentation](https://mecrisp-stellaris-folkdoc.sourceforge.io/) for dictionary management and startup hooks. The M4 port notes describe QSPI dictionary storage as a plan, so do not assume this branch saves programs to QSPI or loads `.fs` files from the SD card on boot.

## Read inputs and control outputs

Forth can access STM32 peripheral registers. The branch includes [`gpio-simple.fs`](https://github.com/wolfmanjm/SmoothieV2/blob/add/forth/tools/forth/examples/gpio-simple.fs), and Jim's [Forth hardware libraries](https://github.com/wolfmanjm/forth4stm32h745) include register definitions, GPIO, SPI, and display code. Some examples need files from that library repository.

Use peripherals and pins that your Smoothie configuration leaves free. Both cores share the hardware: changing a pin mode or peripheral register on the M4 can affect Smoothie on the M7. The sample's built-in LED and button mappings are not a general Smoothieboard Prime pinout.

After loading the GPIO library and its dependencies, you can declare named pins. This example assumes you have verified that **PA0 and PA1 are free and suitable on your board**; choose your actual spare pins before using it:

```forth
PORTA 0 pin test-input
PORTA 1 pin test-output

PORTA enable-port
test-input input
test-input pu
test-output output

test-input set? .
1 test-output set
0 test-output set
```

`pu` enables the input pull-up. `set?` reads the input, and `set` writes a logic level to the output. Use an output suitable for a 3.3 V logic signal, not a direct motor or heater connection.

You can combine the operations into a word:

```forth
: copy-input ( -- ) test-input set? test-output set ;
```

Calling `copy-input` copies the input state to the output once. Add control flow to build your own input-processing routine after testing each operation.

## Probing routines

Forth's probing feature lets you describe a sequence on the board: approach a surface, request a probe move, inspect the result, calculate an offset, and repeat at another location. Loops and conditionals allow routines that go beyond a fixed list of G-code lines.

**Implementation note:** the branch README describes queuing G-code from Forth, but the checked communications module does not expose a complete G-code submission and result interface. This feature might not be fully implemented yet. A working probing routine needs that interface, probe success/failure handling, and a way to wait for the move to finish. The branch does not supply a verified Forth probing example to copy here.

Use the [Z-probe module](zprobe) and [G-code reference](supported-g-codes) to establish the machine's probing behavior first. When adapting a Forth routine, keep a failed probe from continuing into later moves or offset changes.

## Canned moves and machine macros

You can use Forth words to organize parking, repeated positioning, or another machine-specific sequence. For example, a parking macro can retract Z, wait for that move, then move X and Y to a known parking position. You can calculate positions and choose a path based on the program's state.

**Implementation note:** the checked module lists `fth run word {params...}`, `fth load filename`, and `fth reset` in its help, but only `flash` and `terminal` have command handlers. Running a word from the Smoothie console, loading it from SD, and requesting a Forth reset through those commands might not be fully implemented yet. Enter defined words in the Forth terminal and upload files through the host console for now. Motion macros also depend on the G-code interface described above.

For fixed G-code sequences available in ordinary V2 firmware, see [O-word subroutines](subroutines).

## Run a routine from a button

The button-triggered scripting feature combines Smoothie's [Switch module](switch) with a named Forth routine. A physical button can then request a probing or parking macro without a computer sending each step.

**Implementation note:** this feature might not be fully implemented yet. The Switch module can dispatch shell commands, but the checked Forth module does not implement `fth run`. A configuration that binds a button to that command will not launch a Forth word at this revision. Once the branch provides the command, verify it from the Smoothie console before assigning it to a button.

An alternative is to read a spare button input from a Forth program using GPIO. That avoids the missing shell command, but machine movement still needs the Forth-to-Smoothie G-code interface. Add debouncing and release detection so holding the button does not start the routine repeatedly.

## Troubleshooting

| Symptom | Check |
|---------|-------|
| Smoothie says `fth` is unknown | Install the `add/forth` firmware, use `[forthcomms]`, and reboot after editing `config.ini` |
| Forth terminal rejects the connection | Use USB; disconnect any existing Forth terminal session |
| Characters appear twice | Disable local echo in your terminal |
| A word is unknown after reboot | RAM definitions disappear; upload your file again or use tested flash definitions |
| `fth run`, `load`, or `reset` reports an unknown subcommand | The checked handler has not implemented these advertised commands |
| An example needs a missing `.fs` dependency | Obtain the dependency from the matching Forth hardware libraries and use a host console that processes `#require` |

## Sources and further reading

- [Forth branch README](https://github.com/wolfmanjm/SmoothieV2/blob/c87dac5c9c37a52bedd96c25c044074548ad7390/FORTH-README.md): installation and intended scripting features.
- [Forth communications module](https://github.com/wolfmanjm/SmoothieV2/blob/c87dac5c9c37a52bedd96c25c044074548ad7390/Firmware/src/modules/utils/forth_cm4/ForthComms.cpp): configuration, USB terminal, M4 startup, and command implementation.
- [M4 Mecrisp port](https://github.com/wolfmanjm/Mecrisp-Forth-STM32H745/tree/master/stm32h745_CM4-ra): kernel source and memory layout.
- [Forth hardware libraries](https://github.com/wolfmanjm/forth4stm32h745): examples and peripheral support.
- [forth-console](https://github.com/wolfmanjm/forth-console): host terminal and file-upload commands.
- [Mecrisp-Stellaris documentation](https://mecrisp-stellaris-folkdoc.sourceforge.io/): word reference, stack notation, and flash compilation.
