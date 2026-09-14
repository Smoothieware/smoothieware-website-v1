---
permalink: /communication
---


# Communication Modules

Communication modules are modules used to represent/control ways of communication between the Smoothieboard and the rest of the world.

This includes USB serial, hardware UARTs, and Ethernet services.

- [Network](/network#v2-network-services): V2 shell, FTP, HTTP/WebSocket, and NTP; the page also documents the different V1 services
- [UART](/uart): serial command consoles and V2 auxiliary `echo -1` output targeting
- [USB](/usb): USB serial and mass-storage communication

The [homepage](index) links the rest of the communication documentation.

## Understanding the Protocol

Developers need to be aware that Smoothie uses the "standard" RepRap "ping-pong" protocol.

This means that you **MUST** wait for `ok` to be sent before sending each line of G-code.

If this is not strictly adhered to, then odd things may happen.

## Important Details About `ok` Responses

Developers need to be aware that receipt of `ok` means the line was received but it **DOES NOT** mean the line has been executed or even planned.

In order to get decent planning, the planning buffer needs to be filled so it can plan ahead, so `ok` does not wait for each line to be actually executed.

For efficiency purposes, {::nomarkdown}<gcode>G1</gcode>{:/nomarkdown} commands send `ok` immediately on receipt before they are even put in the planning queue.

Whereas most other G-codes will only send `OK` when they have been entered into the buffer.

If the buffer is full, then `ok` will not be sent until there is room.

If you need to know when a G-code has actually been executed, then you would send a `M400` which does not send `ok` until the queue is empty and the last G-code had finished moving.

## Special Jog Command

In addition, if the planning queue is empty, a G-code will not be executed immediately as it will try to wait a short amount of time to allow the buffer to fill up before executing the G-codes.

However, there is a special jog command `$J` which bypasses this delay and executes its move immediately.

This is useful for pendants and manual control interfaces.
