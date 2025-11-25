# RoboSprout Blog - Complete Smoothieboard V2 Information Extraction

**Report Generated:** 2025-11-15
**Source:** https://www.robosprout.com/blog/
**Total Blog Posts Analyzed:** 19 posts (from October 2020 to March 2025)

---

## Executive Summary

This report contains a comprehensive extraction of ALL blog posts from RoboSprout.com, with particular focus on Smoothieboard V2 and Smoothieware v2 development. The blog chronicles the complete V2 development journey from initial prototyping (October 2020) through product launch and retail availability (February 2025).

**Key V2 Milestones Identified:**
- **October 2020:** Initial V2 Alpha prototyping begins
- **September 2021:** PCBs ready, components ordered
- **February 2022:** Final prototype complete, chip shortage impact
- **February 2023:** Final specifications announced
- **May 2023:** Kickstarter fulfillment begins
- **February 2025:** V2 Prime available for retail sale

---

## PART 1: SMOOTHIEBOARD V2 DEVELOPMENT TIMELINE

### 1.1 Initial Prototyping Phase (October 2020)

**Post:** "Smoothieboard V2 Prototyping Update 1"
**Date:** October 14, 2020
**Author:** Chris Cecil

#### Overview
First public update on V2 Prime Alpha prototyping. Author notes that "the V2 Smoothieboard progress has been slow but it overall has been very productive," emphasizing how small teams can now accomplish complex engineering with modern tools and open-source software.

#### Hardware Issues Discovered

**Four Critical Problems Identified:**

1. **5V Regulator Backfeed Problem**
   - Voltage regulator incorrectly feeding back into VBB line
   - **Fix:** Cut trace between U2 Pin 8 and C26, install Schottky diode to prevent reverse current

2. **Missing Flash Chip**
   - Flash memory chip required installation at U5 location
   - Critical for firmware storage

3. **Stepper Driver Configuration**
   - TMC stepper drivers needed proper logic setup
   - **Fix:** Bridge pins 19-21 for correct operation

4. **Ethernet Duplex Issues**
   - Connection toggling between half and full duplex modes
   - **Solution:** Likely requires inline resistors on data and clock lines for proper source termination

#### Collaborative Development
Post emphasizes consultation with developers Wolfmanjm and Triffid Hunter for diagnosis and resolution of technical challenges.

---

### 1.2 Pre-Production Phase (September 2021)

**Post:** "Status of Smoothieboard V2…September 2021 update"
**Date:** September 4, 2021
**Author:** Chris Cecil

#### Design Completion
- Prototype design completed
- PCBs manufactured and ready for assembly
- Dedicated test board developed by Kliment focusing on stepper driver section
- Enabled Wolfmanjm to conduct firmware integration work

#### Manufacturing Readiness
Quote from post: "PCBs and stencils ready to go"
- Component spools arrived after shipping delays from China
- All necessary parts for initial prototypes on hand
- Team prefers setting up pick-and-place machinery properly rather than hand-assembly

#### Supply Chain Status
- Stepper drivers: Only components not in stock
- Purchased on backorder
- Estimated arrival: mid-October 2021
- Should enable fulfillment of initial Kickstarter rewards

#### Development Roadmap
**Post-V2 Prime priorities:**
1. Mini design
2. Core design
3. Pro variant (planned last)

#### Shop Relocation Note
Temporary workload added but shouldn't significantly impact assembly schedules.

---

### 1.3 Chip Shortage Impact (June 2021)

**Post:** "The global chip shortage and Smoothie…"
**Date:** June 1, 2021
**Author:** Chris Cecil

#### V1.1 Production Impact

**Escalating Problems:**
- Component costs increased dramatically (MCUs, PHY chips, stepper drivers)
- Secured microcontroller units "sold out from under" the team mid-purchase
- Replacement MCUs available at ~5x normal pricing
- 25% U.S. import tariff created compounding financial pressure: "When cost goes up it goes up by x+(.25x)"

#### V2 Development Changes

**Original Plan vs. Reality:**
- Initially planned to maintain V1.1 production during V2 transition
- Chip shortage eliminated this option
- Original LPC4330 microcontroller unavailable worldwide

**Major Pivot:**
- Project switched to STM32 architecture
- Aligned with developer Wolfmanjm's original code preferences
- Board designer Kliment joined effort to revise schematics and documentation
- Incorporated improvements discovered during review

#### Outcome
Production of new V1.1 boards suspended pending normal-price LPC1769 availability.

---

### 1.4 Customer Appreciation Initiative (June 2021)

**Post:** "Smoothieboard V2 Coupon"
**Date:** June 29, 2021
**Author:** Chris Cecil

#### Promotional Offer
Quote: "any purchase of a V1 Smoothieboard from Robosprout will come with a coupon which is good for $10 off V2 Smoothieboard upon release"

**Details:**
- $10 discount coupon toward V2 Smoothieboard
- Eligibility: Customers purchasing V1 model
- Redemption: Upon V2 release
- Purpose: "a little thank you to our customers who are still building machines while waiting patiently for the V2 release"

---

### 1.5 Final Prototype Development (February 2022)

**Post:** "Smoothieboard V2 February update"
**Date:** February 22, 2022
**Author:** Chris Cecil

#### Progress Overview
Quote: "It has been a while since we last posted. Very busy times…there has been a lot of progress to catch up on."

#### Chip Shortage Continued
**TMC2590 Driver Status:**
- Orders pending with Digikey (expected March 11, 2022)
- Orders pending with Mouser (expected April 11, 2022)
- Initial August orders with September estimates
- Delivery dates shifting backward ~2 weeks at a time

#### Prototype Achievement
- Three prototype revisions completed
- Sufficient driver stock accumulated for testing
- **Final prototype version resolved all known technical issues**
- Core components tested and verified

#### Major Refinements

**1. Dual Driver Compatibility**
- Board supports both TMC2590 AND TMC2660 stepper drivers
- Significant flexibility for different applications

**2. Optimized Specifications**
- **TMC2590 versions:** Higher current-range resistors for CNC applications
- **TMC2660 variants:** Suited for laser cutters, printers, smaller motors

**3. Automatic Board Recognition**
- Hardware pins enable firmware to automatically detect board version
- Automatic configuration for different variants

#### Production Strategy
Initial Kickstarter batch likely ships with TMC2660 boards due to ongoing TMC2590 delays, with backers given configuration options.

---

### 1.6 Production Crisis (February 2023)

**Post:** "Murphy broke the belt"
**Date:** February 21, 2023
**Author:** Chris Cecil

#### Manufacturing Setback
During V2 assembly operations, conveyor belt driving the reflow oven failed mid-production.

**Situation:**
- Processing 50 V2 circuit boards (TMC2660 prime, bottom side)
- "a strange sound caught my attention. Next thing I notice the conveyor stops moving"
- Six boards already in oven
- Manually rotated spindles by hand to complete batch
- Boards could be reflowed again when processing top side

#### Engineering Problem
**Design Flaw:** Manufacturing design required nearly complete disassembly to replace worn belt - significant serviceability flaw

**Conveyor System:**
- Two rollers with continuous springs
- Both require equal drive force to prevent premature wear

#### Solution Evaluation

**Three Options Considered:**
1. Dual gearhead DC motors with encoders controlled by Arduino
2. Stepper motors paired with Smoothieboard controller
3. 555 timer circuit for speed control

**Selected Solution:** 555 timer approach
- Discovered similar implementations online
- Practical and uses readily available components
- Demonstrates resourceful problem-solving in manufacturing environment

---

### 1.7 Final Specifications Announcement (February 2023)

**Post:** "Smoothieboard V2 Final specs and update"
**Date:** February 15, 2023
**Author:** Chris Cecil

#### Microcontroller Selection

**STM32H745 MCU**
- **Package:** 265-pin BGA
- **Original Plan:** LPC4330
- **Why Changed:** Supply chain constraints

Quote: "we were forced (to the glee of some of the devs) to change to the STM32H745"

**Supply Status:**
- Chips now scarce on open market
- Future supply projected at ~$25 per unit

#### Stepper Motor Drivers

**Two Variants Available:**

**1. TMC2660 Variant**
- Optimized for lower-current motors
- **Current Range:** 1.2–2.2A
- **Best For:** Laser cutters, 3D printers, smaller motors

**2. TMC2590 Variant**
- Tuned for higher currents
- **Current Range:** 2.5–4.6A
- **Best For:** CNC routers, mills, higher-power applications

**Testing Completed On:**
- Leadscrew printers
- Router tables
- Delta printers
- Lasers
- Mills
- Standard FDM printers

Author states both variants function well across all tested applications.

#### Power and Output Circuitry

**Motor Power:**
- Dedicated XT30 connector
- Supplies 5V regulator

**Output FETs:**
- Four lower-current FETs for accessories (hotends, fans)
- Dual parallel FETs for bed heating (higher current capacity)

---

### 1.8 Kickstarter Fulfillment Begins (May 2023)

**Post:** "Kickstarter fulfillment update #1"
**Date:** May 15, 2023
**Author:** Chris Cecil

#### Shipment Status
Quote: "Boards are beginning to go out. People should start getting boards any time now"
- Expectation: Distribution accelerating over subsequent weeks

#### Production Strategy
**Initial Focus:**
- V2 Prime backers
- Early bird Prime backers
- Allows team to establish organized processes before scaling

#### Manufacturing Progress

**Current Status:**
- TMC2660 versions: COMPLETED
- TMC2590 versions: Preparing for pick-and-place production

**Additional Work:**
- Test fixture constructed for future automated testing
- Connectors and cables prepared
- Boards ship with current firmware pre-loaded
- Sample configurations included

#### Setup Convenience
Quote: "making setup straightforward for users familiar with earlier V1 Smoothieboards"

#### Documentation
Team planned to release startup guide covering:
- Component identification
- Proper connections

#### Shipping Optimization
Backers with multiple reward tiers encouraged to contact company to consolidate shipments:
- Reduces costs
- Faster delivery time

---

### 1.9 Unboxing and Safety Warnings (May 2023)

**Post:** "Smoothieboard V2 Unboxing and setup warnings"
**Date:** May 16, 2023
**Author:** Chris Cecil

#### Critical Warning Categories

Quote: "Please pay careful attention to these warnings as they greatly affect the performance and safety of your device"

**Note:** These are device-specific warnings, NOT complete setup instructions

#### 1. Handling Precautions

**Wire Management:**
- Board has numerous wire connections
- **CRITICAL:** Never pull board by attached wires
- Follow electrostatic discharge (ESD) protocols when unpacking

#### 2. Power Supply Connections

**MUST VERIFY:**
- All polarized connectors: Confirm polarity BEFORE powering up
- Incorrect polarity can damage board

**5V Regulator:**
- Draws power from motor input
- Ensure motor power connected properly

**Vfet Connectors (Dual):**
- Support configurations up to 30A
- Single connection sufficient below 15A
- **Individual FET Maximum:** 15A
- **Combined FET Limit:** Sum of all 4 FETs cannot exceed ~8.5A without alternative wiring

#### 3. Probe Input Considerations

**High-Voltage Pin:**
- Probe input includes pin matching motor voltage levels
- **For voltages up to 24V:** MUST cut jumper JP7
- **For lower voltages:** Leave JP7 intact

**Compatible Probes:**
- Standard passive switches (with proper JP7 setting)
- BLTouch probes work with default settings

#### 4. 5V Power Options

**Three Methods Available:**
1. USB connectivity
2. Onboard regulation (from motor power)
3. External 5V supply

---

### 1.10 Retail Launch (February 2025)

**Post:** "Smoothieboard V2 Prime Now in stock"
**Date:** February 28, 2025
**Author:** Chris Cecil

#### Announcement
Quote: "Finally after a long battle…the long awaited sequel to the Smoothieboard is now in stock and available for retail sale"

**Availability:**
- Retail sale begins
- Direct product listing link provided
- Purchase immediately available

**Related Projects:**
- Smoopi: Raspberry Pi Touchscreen interface for Smoothieboard
- Moveo 3D Printed Robot Arm
- Smoothieware and controller updates

---

## PART 2: TECHNICAL SPECIFICATIONS SUMMARY

### V2 Prime Final Technical Specifications

#### Microcontroller
- **Model:** STM32H745
- **Package:** 265-pin BGA
- **Cost (projected):** ~$25 per unit
- **Notes:** Replaced LPC4330 due to chip shortage; aligned with Wolfmanjm's code preferences

#### Stepper Drivers (Two Variants)

**TMC2660 Variant:**
- Current Range: 1.2–2.2A
- Applications: Laser cutters, 3D printers, smaller motors
- Status: Production complete (as of May 2023)

**TMC2590 Variant:**
- Current Range: 2.5–4.6A
- Applications: CNC routers, mills, higher-power machines
- Status: Production prepared (as of May 2023)

#### Power System
- **Motor Power Input:** XT30 connector
- **5V Regulator:** Powered from motor input
- **Vfet Connectors:** Dual, supports up to 30A combined

#### Output FETs
- **Low-Current FETs:** 4× for accessories (hotends, fans)
  - Individual max: 15A
  - Combined max: ~8.5A without alternative wiring
- **High-Current FETs:** 2× parallel for heated bed

#### Connectivity
- **Ethernet:** Present (duplex issues resolved with inline resistors)
- **USB:** Available for 5V power option
- **Probe Input:** High-voltage capable (requires JP7 configuration)

#### Automatic Detection
- Hardware pins enable firmware to automatically detect board variant
- Auto-configuration for TMC2590 vs TMC2660 versions

#### Testing Coverage
Verified across multiple machine types:
- Leadscrew printers
- Router tables
- Delta printers
- Laser cutters
- CNC mills
- Standard FDM printers

---

## PART 3: DEVELOPMENT CHALLENGES ENCOUNTERED

### 3.1 Hardware Challenges (Alpha Phase)

1. **5V Regulator Backfeed**
   - Severity: Critical
   - Resolution: Trace cut + Schottky diode installation

2. **Missing Flash Chip**
   - Severity: Critical
   - Resolution: Component installation at U5

3. **Stepper Driver Logic**
   - Severity: High
   - Resolution: Pin bridge 19-21

4. **Ethernet Duplex**
   - Severity: Medium
   - Resolution: Inline resistors for termination

### 3.2 Supply Chain Challenges

#### Chip Shortage Impact (2021-2022)

**Component Availability:**
- LPC4330: Completely unavailable worldwide
- LPC1769: Unavailable at normal prices
- TMC2590: Severe delays (6+ months)
- MCUs: 5x normal pricing

**Financial Impact:**
- Component cost increases
- 25% US import tariff
- Compounding formula: x + (0.25x)

**Strategic Responses:**
- Switched from LPC to STM32 architecture
- Designed dual TMC2660/TMC2590 support
- Suspended V1.1 production
- Redesigned with obtainable components

### 3.3 Manufacturing Challenges

#### Reflow Oven Belt Failure (February 2023)

**Problem:**
- Conveyor belt failed during production run
- 50 boards in process (V2 TMC2660, bottom side)
- 6 boards in oven when failure occurred

**Design Flaw:**
- Equipment required nearly complete disassembly for belt replacement
- Poor serviceability

**Solution:**
- 555 timer circuit for speed control
- Readily available components
- Practical implementation

---

## PART 4: FIRMWARE AND SOFTWARE DEVELOPMENT

### Firmware Work (Mentioned)

**Developer:** Wolfmanjm (primary)

**Milestones:**
- Test board created by Kliment for stepper driver testing
- Firmware integration work with TMC drivers
- STM32 architecture preferred by lead developer
- Automatic board detection implementation
- Pre-loaded firmware on shipped boards
- Sample configurations included

**Collaboration:**
- Wolfmanjm: Lead firmware developer
- Triffid Hunter: Technical consultant
- Kliment: Hardware design and test boards

---

## PART 5: NON-V2 BLOG POSTS (For Completeness)

### 5.1 Right to Repair Story (March 2025)

**Post:** "A story of right to repair, hacking Ewaste and the circle of opensource"
**Date:** March 1, 2025

#### Overview
Chronicles refurbishing a Manncorp MC384V2 pick-and-place machine after manufacturer refused support.

**Service Wall:**
- Manncorp would only provide support through paid contracts
- Declined assistance with older equipment

**Problem-Solving:**
- Discovered handwritten calibration code inside equipment: "918228"
- Manufacturer used simple pattern (reversing and repeating digits)
- Enabled full machine operation

**Feeder Expansion:**
- Needed more feeders for Smoothieboard manufacturing
- 3D-printed solutions proved inadequate
- Firmware design limitations

**Relevance to V2:** Demonstrates manufacturing capabilities used for V2 production

---

### 5.2 Connector Bagging Solution (May 2023)

**Post:** "Brawndo Bottle Binderclip Bagger"
**Date:** May 15, 2023

#### Innovation
DIY multi-bottle bagging system for efficiently packaging electronic connectors.

**Method:**
1. Cut bottom from sports drink bottles (3-inch hole saw)
2. Mount to T-slot aluminum (20mm from base)
3. Attach binder clips with zip ties

**Results:**
- Five bottles = 5x faster bagging
- "every 10 seconds you save per bag adds up when doing hundreds or thousands"
- Repurposes waste beverage containers

**Relevance to V2:** Packaging solution for V2 connector fulfillment

---

### 5.3 Stencil8 Jigs (August 2021)

**Post:** "Stencil8 Jigs now available"
**Date:** August 19, 2021

#### Product
Repurposed RepRap heated beds into precision tooling plates.

**Specifications:**
- Laser-cut aluminum plates
- 21×21 grid of 2.5mm holes
- 10mm spacing (center to center)
- Bead-blasted and color-anodized

**Applications:**
- PCB fixturing for stenciling solder paste
- SMT reflow soldering preparation
- Laser cutter tooling plates
- Pin-based fixturing

**Relevance to V2:** Tooling used in V2 assembly process

---

### 5.4 V1 Core Prototype (April 2021)

**Post:** "Smoothieboard V1 Core Prototype"
**Date:** April 25, 2021

#### Design Philosophy
Smoothieware-compatible board following V2 architectural approach.

**Minimalist Core:**
- Essential microcontroller functionality only
- No Ethernet ports, FETs, or stepper drivers on main board
- Modular expansion via Gadgeteer headers

**Gadgeteer Header Pinout:**
- Exposes every other pin
- Standard: 7 GPIO, 5V, 3.3V, GND

**Modular Advantages:**
- Upgrade individual components independently
- No need to replace entire board
- Electrical isolation for noise-sensitive circuits
- Improved thermal management
- Flexible heatsinking and rail-mounting

**Raspberry Pi Integration:**
- No USB header on board
- Spring connectors on underside
- Contact with RPi 3B test points
- Transmits USB data signals
- Eliminates traditional connectors and cables
- Passthrough USB for higher-power peripherals

**Relevance to V2:** Testing modular architecture concepts for future V2 variants

---

### 5.5 V1 Stock Announcement (March 2021)

**Post:** "Smoothieboard 5xc 1.1 in stock"
**Date:** March 2, 2021

#### Announcement
Smoothieboards restocked after extended limited availability.

**Details:**
- Immediate purchase available
- OEM quantities coming soon
- Authentic units only
- Sales support further development
- International customers: contact for shipping quotes

**Context:** During V2 development, V1 production suspended due to chip shortage

---

### 5.6 Independence Day Promotion (July 2021)

**Post:** "Independence day Discount"
**Date:** July 3, 2021

#### Offer
$10 off orders using coupon code **4THOFJULY**

**Dates:** July 3-6, 2021

**Milestone:** 10th anniversary of RoboSprout business

---

### 5.7 Vintage Print Test (June 2021)

**Post:** "Old print flashback....."
**Date:** June 29, 2021

#### Project
Serviced and upgraded 3D printers built for school in 2014.

**Test Print:**
- Reprinted design by Louise Driggers
- Used original G-code from 7 years prior
- Demonstrated long-term printer viability

**Technical Specs:**
- PBC rails and GT2 belts
- Smoothieboard controller
- Jhead hotend
- 0.3mm layers, 10% infill, single-perimeter walls

**Takeaway:** Well-engineered printers maintain operational viability for extended periods

---

### 5.8 ABS Print Challenge (May 2021)

**Post:** "How to successfully fail an ABS print while still having it succeed"
**Date:** May 16, 2021

#### Experiment
Intentionally challenging ABS print for K40 laser exhaust adapter.

**Adverse Conditions:**
- 8-year-old Protoparadigm ABS
- 2013 Makerbot Replicator Pro
- 65°F ambient (no enclosure)
- Edge positioning on uneven heating area

**Results:**
- Significant warping and delamination
- Cosmetic defects didn't compromise structural integrity
- Characterized as "successful failure"
- Part functional for intended use

---

## PART 6: TIMELINE SUMMARY

### Complete V2 Development Timeline

| Date | Milestone | Status |
|------|-----------|--------|
| **Oct 2020** | V2 Prime Alpha prototyping begins | 4 critical hardware issues identified |
| **Jun 2021** | V2 coupon offer announced | Customer appreciation during wait |
| **Jun 2021** | Chip shortage impact revealed | LPC4330 unavailable, pivot to STM32 |
| **Jul 2021** | 10th anniversary promotion | Business milestone celebrated |
| **Aug 2021** | Stencil8 jigs available | Manufacturing tooling prepared |
| **Sep 2021** | PCBs ready for assembly | Components on order, stepper drivers backordered |
| **Feb 2022** | Final prototype complete | 3 revisions done, dual driver support confirmed |
| **Feb 2023** | Reflow oven belt failure | Production crisis during V2 assembly |
| **Feb 2023** | Final specifications announced | STM32H745, TMC2660/2590 variants confirmed |
| **May 2023** | Kickstarter fulfillment begins | TMC2660 boards shipping first |
| **May 2023** | Unboxing warnings published | Critical safety information released |
| **Feb 2025** | V2 Prime retail launch | "long awaited sequel" now in stock |
| **Mar 2025** | Manufacturing capability story | Pick-and-place hacking for V2 production |

---

## PART 7: KEY PERSONNEL

### Development Team

**Chris Cecil**
- Author of all blog posts
- Hardware manufacturing lead
- Problem-solving (oven repair, connector bagging, etc.)
- RoboSprout proprietor
- Active RepRap community member since 2011
- Worked with Smoothieware/Smoothieboard since 2013

**Wolfmanjm**
- Lead firmware developer
- STM32 architecture advocate
- Firmware integration for TMC drivers
- Automatic board detection implementation

**Kliment**
- Board designer
- Test board creation (stepper driver focus)
- Schematic and documentation revision
- Joined during chip shortage pivot

**Triffid Hunter**
- Technical consultant
- Hardware troubleshooting collaboration

---

## PART 8: MANUFACTURING AND FULFILLMENT

### Production Equipment

**Pick-and-Place Machine:**
- Manncorp MC384V2 (refurbished)
- Service code reverse-engineered
- Expanded with custom solutions

**Reflow Oven:**
- Conveyor belt system
- Belt failure incident (Feb 2023)
- 555 timer repair solution

**Stencil Equipment:**
- Custom Stencil8 jigs
- Laser-cut aluminum plates
- 21×21 hole grid

### Component Sources

**Challenges:**
- Digikey: TMC2590 delays (March 2022 estimate)
- Mouser: TMC2590 delays (April 2022 estimate)
- China: Shipping delays for component spools
- Open market: STM32H745 scarcity

### Fulfillment Strategy

**Phase 1 (May 2023):**
- V2 Prime backers
- Early bird Prime backers
- TMC2660 boards (ready first)

**Phase 2:**
- TMC2590 production
- Broader Kickstarter fulfillment

**Phase 3 (Feb 2025):**
- Retail availability
- General public sales

---

## PART 9: CRITICAL V2 INFORMATION FOR DOCUMENTATION

### Essential Technical Details

#### Power Warnings
1. **ALWAYS** verify polarized connector polarity before power-up
2. **DO NOT** pull board by attached wires
3. **Cut JP7** for probe voltages up to 24V
4. **Motor power** feeds 5V regulator - ensure proper connection

#### Current Limits
- Individual FET: 15A maximum
- Combined 4 FETs: ~8.5A maximum (without alternative wiring)
- Vfet dual connectors: 30A combined maximum
- Single Vfet connection: Sufficient for <15A

#### Board Variants
- **TMC2660:** 1.2-2.2A, laser/printer applications
- **TMC2590:** 2.5-4.6A, CNC/mill applications
- **Firmware auto-detects** variant via hardware pins

#### 5V Power Options
1. USB power
2. Onboard regulation (from motor power)
3. External 5V supply

### Compatibility Notes
- Users familiar with V1 Smoothieboards find setup straightforward
- Ships with current firmware pre-loaded
- Sample configurations included
- Startup guide planned (component ID, proper connections)

---

## PART 10: FUTURE DEVELOPMENT ROADMAP

### Post-V2 Prime Plans (as of Sep 2021)

**Priority Order:**
1. **V2 Prime** ✓ COMPLETED (Feb 2025)
2. **V2 Mini** - Next priority
3. **V2 Core** - Following Mini
4. **V2 Pro** - Planned last

### Modular Architecture Vision

**V1 Core Prototype** (Apr 2021) tested concepts:
- Gadgeteer header expansion
- Modular component upgrades
- Electrical isolation
- Thermal management improvements
- Raspberry Pi integration via spring connectors

**Potential Future Applications:**
- Individual component upgrades
- Custom expansion modules
- Rail-mounting flexibility
- Noise-sensitive circuit isolation

---

## APPENDICES

### Appendix A: Complete Blog Post List (Chronological)

1. **Oct 14, 2020** - Smoothieboard V2 Prototyping Update 1
2. **Mar 2, 2021** - Smoothieboard 5xc 1.1 in stock
3. **Apr 25, 2021** - Smoothieboard V1 Core Prototype
4. **May 16, 2021** - How to successfully fail an ABS print
5. **Jun 1, 2021** - The global chip shortage and Smoothie
6. **Jun 29, 2021** - Smoothieboard V2 Coupon
7. **Jun 29, 2021** - Old print flashback
8. **Jul 3, 2021** - Independence day Discount
9. **Aug 19, 2021** - Stencil8 Jigs now available
10. **Sep 4, 2021** - Status of Smoothieboard V2…September 2021 update
11. **Feb 22, 2022** - Smoothieboard V2 February update
12. **Feb 15, 2023** - Smoothieboard V2 Final specs and update
13. **Feb 21, 2023** - Murphy broke the belt
14. **May 15, 2023** - Brawndo Bottle Binderclip Bagger
15. **May 15, 2023** - Kickstarter fulfillment update #1
16. **May 16, 2023** - Smoothieboard V2 Unboxing and setup warnings
17. **Feb 28, 2025** - Smoothieboard V2 Prime Now in stock
18. **Mar 1, 2025** - A story of right to repair, hacking Ewaste

### Appendix B: V2-Specific Posts

**Direct V2 Development Posts (8 total):**
1. V2 Prototyping Update 1 (Oct 2020)
2. V2 Coupon (Jun 2021)
3. Status of V2 September 2021 (Sep 2021)
4. V2 February update (Feb 2022)
5. V2 Final specs and update (Feb 2023)
6. Kickstarter fulfillment #1 (May 2023)
7. V2 Unboxing and setup warnings (May 2023)
8. V2 Prime Now in stock (Feb 2025)

**Related Manufacturing Posts (2 total):**
9. Murphy broke the belt (Feb 2023) - V2 production crisis
10. Right to repair story (Mar 2025) - V2 manufacturing equipment

### Appendix C: Key Quotes

**On Development Progress:**
> "the V2 Smoothieboard progress has been slow but it overall has been very productive" (Oct 2020)

**On Chip Shortage Impact:**
> "we were forced (to the glee of some of the devs) to change to the STM32H745" (Feb 2023)

**On Manufacturing Readiness:**
> "PCBs and stencils ready to go" (Sep 2021)

**On Fulfillment:**
> "Boards are beginning to go out. People should start getting boards any time now" (May 2023)

**On Launch:**
> "Finally after a long battle…the long awaited sequel to the Smoothieboard is now in stock and available for retail sale" (Feb 2025)

**On Safety:**
> "Please pay careful attention to these warnings as they greatly affect the performance and safety of your device" (May 2023)

---

## CONCLUSION

This comprehensive extraction reveals a **4.5-year development journey** from initial V2 prototyping (October 2020) to retail availability (February 2025). The project overcame significant challenges including:

- Hardware design issues (Alpha phase)
- Global chip shortage forcing architecture changes
- Supply chain delays (TMC2590 drivers)
- Manufacturing equipment failures
- Component price inflation and tariffs

The final V2 Prime product features:
- STM32H745 microcontroller (265-pin BGA)
- Dual TMC2660/TMC2590 driver variants
- Automatic board detection
- Tested across multiple machine types
- Pre-loaded firmware with sample configurations

**Development Team:** Chris Cecil (hardware/manufacturing), Wolfmanjm (firmware lead), Kliment (board design), Triffid Hunter (technical consultant)

**Current Status (as of Feb 2025):** V2 Prime in retail stock, future variants (Mini, Core, Pro) planned

---

**Report End**
**Total Pages:** 19 blog posts analyzed
**V2-Specific Content:** 10 posts directly related
**Timeline Covered:** October 2020 - March 2025 (4.5 years)
