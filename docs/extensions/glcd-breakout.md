---
layout: default
title: "GLCD breakout"
permalink: /extensions/glcd-breakout
---

# GLCD breakout

This adapter interfaces a specified RepRapDiscount-style ST7920 graphic panel, encoder, buttons, buzzer and SD connection. The circuit gates the display signals and buffers the SPI return so a panel that does not obey normal SPI selection cannot corrupt shared traffic. Similar-looking clone panels can have different EXP pinouts; compatibility must name the exact panel revision.

Its intended use is a local machine-control panel: the graphic display presents information, the rotary encoder and pushbuttons provide input, and the buzzer provides feedback. The optional panel SD socket is a separate SPI peripheral. The adapter contains active logic, so it needs both a matching electrical interface and firmware that manages the display gate; it is not a passive pin-conversion cable.

Use this guide to identify the adapter, trace its contacts and prepare an unpowered harness check. **A powered panel installation is not yet qualified.** The complete electrical correspondence is documented below, but the shared supply allowance, exact cable mating and working panel firmware must be resolved before commissioning. The named peripheral is the **original RepRapDiscount Full Graphic Smart Controller, schematic dated 2013-04-16**.

## Revision and availability

This guide selects **v15**, matching the revision selected by the retained abstract-diagram inventory. This is a design candidate; availability and operating ratings are unverified. The selected revision and contact map govern this guide; older specifications may describe another circuit.

The selected v15 source package retains schematic title-block revision **v10**. The package number does not rename the schematic or establish a released hardware revision.

## Interfaces, power and operating limits

J1 is the host S connector and J2 the controls Y connector; J3/J4 are the panel EXP1/EXP2 headers. J1.3/.4 carry optional display GPIO data/clock, .5 display enable, .6 SD chip select and .7–9 SPI MOSI/MISO/SCK. JP1 and JP2 select GPIO or shared-SPI clock/data. J2.3/.4 return encoder A/B, .5 drives the buzzer, .6 returns the encoder button, .7 the stop button and .9 SD detect. EXP1.9 is ground and .10 is 5 V; EXP2.10 is PANEL_STOP_K10, not an assumed second ground. Panel current/backlight and shared-rail capability remain unverified.

| Property | Selected v15 evidence and limit |
|---|---|
| Host interfaces | Two ten-contact Gadgeteer connections: serial/display S and controls Y. The candidate host allocation is Prime P12 GE/J36 and GF/J37. |
| Panel interfaces | Two ten-contact, 2.54 mm EXP headers. The named panel schematic defines the electrical numbering; a fitted plug's mating view is still unqualified. |
| Supply rails | Host contacts 1, 2 and 10 carry 3.3 V, 5 V and circuit ground on both host connectors. These are shared rails, not two independent power sources. |
| Display logic | SN74AHCT08 supplied from 5 V gates the selected clock and data and the display-select path. JP1/JP2 choose separate GPIO or shared SPI inputs. |
| SD return | SN74LVC1G125 supplied from 3.3 V isolates the panel-to-host data return when SD select is inactive. This does not establish a secondary SD filesystem implementation. |
| Panel power | EXP1.10 receives 5 V directly in v15; there is no selected-revision fuse/PPTC. Panel/backlight current and the combined host rail budget remain unqualified. |
| Operating limits | Maximum clock, cable length, assembled current rating, backfeed/power-off behaviour and installed operation have not been qualified. Component supply voltages are not board ratings. |

### Signal directions at the host

Directions below are relative to the Prime controller. They describe the selected circuit, not a complete firmware configuration.

| Host contact | Prime pin | Direction and function |
|---|---|---|
| GE/J36.3 | PE8 | Host → adapter: separate-GPIO display data, selected by JP2 1–2. |
| GE/J36.4 | PJ7 | Host → adapter: separate-GPIO display clock, selected by JP1 1–2. |
| GE/J36.5 | PJ8 | Host → adapter: display enable; the application must control its sequence. |
| GE/J36.6 | PD15 | Host → adapter: active-low panel SD select. |
| GE/J36.7 / .8 / .9 | SPI1 COPI / CIPO / clock | Host → panel / panel → host / host → panel respectively. These bus roles do not allocate the bus in firmware. |
| GF/J37.3 / .4 | PB1 / PJ4 | Panel → host: encoder BTN_EN2 / BTN_EN1 in the original panel's naming. |
| GF/J37.5 | PA4 | Host → panel: beeper signal. |
| GF/J37.6 | PG0 | Panel → host: encoder pushbutton. |
| GF/J37.7 | PJ3 | Panel → host: stop signal; not a qualified emergency-stop input. |
| GF/J37.8 | PG1 | Adapter contact is unrouted; no panel function is assigned. |
| GF/J37.9 | PJ2 | Panel → host: SD-card detect. |

## Board reference

The main reference combines the selected abstract board with its four complete connector keys and the display/SD signal paths. Contact numbers are electrical source identifiers, not a view into a cable plug. The display uses a 5 V logic gate; the SD return buffer is supplied from 3.3 V. Neither component's supply voltage establishes the panel's current allowance.

{% include _includes/extension-instruction-diagram.html id="glcd-v15-annotated-reference" src="/images/extensions/glcd-breakout/guides/glcd-annotated-reference.png" title="GLCD v15 — annotated adapter reference" alt="Canonical GLCD v15 abstract with four complete ten-contact keys, display selectors, 5 V display gates and 3.3 V SD return buffer" caption="Source-bound front projection. The connector keys describe circuit function; use the four-cable map for endpoint correspondence and the numbered preparation steps below. Zoom or use Actual size to read individual labels." width=1200 %}

<details markdown="1">
<summary>Focused source sheets and complete component inventory</summary>

<details markdown="1">
<summary>Reading the connector callouts</summary>

The dark end of each pill gives the source contact number. The adjoining label gives its function. Colours help locate related functions; the label and connection instructions determine how to use the contact.

- Red: 3.3 V supply.
- Orange: 5 V supply.
- Violet: Control signal.
- Green: Signal — use the printed function label.
- Near-black: Circuit ground.
- Grey: Not routed in this board revision.
- Dark grey: Other source-labelled contact — read its exact function.

A voltage in a signal name does not make that contact a power output. Circuit ground, cable shield and protective earth are different connections. An underside projection shows rear components through the front view; it is not a mirrored rear view.

</details>

Start with the overview, then use all focused sheets for exact contacts, controls and links. Source footprint defaults do not prove assembled continuity.

{% include _includes/extension-instruction-diagram.html id="glcd-breakout-v15-reader-compact-overview" src="/images/extensions/glcd-breakout/guides/reader-compact-overview.png" title="Graphical panel adapter — overview" alt="Graphical panel adapter — overview for glcd-breakout v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="glcd-breakout-v15-reader-compact-host-spi-1-5" src="/images/extensions/glcd-breakout/guides/reader-compact-host-spi-1-5-central-pills.png" title="J1 · Host display/SPI — host spi 1 5" alt="J1 · Host display/SPI — host spi 1 5 for glcd-breakout v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="glcd-breakout-v15-reader-compact-host-spi-6-10" src="/images/extensions/glcd-breakout/guides/reader-compact-host-spi-6-10-central-pills.png" title="J1 · Host display/SPI — host spi 6 10" alt="J1 · Host display/SPI — host spi 6 10 for glcd-breakout v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="glcd-breakout-v15-reader-compact-host-controls-1-5" src="/images/extensions/glcd-breakout/guides/reader-compact-host-controls-1-5-central-pills.png" title="J2 · Host controls — host controls 1 5" alt="J2 · Host controls — host controls 1 5 for glcd-breakout v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="glcd-breakout-v15-reader-compact-host-controls-6-10" src="/images/extensions/glcd-breakout/guides/reader-compact-host-controls-6-10-central-pills.png" title="J2 · Host controls — host controls 6 10" alt="J2 · Host controls — host controls 6 10 for glcd-breakout v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="glcd-breakout-v15-reader-compact-panel-exp1-1-5" src="/images/extensions/glcd-breakout/guides/reader-compact-panel-exp1-1-5-central-pills.png" title="J3 · Panel EXP1 — panel exp1 1 5" alt="J3 · Panel EXP1 — panel exp1 1 5 for glcd-breakout v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="glcd-breakout-v15-reader-compact-panel-exp1-6-10" src="/images/extensions/glcd-breakout/guides/reader-compact-panel-exp1-6-10-central-pills.png" title="J3 · Panel EXP1 — panel exp1 6 10" alt="J3 · Panel EXP1 — panel exp1 6 10 for glcd-breakout v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="glcd-breakout-v15-reader-compact-panel-exp2-1-5" src="/images/extensions/glcd-breakout/guides/reader-compact-panel-exp2-1-5-central-pills.png" title="J4 · Panel EXP2 — panel exp2 1 5" alt="J4 · Panel EXP2 — panel exp2 1 5 for glcd-breakout v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="glcd-breakout-v15-reader-compact-panel-exp2-6-10" src="/images/extensions/glcd-breakout/guides/reader-compact-panel-exp2-6-10-central-pills.png" title="J4 · Panel EXP2 — panel exp2 6 10" alt="J4 · Panel EXP2 — panel exp2 6 10 for glcd-breakout v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="glcd-breakout-v15-reader-compact-clock-source" src="/images/extensions/glcd-breakout/guides/reader-compact-clock-source.png" title="Display clock selector — clock source" alt="Display clock selector — clock source for glcd-breakout v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="glcd-breakout-v15-reader-compact-data-source" src="/images/extensions/glcd-breakout/guides/reader-compact-data-source.png" title="Display data selector — data source" alt="Display data selector — data source for glcd-breakout v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="glcd-breakout-v15-reader-compact-display-gates" src="/images/extensions/glcd-breakout/guides/reader-compact-display-gates.png" title="Display gating and output — display gates" alt="Display gating and output — display gates for glcd-breakout v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="glcd-breakout-v15-reader-compact-sd-inputs" src="/images/extensions/glcd-breakout/guides/reader-compact-sd-inputs.png" title="SD clock data and select — sd inputs" alt="SD clock data and select — sd inputs for glcd-breakout v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="glcd-breakout-v15-reader-compact-sd-return" src="/images/extensions/glcd-breakout/guides/reader-compact-sd-return.png" title="SD return buffer — sd return" alt="SD return buffer — sd return for glcd-breakout v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="glcd-breakout-v15-reader-compact-encoder" src="/images/extensions/glcd-breakout/guides/reader-compact-encoder.png" title="Encoder and button returns — encoder" alt="Encoder and button returns — encoder for glcd-breakout v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="glcd-breakout-v15-reader-compact-stop-detect" src="/images/extensions/glcd-breakout/guides/reader-compact-stop-detect.png" title="Stop and SD detect returns — stop detect" alt="Stop and SD detect returns — stop detect for glcd-breakout v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="glcd-breakout-v15-reader-compact-protection" src="/images/extensions/glcd-breakout/guides/reader-compact-protection.png" title="Panel contact protection — protection" alt="Panel contact protection — protection for glcd-breakout v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="glcd-breakout-v15-reader-compact-tests-power" src="/images/extensions/glcd-breakout/guides/reader-compact-tests-power-underside-caption.png" title="Power and ground test pads — tests power" alt="Power and ground test pads — tests power for glcd-breakout v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="glcd-breakout-v15-reader-compact-tests-display" src="/images/extensions/glcd-breakout/guides/reader-compact-tests-display-underside-caption.png" title="Display signal test pads — tests display" alt="Display signal test pads — tests display for glcd-breakout v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="glcd-breakout-v15-reader-compact-mounts" src="/images/extensions/glcd-breakout/guides/reader-compact-mounts.png" title="Mounting holes — mounts" alt="Mounting holes — mounts for glcd-breakout v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

**Reference status:** the selected-revision annotated sheets above have passed source review. Read the overview and all focused sheets together. Practical wiring and actual desktop/narrow viewer acceptance are separate checks; use the connection section for the current installation limits.

The following is the exact selected PCB’s intended pad-to-net schedule. Net labels identify circuit nodes; they are not wire colours or measured voltage/current ratings. Explicit unconnected contacts must remain unused. Duplicate physical pads with the same contact number represent alternative lands, not extra channels. Selector bridge/default population must be confirmed from the selected assembly record before alteration.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Selected-source contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Member / reference | Label / control | Kind | Numbered contacts / assigned nodes |
|---|---|---|---|
| glcd-breakout / J1 | GADGETEER S IN | Connector | 1: +3V3; 2: +5V; 3: /DISP_DAT_GPIO_IN; 4: /DISP_CLK_GPIO_IN; 5: /DISP_EN_IN; 6: /SD_CS_N_IN; 7: /SPI_MOSI_IN; 8: /SPI_MISO_OUT; 9: /SPI_SCK_IN; 10: GND |
| glcd-breakout / J2 | GADGETEER Y IN | Connector | 1: +3V3; 2: +5V; 3: /ENC_A_OUT; 4: /ENC_B_OUT; 5: /BEEPER_IN; 6: /ENC_BTN_OUT; 7: /KILL_OUT; 8: unconnected-(J2-Pin_8-Pad8); 9: /SD_DET_OUT; 10: GND |
| glcd-breakout / J3 | EXP1 (PANEL LCD) | Connector | 1: /BEEPER_IN; 2: /PANEL_BTN_ENC; 3: /PANEL_SID; 4: /PANEL_RS_CS; 5: /PANEL_SCLK; 6: unconnected-(J3-Pin_6-Pad6); 7: unconnected-(J3-Pin_7-Pad7); 8: unconnected-(J3-Pin_8-Pad8); 9: GND; 10: +5V |
| glcd-breakout / J4 | EXP2 (PANEL SD/BUTTONS) | Connector | 1: /PANEL_SD_MISO; 2: /PANEL_SD_SCK; 3: /PANEL_BTN_EN1; 4: /PANEL_SD_CS_N; 5: /PANEL_BTN_EN2; 6: /PANEL_SD_MOSI; 7: /PANEL_SD_DET; 8: /PANEL_STOP; 9: GND; 10: /PANEL_STOP_K10 |
| glcd-breakout / TP1 | TP GND | Observation only | 1: GND |
| glcd-breakout / TP2 | TP +3V3 | Observation only | 1: +3V3 |
| glcd-breakout / TP3 | TP +5V | Observation only | 1: +5V |
| glcd-breakout / TP4 | TP +5V_PANEL | Observation only | 1: +5V |
| glcd-breakout / TP5 | TP PANEL_SCLK | Observation only | 1: /PANEL_SCLK |
| glcd-breakout / TP6 | TP PANEL_SID | Observation only | 1: /PANEL_SID |
| glcd-breakout / TP7 | TP PANEL_RS_CS | Observation only | 1: /PANEL_RS_CS |
| glcd-breakout / TP8 | TP DISP_EN_IN | Observation only | 1: /DISP_EN_IN |
| glcd-breakout / TP9 | TP GND | Observation only | 1: GND |
| glcd-breakout / JP1 | CLK SRC | Service link/selector | 1: /DISP_CLK_GPIO_IN; 2: /CLK_SEL; 3: /SPI_SCK_IN |
| glcd-breakout / JP2 | DAT SRC | Service link/selector | 1: /DISP_DAT_GPIO_IN; 2: /DAT_SEL; 3: /SPI_MOSI_IN |

</div>





</details>

</details>

## Practical connection to Smoothieboard V2 Prime

The four ten-core cables have the following electrical correspondence. Each row in the drawing retains all five contacts in the source's within-row order and spacing; the two rows are enlarged and separated. Native host contact pitch is 1.27 mm and panel EXP pitch is 2.54 mm; the drawing is an enlarged electrical study, not a dimensioned cable drawing. Prime and adapter endpoints use their canonical abstract artwork. The panel endpoints are **schematic electrical pins**, because a verified physical mating-face drawing is unavailable. This is a complete cable contact map, not acceptance of a manufactured harness or a ready-to-power installation.

{% include _includes/extension-instruction-diagram.html id="glcd-v15-four-cable-map" src="/images/extensions/glcd-breakout/guides/glcd-four-cable-map.png" title="Prime, GLCD adapter and original panel — four-cable contact map" alt="Forty autorouted numbered conductors show Prime GE and GF to adapter J1 and J2, then adapter J3 and J4 to original panel EXP1 and EXP2" caption="All four ten-contact cable duties are shown, including cores ending at unused contacts. Source row crops preserve within-row geometry; inter-row separation is illustrative. Panel mating, shared rail current, whole-board wire clearance and working firmware remain unqualified. This diagram must not be used to energize the assembly." width=1200 %}

| Cable | Host or adapter end | Other end | Numbering rule |
|---|---|---|---|
| Serial/display host | Prime GE / J36 | Adapter J1 / S IN | 1→1 through 10→10 |
| Controls host | Prime GF / J37 | Adapter J2 / Y IN | 1→1 through 10→10 |
| Display panel | Adapter J3 / EXP1 | Original panel EXP1 | 1→1 through 10→10 |
| SD and controls panel | Adapter J4 / EXP2 | Original panel EXP2 | 1→1 through 10→10 |

### Prepare and check the unpowered harness

1. Identify the v15 source package and the original panel revision. A similar display, connector notch or ribbon stripe does not establish compatibility. Keep all supplies disconnected during the following checks.
2. Confirm that the controller is P12 Prime2590 and reserve GE/J36 and GF/J37 in the complete machine configuration. The P11 artwork in the drawing illustrates the separately reconciled GE/GF assignments; it does not rename the host revision.
3. Check each of the four cables by numbered continuity using the table. Preserve all ten positions; do not swap EXP1 and EXP2. Cable conductor colours in the drawing encode function and are not a claim about the fitted insulation.
4. Check the fitted selector state before altering it. For the documented separate-GPIO display path, **JP1 and JP2 each connect 1–2 only**. Bridging 2–3 selects shared SPI instead and needs its own qualified firmware/bus allocation; never bridge all three contacts.
5. Trace GE.3 / PE8 to display data, GE.4 / PJ7 to clock and GE.5 / PJ8 to display enable. Display enable controls the gate and panel select; assigning only clock and data in firmware is insufficient. The SD bus is separate: GE.6 / PD15 selects it, with GE.7–9 carrying SPI1 COPI/CIPO/clock. Leave the panel SD slot empty until its firmware and bus ownership are established.
6. Check the controls against the **panel's** names: EXP2.3 is BTN_EN2 and reaches GF.3 / PB1; EXP2.5 is BTN_EN1 and reaches GF.4 / PJ4. The adapter's EN1/EN2 net names differ. Encoder press reaches GF.6 / PG0, beeper GF.5 / PA4 and SD detect GF.9 / PJ2. GF.8 ends at an unrouted adapter contact.
7. Verify the stop and supply boundaries before any powered work. Panel EXP2.10 is STOP/KILL; adapter R23 joins it to EXP2.8 labelled RESET. Neither is ground, and this is not a qualified emergency-stop circuit. The adapter sends 5 V directly to EXP1.10 with no selected-revision fuse/PPTC. Establish the panel/backlight load, both shared host rail budgets and complete firmware workflow before commissioning.

If a display stays blank, first compare the exact panel, selector state and firmware initialization/gate control with the cited sources; do not rotate a live ribbon or move a supply contact by trial. If encoder direction seems reversed, check the two different source naming conventions before changing a harness. These are diagnostic prerequisites, not powered test instructions.

<details markdown="1">
<summary>Retained partial lead reference and earlier electrical proposal</summary>

### Unpowered display-control reference

This drawing identifies four individual candidate leads from Prime GE/J36 to adapter J1: contact 3 PE8 for display data, contact 4 PJ7 for clock, contact 5 PJ8 for display enable, and contact 10 ground. It uses the native board artwork with whole-board locators and complete contact keys. P11 Prime artwork is paired with the source-checked P12 connector allocation. The separated row crops preserve contact order and pitch within each row; they do not specify plug-face orientation.

**Do not energize this candidate.** Both host supply rails, every other host signal, adapter J2/J3/J4 and the display remain disconnected. JP1 and JP2 select only 1–2 for separate GPIO data and clock. This is an incomplete control reference, not a working display installation.

{% include _includes/extension-instruction-diagram.html id="glcd-native-0" src="/images/extensions/glcd-breakout/guides/native-contact/glcd-native-reader.png" title="Prime and GLCD adapter — unpowered control reference" alt="Prime and GLCD adapter — unpowered control reference" caption="Selected v15; four unpowered control leads only. All supply rails and panel cables remain disconnected. Source contact positions do not qualify physical cable orientation, firmware operation or hardware." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="glcd-native-1" src="/images/extensions/glcd-breakout/guides/native-contact/named-panel-keys/EXP1-primary-source.png" title="EXP1 primary source — source contact key" alt="EXP1 primary source — source contact key" caption="Selected v15; four unpowered control leads only. All supply rails and panel cables remain disconnected. Source contact positions do not qualify physical cable orientation, firmware operation or hardware." width=420 %}

{% include _includes/extension-instruction-diagram.html id="glcd-native-2" src="/images/extensions/glcd-breakout/guides/native-contact/named-panel-keys/EXP2-primary-source.png" title="EXP2 primary source — source contact key" alt="EXP2 primary source — source contact key" caption="Selected v15; four unpowered control leads only. All supply rails and panel cables remain disconnected. Source contact positions do not qualify physical cable orientation, firmware operation or hardware." width=420 %}

{% include _includes/extension-instruction-diagram.html id="glcd-native-3" src="/images/extensions/glcd-breakout/guides/native-contact/reader-contact-keys/J1-numbered-pads.png" title="J1 — source contact key" alt="J1 — source contact key" caption="Selected v15; four unpowered control leads only. All supply rails and panel cables remain disconnected. Source contact positions do not qualify physical cable orientation, firmware operation or hardware." width=420 %}

{% include _includes/extension-instruction-diagram.html id="glcd-native-4" src="/images/extensions/glcd-breakout/guides/native-contact/reader-contact-keys/J2-numbered-pads.png" title="J2 — source contact key" alt="J2 — source contact key" caption="Selected v15; four unpowered control leads only. All supply rails and panel cables remain disconnected. Source contact positions do not qualify physical cable orientation, firmware operation or hardware." width=420 %}

{% include _includes/extension-instruction-diagram.html id="glcd-native-5" src="/images/extensions/glcd-breakout/guides/native-contact/reader-contact-keys/J3-numbered-pads.png" title="J3 — source contact key" alt="J3 — source contact key" caption="Selected v15; four unpowered control leads only. All supply rails and panel cables remain disconnected. Source contact positions do not qualify physical cable orientation, firmware operation or hardware." width=420 %}

{% include _includes/extension-instruction-diagram.html id="glcd-native-6" src="/images/extensions/glcd-breakout/guides/native-contact/reader-contact-keys/J36-numbered-pads.png" title="J36 — source contact key" alt="J36 — source contact key" caption="Selected v15; four unpowered control leads only. All supply rails and panel cables remain disconnected. Source contact positions do not qualify physical cable orientation, firmware operation or hardware." width=420 %}

{% include _includes/extension-instruction-diagram.html id="glcd-native-7" src="/images/extensions/glcd-breakout/guides/native-contact/reader-contact-keys/J37-numbered-pads.png" title="J37 — source contact key" alt="J37 — source contact key" caption="Selected v15; four unpowered control leads only. All supply rails and panel cables remain disconnected. Source contact positions do not qualify physical cable orientation, firmware operation or hardware." width=420 %}

{% include _includes/extension-instruction-diagram.html id="glcd-native-8" src="/images/extensions/glcd-breakout/guides/native-contact/reader-contact-keys/J4-numbered-pads.png" title="J4 — source contact key" alt="J4 — source contact key" caption="Selected v15; four unpowered control leads only. All supply rails and panel cables remain disconnected. Source contact positions do not qualify physical cable orientation, firmware operation or hardware." width=420 %}

{% include _includes/extension-instruction-diagram.html id="glcd-native-9" src="/images/extensions/glcd-breakout/guides/native-contact/reader-contact-keys/JP1-numbered-pads.png" title="JP1 — source contact key" alt="JP1 — source contact key" caption="Selected v15; four unpowered control leads only. All supply rails and panel cables remain disconnected. Source contact positions do not qualify physical cable orientation, firmware operation or hardware." width=420 %}

{% include _includes/extension-instruction-diagram.html id="glcd-native-10" src="/images/extensions/glcd-breakout/guides/native-contact/reader-contact-keys/JP2-numbered-pads.png" title="JP2 — source contact key" alt="JP2 — source contact key" caption="Selected v15; four unpowered control leads only. All supply rails and panel cables remain disconnected. Source contact positions do not qualify physical cable orientation, firmware operation or hardware." width=420 %}

The named panel keys apply only to the original RepRapDiscount Full Graphic Smart Controller schematic dated 2013-04-16. Panel EXP2.3 is BTN_EN2 and EXP2.5 is BTN_EN1 in that primary source, opposite the adapter net names. EXP2.10 is STOP; EXP2.8 is labelled RESET and joined to it by adapter R23. Neither is an assumed additional ground. Selected v15 directly feeds 5 V to panel EXP1.10; panel/backlight current and the shared rail budget are unqualified. A complete panel application must also initialize the ST7920 and explicitly manage display enable; the registered driver alone does not provide that workflow.

<details markdown="1">
<summary>Earlier unqualified full-panel wiring proposal</summary>

This retained proposal is not a connection instruction. Its complete cable geometry, power allowance, firmware lifecycle and physical mating are unqualified. Use the unpowered native-contact reference and its limitations above.

### Original panel connection candidate

This source-backed diagram applies only to the **original RepRapDiscount Full Graphic Smart Controller schematic dated 2013-04-16**, [available from its primary schematic](https://reprap.org/mediawiki/images/5/51/RRD_FULL_GRAPHIC_SMART_CONTROLER_SCHEMATIC.pdf). Clone panels and reversed-notch cable assemblies are not interchangeable by appearance. Electrical connector numbers are shown; physical mating orientation and shared host/panel current budget remain unverified. The pinned firmware does not supply a complete panel application, so this is not a ready-to-run installation.

{% include _includes/extension-instruction-diagram.html id="glcd-v15-prime-original-rrd-wiring" src="/images/extensions/glcd-breakout/guides/prime-installation-wiring.png" title="Prime, GLCD v15 and original RRD panel wiring candidate" alt="Forty numbered conductors connect Prime GE and GF to GLCD adapter J1/J2, and adapter J3/J4 to original panel EXP1/EXP2" caption="Source-backed four-cable topology. Full panel firmware, power budget, physical mating and retained-art audit remain incomplete. P11 artwork uses source-reconciled P12 sockets." width=1800 %}

With power removed, verify all four ten-contact cables by numbered continuity: Prime GE/J36 to adapter J1, Prime GF/J37 to J2, adapter J3 to panel EXP1, and adapter J4 to panel EXP2. Each cable preserves contact number 1 through 10; a notch or cable stripe alone does not establish that mapping. The host rails are shared source nets, not independent supplies.

For this candidate, **JP1 and JP2 both bridge only 1–2**. This selects separate display data PE8 and clock PJ7 from GE/J36.3/.4. PJ8 at J36.5 drives DISP_EN, gating those signals and setting the panel chip-select through the 5 V AHCT08 circuitry. Firmware must explicitly control that sequence; the existing ST7920 chip-select macros do not provide it.

The panel SD path uses SPI1 COPI/CIPO/SCK on J36.7–9 and PD15 chip-select on J36.6. Its return buffer is disabled when chip-select is HIGH. Leave the SD slot empty for this candidate; no secondary filesystem configuration is established. GF/J37.3 PB1 receives panel EXP2.3 BTN_EN2, .4 PJ4 receives EXP2.5 BTN_EN1, .6 PG0 receives the encoder button and .9 PJ2 receives SD detect. These source encoder names differ from adapter naming. GF/J37.5 PA4 drives the beeper input.

**EXP2.10 is STOP, not ground.** The original panel schematic places the stop switch there. Adapter R23 (0 Ω) joins it to EXP2.8 labelled RESET; that pin’s downstream function is not shown in the original primary. Do not infer a hardware reset or qualified emergency-stop function. Selected v15 has no F1/PPTC: 5 V goes directly to EXP1.10. Do not adopt protection or current ratings from another revision.

</details>

Where a conditional GF/J37 example is given, it applies only to **V2 P12 Prime2590**: contacts 1/2/10 are limited 3.3 V/limited 5 V/ground, and contacts 3–9 are PB1/PJ4/PA4/PG0/PJ3/PG1/PJ2. The host header is unshrouded; verify numbered continuity and cable orientation with power removed. Reserve pins in the complete machine configuration. No rail-current allowance, alternative Prime revision, timer route or bus mux is implied by this map.

</details>

## Smoothieware behaviour and commissioning

The [reviewed V2 ST7920 implementation](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/utils/display/st7920/ST7920.cpp#L183-L254) is a real registered display module. Its parser reads `[st7920]`, `enable`, `clk` and `mosi`, using GPIO-driven clock/data. However, the implementation defines empty chip-select macros: it does not by itself control this adapter's display-enable line or establish its shared-SPI gating sequence. There is also an initialization gap in this pinned application source: `configure()` allocates the framebuffer but does not call `initDisplay()`. The header initializes `inited` to false, and `refresh()` returns immediately until initialization has happened. A search of the reviewed `Firmware/src` files found no external ST7920 initialization or drawing caller. Enabling this section therefore does not establish a working display workflow.

Configuring those fields does not create a complete RepRapDiscount panel UI, encoder, buzzer and secondary SD integration. A matching complete v15 panel configuration remains unverified. If required panel support is absent, email **wolf.arthur@gamil.com** with the panel revision and both connector maps.

| Firmware item | Verified behaviour in the pinned source | What is still needed |
|---|---|---|
| `[st7920] enable` | Boolean; defaults to false. Enables creation of the low-level display object. | A caller that initializes and uses the display. Enabling the object alone does not display a menu or test pattern. |
| `[st7920] clk` | GPIO output pin string; defaults to `nc`. | The documented separate-GPIO circuit uses the PJ7 clock contact, with JP1 1–2. No complete tested configuration is supplied here. |
| `[st7920] mosi` | GPIO output pin string; defaults to `nc`. | The documented separate-GPIO circuit uses the PE8 data contact, with JP2 1–2. This key is a bit-banged data output, not proof of hardware SPI ownership. |
| Display enable, initialization and refresh | The driver exposes initialization/drawing operations, but the reviewed application does not supply the complete lifecycle or control PJ8 through a configuration key. | A board-aware application with the required gate/select sequencing and panel timing. |
| Encoder, pushbuttons, beeper and panel SD | Their electrical routes are identified above. | A verified panel application, input polarity/debounce, menu behaviour, beeper control and SD bus/filesystem ownership. No panel-specific commands or working sample are established. |

For a useful unpowered example, choose the display-clock duty: check Prime GE/J36.4 → adapter J1.4, JP1 1–2, the selected clock/gate circuit, then adapter J3.5 → panel EXP1.5. The selected source defines those electrical relationships; it does not qualify a cable's notch orientation or justify a powered continuity check. A powered example must wait for the missing firmware and supply qualifications rather than substituting a generic LCD configuration.

## What remains unresolved

The original panel source revision and Prime GE/GF contact allocation are identified above, and all four cable contact duties are mapped. Physical EXP ribbon orientation, a complete board-attached installation drawing, whole-board wire clearance, gating timing, complete LCD/encoder/beeper/SD firmware, shared power budget and installed behavior remain incomplete. The row-crop map must not be treated as physical harness qualification. Source-link availability and desktop/narrow page usability require separate verification.

## Sources and revision notes

- [Selected v15 glcd-breakout PCB](https://github.com/arthurwolf/extension-boards/blob/main/src/glcd-breakout/attempt/versions/v15/glcd-breakout.kicad_pcb)
- [Matching schematic in the v15 package, title revision v10](https://github.com/arthurwolf/extension-boards/blob/main/src/glcd-breakout/attempt/versions/v15/glcd-breakout.kicad_sch)
- [Selected schematic netlist](https://github.com/arthurwolf/extension-boards/blob/main/src/glcd-breakout/attempt/versions/v15/exports/schematic-netlist.xml)
- [Original panel primary schematic, 2013-04-16](https://reprap.org/mediawiki/images/5/51/RRD_FULL_GRAPHIC_SMART_CONTROLER_SCHEMATIC.pdf)
- [Specification and retained limitations](https://github.com/arthurwolf/extension-boards/blob/main/src/glcd-breakout/specs.md)
- [Architecture and source decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/glcd-breakout/design.md)
- [Component review](https://github.com/arthurwolf/extension-boards/blob/main/src/glcd-breakout/component-review.md)
- [V2 configuration example](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/ConfigSamples/config-3d.ini)
- [All extension boards](/extension-boards)

The selected-revision engineering repository was unavailable to anonymous readers when checked. Its source links are retained for provenance; an accessible matching source release has not been verified. Firmware and historical-board links are separate sources.

<details markdown="1">
<summary>Supplementary views and development history</summary>

{% include _includes/extension-board-visuals.html slug="glcd-breakout" %}

Older source amendments, component substitution trials and future connector upgrade requests are development history. They do not change the revision selected by this guide.

</details>
