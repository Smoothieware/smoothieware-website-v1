# Just Add Sharks Silvertail A0 laser cutter

**Wiki evidence status:** exact machine model independently named by London Hackspace and Bristol Hackspace. London records a 130 W tube and 1200 × 900 mm cutting area. The two wiki pages establish the same model family, but do not prove that the two sites have identical hardware revisions.

## Identity and operation

London Hackspace identifies its machine as “Just Add Sharks Silvertail A0,” purchased by pledge in 2014. Its wiki lists a 1200 × 900 mm cutting area and a 130 W laser tube. It requires induction and membership, and it stresses continuous supervision because of fire risk. Its instructions require the CO2 extinguisher, water pump and extractor to be ready, and coolant at 22 ± 3 °C. The operating page describes LightBurn, places the software origin at the bed's top-left corner, and explains focusing relative to a ruler on the cutting bed.

Bristol Hackspace's current equipment catalogue separately lists an “A0 Laser Cutter - Just Add Sharks Silvertail,” corroborating the model name at a second wiki site. That listing does not expose a Bristol-specific power or work-area value.

## Pinout and diagram evidence

The London page has a “Controller upgrade” heading but no captured connector map. The operating instructions describe bed origin and focal height, not electrical connections. No controller revision, pinout, or machine wiring is inferred. No electrical diagram was available for transcription.

## Supplemental controller and operating-state history

London Hackspace's [Silvertail A0 Laser Cutter/Upgrade Notes](https://wiki.london.hackspace.org.uk/view/Silvertail_A0_Laser_Cutter/Upgrade_Notes) distinguishes a stock setup using Lasercut53 from a current setup described as using a Smoothieware controller and LightBurn. It says the machine no longer needs designs downloaded to its controller, gives a right-rear home and left-front origin, and describes the X/Y directions in the operator's view. Those are control/workflow relationships, not connector assignments.

The same notes say ACnode was rebuilt and moved to the front-right, where a relay now de-powers the Smoothieboard. This establishes a functional power-control relationship only; the relay contacts, safety-chain topology, and board terminals are not documented. The note first says the LCD does nothing, then describes Z jog through an LCD menu, so that control detail is temporally inconsistent or reflects an intermediate update and must not be collapsed into one verified state.

The main machine page still lists technical specifications for a Reci Z2 tube, MYJG-80R supply, Leetro MPC6515C v2.0 controller, and LaserCut 5.3. The separate upgrade notes contrast stock Lasercut53 with the Smoothieware/LightBurn setup but provide no exact installation date or revision. Keep these source-stated controller states separate and label the current as-built revision unverified. A useful diagram can show stock Leetro/Lasercut53 and the separately described Smoothieboard/LightBurn configuration, with an ACnode-to-Smoothieboard power-control relationship; do not infer terminal pins or merge both controllers into one circuit.

## Sources

- [Silvertail A0 Laser Cutter — London Hackspace Wiki](https://wiki.london.hackspace.org.uk/view/Silvertail_A0_Laser_Cutter) — exact model, 130 W, work area, induction and safety notes.
- [Silvertail A0 Laser Cutter/Upgrade Notes — London Hackspace Wiki](https://wiki.london.hackspace.org.uk/view/Silvertail_A0_Laser_Cutter/Upgrade_Notes) — stock versus Smoothieware/LightBurn operation, ACnode power-control relation, and revision/time ambiguity.
- [Laser Cutter Instructions — London Hackspace Wiki](https://wiki.london.hackspace.org.uk/view/Laser_Cutter/Instructions) — coolant, extraction, origin and focus workflow.
- [Equipment — Bristol Hackspace Wiki](https://wiki.bristolhackspace.org/equipment/home) — second wiki listing of the Just Add Sharks Silvertail A0.

**Unknowns:** controller identity/revision, wiring, pinout, power and usable work area for Bristol's individual unit, and present operational status at either site.
