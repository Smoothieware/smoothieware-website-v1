# Simple Things to Add

This file contains documentation improvement suggestions that can be easily done with information at-hand, without significant user effort or creation of complex assets.

**Criteria for inclusion:**
- Adding notes, warnings, or disclaimers
- Adding cross-references and links to existing pages
- Adding brief explanations or clarifications
- Adding configuration examples (when format is known)
- Adding deprecation notices
- Simple text changes

---

## docs/getting-started/glossary.md
`/glossary`

- Add version-specific hardware terms to glossary (LPC1769, STM32H745, TMC2660, TMC2590, etc.)
- Consider adding V2-specific terms as definitions become available

---

## docs/hardware/panels/rrdglcdadapter.md
`/rrdglcdadapter`

- Add prominent banner at very top: "V1 Hardware Only - Not Compatible with Smoothieware V2"
- Add comparison note of V1 display options (Smoothiepanel, RRD GLCD) vs V2 options (ST7920, TM1638)

---

## docs/hardware/panels/smoothiepanel.md
`/smoothiepanel`

- Add disclaimer banner at top: "This is historical V1 documentation. For V2 display options, see [display support page]"

---

## docs/modules/input-controls/emergencystop.md
`/emergencystop`

- Add section explaining what `unkill_enable = false` means for safety
- Add brief troubleshooting section: "Kill button not responding"
- Add testing procedures note: how to verify kill button functionality after configuration
- Add link to Kill Button Module documentation for software-based emergency stop details
- Clarify which emergency stop methods are hardware (external circuit) vs software (kill button module)

---

## docs/modules/input-controls/jogger.md
`/jogger`

- Add explicit note that jogger is deprecated in V2 and point to MPG module documentation
- Add references to V2 MPG documentation with links once MPG page exists
- Consider adding archive banner: "This is historical V1 documentation"

---

## docs/modules/input-controls/jogger-dev.md
`/jogger-dev`

- Add note that jogger is deprecated in V2; point developers to MPG module documentation
- Document that V1 joystick data source mechanism doesn't exist in V2 architecture

---

## docs/modules/input-controls/jogger-options-for-include.md

- Do not edit, -include settings page should not get extra notes/information as part of this process.

---

## docs/modules/input-controls/joystick.md
`/joystick`

- Add migration checklist for converting V1 joystick configurations to V2, , use <versioned> format, check `community.md` and `editing-the-wiki.md` pages for working examples.
- Add note about behavioral differences between LPC1769 and STM32H745 analog inputs

---

## docs/migration/from-grbl.md
`/from-grbl`

- Add V2 configuration examples alongside existing V1 examples (using INI format), use <versioned> format, check `community.md` and `editing-the-wiki.md` pages for working examples.
- Add note about command compatibility between versions
- Add brief configuration format comparison table (GRBL vs V1 flat vs V2 INI)

---

## docs/migration/from-marlin.md
`/from-marlin`

- Add V2 INI format configuration examples alongside existing V1 examples, use <versioned> format, check `community.md` and `editing-the-wiki.md` pages for working examples.
- Add note about external driver configuration differences in V2, use <versioned> format, check `community.md` and `editing-the-wiki.md` pages for working examples.
- Add brief note about bed levelling v1/v2 differences with link to zprobe docs

---

## docs/migration/migrating.md and migrating-for-include.md
`/migrating`

- Add configuration format examples: Code blocks showing side-by-side V1 flat vs V2 INI comparison, use <versioned> format, check `community.md` and `editing-the-wiki.md` pages for working examples.
- Add migration decision guide: Help users choose V1 for stability vs V2 for new hardware/features
- Add common pitfalls section for migration-specific issues

---

## docs/modules/endstops-probes/endstops.md
`/endstops`

- Add "Quick Migration Guide" section with before/after config examples (V1 flat vs V2 INI), use <versioned> format, check `community.md` and `editing-the-wiki.md` pages for working examples.

---

## docs/modules/endstops-probes/guide-endstops.md
`/guide-endstops`

- Add note that V2 actual pins depend on board variant (Prime vs Mini), use <versioned> format, check `community.md` and `editing-the-wiki.md` pages for working examples.
- Add reference to pinout documentation for each board version, use <versioned> format, check `community.md` and `editing-the-wiki.md` pages for working examples.

---

## docs/modules/endstops-probes/zprobe.md
`/zprobe`

- Add note about ZProbe no longer conflicting with endstop pins in V2, use <versioned> format, check `community.md` and `editing-the-wiki.md` pages for working examples.

---

## docs/modules/endstops-probes/using-fsrs.md
`/using-fsrs`

- Add V2 configuration example using appropriate pin syntax, use <versioned> format, check `community.md` and `editing-the-wiki.md` pages for working examples.
- Add troubleshooting section: common issues (no trigger, false triggers, intermittent detection)
- Add brief BLTouch comparison note

---

## docs/modules/extruders/extruder.md
`/extruder`

- Add version-specific configuration examples section (V1 flat format vs V2 INI format), use <versioned> format, check `community.md` and `editing-the-wiki.md` pages for working examples.
- Document hotend selection differences between V1 and V2 (naming, enable flags, etc.), use <versioned> format, check `community.md` and `editing-the-wiki.md` pages for working examples.

---

## docs/modules/extruders/filament-detector.md
`/filament-detector`

- Add note that interrupt-capable pins vary by board - recommend checking board documentation, use <versioned> format, check `community.md` and `editing-the-wiki.md` pages for working examples.
- Document encoder wheel specifications (tooth count, pulse per rotation) if available

---

## docs/hardware/pins/lpc1769-pin-usage.md
`/lpc1769-pin-usage`

- Add migration guide section with real config examples showing V1 to V2 pin format conversion, use <versioned> format, check `community.md` and `editing-the-wiki.md` pages for working examples.
- Add side-by-side comparison table showing V1 pin format vs V2 pin format with example mappings, use <versioned> format, check `community.md` and `editing-the-wiki.md` pages for working examples.

---

## docs/hardware/pins/pin-configuration-for-include.md

- Add dedicated "V1 to V2 Configuration Migration" section with common pin conversions, use <versioned> format, check `community.md` and `editing-the-wiki.md` pages for working examples.
- Add warning about pin modifier syntax changes between versions (`!`, `^`, `o` modifiers)

---

## docs/machine-guides/laser-cutters/blue-box-guide.md
`/blue-box-guide`

- Add note about microstepping differences: V2 TMC2660/TMC2590 support up to 1/256 vs v1's 1/32, use <versioned> format, check `community.md` and `editing-the-wiki.md` pages for working examples.
- Add troubleshooting section for common issues
- Add brief G-code examples for laser-specific operations (M3/M5 usage, G0/G1 turn the laser on/off, etc, see source code)

---

## docs/machine-guides/laser-cutters/bluebox-guide.md
`/bluebox-guide`

- Add safety interlocks note: Door safety interlock integration via TTL pin
- Add testing instructions: Testing laser firing safely with M3/M5 commands
- Add LightBurn integration reference

---

## docs/machine-guides/cnc/cnc-mill-guide.md
`/cnc-mill-guide`

- Add note about endstop configuration differences (v1 `alpha_min_endstop` vs v2 `[alpha endstop]` section syntax), use <versioned> format, check `community.md` and `editing-the-wiki.md` pages for working examples.
- Add link to motion control documentation showing v1 vs v2 configuration equivalents, use <versioned> format, check `community.md` and `editing-the-wiki.md` pages for working examples.

---

## docs/machine-guides/cnc/pcb-milling.md
`/pcb-milling`

- Add configuration examples comparison: side-by-side snippets showing V1 and V2 setups, use <versioned> format, check `community.md` and `editing-the-wiki.md` pages for working examples.

---

## docs/meta/syntax.md
`/syntax`

- Add common configuration examples for Smoothieware-specific use cases
- Add troubleshooting section for rendering issues

---

## docs/hardware/boards/smoothieboards-for-include.md

- Add brief side-by-side table comparing all board specs (v1 3X/4X/5X vs v2 Prime/Mini/Pro)

---

