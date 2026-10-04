# RotarySMP's 1986 MAHO MH400E LinuxCNC retrofit

## Machine and retrofit state

LinuxCNC Forum member RotarySMP reports buying a specific 1986 MAHO MH400E from a school in HWK Passau, Germany. At acquisition, the mill was mechanically in excellent condition but its Philips 432/10 controller was not operating. The owner planned a LinuxCNC retrofit around the retained Indramat 3TRM2 drives, Heidenhain glass scales and EXE interfaces, and MAHO 28A1 relay board. The configuration was a basic mill without tool changer or pallet changer; its 18-speed gearbox required additional I/O.

The forum thread records the retrofit progressing from diagnosis and wiring to running axes and integrating the machine's relay board and controls. The owner reports the control panel and pendant integration as ongoing later in the thread. Keep this machine distinct from workshop54's separate MH400E documented elsewhere in this folder and from other MAHO 400 variants.

## Forum-reported EXE signal/color mapping

RotarySMP reports that the original MAHO drawings were wrong about the EXE wiring. For Heidenhain LS403 glass scales connected through an EXE 229 281 01, the owner transcribed these wire colors and functions:

| Function at EXE interface | Wire color reported by owner | Qualification |
|---|---|---|
| +12 V supply | Red | Owner found that the EXE also required +12 V; their earlier interpretation of the MAHO drawing used only +5 V. |
| +5 V supply | Brown | Forum-reported color/function mapping. |
| 0 V | White | Forum-reported color/function mapping. |
| A | Green | Forum-reported color/function mapping. |
| B | Blue | Forum-reported color/function mapping. |
| Z | Grey (tentative) | Owner explicitly says this wire/function still needs confirmation. |

These are wire-color/function claims, not connector cavity numbers. The thread does not identify a mating-face view or fully scope all possible EXE board revisions.

## MAHO relay-board and Mesa mappings discussed in the thread

The original Philips control connected to the door-mounted MAHO 28A1 relay board through ribbon connectors 28X1 and 28X2. RotarySMP states that the drawing identified the header contacts at both ends without mapping every contact to the relay function. The owner later clarified that the drawing references are DIL header contact numbers, not flat-cable conductor numbers: the 20-pin bottom row is 1–20, the upper row restarts at 21–40, and the cable alternates rows (conductor sequence described as pin 1, unused, pin 2, pin 21, pin 3, pin 22, and so on). This distinction corrected an earlier mistaken wiring interpretation.

The owner describes the original 18-speed gearbox as three shifters, each moved by a reversing 24 V DC geared motor. In a later description, eight relays actuate the shifter motors and 12 cam-operated microswitches report their positions; the main spindle also has CW/CCW “twitch” relays used during gear changes. The reversible 2.2 kW three-phase spindle motor uses star/delta starting and a motor brake. Earlier posts gave different preliminary counts (10 relays and 10 switches), so the later detailed post is recorded here with that thread discrepancy retained. RotarySMP said the plan was to leave the spindle power circuit unchanged and interface the existing relay-board I/O to Mesa 7i84 hardware; this is a retrofit plan, not proof that a particular circuit is safe or suitable elsewhere.

The owner also reports that the LS-403 linear scales have a single reference index at one end of travel. During a later Y-scale service, RotarySMP reported a 0.1 mm alignment tolerance over the length and an air gap target of 1 mm ± 0.3 mm; after cleaning and alignment the owner said the previously erratic jog distance appeared correct. These are that owner's maintenance observations for this scale installation, not a universal adjustment specification for every Heidenhain installation.

| MAHO contact / interface | Mesa contact reported by owner | Forum-described role |
|---|---|---|
| 28X2-4 | Mesa 7i84 TB2-2 | MAHO E-stop state input to LinuxCNC; the owner says this input was netted to LinuxCNC's E-stop output in their configuration. |
| 28X1-2 / OPC1-2 | Mesa 7i84 output (terminal not specified in that post) | Owner reports using this signal in troubleshooting the machine start/latch relay path to terminal 209. |

The machine start circuit depends on the MAHO relay chain and oil-system conditions; the owner found an intermittent latching issue and later reported that a loose relay-board connector was the cause of at least one earlier symptom. These are historical troubleshooting observations, not a safe wiring procedure. The source does not establish a complete 28X1/28X2 pin-to-relay table.

## Forum sources

- RotarySMP, [“Retrofitting a 1986 Maho MH400E”](https://forum.linuxcnc.org/12-milling/33035-retrofitting-a-1986-maho-mh400e), LinuxCNC Forum, inspected opening post and search-indexed later progress posts.
- RotarySMP's [November 2017 thread page](https://forum.linuxcnc.org/12-milling/33035-retrofitting-a-1986-maho-mh400e?start=230), including the ribbon header numbering correction and relay-board troubleshooting.
- RotarySMP's [June 2018 thread page](https://forum.linuxcnc.org/12-milling/33035-retrofitting-a-1986-maho-mh400e?start=400), including the MAHO 28X2-4 to 7i84 TB2-2 E-stop-state mapping.
- RotarySMP's [July 2017 machine and gearbox description](https://forum.linuxcnc.org/12-milling/33035-retrofitting-a-1986-maho-mh400e), including the later correction to the initial gearbox relay/switch estimate.
- RotarySMP's [February 2018 scale-service discussion](https://www.forum.linuxcnc.org/12-milling/33035-retrofitting-a-1986-maho-mh400e?start=320), reporting LS-403 reference-index behavior and Y-scale alignment observations.
- RotarySMP's [October 2018 EXE/LS-403 discussion](https://www.forum.linuxcnc.org/12-milling/33035-retrofitting-a-1986-maho-mh400e?start=500), identifying the retained three-axis EXE board and the wired LS-403-to-EXE-to-Mesa signal path on this machine.
- RotarySMP's [page 95 forum-indexed posts](https://forum.linuxcnc.org/12-milling/33035-retrofitting-a-1986-maho-mh400e?start=940), including the EXE 229 281 01 signal/color list and the unverified grey/Z assignment.

## Mesa connector reference (2026-09-25)

The official [Mesa 7I84/7I84D manual](https://www.mesanet.com/pdf/parallel/7i84man.pdf), version 1.18, defines TB2 as 24 contacts: pins 1–16 are INPUT16–INPUT31, respectively, and pins 17–24 are OUTPUT8–OUTPUT15, respectively. Thus the forum-reported Mesa 7i84 TB2-2 endpoint is the board's INPUT17 contact by the manufacturer's numbering. The manual's TB1 power block and J1 serial connector are separate interfaces; the forum mapping does not establish any route from this reported E-stop signal to those contacts.

The manual applies to 7I84 and 7I84D unless the D variant is called out, but the forum dossier does not resolve the installed card suffix/revision. It documents Mesa connector naming only; it does not establish the unknown MAHO 28X1/28X2 functions or a complete machine-to-board cable map.
