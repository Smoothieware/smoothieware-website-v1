---
permalink: /pin-configuration
---

# Pin Configuration

A "pin" is an input or output on the Smoothieboard.

In a lot of cases (step/direction for external stepper motors, button inputs), you can use any pin for any use.

In other cases, a given pin is tied to a given peripheral on the board.

See [Pinout](/pinout) to learn about which pins are where.

You can have a pin's output inverted by adding a `!` after this pin's number in the config line, example:

```markdown
my_pin_name 19!
```

There are other modifiers for pins:

| Modifier | Symbol | Description |
| --- | --- | --- |
| Invert pin | `!` | Exclamation mark |
| Open drain | `o` | Lowercase O letter |
| Pull up | `^` | Caret, `Shift`+`6` on QWERTY keyboards (Default on most pins) |
| Pull down | `v` | Lowercase v letter |
| No pullup | `-` | Minus sign |
| Repeater mode | `@` | At / Arobase sign |
| No modifier | | If you do not set any option/modifier for your pin, it will be in pullup mode as if it had `^` specified |

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  Some pins have hardware on the board itself, enforcing a given configuration.<br><br>The main example of this is the endstop inputs, which have on-board pull-up resistors, meaning trying to deactivate pull-ups in configuration (<code>-</code> for them) will not work (configuration cannot deactivate/remove physically present pull-up resistors, it can only act on pull-up pin-configuration peripherals "inside" the chip).
</sl-alert>
