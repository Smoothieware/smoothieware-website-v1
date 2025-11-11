# Stopping Smoothie

There are several different ways to stop Smoothie during operation, each with different behaviors and use cases.

Understanding these methods is important for safe operation and troubleshooting.

---

## Stop Methods Comparison

<table>
<tr>
  <th>Command</th>
  <th>G-code</th>
  <th>Movement</th>
  <th>Heaters</th>
  <th>File playing</th>
  <th>Recoverable</th>
  <th>Documentation</th>
</tr>
<tr>
  <td>abort</td>
  <td><mcode>M26</mcode></td>
  <td>Stops SDCARD print immediately</td>
  <td>Not affected</td>
  <td>Aborts</td>
  <td>Position maintained, file must be restarted</td>
  <td><a href="player">Player</a></td>
</tr>
<tr>
  <td>suspend</td>
  <td><mcode>M600</mcode></td>
  <td>Stops once queue is empty</td>
  <td>Turned off (if option enabled)</td>
  <td>Paused, can be resumed</td>
  <td>Yes, with resume or <mcode>M601</mcode></td>
  <td><a href="player">Player</a></td>
</tr>
<tr>
  <td>Kill button</td>
  <td><mcode>M112</mcode></td>
  <td>Stops instantly (if button), waits for buffer (if host)</td>
  <td>Turned off</td>
  <td>Aborted</td>
  <td>No, position lost, home required</td>
  <td><a href="supported-g-codes">supported-g-codes</a></td>
</tr>
<tr>
  <td>Control-X</td>
  <td>-</td>
  <td>Stops instantly, works during streaming</td>
  <td>Turned off</td>
  <td>Aborted</td>
  <td>No, position lost, home required</td>
  <td>-</td>
</tr>
</table>

---

## Detailed Method Descriptions

{::nomarkdown}
### Abort Command (abort / <mcode>M26</mcode>)
{:/nomarkdown}

Stops the execution of a file being played from SDCARD.

**Behavior:**
- Completes the current G-code
- Stops immediately after that
- Discards the rest of the queued commands
- Attempts to maintain the correct position after the abort
- Heaters remain at their current state

**Use Case:** Quick stop of a print job while preserving position and keeping heaters on.

**Recovery:** Position is maintained, but the file must be restarted from the beginning.

**Documentation:** [Player module](player)

---

{::nomarkdown}
### Suspend Command (suspend / <mcode>M600</mcode>)
{:/nomarkdown}

Suspends the execution of a file being played from SDCARD or being streamed from a host.

**Behavior:**
- Stops once the movement queue is empty
- All state is saved
- Heaters turned off by default (configurable)
- Jogging and extruding are allowed during suspension

{::nomarkdown}
- Can be resumed with resume or <mcode>M601</mcode>
{:/nomarkdown}

**Use Case:** Mid-print filament change or filament out detection.

**Host Support:** Requires upstream support. Currently Pronterface and OctoPrint support it. Other hosts need to be manually paused.

**Recovery:** Yes, fully recoverable with position maintained.

**Documentation:** [Player module](player)

---

{::nomarkdown}
### Kill Button / <mcode>M112</mcode>
{:/nomarkdown}

Emergency stop that instantly halts all operations.

**Behavior:**
- **If kill button pressed:** Stops instantly

{::nomarkdown}
- **If <mcode>M112</mcode> issued from host:** Has to wait for the receive buffer to have room
{:/nomarkdown}
- All heaters turned off
- File playing aborted
- Position is lost

{::nomarkdown}
- System enters Halt state until <mcode>M999</mcode> is sent
{:/nomarkdown}

**Use Case:** Emergency situations requiring immediate stop.

**Recovery:** No, position is lost. Homing will be required.

**Documentation:** [Supported G-codes](supported-g-codes), [Kill Button](killbutton)

{::nomarkdown}
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Warning:</strong> Using the kill button or <mcode>M112</mcode> will cause position loss. You must home all axes before continuing normal operation.
</sl-alert>
{:/nomarkdown}

---

### Control-X

Sends a control character to stop Smoothie instantly.

**Behavior:**
- Works at any time, even when streaming
- Same effect as the kill button
- All heaters turned off
- File playing aborted
- Position is lost

{::nomarkdown}
- System enters Halt state until <mcode>M999</mcode> or $X is sent
{:/nomarkdown}

**Use Case:** Emergency stop from terminal/console when streaming G-code.

**Recovery:** No, position is lost. Homing will be required.

---

## Halt State

{::nomarkdown}
When the kill button is pressed (or there is a temperature fault, <mcode>M112</mcode> is issued, a limit switch is hit, or other error), the system enters the <strong>Halt state</strong>.
{:/nomarkdown}

### Halt State Behavior

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Halt State Indicators:</strong>
  <ul>
    <li>Play LED flashes</li>
    <li>Any command issued from host gets a <code>!!</code> response (with a few exceptions)</li>
    <li>PSU may be turned off if a PSU Switch is defined</li>
  </ul>
</sl-alert>
{:/nomarkdown}

### Clearing Halt State

The Halt state can be cleared by:

{::nomarkdown}
1. <strong>Issuing <mcode>M999</mcode></strong> from the host
{:/nomarkdown}
2. **Holding the flashing kill button** for 2 seconds
3. **Using the LCD panel** (if equipped)

---

## Using Buttons and Sensors

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>Tip:</strong> All stop commands can be triggered by a button or a sensor if a <a href="switch">Switch module</a> is configured to do so. This allows for physical emergency stop buttons or automatic stopping based on sensor conditions.
</sl-alert>
{:/nomarkdown}

---

## Best Practices

### For Normal Operation

{::nomarkdown}
- Use <strong>suspend/resume</strong> (<mcode>M600</mcode>/<mcode>M601</mcode>) for planned interruptions like filament changes
{:/nomarkdown}
- Use **abort** when you need to stop quickly but keep heaters on

### For Emergencies

- Use the **kill button** or **Control-X** for immediate emergency stops
- Remember that position will be lost and homing will be required

### Recovery After Emergency Stop

{::nomarkdown}
1. Clear the Halt state with <mcode>M999</mcode>
{:/nomarkdown}
2. Home all axes before attempting further movement
3. Check that heaters are at safe temperatures before proceeding
4. Verify machine state before resuming work

---

## Further Reading

- [Player module documentation](player)
- [Kill Button setup](killbutton)
- [Switch module](switch) - For configuring buttons and sensors
- [Supported G-codes](supported-g-codes)
- [Power Supply Control](power-supply-control) - PSU shutdown on halt
