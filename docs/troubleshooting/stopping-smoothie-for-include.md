---
permalink: /stopping-smoothie-for-include
---

# Stopping Smoothie

There are several different ways to stop Smoothie during operation, each with different behaviors and use cases.

Understanding these methods is important for safe operation and troubleshooting.

---

## Stop Methods Comparison

| Command | G-code | Movement | Heaters | File playing | Recoverable | Documentation |
| ------- | ------ | -------- | ------- | ------------ | ----------- | ------------- |
| `abort` | `M26` | Stops SDCARD print immediately | Not affected | Aborts | Position maintained, file must be restarted | [Player](player) |
| `suspend` | `M600` | Stops once queue is empty | Turned off (if option enabled) | Paused, can be resumed | Yes, with `resume` or `M601` | [Player](player) |
| Kill button | `M112` | Stops instantly (if button), waits for buffer (if host) | Turned off | Aborted | No, position lost, home required | [supported-g-codes](supported-g-codes) |
| Control-X | - | Stops instantly, works during streaming | Turned off | Aborted | No, position lost, home required | - |

---

## Detailed Method Descriptions

### Abort Command (`abort` / `M26`)

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

### Suspend Command (`suspend` / `M600`)

Suspends the execution of a file being played from SDCARD or being streamed from a host.

**Behavior:**
- Stops once the movement queue is empty
- All state is saved
- Heaters turned off by default (configurable)
- Jogging and extruding are allowed during suspension
- Can be resumed with `resume` or `M601`

**Use Case:** Mid-print filament change or filament out detection.

**Host Support:** Requires upstream support. Currently Pronterface and OctoPrint support it. Other hosts need to be manually paused.

**Recovery:** Yes, fully recoverable with position maintained.

**Documentation:** [Player module](player)

---

### Kill Button / M112

Emergency stop that instantly halts all operations.

**Behavior:**
- **If kill button pressed:** Stops instantly
- **If M112 issued from host:** Has to wait for the receive buffer to have room
- All heaters turned off
- File playing aborted
- Position is lost
- System enters Halt state until `M999` is sent

**Use Case:** Emergency situations requiring immediate stop.

**Recovery:** No, position is lost. Homing will be required.

**Documentation:** [Supported G-codes](supported-g-codes), [Kill Button](killbutton)

{::nomarkdown}
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Warning:</strong> Using the kill button or M112 will cause position loss. You must home all axes before continuing normal operation.
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
- System enters Halt state until `M999` or `$X` is sent

**Use Case:** Emergency stop from terminal/console when streaming G-code.

**Recovery:** No, position is lost. Homing will be required.

---

## Halt State

When the kill button is pressed (or there is a temperature fault, M112 is issued, a limit switch is hit, or other error), the system enters the **Halt state**.

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

1. **Issuing M999** from the host
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

- Use **suspend/resume** (`M600`/`M601`) for planned interruptions like filament changes
- Use **abort** when you need to stop quickly but keep heaters on

### For Emergencies

- Use the **kill button** or **Control-X** for immediate emergency stops
- Remember that position will be lost and homing will be required

### Recovery After Emergency Stop

1. Clear the Halt state with `M999`
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
