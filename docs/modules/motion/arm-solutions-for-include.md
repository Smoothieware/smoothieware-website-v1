# Arm Solutions

{::nomarkdown}
<a href="/images/board.png">
  <img src="/images/board.png" alt="Board" style="width: 300px; height: 300px; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

On a typical "Cartesian" machine, each actuator (a motor and a linear rail, named alpha, beta, gamma) corresponds to an axis (like X, Y, and Z).

However, on other machines, the position in Cartesian space (X, Y, Z) must be converted, using math, into a more complex position for the actuators.

This is the case, for example, of linear delta (often just called "delta") machines.

## Supported Arm Solutions

Smoothieware supports multiple arm/motion solutions to accommodate different machine architectures. The table below shows which solutions are available in each firmware version:

| Setting | v1 | v2 | Description | Documentation |
|---------|----|----|-------------|---------------|
| <raw>cartesian</raw> | ✅ | ✅ | Standard X/Y/Z configuration where each motor directly controls one axis | [Cartesian](cartesian) |
| <raw>linear_delta</raw> | ✅ | ✅ | Three vertical linear rails in triangular configuration (Rostock, Kossel) | [Delta](delta) |
| <raw>corexy</raw> or <raw>hbot</raw> | ✅ | ✅ | Crossed-belt system where both motors contribute to X and Y movement | [HBot/CoreXY](hbot) |
| <raw>corexz</raw> | ✅ | ✅ | Crossed-belt variant where both motors contribute to X and Z movement | [CoreXZ](corexz) |
| <raw>morgan</raw> | ✅ | ✅ | SCARA-style robotic arm with two parallel rotary joints | [Morgan SCARA](morgan-scara) |
| <raw>rotary_delta</raw> | ✅ | ✅ | Delta variant using rotating joints instead of linear slides (experimental) | [Rotary Delta](rotary-delta) |
| <raw>rotatable_cartesian</raw> | ✅ | ❌ | Cartesian system rotated by a specified angle (v1 only) | [Rotatable Cartesian](rotatable-cartesian) |

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Configuration Aliases:</strong> Some arm solutions can be specified using multiple names:
  <ul>
    <li><code>linear_delta</code>, <code>delta</code>, <code>rostock</code>, or <code>kossel</code> all select Linear Delta</li>
    <li><code>hbot</code> or <code>corexy</code> both select HBot (they use the same implementation)</li>
    <li><code>morgan</code> selects Morgan SCARA</li>
  </ul>
</sl-alert>
{:/nomarkdown}

## Configuration



To configure your machine for the right type, see its specific page linked in the table above.

Each arm solution has its own configuration parameters and requirements. The <setting v1="arm_solution" v2="motion control.arm_solution"></setting> setting determines the kinematics system used by your machine.

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

**V1 Configuration (flat namespace):**

```plaintext
arm_solution cartesian
```

For example, to configure a linear delta printer:
```plaintext
arm_solution linear_delta
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

**V2 Configuration (INI sections):**

```ini
[motion control]
arm_solution = cartesian
```

For example, to configure a linear delta printer:
```ini
[motion control]
arm_solution = linear_delta
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

If no arm solution is specified, `cartesian` is used by default.


