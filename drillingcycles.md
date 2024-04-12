
# Drilling Cycles Module

The canned drilling cycles module is a short G-Code produced by some serious CAM software to make holes. In addition to adding some features, this significantly reduces the number of instructions sent through the serial port.

Currently, the drilling cycles module implements the first three options in absolute mode `G90` only. For a complete list/description of G-Code, see [Tormach's G81-G89 Background](http://www.tormach.com/g81_g89_background).

> [!WARNING]
> Incremental mode not implemented (L).

> [!DANGER]
> In relative mode `G91`, drilling holes operations are ignored.

## Configuration

| Option | Example Value | Explanation |
| ------ | ------------- | ----------- |
{% include_relative drillingcycles-options.md %}

## G-Code

- `G98` Retract to initial Z
- `G99` Retract to R plane

- `G81` Simple drilling cycle.
- `G82` Drilling cycle with a pause at final depth (Dwell).
- `G83` Peck drilling cycle; incremental drilling with a retract, can be combined with dwell.

- `G80` Mark the end of cycle.
