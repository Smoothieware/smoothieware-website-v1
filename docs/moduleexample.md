
# The aim of this is to provide a step-by-step overview of how to create a basic module for use with Smoothie.
The example here will be a laser control module.

## What is a module

In Smoothie, everything is a module. A **module** is essentially a piece of code (an object) that connects to the rest of the code only through event calls and event handlers.
The core of Smoothie (serial communication, motion planning, actual stepping) is divided into modules. And then **you** can write modules for additional tasks, like controlling a laser, 3D printing, or whatever cool idea you have.
The main idea is to be able to add these additional functionalities in the simplest way possible, without having to edit the core, just connect to/call events.

## About this example

For the example, we'll create a simple module that turns the laser on and off depending on received G codes, and PWM adjusts the laser power to the robot's speed so that it plays nicely with look-ahead acceleration management. This should actually be sufficient to do basic laser cutting.
Also, there'll be a lot of explaining here, but if you landed on this page, you will probably understand everything just by looking at the code; it's not that complicated.
Good examples also are the core modules, in `/modules/communication/` and `/modules/robot/`.

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

## About the Kernel

The kernel (`libs/Kernel.h`) is basically what you talk to when registering for an event, calling an event, and what calls you (the Module) when you have registered for an event, and another Module calls this event.

Your module must be added to it like this, in `main.cpp`:

```cpp
// Add Laser module to Kernel
Laser laser = Laser();
kernel->add_module(&laser);
```

Once the module is added, `on_module_loaded()` is called so that you can register for events.

## On the two G code events

So in our example, we want to turn the laser on/off depending on the G codes we receive. But because of the acceleration management (G code look-ahead, see the Planner class), received G codes are not executed when they are received. They are pushed in a queue, and then popped out when the previous movement has finished executing.
So there are two events: `on_gcode_received` and `on_gcode_execute`. The one that's of interest to us now is `on_gcode_execute`, which is called right before the movement corresponding to that G code line is executed.

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

You can find more information about the different events in [ListOfEvents](listofevents.md).

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

That's it, now the Laser pin will be LOW during G0 moves, and HIGH during G1, G2, and G3 moves.
But that's not enough. Because we use acceleration, the speed is not constant. And thus if the power of the laser stays constant, that power will be too much when accelerating and decelerating.
So we need to have a laser power that is proportional to the instant speed of the robot.
That's the kind of thing the `on_speed_change` event is for.

## Conclusion

As you can see here, we have added functionality to Smoothie without having to modify the core, which is the whole point of the modular design.
