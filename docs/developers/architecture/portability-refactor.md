---
permalink: /portability-refactor
---


# Portability refactor Documentation

The purpose of this document is to outline the current problems with Smoothie's portability, propose a solution and guide the implementation.

## The problem
Though Smoothie is based on mBed, it is not easily ported to other boards / processors.

For various reasons, such as conceptual mismatch between needed and actual functionality by mBed, not everything Smoothie does can use mBed.

This simple fact means that some porting work will always be necessary - but we could reduce the effort needed by centralizing the chip specific functions in a - Smoothie specific - hardware abstraction layer (HAL).

## Proposed solution
1. Refactor everything LPC17xx specific into a new folder structure `/hal/LPC17xx`.
2. Check everything whether it can be replaced if we were using a newer version of mBed. If so, update and refactor to use these mBed libs.
3. Finally, prove that porting is possible by actually doing it.

Please note that no. 1 is basically run time neutral (given a sufficiently smart compiler). Step 3 would be a good time to add even very detailed comments to the LPC HAL guiding further ports.

## Details

The affected subsystems are:
- GPIO
- Timers / Tickers
- SPI
- Watchdog
- Ethernet (refactor, possibly the port can leave it out for the time being)
- USB
- Makefile system (at least for the final porting step)

There is a surprisingly small number of files that contain 'LPC'. Here's what FF proposes to do about them:
- `libs/ADC/adc.cpp` -> ?
  > adc.cpp is a special ADC library for mBed that does burst mode, where the normal mBed lib does not. it should be moved to the HAL --arthur
- `./libs/FPointer.h` -> just a comment about data sizes -> Replace with ARM c3
  > Jim says, should use std::function --arthur
  >> The only place FPointer is used is in Hook.cpp - it derives a class adding interval and countdown. Could be combined? --Flo
- `./libs/Kernel.cpp` -> Timer init -> move to HAL
- `./libs/MRI_Hooks.cpp` -> debug interface -> Ports will need to include their own hardware specific debug interface (e.g. ST-Link)
- `./libs/Network/uip/Network.cpp` -> Ethernet is LPC specific. -> move to HAL
- `./libs/Network/uip/Network.h` -> move to HAL
- `./libs/Pin.h` -> GPIO -> separate into abstract base and hardware specific implementation, move the latter to HAL. Possibly a good mBed candidate.
  > Pin is very very time-critical and should not use mBed ( also, we need not to use any additional ram ), so this should just move to the HAL --arthur
- `./libs/RingBuffer.h` -> Not sure why the header is included here -> remove.
- `./libs/SlowTicker.h` -> `__disable_irq` / `__enable_irq` -> replace with macro from HAL
  > That's common to all Cortex-M, so it shouldn't go in a HAL --arthur
- `./libs/StepTicker.cpp` ->Tickers -> move HAL
- `./libs/USBDevice/DFU.cpp` -> move to HAL
- `./libs/USBDevice/USB.cpp` -> comment only -> still move the complete USBDevice to HAL
- `./libs/USBDevice/USBDevice/USBEndpoints.h` -> Same.
- `./libs/USBDevice/USBSerial/CircBuffer.h` -> irq enable/disable -> see `SlowTicker.h`
  > Same remark --arthur
- `./libs/gpio.cpp` -> Again not sure why the header's included here -> move HAL. First candidate for mBed.
- `./libs/spi_hal.h` -> A non Mbed HAL -> move to HAL
- `./libs/utils.cpp` -> Watchdog timer setup. -> move to HAL.
- `./main.cpp` -> There are some memory section directives in here. -> Move USB init to HAL (AHBSRAM0 directives), not sure about AHB0 object
  > « That can't move », «they can be handled in the linker directives for different chips» says Jim --arthur
- `./makefile` -> my suggestion would be to provide a makefile (in subfolders) per target board.
  > no change to the makefile system should be made. a new makefile can be made in a separate branch when a port is actually started --arthur
- `./modules/tools/spindle/Spindle.cpp` -> IRQ priority setting. -> HAL function.
- `./modules/utils/simpleshell/SimpleShell.cpp` -> Debug statement what cpu's being used. -> new HAL function.

## Open Questions
- What's the difference between the classes in GPIO and Pin? Pin is used just about everywhere, GPIO only in Step/SlowTicker.cpp - once to apparently toggle some Leds, once to optionally toggle a debug pin. Any reason not to replace these two instances with Pin and remove GPIO? --Flo
