
# Safety Warnings

Before you start wiring your machine's elements to the board, there are several things you need to keep in mind and be careful about during all of the assembly.

**Make sure you read this. Seriously. Not kidding. Do it. It's important.**

{::nomarkdown}
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>Critical:</strong> The warnings on this page can save your equipment, prevent fires, and potentially save your life. Read every section carefully and follow all safety guidelines.
</sl-alert>
{:/nomarkdown}

---

## Polarity

{::nomarkdown}
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>Power Polarity Warning</strong>

  <div style="text-align: center; margin: 1rem 0;">
    <a href="/images/polarity.png">
      <img src="/images/polarity.png" alt="Power connections" style="max-width: 100%; height: auto;"/>
    </a>
    <p style="font-style: italic; margin-top: 0.5rem;">Note the inversion between the 5mm and 3.5mm connectors</p>
  </div>

  <p>Always make sure the <a href="http://en.wikipedia.org/wiki/Electrical_polarity">polarity</a> is correct when wiring in power inputs (coming from the <a href="http://en.wikipedia.org/wiki/Power_supply_unit_%28computer%29">Power Supply</a>). <strong>Reversed polarity can damage or destroy all or part of your board.</strong></p>

  <p>Polarity is indicated on the board itself by the + and - signs. Double check.</p>

  <p>On older versions of the board, markings are partially hidden by the connector, making it confusing. Rely on only the diagrams.</p>

  <p><strong>How to check polarity:</strong> Attach your multimeter probes to the two wires of your power source respectively. If the voltmeter reading is positive it implies that the red probe is connected to the positive wire (+) and the black probe to the negative wire (-).</p>

  <p>The main (labeled VBB) power input has a reverse polarity protection, however, it will not hold forever. As soon as you notice something is wrong, turn the power supply off and check again.</p>
</sl-alert>
{:/nomarkdown}

---

## Disconnecting Stepper Motors

{::nomarkdown}
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>Never Disconnect Motors While Powered</strong>

  <p><strong><a href="http://datacent.com/images/shots/burnt_chip.jpg">Never</a></strong> disconnect or connect stepper motors from the stepper motor drivers while the board is powered (i.e., when the Power Supply is turned on).</p>

  <p>The drivers have very good protection against most possible problems and are very hard to destroy accidentally. But it is possible.</p>
</sl-alert>
{:/nomarkdown}

---

## Preventing Shorts

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Metallic Objects and Shorts</strong>

  <p>Be careful that nothing metallic <strong>ever</strong> touches the board while it is powered on. Falling screwdrivers, nuts and bolts can cause shorts and destroy the board.</p>

  <ul>
    <li>Check the board before powering it on</li>
    <li>Do not press the reset button with anything metallic, as you could slip and cause a short</li>
    <li>Use a plastic screwdriver or the like</li>
  </ul>
</sl-alert>
{:/nomarkdown}

---

## Using the Right Connector

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Check Connections Carefully</strong>

  <p>Always check the schematic before connecting power sources (coming from the Power Supply) to the board. Connected to the wrong connector can destroy components.</p>

  <p>A common example of this problem is plugging a power input cable into the connector for an output, or plugging the limit switches in backwards.</p>
</sl-alert>
{:/nomarkdown}

---

## Crimping Quality

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Ensure Quality Connections</strong>

  <p>Make absolutely sure of your connections using <a href="http://en.wikipedia.org/wiki/Crimp_connection">crimps</a> or screw terminals, from wires to any type of connector, are very careful and well done.</p>

  <p>Connections (to the stepper motors for example) lost while the machine is running can destroy your board.</p>
</sl-alert>
{:/nomarkdown}

---

## VBB Power Input Markings

{::nomarkdown}
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>VBB Connector Polarity</strong>

  <p>In the case of the VBB power input, be careful. If your board came with connectors pre-soldered, the 5mm connector is present, and the polarity of that connector is that of the large traces in the wiring diagram to the right (red is +, blue is -).</p>

  <p>On some boards, the marking on the boards may be hidden by the connector itself, so for VBB, <strong>do not rely on the markings on the board</strong>, but on the diagrams on this page.</p>

  <p>However, if you did not get your connectors soldered, and want to solder a 3.5mm connector instead of a 5mm connector, also note that <strong>the polarity is the opposite</strong>.</p>
</sl-alert>
{:/nomarkdown}

---

## USB vs Ethernet

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>Recommendation: Use Ethernet</strong>

  <p>USB can, in some setups, be subject to interference, which causes disconnections, and can ruin your work. This is very hard to prevent if it happens even in normal conditions.</p>

  <p>Ethernet, on the other hand, does not have this problem: save yourself the trouble, and use Ethernet right away. It's very nice. See <a href="network">Network</a> for information on how to set it up.</p>
</sl-alert>
{:/nomarkdown}

---

## How to Destroy Your Board (Don't Do These Things)

{::nomarkdown}
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>Board Destruction Warning</strong>

  <p>If you receive a bad board, you will get a replacement. But if you destroy your own board, your only options will be to fix it yourself (which can be quite difficult), or get a new one.</p>

  <p>This is why it is very important you make sure you do not destroy your own board. Smoothieboard is reasonably protected, but there are still things that will destroy it.</p>

  <p><strong>The general idea is:</strong> if a part of the board gets too much power, it will get destroyed.</p>

  <p><strong>Common mistakes that cause board destruction:</strong></p>
  <ul>
    <li>Plugging 12-24v (motor power) into anything you are not supposed to. Like the 5V line, or an end-stop or thermistor input for example. Problems with the 5V or 3.3V power are not as much of a problem as the board is 5V-tolerant, so wrong connections and shorts should be okay as long as they do not last too long.</li>
    <li>Shorting 12-24v to anything else, which is essentially the same as plugging it into a place you are not supposed to (see above). This can happen by dropping a metal object onto the board, bad soldering, loose wires, un-protected wires, etc ...</li>
    <li>Using an inductive load (like a motor, fan or solenoid) on a MOSFET, without a diode across (see Fan documentation).</li>
  </ul>

  <p><strong>The general idea here is:</strong> always make sure everything is clean, and double-check everything <strong>before</strong> turning the power on. You can not learn by making mistakes here, as mistakes will likely cost you your board.</p>

  <p><a href="https://en.wikipedia.org/wiki/Electrostatic_discharge">Electrostatic discharge</a> can also destroy your board: make sure you <a href="http://smoothieware.org/forum/t-1381690?from=email#post-2475310">properly ground everything</a>.</p>
</sl-alert>
{:/nomarkdown}

---

## Heater Safety

{::nomarkdown}
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="fire"></sl-icon>
  <strong>Fire Hazard - Critical Safety Warning</strong>

  <p>If your machine contains any heating element and uses the <a href="temperaturecontrol">temperature control module</a> to control it, please make sure you read the section about implementing all safety measures <a href="temperaturecontrol#safety">here</a>, and implement as many as you can.</p>

  <p><strong>Fires will kill you if you don't.</strong></p>
</sl-alert>
{:/nomarkdown}

---

## Grounding

{::nomarkdown}
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>Proper Grounding Required</strong>

  <p>Make sure your machine's case and electronics are properly grounded, also make sure your location's electrical installation's grounding is correctly done.</p>

  <p><strong>Grounding Resources:</strong></p>
  <ul>
    <li><a href="http://electrical-engineering-portal.com/9-recommended-practices-for-grounding">Electrical Engineering Portal</a></li>
    <li><a href="https://en.wikipedia.org/wiki/Ground_and_neutral">Wikipedia: Ground and neutral</a></li>
    <li><a href="https://www.machsupport.com/forum/index.php?topic=9587.0">Mach Support Forum</a></li>
    <li><a href="https://donsthings.blogspot.com/2018/09/battling-electrical-noise-in-cnc-builds.html">Don's Things: Battling Electrical Noise</a></li>
    <li><a href="https://makr.zone/grounding-the-machine/283/">Makr Zone: Grounding the Machine</a></li>
    <li><a href="http://smoothieware.org/forum/t-1381690?from=email#post-2475310">Smoothie Forum Discussion</a></li>
  </ul>
</sl-alert>
{:/nomarkdown}

---

## Environmental Hazards

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Be Aware of Your Environment</strong>

  <p>It's not just the machine itself that can be dangerous:</p>

  <p><strong>Laser Cutters:</strong> The machine vents large quantities of toxic smoke and gas, make sure it is very well evacuated to a place where no-one is breathing them</p>

  <p><strong>CNC Mills:</strong> Dusts, like wood dust for example, can be explosive if they come in contact with a flame, be careful and take measures to limit dust in the air</p>

  <p><strong>3D Printers:</strong> The acetone used to clean things is very flammable, and the sprays used to increase bed adherence are explosive, store them adequately and be careful when using them</p>

  <p><strong>Confined Spaces:</strong> You are even more in danger if you are using your machine in a confined space, always be on the watch for safety issues.</p>
</sl-alert>
{:/nomarkdown}

---

## Further Reading

For a good read about safety, you can refer to the [RepRap Wiki documentation on the subject](http://reprap.org/wiki/Safety).

To properly understand some of the safety instructions in this documentation, basic knowledge about electricity is required. See [this page](basics#electricity) for a refresher on the basics.

---

## Summary

{::nomarkdown}
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>Key Safety Points</strong>
  <ul>
    <li>Always check polarity before connecting power</li>
    <li>Never disconnect motors while powered</li>
    <li>Keep metallic objects away from powered boards</li>
    <li>Double-check all connections before powering on</li>
    <li>Ensure quality crimps and connections</li>
    <li>Use Ethernet instead of USB when possible</li>
    <li>Implement all heater safety measures</li>
    <li>Properly ground your machine and workspace</li>
    <li>Be aware of environmental hazards</li>
    <li>When in doubt, power off and check</li>
  </ul>
</sl-alert>
{:/nomarkdown}

**Remember:** Prevention is always better than repair. Take your time, double-check everything, and never skip safety steps to save time.
