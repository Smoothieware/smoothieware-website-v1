---
layout: default
title: "Differential SPI LVDS extender"
permalink: /extensions/historical-differential-spi-lvds-extender
---

# Differential SPI LVDS extender

This historical paired-layout circuit translates SPI MOSI, clock and chip select into LVDS toward a peripheral and translates MISO in the reverse direction. DSLVDS1001 line drivers and DS90LT012 receivers are present. It extends one fixed-direction SPI link, not arbitrary seven-wire GPIO and not Ethernet.


**Power conflict — do not connect a conventional host 5 V supply.** The retained Eagle board connects the VDD contacts of all eight listed LVDS devices to the net named `5V0`. The listed DSLVDS1001 and DS90LT012A parts have a 4 V absolute maximum supply; their recommended supply ranges are 3.0–3.6 V and 2.7–3.6 V respectively. A net name does not prove the voltage applied to an assembled board, but this source is not a qualified 5 V installation. Resolve the fitted parts and complete supply topology before powering it. See the [TI DSLVDS1001 datasheet](https://www.ti.com/lit/gpn/DSLVDS1001) and [TI DS90LT012A datasheet](https://www.ti.com/lit/ds/symlink/ds90lt012a.pdf).

**Additional receiver-loading conflict:** the selected U6–U9 are **DS90LT012ATMF**, whose integrated termination is nominally 102 Ω. Native R1–R4 each add 100 Ω directly across one receiver's input pair: R1 at U8/MOSI, R2 at U7/CS, R3 at U6/SCK and R4 at U9/MISO. Each nominal parallel load is therefore about **50.5 Ω**. The DSLVDS1001's guaranteed 250 mV minimum differential output is specified into 100 Ω; that guarantee cannot be assumed for this roughly halved load. This establishes an unresolved margin requirement, not proof that an assembled link necessarily works or fails.

G1.1 is an isolated `N$19` contact in the selected board. The separate `3V3` net reaches JP1.2/JP2.2/G2.1 but does not power the ICs on `5V0`. Applying 3.3 V to an assumed host contact 1 therefore does not resolve the supply path. A custom 3.3 V feed into `5V0` would still leave double termination unresolved. Do not remove components or alter supplies from this guide; a source-reviewed corrected population and supply/timing plan are needed first. Existing MAX31855 firmware support does not qualify this hardware.

## Documented revision and original host

This guide documents the **historical Ccecil source snapshot**, pinned by the local Smoothieboard2 parent, rather than a modern replacement board. [The exact upstream revision](https://github.com/Ccecil/LVDS_SPI/tree/da5f05c83be2a4cb1d0fb3b8869efeebea22bc6d) identifies the retained design. A repository commit is not an assembly revision or evidence of current production. The source targets the Smoothieboard V2/Gadgeteer era. That intended generation does not prove compatibility with every later V2 Prime board, cable or firmware build.

## Interfaces, power and limitations

The original Fusion archive contains both Eagle board and schematic XML. G1/G2 are Gadgeteer connectors; J1/J2 are RJ45 endpoints; JP1/JP2 are seven-contact local headers. J1/J2 pins 1/2 are MOSI+/−, 3/6 CS+/−, 4/5 SCK+/−, 7/8 MISO−/+. The board contains100-ohm receiver resistors. JP1/JP2 use1 5 V, 2 3.3 V, 3 ground, 4 SCK, 5 MISO, 6 MOSI, 7 CS, with endpoint suffixes distinguishing the sides. G1 contact 1 is the isolated auto-named net N$19, not the 3.3 V rail; do not assume it supplies the converter ICs. Cable length, data rate and supply margin are not established.

## Board-reference diagram

**DO NOT ENERGIZE from these reference sheets.** All eight source IC VDD contacts connect to the net named 5V0, despite the listed transmitter and receiver operating ranges of 3.0–3.6 V and 2.7–3.6 V. The separate 3V3 rail does not resolve that IC supply path. The receiver termination conflict described above also remains unresolved; changing a supply alone does not qualify the link.

These sheets retain the source abstract and numbered component contacts. JP3 is missing from that abstract and is therefore shown with a labelled native-source contact overlay; no replacement connector body or mating geometry is invented. The custom RJ45 interfaces are **not Ethernet or PoE**.

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-overview" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/overview.svg" title="Historical differential-SPI reference overview" alt="Historical differential-SPI reference overview — non-energizable historical source reference" caption="Non-energizable source reference. Fixed-direction LVDS paths are not arbitrary GPIO or network interfaces. Supply and receiver-loading conflicts remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-power-limits" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/power-limits.svg" title="Supply and receiver-loading conflicts" alt="Supply and receiver-loading conflicts — non-energizable historical source reference" caption="DO NOT ENERGIZE. Source 5V0 feeds all eight ICs; the separate 3V3 rail does not power them. Nominal 102 Ω integrated termination with an external 100 Ω path gives about 50.5 Ω, outside the cited 100 Ω driver guarantee." width=420 %}

### Gadgeteer and local signal contacts

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-g1-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/g1-pins-1.svg" title="G1 source contacts · group 1" alt="G1 source contacts · group 1 — non-energizable historical source reference" caption="Numbered source nets and pin functions only. Separate 5V0/3V3 supply paths, signal directions and isolated contacts must not be collapsed into a conventional cable map. No Prime mating or powered installation is qualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-g1-pins-2" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/g1-pins-2.svg" title="G1 source contacts · group 2" alt="G1 source contacts · group 2 — non-energizable historical source reference" caption="Numbered source nets and pin functions only. Separate 5V0/3V3 supply paths, signal directions and isolated contacts must not be collapsed into a conventional cable map. No Prime mating or powered installation is qualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-g2-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/g2-pins-1.svg" title="G2 source contacts · group 1" alt="G2 source contacts · group 1 — non-energizable historical source reference" caption="Numbered source nets and pin functions only. Separate 5V0/3V3 supply paths, signal directions and isolated contacts must not be collapsed into a conventional cable map. No Prime mating or powered installation is qualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-g2-pins-2" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/g2-pins-2.svg" title="G2 source contacts · group 2" alt="G2 source contacts · group 2 — non-energizable historical source reference" caption="Numbered source nets and pin functions only. Separate 5V0/3V3 supply paths, signal directions and isolated contacts must not be collapsed into a conventional cable map. No Prime mating or powered installation is qualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-jp1-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/jp1-pins-1.svg" title="JP1 source contacts · group 1" alt="JP1 source contacts · group 1 — non-energizable historical source reference" caption="Numbered source nets and pin functions only. Separate 5V0/3V3 supply paths, signal directions and isolated contacts must not be collapsed into a conventional cable map. No Prime mating or powered installation is qualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-jp1-pins-2" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/jp1-pins-2.svg" title="JP1 source contacts · group 2" alt="JP1 source contacts · group 2 — non-energizable historical source reference" caption="Numbered source nets and pin functions only. Separate 5V0/3V3 supply paths, signal directions and isolated contacts must not be collapsed into a conventional cable map. No Prime mating or powered installation is qualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-jp2-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/jp2-pins-1.svg" title="JP2 source contacts · group 1" alt="JP2 source contacts · group 1 — non-energizable historical source reference" caption="Numbered source nets and pin functions only. Separate 5V0/3V3 supply paths, signal directions and isolated contacts must not be collapsed into a conventional cable map. No Prime mating or powered installation is qualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-jp2-pins-2" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/jp2-pins-2.svg" title="JP2 source contacts · group 2" alt="JP2 source contacts · group 2 — non-energizable historical source reference" caption="Numbered source nets and pin functions only. Separate 5V0/3V3 supply paths, signal directions and isolated contacts must not be collapsed into a conventional cable map. No Prime mating or powered installation is qualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-jp3-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/jp3-pins-1.svg" title="JP3 native-source contact overlay" alt="JP3 native-source contact overlay — non-energizable historical source reference" caption="JP3 is absent from the retained abstract. The labelled overlay locates native-source contacts without claiming a verified connector body, physical mating face or assembled connection." width=420 %}

### Custom differential cable endpoints

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-j1-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/j1-pins-1.svg" title="Custom RJ45 J1 · contact group 1" alt="Custom RJ45 J1 · contact group 1 — non-energizable historical source reference" caption="Custom LVDS signal assignment, not Ethernet or PoE. Pair polarity, cable orientation, common reference and end-to-end timing require source-matched qualification; do not connect network equipment." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-j1-pins-2" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/j1-pins-2.svg" title="Custom RJ45 J1 · contact group 2" alt="Custom RJ45 J1 · contact group 2 — non-energizable historical source reference" caption="Custom LVDS signal assignment, not Ethernet or PoE. Pair polarity, cable orientation, common reference and end-to-end timing require source-matched qualification; do not connect network equipment." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-j2-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/j2-pins-1.svg" title="Custom RJ45 J2 · contact group 1" alt="Custom RJ45 J2 · contact group 1 — non-energizable historical source reference" caption="Custom LVDS signal assignment, not Ethernet or PoE. Pair polarity, cable orientation, common reference and end-to-end timing require source-matched qualification; do not connect network equipment." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-j2-pins-2" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/j2-pins-2.svg" title="Custom RJ45 J2 · contact group 2" alt="Custom RJ45 J2 · contact group 2 — non-energizable historical source reference" caption="Custom LVDS signal assignment, not Ethernet or PoE. Pair polarity, cable orientation, common reference and end-to-end timing require source-matched qualification; do not connect network equipment." width=420 %}

### Transmitter and receiver contacts

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-u2-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/u2-pins-1.svg" title="LVDS component U2" alt="LVDS component U2 — non-energizable historical source reference" caption="Source component contacts and fixed signal direction. All eight IC VDD contacts are on 5V0; the retained population is not a qualified 5 V recipe. Verify fitted parts and receiver loading before any hardware redesign or powered test." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-u3-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/u3-pins-1.svg" title="LVDS component U3" alt="LVDS component U3 — non-energizable historical source reference" caption="Source component contacts and fixed signal direction. All eight IC VDD contacts are on 5V0; the retained population is not a qualified 5 V recipe. Verify fitted parts and receiver loading before any hardware redesign or powered test." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-u4-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/u4-pins-1.svg" title="LVDS component U4" alt="LVDS component U4 — non-energizable historical source reference" caption="Source component contacts and fixed signal direction. All eight IC VDD contacts are on 5V0; the retained population is not a qualified 5 V recipe. Verify fitted parts and receiver loading before any hardware redesign or powered test." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-u5-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/u5-pins-1.svg" title="LVDS component U5" alt="LVDS component U5 — non-energizable historical source reference" caption="Source component contacts and fixed signal direction. All eight IC VDD contacts are on 5V0; the retained population is not a qualified 5 V recipe. Verify fitted parts and receiver loading before any hardware redesign or powered test." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-u6-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/u6-pins-1.svg" title="LVDS component U6" alt="LVDS component U6 — non-energizable historical source reference" caption="Source component contacts and fixed signal direction. All eight IC VDD contacts are on 5V0; the retained population is not a qualified 5 V recipe. Verify fitted parts and receiver loading before any hardware redesign or powered test." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-u7-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/u7-pins-1.svg" title="LVDS component U7" alt="LVDS component U7 — non-energizable historical source reference" caption="Source component contacts and fixed signal direction. All eight IC VDD contacts are on 5V0; the retained population is not a qualified 5 V recipe. Verify fitted parts and receiver loading before any hardware redesign or powered test." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-u8-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/u8-pins-1.svg" title="LVDS component U8" alt="LVDS component U8 — non-energizable historical source reference" caption="Source component contacts and fixed signal direction. All eight IC VDD contacts are on 5V0; the retained population is not a qualified 5 V recipe. Verify fitted parts and receiver loading before any hardware redesign or powered test." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-u9-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/u9-pins-1.svg" title="LVDS component U9" alt="LVDS component U9 — non-energizable historical source reference" caption="Source component contacts and fixed signal direction. All eight IC VDD contacts are on 5V0; the retained population is not a qualified 5 V recipe. Verify fitted parts and receiver loading before any hardware redesign or powered test." width=420 %}

### Termination and decoupling details

<details markdown="1">
<summary>Individual resistor and capacitor source contacts</summary>

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-r1-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/r1-pins-1.svg" title="Receiver termination R1" alt="Receiver termination R1 — non-energizable historical source reference" caption="Source 100 Ω receiver-input path. With the listed receiver’s nominal 102 Ω integrated termination, the parallel load is about 50.5 Ω; the driver guarantee at 100 Ω does not qualify that load." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-r2-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/r2-pins-1.svg" title="Receiver termination R2" alt="Receiver termination R2 — non-energizable historical source reference" caption="Source 100 Ω receiver-input path. With the listed receiver’s nominal 102 Ω integrated termination, the parallel load is about 50.5 Ω; the driver guarantee at 100 Ω does not qualify that load." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-r3-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/r3-pins-1.svg" title="Receiver termination R3" alt="Receiver termination R3 — non-energizable historical source reference" caption="Source 100 Ω receiver-input path. With the listed receiver’s nominal 102 Ω integrated termination, the parallel load is about 50.5 Ω; the driver guarantee at 100 Ω does not qualify that load." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-r4-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/r4-pins-1.svg" title="Receiver termination R4" alt="Receiver termination R4 — non-energizable historical source reference" caption="Source 100 Ω receiver-input path. With the listed receiver’s nominal 102 Ω integrated termination, the parallel load is about 50.5 Ω; the driver guarantee at 100 Ω does not qualify that load." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-c1-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/c1-pins-1.svg" title="Capacitor C1" alt="Capacitor C1 — non-energizable historical source reference" caption="Numbered source decoupling contacts only. A source capacitor or rail label does not establish a corrected supply plan, sequencing, voltage margin or assembled behavior." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-c2-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/c2-pins-1.svg" title="Capacitor C2" alt="Capacitor C2 — non-energizable historical source reference" caption="Numbered source decoupling contacts only. A source capacitor or rail label does not establish a corrected supply plan, sequencing, voltage margin or assembled behavior." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-c3-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/c3-pins-1.svg" title="Capacitor C3" alt="Capacitor C3 — non-energizable historical source reference" caption="Numbered source decoupling contacts only. A source capacitor or rail label does not establish a corrected supply plan, sequencing, voltage margin or assembled behavior." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-c4-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/c4-pins-1.svg" title="Capacitor C4" alt="Capacitor C4 — non-energizable historical source reference" caption="Numbered source decoupling contacts only. A source capacitor or rail label does not establish a corrected supply plan, sequencing, voltage margin or assembled behavior." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-c5-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/c5-pins-1.svg" title="Capacitor C5" alt="Capacitor C5 — non-energizable historical source reference" caption="Numbered source decoupling contacts only. A source capacitor or rail label does not establish a corrected supply plan, sequencing, voltage margin or assembled behavior." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-c6-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/c6-pins-1.svg" title="Capacitor C6" alt="Capacitor C6 — non-energizable historical source reference" caption="Numbered source decoupling contacts only. A source capacitor or rail label does not establish a corrected supply plan, sequencing, voltage margin or assembled behavior." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-c7-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/c7-pins-1.svg" title="Capacitor C7" alt="Capacitor C7 — non-energizable historical source reference" caption="Numbered source decoupling contacts only. A source capacitor or rail label does not establish a corrected supply plan, sequencing, voltage margin or assembled behavior." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-c8-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/c8-pins-1.svg" title="Capacitor C8" alt="Capacitor C8 — non-energizable historical source reference" caption="Numbered source decoupling contacts only. A source capacitor or rail label does not establish a corrected supply plan, sequencing, voltage margin or assembled behavior." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-c9-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/c9-pins-1.svg" title="Capacitor C9" alt="Capacitor C9 — non-energizable historical source reference" caption="Numbered source decoupling contacts only. A source capacitor or rail label does not establish a corrected supply plan, sequencing, voltage margin or assembled behavior." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-reference-c10-pins-1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/annotated-reference/c10-pins-1.svg" title="Capacitor C10" alt="Capacitor C10 — non-energizable historical source reference" caption="Numbered source decoupling contacts only. A source capacitor or rail label does not establish a corrected supply plan, sequencing, voltage margin or assembled behavior." width=420 %}

</details>

### Supplementary logical circuits

These independently drawn circuit sheets explain the selected source connectivity. They do not copy the original board artwork, placement or native files and supplement the source-matched board-reference sheets above. Use the contact inventory and all companion sheets together. Physical cable orientation, ratings, installed operation and the full Prime/peripheral wiring remain unverified.

Source: [original Fusion archive](https://github.com/Ccecil/LVDS_SPI/blob/da5f05c83be2a4cb1d0fb3b8869efeebea22bc6d/LVDS_SPI/LVDS_SPI%20v28.f3z), revision `da5f05c83be2a4cb1d0fb3b8869efeebea22bc6d`. The Eagle board data used here is extracted from that archive. No original-artwork redistribution grant has been established.

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-power-conflict" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/power-conflict.svg" title="Source supply is not power-ready" alt="Source supply is not power-ready — logical connections, not physical board layout" caption="Supplementary factual circuit only. The corrected supply/termination plan and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-u2" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/u2.svg" title="Host MOSI driver" alt="Host MOSI driver — logical connections, not physical board layout" caption="Supplementary factual circuit only. The corrected supply/termination plan and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-u3" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/u3.svg" title="Host CS driver" alt="Host CS driver — logical connections, not physical board layout" caption="Supplementary factual circuit only. The corrected supply/termination plan and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-u4" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/u4.svg" title="Host SCK driver" alt="Host SCK driver — logical connections, not physical board layout" caption="Supplementary factual circuit only. The corrected supply/termination plan and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-u5" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/u5.svg" title="Remote MISO driver" alt="Remote MISO driver — logical connections, not physical board layout" caption="Supplementary factual circuit only. The corrected supply/termination plan and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-u6" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/u6.svg" title="Remote SCK receiver" alt="Remote SCK receiver — logical connections, not physical board layout" caption="Supplementary factual circuit only. The corrected supply/termination plan and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-u7" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/u7.svg" title="Remote CS receiver" alt="Remote CS receiver — logical connections, not physical board layout" caption="Supplementary factual circuit only. The corrected supply/termination plan and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-u8" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/u8.svg" title="Remote MOSI receiver" alt="Remote MOSI receiver — logical connections, not physical board layout" caption="Supplementary factual circuit only. The corrected supply/termination plan and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-u9" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/u9.svg" title="Host MISO receiver" alt="Host MISO receiver — logical connections, not physical board layout" caption="Supplementary factual circuit only. The corrected supply/termination plan and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-g1-signals" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/g1-signals.svg" title="G1 logic breakout" alt="G1 logic breakout — logical connections, not physical board layout" caption="Supplementary factual circuit only. The corrected supply/termination plan and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-g1-power" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/g1-power.svg" title="G1 supply nodes" alt="G1 supply nodes — logical connections, not physical board layout" caption="Supplementary factual circuit only. The corrected supply/termination plan and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-g2-signals" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/g2-signals.svg" title="G2 logic breakout" alt="G2 logic breakout — logical connections, not physical board layout" caption="Supplementary factual circuit only. The corrected supply/termination plan and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-g2-power" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/g2-power.svg" title="G2 supply nodes" alt="G2 supply nodes — logical connections, not physical board layout" caption="Supplementary factual circuit only. The corrected supply/termination plan and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-3v3" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/3v3.svg" title="Source 3V3 nodes" alt="Source 3V3 nodes — logical connections, not physical board layout" caption="Supplementary factual circuit only. The corrected supply/termination plan and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-supply-input" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/supply-input.svg" title="Auxiliary supply nodes" alt="Auxiliary supply nodes — logical connections, not physical board layout" caption="Supplementary factual circuit only. The corrected supply/termination plan and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-ic-power-2" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/ic-power-2.svg" title="IC source supply nodes" alt="IC source supply nodes — logical connections, not physical board layout" caption="Supplementary factual circuit only. The corrected supply/termination plan and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-ic-power-6" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/ic-power-6.svg" title="IC source supply nodes" alt="IC source supply nodes — logical connections, not physical board layout" caption="Supplementary factual circuit only. The corrected supply/termination plan and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-r1" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/r1.svg" title="R1 external termination" alt="R1 external termination — logical connections, not physical board layout" caption="Supplementary factual circuit only. The corrected supply/termination plan and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-r2" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/r2.svg" title="R2 external termination" alt="R2 external termination — logical connections, not physical board layout" caption="Supplementary factual circuit only. The corrected supply/termination plan and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-r3" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/r3.svg" title="R3 external termination" alt="R3 external termination — logical connections, not physical board layout" caption="Supplementary factual circuit only. The corrected supply/termination plan and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-r4" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/r4.svg" title="R4 external termination" alt="R4 external termination — logical connections, not physical board layout" caption="Supplementary factual circuit only. The corrected supply/termination plan and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-g1-aux" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/g1-aux.svg" title="Source auxiliary header contacts" alt="Source auxiliary header contacts — logical connections, not physical board layout" caption="Supplementary factual circuit only. The corrected supply/termination plan and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-g2-aux" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/g2-aux.svg" title="Source auxiliary header contacts" alt="Source auxiliary header contacts — logical connections, not physical board layout" caption="Supplementary factual circuit only. The corrected supply/termination plan and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-differential-spi-lvds-extender-factual-boundaries" src="/images/extensions/historical-differential-spi-lvds-extender/guides/factual-circuits/boundaries.svg" title="LVDS source qualification limits" alt="LVDS source qualification limits — logical connections, not physical board layout" caption="Supplementary factual circuit only. The corrected supply/termination plan and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

### Numbered source contacts and controls

These are intended source net memberships, not measured electrical behaviour. Unassigned/unconnected pads must not receive invented connections. Auto-generated net names require schematic interpretation; they are not cable colours. Repeated footprints or pad numbers require geometric identity checks before wiring.

| Source member | Connector/control | Source label | Contact → source net |
|---|---|---|---|
| LVDS_SPI v28.f3z | G1 | SHF-105-01-X-D-SM | 1: N$19; 2: 5V0; 3: GPIO2; 4: GPIO3; 5: GPIO1; 6: CS; 7: MOSI; 8: MISO; 9: SCK; 10: GND |
| LVDS_SPI v28.f3z | J1 | RJ45 | 8: MISO_M_P; 7: MISO_M_N; 6: CS_N; 4: SCK_P; 2: MOSI_N; 5: SCK_N; 3: CS_P; 1: MOSI_P |
| LVDS_SPI v28.f3z | J2 | RJ45 | 8: MISO_P; 7: MISO_N; 6: CS_S_N; 4: SCK_S_P; 2: MOSI_S_N; 5: SCK_S_N; 3: CS_S_P; 1: MOSI_S_P |
| LVDS_SPI v28.f3z | JP1 | 1X07 | 1: 5V0; 2: 3V3; 3: GND; 4: SCK_; 5: MISO_; 6: MOSI_; 7: CS_ |
| LVDS_SPI v28.f3z | JP2 | 1X07 | 1: 5V0; 2: 3V3; 3: GND; 4: SCK; 5: MISO; 6: MOSI; 7: CS |
| LVDS_SPI v28.f3z | G2 | SHF-105-01-X-D-SM | 1: 3V3; 2: 5V0; 3: N/C; 4: N$24; 5: N$20; 6: CS_; 7: MOSI_; 8: MISO_; 9: SCK_; 10: GND |
| LVDS_SPI v28.f3z | JP3 | 1X02 | 1: GND; 2: 5V0 |

## Practical use with Smoothieboard V2 Prime

**Pending and unaccepted:** no complete practical Prime → historical board → named peripheral drawing has been accepted. Unknown conductors remain unresolved rather than routed by guesswork.

For a remote SPI sensor experiment, identify the master and slave halves from their driver/receiver direction rather than RJ45 appearance. Use a continuity-checked straight-through cable preserving the four twisted pairs and never connect to network equipment. Connect one supported SPI peripheral to the slave-side local signals. Prime SPI socket, chip-select mux, both endpoint power sources and delay budget still need verification; do not copy the modern differential-SPI board geometry or its cable-power scheme.

Conditional GF/J37 examples refer only to retained **P12 Prime2590**: contacts 1/2/10 are limited 3.3 V/limited 5 V/ground; contacts 3–9 are PB1/PJ4/PA4/PG0/PJ3/PG1/PJ2. The host header is unshrouded. Verify physical numbering, polarity, per-rail current allowance and free-pin ownership before connection. This pin map does not establish hardware SPI, UART, CAN or PWM availability on an arbitrary contact.

## Smoothieware support and example boundary

### SPI transport: exact supported sensor contract, incompatible selected interface
The retained native 5V0 rail powers DSLVDS1001/DS90LT012 despite their 3.3 V operating domain and 4 V absolute maximum. Do not energize the selected population as a 5 V recipe. JP1/JP2 expose supply, ground and SCK/MISO/MOSI/CS, but the RJ45 differential pairs do not themselves carry a ground reference. A3.3 V redesign is a hardware change, not a firmware setting.

The transport has no register driver. For a separately qualified mode0/1 MHz MAX31855 interface, the real firmware settings are:

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

Prime GE/J36 SPI1 COPI/CIPO/SCK are contacts 7/8/9 and PD15 is contact6; that defines the host bus allocation, not an accepted historical-board cable. After the entire adapted link and named sensor are qualified, `M105` observes XT and plain `M305` reports sensor diagnostics. No heater is driven. The driver fixes mode0 at 1 MHz and exposes neither lower clock nor data/clock inversion/CS-delay configuration; readings_per_second is polling, not bus frequency. The invalid sentinel-100 is not a measured temperature. This is an exact conditional sensor software contract, explicitly not a working selected-board recipe. If required link-compatible timing/polarity support is absent email **wolf.arthur@gamil.com**.

These instructions identify source behavior at SmoothieV2 commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`; they do not identify the installed build or prove target execution. Reserve every listed pin and command in the complete configuration. Merge entries into existing sections rather than duplicating sections. These software instructions do not verify powered hardware or provide a complete wiring diagram.

## Remaining requirements

Exact host G1/G2 mapping, historical connector orientation, power routing, end-to-end delay/skew and cable distance remain unresolved. Selected-link timing and polarity compatibility are unverified; the separate MAX31855 application driver exists, as documented above. The complete Prime/peripheral wiring diagram, corrected electrical interface, public source/link availability and desktop/narrow rendered usability remain open. The board-reference sheets identify source contacts without resolving the supply or termination conflicts.

## Sources and attribution

- [Ccecil upstream project](https://github.com/Ccecil/LVDS_SPI)
- [Pinned original source](https://github.com/Ccecil/LVDS_SPI/tree/da5f05c83be2a4cb1d0fb3b8869efeebea22bc6d)
- [Original LVDS_SPI v28.f3z](https://github.com/Ccecil/LVDS_SPI/blob/da5f05c83be2a4cb1d0fb3b8869efeebea22bc6d/LVDS_SPI/LVDS_SPI%20v28.f3z)

The retained inventory did not identify a project license file. Source attribution is retained for these locally prepared reference sheets. Absence of a license file is not public-domain permission; external redistribution rights remain unresolved. Modern counterpart guides are functional comparisons only and do not establish matching pinouts.

[All extension boards](/extension-boards)
