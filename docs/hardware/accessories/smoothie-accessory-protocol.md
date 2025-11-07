---
permalink: /smoothie-accessory-protocol
---


# Smoothie Accessory Protocol Notes

This document describes the protocol for communicating with Smoothie accessories and peripherals.

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Technical Documentation:</strong> This page contains detailed technical specifications for developers implementing Smoothie accessory communication protocols.
  <br><br>
  If you're just using Smoothieboard, you don't need to read this. This is for advanced users and developers creating custom accessories.
</sl-alert>
{:/nomarkdown}

## Protocol Overview

The Smoothie Accessory Protocol has the following key characteristics:

- **Master/Slave relationship** - The protocol is based on a master/slave relationship
- **Master initiates** - The master always initiates communications, and slaves have IRQ lines to get the master's attention
  - **UART exception** - For UART, the slave sends `\0` on a timer to assert an IRQ
    - This IRQ timer should be stopped when the master begins to send a command and restarted after the reply (assuming it was not a Clear IRQ command)
- **Boot IRQ** - Slaves should assert an IRQ at boot once ready to accept commands
- **Always reply** - All Commands from the master receive a Reply from the slave, even if it is just to say OK with no data
- **Buffer limitations** - The protocol allows for describing messages of great length but this is limited by the practicality of buffer sizes. For now, all simple (not relayed or queued) binary commands should keep their command data under 16 bytes. I plan to use 32-byte buffers in early implementations and this needs to allow room for relaying queued messages to downstream devices. This will help enforce a level of economy in the core protocol. Later this cap can be raised.

## Hardware Protocols

### UART

**Bus connections:** VCC, GND

**Unique connections:** TX, RX, `DTR`, `CTS`

**Characteristics:**
- Doesn't need a dedicated IRQ pin since the slave can speak at will and can spam `\0` at the master with a delay as an IRQ

### I2C

**Bus connections:** VCC, GND, SCL, SDA

**Unique connections:** IRQ

**Characteristics:**
- Self-arbitrates (master can 'hang-up')

### SPI

**Bus connections:** VCC, GND, SCK, MISO, MOSI

**Unique connections:** SSEL, IRQ

**Characteristics:**
- Very fast and reliable

## Software Protocol

### Command Message Structure

```plaintext
  <Virtual Address 8bit><Command Type 8bit><Data Length 1-4byte><Command Data ...><Checksum 8bit>
```

- `<Virtual Address>`: Different from I2C address, a single I2C slave (or any other protocol slave) may have up to 255 distinct virtual devices to communicate with. Some may be parts of the slave, others may actually be unique downstream devices and the accessory will be expected to pass the message along. The virtual address `0x00` always refers to the module manager of the accessory being spoken to, the other 255 addresses are available for use by modules.
- `<Command Type>`: Everything should be possible using Command Types `0x00` through `0x03`, i.e., all other commands only really exist for convenience or to save bandwidth. Types `0x00` - `0x1F` are reserved for system commands. Types `0x20` - `0x7F` are reserved for core protocol commands. Types `0x80` - `0xFF` provide 128 addresses for module-specific protocol commands.
- Command Type List:
  - `0x00`: Nop
  - `0x01`: Resend Last Reply
  - `0x02`: Clear IRQ
  - `0x10`: Write system data: `<System Memory Address 1byte><Data 0+byte>`
  - `0x11`: Read system data: `<System Memory Address 1byte>`
  - `0x12`: Enable
  - `0x13`: Disable
  - `0x14`: Pause
  - `0x15`: Resume
  - `0x16`: Text Mode
  - `0x17`: Binary Mode
  - `0x20`: Write data: `<Shared Memory Address 1-4byte><Data 0+byte>`
  - `0x21`: Read data: `<Shared Memory Address 1-4byte>`
  - `0x22`: Queue Command: `<Delta 1-4byte><Command Type 1byte><Command Data ...>`
- `<Delta>`: The time offset from the previous command expressed in ticks as specified in the Virtual Device's System Memory at which to execute the command. `0` means the command is meant to be executed simultaneously or immediately after the previous command.
- `<Shared Memory Address>`: In each byte, a high order bit of `0` means this is the last address byte and the lower 7 bits hold the address data. If the high order bit is `1` it means another address byte follows, its 7 data bits will be 7 bits higher order than the previous byte's data. Up to 4 bytes can be sent this way, allowing 28 bits (256MB) of memory to be addressed per virtual device.
- `<Data Length>`: The number of bytes in `<Data>` not including the `<Virtual Address>`, `<Command Type>`, `<Data Length>`, or `<Checksum>`. In each byte, a high order bit of `0` means this is the last address byte and the lower 7 bits hold the address data. If the high order bit is `1` it means another address byte follows and the following byte's 7 data bits will be 7 bits higher order than this byte's data. Up to 4 bytes can be sent this way, allowing a max of 28 bits of data. The 4th byte's 7th bit is always `0`.
- `<Command Data>`: Command data can be of variable length depending on the specific `<Command Type>` used. If the `<Command Type>` can itself have variable data length, the command should provide a way of determining the expected data length as early as possible.
- `<Checksum>`: The last block of all protocol messages. Includes all message blocks except `<Checksum>` itself starting with `<Virtual Address>`.

### Reply Message Structure

```plaintext
  <Status 8bit><Data Length 1-4byte><Data 0+byte><Checksum 8bit>
```

- `<Status>`: Status List:
  - `0x00`: OK! Everything is tickety-boo and the reply data should be as expected. If there was less data than expected or all bytes after a point are `\0` then the message will be truncated, this will be apparent in the `<Data Length>` field.
  - `0x10`: Checksum Error.
  - `0x11`: Length Error. Command had more or fewer bytes than expected. Only applies to I2C (and maybe SPI).
  - `0x12`: Timeout Error. Did not receive as many bytes as expected within the timeout period. Command was ignored. Only applies to UART (and maybe SPI).
- `<Data Length>`: Same as in command messages.
- `<Data>`: The reply data which may be different than expected depending on `<Status>`.
- `<Checksum>`: Last block of reply. Includes all blocks in the reply except the `<Checksum>` starting from the `<Status>` byte.

## Memory Maps

### Virtual Device `0x00` (Module Manager) Memory Map

```plaintext
  0x0000  Magic Number (128bit read only)
   - This identifies the device as a compatible accessory and must always contain the magic value "SMOOTHIEWAREMINI"
  0x0010  Creator ID (128bit read only)
   - This field identifies the device manufacturer, similar to VID in plug and play. Using a 16-byte UUID for these fields allows anyone to generate their own unique numbers with no need for a central tracking system.
  0x0020  Device Type ID (128bit read only)
   - This field uniquely identifies the device type, like the PID in plug and play.
  0x0030  Device Serial (128bit read only)
   - This field holds a device serial that should actually be unique.
  0x0040  *** (196byte)
  0x0100  Upstream UART Config
  0x0200  Upstream SPI Config
  0x0300  Upstream I2C Config
```

### System Memory Map

```plaintext
  - System Memory Maps are 128 bytes.
  - Every virtual device has its own System Memory Map for configuration and basic control.
  - This leaves each virtual device's main memory map free, preventing conflicts with existing memory maps.
  0x00    Module ID (128bit read only)
   - This field contains a unique identifier for the running module. Virtual Device `0x00` (Module Manager) has a Module ID of `0x0000 0000 0000 0000`.
  0x10    Status Flags (32bit read only)
     0b0  starting
     0b1  disabling
     0b2  pausing
     0b3  resuming
     *** 28 bits free
  0x14    State Flags (16bit)
     0b0  disabled
       - When disabled, the device will only process System Command Types `0x00` through `0x1F`. It will continue to run (assuming it's not paused), but will only complete commands that have already been received.
     0b1  paused
       - When paused, the device will 'stop', the meaning of which depends on what the device in question actually does. It will, however, continue to accept all commands as normal (assuming it's enabled).
     *** 14 bits free
     1b0  binary mode
       - If false then 'text mode' is used, which requires any binary commands to be prefixed with a `\0`.
     *** 15 bits free
  0x16    IRQ Flags (16bit)
     0b0  IRQ system enabled
     0b1  config IRQ enabled
     0b2  queue empty IRQ enabled
     0b3  queue full IRQ enabled
     *** 3 bits free
     0b7  module IRQ enabled
     1b0  connect IRQ asserted
     1b1  config IRQ asserted
     1b2  queue empty IRQ asserted
     1b3  queue full IRQ asserted
     *** 3 bits free
     1b7  module IRQ asserted
  0x18    Virtual Address (1byte)
   - Reading this value may be a little pointless, but by writing you will change the address being used. After changing the Virtual Address, the next command sent to the virtual device will need to use the new address. The Virtual Address of Virtual Device `0x00` (Module Manager) cannot be changed.
  0x19    Command Buffers (1byte)
      b0  command bitsize (4bit)
       - This value describes the maximum length command the accessory is capable of receiving in bits. The current plan is for the default to be 5, which means a 32-byte buffer. The value must be from 4 to 28, though this is also limited by available hardware resources like RAM.
      b4  queue bitsize (4bit)
       - This is the size of the command queue in bits. Currently shooting for a default of 4, which would let the queue hold up to 16 commands.
  0x1A    Queue Time Division (2bytes)
      b15 timing (1bit)
       - If 0 then the low 15 bits represent ticks per sync/beat. If 1 then b8-b14 are frames per second, and b0-b7 are ticks per frame.
      b0  sync divisor (15bit)
      b8  timecode frame divisor (7bit)
      b0  timecode tick divisor (8bit)
  0x1C    Queue State (4byte)
   - Holds the number of commands currently in the queue.
```
