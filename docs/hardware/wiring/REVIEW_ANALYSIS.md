# Analysis Report: warning.md v1/v2 Differences and Review Tags

## File Analyzed
- **File Path**: `/docs/hardware/wiring/warning.md` and `/docs/hardware/wiring/warning-for-include.md`
- **Analysis Date**: 2025-11-23
- **Status**: Complete with review tags added

## Overview
The warning-for-include.md file contains critical safety warnings for Smoothieboard hardware wiring. The file was analyzed for Smoothieboard v1 vs v2 differences and updated with review tags where version-specific information required clarification.

## Key Findings

### 1. Connector Type Differences Identified
- **v1 (Legacy)**: Uses Dupont connectors (5mm and 3.5mm variants)
- **v2 (Current)**: Uses Gadgeteer headers with standardized pinouts
- **Safety Implication**: Different physical connectors require different handling and polarity awareness

### 2. Sections with v1/v2 Differences

#### Section A: Polarity (Lines 17-48)
**Issue**: Generic reference to "older versions of the board" without explicitly mentioning v1 vs v2
**Original Text**:
```
"On older versions of the board, markings are partially hidden by the connector, making it confusing."
```
**Action Taken**: Added review tag `warning:polarity-v1v2-note` with proposal clarifying:
- v1 has potential marking visibility issues with Dupont connectors
- v2 with Gadgeteer headers has clearer markings
- Both versions should rely on wiring diagrams

#### Section B: VBB Power Input Markings (Lines 116-136)
**Issue**: Specific connector details (5mm vs 3.5mm) are v1-specific but not clearly labeled
**Original Text**:
```
"If your board came with connectors pre-soldered, the 5mm connector is present..."
"However, if you did not get your connectors soldered, and want to solder a 3.5mm connector instead of a 5mm connector, also note that the polarity is the opposite."
```
**Action Taken**: Added review tag `warning:vbb-connector-polarity` with proposal explicitly stating:
- v1 connector details (5mm and 3.5mm options with reversed polarity)
- v2 Gadgeteer header specifications
- General guidance applicable to both versions

#### Section C: Board Destruction Warnings (Lines 155-186)
**Issue**: Generic warning about connector mistakes doesn't address v1 vulnerability with Dupont connectors
**Original Text**:
```
"Plugging 12-24v (motor power) into anything you are not supposed to. Like the 5V line, or an end-stop or thermistor input for example."
```
**Action Taken**: Added review tag `warning:board-destruction-mistakes` with proposal noting:
- v1 Dupont connectors can be easily reversed or misinserted
- v2 Gadgeteer headers are more standardized but still require correct orientation
- Reinforces importance of verifying against wiring diagrams

## Review Tags Summary

| Tag ID | Section | Type | Lines | Status |
|--------|---------|------|-------|--------|
| `warning:polarity-v1v2-note` | Polarity | Version Clarification | 35-42 | Added |
| `warning:vbb-connector-polarity` | VBB Connector | Version-Specific Details | 123-134 | Added |
| `warning:board-destruction-mistakes` | Board Destruction | Vulnerability Awareness | 170-177 | Added |

## Sections WITHOUT v1/v2 Differences

The following sections apply universally to both v1 and v2 and require NO review tags:

1. **Disconnecting Stepper Motors** (Lines 45-56)
   - Safety procedure is identical across versions

2. **Preventing Shorts** (Lines 60-75)
   - General electrical safety applies to both

3. **Using the Right Connector** (Lines 79-90)
   - General guidance applies to both (specific to board, not version)

4. **Crimping Quality** (Lines 94-105)
   - Physical/electrical best practice, version-agnostic

5. **USB vs Ethernet** (Lines 140-147)
   - Communication option applies to both versions

6. **How to Destroy Your Board - Other Points** (Lines 155-180)
   - Points 2 and 3 (shorting and inductive loads) apply universally

7. **Heater Safety** (Lines 190-200)
   - Safety requirements identical for both

8. **Grounding** (Lines 204-232)
   - Electrical best practice, version-agnostic

9. **Environmental Hazards** (Lines 236-253)
   - Machine-type specific, not board-version specific

10. **Further Reading & Summary** (Lines 257-274)
    - General guidance applicable to both

## Technical Implementation

### Review Tag Structure Used
All review tags follow the standard pattern:
```html
<review id="warning:[section]:[topic]">
  <proposal>
    [Updated text with explicit v1/v2 information]
  </proposal>
  <original>
    [Original text from file]
  </original>
</review>
```

### Naming Convention
Review tag IDs follow the pattern: `warning:[section]:[topic]`
- Prefix: `warning` (indicates this is from safety warnings section)
- Section: identifies the warning subsection (e.g., `polarity`, `vbb-connector`)
- Topic: describes the clarification (e.g., `v1v2-note`, `connector-polarity`)

### Frontend Behavior
When deployed:
- **Local/Development**: Review tags display with toggle controls for comparing original vs proposal
- **Production**: Review tags automatically hide proposal content and display original text only
- **User Interaction**: Users can accept/reject changes or add comments in development mode

## Recommendations for Review

### For Acceptance:
1. **polarity-v1v2-note**: Clarifies vague "older versions" to explicit v1/v2 distinction
2. **vbb-connector-polarity**: Adds essential v2 Gadgeteer information
3. **board-destruction-mistakes**: Highlights v1-specific vulnerability with Dupont connectors

### For Consideration:
- Verify Gadgeteer header specifications mentioned for v2 are accurate
- Check if additional v2-specific connector images exist in `/images/` directory
- Consider adding cross-reference links to v2-specific hardware documentation pages

## Files Modified
- `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/hardware/wiring/warning-for-include.md`
  - 3 review tags added
  - No content removed
  - All original text preserved in `<original>` blocks

## Verification Checklist
- [x] All review tags have unique, descriptive IDs
- [x] Both `<proposal>` and `<original>` elements present in all tags
- [x] Review tags properly wrapped in `{::nomarkdown}...{:/nomarkdown}` blocks
- [x] No v1-specific content without context (now clarified in reviews)
- [x] File structure validated (all closing tags present)
- [x] No unintended content removed

## Next Steps
1. Review the three proposal texts for accuracy
2. Verify v2 Gadgeteer specifications are correct
3. Consider adding hyperlinks to v2-specific hardware documentation
4. Test review tag functionality in local Jekyll server
5. Commit changes once review is approved

---

Generated: 2025-11-23
Analysis Type: Version Differentiation Review
Total Review Tags Added: 3
File Status: Ready for Review
