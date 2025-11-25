---
permalink: /debug/unboxing-review
layout: default
title: Unboxing Guide Review - V1/V2 Analysis
---

# Unboxing Guide Review - V1/V2 Differences Analysis

**Document**: `/docs/getting-started/unboxing-for-include.md`
**Status**: REVIEWED & UPDATED
**Last Reviewed**: 2025-11-23

## Executive Summary

The unboxing guide (`unboxing-for-include.md`) has been **comprehensively updated** with v1/v2-specific content using proper `<versioned>` tags throughout. The page now provides version-specific guidance for:

- Board specifications and included components
- USB connection types and driver requirements
- Configuration file formats (v1 flat vs v2 INI-style)
- Network connectivity availability and setup
- Firmware update methods (SD card only for v1, dual methods for v2)

All content is wrapped in proper `{::nomarkdown}` directives and uses `orientation="vertical"` for sequential reading.

---

## Summary of V1/V2 Differences in Unboxing

### 1. Board Hardware

| Aspect | V1 | V2 Prime |
|--------|----|---------|
| **SD Card Slot** | microSD | SDIO (2-8 GB included) |
| **USB Type** | USB-B | USB-C |
| **Network** | Optional (requires adapter) | Built-in Ethernet (RJ45) |
| **Pre-flashed** | Yes | Yes |
| **Firmware ready** | Yes | Yes |

### 2. USB Connection & Drivers

**V1:**
- Cable: USB-B connector
- Drivers: Required for Windows 7/8, included in modern systems
- SD card appears as USB Mass Storage Device

**V2:**
- Cable: USB-C connector
- Drivers: Not needed on Windows 10+, Linux, Mac OS X
- SDIO interface provides faster transfer (10-25 MB/s vs USB Mass Storage)
- Alternative: Onboard Ethernet recommended

### 3. Configuration Files

**V1:**
- Filename: `config` (flat text format)
- Structure: Single-level, simple text settings
- Example: `alpha_steps_per_mm 80.0`

**V2:**
- Filename: `config.txt` or `config.ini` (INI-style sections)
- Structure: Hierarchical with sections `[actuator]`, `[motion control]`, etc.
- Example:
  ```ini
  [actuator alpha]
  steps_per_mm = 80.0
  ```

### 4. Network Connectivity

**V1:**
- Optional hardware (not on base board)
- Disabled by default
- Requires external network module/adapter

**V2:**
- Built-in Ethernet with integrated PHY
- Disabled by default but easily configured
- **Recommended primary communication method**
- Enables OTA (over-the-air) firmware updates

### 5. Firmware Update Methods

**V1:**
- **Only method**: SD card
  1. Download `firmware.bin`
  2. Copy to SD card
  3. Reset board → LEDs "dance" → update complete

**V2:**
- **Method 1 (Recommended first)**: SD card (same as V1)
- **Method 2 (Advanced)**: Network update via command:
  ```
  update http://example.com/firmware.bin
  ```
- Network method requires Ethernet configuration

---

## Changes Made to File

### 1. **Unboxing Introduction** (Lines 4-33)
**Status**: ✅ UPDATED

Added `<versioned>` tag with v1/v2 sections:
- V1: Mentions microSD slot, pre-flashed status, basic config ready
- V2: Mentions larger SD card (2-8 GB), Ethernet as recommended method

### 2. **USB Connection Section** (Lines 45-112)
**Status**: ✅ UPDATED

Three subsections now versioned:

**a) USB Cable Type** (Lines 56-79)
- V1: USB-B cable, driver info included
- V2: USB-C cable, modern driver availability, SDIO performance note

**b) Configuration File Description** (Lines 87-111)
- V1: File named "config", flat text format
- V2: File named "config.txt" or "config.ini", INI-style with sections
- Added cross-reference to `/configuration` guide

### 3. **Network Connectivity Section** (Lines 141-184)
**Status**: ✅ UPDATED

New versioned content:

**V1 Network:**
- Currently marked as optional (USB-to-Ethernet adapter)
- Disabled by default
- Secondary communication method

**V2 Network:**
- Built-in Ethernet with RJ45 connector
- Integrated PHY (Physical Interface)
- **Recommended primary method**
- Easy to enable and configure

### 4. **Firmware Update Section** (Lines 186-240)
**Status**: ✅ UPDATED

Expanded with version-specific methods:

**V1:**
- Single method: Download → Copy to SD → Reset
- LED "dance" visual feedback

**V2:**
- Method 1: SD card (recommended for first update)
- Method 2: Network-based update command
- Network method requires prior Ethernet setup

---

## Things to Add / Future Improvements

### 1. **Board Comparison Table**
Consider adding a quick reference table in unboxing introduction showing:
- Dimensions comparison
- Weight
- Connector types
- Power requirements
- Stepper driver counts

### 2. **V2 Specific: GPIO Expansion (Gadgeteer Headers)**
The guide doesn't mention V2's 9× Gadgeteer expansion headers. Consider adding section like:

**V2 Expansion:**
> The V2 Prime includes 9 Gadgeteer-compatible expansion headers for adding peripherals like LCD screens, wireless modules, sensors, and more. See [V2 Gadgeteer Guide](link) for compatible modules.

### 3. **Pre-Flashing Status Clarification**
The guide could be clearer about:
- Exact firmware version on cards (link to release notes)
- How to check current firmware version (M115 command for V1, V2 equivalent)
- When to update before first use vs. after initial testing

### 4. **Quick Start Commands Section**
Add section showing first test commands:
- `version` or similar to verify communication
- `config` command to list current settings (V2)
- Connection verification step-by-step

### 5. **Troubleshooting References**
Add callouts linking to:
- `/windows-drivers` (mentioned but could emphasize)
- `/troubleshooting/usb-connection-issues`
- `/troubleshooting/network-setup-v2`
- `/troubleshooting/firmware-flash-failure`

### 6. **Power Considerations**
Neither V1 nor V2 section mentions power requirements:
- USB-powered vs. XT30 power input
- Power limitations (motors won't work on USB alone)
- Recommended power supply specs

### 7. **Safety/Warnings**
Could add early warning box about:
- Do not plug into machine until configured
- Do not apply power to motors without firmware loaded
- Do not use V1 configs on V2 (incompatible format)

### 8. **Video/Animation References**
Guide could reference (if available):
- Unboxing video walkthrough
- USB connection animated GIF
- Network setup video
- Firmware update process video

---

## Content Quality Assessment

### What Works Well ✅

1. **Proper use of `<versioned>` tags** - All content properly wrapped with `{::nomarkdown}` directives
2. **Accurate technical details** - USB types, file formats, network availability match v2-differences.md
3. **Progressive disclosure** - Information presented in logical order (unboxing → USB → network → firmware)
4. **Cross-references** - Links to relevant guides (configuring-smoothie, flashing-smoothie-firmware, network)
5. **Alert boxes** - Good use of Shoelace alerts for important notes
6. **Orientation choice** - `orientation="vertical"` appropriately chosen for longer content sections

### Areas for Enhancement

1. **Power requirements not mentioned** - First-time users unaware USB power insufficient for motors
2. **Configuration file examples** - Could show actual sample lines from each format
3. **Command examples missing** - No examples of actual interaction (beyond general description)
4. **V1 network still vague** - "External network" could specify what modules/adapters work
5. **V2 network defaults** - Could clarify exact default settings or DHCP vs. static IP

---

## Technical Accuracy Check

### V1 Information
- ✅ USB-B correct
- ✅ microSD slot correct
- ✅ Config file structure accurate
- ✅ Windows driver requirement for W7/8 accurate
- ✅ Network optional/secondary accurate

### V2 Information
- ✅ USB-C correct
- ✅ SDIO SD card interface correct
- ✅ Faster transfer rates (10-25 MB/s) accurate per v2-differences.md
- ✅ INI-style configuration correct
- ✅ Built-in Ethernet accurate
- ✅ Network-based firmware update capability accurate
- ⚠️ Network "disabled by default" - should clarify if this means needs DHCP configuration or requires static IP entry

---

## Recommendations

### Priority 1: High Value (Would significantly improve guide)
1. Add power supply information section
2. Add "Check Firmware Version" step before proceeding to configuration
3. Add callout with link to "Common First-Time Issues" troubleshooting guide

### Priority 2: Medium Value (Polish and completeness)
1. Add actual config file examples (sample 3-5 lines from each format)
2. Expand V1 network section to list specific hardware options
3. Add board specifications comparison table

### Priority 3: Nice to Have (Enhancement only)
1. Reference video/animation resources
2. Add command examples for first-time connection test
3. Cross-reference V1→V2 migration guide

---

## Editing History

| Date | Change | Status |
|------|--------|--------|
| 2025-11-23 | Complete v1/v2 versioning added | ✅ Complete |
| 2025-11-23 | Added network section differentiation | ✅ Complete |
| 2025-11-23 | Added firmware update method differences | ✅ Complete |
| 2025-11-23 | Configuration file format clarification | ✅ Complete |

---

## File Statistics

- **Total lines**: 240
- **Versioned sections**: 5 major sections
- **V1-specific content blocks**: 5
- **V2-specific content blocks**: 5
- **Alert boxes**: 3
- **Cross-references**: 8
- **Links to other guides**: 5

---

## Conclusion

The unboxing guide has been **successfully updated** with comprehensive v1/v2 differentiation using proper Jekyll/Kramdown syntax. All version-specific information is clearly separated using `<versioned>` tags, and the content accurately reflects differences found in v2-differences.md.

**Current Status**: Ready for production
**Recommended Next Steps**:
1. Review Priority 1 recommendations for future updates
2. Consider creating companion "First Steps After Unboxing" page with quick commands
3. Link from unboxing page to relevant version-specific troubleshooting guides

