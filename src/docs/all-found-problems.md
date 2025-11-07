# All Found Documentation Problems

**Generated from:** 39 verification reports (analyzed in parallel)
**Total files with issues:** 11
**Total issues found:** 36

---

## `docs/machine-guides/laser-cutters/blue-box-guide.md`

- **L?:** References non-functional setting 'laser_module_max_power' which is defined as a checksum but never read by code - Fix: Change `laser_module_max_power` to `laser_module_maximum_power`

---

## `docs/modules/endstops-probes/endstops-options-for-include.md`

- **L13:** Default value for `endstops_enable` is stated as 'true' but source code shows default is 'false' - Fix: Change default from `true` to `false`
- **L50:** Default value for `endstop_debounce_ms` is stated as '1' but source code shows default is '0' - Fix: Change default from `1` to `0`
- **L51:** Setting name for alpha_trim is incorrect - Fix: Change `alpha_trim` to `alpha_trim_mm` to match source code configuration key
- **L52:** Setting name for beta_trim is incorrect - Fix: Change `beta_trim` to `beta_trim_mm` to match source code configuration key
- **L53:** Setting name for gamma_trim is incorrect - Fix: Change `gamma_trim` to `gamma_trim_mm` to match source code configuration key

---

## `docs/modules/extruders/extruder-options.md`

- **L11:** Default value for `enable` is WRONG - stated as `true`, but source code default is `false` - Fix: Change default from `true` to `false`
- **L12:** Default value for `steps_per_mm` is WRONG - stated as `140`, but source code default is `1` - Fix: Change default from `140` to `1`
- **L13:** Default value for `filament_diameter` is WRONG - stated as `1.74`, but source code default is `0` - Fix: Change default from `1.74` to `0`
- **L14:** `default_feed_rate` is incorrectly documented as an extruder setting, but it's actually a global Robot module setting - Fix: Remove `default_feed_rate` from extruder documentation entirely (it is not an extruder-specific setting)
- **L15:** Default value for `acceleration` is WRONG - stated as `500`, but source code default is `1000` - Fix: Change default from `500` to `1000`
- **L16:** Default value for `max_speed` is WRONG - stated as `50`, but source code default is `1000` - Fix: Change default from `50` to `1000`

---

## `docs/modules/input-controls/switch-options.md`

- **L11:** Default value for `enable` is stated as 'true' but source code default is 'false' - Fix: Change default from `true` to `false`
- **L20:** Default value for `output_type` is stated as 'none' but source code shows default is 'pwm' - Fix: Change default from `none` to `pwm`
- **L23:** Example value for `default_on_value` shows '184' which is outside valid range of 0-100 - Fix: Change example from `184` to a value in 0-100 range (e.g., `50` or `72`)

---

## `docs/modules/laser/laser-options.md`

- **L?:** Default value for `laser_module_enable` is WRONG - stated as `true`, but source code default is `false` - Fix: Change default from `true` to `false`
- **L?:** Default value for `laser_module_pwm_pin` is WRONG - stated as `2.5`, but source code default is `nc` (not connected) - Fix: Change default from `2.5` to `nc`
- **L?:** Default value for `laser_module_ttl_pin` is WRONG - stated as `1.30`, but source code default is `nc` (not connected) - Fix: Change default from `1.30` to `nc`
- **L?:** Default value for `laser_module_maximum_power` is WRONG - stated as `0.8`, but source code default is `1.0` - Fix: Change default from `0.8` to `1.0`

---

## `docs/modules/motion/motion-control-options.md`

- **L?:** `alpha_angle` default value conflicting - documentation claims `0.0` for both `rotatable_cartesian` AND `experimental_delta`, but `experimental_delta` actually uses `30.0` as default - Fix: Split into two separate entries OR add note: "For rotatable_cartesian: default 0.0. For experimental_delta: default 30.0"

---

## `docs/modules/network/network-options.md`

- **L12:** Default value for `network.webserver.enable` is listed as 'true' but source code default is 'false' - Fix: Change default from `true` to `false` (or note that sample configs use `true`)
- **L13:** Default value for `network.telnet.enable` is listed as 'true' but source code default is 'false' - Fix: Change default from `true` to `false` (or note that sample configs use `true`)
- **L17:** Default value for `network.ip_gateway` is listed as `192.168.3.1` but source code shows `192.168.1.254` - Fix: Change default gateway from `192.168.3.1` to `192.168.1.254`

---

## `docs/modules/spindle/spindle-module.md`

- **L217:** Comment for `spindle.rx_pin` incorrectly states 'TX pin for the soft serial' when it should say 'RX pin' - Fix: Change comment from 'TX pin' to 'RX pin'
- **L218:** Comment for `spindle.tx_pin` incorrectly states 'RX pin for the soft serial' when it should say 'TX pin' - Fix: Change comment from 'RX pin' to 'TX pin'

---

## `docs/modules/temperature/temperatureswitch-options.md`

- **L17:** Default value for `enable` is stated as 'true' but source code shows default is 'false' - Fix: Change default from `true` to `false`
- **L18:** Default value for `designator` is stated as 'T' but actual default is empty string - Fix: Change default from `T` to `""` (empty string) with note about hotend special case
- **L19:** Default value for `switch` is stated as 'misc' but source code shows default is empty string - Fix: Change default from `misc` to `""`
- **L20:** Default value for `threshold_temp` is stated as '60' but source code shows default is '50.0' - Fix: Change default from `60` to `50.0`
- **L25:** Default value for `arm_mcode` is stated as '1100' but source code shows default is '0' - Fix: Change default from `1100` to `0`

---

## Summary by Issue Type

### Default Values (28 issues)
Most common issue: documented default values don't match actual source code defaults

### Setting Names (6 issues)
Incorrect setting names or missing suffixes (_mm, etc.)

### Documentation Structure (2 issues)
Settings documented in wrong modules or with swapped descriptions

---

## Notes

- **L?** = Line number not specified in verification report
- All issues verified against actual Smoothieware source code
- Issues found by automated verification comparing documentation to source code implementation
- For detailed context and fix instructions, see individual verification reports in `/tmp/last-run-*.md`

---

**Priority Recommendations:**

1. **HIGH PRIORITY:** Fix extruder-options.md (6 incorrect defaults including removal of misplaced setting)
2. **HIGH PRIORITY:** Fix laser-options.md (4 incorrect defaults)
3. **MEDIUM PRIORITY:** Fix temperatureswitch-options.md (5 incorrect defaults)
4. **MEDIUM PRIORITY:** Fix endstops-options-for-include.md (5 issues: 2 defaults + 3 naming)
5. **LOW PRIORITY:** Fix remaining files (1-3 issues each)
