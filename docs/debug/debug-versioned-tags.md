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
- **Markdown Support**: Full markdown rendering inside versioned tags (using Kramdown `{::nomarkdown}` directives)

---

## Syntax and Usage

### Basic Syntax

To use versioned tags with markdown support, you must wrap the HTML tags with Kramdown's `{::nomarkdown}` and `{:/nomarkdown}` directives:

```html
{::nomarkdown}
<versioned orientation="horizontal">
<v1>
{:/nomarkdown}

V1 content here with **bold** and _italic_ text, lists, etc.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

V2 content here with **bold** and _italic_ text, lists, etc.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}
```

**Important:**
- Use `{::nomarkdown}` before opening HTML tags
- Use `{:/nomarkdown}` after opening tags to re-enable markdown processing
- Add blank lines after `{:/nomarkdown}` and before `{::nomarkdown}` for proper markdown parsing
- Repeat the pattern when closing tags

### Attributes

**`<versioned>` attributes:**
- `orientation="horizontal"` (default) - Side-by-side layout
- `orientation="vertical"` - Stacked layout

### Supported Markdown Inside Versioned Tags

When using the `{::nomarkdown}` / `{:/nomarkdown}` pattern, you can use all standard markdown features:

- **Bold text**: `**bold**` → **bold**
- **Italic text**: `_italic_` → _italic_
- **Lists**: Bullet lists with `-` or numbered lists with `1.`
- **Code blocks**: Triple backticks for code blocks
- **Inline code**: Backticks for `inline code`
- **Tables**: Markdown table syntax with `|`
- **Links**: `[text](url)`
- **Nested tags**: `<setting>`, `<pin>`, etc.

### Without the Kramdown Directives

If you omit the `{::nomarkdown}` / `{:/nomarkdown}` wrappers, the content will be treated as raw HTML and markdown syntax will NOT be processed (you'll see literal `**text**` instead of bold).

---

## Syntax Examples (Copy-Paste Ready)

### Example 1: Basic Horizontal Layout with Lists

```html
{::nomarkdown}
<versioned orientation="horizontal">
<v1>
{:/nomarkdown}

**V1 Configuration:**

- Setting A: `value1`
- Setting B: `value2`
- Setting C: `value3`

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

**V2 Configuration:**

- Setting A: `new_value1`
- Setting B: `new_value2`
- Setting C: `new_value3`

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}
```

### Example 2: Vertical Layout with Code Blocks

```html
{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

**V1 Config File:**

\```
alpha_steps_per_mm 80
alpha_max_rate 30000
alpha_current 1.5
\```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

**V2 Config File:**

\```
[actuator.alpha]
steps_per_mm = 80
max_rate = 30000
current = 1.5
\```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}
```

### Example 3: With Nested Custom Tags

```html
{::nomarkdown}
<versioned>
<v1>
{:/nomarkdown}

Configure the thermistor pin: <setting v1="temperature_control.hotend.thermistor_pin" v2="thermistor_pin"></setting>

Use pin <pin>1.24</pin> for the X-axis endstop.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

Configure the thermistor pin: <setting v1="temperature_control.hotend.thermistor_pin" v2="thermistor_pin"></setting>

Use pin <pin>1.24</pin> for the X-axis endstop (same hardware).

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}
```

### Example 4: With Tables

```html
{::nomarkdown}
<versioned orientation="horizontal">
<v1>
{:/nomarkdown}

| Setting | Value |
|---------|-------|
| Steps   | 80    |
| Rate    | 30000 |

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

| Setting | Value |
|---------|-------|
| Steps   | 80    |
| Rate    | 30000 |

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}
```

### Example 5: Plain Text (No Markdown Needed)

If you have plain text with no markdown formatting, you can omit the Kramdown directives:

```html
<versioned>
<v1>This is plain V1 text with no formatting.</v1>
<v2>This is plain V2 text with no formatting.</v2>
</versioned>
```

But it's recommended to always use the `{::nomarkdown}` pattern for consistency and to enable markdown if you need to add formatting later.

---

## Horizontal Layout Examples (Default)

### Basic Horizontal Example

{::nomarkdown}
<versioned orientation="horizontal">
<v1>
{:/nomarkdown}

This content is only shown for Smoothieware V1.

V1 uses the old configuration format with simple key-value pairs. For example, to configure a stepper motor, you'd use settings like:

- `alpha_steps_per_mm`: steps per millimeter
- `alpha_max_rate`: maximum speed
- `alpha_current`: motor current

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

This content is only shown for Smoothieware V2.

V2 uses a hierarchical configuration format with INI-style sections. For example, to configure a stepper motor, you'd use settings like:

- `actuator.alpha.steps_per_mm`: steps per millimeter
- `actuator.alpha.max_rate`: maximum speed
- `actuator.alpha.current`: motor current

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

### Horizontal with Nested Tags

{::nomarkdown}
<versioned>
<v1>
{:/nomarkdown}

In V1, configure your thermistor pin with <setting v1="temperature_control.hotend.thermistor_pin" v2="thermistor_pin"></setting> and heater pin with <setting v1="temperature_control.hotend.heater_pin" v2="heater_pin"></setting>.

The pin assignment for the X-axis endstop is typically <pin>1.24</pin>.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

In V2, configure your thermistor pin with <setting v1="temperature_control.hotend.thermistor_pin" v2="thermistor_pin"></setting> and heater pin with <setting v1="temperature_control.hotend.heater_pin" v2="heater_pin"></setting>.

The pin assignment for the X-axis endstop is typically <pin>1.24</pin> (same hardware, different config format).

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

---

## Vertical Layout Examples

### Basic Vertical Example

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

**V1 Network Configuration:**

In Smoothieware V1, network settings are configured in a flat structure:

- `network.enable true` - Enable network interface
- `network.webserver.enable true` - Enable web server
- `network.ip_address 192.168.1.100` - Static IP address
- `network.ip_mask 255.255.255.0` - Subnet mask

All settings are in the root config file.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

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

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

### Vertical with Complex Content

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

**V1 Endstop Configuration:**

Endstops in V1 are configured with settings like:

- <setting v1="alpha_min_endstop" v2="endstop.alpha.limit_min.pin"></setting> - X-axis minimum endstop
- <setting v1="alpha_max_endstop" v2="endstop.alpha.limit_max.pin"></setting> - X-axis maximum endstop
- <setting v1="alpha_homing_direction" v2="endstop.alpha.home_dir"></setting> - Homing direction (home_to_min or home_to_max)
- <setting v1="alpha_homing_retract_mm" v2="endstop.alpha.retract"></setting> - Distance to retract after hitting endstop

Simple and flat configuration structure.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

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

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

---

## Comparison Tables

{::nomarkdown}
<versioned orientation="horizontal">
<v1>
{:/nomarkdown}

**V1 Pin Modifiers:**

| Modifier | Meaning |
|----------|---------|
| `!` | Inverted (active low) |
| `o` | Open-drain output |
| `^` | Pull-up enabled (default) |
| `v` | Pull-down enabled |
| `-` | No pull resistor |

Example: <pin>1.12o!</pin> means pin 1.12 in open-drain mode, inverted.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

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

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

---

## Interactive Testing

Try changing the version selector in the header to see how the content changes:

{::nomarkdown}
<versioned orientation="horizontal">
<v1>
{:/nomarkdown}

🔶 **You are viewing V1 content** 🔶

The version selector should be set to "V1" or "Both" to see this content.

If you switch to "V2", this content will hide and only the V2 content will be visible.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

🔷 **You are viewing V2 content** 🔷

The version selector should be set to "V2" or "Both" to see this content.

If you switch to "V1", this content will hide and only the V1 content will be visible.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

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

{::nomarkdown}
<versioned orientation="horizontal">
<v1>
{:/nomarkdown}

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

This versioned block has an empty V1 section. This might happen when a feature is V2-only.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

### Empty V2 Section

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

This versioned block has an empty V2 section. This might happen when a feature is V1-only and deprecated in V2.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

### Minimal Content

{::nomarkdown}
<versioned>
<v1>
{:/nomarkdown}

Short V1 text.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

Short V2 text.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

---

## Multiple Versioned Blocks

You can have multiple versioned blocks on the same page:

{::nomarkdown}
<versioned orientation="horizontal">
<v1>
{:/nomarkdown}

First block - V1 content about motors.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

First block - V2 content about actuators.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

Second block - V1 content about temperature control.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

Second block - V2 content about thermistor modules.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
<versioned>
<v1>
{:/nomarkdown}

Third block - V1 content about network settings.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

Third block - V2 content about network configuration.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

All blocks respond to the version selector simultaneously!

---

## End of Debug Page

Use the version selector in the header to test the dynamic visibility behavior.
