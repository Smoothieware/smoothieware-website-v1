---
layout: default
title: "Differential SPI LVDS extender"
permalink: /extensions/historical-differential-spi-lvds-extender
---

# Differential SPI LVDS extender

This historical paired-layout circuit translates SPI MOSI, clock and chip select into LVDS toward a peripheral and translates MISO in the reverse direction. DSLVDS1001 line drivers and DS90LT012 receivers are present. It extends one fixed-direction SPI link, not arbitrary seven-wire GPIO and not Ethernet.


**Power warning: do not power this board from a 5 V supply, and do not connect a conventional host 5 V supply.** The Eagle board connects the VDD contacts of all eight listed LVDS devices to the net named `5V0`. The DSLVDS1001 and DS90LT012A parts have a 4 V absolute maximum supply; their recommended supply ranges are 3.0–3.6 V and 2.7–3.6 V respectively. See the [TI DSLVDS1001 datasheet](https://www.ti.com/lit/gpn/DSLVDS1001) and [TI DS90LT012A datasheet](https://www.ti.com/lit/ds/symlink/ds90lt012a.pdf).

**Receiver loading:** U6–U9 are **DS90LT012ATMF**, whose integrated termination is nominally 102 Ω. R1–R4 each add 100 Ω directly across one receiver's input pair: R1 at U8/MOSI, R2 at U7/CS, R3 at U6/SCK and R4 at U9/MISO. Each nominal parallel load is therefore about **50.5 Ω**. The DSLVDS1001's guaranteed 250 mV minimum differential output is specified into 100 Ω; that guarantee does not apply to this roughly halved load.

G1.1 is an isolated `N$19` contact. The separate `3V3` net reaches JP1.2/JP2.2/G2.1 but does not power the ICs on `5V0`. Applying 3.3 V to an assumed host contact 1 therefore does not power the ICs. Feeding 3.3 V into `5V0` would still leave the double termination in place. MAX31855 firmware support does not make this board compatible with that sensor.

## Design source and original host

This guide documents the **historical [Ccecil design source](https://github.com/Ccecil/LVDS_SPI/tree/da5f05c83be2a4cb1d0fb3b8869efeebea22bc6d)**. The source targets the Smoothieboard V2/Gadgeteer era. That does not make it compatible with every later V2 Prime board, cable or firmware build.

## Interfaces, power and limitations

The original Fusion archive contains both Eagle board and schematic XML. G1/G2 are Gadgeteer connectors; J1/J2 are RJ45 endpoints; JP1/JP2 are seven-contact local headers. J1/J2 pins 1/2 are MOSI+/−, 3/6 CS+/−, 4/5 SCK+/−, 7/8 MISO−/+. The board contains 100 Ω receiver resistors. JP1/JP2 use 1 5 V, 2 3.3 V, 3 ground, 4 SCK, 5 MISO, 6 MOSI, 7 CS, with endpoint suffixes distinguishing the sides. G1 contact 1 is the isolated auto-named net N$19, not the 3.3 V rail; do not assume it supplies the converter ICs. No cable length or data rate is specified.

## Board-reference diagram

**Do not energize the board from a 5 V supply.** All eight IC VDD contacts connect to the net named 5V0, while the transmitter and receiver operating ranges are 3.0–3.6 V and 2.7–3.6 V. The separate 3V3 rail does not feed that IC supply path. The receiver termination is also doubled, as described above; changing the supply alone does not correct it.

These sheets show the board and numbered component contacts. JP3 is shown as a labelled contact overlay, without a connector body. The custom RJ45 interfaces are **not Ethernet or PoE**.

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-overview" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/overview.png" title="Historical differential-SPI reference overview" alt="Historical differential-SPI reference overview — historical board reference" caption="Fixed-direction LVDS paths are not arbitrary GPIO or network interfaces. Do not power the board from 5 V." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-power-limits" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/power-limits.png" title="Supply and receiver-loading conflicts" alt="Supply and receiver-loading conflicts — historical board reference" caption="Do not power from 5 V. The 5V0 net feeds all eight ICs; the separate 3V3 rail does not power them. Nominal 102 Ω integrated termination with an external 100 Ω path gives about 50.5 Ω, outside the 100 Ω driver guarantee." width=420 %}

### Gadgeteer and local signal contacts

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-g1-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/g1-pins-1.png" title="G1 contacts · group 1" alt="G1 contacts · group 1 — historical board reference" caption="Numbered nets and pin functions. Keep the separate 5V0/3V3 supply paths, signal directions and isolated contacts distinct; this is not a conventional cable map." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-g1-pins-2" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/g1-pins-2.png" title="G1 contacts · group 2" alt="G1 contacts · group 2 — historical board reference" caption="Numbered nets and pin functions. Keep the separate 5V0/3V3 supply paths, signal directions and isolated contacts distinct; this is not a conventional cable map." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-g2-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/g2-pins-1.png" title="G2 contacts · group 1" alt="G2 contacts · group 1 — historical board reference" caption="Numbered nets and pin functions. Keep the separate 5V0/3V3 supply paths, signal directions and isolated contacts distinct; this is not a conventional cable map." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-g2-pins-2" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/g2-pins-2.png" title="G2 contacts · group 2" alt="G2 contacts · group 2 — historical board reference" caption="Numbered nets and pin functions. Keep the separate 5V0/3V3 supply paths, signal directions and isolated contacts distinct; this is not a conventional cable map." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-jp1-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/jp1-pins-1.png" title="JP1 contacts · group 1" alt="JP1 contacts · group 1 — historical board reference" caption="Numbered nets and pin functions. Keep the separate 5V0/3V3 supply paths, signal directions and isolated contacts distinct; this is not a conventional cable map." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-jp1-pins-2" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/jp1-pins-2.png" title="JP1 contacts · group 2" alt="JP1 contacts · group 2 — historical board reference" caption="Numbered nets and pin functions. Keep the separate 5V0/3V3 supply paths, signal directions and isolated contacts distinct; this is not a conventional cable map." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-jp2-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/jp2-pins-1.png" title="JP2 contacts · group 1" alt="JP2 contacts · group 1 — historical board reference" caption="Numbered nets and pin functions. Keep the separate 5V0/3V3 supply paths, signal directions and isolated contacts distinct; this is not a conventional cable map." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-jp2-pins-2" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/jp2-pins-2.png" title="JP2 contacts · group 2" alt="JP2 contacts · group 2 — historical board reference" caption="Numbered nets and pin functions. Keep the separate 5V0/3V3 supply paths, signal directions and isolated contacts distinct; this is not a conventional cable map." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-jp3-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/jp3-pins-1.png" title="JP3 contact overlay" alt="JP3 contact overlay — historical board reference" caption="The labelled overlay locates the JP3 contacts; it does not show a connector body or mating face." width=420 %}

### Custom differential cable endpoints

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-j1-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/j1-pins-1.png" title="Custom RJ45 J1 · contact group 1" alt="Custom RJ45 J1 · contact group 1 — historical board reference" caption="Custom LVDS signal assignment, not Ethernet or PoE. Check pair polarity, cable orientation, common reference and end-to-end timing; do not connect network equipment." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-j1-pins-2" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/j1-pins-2.png" title="Custom RJ45 J1 · contact group 2" alt="Custom RJ45 J1 · contact group 2 — historical board reference" caption="Custom LVDS signal assignment, not Ethernet or PoE. Check pair polarity, cable orientation, common reference and end-to-end timing; do not connect network equipment." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-j2-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/j2-pins-1.png" title="Custom RJ45 J2 · contact group 1" alt="Custom RJ45 J2 · contact group 1 — historical board reference" caption="Custom LVDS signal assignment, not Ethernet or PoE. Check pair polarity, cable orientation, common reference and end-to-end timing; do not connect network equipment." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-j2-pins-2" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/j2-pins-2.png" title="Custom RJ45 J2 · contact group 2" alt="Custom RJ45 J2 · contact group 2 — historical board reference" caption="Custom LVDS signal assignment, not Ethernet or PoE. Check pair polarity, cable orientation, common reference and end-to-end timing; do not connect network equipment." width=420 %}

### Transmitter and receiver contacts

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-u2-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/u2-pins-1.png" title="LVDS component U2" alt="LVDS component U2 — historical board reference" caption="Component contacts and fixed signal direction. All eight IC VDD contacts are on 5V0; do not power them from 5 V." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-u3-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/u3-pins-1.png" title="LVDS component U3" alt="LVDS component U3 — historical board reference" caption="Component contacts and fixed signal direction. All eight IC VDD contacts are on 5V0; do not power them from 5 V." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-u4-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/u4-pins-1.png" title="LVDS component U4" alt="LVDS component U4 — historical board reference" caption="Component contacts and fixed signal direction. All eight IC VDD contacts are on 5V0; do not power them from 5 V." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-u5-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/u5-pins-1.png" title="LVDS component U5" alt="LVDS component U5 — historical board reference" caption="Component contacts and fixed signal direction. All eight IC VDD contacts are on 5V0; do not power them from 5 V." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-u6-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/u6-pins-1.png" title="LVDS component U6" alt="LVDS component U6 — historical board reference" caption="Component contacts and fixed signal direction. All eight IC VDD contacts are on 5V0; do not power them from 5 V." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-u7-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/u7-pins-1.png" title="LVDS component U7" alt="LVDS component U7 — historical board reference" caption="Component contacts and fixed signal direction. All eight IC VDD contacts are on 5V0; do not power them from 5 V." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-u8-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/u8-pins-1.png" title="LVDS component U8" alt="LVDS component U8 — historical board reference" caption="Component contacts and fixed signal direction. All eight IC VDD contacts are on 5V0; do not power them from 5 V." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-u9-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/u9-pins-1.png" title="LVDS component U9" alt="LVDS component U9 — historical board reference" caption="Component contacts and fixed signal direction. All eight IC VDD contacts are on 5V0; do not power them from 5 V." width=420 %}

### Termination and decoupling details

<details markdown="1">
<summary>Individual resistor and capacitor contacts</summary>

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-r1-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/r1-pins-1.png" title="Receiver termination R1" alt="Receiver termination R1 — historical board reference" caption="100 Ω receiver-input path. With the receiver’s nominal 102 Ω integrated termination, the parallel load is about 50.5 Ω, below the 100 Ω load of the driver guarantee." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-r2-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/r2-pins-1.png" title="Receiver termination R2" alt="Receiver termination R2 — historical board reference" caption="100 Ω receiver-input path. With the receiver’s nominal 102 Ω integrated termination, the parallel load is about 50.5 Ω, below the 100 Ω load of the driver guarantee." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-r3-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/r3-pins-1.png" title="Receiver termination R3" alt="Receiver termination R3 — historical board reference" caption="100 Ω receiver-input path. With the receiver’s nominal 102 Ω integrated termination, the parallel load is about 50.5 Ω, below the 100 Ω load of the driver guarantee." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-r4-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/r4-pins-1.png" title="Receiver termination R4" alt="Receiver termination R4 — historical board reference" caption="100 Ω receiver-input path. With the receiver’s nominal 102 Ω integrated termination, the parallel load is about 50.5 Ω, below the 100 Ω load of the driver guarantee." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-c1-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/c1-pins-1.png" title="Capacitor C1" alt="Capacitor C1 — historical board reference" caption="Numbered decoupling contacts. A capacitor or rail label does not indicate a safe supply voltage." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-c2-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/c2-pins-1.png" title="Capacitor C2" alt="Capacitor C2 — historical board reference" caption="Numbered decoupling contacts. A capacitor or rail label does not indicate a safe supply voltage." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-c3-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/c3-pins-1.png" title="Capacitor C3" alt="Capacitor C3 — historical board reference" caption="Numbered decoupling contacts. A capacitor or rail label does not indicate a safe supply voltage." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-c4-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/c4-pins-1.png" title="Capacitor C4" alt="Capacitor C4 — historical board reference" caption="Numbered decoupling contacts. A capacitor or rail label does not indicate a safe supply voltage." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-c5-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/c5-pins-1.png" title="Capacitor C5" alt="Capacitor C5 — historical board reference" caption="Numbered decoupling contacts. A capacitor or rail label does not indicate a safe supply voltage." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-c6-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/c6-pins-1.png" title="Capacitor C6" alt="Capacitor C6 — historical board reference" caption="Numbered decoupling contacts. A capacitor or rail label does not indicate a safe supply voltage." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-c7-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/c7-pins-1.png" title="Capacitor C7" alt="Capacitor C7 — historical board reference" caption="Numbered decoupling contacts. A capacitor or rail label does not indicate a safe supply voltage." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-c8-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/c8-pins-1.png" title="Capacitor C8" alt="Capacitor C8 — historical board reference" caption="Numbered decoupling contacts. A capacitor or rail label does not indicate a safe supply voltage." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-c9-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/c9-pins-1.png" title="Capacitor C9" alt="Capacitor C9 — historical board reference" caption="Numbered decoupling contacts. A capacitor or rail label does not indicate a safe supply voltage." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-c10-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/c10-pins-1.png" title="Capacitor C10" alt="Capacitor C10 — historical board reference" caption="Numbered decoupling contacts. A capacitor or rail label does not indicate a safe supply voltage." width=420 %}

</details>

### Supplementary logical circuits

These circuit sheets explain the connectivity and supplement the board-reference sheets above. They are not copies of the original board artwork or placement. Use the contact inventory and all companion sheets together.

Source: [original Fusion archive](https://github.com/Ccecil/LVDS_SPI/blob/da5f05c83be2a4cb1d0fb3b8869efeebea22bc6d/LVDS_SPI/LVDS_SPI%20v28.f3z), which contains the Eagle board data used here.

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-power-conflict" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/power-conflict.png" title="IC supply warning" alt="IC supply warning — logical connections, not physical board layout" caption="Circuit diagram only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-u2" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/u2.png" title="Host MOSI driver" alt="Host MOSI driver — logical connections, not physical board layout" caption="Circuit diagram only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-u3" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/u3.png" title="Host CS driver" alt="Host CS driver — logical connections, not physical board layout" caption="Circuit diagram only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-u4" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/u4.png" title="Host SCK driver" alt="Host SCK driver — logical connections, not physical board layout" caption="Circuit diagram only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-u5" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/u5.png" title="Remote MISO driver" alt="Remote MISO driver — logical connections, not physical board layout" caption="Circuit diagram only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-u6" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/u6.png" title="Remote SCK receiver" alt="Remote SCK receiver — logical connections, not physical board layout" caption="Circuit diagram only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-u7" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/u7.png" title="Remote CS receiver" alt="Remote CS receiver — logical connections, not physical board layout" caption="Circuit diagram only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-u8" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/u8.png" title="Remote MOSI receiver" alt="Remote MOSI receiver — logical connections, not physical board layout" caption="Circuit diagram only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-u9" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/u9.png" title="Host MISO receiver" alt="Host MISO receiver — logical connections, not physical board layout" caption="Circuit diagram only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-g1-signals" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/g1-signals.png" title="G1 logic breakout" alt="G1 logic breakout — logical connections, not physical board layout" caption="Circuit diagram only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-g1-power" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/g1-power.png" title="G1 supply nodes" alt="G1 supply nodes — logical connections, not physical board layout" caption="Circuit diagram only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-g2-signals" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/g2-signals.png" title="G2 logic breakout" alt="G2 logic breakout — logical connections, not physical board layout" caption="Circuit diagram only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-g2-power" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/g2-power.png" title="G2 supply nodes" alt="G2 supply nodes — logical connections, not physical board layout" caption="Circuit diagram only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-3v3" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/3v3.png" title="3V3 nodes" alt="3V3 nodes — logical connections, not physical board layout" caption="Circuit diagram only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-supply-input" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/supply-input.png" title="Auxiliary supply nodes" alt="Auxiliary supply nodes — logical connections, not physical board layout" caption="Circuit diagram only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-ic-power-2" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/ic-power-2.png" title="IC supply nodes" alt="IC supply nodes — logical connections, not physical board layout" caption="Circuit diagram only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-ic-power-6" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/ic-power-6.png" title="IC supply nodes" alt="IC supply nodes — logical connections, not physical board layout" caption="Circuit diagram only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-r1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/r1.png" title="R1 external termination" alt="R1 external termination — logical connections, not physical board layout" caption="Circuit diagram only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-r2" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/r2.png" title="R2 external termination" alt="R2 external termination — logical connections, not physical board layout" caption="Circuit diagram only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-r3" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/r3.png" title="R3 external termination" alt="R3 external termination — logical connections, not physical board layout" caption="Circuit diagram only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-r4" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/r4.png" title="R4 external termination" alt="R4 external termination — logical connections, not physical board layout" caption="Circuit diagram only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-g1-aux" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/g1-aux.png" title="Auxiliary header contacts" alt="Auxiliary header contacts — logical connections, not physical board layout" caption="Circuit diagram only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-g2-aux" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/g2-aux.png" title="Auxiliary header contacts" alt="Auxiliary header contacts — logical connections, not physical board layout" caption="Circuit diagram only; it does not show connector locations or mating." width=420 %}


### Numbered contacts and controls

These are net memberships from the design files. Do not make connections to unassigned or unconnected pads. Auto-generated net names must be read against the schematic; they are not cable colours. Check repeated footprints or pad numbers by position before wiring.

| Source file | Connector/control | Label | Contact → net |
|---|---|---|---|
| LVDS_SPI v28.f3z | G1 | SHF-105-01-X-D-SM | 1: N$19; 2: 5V0; 3: GPIO2; 4: GPIO3; 5: GPIO1; 6: CS; 7: MOSI; 8: MISO; 9: SCK; 10: GND |
| LVDS_SPI v28.f3z | J1 | RJ45 | 8: MISO_M_P; 7: MISO_M_N; 6: CS_N; 4: SCK_P; 2: MOSI_N; 5: SCK_N; 3: CS_P; 1: MOSI_P |
| LVDS_SPI v28.f3z | J2 | RJ45 | 8: MISO_P; 7: MISO_N; 6: CS_S_N; 4: SCK_S_P; 2: MOSI_S_N; 5: SCK_S_N; 3: CS_S_P; 1: MOSI_S_P |
| LVDS_SPI v28.f3z | JP1 | 1X07 | 1: 5V0; 2: 3V3; 3: GND; 4: SCK_; 5: MISO_; 6: MOSI_; 7: CS_ |
| LVDS_SPI v28.f3z | JP2 | 1X07 | 1: 5V0; 2: 3V3; 3: GND; 4: SCK; 5: MISO; 6: MOSI; 7: CS |
| LVDS_SPI v28.f3z | G2 | SHF-105-01-X-D-SM | 1: 3V3; 2: 5V0; 3: N/C; 4: N$24; 5: N$20; 6: CS_; 7: MOSI_; 8: MISO_; 9: SCK_; 10: GND |
| LVDS_SPI v28.f3z | JP3 | 1X02 | 1: GND; 2: 5V0 |

## Practical use with Smoothieboard V2 Prime

For a remote SPI sensor experiment, identify the master and slave halves from their driver/receiver direction rather than RJ45 appearance. Use a continuity-checked straight-through cable preserving the four twisted pairs and never connect to network equipment. Connect one supported SPI peripheral to the slave-side local signals. Check the Prime SPI socket, chip-select mux, both endpoint power sources and the delay budget; do not copy the modern differential-SPI board geometry or its cable-power scheme.

On the GF/J37 connector of **Prime2590**, contacts 1/2/10 are limited 3.3 V/limited 5 V/ground; contacts 3–9 are PB1/PJ4/PA4/PG0/PJ3/PG1/PJ2. The host header is unshrouded. Verify physical numbering, polarity, per-rail current allowance and free-pin ownership before connection. This pin map does not establish hardware SPI, UART, CAN or PWM availability on an arbitrary contact.

## Smoothieware support and example boundary

### SPI transport and sensor example
The 5V0 rail powers the DSLVDS1001/DS90LT012 parts despite their 3.3 V operating range and 4 V absolute maximum. Do not energize the board from 5 V. JP1/JP2 expose supply, ground and SCK/MISO/MOSI/CS, but the RJ45 differential pairs do not themselves carry a ground reference. Changing the board to 3.3 V is a hardware change, not a firmware setting.

The transport has no register driver. For a mode 0, 1 MHz MAX31855 interface, the firmware settings are as follows. This is the sensor software configuration only; the board as designed is not a working setup for it.

```ini
[temperature control]
transport_tc.enable = true
transport_tc.sensor = max31855
transport_tc.spi_channel = 0
transport_tc.spi_select_pin = PD15
transport_tc.readings_per_second = 20
transport_tc.heater_pin = nc
transport_tc.designator = XT
transport_tc.tool_id = 251
```

Prime GE/J36 SPI1 COPI/CIPO/SCK are contacts 7/8/9 and PD15 is contact 6; that is the host bus allocation, not a cable for this board. With a working link and sensor, `M105` reports XT and plain `M305` reports sensor diagnostics. No heater is driven. The driver fixes mode 0 at 1 MHz and exposes neither a lower clock nor data/clock inversion or CS-delay configuration; readings_per_second is polling, not bus frequency. The invalid sentinel -100 is not a measured temperature.

Reserve every listed pin and command in the complete configuration. Merge entries into existing sections rather than duplicating sections.

## Sources and attribution

- [Ccecil upstream project](https://github.com/Ccecil/LVDS_SPI)
- [Original source repository](https://github.com/Ccecil/LVDS_SPI/tree/da5f05c83be2a4cb1d0fb3b8869efeebea22bc6d)
- [Original LVDS_SPI v28.f3z](https://github.com/Ccecil/LVDS_SPI/blob/da5f05c83be2a4cb1d0fb3b8869efeebea22bc6d/LVDS_SPI/LVDS_SPI%20v28.f3z)

No project license file accompanies the source. Source attribution is retained for these reference sheets. Absence of a license file is not public-domain permission. Modern counterpart guides are functional comparisons only and do not indicate matching pinouts.

[All extension boards](/extension-boards)
