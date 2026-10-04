# Elegoo Mars 2P

Research status: model-name and external-interface evidence increment, 2026-09-27. The local SoMakeIt wiki calls the machine “Elegoo Mars 2P”; the manufacturer manual retrieved for this pass is expressly shared by Mars 2 and Mars 2 Pro, so it does not resolve which variant the wiki unit is.

## Wiki-recorded configuration

The SoMakeIt wiki lists a 129 × 80 × 160 mm build volume, LCD/FEP bed system, and 0.05 mm XY resolution (1620 × 2560). It names Chitubox on the space PC for slicing and a USB stick for job transfer. The wiki lists the unit as functional and notes a wash/cure station.

## Manufacturer manual scope

The official ELEGOO Mars 2 LCD Photocuring 3D Printer manual (Version 20210224) states it applies to Mars 2 and Mars 2 Pro. Its illustrated component/rear-panel page is titled “Mars 2 Pro Printer Components” and shows a USB-marked interface and a separate power-input position. The following technical-specification page states power requirements of 100–240 V, 50/60 Hz. The manual package list includes a power adapter and USB disk. These shared-manual statements are family-reference evidence only; they do not prove which variant or adapter is installed at the SoMakeIt machine.

## External-interface inventory

The diagram names two source-visible machine-side peripherals: USB-stick interface (manual-marked USB) and external power input (illustrated rear-panel position). The documentation supplies no receptacle pin/cavity schedule, mating-face orientation, USB connector generation, USB signal contact names, power-input contact names, adapter output polarity/voltage/current, or installed cable identity. Therefore both peripherals have zero declared numbered contacts, all routes remain OPEN, and no pin positions are fabricated. The 100–240 V, 50/60 Hz statement is a printer-family requirement, not a pin assignment or proof of wiring.

No internal controller, LCD ribbon, UV LED, Z motor, limit sensor, or mains wiring is mapped: the cited documentation does not supply a revision-specific circuit/pin schedule for the local unit.

## Connections and pinout

The wiki says USB-stick job transfer but does not identify the machine revision or port generation. The manufacturer manual confirms a USB-labelled interface in its Mars 2 Pro illustration while covering both Mars 2 and Mars 2 Pro. Neither source provides individual external contact functions or numbered contacts. No SmoothieBox route or guess is justified from this evidence.

## Sources

- [SoMakeIt printer-model wiki page, revision 325](https://wiki.somakeit.org.uk/index.php?title=3D_Printers_Models&oldid=325), local model label/configuration.
- [ELEGOO Mars 2 LCD Photocuring 3D Printer User Manual, Version 20210224](https://download.elegoo.com/04%20LCD%20Printer/03%20Mars%202/Manual/ELEGOO%20Mars%202%20LCD%20Photocuring%203D%20Printer%20User%20Manual%20Version_20210224.pdf), pp. 2, 5–6. SHA-256 of captured PDF: `a80ab63401a56833bb889f04b60014bbe4d9bae8857763a43d88f24581f89afa`.

## Evidence limits

The manual’s shared Mars 2/Mars 2 Pro scope and a Mars 2 Pro-labelled illustration do not identify the SoMakeIt “2P” unit as either model. The connector geometry is not treated as a pinout. No installed board, port continuity, adapter output, voltage at contacts, or electrical compatibility with SmoothieBox is established. Resin PPE and disposal details are not part of this wiring source pass.
