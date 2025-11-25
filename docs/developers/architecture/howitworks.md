---
permalink: /howitworks
---

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>Version Note</strong><br>
  This page documents the Smoothieware firmware architecture. The core concepts apply to both V1 and V2, though implementation details and specific modules differ between versions.
</sl-alert>
{:/nomarkdown}

# Basics

{::nomarkdown}
<a href="/images/board.png">
  <img src="/images/board.png" alt="Smoothieboard" style="width: 240px; float: right; margin: 0 0 1rem 1rem;"/>
</a>
{:/nomarkdown}

**In its most basic form, the job of Smoothie is to receive [G-code](http://en.wikipedia.org/wiki/G-code) commands and translate those into actual movement for a robot.**

{::nomarkdown}
<review id="howitworks:basics-architecture">
<proposal>
{:/nomarkdown}

This is done in several steps:

<versioned>
<v1>
{:/nomarkdown}

- The [SerialConsole](https://github.com/arthurwolf/Smoothie/blob/master/src/modules/communication/SerialConsole.cpp) module reads the serial port (UART or USB), and when a line is recognized, it forwards it to all modules that requested it by triggering the `on_console_line_received` event.

- The [GcodeDispatch](https://github.com/arthurwolf/Smoothie/blob/master/src/modules/communication/GcodeDispatch.cpp) module is one of those: it registered for the `on_console_line_received` event and is thus called every time the SerialConsole module triggers it.
It takes the new line, and if it recognizes a G-code command, transforms it into a new [Gcode](https://github.com/arthurwolf/Smoothie/blob/master/src/modules/communication/utils/Gcode.cpp) object and triggers the `on_gcode_received` event.

- The [Robot](https://github.com/arthurwolf/Smoothie/blob/master/src/modules/robot/Robot.cpp) module listens to this event and is then triggered.
It uses math to cut the requested move into line segments and passes those to the [Planner](https://github.com/arthurwolf/Smoothie/blob/master/src/modules/robot/Planner.cpp) module.
There they are transformed into [Block](https://github.com/arthurwolf/Smoothie/blob/master/src/modules/robot/Block.cpp) objects, containing speed, direction, and acceleration information.
The acceleration profile for the Planner's queue (list of upcoming Blocks) is re-computed to take the new Block into account, and finally, that Block is added to the queue.

- The [Stepper](https://github.com/arthurwolf/Smoothie/blob/master/src/modules/robot/Stepper.cpp) module itself enters the game whenever there is a Block in the Planner's queue: it is composed of two loops:
  - The stepping loop, which pops new blocks if necessary, and actually sends the step and direction command to the stepper motor drivers to move the motors.
  - The acceleration loop, which updates the stepping loop's speed depending on the acceleration profile for this block.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

The V2 firmware follows a similar conceptual flow: serial input is parsed into G-code commands, which are processed by a robot/planner module to generate motion blocks, and those blocks are executed by a stepping/motion control module. However, the specific module architecture and implementation details differ from V1. Refer to the V2 firmware repository for current module documentation.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}
</proposal>
<original>
{:/nomarkdown}

This is done in several steps:

- The [SerialConsole](https://github.com/arthurwolf/Smoothie/blob/master/src/modules/communication/SerialConsole.cpp) module reads the serial port (UART or USB), and when a line is recognized, it forwards it to all modules that requested it by triggering the `on_console_line_received` event.

- The [GcodeDispatch](https://github.com/arthurwolf/Smoothie/blob/master/src/modules/communication/GcodeDispatch.cpp) module is one of those: it registered for the `on_console_line_received` event and is thus called every time the SerialConsole module triggers it.
It takes the new line, and if it recognizes a G-code command, transforms it into a new [Gcode](https://github.com/arthurwolf/Smoothie/blob/master/src/modules/communication/utils/Gcode.cpp) object and triggers the `on_gcode_received` event.

- The [Robot](https://github.com/arthurwolf/Smoothie/blob/master/src/modules/robot/Robot.cpp) module listens to this event and is then triggered.
It uses math to cut the requested move into line segments and passes those to the [Planner](https://github.com/arthurwolf/Smoothie/blob/master/src/modules/robot/Planner.cpp) module.
There they are transformed into [Block](https://github.com/arthurwolf/Smoothie/blob/master/src/modules/robot/Block.cpp) objects, containing speed, direction, and acceleration information.
The acceleration profile for the Planner's queue (list of upcoming Blocks) is re-computed to take the new Block into account, and finally, that Block is added to the queue.

- The [Stepper](https://github.com/arthurwolf/Smoothie/blob/master/src/modules/robot/Stepper.cpp) module itself enters the game whenever there is a Block in the Planner's queue: it is composed of two loops:
  - The stepping loop, which pops new blocks if necessary, and actually sends the step and direction command to the stepper motor drivers to move the motors.
  - The acceleration loop, which updates the stepping loop's speed depending on the acceleration profile for this block.

{::nomarkdown}
</original>
{:/nomarkdown}
</review>
{:/nomarkdown}

Now let's get into more detail for each part:

## GcodeDispatch

{::nomarkdown}
<a href="/images/binary-code.png">
  <img src="/images/binary-code.png" alt="GcodeDispatch" style="width: 240px; float: right; margin: 0 0 1rem 1rem;"/>
</a>
{:/nomarkdown}

{::nomarkdown}
<review id="howitworks:gcode-dispatch">
<proposal>
{:/nomarkdown}

<versioned>
<v1>
{:/nomarkdown}

It is interesting to note that here we are interested only in G-code commands, but the `on_console_line_received` event actually gets called with any new line, to any module that registered for it (see [Kernel](https://github.com/arthurwolf/Smoothie/blob/master/src/libs/Kernel.cpp), [Module](https://github.com/arthurwolf/Smoothie/blob/master/src/libs/Module.cpp) and the [Module example](moduleexample)).

This can, for example, be used to handle [command-line-like](console-commands) instructions.

The [Gcode](https://github.com/arthurwolf/Smoothie/blob/master/src/modules/communication/utils/Gcode.cpp) object is just a wrapper around the actual string; it provides helper functions to retrieve values from that string.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

In V2, the G-code dispatch system follows a similar pattern: serial input is parsed and forwarded to relevant modules through an event-based system. The specific module names and code structure differ, but the core concept of parsing raw input and dispatching commands to handlers remains the same.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}
</proposal>
<original>
{:/nomarkdown}

It is interesting to note that here we are interested only in G-code commands, but the `on_console_line_received` event actually gets called with any new line, to any module that registered for it (see [Kernel](https://github.com/arthurwolf/Smoothie/blob/master/src/libs/Kernel.cpp), [Module](https://github.com/arthurwolf/Smoothie/blob/master/src/libs/Module.cpp) and the [Module example](moduleexample)).

This can, for example, be used to handle [command-line-like](console-commands) instructions.

The [Gcode](https://github.com/arthurwolf/Smoothie/blob/master/src/modules/communication/utils/Gcode.cpp) object is just a wrapper around the actual string; it provides helper functions to retrieve values from that string.

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

## Robot

{::nomarkdown}
<a href="/images/howitworks6249350092_9ddb8439d8_z.jpg">
  <img src="/images/howitworks6249350092_9ddb8439d8_z.jpg" alt="Robot" style="min-width: 640px; min-height: 400px; width: 100%; max-width: 800px; height: auto; display: block; margin: 2rem auto;"/>
</a>
{:/nomarkdown}

{::nomarkdown}
<review id="howitworks:robot">
<proposal>
{:/nomarkdown}

<versioned>
<v1>
{:/nomarkdown}

Again here we are interested only in movement G-codes, but any module that registers for the `on_gcode_received` event will be called with that G-code and gets a chance to use it.

Even this module (Robot) actually recognizes not only movement G-codes but also mode-changing G-codes (absolute/relative, inch/millimeter, etc.).

The Robot also converts the Cartesian coordinates (in the machine coordinate system) into actuator-specific coordinates; this transform is done in the arm solution, which takes machine coordinates and spits out actuator coordinates.

In the case of a simple Cartesian mechanical system, this is a one-to-one transform.

The segment cutting part is a port of grbl, more specifically, [chamnit's ameliorations to edge](https://github.com/chamnit/grbl).

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

In V2, the robot/planner module similarly handles movement G-codes and coordinates transformation. The core responsibilities remain the same: converting Cartesian coordinates to actuator-specific coordinates through an arm solution, and breaking moves into segments for motion planning. The specific implementation and API may differ from V1.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}
</proposal>
<original>
{:/nomarkdown}

Again here we are interested only in movement G-codes, but any module that registers for the `on_gcode_received` event will be called with that G-code and gets a chance to use it.

Even this module (Robot) actually recognizes not only movement G-codes but also mode-changing G-codes (absolute/relative, inch/millimeter, etc.).

The Robot also converts the Cartesian coordinates (in the machine coordinate system) into actuator-specific coordinates; this transform is done in the arm solution, which takes machine coordinates and spits out actuator coordinates.

In the case of a simple Cartesian mechanical system, this is a one-to-one transform.

The segment cutting part is a port of grbl, more specifically, [chamnit's ameliorations to edge](https://github.com/chamnit/grbl).

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

## Planner

{::nomarkdown}
<a href="/images/circuit.png">
  <img src="/images/circuit.png" alt="Planner" style="width: 240px; float: right; margin: 0 0 1rem 1rem;"/>
</a>
{:/nomarkdown}

{::nomarkdown}
<review id="howitworks:planner">
<proposal>
{:/nomarkdown}

<versioned>
<v1>
{:/nomarkdown}

Contrary to previous module-to-module transfer, we did not here use an event call/event handler.

This is because the new line segment the Planner receives really only matters for the Planner, so an event call here would be superfluous.

However, if you have a use case where plugging in here would make sense, [just ask](mailto:wolf.arthur@gmail.com).

Again here, the math-heavy acceleration curves planning part is a port of grbl, more specifically, [chamnit's ameliorations to edge](https://github.com/chamnit/grbl).

At the end here, we add the new Block to the queue.

Now the goal of this is for the Stepper to use this Block and move the stepper motors according to it.

But we don't need to call the Stepper to tell it to step this Block: it is probably busy stepping a Block we previously added to the queue.

We just push the Block to the top of the queue, and it will be executed by the Stepper when it reaches the bottom of the queue because all of the previous Blocks have been executed.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

In V2, the planner performs similar functions: it receives line segments, computes acceleration profiles, and manages a queue of blocks for the motion control system. The underlying mathematics for motion planning is comparable, though the specific implementation details and queue management may differ. Direct module communication is handled through the V2 firmware's architecture.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}
</proposal>
<original>
{:/nomarkdown}

Contrary to previous module-to-module transfer, we did not here use an event call/event handler.

This is because the new line segment the Planner receives really only matters for the Planner, so an event call here would be superfluous.

However, if you have a use case where plugging in here would make sense, [just ask](mailto:wolf.arthur@gmail.com).

Again here, the math-heavy acceleration curves planning part is a port of grbl, more specifically, [chamnit's ameliorations to edge](https://github.com/chamnit/grbl).

At the end here, we add the new Block to the queue.

Now the goal of this is for the Stepper to use this Block and move the stepper motors according to it.

But we don't need to call the Stepper to tell it to step this Block: it is probably busy stepping a Block we previously added to the queue.

We just push the Block to the top of the queue, and it will be executed by the Stepper when it reaches the bottom of the queue because all of the previous Blocks have been executed.

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

## Stepper

{::nomarkdown}
<a href="/images/coding.png">
  <img src="/images/coding.png" alt="Stepper" style="width: 240px; float: right; margin: 0 0 1rem 1rem;"/>
</a>
{:/nomarkdown}

{::nomarkdown}
<review id="howitworks:stepper">
<proposal>
{:/nomarkdown}

<versioned>
<v1>
{:/nomarkdown}

So the first, most important loop in the Stepper module is the stepping loop.

It is the one that actually makes the stepper motor move.

It also, if necessary, gets a new Block from the Planner's queue when it has finished stepping the previous one.

This is the very speed-critical part of Smoothie: everything is done using integer math, and the speed here determines the maximum speed at which the robot can move.

At the time of this writing, Smoothie is comfortable with stepping speeds of up to 110kHz, which is much higher than what most uses require.

The other loop is the acceleration loop.

The work of the Planner is done for this loop: depending on where we are inside the current Block/line segment, it raises or lowers the current stepping speed (the speed of the previous loop), thus accelerating or decelerating.

If any of this is not clear enough or if you need precisions, please don't hesitate to [contact](mailto:wolf.arthur@gmail.com).

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

In V2, the motion control system similarly manages step generation for the stepper motor drivers. The core concepts remain: a timing loop that generates step/direction signals for each motor, and an acceleration loop that adjusts stepping speed based on the motion profile.

With the more powerful STM32H745 processor, V2 can achieve higher stepping rates and more complex motion profiles compared to V1. The specific implementation details, interrupt handling, and hardware interfaces differ from V1 to take advantage of the newer hardware capabilities.

Refer to the V2 firmware documentation for specific stepping rate capabilities and implementation details.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}
</proposal>
<original>
{:/nomarkdown}

So the first, most important loop in the Stepper module is the stepping loop.

It is the one that actually makes the stepper motor move.

It also, if necessary, gets a new Block from the Planner's queue when it has finished stepping the previous one.

This is the very speed-critical part of Smoothie: everything is done using integer math, and the speed here determines the maximum speed at which the robot can move.

At the time of this writing, Smoothie is comfortable with stepping speeds of up to 110kHz, which is much higher than what most uses require.

The other loop is the acceleration loop.

The work of the Planner is done for this loop: depending on where we are inside the current Block/line segment, it raises or lowers the current stepping speed (the speed of the previous loop), thus accelerating or decelerating.

If any of this is not clear enough or if you need precisions, please don't hesitate to [contact](mailto:wolf.arthur@gmail.com).

{::nomarkdown}
</original>
</review>
{:/nomarkdown}
