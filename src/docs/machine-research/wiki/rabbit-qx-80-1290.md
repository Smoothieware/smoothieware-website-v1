# Rabbit QX-80-1290 laser cutter

Research status: wiki-sourced machine-specific dossier; the exact model string is absent from the existing repository search. Captured 2026-09-23.

## Identity and wiki-recorded configuration

MakeICT’s FabLab list identifies an operational Rabbit Laser QX1290; its dedicated laser page names the machine Rabbit QX-80-1290. The two wiki forms are retained as aliases because the inventory omits the “80” portion. The page records a 1200 × 900 mm bed, 80 W sealed CO₂ tube, approximately 10-inch maximum bed height, 300 mm/s maximum cutting speed, 600 mm/s maximum engraving speed, and 1000 DPI maximum engraving resolution. LightBurn is the stated interface.

## Wiki-recorded operation

The community guide requires authorization, never leaving the powered cutter unattended, not bypassing safety switches, and using only approved materials. Its summarized job sequence is:

1. Prepare artwork and import it to LightBurn.
2. Confirm design size, layer operation, order, speed and power; preview the tool path.
3. Badge-authorize and power on the machine; confirm compressor, exhaust fans and chiller are on.
4. Let homing finish; position and focus the material; use the frame function to check job bounds.
5. Close the lid and start the job. Remain present; after completion the wiki recommends waiting about 30 seconds before opening to vent fumes.

The wiki’s listed settings are starting points that vary with material and day. The cited article directs users to test small areas and to use its material approval list; no external material guide was used here.

## Interfaces and pinout evidence

| Interface | Wiki evidence | Pin/contact map |
|---|---|---|
| Door switch/interlock | Wiki says the enclosed machine must not fire with doors open; troubleshooting discusses a possibly faulty door switch | No switch terminal or safety-chain pinout published |
| E-stop | Wiki says the large red E-stop shuts down the laser and air supply | No contacts, polarity, voltage, or relay map published |
| Z probe / upper Z limit | Troubleshooting describes a jammed probe and stuck upper limit switch | No connector or signal assignment published |
| Rotary attachment | Control-box setting “Enable rotary” is referenced | No rotary motor connector/pins published |
| Power supply indicators | Wiki troubleshooting says indicator labels P0/A0 help diagnose door-switch status | Indicator labels are not connector assignments; no circuit diagram supplied |



The MakeICT file page links an RL-80-1290 User Manual (52 pages; title “User Manual (DSP5.3 For MPC6515),” version 1.22; PDF metadata modified 2009-10-02; SHA-256 `c0fbe579da095b0acf04a8f59fc40dd44ebbcb7a841be1fd0eb936783ec28217`). It describes an MPC6515 control card with PAD03 or POP Text Display, but its scope is software operation and it provides no machine-side connector pin assignment, electrical wiring map, or DB25 schedule. This model-associated manual does not establish the card currently fitted to the MakeICT machine. Rabbit Laser USA's current manuals page says new systems use Ruida controllers and links a general 6442 schematic; that current-production material is not assigned to this older, locally undocumented installation.

## Visual evidence

The source wiki page includes machine illustrations and job examples. Images remain linked at source rather than copied because the inspected article does not state a reuse license. [MakeICT Rabbit QX-80-1290 wiki page](https://wiki.makeict.org/wiki/Laser_Cutter) · [MakeICT equipment inventory](https://wiki.makeict.org/wiki/FabLab_Area).

- [RL-80-1290 User Manual PDF file page](https://wiki.makeict.org/wiki/File:RL-80-1290_User_Manual.pdf) — MakeICT identifies it as the user manual for its Rabbit laser. The linked manual describes MPC6515/PAD03 software control but has no connector pin map.
- [Rabbit Laser USA manuals and tutorials](https://www.rabbitlaserusa.com/laser-manuals-and-tutorials) — current vendor documentation states new systems use Ruida controllers; this is not proof of the MakeICT unit's controller.

## Limits

The wiki lists no manufacturer control-board model, controller revision, laser supply wiring, motor mapping, or numbered contact drawing. Its dimensions and status are community entries, not independent machine measurements. Do not treat troubleshooting hints as authorization to open cabinets or bypass interlocks.
