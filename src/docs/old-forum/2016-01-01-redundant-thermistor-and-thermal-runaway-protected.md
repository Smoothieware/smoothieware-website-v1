# Redundant thermistor and thermal runaway protected

*Original post date: 2016-01-01*

---

# Forum Thread: Redundant Thermistor and Thermal Runaway Protected

## Post by arthur (2015-05-07 22:01)
**Suggestion:**  
Add a timer in `TemperatureControl.cpp` to detect prolonged heater operation at maximum PWM. This would trigger a shutdown if the heater remains at max power for too long, preventing thermal runaway.

---

## Post by mikes3ds (2015-05-07 22:38)
**Code Proposal:**  
Modify `TemperatureControl.h` and `TemperatureControl.cpp` as follows:

### `TemperatureControl.h`
```cpp
Timer TimerA; // Or use tick count
bool startedMaxPwmTimer;

### `TemperatureControl.cpp`
```cpp
if (this->o >= heater_pin.max_pwm()) {
    this->o = heater_pin.max_pwm();
    if (!startedMaxPwmTimer) {
        TimerA.Reset();
        TimerA.Start();
        startedMaxPwmTimer = true;
    } else {
        if (TimerA > MaxTime) {
            KillAll();
        }
    }
} else if (this->o < 0) {
    this->o = 0;
    startedMaxPwmTimer = false;
    TimerA.Stop();
} else if (this->windup) {
    this->iTerm = new_I; // Only update I term when output is not saturated.
    startedMaxPwmTimer = false;
    TimerA.Stop();
}

---

## Post by mikes3ds (2015-05-07 22:01)
**Additional Notes:**  
- The code checks if the heater output (`this->o`) reaches the maximum PWM value.
- A timer (`TimerA`) is reset and started when the heater is at max power.
- If the timer exceeds `MaxTime` (a predefined threshold), `KillAll()` is called to shut down the system.
- The timer is stopped and the flag `startedMaxPwmTimer` is reset when the heater output drops below max or enters windup mode.

---

## Post by mikes3ds (2015-05-07 22:38)
**Sudo Code Example:**  
```cpp
// Pseudocode for timer logic
if (heater_output == max_pwm) {
    start_timer();
    if (timer_exceeds_threshold()) {
        trigger_shutdown();
    }
} else {
    reset_timer();
}

**Purpose:**  
This logic ensures that if the heater remains at maximum power for an extended period (indicating a potential failure in temperature regulation), the system will shut down to prevent overheating.


---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150722000118/http://smoothieware.org/forum/t-1069215/redundant-thermistor-and-thermal-runaway-protected)*
