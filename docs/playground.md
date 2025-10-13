# Playground

This page is a sandbox for testing documentation features and trying out new formatting ideas.

## Purpose

The Playground serves as a testing ground for:

- Testing markdown formatting
- Trying out new Shoelace components
- Experimenting with image layouts
- Testing code block syntax highlighting
- Validating link structures

## Usage

Feel free to use this page to experiment with documentation styles before applying them to actual content pages.

## Example Alert

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  This is an example neutral alert component using Shoelace.
</sl-alert>
{:/nomarkdown}

## Example Code Block

```gcode
G28     ; Home all axes
G1 X10 Y10 F3000
G1 Z5 F500
M104 S200  ; Set hotend temperature
```

## Example Image

{::nomarkdown}
<div style="text-align: center; margin: 2rem 0;">
  <a href="/images/smoothieboard-fritzing.png">
    <img src="/images/smoothieboard-fritzing.png" alt="Example Image" style="width: 400px; max-width: 100%; height: auto;"/>
  </a>
  <p style="margin-top: 0.5rem; font-style: italic;">Example centered image with caption</p>
</div>
{:/nomarkdown}

## Notes

This page is intentionally minimal and can be used for testing purposes.
