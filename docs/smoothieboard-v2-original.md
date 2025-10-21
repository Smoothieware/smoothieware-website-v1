# Smoothieboard v2 Original (LPC4330) - Cancelled Design

{::nomarkdown}
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>This Board Was Never Manufactured</strong><br><br>
  This page documents the <strong>original</strong> Smoothieboard v2 design based on the NXP LPC4330 microcontroller. The chip became unavailable worldwide due to the COVID-19 chip shortage, just weeks before the final production prototype was ready.<br><br>
  <strong>Zero units were shipped to customers.</strong> The design was cancelled and replaced with the <a href="smoothieboard-v2-prime">Smoothieboard v2 Prime (STM32H745)</a>, which is more powerful than the LPC4330 would have been.
</sl-alert>
{:/nomarkdown}

## What Happened

The short story: Global pandemic causes chip shortage. LPC4330 goes out of stock worldwide. Team redesigns around STM32H745. Three years late but better hardware.

The long story is more interesting.

### The Timeline

**Early Development (2015-2019):**
- 2015: Early v2 concept work begins
- 2015-2018: Initial work with LPC4337 (similar to LPC4330)
- 2018-2019: Design work on LPC4330-based v2
- 2019: TMC2260 tested on prototypes
- Mid-2019: TMC2260 supply issues, plan switch to TMC2590

**The Kickstarter (2019):**
- September 2019: Kickstarter campaign launched (LPC4330 design)
- Campaign successfully funded
- v2 Prime pledges at $155
- Planned delivery: April 2020

**The Shortage (2020):**
- April 2020: Original delivery date comes and goes (not met)
- 2020: COVID-19 pandemic disrupts global supply chains
- Automotive industry panic-buys chips
- Consumer electronics demand surges (work-from-home)
- LPC4330 goes out of stock worldwide
- Discovery happens **weeks before final prototype**

**The Pivot (2020-2021):**
- 2020: Team decides to redesign around STM32H745
- 2021: STM32H745 supply secured
- 2021: Developer (wolfmanjm) prefers STM32 platform anyway
- 2021-2022: Chip shortage continues, affects other components too
- 2022: TMC2590 delayed, TMC2660 back in stock, decide on both variants

**The Delivery (2023-2025):**
- 2022-2023: Prototyping and testing STM32H745 boards
- Early 2023: Production begins
- May 2023: First shipments to Kickstarter backers (v2 Prime, STM32H745)
- Late 2023: Kickstarter fulfillment completing
- February 2025: Retail availability announced

**Total Delay:** ~3 years from original April 2020 planned delivery to May 2023 actual delivery.

### Why LPC4330 Was Cancelled

**The Chip Shortage:**
The COVID-19 pandemic caused unprecedented disruption to semiconductor manufacturing and supply chains. The automotive industry, expecting reduced demand, cancelled chip orders. When demand rebounded faster than expected, they panic-bought everything available. Consumer electronics demand surged with work-from-home adoption. The result: massive chip shortage lasting years.

**Impact on Smoothieboard:**
- LPC4330 sold out globally
- No new production scheduled by NXP
- Grey market prices hit $500 per chip (if you could even find them)
- Insufficient supply for even small production runs
- Kickstarter deliveries would be impossible

**Critical Timing:**
The shortage was discovered **weeks before the final production prototype** was scheduled. The design was nearly complete. Functional prototypes had been tested. But with no chips available and no timeline for when they would be, continuing with LPC4330 meant indefinite delays - potentially years.

**The "Escape Hatch":**
Fortunately, the team had built design flexibility into the PCB layout. They call it an "escape hatch" - the layout allowed swapping MCUs if supply issues occurred. This foresight, which seemed paranoid at the time, saved the entire project.

### Why STM32H745 Was Chosen

**Options Considered:**
1. Wait for LPC4330 supply to resume - Could take years, unacceptable
2. Find alternative NXP chip - Similar supply issues across NXP line
3. Redesign for different MCU - Chosen option

**Why STM32H745:**
- STMicroelectronics had better inventory management than NXP
- Supply was available when NXP chips weren't
- More powerful than LPC4330 (upgrade, not downgrade)
- Developer (wolfmanjm) actually preferred STM32 platform
- Active development ecosystem
- Better specs across the board (see comparison below)

Turns out the chip shortage forced an upgrade, not a compromise.

## Planned Specifications (LPC4330 Design)

Most specifications were not finalized before cancellation. The following represents the design intent based on Kickstarter descriptions, prototype testing, and early development work.

### Microcontroller

| Component        | Specification                                     |
| ---------------- | ------------------------------------------------- |
| **MCU**          | NXP LPC4330                                       |
| **Architecture** | Dual-core ARM Cortex-M4 + M0                      |
| **M4 Clock**     | Up to 204 MHz                                     |
| **M0 Clock**     | Up to 204 MHz                                     |
| **Flash**        | External SPI/QSPI (LPC4330 has no internal flash) |
| **RAM**          | 264 kB SRAM                                       |
| **FPU**          | Single precision (M4 core only)                   |
| **Package**      | BGA (exact type not finalized)                    |

**Dual-Core Plan:**
- M4 core: Main firmware, motion control, real-time tasks
- M0 core: Networking, file I/O, auxiliary tasks, UI
- Better multitasking than v1's single-core

The lack of internal flash was a design consideration - external flash would need to be added to the PCB, adding cost and complexity.

### Stepper Drivers

The driver situation evolved during development:

**Original Plan: TMC2260**
- Tested on LPC4330 prototypes
- Confirmed working via SPI/UART
- ~2A per driver
- 4 drivers total
- 1/256 microstepping
- Stealthchop, SpreadCycle, StallGuard, CoolStep all supported

**Revised Plan: TMC2590**
- Changed mid-development due to TMC2260 supply issues (even before LPC4330 shortage)
- ~4.5A per driver for higher current applications
- Same advanced features
- Never actually tested on LPC4330 hardware before cancellation

The TMC2260 testing on LPC4330 prototypes was valuable - it proved the driver interface worked, and that knowledge transferred to the STM32H745 redesign.

### Other Planned Features

**Gadgeteer Expansion:**
- Multiple 10-pin headers (likely 8-9, not finalized)
- 7 GPIO per header
- ~50+ total GPIO available
- SPI, I2C, ADC, UART on different headers
- 3.3V, 5V, GND on each header
- This design carried forward to v2 Prime

**SD Card:**
- SDIO interface (major upgrade from v1's SPI)
- This was a huge planned improvement
- v1's SPI SD card was slow (~400-500 kB/s)
- SDIO would provide 10-25 MB/s
- Addressed #1 user complaint about v1
- **This improvement was successfully carried forward to v2 Prime**

**Ethernet:**
- 10/100 Mbps
- On-board PHY
- HTTP, Telnet, SFTP (port 115)

**USB:**
- USB Device (MSD + CDC) definitely planned
- USB Host possibly planned (LPC4330 supports it)

**Power:**
- XT30 connectors instead of v1's screw terminals
- On-board 5V regulator possibly standard (not confirmed)
- Similar 12-24V input as v1

**MOSFETs:**
- 4-6 outputs (exact count not finalized)
- Small MOSFETs for hotends/fans (~5A)
- Large MOSFETs for beds (~12A+)
- PWM control
- Improved thermal management over v1

**Thermistors:**
- 4+ buffered ADC inputs planned
- Better noise immunity than v1
- 12-bit with oversampling (LPC4330 has 10-bit ADC)

**Endstops:**
- 6+ inputs (X/Y/Z min/max)
- Improved ESD protection
- Better noise filtering
- Dedicated probe input likely

The exact details of protection circuits, MOSFET configuration, and power architecture were not finalized before the project was cancelled.

## Prototypes

Functional prototypes were built and tested:

**What Was Built:**
- LPC4330 microcontroller successfully brought up
- TMC2260 drivers confirmed working
- SPI/UART communication with drivers verified
- Basic firmware validation completed
- Enough testing to validate design direction

**What Was NOT Completed:**
- Final production prototype
- Complete firmware
- Extensive field testing
- Production tooling and manufacturing setup

**Prototype Count:**
Likely fewer than 10 units. These are in possession of the development team and were never sold. They're not compatible with v2 Prime firmware (different MCU architecture).

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>For Collectors:</strong> If someone claims to have an LPC4330 Smoothieboard v2, be extremely skeptical. Only a handful of development prototypes exist. Zero production boards were manufactured. Verify authenticity with RoboSprout.
</sl-alert>
{:/nomarkdown}

## What Kickstarter Backers Received

**Paid For:** LPC4330-based Smoothieboard v2 Prime ($155)

**Received:** STM32H745-based Smoothieboard v2 Prime ($155)

### The Comparison

| Feature                 | LPC4330 (Paid For)         | STM32H745 (Received)                | Result                             |
| ----------------------- | -------------------------- | ----------------------------------- | ---------------------------------- |
| **Cores**               | M4 + M0                    | M7 + M4                             | ✅ Better (both cores more capable) |
| **M4/M7 Speed**         | 204 MHz                    | 480 MHz                             | ✅ 2.35× faster                     |
| **Secondary Core**      | M0 (low-power)             | M4 with FPU                         | ✅ Much more capable                |
| **RAM**                 | 264 kB                     | 1 MB                                | ✅ 3.8× more                        |
| **Flash**               | External                   | 2 MB internal                       | ✅ Better (simpler, faster)         |
| **FPU**                 | Single precision (M4 only) | Double precision (M7) + Single (M4) | ✅ Better                           |
| **Availability (2020)** | None                       | Available                           | ✅ Actually exists                  |
| **Price**               | $155                       | $155                                | ✅ Same                             |
| **Delivery Date**       | April 2020 (planned)       | May 2023 (actual)                   | ❌ 3+ years late                    |

**The Bottom Line:**
Backers received a free upgrade to significantly more powerful hardware. The STM32H745 is better in every technical measure. The downside was the 3-year delay.

**Community Reaction:**
- Generally positive about the hardware upgrade
- Frustration about the delays (understandable)
- Appreciation for transparent communication
- Understanding of the unprecedented circumstances

The team's open communication about the challenges helped maintain community trust despite the significant delays.

## Kickstarter Campaign

**Campaign Details:**
- Launch: September 2019
- Funding goal: Met (exact amount not public)
- Planned delivery: April 2020
- Actual delivery: Never (LPC4330 cancelled), May 2023 (STM32H745)

**Variants Offered:**

**v2-mini:**
- Lower-cost entry-level variant
- Fewer features than Prime
- Details not finalized before cancellation
- Never manufactured (cancelled with LPC4330 design)

**v2-prime:**
- Direct successor to v1
- Full feature set
- $155 USD (Kickstarter price)
- The focus of development and this document
- Eventually shipped as STM32H745 version

**v2-pro:**
- High-end variant with FPGA
- Advanced features for future expansion
- Details not finalized before cancellation
- Never manufactured (cancelled with LPC4330 design)

Only the v2-prime variant eventually shipped, and only with STM32H745. The v2-mini and v2-pro were permanently cancelled.

## Why LPC4330 Made Sense (At The Time)

When design work began (2015-2019), choosing the LPC4330 was logical:

**Team Experience:**
The Smoothieboard v1 used the NXP LPC1769. The team had years of experience with NXP's LPC series, development tools, and programming models.

**Logical Evolution:**
LPC4330 was a natural progression from LPC1769:
- Same vendor (reduced learning curve)
- Dual-core architecture (big upgrade from single-core v1)
- Good documentation and development tools
- Active user community

**No Availability Concerns:**
In 2015-2019, chip availability wasn't a major concern. The LPC4330 was readily available from multiple distributors. No one predicted a global pandemic would cause years-long chip shortages.

**Dual-Core Appeal:**
The M4+M0 architecture was attractive for separating real-time tasks (M4) from auxiliary tasks (M0). This would have improved responsiveness over v1's single-core design.

The choice made complete sense given the information available at the time. The chip shortage was unprecedented and unpredictable.

## Lessons Learned

This project demonstrates several valuable principles for hardware development:

### Design Flexibility

The "escape hatch" in the PCB layout saved the project. The team deliberately designed in the ability to swap MCUs if needed. At the time, this seemed like paranoid over-engineering. In retrospect, it was brilliant foresight.

**Takeaway:** Build flexibility into designs. Don't assume your primary component will remain available.

### Supply Chain Risk

The 2020-2023 chip shortage affected everyone from hobbyists to Fortune 500 companies. Automotive manufacturers, with their massive purchasing power, couldn't get chips. Small open-source projects had no chance with single-source dependencies.

**Takeaway:** Supply chain risk is real and can last years. Have backup plans.

### Transparent Communication

The Smoothieboard team communicated openly with backers throughout the crisis. They explained the shortage, the redesign decision, the challenges, and the timeline. This honesty maintained community trust despite 3-year delays.

**Takeaway:** Transparent communication during crises maintains community support.

### Crisis as Opportunity

The forced redesign resulted in a better product. The STM32H745 is objectively superior to the LPC4330. Without the shortage forcing the change, backers would have received less capable hardware.

**Takeaway:** Sometimes constraints force improvements that wouldn't have happened otherwise.

## Why The 3-Year Delay?

Redesigning around a different MCU is not a simple swap. Here's what was involved:

**Complete PCB Redesign:**
- Different pin count and package
- Different peripheral interfaces
- Different power requirements
- Different oscillator and support circuitry
- Multiple board spins to get it right

**Firmware Rewrite:**
- STM32 HAL vs NXP HAL (completely different APIs)
- Different register maps
- Different peripheral drivers
- Different debugging tools
- Extensive testing required

**Component Sourcing:**
- Chip shortage affected many components, not just MCUs
- TMC driver supply also problematic (multiple revisions)
- Power components delayed
- Multiple redesigns as components became unavailable

**Prototyping and Testing:**
- Multiple prototype rounds
- Field testing with beta users
- Bug fixes and refinements
- Validation of all features

**Timeline Breakdown:**
- 2020-2021: Chip shortage discovery, redesign decision, initial PCB work
- 2021-2022: PCB redesign, firmware development, component sourcing
- 2022-2023: Prototyping, testing, production setup
- May 2023: First shipments

Each phase took longer than expected due to ongoing supply chain challenges and the complexity of the redesign.

## Current Status

The LPC4330 design is permanently cancelled. There will be no LPC4330 firmware, no LPC4330 support, and no revival of this design.

**All current Smoothieboard v2 boards use STM32H745.**

If you want a Smoothieboard v2, you want the [v2 Prime with STM32H745](smoothieboard-v2-prime.md).

## Frequently Asked Questions

**Q: Can I still buy the LPC4330 version?**

A: No. It was never manufactured for customers. Only a handful of development prototypes exist.

**Q: Is the LPC4330 version better than the STM32H745?**

A: No. The STM32H745 is better in every measurable way:
- Faster cores (480 MHz M7 vs 204 MHz M4)
- More RAM (1 MB vs 264 kB)
- More Flash (2 MB internal vs external)
- Better FPU (double precision vs single)
- More capable secondary core (M4 vs M0)

**Q: Why did the team choose LPC4330 originally?**

A: Experience with NXP from v1, logical evolution from LPC1769, good availability in 2015-2019, dual-core architecture was attractive. It was a sensible choice given available information.

**Q: Could the team have predicted the chip shortage?**

A: No. The COVID-19 pandemic and resulting multi-year chip shortage was unprecedented. Even major corporations with massive resources were caught off-guard. Design started years before the shortage (2015-2019).

**Q: Why did it take 3 years after the redesign decision?**

A: Complete PCB redesign, firmware rewrite for different architecture, ongoing component shortages affecting other parts, multiple prototyping rounds, and testing. The redesign was not a simple MCU swap - it was effectively designing a new board.

**Q: Will there ever be LPC4330 firmware support?**

A: No. All development is on the STM32H745 version. The LPC4330 design is permanently abandoned.

**Q: What happened to v2-mini and v2-pro?**

A: They were cancelled along with the LPC4330 design. Only v2-prime was eventually manufactured, and only with the STM32H745.

## Historical Significance

This design represents an interesting case study in open-source hardware development during unprecedented supply chain disruption.

**What It Demonstrates:**
- Impact of chip shortage on small projects
- How open-source hardware can adapt under pressure
- Value of design flexibility and "escape hatches"
- Importance of transparent communication
- Sometimes crises force upgrades that improve final products

**For Developers:**
- Build flexibility into PCB layouts
- Don't assume component availability will remain stable
- Have contingency plans for component shortages
- Maintain transparent communication during crises
- Design constraints can drive innovation

**For Historians:**
- Documents the 2020-2023 chip shortage from a small project's perspective
- Shows real-world impact of global supply chain disruption
- Example of successful adaptation to unforeseen circumstances
- Demonstrates resilience of open-source hardware development

## Related Pages

- [Smoothieboard v2 Prime (STM32H745)](smoothieboard-v2-prime.md) - The current production model (what actually shipped)
- [Smoothieboard v1 Specifications](smoothieboard-v1-specifications.md) - The proven, lower-cost alternative
- [Smoothieboards Main Page](smoothieboards.md) - All board variants
- [Getting a Smoothieboard](getting-smoothieboard.md) - Where to buy

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>Looking for actual hardware?</strong> Check out the <a href="smoothieboard-v2-prime">v2 Prime</a> for the current high-end board, or <a href="smoothieboard-v1-specifications">v1</a> for the proven, lower-cost option that's been in production since 2013.
</sl-alert>
{:/nomarkdown}

---

*This page documents the cancelled LPC4330 design for historical purposes.*
*Last updated: 2025-10-21*
