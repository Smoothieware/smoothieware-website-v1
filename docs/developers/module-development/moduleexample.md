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
<versioned>
<v1>
<h2>What is a module</h2>
<p>In Smoothie, everything is a module.</p>
<p>A <strong>module</strong> is essentially a piece of code (an object) that connects to the rest of the code only through event calls and event handlers.</p>
<p>The core of Smoothie (serial communication, motion planning, actual stepping) is divided into modules.</p>
<p>And then <strong>you</strong> can write modules for additional tasks, like controlling a laser, 3D printing, or whatever cool idea you have.</p>
<p>The main idea is to be able to add these additional functionalities in the simplest way possible, without having to edit the core, just connect to/call events.</p>
</v1>
<v2>
<h2>What is a module</h2>
<p>In Smoothieware V2, modules are configuration-driven components that register themselves and communicate via a request/response system.</p>
<p>A <strong>module</strong> is a piece of code (an object/class) that:</p>
<ul>
<li>Registers itself during startup via the <code>REGISTER_MODULE</code> macro</li>
<li>Processes its configuration section from the config file</li>
<li>Communicates with other modules through explicit lookup and request calls</li>
<li>Optionally handles M-codes and custom commands via the Dispatcher system</li>
<li>Can use timer callbacks (SlowTicker/FastTicker) for periodic operations</li>
</ul>
<p>The core of Smoothieware V2 (serial communication, motion planning, stepping) is divided into modules, and <strong>you</strong> can write modules for additional tasks like controlling a laser, temperature control, or custom hardware.</p>
<p>The main idea is to add functionality without editing the core, through explicit configuration and direct module communication.</p>
</v2>
</versioned>
</proposal>
<original>
<h2>What is a module</h2>
<p>In Smoothie, everything is a module.</p>
<p>A <strong>module</strong> is essentially a piece of code (an object) that connects to the rest of the code only through event calls and event handlers.</p>
<p>The core of Smoothie (serial communication, motion planning, actual stepping) is divided into modules.</p>
<p>And then <strong>you</strong> can write modules for additional tasks, like controlling a laser, 3D printing, or whatever cool idea you have.</p>
<p>The main idea is to be able to add these additional functionalities in the simplest way possible, without having to edit the core, just connect to/call events.</p>
</original>
</review>
{:/nomarkdown}

{::nomarkdown}
<review id="moduleexample:about-this-example">
<proposal>
<versioned>
<v1>
<h2>About this example</h2>
<p>For the example, we'll create a simple module that turns the laser on and off depending on received G codes.</p>
<p>PWM adjusts the laser power to the robot's speed so that it plays nicely with look-ahead acceleration management.</p>
<p>This should actually be sufficient to do basic laser cutting.</p>
<p>Also, there'll be a lot of explaining here, but if you landed on this page, you will probably understand everything just by looking at the code; it's not that complicated.</p>
<p>Good examples of existing modules are in <code>/modules/communication/</code> and <code>/modules/robot/</code>.</p>
</v1>
<v2>
<h2>About this example</h2>
<p>For the example, we'll create a simple module that controls laser power based on motion.</p>
<p>The module will:</p>
<ul>
<li>Register itself with the module system using a static create method</li>
<li>Read configuration from the config file (pin, power settings)</li>
<li>Handle M-codes via the Dispatcher system (e.g., M221 for power scaling)</li>
<li>Use a timer callback to continuously adjust PWM based on motion speed</li>
</ul>
<p>Good examples of existing V2 modules are in the <code>src/modules/</code> directory, particularly <code>Laser</code>, <code>TemperatureControl</code>, and <code>Extruder</code>.</p>
</v2>
</versioned>
</proposal>
<original>
<h2>About this example</h2>
<p>For the example, we'll create a simple module that turns the laser on and off depending on received G codes.</p>
<p>PWM adjusts the laser power to the robot's speed so that it plays nicely with look-ahead acceleration management.</p>
<p>This should actually be sufficient to do basic laser cutting.</p>
<p>Also, there'll be a lot of explaining here, but if you landed on this page, you will probably understand everything just by looking at the code; it's not that complicated.</p>
<p>Good examples of existing modules are in <code>/modules/communication/</code> and <code>/modules/robot/</code>.</p>
</original>
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
<versioned>
<v1>
<h2>About the Kernel</h2>
<p>The kernel (<code>libs/Kernel.h</code>) is basically what you talk to when registering for an event, calling an event, and what calls you (the Module) when you have registered for an event, and another Module calls this event.</p>
<p>Your module must be added to it like this, in <code>main.cpp</code>:</p>
<pre><code class="language-cpp">// Add Laser module to Kernel
Laser laser = Laser();
kernel-&gt;add_module(&amp;laser);</code></pre>
<p>Once the module is added, <code>on_module_loaded()</code> is called so that you can register for events.</p>
</v1>
<v2>
<h2>About the Module Registry</h2>
<p>In V2, modules don't use a global kernel. Instead, they use:</p>
<ol>
<li><strong>Module Registry</strong>: A map-based system that manages all modules by group/instance name</li>
<li><strong>REGISTER_MODULE macro</strong>: Registers a static create function that's called at startup</li>
<li><strong>Configuration-driven loading</strong>: Modules are instantiated and configured based on the config file</li>
</ol>
<p>Your module registers itself through a static create method:</p>
<pre><code class="language-cpp">// In Laser.cpp
REGISTER_MODULE(Laser, Laser::create)

bool Laser::create(ConfigReader&amp; cr)
{
    Laser *laser = new Laser();
    if(!laser-&gt;configure(cr)) {
        delete laser;
        return false;
    }
    return true;
}

Laser::Laser() : Module("laser")
{
    // Initialize member variables
    laser_on = false;
}</code></pre>
<p>The <code>REGISTER_MODULE</code> macro places the create function pointer in a special linker section, so it's automatically called during firmware startup. The config file controls whether the module is enabled:</p>
<pre><code>[laser]
enable = true
pwm_pin = 2.4
maximum_power = 1.0
minimum_power = 0.0</code></pre>
</v2>
</versioned>
</proposal>
<original>
<h2>About the Kernel</h2>
<p>The kernel (<code>libs/Kernel.h</code>) is basically what you talk to when registering for an event, calling an event, and what calls you (the Module) when you have registered for an event, and another Module calls this event.</p>
<p>Your module must be added to it like this, in <code>main.cpp</code>:</p>
<pre><code class="language-cpp">// Add Laser module to Kernel
Laser laser = Laser();
kernel-&gt;add_module(&amp;laser);</code></pre>
<p>Once the module is added, <code>on_module_loaded()</code> is called so that you can register for events.</p>
</original>
</review>
{:/nomarkdown}

{::nomarkdown}
<review id="moduleexample:gcode-handling">
<proposal>
<versioned>
<v1>
<h2>On the two G code events</h2>
<p>So in our example, we want to turn the laser on/off depending on the G codes we receive.</p>
<p>But because of the acceleration management (G code look-ahead, see the Planner class), received G codes are not executed when they are received.</p>
<p>They are pushed into a queue, and then popped out when the previous movement has finished executing.</p>
<p>So there are two events:</p>
<ul>
<li><code>on_gcode_received</code> - called when a G-code is received</li>
<li><code>on_gcode_execute</code> - called right before the movement corresponding to that G-code line is executed</li>
</ul>
<p>The one that's of interest to us now is <code>on_gcode_execute</code>.</p>
</v1>
<v2>
<h2>On motion and laser power</h2>
<p>In V2, laser power control works differently than V1. Instead of registering for G-code events, the laser module uses a <strong>timer-based approach</strong>:</p>
<ol>
<li>G1/G2/G3 moves include an S-value (power) that's stored in the motion block</li>
<li>A timer callback runs periodically (up to 1kHz) to check the current motion block</li>
<li>The callback reads the block's S-value and current speed ratio to calculate proportional power</li>
<li>PWM output is adjusted in real-time as the motion accelerates/decelerates</li>
</ol>
<p>This design allows the laser to respond to speed changes during motion without requiring explicit event broadcasts.</p>
<p>For M-codes and custom commands (like manual fire), modules register handlers with the Dispatcher:</p>
<pre><code class="language-cpp">// Register M221 handler for power scaling
THEDISPATCHER-&gt;add_handler(Dispatcher::MCODE_HANDLER, 221,
    std::bind(&amp;Laser::handle_M221, this, _1, _2));

// Register custom "fire" command
THEDISPATCHER-&gt;add_handler("fire",
    std::bind(&amp;Laser::handle_fire_cmd, this, _1, _2));</code></pre>
</v2>
</versioned>
</proposal>
<original>
<h2>On the two G code events</h2>
<p>So in our example, we want to turn the laser on/off depending on the G codes we receive.</p>
<p>But because of the acceleration management (G code look-ahead, see the Planner class), received G codes are not executed when they are received.</p>
<p>They are pushed into a queue, and then popped out when the previous movement has finished executing.</p>
<p>So there are two events:</p>
<ul>
<li><code>on_gcode_received</code> - called when a G-code is received</li>
<li><code>on_gcode_execute</code> - called right before the movement corresponding to that G-code line is executed</li>
</ul>
<p>The one that's of interest to us now is <code>on_gcode_execute</code>.</p>
</original>
</review>
{:/nomarkdown}

{::nomarkdown}
<review id="moduleexample:registering-handlers">
<proposal>
<versioned>
<v1>
<h2>Registering for an event</h2>
<p>So here is how we register for an event in our code:</p>
<pre><code class="language-cpp">class Laser : public Module {
    public:
        Laser(){}

        void on_module_loaded() {
            this-&gt;register_for_event(ON_GCODE_EXECUTE);
        }

        void on_gcode_execute(void* argument){
            Gcode* gcode = static_cast&lt;Gcode*&gt;(argument);
        }
};</code></pre>
<p>So now, whenever a module calls the <code>on_gcode_execute</code> event, this callback function will be called. In this case, the Stepper module calls this upon deleting a move it has just finished stepping.</p>
<p>Because of the way C++ works, arguments to events here must be passed as void pointers and then manually cast in the callback function. You can see how that's done: here we cast a Gcode object.</p>
<p>You can find more information about the different events in <a href="listofevents">ListOfEvents</a>.</p>
</v1>
<v2>
<h2>Registering timer callbacks and handlers</h2>
<p>In V2, we use timer callbacks for continuous operations and the Dispatcher for commands:</p>
<pre><code class="language-cpp">bool Laser::configure(ConfigReader&amp; cr)
{
    ConfigReader::section_map_t m;
    if(!cr.get_section("laser", m)) return false;

    // Check if enabled in config
    if(!cr.get_bool(m, "enable", false)) {
        return false;
    }

    // Read pin configuration
    pwm_pin = new Pwm(cr.get_string(m, "pwm_pin", "nc"));
    if(!pwm_pin-&gt;is_valid()) {
        delete pwm_pin;
        return false;
    }

    // Read power settings
    laser_maximum_power = cr.get_float(m, "maximum_power", 1.0f);
    laser_minimum_power = cr.get_float(m, "minimum_power", 0.0f);

    // Register M-code handler
    using std::placeholders::_1;
    using std::placeholders::_2;
    THEDISPATCHER-&gt;add_handler(Dispatcher::MCODE_HANDLER, 221,
        std::bind(&amp;Laser::handle_M221, this, _1, _2));

    // Register timer callback for proportional power
    uint32_t freq = std::min(1000UL, pwm_pin-&gt;get_frequency());
    SlowTicker::getInstance()-&gt;attach(freq,
        std::bind(&amp;Laser::set_proportional_power, this));

    return true;
}</code></pre>
<p>Handlers are type-safe - they receive <code>GCode&amp;</code> and <code>OutputStream&amp;</code> references directly, no casting needed. The Dispatcher calls only registered handlers, which is more efficient than V1's broadcast model.</p>
</v2>
</versioned>
</proposal>
<original>
<h2>Registering for an event</h2>
<p>So here is how we register for an event in our code:</p>
<pre><code class="language-cpp">class Laser : public Module {
    public:
        Laser(){}

        void on_module_loaded() {
            this-&gt;register_for_event(ON_GCODE_EXECUTE);
        }

        void on_gcode_execute(void* argument){
            Gcode* gcode = static_cast&lt;Gcode*&gt;(argument);
        }
};</code></pre>
<p>So now, whenever a module calls the <code>on_gcode_execute</code> event, this callback function will be called. In this case, the Stepper module calls this upon deleting a move it has just finished stepping.</p>
<p>Because of the way C++ works, arguments to events here must be passed as void pointers and then manually cast in the callback function. You can see how that's done: here we cast a Gcode object.</p>
<p>You can find more information about the different events in <a href="listofevents">ListOfEvents</a>.</p>
</original>
</review>
{:/nomarkdown}

{::nomarkdown}
<review id="moduleexample:doing-something-useful">
<proposal>
<versioned>
<v1>
<h2>Doing something useful</h2>
<p>We have to modify the class a bit to add a <code>PwmOut</code> to it. Then we can do some useful stuff:</p>
<pre><code class="language-cpp">class Laser : public Module {
    public:
        Laser(PinName pin) : laser_pin(pin) {
            this-&gt;laser_pin.period_us(10);
        }

        void on_module_loaded() {
            this-&gt;register_for_event(ON_GCODE_EXECUTE);
            this-&gt;register_for_event(ON_SPEED_CHANGE);
        }

        void on_gcode_execute(void* argument) {
            Gcode* gcode = static_cast&lt;Gcode*&gt;(argument);
            if (gcode-&gt;has_letter('G')) {
                int code = gcode-&gt;get_value('G');
                if (code == 0) { // G0
                    this-&gt;laser_pin = 0;
                    this-&gt;laser_on = false;
                } else if (code &gt; 0 &amp;&amp; code &lt; 4) { // G1, G2, G3
                    this-&gt;laser_on = true;
                }
            }
        }

        void on_speed_change(void* argument) {
            Stepper* stepper = static_cast&lt;Stepper*&gt;(argument);
            if (this-&gt;laser_on) {
                this-&gt;laser_pin = double(stepper-&gt;trapezoid_adjusted_rate)
                    / double(stepper-&gt;current_block-&gt;nominal_rate);
            }
        }

        PwmOut laser_pin;
        bool   laser_on;
};</code></pre>
<p>And also change a bit the way we instantiate the module:</p>
<pre><code class="language-cpp">Laser laser = Laser(p21);</code></pre>
<p>That's it, now the Laser pin will be LOW during G0 moves, and HIGH during G1, G2, and G3 moves.</p>
<p>But that's not enough. Because we use acceleration, the speed is not constant. And thus if the power of the laser stays constant, that power will be too much when accelerating and decelerating.</p>
<p>So we need to have a laser power that is proportional to the instant speed of the robot. That's the kind of thing the <code>on_speed_change</code> event is for.</p>
</v1>
<v2>
<h2>Doing something useful</h2>
<p>In V2, proportional laser power is handled by a timer callback that reads from the current motion block:</p>
<pre><code class="language-cpp">// Called periodically by SlowTicker (up to 1kHz)
void Laser::set_proportional_power()
{
    // Get the currently executing motion block
    const Block *block = StepTicker::getInstance()-&gt;get_current_block();

    // Check if we have a valid block that's a G1/G2/G3 move
    if(block != nullptr &amp;&amp; block-&gt;is_ready &amp;&amp; block-&gt;is_g123) {
        // Get requested power from the block's S-value
        float requested_power = block-&gt;s_value / laser_maximum_s_value;

        // Calculate current speed ratio (0 to 1)
        float ratio = current_speed_ratio(block);

        // Apply proportional power
        float power = requested_power * ratio * scale;
        set_laser_power(power);
    }
    else if(laser_on) {
        // No motion block - turn laser off
        set_laser_power(0);
    }
}

// Calculate speed ratio based on trapezoid position
float Laser::current_speed_ratio(const Block *block) const
{
    // Find primary axis (most steps)
    size_t pm = 0;
    uint32_t max_steps = 0;
    for (size_t i = 0; i &lt; Robot::getInstance()-&gt;get_number_registered_motors(); i++) {
        if(block-&gt;steps[i] &gt; max_steps) {
            max_steps = block-&gt;steps[i];
            pm = i;
        }
    }

    // Return ratio of current rate to nominal rate
    return block-&gt;get_trapezoid_rate(pm) / block-&gt;nominal_rate;
}</code></pre>
<p>The key difference from V1 is that V2 <strong>polls</strong> the motion system rather than receiving events. This allows real-time power adjustment as the motion accelerates and decelerates through the trapezoid profile.</p>
</v2>
</versioned>
</proposal>
<original>
<h2>Doing something useful</h2>
<p>We have to modify the class a bit to add a <code>PwmOut</code> to it. Then we can do some useful stuff:</p>
<pre><code class="language-cpp">class Laser : public Module {
    public:
        Laser(PinName pin) : laser_pin(pin) {
            this-&gt;laser_pin.period_us(10);
        }

        void on_module_loaded() {
            this-&gt;register_for_event(ON_GCODE_EXECUTE);
            this-&gt;register_for_event(ON_SPEED_CHANGE);
        }

        void on_gcode_execute(void* argument) {
            Gcode* gcode = static_cast&lt;Gcode*&gt;(argument);
            if (gcode-&gt;has_letter('G')) {
                int code = gcode-&gt;get_value('G');
                if (code == 0) { // G0
                    this-&gt;laser_pin = 0;
                    this-&gt;laser_on = false;
                } else if (code &gt; 0 &amp;&amp; code &lt; 4) { // G1, G2, G3
                    this-&gt;laser_on = true;
                }
            }
        }

        void on_speed_change(void* argument) {
            Stepper* stepper = static_cast&lt;Stepper*&gt;(argument);
            if (this-&gt;laser_on) {
                this-&gt;laser_pin = double(stepper-&gt;trapezoid_adjusted_rate)
                    / double(stepper-&gt;current_block-&gt;nominal_rate);
            }
        }

        PwmOut laser_pin;
        bool   laser_on;
};</code></pre>
<p>And also change a bit the way we instantiate the module:</p>
<pre><code class="language-cpp">Laser laser = Laser(p21);</code></pre>
<p>That's it, now the Laser pin will be LOW during G0 moves, and HIGH during G1, G2, and G3 moves.</p>
<p>But that's not enough. Because we use acceleration, the speed is not constant. And thus if the power of the laser stays constant, that power will be too much when accelerating and decelerating.</p>
<p>So we need to have a laser power that is proportional to the instant speed of the robot. That's the kind of thing the <code>on_speed_change</code> event is for.</p>
</original>
</review>
{:/nomarkdown}

{::nomarkdown}
<review id="moduleexample:conclusion">
<proposal>
<versioned>
<v1>
<h2>Conclusion</h2>
<p>As you can see here, we have added functionality to Smoothie without having to modify the core, which is the whole point of the modular design.</p>
</v1>
<v2>
<h2>Conclusion</h2>
<p>As you can see, V2's module architecture is significantly different from V1. The key differences are:</p>
<ul>
<li><strong>Configuration-driven</strong>: Modules use <code>REGISTER_MODULE</code> macro with a static create method, instantiated from config files</li>
<li><strong>Timer-based updates</strong>: Continuous operations (like laser power) use SlowTicker/FastTicker callbacks instead of events</li>
<li><strong>Dispatcher for commands</strong>: M-codes and custom commands register handlers with <code>THEDISPATCHER</code></li>
<li><strong>Direct block access</strong>: Modules can read from the current motion block via <code>StepTicker::getInstance()-&gt;get_current_block()</code></li>
<li><strong>Type-safe handlers</strong>: No void pointer casting - handlers receive typed references</li>
</ul>
<p>Despite these architectural changes, the fundamental principle remains: add functionality without modifying the core firmware, through a well-defined module interface.</p>
</v2>
</versioned>
</proposal>
<original>
<h2>Conclusion</h2>
<p>As you can see here, we have added functionality to Smoothie without having to modify the core, which is the whole point of the modular design.</p>
</original>
</review>
{:/nomarkdown}
