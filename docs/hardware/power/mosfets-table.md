#### MOSFETs Table

This page documents the MOSFET outputs available on Smoothieboard and their specifications.

MOSFETs are used to control high-power devices like heated beds, hotends, fans, and other accessories.

##### MOSFET Specifications

| MOSFET Pair         | Big MOSFETS        | Small MOSFETS      | Mixed MOSFETS         |
|---------------------|--------------------|--------------------|-----------------------|
| Label on diagram    | **P2_7**           | **P2_5**           | **P2_4**              | **P2_6**           | **P1_23** | **P1_22** |
| Digital output pin  | `2.7`              | `2.5`              | `2.4`                 | `2.6`              | `1.23`    | `1.22`    |
| Power Input         | Between `P2_7` and `P2_5` | Between `P2_6` and `P1_23` | Taken from **VBB**    |
| Size                | Big                | Big                | Small                 | Small              | Big       | Small     |
| Maximum current     | 12A                | 12A                | 3A                    | 3A                 | 12A       | 3A        |
| Used by default for | Heated bed         |                    | Hotend 0              | Fan                | Hotend 1  |           |

##### Understanding MOSFET Pairs

Smoothieboard has three MOSFET pairs:

###### Big MOSFETs Pair (P2_7 and P2_5)

- **Current capacity**: 12A each
- **Power input**: Shared between the two outputs (between P2_7 and P2_5 terminals)
- **Typical use**: Heated bed (high current devices)
- **Note**: Both outputs share the same power input

###### Small MOSFETs Pair (P2_4 and P2_6)

- **Current capacity**: 3A each
- **Power input**: Shared between the two outputs (between P2_6 and P1_23 terminals)
- **Typical use**: Hotend 0 and fan (moderate current devices)
- **Note**: Both outputs share the same power input

###### Mixed MOSFETs Pair (P1_23 and P1_22)

- **Current capacity**: P1_23: 12A, P1_22: 3A
- **Power input**: Taken directly from VBB (main power supply)
- **Typical use**: P1_23 for Hotend 1, P1_22 for accessories
- **Note**: These outputs use the main VBB power supply

##### Important Safety Notes

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Current Limits:</strong> Do not exceed the maximum current ratings. Big MOSFETs can handle up to 12A, small MOSFETs up to 3A. Exceeding these limits can damage the board.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Shared Power:</strong> MOSFETs in the same pair share their power input. Make sure your power supply can handle the combined load of both outputs in a pair.
</sl-alert>
{:/nomarkdown}

##### Configuration

To configure a MOSFET output in your config file, use the appropriate pin number from the "Digital output pin" row.

Example for configuring a heated bed on P2_7:

```
temperature_control.bed.heater_pin     2.7
```

Example for configuring a hotend on P2_4:

```
temperature_control.hotend.heater_pin  2.4
```

##### Related Documentation

- [Smoothieboard](smoothieboard) - Main board documentation
- [Temperature Control](temperaturecontrol) - Configuring heaters
- [Pinout](pinout) - Complete pinout diagram
- [How to Wire](how-to-wire) - Wiring tutorials and best practices
