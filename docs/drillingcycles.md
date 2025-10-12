---
layout: default
title: Drilling Cycles Module
---

# Drilling Cycles Module

The canned drilling cycles module is a short G-Code produced by some serious CAM software to make holes.

In addition to adding some features, this significantly reduces the number of instructions sent through the serial port.

Currently, the drilling cycles module implements the first three options in absolute mode `G90` only.

For a complete list/description of G-Code, see [Tormach's G81-G89 Background](http://www.tormach.com/g81_g89_background).

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  Incremental mode not implemented (L).
</sl-alert>

<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  In relative mode <code>G91</code>, drilling holes operations are ignored.
</sl-alert>

## Configuration

| Option | Example Value | Explanation |
| ------ | ------------- | ----------- |
{% include_relative drillingcycles-options.md %}

## G-Code

### Retract Modes

- `G98` - Retract to initial Z
- `G99` - Retract to R plane

### Drilling Cycles

- `G81` - Simple drilling cycle.
- `G82` - Drilling cycle with a pause at final depth (Dwell).
- `G83` - Peck drilling cycle; incremental drilling with a retract, can be combined with dwell.

### End Cycle

- `G80` - Mark the end of cycle.
