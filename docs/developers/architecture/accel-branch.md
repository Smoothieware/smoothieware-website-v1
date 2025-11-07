---
permalink: /accel-branch
---

# Acceleration Branch

{::nomarkdown}
<a href="/images/binary-code.png">
  <img src="/images/binary-code.png" alt="Binary code" style="width: 300px; height: 300px; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  This is mainly out of date now, and describes a pretty old snapshot of smoothie. Left here for historical reasons.
</sl-alert>
{:/nomarkdown}

This page is intended as a description of the current status of acceleration and stepping in Smoothie, and then a log of the process of moving to better acceleration and better ( maybe ) stepping.

These are notes to myself, please be nice :)

Here is the plan:

1. Describe the current status of stepping
2. Request suggestions on how to make it better/faster
3. Make acceleration better by acceleration every step
4. See if that completely ruins our lives
5. If not, try to optimize the heck out of things, then call it smoothie's new internal organs.

## How Smoothie steps

A summary of how we get smoothie to generate steps:

1. We [receive a line over UART (for example)](https://github.com/arthurwolf/Smoothie/blob/edge/src/modules/communication/SerialConsole.cpp#L40), and [dispatch it as an event to all modules](https://github.com/arthurwolf/Smoothie/blob/edge/src/modules/communication/SerialConsole.cpp#L61).

2. If [that line is a GCode](https://github.com/arthurwolf/Smoothie/blob/edge/src/modules/communication/GcodeDispatch.cpp#L28), we [dispatch that as an event to all modules](https://github.com/arthurwolf/Smoothie/blob/edge/src/modules/communication/GcodeDispatch.cpp#L100).

3. The [Robot likes to listen to GCodes](https://github.com/arthurwolf/Smoothie/blob/edge/src/modules/robot/Robot.cpp#L95), converts them into small line segments, and [passes those to the Planner](https://github.com/arthurwolf/Smoothie/blob/edge/src/modules/robot/Robot.cpp#L253).

4. The [Planner receives this segment](https://github.com/arthurwolf/Smoothie/blob/edge/src/modules/robot/Planner.cpp#L39), and [turns it into a Block on the Conveyor](https://github.com/arthurwolf/Smoothie/blob/edge/src/modules/robot/Planner.cpp#L46), then [does all kinds of acceleration math/planning on it to figure out the maximal speeds for each movement](https://github.com/arthurwolf/Smoothie/blob/edge/src/modules/robot/Planner.cpp#L155). The block is now at the end of the Conveyor's queue.

5. If this is the first block we added ever, the [conveyor queue starts playing music](https://github.com/arthurwolf/Smoothie/blob/edge/src/modules/robot/Conveyor.cpp#L90): the Conveyor [calls the on_block_begin event, warning all modules that this block starts playing](https://github.com/arthurwolf/Smoothie/blob/edge/src/modules/robot/Conveyor.cpp#L113).

6. Some modules, like Stepper and Extruder, like [to take responsibility for a Block](https://github.com/arthurwolf/Smoothie/blob/edge/src/modules/robot/Stepper.cpp#L120). We are here interested in Stepper as it's the one responsible for doing movements.

7. Now the very interesting (for us, don't be sad, planner people) part begins: Stepper [instructs its StepperMotor objects to move](https://github.com/arthurwolf/Smoothie/blob/edge/src/modules/robot/Stepper.cpp#L131). They are instructed to [move a certain number of steps](https://github.com/arthurwolf/Smoothie/blob/edge/src/libs/StepperMotor.cpp#L110). Also, the StepperMotor is [made active](https://github.com/arthurwolf/Smoothie/blob/edge/src/libs/StepperMotor.cpp#L130) in the [StepTicker's list of active motors](https://github.com/arthurwolf/Smoothie/blob/edge/src/libs/StepTicker.cpp#L247).

8. Things now stop happening in the normal, main loop context, and start happening elsewhere.

9. The stepping interrupt is executed by the interrupt thingie, [at a fixed frequency](https://github.com/arthurwolf/Smoothie/blob/edge/src/libs/StepTicker.cpp#L54) (we used 100kHz, the default).

10. When this [interrupt occurs](https://github.com/arthurwolf/Smoothie/blob/edge/src/libs/StepTicker.cpp#L151), the main thing to happen is that every active StepperMotor's [tick() method gets called](https://github.com/arthurwolf/Smoothie/blob/edge/src/libs/StepTicker.cpp#L88).

11. The main job of [this method](https://github.com/arthurwolf/Smoothie/blob/edge/src/libs/StepperMotor.cpp#L43) is simply to do what is called [Bresenham's line algorithm](http://en.wikipedia.org/wiki/Bresenham%27s_line_algorithm). Basically, we increment a counter by a fixed value every tick(), and [when that counter is higher than a given value](https://github.com/arthurwolf/Smoothie/blob/edge/src/libs/StepperMotor.cpp#L49) (determined by [the speed we want to move at](https://github.com/arthurwolf/Smoothie/blob/edge/src/libs/StepperMotor.cpp#L158)), we [generate a step signal to the stepper driver](https://github.com/arthurwolf/Smoothie/blob/edge/src/libs/StepperMotor.cpp#L52).

(Note we do not actually do Bresenham, we do a floating-point DDA on three axes).

This is the core of what smoothie does.

Additionally, a painful thing we have to do, is to update the speed very often, to be able to accelerate, and decelerate.

This happens in a separate (lower priority) timer, at regular, but more rare intervals.

1. [This method](https://github.com/arthurwolf/Smoothie/blob/edge/src/modules/robot/Stepper.cpp#L176) gets called periodically, and, depending on whether we are accelerating, decelerating, or cruising
2. Changes the speed or does not [for all movement stepper motors](https://github.com/arthurwolf/Smoothie/blob/edge/src/modules/robot/Stepper.cpp#L242).

This behavior is inherited from grbl and is the source of many approximations/small problems.

You can end up with deceleration curves reaching zero, or near-zero speed a few steps too early, and instead of a direction change, you get a pause. This currently (Feb 2013) can lead, at high speeds, to «shocky» end of moves, and even missed steps.

### Step generation's current cost

Step generation is what Smoothie spends most of its time doing.

The reason for this is simple:

- The more often we increment the Bresenham timer, the more precise the step generation is.
- So we do it as often as possible
- But doing it takes time, so the less time it takes the more often we can do it.

Basically, we want this to take as little time as possible in order to do it as often as possible.

In order to analyze how much various things we do take to execute, their cost, we can simply turn pins high at the beginning of things, low at the end of them, plug in a [Logic Analyzer](http://www.bitscope.net/store/?p=view&i=item+4), and look at the graphs.

This has been extremely useful in the past to figure out where we spent too much time, what needed fixing, etc.

{::nomarkdown}
<a href="/images/step-generation-graph.png">
  <img src="/images/step-generation-graph.png" alt="Step generation graph showing timing analysis" style="min-width: 640px; display: block; margin: 2rem auto;"/>
</a>
{:/nomarkdown}

1. In white, is the X-axis step signal. It is [turned on here](https://github.com/arthurwolf/Smoothie/blob/edge/src/libs/StepperMotor.cpp#L52) and [turned off here](https://github.com/arthurwolf/Smoothie/blob/edge/src/libs/StepTicker.cpp#L134).
2. In brown is the [duration of this interrupt](https://github.com/arthurwolf/Smoothie/blob/edge/src/libs/StepTicker.cpp#L151). This is the total time we spend generating steps. It is the time we want to reduce as much as possible. A bit of the rest of the time is spent doing acceleration, all the rest in the main loop, mostly doing Planner math.
3. In red, which never turns high here, is the duration of [this condition, if it ever becomes true](https://github.com/arthurwolf/Smoothie/blob/edge/src/libs/StepTicker.cpp#L187), not very interesting here. Basically, we make sure if we spent so much time in this interrupt occurrence that it overlaps on the next occurrence, we skip the next, but make sure we do so without messing any of the rest of the math.
4. In orange, is the duration of [the tick() method of each StepperMotor](https://github.com/arthurwolf/Smoothie/blob/edge/src/libs/StepperMotor.cpp#L43)
5. In yellow, is the duration of [this condition](https://github.com/arthurwolf/Smoothie/blob/edge/src/libs/StepperMotor.cpp#L49) inside the tick() method, if true. Basically, if we have to generate a step, this turns high.

The width of the screen should represent 10 microseconds.

So, what is important to see here?
- When the brown line is high, this means something is happening. All the rest of the time is either acceleration updates or the main loop (mostly doing Planner math). About half of each seems to be a healthy ratio, but we can probably go higher.
- When the brown line is high is what we want to reduce to a minimum (duration), because the less time it lasts, the more often we can do it.
- You can note that the interrupt does not always take as long to execute. Here is what it always does:
  - For each active StepperMotor
    - Call its tick() method, in there:
    - Increment the Bresenham counter
    - If the counter is higher than the current Bresenham «roof» value (dependent on the speed we want)
      - Generate a step signal, reset the counter, increment the step counter
      - If we stepped the number of steps we were asked, signal the end of the move
- It should be noted that the time it takes to run this interrupt depends on the two "ifs" for each StepperMotor. The more conditions are true, the longer we stay.
- This can be seen on the orange line. The normal situation is that we spend very little time in each tick() method (just incrementing the Bresenham counter, then leaving). But if the counter is big enough, the condition is true, and we spend more time there, setting the step pin high etc... When this happens can be seen on the yellow line.

Now the very interesting stuff.

We are here to hunt waste. We want this to run as fast as possible. And looking at the curves, we clearly have a problem (not sure it has a solution).

The orange line is the time we spend doing **useful** work. The work we are here to do.

The brown line is the time it actually takes us, total, to do that work. As you can see, we spend **much much** time doing stuff that is not directly useful (though it may be necessary). 
That would be iterating over the active StepperMotors list, calling methods, etc... maintenance if you like.

We want that to last as little time as possible!

There are two situations here:

1. When we do not output a step signal (the short brown duration)
2. When we output one or more step signals (the long brown duration)

The additional duration of the second one compared to the first is due to the fact that we have a second timer interrupt, with a higher priority, to turn the step pin low after one microsecond. This interrupts this interrupt to turn the pin off, making this interrupt last longer. I think that's the main cause of the longer execution time.

Now when we do not output a step signal, the total interrupt time is still much more than the useful (orange) time.

It should probably be interesting to look at the assembly to see how long we spend doing each thing.

### What it looks like, in the code.

This is schematic C++ representing what happens in your typical, short step interrupt.

```cpp
// This is where work is done
extern "C" void TIMER0_IRQHandler (void){

    // If no axes enabled, just ignore for now. This costs us a tiny bit of time
    if( global_step_ticker->active_motor_bm == 0 ){ return; }

    // We set the timer to a very high value so we don't overflow the timer if this takes too long
    LPC_TIM0->MR0 = 2000000;

    // This calls the tick method.
    global_step_ticker->tick();

    // Let's inline it below:
    _isr_context = true;
    int i;
    uint32_t bm;

    // This is your usual loop. I have no idea how costly it is. It seems like it is costly as we don't do much else.
    for (i = 0, bm = 1; i < 12; i++, bm <<= 1){
        if (this->active_motor_bm & bm){

            // We call the tick() method for each StepperMotor.
            this->active_motors[i]->tick();

            // Let's inline this below:
            void StepperMotor::tick(){

                // Increase the (fixed point) counter by one tick
                this->fx_counter += (uint64_t)((uint64_t)1<<32);

                // If we are to step now.
                if( this->fx_counter >= this->fx_ticks_per_step ){

                      // Here we don't care about the case where we do. We care about the time we waste before and after this.

                }
            }
        }
    }

    // The iteration over the active StepperMotors is now finished, all useful work is done
    _isr_context = false;

    // Return to the main interrupt function

    // If we did set a pin high, we want to set the other timer to set it low one microsecond from now
    if( global_step_ticker->reset_step_pins ){
        // But we don't care about the case where we did here. Still the check is expensive
        LPC_TIM1->TCR = 3;
        LPC_TIM1->TCR = 1;
        global_step_ticker->reset_step_pins = false;
    }

    // If a move finished in this tick, we have to tell the actuator to act accordingly. This is not happening here either as we did not generate a step.
    if( global_step_ticker->moves_finished ){ global_step_ticker->signal_moves_finished(); }

    // If we spent too much time inside the interrupt. This should probably never happen if the previous condition was not true.
    if( LPC_TIM0->TC > global_step_ticker->period ){ 
        // We don't care, not happening
    }

    // This is just a security to make sure we never miss our match register
    while( LPC_TIM0->TC > LPC_TIM0->MR0 ){
        LPC_TIM0->MR0 += global_step_ticker->period;
    }

}

// And that's it
```

Several optimizations found and applied:
- [Exit](https://github.com/arthurwolf/Smoothie/commit/12aad2a05e16a813e18f4cd27c9c0ae7cf90685e) the interrupt early if no step was generated.
- [Disable](https://github.com/arthurwolf/Smoothie/commit/8aea2a3537b7881fee83902e062d23c4a50e0dd0) the interrupt when not moving.
- [Inline](https://github.com/arthurwolf/Smoothie/commit/8aea2a3537b7881fee83902e062d23c4a50e0dd0) the StepperMotor's tick() function.

These are optimizations that are most useful in the case we don't do anything. Applying them gives us the following signals/durations:

{::nomarkdown}
<a href="/images/accel-branch/optimized-step-generation-graph.png">
  <img src="/images/accel-branch/optimized-step-generation-graph.png" alt="Optimized step generation graph showing improved performance" style="min-width: 640px; display: block; margin: 2rem auto;"/>
</a>
{:/nomarkdown}

Compared to the previous graph, we now spend significantly less time in the interrupt when no step is generated, and a bit less time when one or more steps are generated.
