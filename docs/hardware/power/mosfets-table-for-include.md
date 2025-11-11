
#### MOSFETs Table

This page documents the MOSFET outputs available on Smoothieboard and their specifications.

MOSFETs are used to control high-power devices like heated beds, hotends, fans, and other accessories.

##### MOSFET Specifications

| MOSFET Pair         | Big MOSFETS        | Small MOSFETS      | Mixed MOSFETS         |
|---------------------|--------------------|--------------------|-----------------------|
| Label on diagram    | **P<pin>2.7</pin>**           | **P<pin>2.5</pin>**           | **P<pin>2.4</pin>**              | **P<pin>2.6</pin>**           | **P<pin>1.23</pin>** | **P<pin>1.22</pin>** |
| Digital output pin  | <pin>2.7</pin>              | <pin>2.5</pin>              | <pin>2.4</pin>                 | <pin>2.6</pin>              | <pin>1.23</pin>    | <pin>1.22</pin>    |
| Power Input         | Between P<pin>2.7</pin> and P<pin>2.5</pin> | Between P<pin>2.6</pin> and P<pin>1.23</pin> | Taken from **VBB**    |
| Size                | Big                | Big                | Small                 | Small              | Big       | Small     |
| Maximum current     | 12A                | 12A                | 3A                    | 3A                 | 12A       | 3A        |
| Used by default for | Heated bed         |                    | Hotend 0              | Fan                | Hotend 1  |           |

##### Understanding MOSFET Pairs

{::nomarkdown}
Smoothieboard has three MOSFET pairs:

###### Big MOSFETs Pair (P<pin>2.7</pin> and P<pin>2.5</pin>)

- **Current capacity**: 12A each
- **Power input**: Shared between the two outputs (between P<pin>2.7</pin> and P<pin>2.5</pin> terminals)
- **Typical use**: Heated bed (high current devices)
- **Note**: Both outputs share the same power input

###### Small MOSFETs Pair (P<pin>2.4</pin> and P<pin>2.6</pin>)

- **Current capacity**: 3A each
- **Power input**: Shared between the two outputs (between P<pin>2.6</pin> and P<pin>1.23</pin> terminals)
- **Typical use**: Hotend 0 and fan (moderate current devices)
- **Note**: Both outputs share the same power input

###### Mixed MOSFETs Pair (P<pin>1.23</pin> and P<pin>1.22</pin>)

- **Current capacity**: P<pin>1.23</pin>: 12A, P<pin>1.22</pin>: 3A
- **Power input**: Taken directly from VBB (main power supply)
- **Typical use**: P<pin>1.23</pin> for Hotend 1, P<pin>1.22</pin> for accessories
- **Note**: These outputs use the main VBB power supply
{:/nomarkdown}

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

{::nomarkdown}
Example for configuring a heated bed on P<pin>2.7</pin>:
{:/nomarkdown}

```
temperature_control.bed.heater_pin     2.7
```

{::nomarkdown}
Example for configuring a hotend on P<pin>2.4</pin>:
{:/nomarkdown}

```
temperature_control.hotend.heater_pin  2.4
```

##### Related Documentation

- [Smoothieboard](smoothieboard) - Main board documentation
- [Temperature Control](temperaturecontrol) - Configuring heaters
- [Pinout](pinout) - Complete pinout diagram
- [How to Wire](how-to-wire) - Wiring tutorials and best practices
