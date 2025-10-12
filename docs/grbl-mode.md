
# Using Smoothie in grbl_mode

(Or CNC mode)

Smoothie's main job is to interpret G-code and to convert it into movement and actions.

Programs that generate Gcode are called [CAM](https://en.wikipedia.org/wiki/Computer-aided_manufacturing) (computer-aided manufacturing) software.

Unfortunately, they do not all mean the same thing by the same G-codes, and there are several different G-code formats.

Smoothie supports two different G-code "dialects":

- The "reprap" dialect, for 3D printing (NOT NIST compliant)
- The "grbl" dialect, for CNC milling (Generally NIST compliant)

The "grbl" dialect is the closest to the "normal" Gcode standard (NIST), and is adequate and useful for CNC milling.

However, when the [Reprap](http://www.reprap.org) project created its own interpreters early in the project, their developers ignored the "normal" Gcode standard and redefined some of the Gcodes to do other things, or kept their meaning but changed the way their parameters work.

Unfortunately, this has become such a widespread standard in 3D printing that it cannot be changed anymore, and we are stuck with a bad format we have to understand if we want users to be able to use Smoothie for 3D printing.

Therefore, we support both formats.

The way you choose which format Smoothie will interpret the G-code you send to it as, is by changing the `grbl_mode` option.

If you set it to `true`:

```
grbl_mode    true
```

Then Smoothie will interpret the G-code you send to it the same way GRBL or LinuxCNC does, as "normal" CNC G-code.

If however you set it to `false`:

```
grbl_mode    false
```

Then Smoothie will interpret the G-code you send to it the same way Reprap-type firmwares interpret it, as "3D printing" G-code.

## CNC Build

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="tools"></sl-icon>
  <strong>CNC build</strong><br><br>

  Smoothie has a special "CNC" build with some special CNC features and adaptations.<br><br>

  This special build has <code>grbl_mode</code> enabled (set to "true") by default.<br><br>

  You can get the special CNC build pre-compiled at <a href="getting-smoothie">getting-smoothie</a> or compile it yourself at <a href="compiling-smoothie">compiling-smoothie</a>.<br><br>

  Note, some modules are excluded in CNC mode, like temperature control.
</sl-alert>
{:/nomarkdown}

## Lasers and CNC Mode

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Lasers</strong><br><br>

  This page only mentions 3D printers and CNC mills. Lasers are neither.<br><br>

  Traditionally, Lasercutting software (like <a href="laserweb">laserweb</a> or <a href="visicut">visicut</a>) have learned to talk to Smoothie in its 3D printing mode.<br><br>

  However, more CNC oriented software can also be used to control lasers (they are virtually similar to a CNC mill with a very thin tool and no Z axis), this is the case for example of <a href="bcnc">bcnc</a>.
</sl-alert>
{:/nomarkdown}

## Key Differences

Typical differences between 3D mode and CNC mode are:

1. Error messages are different
2. `G28` goes to park position and is NOT home, `$H` homes in CNC mode
3. Many GCodes may be differently interpreted in CNC mode than in 3D mode, please check your gcode references (Linuxcnc has a good GCode reference, do not use the reprap gcode reference for CNC mode)

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Pronterface Compatibility</strong><br><br>

  You cannot generally use pronterface to control CNC/grbl mode, as Pronterface is for 3D printers and uses a different dialect of gcode. It also does not allow you to send commands such as <code>$H</code> to home. It also tends to truncate commands like <code>G28.2</code> by not sending the <code>.2</code> part.
</sl-alert>
{:/nomarkdown}
