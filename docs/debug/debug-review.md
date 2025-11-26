---
permalink: /debug-review
layout: default
title: Debug - Review Tags
---

# Review Tag Debug Page

This page demonstrates the `<review>` custom tags used for proposing and reviewing documentation changes during AI-assisted updates.

**Documentation**: See [Review Tags documentation](/project/github/editing-the-wiki#review-tags-for-ai-assisted-updates) for complete usage guide.

## Features

- **Proposal/Original Toggle**: Switch between proposed and original content
- **Accept/Reject Actions**: Mark changes as accepted or rejected
- **Review Comments**: Add notes and suggestions for changes
- **LocalStorage Persistence**: Review state persists across page reloads
- **Production Safety**: Review UI only visible on localhost (invisible on live site)
- **Markdown Support**: Full markdown rendering inside review tags
- **Custom Tag Integration**: Works with `<setting>`, `<pin>`, `<versioned>`, etc.
- **Console Logging**: All review data logged to console for export

---

## Syntax and Usage

### Basic Structure

```html
<review id="page-name:change-description">
<proposal>
Proposed new or updated content (supports markdown)
</proposal>
<original>
Original content being replaced (optional for new content)
</original>
</review>
```

### Review ID Format

Format: `page-name:brief-description`

Examples: `extruders:pin-descriptions`, `motion-control:formula-update`

### Using Markdown

To enable markdown processing inside review tags, wrap them with Kramdown's `{::nomarkdown}` / `{:/nomarkdown}` directives (same as `<versioned>` tag):

```markdown
{::nomarkdown}
<review id="example:markdown-demo">
<proposal>
{:/nomarkdown}

The **acceleration** setting controls how quickly the machine speeds up.

{::nomarkdown}
</proposal>
</review>
{:/nomarkdown}
```

---

## Interactive Examples

### Test 1: Basic Review with Markdown

**Source:**

````markdown


This is a **proposed change** with `code` and [a link](/).

It includes multiple paragraphs.


````

**Result:**

{::nomarkdown}
<review id="test:basic-markdown">
<proposal>
{:/nomarkdown}

This is a **proposed change** with `code` and [a link](/).

It includes multiple paragraphs.

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

This is the original text.

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

---

### Test 2: Review with Setting Tag

**Source:**

````markdown
{::nomarkdown}
<review id="test:setting-tag">
<proposal>
{:/nomarkdown}

Configure <setting v1="acceleration" v2="motion control.default_acceleration"></setting> to 3000.

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

Configure the acceleration setting.

{::nomarkdown}
</original>
</review>
{:/nomarkdown}
````

**Result:**

{::nomarkdown}
<review id="test:setting-tag">
<proposal>
{:/nomarkdown}

Configure <setting v1="acceleration" v2="motion control.default_acceleration"></setting> to 3000.

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

Configure the acceleration setting.

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

---

### Test 3: Review with No Original (New Content)

**Source:**

````markdown
{::nomarkdown}
<review id="test:new-content">
<proposal>
{:/nomarkdown}

This is entirely new content being added to the documentation.

It demonstrates a review tag with **no original content**.

{::nomarkdown}
</proposal>
</review>
{:/nomarkdown}
````

**Result:**

{::nomarkdown}
<review id="test:new-content">
<proposal>
{:/nomarkdown}

This is entirely new content being added to the documentation.

It demonstrates a review tag with **no original content**.

{::nomarkdown}
</proposal>
</review>
{:/nomarkdown}

---

### Test 4: Complex Review with Multiple Tags

**Source:**

````markdown
{::nomarkdown}
<review id="test:complex">
<proposal>
{:/nomarkdown}

### Wiring Configuration

Connect the thermistor to <pin>0.23</pin> and set:
<setting v1="temperature_control.hotend.thermistor_pin" v2="thermistor_pin"></setting>

**Important**: Use high-temperature wire rated for 200°C.

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

Connect the thermistor and configure the pin.

{::nomarkdown}
</original>
</review>
{:/nomarkdown}
````

**Result:**

{::nomarkdown}
<review id="test:complex">
<proposal>
{:/nomarkdown}

### Wiring Configuration

Connect the thermistor to <pin>0.23</pin> and set:
<setting v1="temperature_control.hotend.thermistor_pin" v2="thermistor_pin"></setting>

**Important**: Use high-temperature wire rated for 200°C.

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

Connect the thermistor and configure the pin.

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

---

### Test 5: Markdown Formatting Test

**Source:**

````markdown
{::nomarkdown}
<review id="test:markdown-formatting">
<proposal>
{:/nomarkdown}

# Heading 1
## Heading 2
### Heading 3

**Bold text**, *italic text*, and `inline code`.

- Bullet point 1
- Bullet point 2
  - Nested bullet

1. Numbered list
2. Second item

> This is a blockquote

```
Code block example
```

[Link to homepage](/)

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

Simple original text without formatting.

{::nomarkdown}
</original>
</review>
{:/nomarkdown}
````

**Result:**

{::nomarkdown}
<review id="test:markdown-formatting">
<proposal>
{:/nomarkdown}

# Heading 1
## Heading 2
### Heading 3

**Bold text**, *italic text*, and `inline code`.

- Bullet point 1
- Bullet point 2
  - Nested bullet

1. Numbered list
2. Second item

> This is a blockquote

```
Code block example
```

[Link to homepage](/)

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

Simple original text without formatting.

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

---

### Test 6: Long Content Test

**Source:**

````markdown
{::nomarkdown}
<review id="test:long-content">
<proposal>
{:/nomarkdown}

This is a test of longer content to verify scrolling and layout behavior.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

### Section 1

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

### Section 2

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

### Section 3

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

Short original content.

{::nomarkdown}
</original>
</review>
{:/nomarkdown}
````

**Result:**

{::nomarkdown}
<review id="test:long-content">
<proposal>
{:/nomarkdown}

This is a test of longer content to verify scrolling and layout behavior.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

### Section 1

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

### Section 2

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

### Section 3

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

Short original content.

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

---

### Test 7: Multiple Custom Tags

**Source:**

````markdown
{::nomarkdown}
<review id="test:multiple-tags">
<proposal>
{:/nomarkdown}

To configure your extruder:

1. Connect to pin <pin>2.3</pin>
2. Set <setting v1="extruder.hotend.enable" v2="enable"></setting> to true
3. Configure <setting v1="extruder.hotend.steps_per_mm" v2="steps_per_mm"></setting>
4. Set temperature with <setting v1="temperature_control.hotend.set_m_code" v2="set_m_code"></setting>

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

Configure your extruder settings.

{::nomarkdown}
</original>
</review>
{:/nomarkdown}
````

**Result:**

{::nomarkdown}
<review id="test:multiple-tags">
<proposal>
{:/nomarkdown}

To configure your extruder:

1. Connect to pin <pin>2.3</pin>
2. Set <setting v1="extruder.hotend.enable" v2="enable"></setting> to true
3. Configure <setting v1="extruder.hotend.steps_per_mm" v2="steps_per_mm"></setting>
4. Set temperature with <setting v1="temperature_control.hotend.set_m_code" v2="set_m_code"></setting>

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

Configure your extruder settings.

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

---

### Test 8: Review with Lists and Code

**Source:**

````markdown
{::nomarkdown}
<review id="test:lists-code">
<proposal>
{:/nomarkdown}

Configure the stepper driver:

**Steps:**
1. Set the current limit
2. Configure microstepping
3. Test motor direction

**Configuration:**

```
alpha_current         1.5
alpha_microsteps      16
alpha_step_pin        2.0
```

**Important notes:**
- Always start with low current
- Test before connecting motors
- Check motor temperature

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

Configure stepper driver settings.

{::nomarkdown}
</original>
</review>
{:/nomarkdown}
````

**Result:**

{::nomarkdown}
<review id="test:lists-code">
<proposal>
{:/nomarkdown}

Configure the stepper driver:

**Steps:**
1. Set the current limit
2. Configure microstepping
3. Test motor direction

**Configuration:**

```
alpha_current         1.5
alpha_microsteps      16
alpha_step_pin        2.0
```

**Important notes:**
- Always start with low current
- Test before connecting motors
- Check motor temperature

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

Configure stepper driver settings.

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

---

### Test 9: Review with Versioned Tag (Combined Tags)

This test demonstrates how to combine `<review>` and `<versioned>` tags for proposing version-specific changes.

**Source:**

````markdown
{::nomarkdown}
<review id="test:versioned-combination">
<proposal>
{:/nomarkdown}

We have several communication channels available:

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

**V1 Community Channels:**

- [IRC (recommended)](/irc) - Real-time chat for quick questions
- [Forum](forum/c-496918/general) - Threaded discussions
- <setting v1="network.enable"></setting> for network configuration

<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="chat-dots"></sl-icon>
  IRC is the most active channel for V1 support!
</sl-alert>

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

**V2 Community Channels:**

- [Maker Forums](https://forum.makerforums.info/) - Active Smoothie section
- [Discord](https://forum.makerforums.info/) - Community Discord server
- <setting v2="network.enable"></setting> for network configuration

<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="chat-dots"></sl-icon>
  Maker Forums are the most active for V2 support!
</sl-alert>

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

Join our IRC channel or forums for support.

{::nomarkdown}
</original>
</review>
{:/nomarkdown}
````

**Result:**

{::nomarkdown}
<review id="test:versioned-combination">
<proposal>
{:/nomarkdown}

We have several communication channels available:

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

**V1 Community Channels:**

- [IRC (recommended)](/irc) - Real-time chat for quick questions
- [Forum](forum/c-496918/general) - Threaded discussions
- <setting v1="network.enable"></setting> for network configuration

<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="chat-dots"></sl-icon>
  IRC is the most active channel for V1 support!
</sl-alert>

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

**V2 Community Channels:**

- [Maker Forums](https://forum.makerforums.info/) - Active Smoothie section
- [Discord](https://forum.makerforums.info/) - Community Discord server
- <setting v2="network.enable"></setting> for network configuration

<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="chat-dots"></sl-icon>
  Maker Forums are the most active for V2 support!
</sl-alert>

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

Join our IRC channel or forums for support.

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

---

## LocalStorage Viewer

This section displays the current state of all review data stored in your browser's localStorage:

<div id="review-data-container">
    <h3>Current Review Data</h3>
    <div id="review-data-display" style="background: #f5f5f5; padding: 1em; border-radius: 4px; margin: 1em 0;">
        <pre id="review-json" style="margin: 0;"></pre>
    </div>

    <div style="margin-top: 1em; display: flex; gap: 1em;">
        <sl-button variant="primary" id="refresh-data-button">
            <sl-icon slot="prefix" name="arrow-clockwise"></sl-icon>
            Refresh Data
        </sl-button>

        <sl-button variant="default" id="export-data-button">
            <sl-icon slot="prefix" name="download"></sl-icon>
            Copy JSON to Clipboard
        </sl-button>
    </div>

    <p style="margin-top: 1em; font-size: 0.9em; color: #666;">
        <strong>Note:</strong> To clear review data, use browser DevTools:
        <code>localStorage.removeItem('smoothieware_reviews')</code>
    </p>

    <div id="action-feedback" style="margin-top: 1em;"></div>
</div>


---

## Testing Instructions

### How to Use This Page

1. **View Proposals**: By default, all reviews show the proposed content (pink background)
2. **Toggle View**: Click the eye icon to switch between proposal and original content
3. **Accept Changes**: Click the green checkmark to mark a change as accepted
4. **Reject Changes**: Click the red X to mark a change as rejected
5. **Add Comments**: Click the blue comment icon to add review notes
6. **Check Console**: Open browser DevTools console to see review data logs
7. **Verify Persistence**: Reload the page to verify your review states persist
8. **Export Data**: Use the "Copy JSON to Clipboard" button above to export review data

### Expected Behavior

- **Icon State**: Active icons should have subtle background highlight and ring effect
- **Toggle**: Eye icon should change when viewing original vs proposal
- **Backgrounds**: Proposal = pink, Original = light blue
- **Console Logs**: Every action should log updated review JSON to console
- **LocalStorage**: Data should persist across page reloads
- **Production Mode**: On non-localhost URLs, reviews should be invisible

### Testing Production Mode

To test production safety, you can temporarily modify the `is_localhost()` function in `review-tag.ts` to return `false`, then reload the page. You should see only the original content with no review UI.

**Note**: Review tags should NEVER appear on the production site. This debug page is for localhost testing only.

---

## Troubleshooting

### Reviews not appearing?
- Ensure you're viewing on localhost (check URL)
- Check browser console for errors
- Verify review tags have valid `id` attributes

### Icons not working?
- Check that Shoelace is loaded
- Verify no JavaScript errors in console
- Try refreshing the page

### LocalStorage not persisting?
- Check browser privacy settings
- Ensure localStorage is enabled
- Try clearing localStorage and testing again

### Custom tags not rendering?
- Verify other tag scripts are loaded
- Check console for reprocessing errors
- Ensure tags are properly formatted
