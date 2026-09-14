{::nomarkdown}
<versioned orientation="vertical">
<v2>
{:/nomarkdown}

On Smoothieware V2, `echo text` broadcasts `text` followed by a line feed to the active consoles. Use `echo -1 text` to send `text` only to the configured auxiliary UART. Add `-n` before the text when the receiving device must not receive the trailing line feed:

```plaintext
echo machine-ready
echo -1 feeder-advance
echo -1 -n feeder-advance
```

Configure the auxiliary UART before using `echo -1`:

```ini
[uart console]
enable = true
console = false
channel = 0
baudrate = 115200
bits = 8
stop_bits = 1
parity = none
```

Set `channel` to the hardware UART connected to the receiving device. Match the baud rate and framing to that device.

| Channel | Peripheral | RX | TX |
|---------|------------|----|----|
| `0` | UART3 | `PB11` | `PD8` |
| `1` | UART4 | `PH14` | `PB9` |

The upstream New features wiki lists `PB8` for channel 0, but the checked V2 UART driver configures `PD8` as UART3 TX. The firmware source controls the pin mapping.

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <code>-1</code> means “the configured auxiliary UART”; it is not a channel number. Select channel <code>0</code> or <code>1</code> in <code>[uart console]</code>. The V2 firmware does not provide <code>echo -0</code> or independently selectable simultaneous UART targets.
</sl-alert>
{:/nomarkdown}

Use `console = false` when this UART is a device output. This initializes it for `echo -1` without treating incoming data as console commands. Only one auxiliary UART can be selected at a time.

Use `console = true` to make the selected channel a command console. In that mode, send one command line and wait for its response before sending the next because the UART has no hardware flow control.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}
