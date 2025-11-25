---
permalink: /m5-review-analysis
layout: default
title: M5 Documentation Review Analysis
---

# M5 G-code Documentation Review

**Document Date:** 2025-11-23
**Page Reviewed:** `/docs/gcode-reference/m-codes/m5.md`
**Status:** Updated with Review Tags (Pending Human Review)

## Executive Summary

The M5 G-code page has been enhanced with comprehensive version-specific documentation covering Smoothieware V1 and V2 differences. The page now includes detailed behavioral explanations, configuration guidance for both versions, and additional information about spindle control mechanisms.

Three review sections have been added for human approval before finalization.

---

## Analysis Results

### Current State Assessment

The original M5 page was functional but lacked:
- Version-specific implementation details
- Behavioral explanation differences between V1 and V2
- Information about queue synchronization mechanics
- Details about speed memory behavior
- Emergency stop integration information
- Complete configuration examples

### Key V1/V2 Differences Identified

#### Implementation Architecture

| Aspect | V1 | V2 |
|--------|----|----|
| **Module** | SpindleControl | Switch |
| **Queue Handling** | `THECONVEYOR->wait_for_idle()` | Drain motion queue |
| **State Management** | Modal state tracking (stores speed as 0) | Sets switch state to off |
| **Output Control** | PWM, Analog, Modbus | PWM, Digital, Hardware PWM |

#### Configuration Differences

**V1:**
- Uses dedicated spindle module configuration
- Supports three control types: PWM, Analog, Modbus
- Pin format: LPC1769 (e.g., 2.4)
- Rich options: PID feedback, feedback pins, control parameters

**V2:**
- Uses Switch module
- Simplified configuration
- Pin format: STM32H7xx (e.g., PA5, PB12)
- Fewer configuration options but same core functionality

#### Behavioral Details

**Both versions:**
- Speed memory: Last M3 speed is retained after M5
- Queue synchronization: Waits for motion queue to empty
- Emergency integration: Auto-issued on M112
- Program end: Auto-issued on M2/M30 in GRBL mode

**V1-specific:**
- Only stops spindle if currently running
- Explicit modal state tracking

**V2-specific:**
- Applies configured off-state PWM/digital value
- Simplified state management

---

## Changes Made to `/docs/gcode-reference/m-codes/m5.md`

### Three Review Sections Added

#### 1. Version-Specific Intro (Review ID: `m5:version-specific-intro`)
**Added:** Reference to V1-specific additional commands (M4, M957, M958)
**Location:** After "Related Commands" section
**Rationale:** Mirrors structure from M3 page for consistency

#### 2. Behavior Section (Review ID: `m5:behavior-section`)
**Added:** New "Behavior" section with versioned containers
**Details:**
- V1: SpindleControl module implementation, queue waiting, speed tracking, redundancy prevention
- V2: Switch module, queue draining, state management, simplified approach

**Location:** After "Parameters" section
**Rationale:** Provides essential technical differences for users debugging or understanding implementation

#### 3. Additional Information (Review ID: `m5:additional-notes`)
**Added:** New "Additional Information" section with 4 subsections
**Details:**
1. **Speed Memory:** Explains retained speed behavior
2. **Queue Synchronization:** Details motion queue interaction
3. **Emergency Stop Behavior:** M112 and program-end handling
4. **Typical G-code Pattern:** Real-world example usage

**Location:** Before "Further reading" section
**Rationale:** Provides practical context and real-world usage patterns

### Existing Content Updates

**Configuration Section:** Enhanced with version-specific content
- V1: Added control type descriptions (PWM, Analog, Modbus)
- V1: Added complete PWM configuration example
- V2: Added Switch module context and pin format notes
- All wrapped in `<versioned orientation="vertical">` containers

---

## Content Sources

All technical information derived from:
1. **Source Document:** `/src/docs/v2-differences.md` (section 29463-29656)
   - M3 implementation details (lines 29463-29522)
   - M5 implementation details (lines 29586-29656)
   - Configuration and behavior patterns

2. **Reference Page:** `/docs/gcode-reference/m-codes/m3.md`
   - Page structure and versioned content patterns
   - Configuration example formatting
   - Related commands structure

3. **Guidelines:** `/docs/project/github/editing-the-wiki.md`
   - `<versioned>` tag usage and patterns
   - `<review>` tag format and structure
   - Markdown + Kramdown wrapping conventions

---

## Review Tags Usage

All three additions use the `<review>` tag system for human approval:

```html
{::nomarkdown}
<review id="m5:change-description">
<proposal>
{:/nomarkdown}

New or updated content goes here.

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

(No original content for new sections)

{::nomarkdown}
</original>
</review>
{:/nomarkdown}
```

### Review ID Summary

| ID | Section | Type | Status |
|----|---------|------|--------|
| `m5:version-specific-intro` | Related Commands | Addition | Pending |
| `m5:behavior-section` | New Behavior Section | Addition | Pending |
| `m5:additional-notes` | Additional Information | Addition | Pending |

---

## Things to Add (Future Enhancements)

### High Priority

1. **Coolant Integration:** Note about M7/M8/M9 coolant commands working alongside M5
2. **V2 Switch Configuration Example:** Specific switch.spindle settings for M5 behavior
3. **Troubleshooting Section:** Common issues like "spindle won't stop" and solutions
4. **VFD-Specific Notes:** Analog and Modbus V1 configuration details with examples

### Medium Priority

5. **Spindle Module Documentation Link:** Enhance reference to spindle-module page
6. **Performance Notes:** Queue synchronization timing impact
7. **Multi-Spindle Setup:** Advanced configuration with multiple spindles
8. **PID Feedback:** Closed-loop feedback behavior during M5

### Low Priority

9. **Historical Context:** Why V2 moved from SpindleControl to Switch
10. **Compatibility Notes:** GRBL mode vs. native Smoothieware behavior
11. **Debug Commands:** Using M957/M958 to verify spindle behavior

---

## Testing Recommendations

When reviewing on localhost (http://localhost:4000):

1. **Review Visibility:**
   - All three review sections should display with pink background
   - Control icons should appear (toggle, accept, reject, comment)

2. **Content Rendering:**
   - Verify `<versioned>` containers render correctly
   - Check that Kramdown-wrapped markdown displays properly
   - Confirm all `<mcode>` tags render as monospace

3. **Functionality Checks:**
   - Test version selector with both "V1 Only," "V2 Only," and "Show Both"
   - Verify horizontal/vertical orientation as specified
   - Check that color-coded borders appear in "Show Both" mode

4. **Links:**
   - Verify all internal links work (m3, m4, m957, m958, spindle-module)
   - Check that references to M2, M30, M112 work correctly

---

## Compatibility Notes

- **Jekyll Build:** All content uses standard Jekyll + Kramdown syntax
- **Shoelace Components:** No new components added, existing `<sl-alert>` preserved
- **Custom Tags:** Uses `<mcode>`, `<versioned>`, `<review>` tags
- **Browser Compatibility:** No JavaScript changes, pure HTML/CSS
- **Production Safety:** Review tags will be invisible on production site

---

## Version Information

- **Smoothieware V1:** LPC1769, SpindleControl module
- **Smoothieware V2:** STM32H745, Switch module
- **Documentation:** Covers both versions with clear separation

---

## Next Steps

1. **Review on Localhost:** Test all three review sections
2. **Provide Feedback:** Use localhost review icons to accept/reject/comment
3. **Export Review Data:** Copy JSON from console showing all decisions
4. **Finalization:** Remove review tags after approval, keeping final content
5. **Testing:** Verify page renders correctly with final content
6. **Commit:** Push updated documentation to repository

---

## Document Metadata

- **File Path:** `/docs/gcode-reference/m-codes/m5.md`
- **Permalink:** `/m5`
- **Change Type:** Enhancement + Version-Specific Content
- **Review Sections:** 3
- **Lines Added:** ~150 (review tags + content)
- **Lines Modified:** ~20 (configuration section)
- **New External Dependencies:** None
- **Breaking Changes:** None (pure additions)

