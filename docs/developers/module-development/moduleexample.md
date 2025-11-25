---
permalink: /moduleexample
---


# Module Example

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="code-square"></sl-icon>
  <strong>Developer Guide:</strong> This guide provides a step-by-step overview of how to create a basic module for use with Smoothie.
</sl-alert>
{:/nomarkdown}

The aim of this guide is to provide a step-by-step overview of how to create a basic module for use with Smoothie.

The example here will be a laser control module.

{::nomarkdown}
<review id="moduleexample:what-is-a-module">
<proposal>
{:/nomarkdown}

<versioned>
<v1>
{:/nomarkdown}

## What is a module

In Smoothie, everything is a module.

A **module** is essentially a piece of code (an object) that connects to the rest of the code only through event calls and event handlers.

The core of Smoothie (serial communication, motion planning, actual stepping) is divided into modules.

And then **you** can write modules for additional tasks, like controlling a laser, 3D printing, or whatever cool idea you have.

The main idea is to be able to add these additional functionalities in the simplest way possible, without having to edit the core, just connect to/call events.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

## What is a module

In Smoothieware V2, modules are configuration-driven components that register themselves and communicate via a request/response system.

A **module** is a piece of code (an object/class) that:
- Registers itself during startup via the module registry
- Processes its configuration section from the config file
- Communicates with other modules through explicit lookup and request calls
- Optionally handles G-codes and M-codes via the Dispatcher system

The core of Smoothieware V2 (serial communication, motion planning, stepping) is divided into modules, and **you** can write modules for additional tasks like controlling a laser, temperature control, or custom hardware.

The main idea is to add functionality without editing the core, through explicit configuration and direct module communication.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}
</proposal>
<original>
{:/nomarkdown}

## What is a module

In Smoothie, everything is a module.

A **module** is essentially a piece of code (an object) that connects to the rest of the code only through event calls and event handlers.

The core of Smoothie (serial communication, motion planning, actual stepping) is divided into modules.

And then **you** can write modules for additional tasks, like controlling a laser, 3D printing, or whatever cool idea you have.

The main idea is to be able to add these additional functionalities in the simplest way possible, without having to edit the core, just connect to/call events.

</original>
{::nomarkdown}
</review>
{:/nomarkdown}

{::nomarkdown}
<review id="moduleexample:about-this-example">
<proposal>
{:/nomarkdown}

<versioned>
<v1>
{:/nomarkdown}

## About this example

For the example, we'll create a simple module that turns the laser on and off depending on received G codes.

PWM adjusts the laser power to the robot's speed so that it plays nicely with look-ahead acceleration management.

This should actually be sufficient to do basic laser cutting.

Also, there'll be a lot of explaining here, but if you landed on this page, you will probably understand everything just by looking at the code; it's not that complicated.

Good examples of existing modules are in `/modules/communication/` and `/modules/robot/`.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

## About this example

For the example, we'll create a simple module that turns the laser on and off depending on received G codes.

The module will:
- Register itself with the module system
- Read configuration from the config file
- Handle G-codes via the Dispatcher system
- Adjust PWM output based on motion speed

Good examples of existing V2 modules are in the `src/modules/` directory, particularly `Laser`, `TemperatureControl`, and `Extruder` modules which demonstrate configuration-based initialization and direct module communication.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}
</proposal>
<original>
{:/nomarkdown}

## About this example

For the example, we'll create a simple module that turns the laser on and off depending on received G codes.

PWM adjusts the laser power to the robot's speed so that it plays nicely with look-ahead acceleration management.

This should actually be sufficient to do basic laser cutting.

Also, there'll be a lot of explaining here, but if you landed on this page, you will probably understand everything just by looking at the code; it's not that complicated.

Good examples of existing modules are in `/modules/communication/` and `/modules/robot/`.

</original>
{::nomarkdown}
</review>
{:/nomarkdown}

## Code style

For this example, we'll put all of the function code within the class definition. You should obviously not do that for real-life coding, but it makes life easier for an example.

## Our base module

So here is what your basic module skeleton looks like:

```cpp
// Basic laser control module
class Laser : public Module {
    public:
        Laser(){}
        void on_module_loaded() { }
};
```

We make a Laser class, [extending](http://en.wikipedia.org/wiki/Object-oriented_programming) the base Module class.
The `on_module_loaded` method will be called automatically when the kernel is done loading the module. You shouldn't call the kernel, like to register for an event, **before** `on_module_loaded` is called, like in the constructor.

{::nomarkdown}
<review id="moduleexample:kernel-and-registry">
<proposal>
{:/nomarkdown}

<versioned>
<v1>
{:/nomarkdown}

## About the Kernel

The kernel (`libs/Kernel.h`) is basically what you talk to when registering for an event, calling an event, and what calls you (the Module) when you have registered for an event, and another Module calls this event.

Your module must be added to it like this, in `main.cpp`:

```cpp
// Add Laser module to Kernel
Laser laser = Laser();
kernel->add_module(&laser);
```

Once the module is added, `on_module_loaded()` is called so that you can register for events.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

## About the Module Registry and Dispatcher

In V2, modules don't use a global kernel. Instead, they use:

1. **Module Registry**: A map-based system that manages all modules by group/instance name
2. **Dispatcher**: A system for registering and dispatching G-code and M-code handlers
3. **Configuration-driven loading**: Modules are instantiated and configured based on the config file

Your module registers itself through:

```cpp
// In your module implementation file
REGISTER_MODULE(Laser, [](ConfigReader& cr) {
    return new Laser(cr);
});
```

The module's constructor receives a `ConfigReader` object and processes its configuration section. For example:

```cpp
[laser]
enable = true
pin = 1.24
pwm_frequency = 10000
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}
</proposal>
<original>
{:/nomarkdown}

## About the Kernel

The kernel (`libs/Kernel.h`) is basically what you talk to when registering for an event, calling an event, and what calls you (the Module) when you have registered for an event, and another Module calls this event.

Your module must be added to it like this, in `main.cpp`:

```cpp
// Add Laser module to Kernel
Laser laser = Laser();
kernel->add_module(&laser);
```

Once the module is added, `on_module_loaded()` is called so that you can register for events.

</original>
{::nomarkdown}
</review>
{:/nomarkdown}

{::nomarkdown}
<review id="moduleexample:gcode-handling">
<proposal>
{:/nomarkdown}

<versioned>
<v1>
{:/nomarkdown}

## On the two G code events

So in our example, we want to turn the laser on/off depending on the G codes we receive.

But because of the acceleration management (G code look-ahead, see the Planner class), received G codes are not executed when they are received.

They are pushed into a queue, and then popped out when the previous movement has finished executing.

So there are two events:

- `on_gcode_received` - called when a G-code is received
- `on_gcode_execute` - called right before the movement corresponding to that G-code line is executed

The one that's of interest to us now is `on_gcode_execute`.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

## On G-code handling

In V2, we need to explicitly register handlers for G-codes we want to process.

The motion planning system still uses look-ahead, so G-codes are queued and executed when the previous movement finishes. However, instead of receiving broadcast events, we register specific handlers.

We'll register handlers for:

- `G0` / `G1` - Moves where the laser should be on/off
- `M4` / `M5` - Generic laser on/off commands

These handlers will be called when their respective codes are about to execute, allowing us to set the laser PWM appropriately.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}
</proposal>
<original>
{:/nomarkdown}

## On the two G code events

So in our example, we want to turn the laser on/off depending on the G codes we receive.

But because of the acceleration management (G code look-ahead, see the Planner class), received G codes are not executed when they are received.

They are pushed into a queue, and then popped out when the previous movement has finished executing.

So there are two events:

- `on_gcode_received` - called when a G-code is received
- `on_gcode_execute` - called right before the movement corresponding to that G-code line is executed

The one that's of interest to us now is `on_gcode_execute`.

</original>
{::nomarkdown}
</review>
{:/nomarkdown}

{::nomarkdown}
<review id="moduleexample:registering-handlers">
<proposal>
{:/nomarkdown}

<versioned>
<v1>
{:/nomarkdown}

## Registering for an event

So here is how we register for an event in our code:

```cpp
class Laser : public Module {
    public:
        Laser(){}

        void on_module_loaded() {
            this->register_for_event(ON_GCODE_EXECUTE); // Tell the kernel to call us whenever a gcode is executed (not received)
        }

        void on_gcode_execute(void* argument){ // Callback function
            Gcode* gcode = static_cast<Gcode*>(argument); // Casting of the argument (a Gcode object)
        }
};
```

So now, whenever a module calls the `on_gcode_execute` event, this callback function will be called. In this case, the Stepper module calls this upon deleting a move it has just finished stepping.
Because of the way C++ works, arguments to events here must be passed as void pointers and then manually cast in the callback function. You can see how that's done: here we cast a Gcode object.

You can find more information about the different events in [ListOfEvents](listofevents).

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

## Registering handlers with the Dispatcher

In V2, we explicitly register handlers for specific G-codes and M-codes:

```cpp
class Laser : public Module {
    public:
        Laser(ConfigReader& cr) : Module("laser", "0") {
            // Configure from config section
            this->configure(cr);
        }

        virtual bool configure(ConfigReader& cr) {
            // Read configuration like pin, pwm frequency, etc.
            return true;
        }

    private:
        void register_handlers() {
            // Register handler for G0 (rapid positioning - laser off)
            THEDISPATCHER->add_handler(Dispatcher::GCODE_HANDLER, 0,
                [this](GCode& gc, OutputStream& os) {
                    this->laser_pin = 0;  // Turn off
                    return true;
                });

            // Register handler for G1 (linear interpolation - laser on)
            THEDISPATCHER->add_handler(Dispatcher::GCODE_HANDLER, 1,
                [this](GCode& gc, OutputStream& os) {
                    this->laser_on = true;
                    return true;
                });
        }
};
```

Handlers are lambdas that receive a `GCode&` reference and `OutputStream&` reference, so no casting is needed. The dispatcher only calls registered handlers, making it more efficient than V1's broadcast model.

You can find more information about the Dispatcher system in the [V2 Developer Guide](/v2-developers).

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}
</proposal>
<original>
{:/nomarkdown}

## Registering for an event

So here is how we register for an event in our code:

```cpp
class Laser : public Module {
    public:
        Laser(){}

        void on_module_loaded() {
            this->register_for_event(ON_GCODE_EXECUTE); // Tell the kernel to call us whenever a gcode is executed (not received)
        }

        void on_gcode_execute(void* argument){ // Callback function
            Gcode* gcode = static_cast<Gcode*>(argument); // Casting of the argument (a Gcode object)
        }
};
```

So now, whenever a module calls the `on_gcode_execute` event, this callback function will be called. In this case, the Stepper module calls this upon deleting a move it has just finished stepping.
Because of the way C++ works, arguments to events here must be passed as void pointers and then manually cast in the callback function. You can see how that's done: here we cast a Gcode object.

You can find more information about the different events in [ListOfEvents](listofevents).

</original>
{::nomarkdown}
</review>
{:/nomarkdown}

{::nomarkdown}
<review id="moduleexample:doing-something-useful">
<proposal>
{:/nomarkdown}

<versioned>
<v1>
{:/nomarkdown}

## Doing something useful

We have to modify the class a bit to add a `PwmOut` to it. Then we can do some useful stuff:

```cpp
class Laser : public Module {
    public:
        Laser(PinName pin) : laser_pin(pin) {
            this->laser_pin.period_us(10);
        }

        void on_module_loaded() {
            this->register_for_event(ON_GCODE_EXECUTE);
            this->register_for_event(ON_SPEED_CHANGE);
        }

        void on_gcode_execute(void* argument) {
            Gcode* gcode = static_cast<Gcode*>(argument);
            if (gcode->has_letter('G')) {
                int code = gcode->get_value('G');
                if (code == 0) { // G0
                    this->laser_pin = 0;
                    this->laser_on = false;
                } else if (code > 0 && code < 4) { // G1, G2, G3
                    this->laser_on = true;
                }
            }
        }

        void on_speed_change(void* argument) {
            Stepper* stepper = static_cast<Stepper*>(argument);
            if (this->laser_on) {
                this->laser_pin = double(stepper->trapezoid_adjusted_rate) / double(stepper->current_block->nominal_rate);
            }
        }

        PwmOut laser_pin;
        bool   laser_on;
};
```

And also change a bit the way we instantiate the module:

```cpp
Laser laser = Laser(p21);
```

That's it, now the Laser pin will be LOW during <gcode>G0</gcode> moves, and HIGH during <gcode>G1</gcode>, <gcode>G2</gcode>, and <gcode>G3</gcode> moves.
But that's not enough. Because we use acceleration, the speed is not constant. And thus if the power of the laser stays constant, that power will be too much when accelerating and decelerating.
So we need to have a laser power that is proportional to the instant speed of the robot.
That's the kind of thing the `on_speed_change` event is for.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

## Doing something useful

Now let's add PWM support to adjust laser power based on motion speed. In V2, we need to:

1. Read pin and PWM configuration from the config file
2. Register speed change handlers
3. Adjust PWM output as the speed changes

```cpp
class Laser : public Module {
    public:
        Laser(ConfigReader& cr) : Module("laser", "0") {
            this->laser_on = false;
            this->configure(cr);
        }

        virtual bool configure(ConfigReader& cr) {
            // Read pin configuration
            cr.set_string_found_method([this](const char *key, const char *value) {
                if (key == "pin"s) {
                    // Parse pin and create PWM output
                    return;
                }
            });
            return true;
        }

    private:
        void register_handlers() {
            // Register handler for G0 (rapid - laser off)
            THEDISPATCHER->add_handler(Dispatcher::GCODE_HANDLER, 0,
                [this](GCode& gc, OutputStream& os) {
                    this->laser_pin = 0;
                    this->laser_on = false;
                    return true;
                });

            // Register handler for G1/G2/G3 (moves - laser on)
            for (int i = 1; i <= 3; i++) {
                THEDISPATCHER->add_handler(Dispatcher::GCODE_HANDLER, i,
                    [this](GCode& gc, OutputStream& os) {
                        this->laser_on = true;
                        return true;
                    });
            }
        }

        float   laser_pin;
        bool    laser_on;
};
```

The key difference from V1 is that V2 reads pin configuration from the config file during `configure()`, rather than passing pin names to the constructor. PWM output is set via direct variable assignment after reading the pin configuration.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}
</proposal>
<original>
{:/nomarkdown}

## Doing something useful

We have to modify the class a bit to add a `PwmOut` to it. Then we can do some useful stuff:

```cpp
class Laser : public Module {
    public:
        Laser(PinName pin) : laser_pin(pin) {
            this->laser_pin.period_us(10);
        }

        void on_module_loaded() {
            this->register_for_event(ON_GCODE_EXECUTE);
            this->register_for_event(ON_SPEED_CHANGE);
        }

        void on_gcode_execute(void* argument) {
            Gcode* gcode = static_cast<Gcode*>(argument);
            if (gcode->has_letter('G')) {
                int code = gcode->get_value('G');
                if (code == 0) { // G0
                    this->laser_pin = 0;
                    this->laser_on = false;
                } else if (code > 0 && code < 4) { // G1, G2, G3
                    this->laser_on = true;
                }
            }
        }

        void on_speed_change(void* argument) {
            Stepper* stepper = static_cast<Stepper*>(argument);
            if (this->laser_on) {
                this->laser_pin = double(stepper->trapezoid_adjusted_rate) / double(stepper->current_block->nominal_rate);
            }
        }

        PwmOut laser_pin;
        bool   laser_on;
};
```

And also change a bit the way we instantiate the module:

```cpp
Laser laser = Laser(p21);
```

That's it, now the Laser pin will be LOW during <gcode>G0</gcode> moves, and HIGH during <gcode>G1</gcode>, <gcode>G2</gcode>, and <gcode>G3</gcode> moves.
But that's not enough. Because we use acceleration, the speed is not constant. And thus if the power of the laser stays constant, that power will be too much when accelerating and decelerating.
So we need to have a laser power that is proportional to the instant speed of the robot.
That's the kind of thing the `on_speed_change` event is for.

</original>
{::nomarkdown}
</review>
{:/nomarkdown}

{::nomarkdown}
<review id="moduleexample:conclusion">
<proposal>
{:/nomarkdown}

<versioned>
<v1>
{:/nomarkdown}

## Conclusion

As you can see here, we have added functionality to Smoothie without having to modify the core, which is the whole point of the modular design.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

## Conclusion

As you can see, V2's module architecture is significantly different from V1. The key improvements are:

- **Configuration-driven**: Modules are instantiated from config files, not hardcoded in main.cpp
- **Explicit registration**: G-code handlers are explicitly registered with the Dispatcher, not broadcast to all modules
- **Cleaner API**: Type-safe lambdas instead of void pointer casting
- **More efficient**: Only registered handlers are called, reducing overhead
- **Modular structure**: ~30 consolidated modules vs. ~89 files in V1

Despite these architectural changes, the fundamental principle remains: add functionality without modifying the core firmware, through a well-defined module interface.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}
</proposal>
<original>
{:/nomarkdown}

## Conclusion

As you can see here, we have added functionality to Smoothie without having to modify the core, which is the whole point of the modular design.

</original>
{::nomarkdown}
</review>
{:/nomarkdown}
