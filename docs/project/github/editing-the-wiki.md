---
permalink: /editing-the-wiki
---


# Editing the Documentation

This documentation is hosted on GitHub Pages and uses Jekyll with Markdown formatting.

Anyone can contribute improvements by submitting pull requests to the [GitHub repository](https://github.com/Smoothieware/smoothieware-website-v1).

You are very much encouraged to help us improve this documentation.

Even small contributions can have a large impact and make lots of new user's lives easier.

## How to Contribute

In order to edit the documentation, you will need to:

1. Fork the repository on GitHub

2. Edit markdown files in the `/docs` folder

3. Submit a pull request with your changes

You can just write plain text, and it will be displayed, but there are ways to make it more useful using Markdown formatting.

It is fairly simple, and you can very easily just copy the way it is done on existing pages.

A good starting point is the [GitHub Flavored Markdown documentation](https://guides.github.com/features/mastering-markdown/).

## A few examples

### Text

You can just write text and it will be displayed as-is.

To make sure lines are separated, leave an empty line between them, like this:

```
You can just write text and it will be displayed as-is.

To make sure lines are separated, leave an empty line between them, like this:
```

### Headers

You can add headers to structure your page (like on this page), by doing:

```
## Header
```

The number of `+` signs determines how big the header is, the page title has one `+` sign, and the rest get more and more as they go deeper.

### Links

To insert a link into a page, simply do:

```
This is a link: [link name](http://www.example.com).
```

### Page links

To insert a link to a page on the wiki itself, do:

```
This is a link to the [Editing the wiki](editing-the-wiki) page.
```

### Images

To insert an image, do:

```html
{::nomarkdown}
<a href="/images/temporary/3d-printer-probe.jpg">
  <img src="/images/temporary/3d-printer-probe.jpg" alt="Sample Image"/>
</a>
{:/nomarkdown}
```

A nicer way of integrating images is to do the following:

```html
<div class='panel panel-default wrap_right' style='width:450px;padding:10px '>
  <div class='panel-heading'><h4 class='panel-title'>A laser power supply</h4></div>
  <a href="/images/temporary/voltage-regulator-generic.jpg">
    <img src="/images/temporary/voltage-regulator-generic.jpg" style="width: 400px; height: 400px;"/>
  </a><br/>
  They use very high voltages and are dangerous
</div>
```

Which gives you a box, labels, and float control.

Note that you can change the floats to `middle` to make the image centered, or `left` to make it float to the left.

### Commands

If you are mentioning a G-code, M-code, or configuration option, we have special tags for that. For G-codes and M-codes, use the `<gcode>` and `<mcode>` tags:

```html
{::nomarkdown}
The <gcode>G1</gcode> G-code is pretty cool.
{:/nomarkdown}
```

### Code

To insert code into the page, you can use the special code tag:

```
# This is redundant
Some code
```

It will be formatted as mono-space, and will not be interpreted as Wiki markup.

### Alert Boxes

We use Shoelace alert components for notes, warnings, and other callouts:

<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>Shiny box</strong><br>
  With lots of yummy information
</sl-alert>

The syntax is:

```html
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>Shiny box</strong><br>
  With lots of yummy information
</sl-alert>
```

Available variants and their typical uses:

- `variant="danger"`: Red - for critical warnings

- `variant="warning"`: Orange - for important cautions

- `variant="primary"`: Blue - for tips and recommendations

- `variant="neutral"`: Gray - for general information and notes

### Configuration Settings

For documenting Smoothieware configuration options, we have a special `<setting>` tag that creates interactive tooltips with detailed information:

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>Interactive Configuration Tags</strong><br>
  The <code>&lt;setting&gt;</code> tag displays configuration options with rich tooltips showing defaults, valid values, and examples from our YAML configuration database.
</sl-alert>
{:/nomarkdown}

#### Basic Syntax

**For v1 settings:**

```html
<setting v1="alpha_steps_per_mm"></setting>
```

Which renders as: {::nomarkdown}<setting demo v1="alpha_steps_per_mm"></setting>{:/nomarkdown}

**For v2 settings:**

```html
<setting v2="actuator.alpha.steps_per_mm"></setting>
```

Which renders as: {::nomarkdown}<setting demo v2="actuator.alpha.steps_per_mm"></setting>{:/nomarkdown}

**For settings that exist in both versions:**

```html
<setting v1="acceleration" v2="motion control.default_acceleration"></setting>
```

Which renders as: {::nomarkdown}<setting demo v1="acceleration" v2="motion control.default_acceleration"></setting>{:/nomarkdown}

#### How It Works

When you use a `<setting>` tag:
- It displays as an inline code element (monospace, highlighted)
- Shows both v1 and v2 names when applicable
- Provides an interactive tooltip on hover with:
  - Full description
  - Default values
  - Valid value ranges
  - Usage examples
  - Related settings
- All data comes from `/docs/assets/data/smoothieware-v1-config.yaml`

#### Examples

Here are some real-world examples:

**Motor configuration:**

```html
Configure the <setting v1="alpha_steps_per_mm" v2="actuator.alpha.steps_per_mm"></setting>
setting to control how many motor steps equal 1mm of movement.
```

Renders as:

{::nomarkdown}
Configure the <setting demo v1="alpha_steps_per_mm" v2="actuator.alpha.steps_per_mm"></setting>
setting to control how many motor steps equal 1mm of movement.
{:/nomarkdown}

**Temperature control:**

```html
The hotend thermistor pin is set with
<setting v1="temperature_control.hotend.thermistor_pin" v2="thermistor_pin"></setting>.
```

Renders as:

{::nomarkdown}
The hotend thermistor pin is set with
<setting demo v1="temperature_control.hotend.thermistor_pin" v2="thermistor_pin"></setting>.
{:/nomarkdown}

**Motion settings:**

```html
Basic motion is controlled by <setting v1="acceleration" v2="motion control.default_acceleration"></setting>
and <setting v1="junction_deviation" v2="planner.junction_deviation"></setting>.
```

Renders as:

{::nomarkdown}
Basic motion is controlled by <setting demo v1="acceleration" v2="motion control.default_acceleration"></setting>
and <setting demo v1="junction_deviation" v2="planner.junction_deviation"></setting>.
{:/nomarkdown}

**Single version only:**

```html
The <setting v1="arm_solution"></setting> determines your kinematics type.
```

Renders as:

{::nomarkdown}
The <setting demo v1="arm_solution"></setting> determines your kinematics type.
{:/nomarkdown}

#### Important Notes

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Markdown Wrapper Required</strong><br>
  When using setting tags inside regular markdown content, you must wrap them in <code>{::nomarkdown}...{:/nomarkdown}</code> blocks to prevent Jekyll from processing them as markdown.
</sl-alert>
{:/nomarkdown}

**Example with wrapper:**

```html
{::nomarkdown}
Configure your printer by setting <setting v1="alpha_steps_per_mm"></setting> first.
{:/nomarkdown}
```

Renders as:

{::nomarkdown}
Configure your printer by setting <setting demo v1="alpha_steps_per_mm"></setting> first.
{:/nomarkdown}

#### Demo Attribute

For documentation pages (like this one), you can use the `demo` attribute to make custom tags render independently of the currently selected version:

```html
<setting demo v1="alpha_steps_per_mm" v2="actuator.alpha.steps_per_mm"></setting>
```

With `demo`, the tag will always display both v1 and v2 content (for dual-attribute tags) regardless of the user's version selector choice. This ensures documentation examples always look the same.

The `demo` attribute works with:
- `<setting>` tags - always shows both versions
- `<versioned>` tags - use `demo="both"` to always show both, `demo="v1"` for v1-only demo, `demo="v2"` for v2-only demo

#### Testing Your Settings

You can test setting tags and see all available examples on the [Debug Settings](/debug-settings) page, which demonstrates various usage patterns and interactive features.

### Raw Text Display

For displaying raw text, code snippets, or technical values in a monospace black box, we have the `<raw>` tag:

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>Simple Code Display</strong><br>
  The <code>&lt;raw&gt;</code> tag displays text in a monospace black box with white text - perfect for inline code snippets, file paths, or technical values.
</sl-alert>
{:/nomarkdown}

#### Basic Syntax

```html
<raw>text content here</raw>
```

Which renders as: {::nomarkdown}<raw>text content here</raw>{:/nomarkdown}

#### Use Cases

**File paths:**

```html
The configuration file is located at <raw>/etc/smoothie/config</raw>.
```

Renders as:

{::nomarkdown}
The configuration file is located at <raw>/etc/smoothie/config</raw>.
{:/nomarkdown}

**Code snippets:**

```html
Use the command <raw>M114</raw> to query the current position.
```

Renders as:

{::nomarkdown}
Use the command <raw>M114</raw> to query the current position.
{:/nomarkdown}

**Technical values:**

```html
Set the baud rate to <raw>115200</raw> for serial communication.
```

Renders as:

{::nomarkdown}
Set the baud rate to <raw>115200</raw> for serial communication.
{:/nomarkdown}

**Pin assignments:**

```html
Connect the signal wire to pin <raw>2.5</raw> on the board.
```

Renders as:

{::nomarkdown}
Connect the signal wire to pin <raw>2.5</raw> on the board.
{:/nomarkdown}

#### Notes

- The `<raw>` tag is simpler than the `<setting>` tag - it has no interactive features or tooltips
- Best used for short inline code snippets or technical values
- Text is displayed in white monospace font on a black background
- Like other custom tags, wrap in `{::nomarkdown}...{:/nomarkdown}` when using in markdown content

### G-code and M-code Display

For displaying G-codes and M-codes, we have specialized tags:

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>G-code and M-code Tags</strong><br>
  Use <code>&lt;gcode&gt;</code> for G-codes and <code>&lt;mcode&gt;</code> for M-codes - same styling as <code>&lt;raw&gt;</code> but semantically correct.
</sl-alert>
{:/nomarkdown}

#### Basic Syntax

**For G-codes:**

```html
<gcode>G10</gcode>
```

Which renders as: {::nomarkdown}<gcode>G10</gcode>{:/nomarkdown}

**For M-codes:**

```html
<mcode>M119</mcode>
```

Which renders as: {::nomarkdown}<mcode>M119</mcode>{:/nomarkdown}

#### Use Cases

**G-code commands:**

```html
Use the <gcode>G28</gcode> command to home all axes.
```

Renders as:

{::nomarkdown}
Use the <gcode>G28</gcode> command to home all axes.
{:/nomarkdown}

**M-code commands:**

```html
Send <mcode>M119</mcode> to check endstop status.
```

Renders as:

{::nomarkdown}
Send <mcode>M119</mcode> to check endstop status.
{:/nomarkdown}

**In documentation:**

```html
The <gcode>G0</gcode> and <gcode>G1</gcode> commands control linear movement, while <mcode>M3</mcode> starts the spindle.
```

Renders as:

{::nomarkdown}
The <gcode>G0</gcode> and <gcode>G1</gcode> commands control linear movement, while <mcode>M3</mcode> starts the spindle.
{:/nomarkdown}

### Pin Number Display

For displaying pin numbers and assignments with interactive tooltips, use the `<pin>` tag:

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>Interactive Pin Tag</strong><br>
  The <code>&lt;pin&gt;</code> tag displays pin numbers with rich interactive tooltips showing pin capabilities, peripheral assignments, warnings, and configuration examples from our YAML pin database. Supports pin modifiers for showing configured behavior.
</sl-alert>
{:/nomarkdown}

#### Basic Syntax

**Simple pin number:**

```html
<pin>1.18</pin>
```

Which renders as: {::nomarkdown}<pin>1.18</pin>{:/nomarkdown}

Hover over the pin to see detailed information including:
- Pin assignment and description
- Hardware capabilities (PWM, ADC, interrupt support)
- Peripheral connections
- Alternate functions
- Pin naming across different platforms (mBed, LPCXpresso)
- Usage notes and warnings
- Configuration examples

#### Pin Modifiers

The `<pin>` tag supports all Smoothieware pin modifiers. When you include modifiers, the popup will display an explanation of what each modifier does:

**Pin with modifiers:**

```html
<pin>1.12o!</pin>
```

Which renders as: {::nomarkdown}<pin>1.12o!</pin>{:/nomarkdown}

**Available modifiers:**
- `!` - Invert pin (reverses logic levels)
- `o` - Open-drain mode (for shared signals)
- `^` - Pull-up enabled (default, weak pull to 3.3V)
- `v` - Pull-down enabled (weak pull to ground)
- `-` - No pull resistor (disables internal pulls)
- `@` - Repeater mode (maintains last state, rarely used)

**Multiple modifiers:**

You can combine multiple modifiers in any order:

```html
<pin>2.11!o^</pin>
```

Which renders as: {::nomarkdown}<pin>2.11!o^</pin>{:/nomarkdown}

The popup will show each modifier with its meaning and usage information.

**Common modifier combinations:**

```html
Endstop configured as <pin>1.24!^</pin> (inverted with pull-up)
```

Renders as:

{::nomarkdown}
Endstop configured as <pin>1.24!^</pin> (inverted with pull-up)
{:/nomarkdown}

```html
Shared alarm signal on <pin>2.11o^</pin> (open-drain with pull-up)
```

Renders as:

{::nomarkdown}
Shared alarm signal on <pin>2.11o^</pin> (open-drain with pull-up)
{:/nomarkdown}

See the [Pin Configuration](/pin-configuration) page for detailed explanations of what each modifier does and when to use them.

#### Use Cases

**Pin assignments:**

```html
Connect the thermistor to pin <pin>0.23</pin>.
```

Renders as:

{::nomarkdown}
Connect the thermistor to pin <pin>0.23</pin>.
{:/nomarkdown}

**Wiring instructions:**

```html
The step signal goes to <pin>2.0</pin>, direction to <pin>0.5</pin>, and enable to <pin>0.4</pin>.
```

Renders as:

{::nomarkdown}
The step signal goes to <pin>2.0</pin>, direction to <pin>0.5</pin>, and enable to <pin>0.4</pin>.
{:/nomarkdown}

**Hardware documentation:**

```html
Smoothieboard uses pins <pin>1.18</pin> through <pin>1.21</pin> for the X axis motor driver.
```

Renders as:

{::nomarkdown}
Smoothieboard uses pins <pin>1.18</pin> through <pin>1.21</pin> for the X axis motor driver.
{:/nomarkdown}

**Configuration examples with modifiers:**

```html
Configure your endstop as <pin>1.29!^</pin> for inverted logic with pull-up enabled.
```

Renders as:

{::nomarkdown}
Configure your endstop as <pin>1.29!^</pin> for inverted logic with pull-up enabled.
{:/nomarkdown}

### Version-Specific Content

For displaying content that differs between Smoothieware V1 and V2, we have the `<versioned>` tag system:

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>Version-Specific Content Display</strong><br>
  The <code>&lt;versioned&gt;</code> tag lets you show different content for V1 and V2 users based on their version preference. Content can be displayed side-by-side (horizontal) or stacked (vertical).
</sl-alert>
{:/nomarkdown}

#### Basic Syntax

The `<versioned>` tag contains two sections: `<v1>` for V1-specific content and `<v2>` for V2-specific content. To enable markdown processing inside these tags, wrap them with Kramdown's `{::nomarkdown}` / `{:/nomarkdown}` directives:

```html
{::nomarkdown}
<versioned>
<v1>
{:/nomarkdown}

V1 content here with **markdown** formatting.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

V2 content here with **markdown** formatting.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}
```

#### Horizontal Layout (Side-by-Side)

The default orientation is horizontal, which displays V1 and V2 content side-by-side (50/50 split). This is best for comparing similar content:

```html
{::nomarkdown}
<versioned orientation="horizontal">
<v1>
{:/nomarkdown}

**V1 Configuration:**

- Setting A: `value1`
- Setting B: `value2`

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

**V2 Configuration:**

- Setting A: `new_value1`
- Setting B: `new_value2`

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}
```

You can omit `orientation="horizontal"` since it's the default:

```html
{::nomarkdown}
<versioned>
<v1>
{:/nomarkdown}

V1 content here.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

V2 content here.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}
```

#### Vertical Layout (Stacked)

For longer content sections, use vertical orientation to stack V1 and V2 content:

```html
{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

**V1 Network Configuration:**

In Smoothieware V1, network settings use a flat structure:

- `network.enable true`
- `network.ip_address 192.168.1.100`
- `network.ip_mask 255.255.255.0`

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

**V2 Network Configuration:**

In Smoothieware V2, network settings use INI-style sections:

```
[network]
enable = true
ip_address = 192.168.1.100
netmask = 255.255.255.0
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}
```

#### Markdown Support

To use markdown inside versioned tags, you **must** wrap the HTML tags with `{::nomarkdown}` and `{:/nomarkdown}` directives. This tells Jekyll's Kramdown processor to handle the content correctly.

**Important rules:**

1. Use `{::nomarkdown}` before opening HTML tags
2. Use `{:/nomarkdown}` after opening tags to re-enable markdown
3. Add blank lines after `{:/nomarkdown}` and before `{::nomarkdown}` for proper parsing
4. Repeat the pattern when closing tags

**All markdown features work inside versioned content:**
- **Bold** and _italic_ text
- Bullet and numbered lists
- Code blocks with triple backticks
- Inline `code`
- Tables
- Links
- Nested custom tags like `<setting>`, `<pin>`, `<gcode>`, etc.

#### Use Cases

**Configuration comparisons:**

```html
{::nomarkdown}
<versioned>
<v1>
{:/nomarkdown}

Configure stepper motors with <setting v1="alpha_steps_per_mm"></setting>
and <setting v1="alpha_max_rate"></setting>.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

Configure stepper motors with <setting v2="actuator.alpha.steps_per_mm"></setting>
and <setting v2="actuator.alpha.max_rate"></setting>.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}
```

**Renders as:**

{::nomarkdown}
<versioned demo="both">
<v1>
{:/nomarkdown}

Configure stepper motors with <setting demo v1="alpha_steps_per_mm"></setting>
and <setting demo v1="alpha_max_rate"></setting>.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

Configure stepper motors with <setting demo v2="actuator.alpha.steps_per_mm"></setting>
and <setting demo v2="actuator.alpha.max_rate"></setting>.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

**Feature availability:**

```html
{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

This feature is not available in V1.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

**New in V2:**

This feature allows you to configure advanced motion control
with improved acceleration profiles.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}
```

**Renders as:**

{::nomarkdown}
<versioned demo="both" orientation="vertical">
<v1>
{:/nomarkdown}

This feature is not available in V1.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

**New in V2:**

This feature allows you to configure advanced motion control
with improved acceleration profiles.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

**Pin assignments with differences:**

```html
{::nomarkdown}
<versioned>
<v1>
{:/nomarkdown}

Connect the thermistor to <pin>0.23</pin> and configure with
<setting v1="temperature_control.hotend.thermistor_pin"></setting>.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

Connect the thermistor to <pin>0.23</pin> (same pin) and configure with
<setting v2="thermistor.hotend.pin"></setting>.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}
```

**Renders as:**

{::nomarkdown}
<versioned demo="both">
<v1>
{:/nomarkdown}

Connect the thermistor to <pin>0.23</pin> and configure with
<setting demo v1="temperature_control.hotend.thermistor_pin"></setting>.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

Connect the thermistor to <pin>0.23</pin> (same pin) and configure with
<setting demo v2="thermistor.hotend.pin"></setting>.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

#### How It Works

The versioned tag system integrates with the version selector in the page header:

- **Show V1**: Displays only V1 content (V2 hidden)
- **Show V2**: Displays only V2 content (V1 hidden)
- **Show Both**: Displays both side-by-side or stacked with color-coded borders
  - V1 content: orange dotted border
  - V2 content: blue dotted border

When showing only one version, the content appears as normal page text with no special styling. When showing both, the borders help distinguish between versions.

Users can click on the V1/V2 labels to open the version selector and switch between modes.

#### Important Notes

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Kramdown Wrappers Required for Markdown</strong><br>
  Without the <code>{::nomarkdown}</code> / <code>{:/nomarkdown}</code> wrappers, markdown inside versioned tags will NOT be processed. Always use the wrapper pattern shown in the examples above.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>Test Your Versioned Content</strong><br>
  See the <a href="/debug-versioned-tags">Debug Versioned Tags</a> page for comprehensive examples and to test how versioned content appears in different modes.
</sl-alert>
{:/nomarkdown}

### Lists

You can make nicely formatted lists by doing:

```
- Item one
- Item two
- Item three
```

They then look like this:

- Item one
- Item two
- Item three

### HTML

You can insert raw HTML into the page by doing:

```html
<h1>Custom HTML</h1>
<p>Something else</p>
{::nomarkdown}
<a href="/images/circuit.png">
  <img src="/images/circuit.png" alt="hello ;-)"/>
</a>
{:/nomarkdown}
```

This is in particular useful to insert Youtube videos and the like.

### Page Layout

The site uses Jekyll with custom CSS for formatting.

For images, you can float them to the right or center them:

**Floating an image to the right:**

```html
{::nomarkdown}
<a href="/images/temporary/pick-place-machine-generic.jpg">
  <img src="/images/temporary/pick-place-machine-generic.jpg" alt="Description" style="width: 200px; height: 150px; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}
```

**Centering a large image:**

```html
{::nomarkdown}
<div style="text-align: center;">
  <a href="/images/temporary/pick-place-machine-generic.jpg">
    <img src="/images/temporary/pick-place-machine-generic.jpg" alt="Description" style="min-width: 640px; width: 100%; max-width: 800px;"/>
  </a>
</div>
{:/nomarkdown}
```
