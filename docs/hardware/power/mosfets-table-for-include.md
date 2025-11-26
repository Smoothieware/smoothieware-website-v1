
#### MOSFETs Table

This page documents the MOSFET outputs available on Smoothieboard and their specifications.

MOSFETs are used to control high-power devices like heated beds, hotends, fans, and other accessories.

##### MOSFET Specifications

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

| MOSFET Pair         | Big MOSFETS        | Small MOSFETS      | Mixed MOSFETS         |
|---------------------|--------------------|--------------------|-----------------------|
| Label on diagram    | **P<pin>2.7</pin>**           | **P<pin>2.5</pin>**           | **P<pin>2.4</pin>**              | **P<pin>2.6</pin>**           | **P<pin>1.23</pin>** | **P<pin>1.22</pin>** |
| Digital output pin  | <pin>2.7</pin>              | <pin>2.5</pin>              | <pin>2.4</pin>                 | <pin>2.6</pin>              | <pin>1.23</pin>    | <pin>1.22</pin>    |
| Power Input         | Between P<pin>2.7</pin> and P<pin>2.5</pin> | Between P<pin>2.6</pin> and P<pin>1.23</pin> | Taken from **VBB**    |
| Size                | Big                | Big                | Small                 | Small              | Big       | Small     |
| Maximum current     | 12A                | 12A                | 3A                    | 3A                 | 12A       | 3A        |
| Used by default for | Heated bed         |                    | Hotend 0              | Fan                | Hotend 1  |           |

##### Understanding MOSFET Pairs

Smoothieboard has three MOSFET pairs:

###### Big MOSFETs Pair (P{::nomarkdown}<pin>2.7</pin>{:/nomarkdown} and P{::nomarkdown}<pin>2.5</pin>{:/nomarkdown})

- **Current capacity**: 12A each
- **Power input**: Shared between the two outputs (between P{::nomarkdown}<pin>2.7</pin>{:/nomarkdown} and P{::nomarkdown}<pin>2.5</pin>{:/nomarkdown} terminals)
- **Typical use**: Heated bed (high current devices)
- **Note**: Both outputs share the same power input

###### Small MOSFETs Pair (P{::nomarkdown}<pin>2.4</pin>{:/nomarkdown} and P{::nomarkdown}<pin>2.6</pin>{:/nomarkdown})

- **Current capacity**: 3A each
- **Power input**: Shared between the two outputs (between P{::nomarkdown}<pin>2.6</pin>{:/nomarkdown} and P{::nomarkdown}<pin>1.23</pin>{:/nomarkdown} terminals)
- **Typical use**: Hotend 0 and fan (moderate current devices)
- **Note**: Both outputs share the same power input

###### Mixed MOSFETs Pair (P{::nomarkdown}<pin>1.23</pin>{:/nomarkdown} and P{::nomarkdown}<pin>1.22</pin>{:/nomarkdown})

- **Current capacity**: P{::nomarkdown}<pin>1.23</pin>{:/nomarkdown}: 12A, P{::nomarkdown}<pin>1.22</pin>{:/nomarkdown}: 3A
- **Power input**: Taken directly from VBB (main power supply)
- **Typical use**: P{::nomarkdown}<pin>1.23</pin>{:/nomarkdown} for Hotend 1, P{::nomarkdown}<pin>1.22</pin>{:/nomarkdown} for accessories
- **Note**: These outputs use the main VBB power supply

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

| Output | Controlling Pin | Current Rating | Typical Use |
|--------|-----------------|----------------|-------------|
| Hotend A | {::nomarkdown}<pin>PJ6</pin>{:/nomarkdown} | ~5A | Primary hotend heater |
| Hotend B | {::nomarkdown}<pin>PJ7</pin>{:/nomarkdown} | ~5A | Secondary hotend heater |
| Fan 1 | {::nomarkdown}<pin>PJ8</pin>{:/nomarkdown} | ~5A | Part cooling fan |
| Fan 2 | {::nomarkdown}<pin>PJ9</pin>{:/nomarkdown} | ~5A | Auxiliary fan |
| Bed | {::nomarkdown}<pin>PJ10</pin>{:/nomarkdown} | ~10-12A | Heated bed (dual parallel FETs) |
| SSR1 | Logic output | mA | External SSR control |
| SSR2 | Logic output | mA | External SSR control |

##### Understanding MOSFET Outputs

Smoothieboard v2 has a simplified MOSFET architecture:

###### Low-Current FETs (Hotend A, Hotend B, Fan 1, Fan 2)

- **Current capacity**: ~5A each
- **Power input**: Shared VFET rail (2× XT30 connectors)
- **Safety feature**: High-side PFET watchdog can cut power to all 4 outputs
- **Note**: All share the same power source, controlled by safety watchdog

###### Bed FET

- **Current capacity**: ~10-12A (dual parallel MOSFETs)
- **Power input**: Direct from VFET (not through PFET watchdog)
- **Typical use**: Heated bed
- **Note**: Independent of safety watchdog for bed stability

###### SSR Outputs

- **Current capacity**: Milliamps (logic level signals)
- **Use**: Control external solid-state relays for high-power loads

{::nomarkdown}
</v2>
</versioned>
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
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

Example for configuring a heated bed on P{::nomarkdown}<pin>2.7</pin>{:/nomarkdown}:

```
temperature_control.bed.heater_pin     2.7
```

Example for configuring a hotend on P{::nomarkdown}<pin>2.4</pin>{:/nomarkdown}:

```
temperature_control.hotend.heater_pin  2.4
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

Example for configuring a heated bed on P{::nomarkdown}<pin>2.7</pin>{:/nomarkdown}:

```ini
[temperature_control.bed]
heater_pin = 2.7
```

Example for configuring a hotend on P{::nomarkdown}<pin>2.4</pin>{:/nomarkdown}:

```ini
[temperature_control.hotend]
heater_pin = 2.4
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}



##### Related Documentation

- [Smoothieboard](smoothieboard) - Main board documentation
- [Temperature Control](temperaturecontrol) - Configuring heaters
- [Pinout](pinout) - Complete pinout diagram
- [How to Wire](how-to-wire) - Wiring tutorials and best practices
