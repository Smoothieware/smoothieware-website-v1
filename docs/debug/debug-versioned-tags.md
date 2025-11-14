---
permalink: /debug-versioned-tags
layout: default
title: Debug - Versioned Tags
---

# Versioned Tag Debug Page

This page demonstrates the `<versioned>` custom tags that display version-specific content based on the user's version preference (v1/v2).

## Features

- **CSS Fallback**: Displays both v1 and v2 content by default when JavaScript is disabled
- **Horizontal Layout**: Side-by-side display (50/50 split) - default orientation
- **Vertical Layout**: Stacked display (one above another) - specify with `orientation="vertical"`
- **Version Filtering**: Shows only v1, only v2, or both based on version selector in header
- **Color-Coded Borders**: Orange accent for v1 content, blue accent for v2 content
- **Nested Tag Support**: Can contain other tags like `<setting>`, `<pin>`, etc.

---

## Horizontal Layout Examples (Default)

### Basic Horizontal Example

<versioned orientation="horizontal">
<v1>
This content is only shown for Smoothieware V1.

V1 uses the old configuration format with simple key-value pairs. For example, to configure a stepper motor, you'd use settings like:

- `alpha_steps_per_mm`: steps per millimeter
- `alpha_max_rate`: maximum speed
- `alpha_current`: motor current
</v1>
<v2>
This content is only shown for Smoothieware V2.

V2 uses a hierarchical configuration format with INI-style sections. For example, to configure a stepper motor, you'd use settings like:

- `actuator.alpha.steps_per_mm`: steps per millimeter
- `actuator.alpha.max_rate`: maximum speed
- `actuator.alpha.current`: motor current
</v2>
</versioned>

### Horizontal with Nested Tags

<versioned>
<v1>
In V1, configure your thermistor pin with <setting v1="temperature_control.hotend.thermistor_pin" v2="thermistor_pin"></setting> and heater pin with <setting v1="temperature_control.hotend.heater_pin" v2="heater_pin"></setting>.

The pin assignment for the X-axis endstop is typically <pin>1.24</pin>.
</v1>
<v2>
In V2, configure your thermistor pin with <setting v1="temperature_control.hotend.thermistor_pin" v2="thermistor_pin"></setting> and heater pin with <setting v1="temperature_control.hotend.heater_pin" v2="heater_pin"></setting>.

The pin assignment for the X-axis endstop is typically <pin>1.24</pin> (same hardware, different config format).
</v2>
</versioned>

---

## Vertical Layout Examples

### Basic Vertical Example

<versioned orientation="vertical">
<v1>
**V1 Network Configuration:**

In Smoothieware V1, network settings are configured in a flat structure:

- `network.enable true` - Enable network interface
- `network.webserver.enable true` - Enable web server
- `network.ip_address 192.168.1.100` - Static IP address
- `network.ip_mask 255.255.255.0` - Subnet mask

All settings are in the root config file.
</v1>
<v2>
**V2 Network Configuration:**

In Smoothieware V2, network settings use sections:

```
[network]
enable = true
webserver = true
ip_address = 192.168.1.100
netmask = 255.255.255.0
```

Configuration is organized hierarchically with INI-style sections.
</v2>
</versioned>

### Vertical with Complex Content

<versioned orientation="vertical">
<v1>
**V1 Endstop Configuration:**

Endstops in V1 are configured with settings like:

- <setting v1="alpha_min_endstop" v2="endstop.alpha.limit_min.pin"></setting> - X-axis minimum endstop
- <setting v1="alpha_max_endstop" v2="endstop.alpha.limit_max.pin"></setting> - X-axis maximum endstop
- <setting v1="alpha_homing_direction" v2="endstop.alpha.home_dir"></setting> - Homing direction (home_to_min or home_to_max)
- <setting v1="alpha_homing_retract_mm" v2="endstop.alpha.retract"></setting> - Distance to retract after hitting endstop

Simple and flat configuration structure.
</v1>
<v2>
**V2 Endstop Configuration:**

Endstops in V2 use the endstop module with sections:

```
[endstop.alpha]
limit_min.pin = 1.24
limit_max.pin = 1.25
home_dir = -1
retract = 5
```

More structured and modular approach with clear hierarchies.
</v2>
</versioned>

---

## Comparison Tables

<versioned orientation="horizontal">
<v1>
**V1 Pin Modifiers:**

| Modifier | Meaning |
|----------|---------|
| `!` | Inverted (active low) |
| `o` | Open-drain output |
| `^` | Pull-up enabled (default) |
| `v` | Pull-down enabled |
| `-` | No pull resistor |

Example: <pin>1.12o!</pin> means pin 1.12 in open-drain mode, inverted.
</v1>
<v2>
**V2 Pin Modifiers:**

| Modifier | Meaning |
|----------|---------|
| `!` | Inverted (active low) |
| `o` | Open-drain output |
| `^` | Pull-up enabled (default) |
| `v` | Pull-down enabled |
| `-` | No pull resistor |

Same pin modifier syntax as V1. Example: <pin>1.12o!</pin> means pin 1.12 in open-drain mode, inverted.

Pin configuration syntax is compatible between versions!
</v2>
</versioned>

---

## Interactive Testing

Try changing the version selector in the header to see how the content changes:

<versioned orientation="horizontal">
<v1>
🔶 **You are viewing V1 content** 🔶

The version selector should be set to "V1" or "Both" to see this content.

If you switch to "V2", this content will hide and only the V2 content will be visible.
</v1>
<v2>
🔷 **You are viewing V2 content** 🔷

The version selector should be set to "V2" or "Both" to see this content.

If you switch to "V1", this content will hide and only the V1 content will be visible.
</v2>
</versioned>

---

## Technical Details

The `<versioned>` tag supports two orientations:

1. **Horizontal** (default): `<versioned>` or `<versioned orientation="horizontal">`
   - Content displayed side-by-side (50/50 split)
   - Best for comparing similar content

2. **Vertical**: `<versioned orientation="vertical">`
   - Content stacked vertically
   - Best for longer content sections

The visibility is controlled by:
- JavaScript integration with the header version selector
- CSS fallback that shows both when JavaScript is disabled
- Orange border (#ffd966) for V1 content
- Blue border (#7ec8ed) for V2 content

---

## Edge Cases

### Empty V1 Section

<versioned orientation="horizontal">
<v1>
</v1>
<v2>
This versioned block has an empty V1 section. This might happen when a feature is V2-only.
</v2>
</versioned>

### Empty V2 Section

<versioned orientation="vertical">
<v1>
This versioned block has an empty V2 section. This might happen when a feature is V1-only and deprecated in V2.
</v1>
<v2>
</v2>
</versioned>

### Minimal Content

<versioned>
<v1>Short V1 text.</v1>
<v2>Short V2 text.</v2>
</versioned>

---

## Multiple Versioned Blocks

You can have multiple versioned blocks on the same page:

<versioned orientation="horizontal">
<v1>First block - V1 content about motors.</v1>
<v2>First block - V2 content about actuators.</v2>
</versioned>

<versioned orientation="vertical">
<v1>Second block - V1 content about temperature control.</v1>
<v2>Second block - V2 content about thermistor modules.</v2>
</versioned>

<versioned>
<v1>Third block - V1 content about network settings.</v1>
<v2>Third block - V2 content about network configuration.</v2>
</versioned>

All blocks respond to the version selector simultaneously!

---

## End of Debug Page

Use the version selector in the header to test the dynamic visibility behavior.
