# Cloudray MP-60 LiteMarker Pro

## Identity

Fabbulle's wiki names its fibre laser as an MP-60 LiteMarker Pro, 60 W, with a rotary axis. The page calls it “Cloudray” while separately naming JPT as the laser-module maker; retain those source roles rather than assuming the machine and module are the same product.

## Wiki evidence

- [Fabbulle fibre laser page](https://wiki.fabbulle.tech/index.php?title=Laser_fibre_Cloudray): names the MP-60 LiteMarker Pro, 60 W, rotary axis and 200 × 200 mm work area. It explains galvo mirrors, LightBurn workflow, material differences from CO₂ lasers, and the requirement to keep the enclosure closed and wear wavelength-appropriate protection.
- The same page links wiki-held user and module manuals; exact connector pin assignments were not established in the captured material.

## Operation and safety

The wiki says the enclosure must remain closed throughout marking and suitable eyewear is mandatory. It describes job setup in LightBurn and the galvo head's limited marking field. Observe local training and interlock requirements.

## Manufacturer MP-series interface inventory (family reference; fitted revision unknown)

Cloudray's *LiteMarker Pro MP Series User Guide*, V3.3 (2024.08), describes a product-family front-panel interface. Fabbulle's machine page links an earlier V3.0 guide whose CDN URL currently returns 404; the available V3.3 guide is not evidence that Fabbulle has this exact port or controller revision. The primary atlas treats these as source-reference peripherals, not installed contacts:

| Exterior interface named in the family guide | What the guide establishes | What remains unknown |
|---|---|---|
| PC-USB | Connects the marker to its control computer | USB connector type, contact view, cable/pin map and electrical implementation |
| Protective Cover (optional) | Optional 4-pin connection cable | Fitted presence, pin order, contact functions, polarity, voltage and safety logic |
| Rotary (optional) | Optional rotary axis on a 4-pin cable; guide associates it with the rotary attachment | Exact Fabbulle port/harness revision, pin functions, motor ratings and direction |
| Foot Switch | Optional pedal can activate marking | Connector type, pin count, contacts, active level and safety behavior |
| Power Input | Three-pin power inlet; guide says voltage and cord type depend on local conditions | Fitted supply voltage, inlet contact assignments and protective-earth continuity |
| Ground Pole | External grounding post described for leakage current | Installed bonding scheme and electrical measurements |

The SVG shows four OPEN count-only positions each for the family-guide 4-pin cover and rotary cables and three OPEN count-only positions for the power inlet. These are bookkeeping positions to expose the stated counts, not manufacturer contact numbers or a mating-face view. USB and foot-switch contact counts are not inferred. No SmoothieBox route is established. Mains and protective-earth interfaces are excluded from SmoothieBox terminal mapping; an enclosure interlock must never be bypassed.

The same family guide shows laser and controller switches, an emergency switch, and an internal controller, rotary stepper driver and laser system. These are not external machine connectors and do not supply a revision-matched control pinout, so they are recorded here as system context only. Fabbulle requires the laser enclosure to remain closed during marking.

Sources: [Fabbulle machine page](https://wiki.fabbulle.tech/index.php?title=Laser_fibre_Cloudray) · [Cloudray MP Series User Guide V3.3 (2024.08)](https://manuals.plus/m/69827f783e82fd04aca9524d82218290b0f6e89f20310848f3132a9e56ac7e2f.pdf), pp. 14–18. The manual is Cloudray-authored and hosted by Manuals+; applicability to the installed Fabbulle unit is unverified.

## Pinout and diagrams

No verified installed controller, laser-module or machine-cable pinout appears in the sources reviewed. Do not treat galvo operating principles, optional family ports or product-family diagrams as Fabbulle wiring evidence.

## Uncertainty

The page's machine title uses the reseller brand, but it does not establish a complete OEM chassis model/revision or controller board revision. Confirm those from local labels before using any wiring diagram.
