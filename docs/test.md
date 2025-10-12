# Test Page

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Test Page:</strong> This is a test page for the Smoothieware documentation system. It may be used for testing documentation features, layouts, or components.
</sl-alert>
{:/nomarkdown}

## Purpose

This page is used for testing and development purposes.

It can be used to:

- Test new documentation features
- Verify component rendering
- Test styling and layout changes
- Experiment with new content formats

## Sample Components

### Sample Alert

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  This is a sample primary alert component.
</sl-alert>
{:/nomarkdown}

### Sample Code Block

```gcode
G28 ; Home all axes
G1 X10 Y10 Z0.2 F3000 ; Move to position
M3 S1000 ; Start spindle at 1000 RPM
```

### Sample Table

| Parameter | Value | Description |
| --------- | ----- | ----------- |
| `test_parameter` | `true` | This is a test parameter |
| `another_parameter` | `42` | Another test parameter |

## Related Pages

- [Homepage](index)
- [Getting Started](start)
- [Configuration](configuring-smoothie)
