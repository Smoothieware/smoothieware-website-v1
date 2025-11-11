---
permalink: /listofevents
---


# List of Events for Modules in Smoothie

This is a list of all the events that a Module can register for in Smoothie.

These events allow modules to respond to various system activities and communicate with each other.

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  This reference is essential for developers creating custom modules for Smoothie. Each event provides a hook into specific system activities.
</sl-alert>

<style>
.events-table-wrapper {
  width: 100%;
  overflow-x: auto;
}

.events-table-wrapper table {
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
}

.events-table-wrapper th,
.events-table-wrapper td {
  padding: 8px 12px;
  border: 1px solid #ddd;
  word-wrap: break-word;
  overflow-wrap: break-word;
  vertical-align: top;
}

.events-table-wrapper th {
  background-color: #f5f5f5;
  font-weight: bold;
}

.events-table-wrapper th:nth-child(1),
.events-table-wrapper td:nth-child(1) {
  width: 18%;
}

.events-table-wrapper th:nth-child(2),
.events-table-wrapper td:nth-child(2) {
  width: 20%;
}

.events-table-wrapper th:nth-child(3),
.events-table-wrapper td:nth-child(3) {
  width: 40%;
}

.events-table-wrapper th:nth-child(4),
.events-table-wrapper td:nth-child(4) {
  width: 22%;
}

.events-table-wrapper code {
  word-break: break-all;
}
</style>

<div class="events-table-wrapper">
{:/nomarkdown}

| Name                    | Called from                                         | Description                                                                                   | How to cast the argument                                                                                   |
|-------------------------|-----------------------------------------------------|-----------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| `ON_MAIN_LOOP`          | `/main.cpp`                                         | Called in a loop in main(), all G/M commands must be executed or issued in this event.        | no argument                                                                                                |
| `ON_CONSOLE_LINE_RECEIVED` | `/modules/communication/SerialConsole.cpp`       | Called every time a new line is received on the default Serial Console, with the line as a parameter | `SerialMessage new_message = *static_cast<SerialMessage*>(argument); string received = new_message.message;` |
| `ON_GCODE_RECEIVED`     | `/modules/communication/GcodeDispatch.cpp`          | Called every time a new G code is received, with the Gcode object as a parameter              | `Gcode* gcode = static_cast<Gcode*>(argument);`                                                            |
| `ON_IDLE`               | `/main.cpp`                                         | Called in the main loop immediately after `ON_MAIN_LOOP`. Used by modules for periodic tasks that need to run frequently. Many modules use this for polling or checking states that need quick response times. | no argument                                                                                                |
| `ON_SECOND_TICK`        | `/libs/SlowTicker.cpp`                              | Called once per second by the SlowTicker timer. Used for periodic tasks that don't need to run as frequently as `ON_IDLE`, such as temperature monitoring, status updates, watchdog checks, etc. | no argument                                                                                                |
| `ON_GET_PUBLIC_DATA`    | `/libs/PublicData.cpp`                              | Allow communication of data between modules. Module A can get data from B by providing checksums identifying Module B and the desired data. | `PublicDataRequest *pdr = static_cast<PublicDataRequest *>(argument)`                                      |
| `ON_SET_PUBLIC_DATA`    | `/libs/PublicData.cpp`                              | Allow communication of data between modules. Module A can set data from B by providing checksums identifying Module B and the data to set up. | `PublicDataRequest *pdr = static_cast<PublicDataRequest *>(argument);`                                     |
| `ON_HALT`               | Multiple sources: `/modules/communication/GcodeDispatch.cpp` (<mcode>M112</mcode> emergency stop), `/modules/tools/endstops/Endstops.cpp`, `/modules/tools/temperaturecontrol/TemperatureControl.cpp`, etc. | Called when the system enters or exits HALT state (emergency stop). This disables heaters and motors, ignores further incoming Gcode and clears block queue. Used by modules to safely shut down or restart after emergency conditions. | `if(argument == nullptr)` - entering halt state; `if(argument == (void*)1)` - clearing halt state (<mcode>M999</mcode> or unkill button) |
| `ON_ENABLE`             | `/modules/robot/Robot.cpp` (<mcode>M17</mcode>/<mcode>M18</mcode> commands), `/modules/robot/Conveyor.cpp` | Called to enable or disable stepper motors. Triggered by <mcode>M17</mcode> (enable), <mcode>M18</mcode> (disable), or when motion starts. Modules handling motor drivers should respond to this event. | `uint32_t bm = (uint32_t)argument;`<br>`if(bm == 0x01)` - enable all motors<br>`if(bm == 0 or nullptr)` - disable all motors<br>Otherwise: bit 0 = enable/disable, bits 1-6 = axis mask (bit1=X, bit2=Y, bit3=Z, bit4=A, bit5=B, bit6=C) |
| `NUMBER_OF_DEFINED_EVENTS` | n/a                                               | Only used to enumerate the events. Not an actual event that gets called.                     | no argument                                                                                                |

{::nomarkdown}
</div>
{:/nomarkdown}

## Event System Architecture

The Smoothie event system provides a publish-subscribe pattern for module communication. Events are defined in `/libs/Module.h` as an enumeration, and the kernel dispatches these events to all registered modules.

### How Events Work

1. **Event Definition**: All events are defined in the `_EVENT_ENUM` enumeration in `/libs/Module.h`
2. **Registration**: Modules register for specific events using `register_for_event(EVENT_NAME)` in their constructor or `on_module_loaded()` method
3. **Dispatching**: The kernel calls events via `THEKERNEL->call_event(EVENT_NAME, argument)`
4. **Handling**: Registered modules receive the event through their corresponding callback method (e.g., `on_idle()`, `on_gcode_received()`, etc.)

## Registering for Events

To register your module for an event, add the registration call in your module's constructor or `on_module_loaded()` method:

```cpp
void MyModule::on_module_loaded() {
    this->register_for_event(ON_GCODE_RECEIVED);
    this->register_for_event(ON_IDLE);
    this->register_for_event(ON_HALT);
}
```

Then implement the corresponding callback methods:

```cpp
void MyModule::on_gcode_received(void *argument) {
    Gcode *gcode = static_cast<Gcode*>(argument);
    if(gcode->has_m && gcode->m == 123) {
        // Handle M123 command
    }
}

void MyModule::on_idle(void *argument) {
    // Periodic tasks that need frequent execution
}

void MyModule::on_halt(void *argument) {
    if(argument == nullptr) {
        // System is entering halt state - disable outputs
    } else {
        // System is clearing halt state - can re-enable
    }
}
```

## Event Usage Examples

### Common Module Patterns

{::nomarkdown}
<strong>Temperature Control</strong> registers for:
- <code>ON_IDLE</code> - PID calculations and sensor reading
- <code>ON_SECOND_TICK</code> - Temperature reporting and monitoring
- <code>ON_HALT</code> - Emergency heater shutdown
- <code>ON_GCODE_RECEIVED</code> - <mcode>M104</mcode>/<mcode>M109</mcode> temperature commands

<strong>Endstops</strong> registers for:
- <code>ON_IDLE</code> - Checking endstop states during moves
- <code>ON_GCODE_RECEIVED</code> - <mcode>M119</mcode> endstop status, homing commands
{:/nomarkdown}

**Laser** registers for:
- `ON_HALT` - Immediately disable laser for safety
- `ON_GCODE_RECEIVED` - Laser power control commands

**Motor Driver Control** registers for:
- `ON_ENABLE` - Enable/disable motor drivers
- `ON_HALT` - Disable motors on emergency stop
- `ON_SECOND_TICK` - Monitor driver alarm conditions
- `ON_IDLE` - Process enable/disable events safely (SPI communication)

## Best Practices

{::nomarkdown}
<sl-alert variant="success" open>
  <sl-icon slot="icon" name="check-circle"></sl-icon>
  <strong>Do:</strong>
  <ul>
    <li>Keep event handlers short and fast - other modules are waiting</li>
    <li>Use ON_IDLE for time-critical polling operations</li>
    <li>Use ON_SECOND_TICK for less frequent periodic tasks</li>
    <li>Always check if system is halted before executing commands: <code>if(THEKERNEL->is_halted()) return;</code></li>
    <li>Register for ON_HALT if your module controls hardware that needs emergency shutdown</li>
  </ul>
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Don't:</strong>
  <ul>
    <li>Don't perform lengthy operations in event handlers - they block other modules</li>
    <li>Don't perform SPI or I2C transactions directly in interrupt-called events (use ON_IDLE to schedule)</li>
    <li>Don't ignore ON_HALT events if you control heaters, lasers, or other potentially dangerous hardware</li>
    <li>Don't assume event order - events may be called in any sequence</li>
  </ul>
</sl-alert>
{:/nomarkdown}

## Event Call Frequency

{::nomarkdown}
<style>
.frequency-table-wrapper {
  width: 100%;
  overflow-x: auto;
}

.frequency-table-wrapper table {
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
}

.frequency-table-wrapper th,
.frequency-table-wrapper td {
  padding: 8px 12px;
  border: 1px solid #ddd;
  word-wrap: break-word;
  overflow-wrap: break-word;
  vertical-align: top;
}

.frequency-table-wrapper th {
  background-color: #f5f5f5;
  font-weight: bold;
}

.frequency-table-wrapper th:nth-child(1),
.frequency-table-wrapper td:nth-child(1) {
  width: 40%;
}

.frequency-table-wrapper th:nth-child(2),
.frequency-table-wrapper td:nth-child(2) {
  width: 25%;
}

.frequency-table-wrapper th:nth-child(3),
.frequency-table-wrapper td:nth-child(3) {
  width: 35%;
}

.frequency-table-wrapper code {
  word-break: break-all;
}
</style>

<div class="frequency-table-wrapper">
{:/nomarkdown}

| Event | Frequency | Context |
|-------|-----------|---------|
| `ON_MAIN_LOOP` | ~1000+ Hz | Main loop |
| `ON_IDLE` | ~1000+ Hz | Main loop (immediately after ON_MAIN_LOOP) |
| `ON_CONSOLE_LINE_RECEIVED` | On demand | When serial data received |
| `ON_GCODE_RECEIVED` | On demand | When G-code parsed |
| `ON_SECOND_TICK` | 1 Hz | SlowTicker timer interrupt |
| `ON_HALT` | On demand | Emergency or error conditions |
| `ON_ENABLE` | On demand | Motor enable/disable commands |
| `ON_GET_PUBLIC_DATA` | On demand | Inter-module data requests |
| `ON_SET_PUBLIC_DATA` | On demand | Inter-module data updates |

{::nomarkdown}
</div>
{:/nomarkdown}

## See Also

- [Module Development Guide](/module-development-guide) - General module development
- [Module Example](/moduleexample) - Simple module example
- [Public Data System](/publicdataexample) - Using ON_GET_PUBLIC_DATA and ON_SET_PUBLIC_DATA
