# Just Add Sharks Silvertail A0 laser cutter

**Wiki evidence status:** exact machine model independently named by London Hackspace and Bristol Hackspace. London records a 130 W tube and 1200 × 900 mm cutting area. The two wiki pages establish the same model family, but do not prove that the two sites have identical hardware revisions.

## Identity and operation

London Hackspace identifies its machine as “Just Add Sharks Silvertail A0,” purchased by pledge in 2014. Its wiki lists a 1200 × 900 mm cutting area and a 130 W laser tube. It requires induction and membership, and it stresses continuous supervision because of fire risk. Its instructions require the CO2 extinguisher, water pump and extractor to be ready, and coolant at 22 ± 3 °C. The operating page describes LightBurn, places the software origin at the bed's top-left corner, and explains focusing relative to a ruler on the cutting bed.

Bristol Hackspace's current equipment catalogue separately lists an “A0 Laser Cutter - Just Add Sharks Silvertail,” corroborating the model name at a second wiki site. That listing does not expose a Bristol-specific power or work-area value.

## Pinout and diagram evidence

The London Hackspace LightBurn repository supplies the configuration used for its Smoothieware setup, while describing the board as an MKS V1.0 Smoothieboard clone. This is configuration evidence, not a physical header or fitted-cable map. Configured logical signals are X (alpha) STEP 2.2!, DIR 2.3!, ENABLE 0.4; Y (beta) STEP 0.19!, DIR 0.20!, ENABLE 0.10; Z (gamma) STEP 2.13!, DIR 0.11!, ENABLE 0.19. The four X/Y endstop inputs are X-min 1.29!^, X-max 1.28!^, Y-min 1.27!^, and Y-max 1.26!^. The config also defines gamma_max_endstop 1.24!^, but gamma_limit_enable is false and gamma_homing_direction is home_to_min, so its operational role is left as written rather than inferred. gamma_min_endstop 1.25^ appears commented out; a later comment offers nc as an alternative where a probe conflict exists. Both are listed as distinct logical configuration references with their active/commented status, not physical header positions or evidence of fitted switches. It enables laser PWM on 2.0 (20 µs period) and M3/M5 digital fire control on 1.23. These are logical pin identifiers only; installed header positions and harness remain unknown. The same config assigns beta_step_pin 0.19! and gamma_en_pin 0.19, so Y STEP and Z ENABLE collide at one logical MCU pin in this source revision. This is a source-config conflict, not evidence of two independently usable outputs; it is left unresolved. GLCD EXP1/EXP2 pin names in the configuration are likewise not confirmed panel wiring.

The model-matched MYJG-80R supply manual names six low-voltage control terminals: H (active-high switch-light control), L (active-low switch-light control), P (water protection), G (signal ground), IN (laser control input), and 5V (50 mA output). These are shown separately on the machine side. The repository says a level shifter was added because approximately 3.3 V laser PWM had affected laser power, but does not identify the shifter or its wiring. Dotted GUESS links show SmoothieBox PWM.1→IN through an unspecified level-shift stage, PWM.2 TTL→H as a possible active-high fire function, and PWM.3 GND→G as a possible signal reference. None is a proven cable, board-header mapping, safety circuit, or wiring instruction. L, P, and 5V remain OPEN; AC mains, laser-tube high voltage, and interlocks are not routed.

The repository also describes an ACnode relay that removes +5 V from the Smoothieboard. Its terminals and controller-power wiring are not published, so the diagram inventories it without assigning pins or a SmoothieBox route.

## Supplemental controller and operating-state history

London Hackspace's [Silvertail A0 Laser Cutter/Upgrade Notes](https://wiki.london.hackspace.org.uk/view/Silvertail_A0_Laser_Cutter/Upgrade_Notes) distinguishes a stock setup using Lasercut53 from a current setup described as using a Smoothieware controller and LightBurn. It says the machine no longer needs designs downloaded to its controller, gives a right-rear home and left-front origin, and describes the X/Y directions in the operator's view. Those are control/workflow relationships, not connector assignments.

The same notes say ACnode was rebuilt and moved to the front-right, where a relay now de-powers the Smoothieboard. The repository configuration instead documents an active RepRap Discount GLCD. This disagreement is retained as a source-revision/state uncertainty; neither source proves fitted panel wiring. Relay contacts, safety-chain topology, and board terminals are not documented.

The main machine page still lists the stock Reci Z2 tube, MYJG-80R supply, Leetro MPC6515C v2.0 controller, and LaserCut 5.3. This stock Leetro reference is kept separate from the later Smoothieware/LightBurn configuration; the current as-built revision remains unverified. No DB25 connector is evidenced for either controller reference.

## Sources

- [Silvertail A0 Laser Cutter — London Hackspace Wiki](https://wiki.london.hackspace.org.uk/view/Silvertail_A0_Laser_Cutter) — exact model, 130 W, work area, induction and safety notes.
- [Silvertail A0 Laser Cutter/Upgrade Notes — London Hackspace Wiki](https://wiki.london.hackspace.org.uk/view/Silvertail_A0_Laser_Cutter/Upgrade_Notes) — stock versus Smoothieware/LightBurn operation, ACnode power-control relation, and revision/time ambiguity.
- [Laser Cutter Instructions — London Hackspace Wiki](https://wiki.london.hackspace.org.uk/view/Laser_Cutter/Instructions) — coolant, extraction, origin and focus workflow.
- [Equipment — Bristol Hackspace Wiki](https://wiki.bristolhackspace.org/equipment/home) — second wiki listing of the Just Add Sharks Silvertail A0.
- [London Hackspace LightBurn configuration repository](https://github.com/londonhackspace/lightburn) — MKS/Smoothieware configuration, logical pins and stated laser level-shift note; physical header and harness are unverified.
- [MYJG-80R user manual](https://device.report/m/017e87554898a644894a3fe89ff34f6cbe30f264da174cb437a3da39a55d265d.pdf) — model-matched low-voltage control terminal names and functions.

**Unknowns:** controller identity/revision, wiring, pinout, power and usable work area for Bristol's individual unit, and present operational status at either site.
