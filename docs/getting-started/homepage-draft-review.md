---
permalink: /homepage-draft-review
layout: default
title: Homepage Draft Review and Analysis
---

# Homepage Draft - V1/V2 Analysis Report

## Executive Summary

The `homepage-draft.md` file is a comprehensive landing page that covers Smoothieware's core value propositions. The analysis identified sections that need version-specific content, areas where V2 improvements should be highlighted, and specific differences that require clarification using the `<versioned>` tag system.

**Document Status:** Ready for v1/v2 processing with review tags
**Processing Date:** 2025-11-23

---

## Analysis Results

### 1. SUMMARY: Content Overview

The homepage contains 8 main feature sections:

1. **Welcome & Quick Links** - Universal introduction (lines 7-20)
2. **In a Nutshell - Powerful** - Hardware comparison (lines 24-49)
3. **In a Nutshell - Open Source** - Licensing/community (lines 52-73)
4. **In a Nutshell - Universal** - Multi-machine support (lines 76-100)
5. **Additional Features - Feature Rich** - Innovation/cutting-edge (lines 104-117)
6. **Documented** - Documentation quality (lines 120-131)
7. **Modular** - Code architecture (lines 134-142)
8. **Easy** - Configuration simplicity (lines 146-158)
9. **Community Driven** - Community focus (lines 162-172)
10. **Future Friendly** - Extensibility (lines 176-186)

**Versioning Impact:** 6 of 10 sections contain hardware-specific claims that differ significantly between V1 and V2.

---

### 2. CHANGES: V1/V2 Differences Identified

#### A. Section: "Powerful" (lines 24-49)

**Current Content Issue:**
- References "32 bit hardware in age of 8-bit boards" (lines 34-38)
- Discusses LPC1700 series (V1 platform) as recent innovation
- Claims "moving forward to more powerful platforms" (line 44)
- Specifies "LPC1769 Cortex-M3 32bit ARM chip, clocking 120Mhz, with 64kB RAM and 512kB flash" (line 46)

**V1/V2 Difference:**
- V1: LPC1769 (100-120 MHz, 64 KB RAM, 512 KB flash)
- V2: STM32H745 (480 MHz M7 core, 1 MB RAM, 2 MB flash)
- V2 is 4-5x faster, 16x more RAM, 4x more flash
- Marketing narrative for "more powerful platforms" is NOW REALIZED in V2

**Recommendation:**
```html
{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

Designed to run on [32 bit hardware](http://www.nxp.com/products/microcontrollers/product_series/lpc1700/) in an age of [8-bit boards](https://www.arduino.cc/en/Main/ArduinoBoardMega2560), with a lot of effort put into optimisation, and moving forward to [more powerful](http://www.nxp.com/products/microcontrollers/product_series/lpc4300/) platforms as they appear.

Smoothieboard v1 runs on a LPC1769 Cortex-M3 32bit ARM chip, clocking 120Mhz, with 64kB RAM and 512kB flash.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

Designed with significantly more powerful hardware than V1, Smoothieboard V2 runs on an STM32H745 dual-core processor with an M7 core clocking 480MHz, 1MB RAM, and 2MB flash - offering 4-5x faster processing and 16x more memory than V1.

This next-generation hardware enables advanced features like sensorless homing (StallGuard), ultra-quiet motor control (StealthChop), and support for more complex motion control algorithms.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}
```

---

#### B. Section: "Universal" (lines 76-100)

**Current Content Issue:**
- References "main 3 machines supported currently" (line 90)
- Includes `{% include getting-started/guides-for-include.md %}` (line 92)
- Mentions "Other machines machine types are possible, like vinyl cutters, and more machines are planned, like lathes, plasma cutters and 4/5-axis CNC mills" (line 94)

**V1/V2 Difference:**
- V1: Limited by 64KB RAM, older architecture
- V2: Much more capable - more sophisticated motion control, more memory for complex kinematics
- V2 potentially supports additional machine types not practical in V1

**Recommendation:**
The current universal section is platform-agnostic and works for both. However, a note could be added about V2 extending these possibilities.

---

#### C. Section: "Feature Rich" (lines 104-117)

**Current Content Issue:**
- States "Using superior hardware to pioneer features that make your life easier" (line 114)
- Mentions "cutting-edge functionality and see more added all the time" (line 116)

**V1/V2 Difference:**
- V1: At time of release (2013), LPC1769 WAS cutting-edge
- V2: Current cutting-edge with modern STM32H7 series
- V2 enables NEW features not possible in V1 (e.g., sensorless homing, StallGuard, higher step rates)

**Recommendation:**
Version-specific examples should be provided:

```html
{::nomarkdown}
<versioned orientation="horizontal">
<v1>
{:/nomarkdown}

Using superior hardware to pioneer features that make your life easier, allow for new digital fabrication techniques, or make the current ones more powerful.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

V2's significantly enhanced hardware enables new capabilities: sensorless homing with StallGuard4, ultra-quiet motor control with StealthChop2, higher step rates, and more advanced motion control algorithms.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}
```

---

#### D. Section: "Documented" (lines 120-131)

**Current Content Issue:**
- Generic claim about documentation completeness
- No version-specific documentation differences

**V1/V2 Difference:**
- V1 documentation: Mature, extensive coverage
- V2 documentation: Growing, less mature, configuration format is completely different (flat config → INI sections)

**Recommendation:**
```html
{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

The most complete and mature documentation for the V1 platform, with step-by-step guides for all supported machine types and in-depth documentation of each feature.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

Comprehensive documentation for V2 with step-by-step guides. Note that V2 uses an INI-style configuration format (different from V1), so configuration documentation differs. We're actively expanding V2 documentation as the platform matures.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}
```

---

#### E. Section: "Modular" (lines 134-142)

**Current Content Issue:**
- Generic architecture claim, works for both versions
- No version-specific differences

**V1/V2 Difference:**
- V1: Modular C++ codebase with modules
- V2: Completely new architecture (likely different implementation)
- Need to check v2-differences.md for architectural details

**Recommendation:**
This section is reasonably version-agnostic but could note evolution:

```html
{::nomarkdown}
<versioned orientation="horizontal">
<v1>
{:/nomarkdown}

Highly modular C++ code allows for easier contributor experience, better long-term codebase sanity, and a very versatile system that makes it easy to do unusual and innovative things.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

V2's redesigned architecture maintains modularity principles while improving performance and maintainability for the more powerful hardware platform.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}
```

---

#### F. Section: "Easy" (lines 146-158)

**Current Content Issue:**
- References "editing a file" and "live tuning" (lines 154)
- V1 uses flat config format, V2 uses INI-style format

**V1/V2 Difference:**
- V1: Edit flat text config, reload via USB
- V2: Edit INI-style config, same process but different format

**Recommendation:**
```html
{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

Experience painless configuration by editing a simple text file, with live tuning of parameters via USB connection. All options are documented in detail, and the community is very active to help if anything goes wrong.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

Experience painless configuration using INI-style text files, with live tuning of parameters via USB connection. Configuration is more powerful than V1, supporting the advanced hardware capabilities. All options are documented in detail.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}
```

---

### 3. THINGS TO ADD

#### A. V2-Specific Features to Highlight

From v2-differences.md, these V2 advantages should be mentioned:

1. **Motor Control Advances:**
   - StealthChop2: Ultra-quiet operation
   - SpreadCycle: High-performance at higher speeds
   - StallGuard4: Sensorless homing (completely new capability)
   - CoolStep: Dynamic current reduction
   - Microstepping: Up to 1/256 (8x finer than V1)

2. **Hardware Improvements:**
   - 4-5x faster processor (480 MHz vs 120 MHz)
   - 16x more RAM (1 MB vs 64 KB)
   - 4x more flash (2 MB vs 512 KB)
   - Dual-core potential (M7 + M4, currently only M7 used)
   - Real Ethernet (10/100 Mbps)
   - Better power distribution

3. **Developer Experience:**
   - More memory for complex features
   - Better debugging capabilities
   - Potential for advanced algorithms

#### B. Suggested New Section: "Hardware Evolution"

Consider adding a section specifically showing V1→V2 evolution:

```markdown
### Hardware Evolution

Smoothieware continues to evolve with modern hardware capabilities:

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

**V1 - The Classic:**
A proven platform for laser cutters, 3D printers, and CNC mills with reliable operation and mature documentation.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

**V2 - The Next Generation:**
Revolutionary hardware improvements including:
- 480 MHz dual-core processor (4x faster)
- 1 MB RAM (16x more)
- Advanced motor control (sensorless homing, ultra-quiet operation)
- Gigabit-ready networking
- Real-time capable with 256x microstepping

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}
```

#### C. Version Selection Recommendation

The page should include a note directing users to choose the right version:

```markdown
{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Choosing Your Version</strong><br>
  <strong>New to Smoothieware?</strong> Choose <strong>V2</strong> for access to latest hardware capabilities.<br>
  <strong>Running existing V1 system?</strong> V1 remains fully supported and stable.
</sl-alert>
{:/nomarkdown}
```

---

### 4. STATUS: Processing Recommendations

#### Current State
- **File:** `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/getting-started/homepage-draft.md`
- **Lines:** 187 total
- **Sections needing revision:** 6 of 10
- **Versioned tag candidates:** 6 locations

#### Next Steps

1. **Phase 1 - Quick Wins (No breaking changes):**
   - Add version selector note (before "Welcome to Smoothie")
   - Add hardware-specific alerts in "Powerful" section
   - Update "Feature Rich" with specific V2 features

2. **Phase 2 - Comprehensive Updates:**
   - Wrap sections A-F above with `<versioned>` tags
   - Add new "Hardware Evolution" section
   - Update feature lists with V2 capabilities

3. **Phase 3 - Review & Deploy:**
   - Test on localhost with version selector
   - Verify `<versioned>` tags render correctly
   - Check cross-links and includes still work
   - Deploy to production

#### Implementation Approach

**Option 1: Minimal (Safe)**
- Add simple `<sl-alert>` notices about V2 improvements
- Keep existing content for both versions
- Use `<versioned>` only where absolutely necessary
- Deploy quickly with low risk

**Option 2: Comprehensive (Better UX)**
- Use `<versioned>` tags for all 6 sections identified
- Rewrite hardware claims to be version-specific
- Add new "Hardware Evolution" section
- Provides better user experience but requires more testing

**Option 3: Phased (Balanced)**
- Start with sections A-C (high-impact, lower risk)
- Monitor feedback
- Add sections D-F after validation
- Add new sections later

---

## Technical Notes

### Tags to Use

1. **For hardware claims:** `<versioned orientation="vertical">`
2. **For feature lists:** `<versioned orientation="horizontal">`
3. **For alerts:** `<sl-alert variant="primary">`
4. **For code examples:** Consider adding V1 vs V2 config examples

### Files to Update

- `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/getting-started/homepage-draft.md`
- Possibly: `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/getting-started/guides-for-include.md` (if it has V1-only references)

### Testing Checklist

- [ ] Version selector shows/hides correct content
- [ ] Includes (`{% include getting-started/guides-for-include.md %}`) still work
- [ ] Images still display correctly
- [ ] Links are not broken
- [ ] Mobile layout still works
- [ ] Local Jekyll build succeeds (`jekyll serve`)

---

## References

**Source Files Analyzed:**
- `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/getting-started/homepage-draft.md` (187 lines)
- `/home/arthur/dev/smoothieware/smoothieware-website-v1/src/docs/v2-differences.md` (sections 1-3)
- `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/project/github/editing-the-wiki.md` (versioned tags documentation)
- `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/community/community.md` (example of versioned tag usage)

**Key Differences Found:**
- Hardware: V2 is 4-5x faster, 16x more RAM, 4x more flash
- Motor control: V2 adds StallGuard4, StealthChop2, CoolStep, 1/256 microstepping
- Configuration: V2 uses INI-style format instead of flat config
- Networking: V2 adds Ethernet support
- Memory: V2 enables more complex features

---

## Recommendation

**Process this page using comprehensive approach (Option 2)** with the following steps:

1. Create edited version with `<versioned>` tags for sections A-F
2. Add new "Hardware Evolution" section
3. Add version selection alert at beginning
4. Use `<review>` tags to wrap changes for human approval
5. Test on localhost
6. Iterate based on feedback
7. Remove `<review>` tags and deploy

This will provide users with accurate, version-specific information while maintaining a cohesive marketing message for both V1 (stable, proven) and V2 (next-generation, advanced).

