# Orphaned G-codes/M-codes Report (Final)

This report lists G-code and M-code references in the documentation that are NOT wrapped in `<gcode>...</gcode>` or `<mcode>...</mcode>` tags.

**Generated:** 2025-11-26 23:34:50

**Total:** 72 files, 345 code references

---

## docs/configuration/override-warning-for-include.md - Config Override Warning

- **Line 98**: `M500` (M-code)
  - Context: `- Allowing M500 command to save settings without editin...`

## docs/debug/debug-settings.md - Setting Tag Debug Page

- **Line 728**: `M306` (M-code)
  - Context: `...endstops and theta offset calibration (M306) rather than linear position, requiring...`
- **Line 748**: `G28` (G-code)
  - Context: `...to this endstop. When a homing command (G28) is issued, the firmware moves the axis...`
- **Line 798**: `G28` (G-code)
  - Context: `...to this endstop. When a homing command (G28) is issued, the firmware moves the axis...`
- **Line 848**: `G28` (G-code)
  - Context: `...to this endstop. When a homing command (G28) is issued, the firmware moves the axis...`
- **Line 898**: `G28` (G-code)
  - Context: `...to this endstop. When a homing command (G28) is issued, the firmware moves the axis...`
- **Line 948**: `G28` (G-code)
  - Context: `...to this endstop. When a homing command (G28) is issued, the firmware moves the axis...`
- **Line 998**: `G28` (G-code)
  - Context: `...to this endstop. When a homing command (G28) is issued, the firmware moves the axis...`
- **Line 1099**: `G10` (G-code)
  - Context: `...ng firmware retraction in mm/s. Used by G10 command. This is stored and used intern...`
- **Line 1099**: `M207` (M-code)
  - Context: `...ed and used internally in mm/s, but the M207...</td>`
- **Line 1104**: `G10` (G-code)
  - Context: `...ware retraction in millimeters. Used by G10 (retract) and G11 (unretract) commands....`
- **Line 1104**: `G11` (G-code)
  - Context: `...millimeters. Used by G10 (retract) and G11 (unretract) commands. Retraction pulls...`
- **Line 1109**: `G11` (G-code)
  - Context: `...firmware unretraction in mm/s. Used by G11 command. This is stored and used intern...`
- **Line 1114**: `G11` (G-code)
  - Context: `...t) beyond the retracted amount. Used by G11 command. Total recover distance = retra...`
- **Line 1119**: `G10` (G-code)
  - Context: `...n mm/min. Used for both lifting (during G10) and lowering (during G11) moves when r...`
- **Line 1119**: `G11` (G-code)
  - Context: `...fting (during G10) and lowering (during G11) moves when retract_zlift_le...</td>`
- **Line 1124**: `G10` (G-code)
  - Context: `...imeters (Z-hop or Z-lift feature). When G10 is executed, the nozzle lifts by this a...`
- **Line 1176**: `M500` (M-code)
  - Context: `...configuration changes to be saved with M500 and loaded automatically on boot. When...`
- **Line 1302**: `G1` (G-code)
  - Context: `...arameter is specified in G-code. When a G1/G2/G3 move is issued without an S param...`
- **Line 1302**: `G2` (G-code)
  - Context: `...meter is specified in G-code. When a G1/G2/G3 move is issued without an S paramete...`
- **Line 1302**: `G3` (G-code)
  - Context: `...er is specified in G-code. When a G1/G2/G3 move is issued without an S parameter,...`
- **Line 1923**: `G1` (G-code)
  - Context: `...description-cell">Default feed rate for G1 moves when no F parameter is specified....`
- **Line 1928**: `G0` (G-code)
  - Context: `...ass="description-cell">Default rate for G0 rapid moves. This is the speed for rapi...`
- **Line 2088**: `G2` (G-code)
  - Context: `...iption-cell">Length of arc segments for G2/G3 circular interpolation moves. When 0...`
- **Line 2088**: `G3` (G-code)
  - Context: `...ion-cell">Length of arc segments for G2/G3 circular interpolation moves. When 0 (d...`
- **Line 2143**: `G54` (G-code)
  - Context: `...<td class="description-cell">Save G54-G59 work coordinate systems to config-o...`
- **Line 2143**: `G59` (G-code)
  - Context: `...<td class="description-cell">Save G54-G59 work coordinate systems to config-overr...`
- **Line 2143**: `G55` (G-code)
  - Context: `...ll work coordinate system offsets (G54, G55, G56, G57, G58, G59) will b...</td>`
- **Line 2143**: `G56` (G-code)
  - Context: `...rk coordinate system offsets (G54, G55, G56, G57, G58, G59) will b...</td>`
- **Line 2143**: `G57` (G-code)
  - Context: `...ordinate system offsets (G54, G55, G56, G57, G58, G59) will b...</td>`
- **Line 2143**: `G58` (G-code)
  - Context: `...ate system offsets (G54, G55, G56, G57, G58, G59) will b...</td>`
- **Line 2143**: `M500` (M-code)
  - Context: `...rdinate systems to config-override with M500. When true, all work coordinate system...`
- **Line 2148**: `G92` (G-code)
  - Context: `...<td class="description-cell">Save G92 coordinate offsets to config-override w...`
- **Line 2148**: `M500` (M-code)
  - Context: `...rdinate offsets to config-override with M500 command. When true, any G92 offset curr...`
- **Line 2158**: `G92` (G-code)
  - Context: `...td class="description-cell">Set a fixed G92 offset at startup in format &quot;x,y,z...`
- **Line 2335**: `M112` (M-code)
  - Context: `...HALT condition (typically triggered by M112 emergency stop or system halt). When a...`
- **Line 2340**: `M112` (M-code)
  - Context: `...changing state during HALT conditions (M112 emergency stop). Useful for switches th...`
- **Line 2372**: `M105` (M-code)
  - Context: `...efixes this module&#39;s temperature in M105 responses. Allows host software to iden...`
- **Line 2688**: `G32` (G-code)
  - Context: `...ically home X and Y axes before running G32 leveling. Ensures consistent and known...`
- **Line 2713**: `M500` (M-code)
  - Context: `...ving the calculated plane equation with M500 and restoring it with M561 ABCD paramet...`
- **Line 2762**: `M500` (M-code)
  - Context: `...<td class="description-cell">When true, M500 saves M375 command to config-override,...`
- **Line 2784**: `G32` (G-code)
  - Context: `...home all axes before probing grid with G32 command. Ensures consistent starting po...`
- **Line 2819**: `G32` (G-code)
  - Context: `...="description-cell">When true, requires G32 to specify XYAB parameters defining the...`
- **Line 2829**: `M500` (M-code)
  - Context: `...<td class="description-cell">When true, M500 will save an M375 command to config-ove...`

## docs/debug/m5-review-analysis.md - M5 G-code Documentation Review

- **Line 25**: `M5` (M-code)
  - Context: `The original M5 page was functional but lacked:`
- **Line 61**: `M3` (M-code)
  - Context: `- Speed memory: Last M3 speed is retained after M5`
- **Line 61**: `M5` (M-code)
  - Context: `...memory: Last M3 speed is retained after M5`
- **Line 63**: `M112` (M-code)
  - Context: `- Emergency integration: Auto-issued on M112`
- **Line 64**: `M30` (M-code)
  - Context: `- Program end: Auto-issued on M2/M30 in GRBL mode`
- **Line 81**: `M958` (M-code)
  - Context: `...specific additional commands (M4, M957, M958)`
- **Line 83**: `M3` (M-code)
  - Context: `**Rationale:** Mirrors structure from M3 page for consistency`
- **Line 99**: `M112` (M-code)
  - Context: `3. **Emergency Stop Behavior:** M112 and program-end handling`
- **Line 174**: `M9` (M-code)
  - Context: `...Coolant Integration:** Note about M7/M8/M9 coolant commands working alongside M5`
- **Line 174**: `M5` (M-code)
  - Context: `...8/M9 coolant commands working alongside M5`
- **Line 175**: `M5` (M-code)
  - Context: `...** Specific switch.spindle settings for M5 behavior`
- **Line 184**: `M5` (M-code)
  - Context: `...** Closed-loop feedback behavior during M5`
- **Line 190**: `M957` (M-code)
  - Context: `11. **Debug Commands:** Using M957/M958 to verify spindle behavior`
- **Line 190**: `M958` (M-code)
  - Context: `11. **Debug Commands:** Using M957/M958 to verify spindle behavior`
- **Line 214**: `M30` (M-code)
  - Context: `- Check that references to M2, M30, M112 work correctly`
- **Line 214**: `M112` (M-code)
  - Context: `- Check that references to M2, M30, M112 work correctly`

## docs/debug/test-code-popup.md - Code Tag Popup Test

- **Line 29**: `G1` (G-code)
  - Context: `...e>G0</gcode> - Rapid movement (related: G1, G90, G91)`
- **Line 29**: `G90` (G-code)
  - Context: `...</gcode> - Rapid movement (related: G1, G90, G91)`
- **Line 29**: `G91` (G-code)
  - Context: `...de> - Rapid movement (related: G1, G90, G91)`
- **Line 30**: `G0` (G-code)
  - Context: `...ear movement with tool active (related: G0, G2, G3, G90, G91)`
- **Line 30**: `G2` (G-code)
  - Context: `...movement with tool active (related: G0, G2, G3, G90, G91)`
- **Line 30**: `G3` (G-code)
  - Context: `...ment with tool active (related: G0, G2, G3, G90, G91)`
- **Line 30**: `G90` (G-code)
  - Context: `...with tool active (related: G0, G2, G3, G90, G91)`
- **Line 30**: `G91` (G-code)
  - Context: `...tool active (related: G0, G2, G3, G90, G91)`
- **Line 31**: `G28.1` (G-code)
  - Context: `...gcode>G28</gcode> - Home axes (related: G28.1, G30, M119, M306, M665)`
- **Line 31**: `G30` (G-code)
  - Context: `...28</gcode> - Home axes (related: G28.1, G30, M119, M306, M665)`
- **Line 31**: `M119` (M-code)
  - Context: `...code> - Home axes (related: G28.1, G30, M119, M306, M665)`
- **Line 31**: `M306` (M-code)
  - Context: `...- Home axes (related: G28.1, G30, M119, M306, M665)`
- **Line 31**: `M665` (M-code)
  - Context: `...axes (related: G28.1, G30, M119, M306, M665)`
- **Line 32**: `G1` (G-code)
  - Context: `...de>G2</gcode> - Clockwise arc (related: G1, G3, G17)`
- **Line 32**: `G3` (G-code)
  - Context: `...2</gcode> - Clockwise arc (related: G1, G3, G17)`
- **Line 32**: `G17` (G-code)
  - Context: `...code> - Clockwise arc (related: G1, G3, G17)`
- **Line 47**: `M999` (M-code)
  - Context: `...M112</mcode> - Emergency stop (related: M999)`
- **Line 48**: `M501` (M-code)
  - Context: `...M500</mcode> - Save to EEPROM (related: M501, M503, M306, M665)`
- **Line 48**: `M503` (M-code)
  - Context: `...mcode> - Save to EEPROM (related: M501, M503, M306, M665)`
- **Line 48**: `M306` (M-code)
  - Context: `...- Save to EEPROM (related: M501, M503, M306, M665)`
- **Line 48**: `M665` (M-code)
  - Context: `...e to EEPROM (related: M501, M503, M306, M665)`
- **Line 49**: `M601` (M-code)
  - Context: `...600</mcode> - Filament change (related: M601, M24, M25, M0, M1)`
- **Line 49**: `M24` (M-code)
  - Context: `...code> - Filament change (related: M601, M24, M25, M0, M1)`
- **Line 49**: `M25` (M-code)
  - Context: `...- Filament change (related: M601, M24, M25, M0, M1)`
- **Line 49**: `M0` (M-code)
  - Context: `...lament change (related: M601, M24, M25, M0, M1)`
- **Line 49**: `M1` (M-code)
  - Context: `...nt change (related: M601, M24, M25, M0, M1)`
- **Line 50**: `G28` (G-code)
  - Context: `...Set homing offset (related: M665, M500, G28, G92, M119)`
- **Line 50**: `G92` (G-code)
  - Context: `...oming offset (related: M665, M500, G28, G92, M119)`
- **Line 50**: `M665` (M-code)
  - Context: `...6</mcode> - Set homing offset (related: M665, M500, G28, G92, M119)`
- **Line 50**: `M500` (M-code)
  - Context: `...de> - Set homing offset (related: M665, M500, G28, G92, M119)`
- **Line 50**: `M119` (M-code)
  - Context: `...offset (related: M665, M500, G28, G92, M119)`
- **Line 63**: `M119` (M-code)
  - Context: `...</gcode> to home all axes (click to see M119, M306, M665 related codes)`
- **Line 63**: `M306` (M-code)
  - Context: `...e> to home all axes (click to see M119, M306, M665 related codes)`
- **Line 63**: `M665` (M-code)
  - Context: `...home all axes (click to see M119, M306, M665 related codes)`
- **Line 64**: `G1` (G-code)
  - Context: `...id move to start position (click to see G1, G90, G91)`
- **Line 64**: `G90` (G-code)
  - Context: `...ove to start position (click to see G1, G90, G91)`
- **Line 64**: `G91` (G-code)
  - Context: `...o start position (click to see G1, G90, G91)`
- **Line 65**: `G0` (G-code)
  - Context: `...> with F parameter to cut (click to see G0, G2, G3)`
- **Line 65**: `G2` (G-code)
  - Context: `...th F parameter to cut (click to see G0, G2, G3)`
- **Line 65**: `G3` (G-code)
  - Context: `...parameter to cut (click to see G0, G2, G3)`
- **Line 66**: `G28` (G-code)
  - Context: `.../mcode> to check position (click to see G28, G92)`
- **Line 66**: `G92` (G-code)
  - Context: `...e> to check position (click to see G28, G92)`
- **Line 67**: `M501` (M-code)
  - Context: `...</mcode> to save settings (click to see M501, M503, M306)`
- **Line 67**: `M503` (M-code)
  - Context: `...e> to save settings (click to see M501, M503, M306)`
- **Line 67**: `M306` (M-code)
  - Context: `...save settings (click to see M501, M503, M306)`
- **Line 74**: `G11` (G-code)
  - Context: `2. Click on related code **G11** in the popup`
- **Line 75**: `G11` (G-code)
  - Context: `3. From G11, click on related code **M207**`
- **Line 75**: `M207` (M-code)
  - Context: `3. From G11, click on related code **M207**`
- **Line 76**: `M207` (M-code)
  - Context: `4. From M207, click on related code **M208**`
- **Line 76**: `M208` (M-code)
  - Context: `4. From M207, click on related code **M208**`
- **Line 77**: `G10` (G-code)
  - Context: `5. From M208, click back to **G10** to complete the circle`
- **Line 77**: `M208` (M-code)
  - Context: `5. From M208, click back to **G10** to complete the...`

## docs/debug/v2-refactor-progress.md - V2 Refactor Progress

- **Line 318**: `M303` (M-code)
  - Context: `...-autotuning) - 🏷️ **Has review tags** (M303/M301 differences)`
- **Line 318**: `M301` (M-code)
  - Context: `...tuning) - 🏷️ **Has review tags** (M303/M301 differences)`

## docs/developers/debugging/eclipse.md - Install Eclipse with C/C++ and GNU Support

- **Line 27**: `M3` (M-code)
  - Context: `- **Processor**: LPC1769 (Cortex-M3)`

## docs/developers/error-messages.md - Error Messages Reference

- **Line 1368**: `M0` (M-code)
  - Context: `...<raw>LPC11U24</raw> (<raw>Cortex</raw>-M0) device. The <raw>TASKING</raw> compile...`
- **Line 2748**: `G29` (G-code)
  - Context: `...ror occurs when a leveling G-code (<raw>G29</raw>, <raw>G31</raw>, <gcode>G32</gcod...`
- **Line 2748**: `G31` (G-code)
  - Context: `...a leveling G-code (<raw>G29</raw>, <raw>G31</raw>, <gcode>G32</gcode>) is issued bu...`
- **Line 2844**: `G31` (G-code)
  - Context: `...grid must be generated first using <raw>G31</raw>/<gcode>G32</gcode> before it can...`
- **Line 2904**: `G31` (G-code)
  - Context: `...yet. A grid must be created using <raw>G31</raw> before it can be saved.`
- **Line 3060**: `G0` (G-code)
  - Context: `...used but the last modal command was not G0, G1, G2, or G3. <gcode>G53</gcode> make...`
- **Line 3060**: `G1` (G-code)
  - Context: `...but the last modal command was not G0, G1, G2, or G3. <gcode>G53</gcode> makes th...`
- **Line 3060**: `G2` (G-code)
  - Context: `...the last modal command was not G0, G1, G2, or G3. <gcode>G53</gcode> makes the ne...`
- **Line 3060**: `G3` (G-code)
  - Context: `...st modal command was not G0, G1, G2, or G3. <gcode>G53</gcode> makes the next move...`
- **Line 3072**: `G0` (G-code)
  - Context: `...e> is followed by a command that is not G0 or G1. <gcode>G53</gcode> must be used...`
- **Line 3072**: `G1` (G-code)
  - Context: `...followed by a command that is not G0 or G1. <gcode>G53</gcode> must be used with l...`
- **Line 3300**: `M3` (M-code)
  - Context: `...aw>LPC1768</raw> with <raw>Cortex</raw>-M3) doesn&#039;t have an <raw>FPU</raw>. T...`
- **Line 3897**: `G29` (G-code)
  - Context: `...mpting to execute a probe command (<raw>G29</raw>-<gcode>G32</gcode>) but the probe...`
- **Line 4185**: `G31` (G-code)
  - Context: `...2</raw> This error occurs when the <raw>G31</raw> probing command fails to complete...`
- **Line 4209**: `G29` (G-code)
  - Context: `...2</raw> This error occurs when the <raw>G29</raw> test probe points command fails....`
- **Line 4221**: `G29` (G-code)
  - Context: `...bing command fails. Similar to the <raw>G29</raw> error, this happens when the prob...`
- **Line 5709**: `G29` (G-code)
  - Context: `...rror occurs when a G-code command (<raw>G29</raw>-<gcode>G32</gcode>, except <gcode...`
- **Line 6045**: `G1` (G-code)
  - Context: `...d by a separate move command like &quot;G1 <raw>X10</raw>&quot;. The direct form i...`
- **Line 6153**: `G29` (G-code)
  - Context: `...ed yet. A grid must be created via <raw>G29</raw> before it can be saved.`
- **Line 6609**: `M0` (M-code)
  - Context: `...w> This error occurs when compiling the M0 application processor code with an unsu...`
- **Line 6621**: `M3` (M-code)
  - Context: `...FPU</raw> enabled for <raw>Cortex</raw>-M3. Same issue as <raw>ARM</raw> Compiler...`
- **Line 6645**: `M3` (M-code)
  - Context: `...> code generation for <raw>Cortex</raw>-M3. The check ensures <raw>VFP</raw> is en...`
- **Line 6657**: `M3` (M-code)
  - Context: `...rning occurs when the <raw>Cortex</raw>-M3 revision number is not defined in the d...`
- **Line 6693**: `M3` (M-code)
  - Context: `...T is set to 0. Unlike <raw>Cortex</raw>-M3, the M4 can optionally include an <raw>...`
- **Line 8157**: `M3` (M-code)
  - Context: `...hen compiling for the <raw>Cortex</raw>-M3 core with the <raw>TASKING</raw> compil...`
- **Line 8193**: `M0` (M-code)
  - Context: `...XX</raw> has multiple <raw>Cortex</raw>-M0 cores (<raw>M0APP</raw> for application...`
- **Line 8205**: `M0` (M-code)
  - Context: `...w>Cortex</raw>-M4 and <raw>Cortex</raw>-M0 processors, and the compiler needs to k...`
- **Line 8229**: `M0` (M-code)
  - Context: `...rs when compiling for <raw>Cortex</raw>-M0+ core with the <raw>TASKING</raw> compi...`
- **Line 8277**: `M3` (M-code)
  - Context: `...exclusively uses the <raw>Cortex</raw>-M3 core, so this symbol must be defined in...`
- **Line 8301**: `M0` (M-code)
  - Context: `...w>Cortex</raw>-M4 and <raw>Cortex</raw>-M0 processors, so either <raw>CORE_M4</raw...`
- **Line 8349**: `M0` (M-code)
  - Context: `...eration enabled for a <raw>Cortex</raw>-M0 device that has no <raw>FPU</raw>. This...`
- **Line 8361**: `M0` (M-code)
  - Context: `...eration enabled for a <raw>Cortex</raw>-M0 device. Like the <raw>ARM</raw> Compile...`
- **Line 8373**: `M0` (M-code)
  - Context: `...__ not defined) for a <raw>Cortex</raw>-M0 device. The condition checks that both...`
- **Line 8385**: `M0` (M-code)
  - Context: `...code generation for a <raw>Cortex</raw>-M0. Unlike other compilers which issue war...`
- **Line 8397**: `M0` (M-code)
  - Context: `...define __CM0_REV (the <raw>Cortex</raw>-M0 revision number). The code provides a d...`
- **Line 8433**: `M3` (M-code)
  - Context: `...code generation for a <raw>Cortex</raw>-M3 device. The <raw>Cortex</raw>-M3 core d...`
- **Line 8514**: `M0` (M-code)
  - Context: `...define __CM0_REV (the <raw>Cortex</raw>-M0 revision number). The code provides a d...`
- **Line 8526**: `M3` (M-code)
  - Context: `...rning occurs when the <raw>Cortex</raw>-M3 revision number is not defined in the d...`
- **Line 9846**: `M0` (M-code)
  - Context: `...<raw>LPC11U24</raw> (<raw>Cortex</raw>-M0) device. The <raw>TASKING</raw> compile...`
- **Line 9858**: `M3` (M-code)
  - Context: `...aw>LPC1768</raw> with <raw>Cortex</raw>-M3) doesn&#039;t have an <raw>FPU</raw>. T...`
- **Line 9870**: `M3` (M-code)
  - Context: `...FPU</raw> enabled for <raw>Cortex</raw>-M3. Same issue as <raw>ARM</raw> Compiler...`
- **Line 9894**: `M3` (M-code)
  - Context: `...> code generation for <raw>Cortex</raw>-M3. The check ensures <raw>VFP</raw> is en...`
- **Line 9906**: `M3` (M-code)
  - Context: `...T is set to 0. Unlike <raw>Cortex</raw>-M3, the M4 can optionally include an <raw>...`
- **Line 9918**: `M3` (M-code)
  - Context: `...hen compiling for the <raw>Cortex</raw>-M3 core with the <raw>TASKING</raw> compil...`
- **Line 9942**: `M0` (M-code)
  - Context: `...rs when compiling for <raw>Cortex</raw>-M0+ core with the <raw>TASKING</raw> compi...`
- **Line 9966**: `M0` (M-code)
  - Context: `...eration enabled for a <raw>Cortex</raw>-M0 device that has no <raw>FPU</raw>. This...`
- **Line 9978**: `M0` (M-code)
  - Context: `...eration enabled for a <raw>Cortex</raw>-M0 device. Like the <raw>ARM</raw> Compile...`
- **Line 9990**: `M0` (M-code)
  - Context: `...__ not defined) for a <raw>Cortex</raw>-M0 device. The condition checks that both...`
- **Line 10002**: `M0` (M-code)
  - Context: `...code generation for a <raw>Cortex</raw>-M0. Unlike other compilers which issue war...`
- **Line 10014**: `M3` (M-code)
  - Context: `...code generation for a <raw>Cortex</raw>-M3 device. The <raw>Cortex</raw>-M3 core d...`
- **Line 10650**: `M0` (M-code)
  - Context: `...w>Cortex</raw>-M4 and <raw>Cortex</raw>-M0 processors, and the compiler needs to k...`
- **Line 10662**: `M3` (M-code)
  - Context: `...exclusively uses the <raw>Cortex</raw>-M3 core, so this symbol must be defined in...`
- **Line 10686**: `M0` (M-code)
  - Context: `...w>Cortex</raw>-M4 and <raw>Cortex</raw>-M0 processors, so either <raw>CORE_M4</raw...`
- **Line 12594**: `G31` (G-code)
  - Context: `...grid must be generated first using <raw>G31</raw>/<gcode>G32</gcode> before it can...`
- **Line 12606**: `G31` (G-code)
  - Context: `...yet. A grid must be created using <raw>G31</raw> before it can be saved.`
- **Line 12618**: `G29` (G-code)
  - Context: `...ed yet. A grid must be created via <raw>G29</raw> before it can be saved.`
- **Line 14154**: `M0` (M-code)
  - Context: `...XX</raw> has multiple <raw>Cortex</raw>-M0 cores (<raw>M0APP</raw> for application...`
- **Line 14382**: `G29` (G-code)
  - Context: `...ror occurs when a leveling G-code (<raw>G29</raw>, <raw>G31</raw>, <gcode>G32</gcod...`
- **Line 14382**: `G31` (G-code)
  - Context: `...a leveling G-code (<raw>G29</raw>, <raw>G31</raw>, <gcode>G32</gcode>) is issued bu...`
- **Line 14394**: `G29` (G-code)
  - Context: `...rror occurs when a G-code command (<raw>G29</raw>-<gcode>G32</gcode>, except <gcode...`
- **Line 14466**: `M0` (M-code)
  - Context: `...w> This error occurs when compiling the M0 application processor code with an unsu...`
- **Line 14550**: `G0` (G-code)
  - Context: `...used but the last modal command was not G0, G1, G2, or G3. <gcode>G53</gcode> make...`
- **Line 14550**: `G1` (G-code)
  - Context: `...but the last modal command was not G0, G1, G2, or G3. <gcode>G53</gcode> makes th...`
- **Line 14550**: `G2` (G-code)
  - Context: `...the last modal command was not G0, G1, G2, or G3. <gcode>G53</gcode> makes the ne...`
- **Line 14550**: `G3` (G-code)
  - Context: `...st modal command was not G0, G1, G2, or G3. <gcode>G53</gcode> makes the next move...`
- **Line 14562**: `G0` (G-code)
  - Context: `...e> is followed by a command that is not G0 or G1. <gcode>G53</gcode> must be used...`
- **Line 14562**: `G1` (G-code)
  - Context: `...followed by a command that is not G0 or G1. <gcode>G53</gcode> must be used with l...`
- **Line 15054**: `G31` (G-code)
  - Context: `...2</raw> This error occurs when the <raw>G31</raw> probing command fails to complete...`
- **Line 15090**: `G29` (G-code)
  - Context: `...2</raw> This error occurs when the <raw>G29</raw> test probe points command fails....`
- **Line 15102**: `G29` (G-code)
  - Context: `...bing command fails. Similar to the <raw>G29</raw> error, this happens when the prob...`
- **Line 16494**: `G1` (G-code)
  - Context: `...d by a separate move command like &quot;G1 <raw>X10</raw>&quot;. The direct form i...`
- **Line 16914**: `G29` (G-code)
  - Context: `...mpting to execute a probe command (<raw>G29</raw>-<gcode>G32</gcode>) but the probe...`

## docs/developers/module-development/moduleexample.md - Module Example

- **Line 66**: `M221` (M-code)
  - Context: `...-codes via the Dispatcher system (e.g., M221 for power scaling)</li>`
- **Line 164**: `G1` (G-code)
  - Context: `<li>G1/G2/G3 moves include an S-value (power)...`
- **Line 164**: `G2` (G-code)
  - Context: `<li>G1/G2/G3 moves include an S-value (power) tha...`
- **Line 164**: `G3` (G-code)
  - Context: `<li>G1/G2/G3 moves include an S-value (power) that's...`
- **Line 269**: `G0` (G-code)
  - Context: `if (code == 0) { // G0`
- **Line 272**: `G1` (G-code)
  - Context: `...ode &gt; 0 &amp;&amp; code &lt; 4) { // G1, G2, G3`
- **Line 272**: `G2` (G-code)
  - Context: `...&gt; 0 &amp;&amp; code &lt; 4) { // G1, G2, G3`
- **Line 272**: `G3` (G-code)
  - Context: `...0 &amp;&amp; code &lt; 4) { // G1, G2, G3`
- **Line 291**: `G0` (G-code)
  - Context: `...t, now the Laser pin will be LOW during G0 moves, and HIGH during G1, G2, and G3 m...`
- **Line 291**: `G1` (G-code)
  - Context: `...be LOW during G0 moves, and HIGH during G1, G2, and G3 moves.</p>`
- **Line 291**: `G2` (G-code)
  - Context: `...OW during G0 moves, and HIGH during G1, G2, and G3 moves.</p>`
- **Line 291**: `G3` (G-code)
  - Context: `...g G0 moves, and HIGH during G1, G2, and G3 moves.</p>`
- **Line 304**: `G1` (G-code)
  - Context: `...Check if we have a valid block that's a G1/G2/G3 move`
- **Line 304**: `G2` (G-code)
  - Context: `...ck if we have a valid block that's a G1/G2/G3 move`
- **Line 304**: `G3` (G-code)
  - Context: `...if we have a valid block that's a G1/G2/G3 move`

## docs/gcode-reference/g-codes/g0.md - {::nomarkdown}<gcode>G0</gcode>{:/nomarkdown} G-code

- **Line 58**: `G0` (G-code)
  - Context: `...\\\`F\\\` parameter is modal and affects both G0 and G1 moves. The speed is remembered a...`
- **Line 58**: `G1` (G-code)
  - Context: `...ameter is modal and affects both G0 and G1 moves. The speed is remembered and each...`
- **Line 82**: `G0` (G-code)
  - Context: `When enabled, G0 rapid moves always use the \\\`default_see...`
- **Line 82**: `G1` (G-code)
  - Context: `...compliance where G0 is always rapid and G1 is always feedrate-controlled.`

## docs/gcode-reference/g-codes/g10.md - {::nomarkdown}<gcode>G10</gcode>{:/nomarkdown} G-code

- **Line 65**: `G10` (G-code)
  - Context: `<strong>G10-Based Retraction</strong><br>`

## docs/gcode-reference/g-codes/g17.md - {::nomarkdown}<gcode>G17</gcode>{:/nomarkdown} G-code

- **Line 75**: `G2` (G-code)
  - Context: `- Used for arc interpolation in G2/G3 commands`
- **Line 75**: `G3` (G-code)
  - Context: `- Used for arc interpolation in G2/G3 commands`
- **Line 89**: `G2` (G-code)
  - Context: `- Used for arc interpolation in G2/G3 commands`
- **Line 89**: `G3` (G-code)
  - Context: `- Used for arc interpolation in G2/G3 commands`

## docs/gcode-reference/g-codes/g2.md - {::nomarkdown}<gcode>G2</gcode>{:/nomarkdown} G-code

- **Line 150**: `G3` (G-code)
  - Context: `See also: [G3 - Counter-Clockwise Arc](/g3)`

## docs/gcode-reference/g-codes/g28.md - {::nomarkdown}<gcode>G28</gcode>{:/nomarkdown} G-code Family

- **Line 105**: `G28` (G-code)
  - Context: `...nformation on Reprap-style homing, see [G28-Reprap](g28-reprap).`
- **Line 107**: `G28` (G-code)
  - Context: `...tion on CNC-style origin movement, see [G28-CNC](g28-cnc).`
- **Line 113**: `G28.1` (G-code)
  - Context: `See [G28.1](g28-1) for full details.`
- **Line 134**: `G28.1` (G-code)
  - Context: `...the park position previously stored by G28.1`
- **Line 163**: `G28.4` (G-code)
  - Context: `For rotary delta kinematics, G28.4 sets positions using actuator coordinat...`
- **Line 199**: `G28` (G-code)
  - Context: `- [G28-Reprap](g28-reprap) - Detailed info on...`
- **Line 200**: `G28` (G-code)
  - Context: `- [G28-CNC](g28-cnc) - Detailed info on CNC-st...`
- **Line 201**: `G28.1` (G-code)
  - Context: `- [G28.1](g28-1) - Setting/storing park position...`

## docs/gcode-reference/g-codes/g30.md - {::nomarkdown}<gcode>G30</gcode>{:/nomarkdown} G-code

- **Line 138**: `G30` (G-code)
  - Context: `...markdown} - (NEW) Enable NIST-compliant G30 behavior`

## docs/gcode-reference/g-codes/g54.md - {::nomarkdown}<gcode>G54</gcode>{:/nomarkdown} - Work Coordinate Systems

- **Line 120**: `G10` (G-code)
  - Context: `...de>{:/nomarkdown} - Set WCS offsets via G10 L2 P[number]`
- **Line 131**: `G10` (G-code)
  - Context: `...de>{:/nomarkdown} - Set WCS offsets via G10 L2 P[number]`
- **Line 177**: `G10` (G-code)
  - Context: `- [G10 - Set Offsets](/g10)`
- **Line 178**: `G53` (G-code)
  - Context: `- [G53 - Use Machine Coordinates](/g53)`
- **Line 179**: `G92` (G-code)
  - Context: `- [G92 - Set Position Offset](/g92)`

## docs/gcode-reference/g-codes/g90.md - {::nomarkdown}<gcode>G90</gcode>{:/nomarkdown} G-code

- **Line 107**: `G54` (G-code)
  - Context: `- Workspace offsets (G54-G59, G92, tool offset) are still applie...`
- **Line 107**: `G59` (G-code)
  - Context: `- Workspace offsets (G54-G59, G92, tool offset) are still applied`
- **Line 107**: `G92` (G-code)
  - Context: `- Workspace offsets (G54-G59, G92, tool offset) are still applied`
- **Line 108**: `G91` (G-code)
  - Context: `...ommand (remains active until changed by G91 or M83)`
- **Line 108**: `M83` (M-code)
  - Context: `...(remains active until changed by G91 or M83)`
- **Line 122**: `G54` (G-code)
  - Context: `- Workspace offsets (G54-G59, G92, tool offset) are still applie...`
- **Line 122**: `G59` (G-code)
  - Context: `- Workspace offsets (G54-G59, G92, tool offset) are still applied`
- **Line 122**: `G92` (G-code)
  - Context: `- Workspace offsets (G54-G59, G92, tool offset) are still applied`
- **Line 123**: `G91` (G-code)
  - Context: `...ommand (remains active until changed by G91 or M83)`
- **Line 123**: `M83` (M-code)
  - Context: `...(remains active until changed by G91 or M83)`

## docs/gcode-reference/g-codes/g91.md - {::nomarkdown}<gcode>G91</gcode>{:/nomarkdown} G-code

- **Line 107**: `G54` (G-code)
  - Context: `- Workspace offsets (G54-G59, G92, tool offset) are not re-appli...`
- **Line 107**: `G59` (G-code)
  - Context: `- Workspace offsets (G54-G59, G92, tool offset) are not re-applied f...`
- **Line 107**: `G92` (G-code)
  - Context: `- Workspace offsets (G54-G59, G92, tool offset) are not re-applied for ea...`
- **Line 108**: `G90` (G-code)
  - Context: `...ommand (remains active until changed by G90 or M82)`
- **Line 108**: `M82` (M-code)
  - Context: `...(remains active until changed by G90 or M82)`
- **Line 122**: `G54` (G-code)
  - Context: `- Workspace offsets (G54-G59, G92, tool offset) are not re-appli...`
- **Line 122**: `G59` (G-code)
  - Context: `- Workspace offsets (G54-G59, G92, tool offset) are not re-applied f...`
- **Line 122**: `G92` (G-code)
  - Context: `- Workspace offsets (G54-G59, G92, tool offset) are not re-applied for ea...`
- **Line 123**: `G90` (G-code)
  - Context: `...ommand (remains active until changed by G90 or M82)`
- **Line 123**: `M82` (M-code)
  - Context: `...(remains active until changed by G90 or M82)`

## docs/gcode-reference/g-codes/g92-cnc.md - {::nomarkdown}<gcode>G92</gcode>{:/nomarkdown} G-code

- **Line 85**: `G92` (G-code)
  - Context: `...this page's content is taken from their G92 documentation)`

## docs/gcode-reference/g-codes/g92.md - {::nomarkdown}<gcode>G92</gcode>{:/nomarkdown} G-code

- **Line 17**: `G92` (G-code)
  - Context: `...de>G92</gcode>{:/nomarkdown} Gcode see [G92-cnc](g92-cnc).`

## docs/gcode-reference/m-codes/m20.md - m20

- **Line 160**: `M20` (M-code)
  - Context: `- [RepRap G-code M20: List SD card](http://reprap.org/wiki/G...`

## docs/gcode-reference/m-codes/m21.md - {::nomarkdown}<mcode>M21</mcode>{:/nomarkdown}: Initialize SD card

- **Line 59**: `M21` (M-code)
  - Context: `The M21 command requires no parameters.`
- **Line 83**: `M20` (M-code)
  - Context: `* [RepRap G-code M20](http://reprap.org/wiki/G-code#M20:_Lis...`

## docs/gcode-reference/m-codes/m23.md - m23

- **Line 90**: `M23` (M-code)
  - Context: `When using M23 to select and M24 to start files, the P...`
- **Line 90**: `M24` (M-code)
  - Context: `When using M23 to select and M24 to start files, the Player module will...`
- **Line 103**: `M20` (M-code)
  - Context: `- [RepRap G-code M20](http://reprap.org/wiki/G-code#M20:_Lis...`

## docs/gcode-reference/m-codes/m24.md - {::nomarkdown}<mcode>M24</mcode>{:/nomarkdown}: Start/Resume SD Print

- **Line 76**: `M20` (M-code)
  - Context: `- [RepRap G-code M20: List SD card](http://reprap.org/wiki/G...`

## docs/gcode-reference/m-codes/m3.md - m3

- **Line 39**: `M5` (M-code)
  - Context: `...the primary spindle commands are M3 and M5. Additional commands may vary based on...`

## docs/getting-started/basics.md - Smoothie basics

- **Line 676**: `M500` (M-code)
  - Context: `- Contains: Settings saved by M-codes (M500)`

## docs/getting-started/glossary.md - Glossary

- **Line 190**: `M3` (M-code)
  - Context: `The ARM Cortex-M3 microcontroller used in Smoothieboard V...`

## docs/getting-started/homepage-draft-review.md - Homepage Draft - V1/V2 Analysis Report

- **Line 47**: `M3` (M-code)
  - Context: `- Specifies "LPC1769 Cortex-M3 32bit ARM chip, clocking 120Mhz, with 6...`

## docs/getting-started/smoothie.md - Smoothie

- **Line 31**: `M3` (M-code)
  - Context: `...icrocontroller: NXP LPC1769 (ARM Cortex-M3)`

## docs/hardware/accessories/accessory.md - Smoothieware Mini

- **Line 13**: `M0` (M-code)
  - Context: `...ry system designed to run on ARM Cortex-M0 and run as extensions of a [Smoothieboa...`

## docs/hardware/boards/smoothieboard-beta.md - Smoothieboard Beta (Legacy Documentation)

- **Line 13**: `M3` (M-code)
  - Context: `...cs.nxp.com/lpcxpresso/~LPC1769/) Cortex-M3 chip.`
- **Line 50**: `M3` (M-code)
  - Context: `...om/lpcxpresso/~LPC1769/) 32-bits Cortex-M3 MCU, running at 120Mhz. 512kB Flash, 64...`

## docs/hardware/boards/smoothieboard-v1-old.md - SmoothieBoard v1 (Old)

- **Line 7**: `M3` (M-code)
  - Context: `...ackage:LPC1769FBD100) or LPC1768 Cortex-M3 chip.`
- **Line 46**: `M3` (M-code)
  - Context: `...0-package:LPC1769FBD100) 32-bits Cortex-M3 MCU, running at 96 to 120Mhz. 512kB Fla...`

## docs/hardware/boards/smoothieboard-v1-specifications.md - Smoothieboard v1 Technical Specifications

- **Line 597**: `G54` (G-code)
  - Context: `- Work coordinate systems (G54-G59)`
- **Line 597**: `G59` (G-code)
  - Context: `- Work coordinate systems (G54-G59)`
- **Line 813**: `M3` (M-code)
  - Context: `The Cortex-M3 doesn't have a hardware floating-point...`

## docs/hardware/boards/smoothieboard-v1.md - Smoothieboard v1

- **Line 32**: `M3` (M-code)
  - Context: `...LPC1769 microcontroller, an ARM Cortex-M3 chip:`

## docs/hardware/boards/smoothieboard-v2-original.md - Smoothieboard v2 Original (LPC4330) - Cancelled Design

- **Line 115**: `M0` (M-code)
  - Context: `- M0 core: Networking, file I/O, auxiliary t...`
- **Line 299**: `M0` (M-code)
  - Context: `The M4+M0 architecture was attractive for separat...`
- **Line 390**: `M0` (M-code)
  - Context: `- More capable secondary core (M4 vs M0)`

## docs/hardware/boards/smoothieboard-v2-prime.md - Smoothieboard v2 Prime Technical Specifications

- **Line 42**: `M3` (M-code)
  - Context: `- 4× faster core (480MHz M7 vs 120MHz M3)`
- **Line 96**: `M3` (M-code)
  - Context: `...Speed: 4× faster (480 MHz M7 vs 120 MHz M3)`
- **Line 100**: `M3` (M-code)
  - Context: `- FPU: Double precision (M7) vs none (M3 used software emulation)`
- **Line 727**: `G54` (G-code)
  - Context: `- Work coordinate systems (G54-G59)`
- **Line 727**: `G59` (G-code)
  - Context: `- Work coordinate systems (G54-G59)`

## docs/hardware/boards/smoothieboard-v2-schematic.md - Smoothieboard V2 Prime Schematic Reference

- **Line 922**: `M3` (M-code)
  - Context: `The board includes four M3 mounting holes at standard locations. H...`

## docs/hardware/boards/smoothieboards-for-include.md - Smoothieboards

- **Line 123**: `M0` (M-code)
  - Context: `...7FET256) with 8MB flash, 264kB RAM, and M0 co-processor`
- **Line 171**: `M0` (M-code)
  - Context: `...7FET256) with 8MB flash, 264kB RAM, and M0 co-processor`
- **Line 208**: `M3` (M-code)
  - Context: `- 32-bit [Cortex-M3 LPC1769](http://www.nxp.com/products/mi...`

## docs/hardware/boards/smoothiedriver.md - Smoothiedriver

- **Line 29**: `M0` (M-code)
  - Context: `...a full H-bridge driven by an ARM Cortex-M0 microcontroller.`

## docs/hardware/panels/smoothiepanel-beta.md - SmoothiePanel Beta

- **Line 15**: `M0` (M-code)
  - Context: `The [original plan to use an ARM Cortex-M0 MCU](smoothiepanelalpha) has been put o...`

## docs/hardware/panels/smoothiepanel-gamma.md - SmoothiePanel Gamma

- **Line 21**: `M0` (M-code)
  - Context: `The [original plan to use an ARM Cortex-M0 MCU](smoothiepanelalpha) has been broug...`

## docs/hardware/panels/smoothiepanel.md - SmoothiePanel

- **Line 25**: `M0` (M-code)
  - Context: `The [original plan to use an ARM Cortex-M0 MCU](smoothiepanelalpha) has been broug...`

## docs/hardware/panels/smoothiepanelalpha.md - SmoothiePanel Alpha (Legacy Documentation)

- **Line 15**: `M0` (M-code)
  - Context: `...c1100_x_l/LPC1114FBD48.html) ARM Cortex-M0 chip.`

## docs/hardware/wiring/general-appendixes-for-include.md - general appendixes for include

- **Line 94**: `M5` (M-code)
  - Context: `For example if you want the epsilon ( M5 ) driver to be the slave to the gamma (...`
- **Line 94**: `M3` (M-code)
  - Context: `...) driver to be the slave to the gamma ( M3 ) driver you will need to connect:`
- **Line 567**: `M1` (M-code)
  - Context: `...urrent\\\` always controls the current for M1, no matter what you do to the step/dire...`

## docs/hardware/wiring/stepper-motors-for-include.md - Stepper Motors

- **Line 77**: `M1` (M-code)
  - Context: `...le, a stepper motor is connected to the M1 driver, and power is provided to VBB (t...`

## docs/landing-pages/landing-page-cnc-mill.md - CNC Mill Controller That Handles Your Complex CAM Files

- **Line 70**: `G54` (G-code)
  - Context: `- Work coordinate systems (G54-G59 for multiple setups)`
- **Line 70**: `G59` (G-code)
  - Context: `- Work coordinate systems (G54-G59 for multiple setups)`
- **Line 77**: `M9` (M-code)
  - Context: `- Coolant control (M7/M8/M9)`
- **Line 251**: `G54` (G-code)
  - Context: `- G54-G59 (six work coordinate offsets)`
- **Line 251**: `G59` (G-code)
  - Context: `- G54-G59 (six work coordinate offsets)`
- **Line 252**: `G92` (G-code)
  - Context: `- G92 temporary coordinate offsets`

## docs/landing-pages/landing-page-cnc-milling.md - Affordable CNC Mill Retrofit with Professional Features

- **Line 59**: `G54` (G-code)
  - Context: `- **Work Coordinate Systems:** G54-G59 (multiple setups)`
- **Line 59**: `G59` (G-code)
  - Context: `- **Work Coordinate Systems:** G54-G59 (multiple setups)`
- **Line 213**: `G54` (G-code)
  - Context: `- G54-G59 (6 work offsets)`
- **Line 213**: `G59` (G-code)
  - Context: `- G54-G59 (6 work offsets)`
- **Line 214**: `G92` (G-code)
  - Context: `- G92 temporary offsets`

## docs/machine-guides/3d-printers/delta.md - Configuring a Smoothieboard for Linear Delta Kinematics

- **Line 411**: `M665` (M-code)
  - Context: `...ttings can be set in the config, or via M665.`

## docs/machine-guides/3d-printers/extruder-guide-for-include.md - Extruder

- **Line 93**: `M200` (M-code)
  - Context: `...ament diameter is specified either from M200 Dxxx or the config setting Smoothie exp...`
- **Line 95**: `M207` (M-code)
  - Context: `...en firmware retraction is specified via M207 the retraction length is still in mm no...`
- **Line 232**: `M5` (M-code)
  - Context: `**2nd Extruder** (epsilon, or M5)`

## docs/machine-guides/3d-printers/multiple-extruders.md - Multiple Extrusion

- **Line 107**: `M5` (M-code)
  - Context: `...extruder is wired to M4, the second to M5.`

## docs/machine-guides/laser-cutters/blue-box-guide.md - SmoothK40 Guide

- **Line 320**: `G1` (G-code)
  - Context: `...your G-code includes S values in moves (G1 X10 Y10 S0.5)`

## docs/machine-guides/laser-cutters/bluebox-guide.md - Your guide to installing Smoothieboard in a Blue Box Laser Cutting machine

- **Line 269**: `M5` (M-code)
  - Context: `...rgency stop button and be ready to send M5 or cut power immediately if anything ap...`

## docs/machine-guides/laser-cutters/laser-cutter-guide.md - Your guide to installing Smoothieboard in a Laser Cutting machine

- **Line 126**: `M5` (M-code)
  - Context: `...with commands that turn OFF the laser (M5) and set power to zero (M3 S0). Never e...`
- **Line 126**: `M3` (M-code)
  - Context: `...F the laser (M5) and set power to zero (M3 S0). Never enable the laser automatical...`

## docs/modules/endstops-probes/endstops.md - endstops

- **Line 145**: `G28` (G-code)
  - Context: `...es grbl compatibility mode in this mode G28 does <strong>not</strong> home, it goes...`
- **Line 145**: `G28.1` (G-code)
  - Context: `...predefined park position (defined with G28.1). To home in CNC/GRBL mode you issue $H...`
- **Line 145**: `G28.2` (G-code)
  - Context: `...home in CNC/GRBL mode you issue $H, (or G28.2).`

## docs/modules/endstops-probes/touchprobe.md - Using the Touchprobe

- **Line 212**: `G30` (G-code)
  - Context: `- [G30 command](g30) - Built-in probing comman...`
- **Line 220**: `G30` (G-code)
  - Context: `- [G30 G-code documentation](g30)`

## docs/modules/endstops-probes/zprobe.md - Probing with Smoothie

- **Line 326**: `G32` (G-code)
  - Context: `First calibrate with G32 then if needed do G31 to set the grid c...`
- **Line 326**: `G31` (G-code)
  - Context: `...st calibrate with G32 then if needed do G31 to set the grid compensation. If you wa...`
- **Line 379**: `G32` (G-code)
  - Context: `...tops (or prefer to home manually before G32):`
- **Line 398**: `G32` (G-code)
  - Context: `...tops (or prefer to home manually before G32):`

## docs/modules/input-controls/emergencystop.md - Emergency Stop Setup

- **Line 264**: `M119` (M-code)
  - Context: `**Testing with M119:**`

## docs/modules/input-controls/jogger-options-for-include.md - jogger options for include

- **Line 45**: `G0` (G-code)
  - Context: `...eral configuration "default_seek_rate" (G0 speed). Lower values provide finer cont...`

## docs/modules/input-controls/switch-options-for-include.md - switch options for include

- **Line 90**: `M112` (M-code)
  - Context: `...ifferent from halt_set_to which handles M112 HALT commands. Can be overridden by ign...`
- **Line 95**: `M112` (M-code)
  - Context: `...HALT condition (typically triggered by M112 emergency stop or system halt). When a...`
- **Line 100**: `M112` (M-code)
  - Context: `...changing state during HALT conditions (M112 emergency stop). Set to true to not set...`

## docs/modules/input-controls/switch.md - Switch module

- **Line 776**: `G28` (G-code)
  - Context: `...ly, when homing, you can't simply issue G28, you have to issue a series of commands...`

## docs/modules/leveling/rectangular-grid-calibration-options.md - Rectangular Grid Calibration Options

- **Line 61**: `G29` (G-code)
  - Context: `..., you must provide XYAB parameters with G29/G31/G32 commands.`
- **Line 61**: `G31` (G-code)
  - Context: `...u must provide XYAB parameters with G29/G31/G32 commands.`
- **Line 61**: `G32` (G-code)
  - Context: `...st provide XYAB parameters with G29/G31/G32 commands.`

## docs/modules/motors/currentcontrol.md - Digital current control

- **Line 24**: `M1` (M-code)
  - Context: `These designations are hard coded to M1-M5 and do not track any changes that ma...`
- **Line 24**: `M5` (M-code)
  - Context: `...These designations are hard coded to M1-M5 and do not track any changes that may h...`

## docs/modules/motors/drillingcycles.md - Drilling Cycles Module

- **Line 33**: `G91` (G-code)
  - Context: `In relative mode G91, drilling holes operations are ignored.`

## docs/modules/other/els.md - ELS - Electronic Leadscrew Module

- **Line 130**: `M3` (M-code)
  - Context: `...t spindle** - Use your spindle control (M3 command or physical switch)`

## docs/modules/other/lathe.md - Lathe Module

- **Line 168**: `M3` (M-code)
  - Context: `- Spindle is started with M3 command`

## docs/modules/other/miscellaneous-options-for-include.md - miscellaneous options for include

- **Line 39**: `M999` (M-code)
  - Context: `...state without requiring power cycle or M999 command. When true, releasing the kill...`

## docs/modules/other/system-options-for-include.md - system options for include

- **Line 64**: `M500` (M-code)
  - Context: `...configuration changes to be saved with M500 and loaded automatically on boot. When...`

## docs/modules/spindle/spindle-options-for-include.md - spindle options for include

- **Line 79**: `M5` (M-code)
  - Context: `...0), this minimum will be used instead. M5 or S0 still turns spindle completely of...`
- **Line 89**: `M3` (M-code)
  - Context: `...Goes high when spindle is commanded on (M3), low when commanded off (M5). Provides...`
- **Line 89**: `M5` (M-code)
  - Context: `...manded on (M3), low when commanded off (M5). Provides hardware enable signal separ...`

## docs/on-boot-gcode.md - on_boot.gcode - Startup G-code File

- **Line 187**: `M500` (M-code)
  - Context: `...boot.gcode\\\` to load settings saved with M500:`
- **Line 210**: `G4` (G-code)
  - Context: `...long delays**: Avoid M0 (pause) or long G4 (dwell) commands`
- **Line 210**: `M0` (M-code)
  - Context: `- **Don't include long delays**: Avoid M0 (pause) or long G4 (dwell) commands`

## docs/project/github/editing-the-wiki.md - Editing the Documentation

- **Line 345**: `M114` (M-code)
  - Context: `Use the command <raw>M114</raw> to query the current position.`

## docs/project/news/todo.md - The Smoothie project's TODO list

- **Line 154**: `M408` (M-code)
  - Context: `...ue</a> into Smoothie ( specifically the M408 G-code, which will also be useful for w...`

## docs/troubleshooting/stopping-smoothie-for-include.md - Stopping Smoothie

- **Line 124**: `M112` (M-code)
  - Context: `...ning:</strong> Using the kill button or M112 will cause position loss. You must home...`

## docs/troubleshooting/troubleshooting-for-include.md - troubleshooting for include

- **Line 273**: `G32` (G-code)
  - Context: `...ing like «  No strategy found to handle G32 », please do the following :`

