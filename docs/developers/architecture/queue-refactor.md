---
permalink: /queue-refactor
---

# Queue Refactor Documentation

The goal of this document is to describe the current problem with the queue, propose a possible solution, and describe its implementation (called the queue refactor).

Writing a document is much less work than actually coding the refactor, and it allows discussion before implementation (avoiding having to do more refactors later).

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  If you are interested in helping with this refactor, please don't hesitate to join the discussion here, or contact me at <a href="mailto:wolf.arthur@gmail.com">wolf.arthur@gmail.com</a>.
</sl-alert>
{:/nomarkdown}

## The Problem with the Queue

So essentially, Smoothie was originally coded with no consideration whatsoever for RAM usage.

Yes. Sue me.

It ended up not too bad, but still very very far from optimal.

I guess we can start by explaining the problem the queue tries to solve before explaining the problem with the way we currently do it.

A pretty good explanation can be found here: [howitworks](howitworks).

### How It Now Works

In short, when we get say, a G-code for a movement, the following happens (oversimplified):

1. Robot interprets the G-code and makes a line from it
2. The line is added to the Queue (it is then called a "Block")
3. Acceleration/Deceleration parameters are re-computed for all of the Queue's Blocks

This last step is the main reason for the Queue: we have a list of Blocks "buffered" in advance, so we can "look into the future" and compute acceleration in an optimal fashion.

Now, we add Blocks at one end of the Queue, and another process (the Conveyor) pops Blocks from the other end of the Queue, and actually executes them.

The process is:

- Pop Block off the Queue
- Inform all modules that they should execute this Block
- Wait for all modules to have done what they want to do with this Block
- Go to first step

Now what this means for a module is there are two different processes/loops:

- The one in which you receive an instruction
- The one in which you have to execute an instruction

Instructions are not immediately executed when they are received, that's the main thing we are dealing with here.

Now this is for "Blocks", which describe movements of the Robot (XYZ movement).

But say you have a module that must emit a "beep" in response to the `G123` G-code.

It can't emit the "beep" when the G-code is received, as that would violate the order of execution: because G-codes are not executed when they are received, it is very possible (actually extremely likely) that the G-code received before `G123` has not been executed, and is still in the Queue, waiting to be executed.

Emitting the "beep" now would mean emitting it too early and out of order.

So what this module needs to do is wait for the right time to emit the "beep".

The way we do this is that when we receive a G-code, we attach the string for that G-code to the latest Block added to the queue.

Then when the Conveyor pops a Block from the queue, for each of the G-code strings attached to it, in order, an event is called, and all the modules (that want to) get a chance to recognize this G-code as something they care about, and act accordingly.

And because this event is called when the Block is popped off the Queue (about to be actually executed), the "beep" is now executed at the right time.

### What's Wrong with That?

Well, it's extremely wasteful.

Pretty much, **every** G-code is pushed onto the queue.

That's a huge waste of RAM.

For example, the G-code:

{::nomarkdown}
<gcode>G1</gcode> X23.43 Y12.34 E22.33
{:/nomarkdown}

is 23 bytes.

But because we already store the XYZ target coordinates in the Block, those are redundant.

And the E (Extruder) coordinates can be stored as an offset from the current position, in steps, which fits fine in 2 bytes.

Meaning here we are wasting 21 bytes.

There is also overhead from storing a string and from having a vector attached to the block and storing the string as a G-code object, all of which also take additional RAM.

And then there is the cost in computing power of having to pass the G-code to each module for them to see if they are interested in it, which wastes a lot of time, at moments where we shouldn't be wasting any.

Also because we use std::vector, new, std::string, etc to store all of this, and pop/push it on/off the queue, it adds lots of complexity to keep it sane, and can potentially add danger.

All of these are good reasons to do things differently.

For those interested in more details on how things work now, you can look at the [Block](https://github.com/Smoothieware/Smoothieware/blob/edge/src/modules/robot/Block.h), [Conveyor](https://github.com/Smoothieware/Smoothieware/blob/edge/src/modules/robot/Conveyor.cpp), and [Queue](https://github.com/Smoothieware/Smoothieware/blob/edge/src/modules/robot/Conveyor.h#L51).

## A Proposed Solution

So the idea then is to store things in a much more compact fashion.

We do not store G-code strings anymore.

Modules decide exactly what information they want to store in the Queue, and only that is stored.

Then when the time comes, they get that information back.

### Advantages

This has so many advantages:

- **Much lower RAM usage**
- **Can be about as simple to the coder as we do now**
- **Much faster**
- **Fixed-size (in bytes not Blocks) Queue for all the data** (including non-movement data), for easier RAM management

Here is the proposed format for the new Blocks (now called "Actions" to differentiate them from the movement Blocks (which become just another kind of Action)):

- 1 byte: Owner module ID
- 1 byte: Length in bytes `n`
- `n` bytes: Data

The queue is composed of a series of those Actions.

When a module tries to add an Action to the Queue, and the Queue does not have enough room, we wait until there is room (similar to what the current movement queue does).

Example queue (random non-real-life actions):

| Byte | Length | Value | Explanation |
| ---- | ------ | ----- | ----------- |
| 0    | uint8  | 2     | Action owner ID 2: Laser module |
| 1    | uint8  | 1     | 1 byte long Action |
| 2    | uint8  | 127   | Laser module understands this as: set laser power to 50% |
| 3    | uint8  | 5     | Action owner ID 5: Extruder module |
| 4    | uint8  | 1     | 1 byte long Action |
| 5    | uint8  | 3     | Extruder module understands this as: Extruder action ID 3: do unretract |
| 6    | uint8  | 5     | Action owner ID 5: Extruder module |
| 7    | uint8  | 3     | 3 bytes long Action |
| 8    | uint8  | 2     | Extruder module understands this as: Extruder action ID 2: Solo move |
| 9-10 | int16  | 160   | Extruder module understands this as: Solo move must move 160 steps in the positive direction |
| 11   | uint8  | 7     | Action owner ID 7: Stepper module |
| 12   | uint8  | 42    | 42 bytes long Action |
| 13-55| Block  | 127   | Stepper unpacks this into a Block object and executes it |
| 56   | uint8  | 5     | Action owner ID 5: Extruder module |
| 57   | uint8  | 3     | 3 bytes long Action |
| 58   | uint8  | 1     | Extruder module understands this as: Extruder action ID 1: Follow move |
| 59-60| int16  | 67    | Extruder module understands this as: Follow move must move 67 steps in the positive direction along with the previous movement block |

Now compared to the current system, this is extremely compact!

## Implementing

Here is the general idea of how things would work in the new system.

We'll follow the life of our "beep" action from above:

- `G123 S2` is received from the Serial line (meaning "make beep, with tone 2khz")
- Gcodedispatch calls the `on_gcode_received` event with this G-code as a parameter
- Our Beeper module gets its `on_gcode_received` event called with this G-code as a parameter
- It recognizes this as a G-code it wants executed later
- It makes a new Action, looking like this: `17` (1 byte, module ID), `1` (1 byte, action data size), `2` (1 byte, action data, the tone)
- It asks the Conveyor to append this Action to the Queue
- When there is enough room in the Queue, the Action is added

And it sleeps there for a while, until, in another context:

- All Actions in the queue have been executed up to our Action
- Conveyor pops this Action from the Queue
- It finds the Beeper module in its array of targets as module with ID `17` (from the Action's first byte)
- It finds that the Action's data is 1 byte long
- It gathers this 1 byte of data, and calls the Beeper module's `action_execute` method, passing the data (`2`) as a parameter
- The Beeper module executes the beep at 2khz
- The Conveyor deletes this Action from the Queue

And done!

## For each module

Now the logic of moving from the current Queue to Action Queue is not so hard.

What makes this so complicated is that pretty much **all** the modules must change the way they work.

This is a list of the modules that need to change, and in what way they need to change.

This is what `ack-grep :on_gcode_execute *` gives us:

```
src/modules/robot/Stepper.cpp
112:void Stepper::on_gcode_execute(void *argument)
src/modules/tools/spindle/Spindle.cpp
204:void Spindle::on_gcode_execute(void* argument)
src/modules/tools/extruder/Extruder.cpp
385:void Extruder::on_gcode_execute(void *argument)
src/modules/tools/temperaturecontrol/TemperatureControl.cpp
294:void TemperatureControl::on_gcode_execute(void *argument)
src/modules/tools/switch/Switch.cpp
156:void Switch::on_gcode_execute(void *argument)
src/modules/tools/laser/Laser.cpp
95:void Laser::on_gcode_execute(void* argument){
src/libs/SlowTicker.cpp
160:void SlowTicker::on_gcode_execute(void* argument){
src/libs/Module.cpp
20:    &Module::on_gcode_execute,
```

So now, per module, here is what needs to change:

### Planner

Planner adds Actions (Blocks) to the Queue, but does not consume them himself, it's Stepper that consumes them.

Currently what we do is [here](https://github.com/Smoothieware/Smoothieware/blob/edge/src/modules/robot/Planner.cpp#L62) we get an old Block from the Queue, and we recycle it to use as a new Block.

With the Action queue we would make a new Block, and then add it to the Queue as an Action.

What we have now:

```
block = queue->recycle_old_block()
set all of the block's properties
mark the block as complete
```

What we would do in action queue:

```
block = new Block();
set all of the block's properties
queue->add_action(the block's data)
```

### Stepper

Right now Stepper gets a new Block [this way](https://github.com/Smoothieware/Smoothieware/blob/edge/src/modules/robot/Stepper.cpp#L145).

This would simply need to be changed to getting Block-type Actions, that's pretty much it.

There is another thing in Stepper: [There is a useless on_gcode_execute event](https://github.com/Smoothieware/Smoothieware/blob/edge/src/modules/robot/Stepper.cpp#L112) in it.

This can be replaced by an `on_gcode_received` event, and waiting for the queue to empty before turning the stepper motor drivers on or off.

### SlowTicker

As with Stepper, SlowTicker is another example of a place where `on_gcode_execute` is used uselessly.

```
on_gcode_execute{
	do_stuff
}
```

can here too be replaced with:

```
on_gcode_received{
	wait_for_queue_to_empty
	do_stuff
}
```

### Spindle

[This one](https://github.com/Smoothieware/Smoothieware/blob/edge/src/modules/tools/spindle/Spindle.cpp) is a good example of how trivial the move to Action Queue can be.

There are only two possible actions (Spindle ON, Spindle OFF), and one bit of data (Spindle Speed).

So the action data is, for a Spindle OFF event:

- `0x0` (1 byte)

For a Spindle ON event:

- `0x1` (1 byte)

And for a Spindle set speed:

- `0x2` (1 byte)
- `1234.21` (1 float)

Those are simply added to the action queue [Here](https://github.com/Smoothieware/Smoothieware/blob/edge/src/modules/tools/spindle/Spindle.cpp#L198).

Then [on_gcode_execute](https://github.com/Smoothieware/Smoothieware/blob/edge/src/modules/tools/spindle/Spindle.cpp#L204) becomes simply:

```
on_action_execute(data){
	if(data[0] == 0){ turn spindle off }
	if(data[0] == 1){ turn spindle on }
	if(data[0] == 2){ set spindle speed to (float)data[1-4] }
}
```

### TemperatureControl

Another one where `on_gcode_execute` is used uselessly.

```
on_gcode_execute{
	do_stuff
}
```

can here too be replaced with:

```
on_gcode_received{
	wait_for_queue_to_empty
	do_stuff
}
```

The code to replace is [here](https://github.com/Smoothieware/Smoothieware/blob/edge/src/modules/tools/temperaturecontrol/TemperatureControl.cpp#L294).

Note: If you don't find an on_gcode_execute there, wolfmanjm was faster than you.

### Laser

This one is pretty much exactly the same as Spindle above, with spindle speed replaced with laser power (which is a float too), no reason to repeat it.

### Switch

This is again extremely similar: on, off, pwm value.

### Extruder

This is probably the hardest one (second hardest being Stepper/Planner) as it's the most complicated, and does both lead and follow actions.

## Lead or Follow Actions

There are two types of actions: Lead actions and Follow actions.

Lead actions are things that take time, and must be executed one after the other.

Follow actions are actions that are executed in parallel with a lead action, and several of which can be executed at the same time.

Lead actions include:

- Stepper movement
- Extruder solo movement
- Extruder retract/unretract

Follow actions include:

- Spindle actions
- Laser actions
- Switch actions
- Extruder follow movements
