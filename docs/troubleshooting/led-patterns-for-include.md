{::nomarkdown}
<style>
.led-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.25rem 1rem}
.led-card{display:flex;flex-wrap:wrap;align-items:center;gap:0 .6rem}
.led-card img{flex:0 0 auto;width:170px;height:auto;margin:0;border:0;box-shadow:none;background:none}
.led-card p{flex:1 1 160px;margin:.3rem 0;font-size:.85em;line-height:1.35}
@media (max-width:640px){.led-grid{grid-template-columns:1fr}}
</style>
<versioned orientation="vertical">
<v1>
<p>The status LEDs are near the center of the board: <code>VBB</code> (red, motor power), <code>3.3V</code> (orange, logic power), and <code>1</code> to <code>4</code> (green). Compare the green ones with these animations.</p>
<div class="led-grid">
<div class="led-card">
<img src="/images/leds/v1-normal.png" alt="V1: LEDs 1 and 4 on, 2 and 3 blinking" width="210" height="60">
<p><strong>Normal operation</strong><br>1 and 4 on, 2 and 3 blink. The firmware is running.</p>
</div>
<div class="led-card">
<img src="/images/leds/v1-sd-card.png" alt="V1: LED 1 on, 2 and 3 blinking, 4 off" width="210" height="60">
<p><strong>SD card problem</strong><br>1 on, 2 and 3 blink, 4 off. Reinsert the SD card, or <a href="/sd-card">set up another one</a>.</p>
</div>
<div class="led-card">
<img src="/images/leds/v1-frozen-all.png" alt="V1: LEDs 1 to 4 steadily on" width="210" height="60">
<p><strong>All four steady</strong><br>Firmware stopped or never flashed. <a href="/flashing-smoothie-firmware">Flash the firmware again</a>.</p>
</div>
<div class="led-card">
<img src="/images/leds/v1-frozen-1-4.png" alt="V1: LEDs 1 and 4 steadily on" width="210" height="60">
<p><strong>Crash: 1 and 4 steady</strong><br>Firmware stopped. Reset; reflash if it recurs.</p>
</div>
<div class="led-card">
<img src="/images/leds/v1-watchdog.png" alt="V1: LEDs 2 and 4 steadily on" width="210" height="60">
<p><strong>Watchdog: 2 and 4 steady</strong><br>The safety timer caught a frozen firmware. Reset and report it.</p>
</div>
<div class="led-card">
<img src="/images/leds/v1-no-bootloader.png" alt="V1: LEDs 1 and 3 steadily on" width="210" height="60">
<p><strong>No bootloader: 1 and 3 steady</strong><br>The firmware loader may be missing. Contact your seller.</p>
</div>
</div>
</v1>
<v2>
<p>On Smoothieboard V2 Prime, one row of LEDs is labelled <code>VFET</code>, <code>VMOT</code> and <code>3.3V</code> (power present) followed by <code>1</code> to <code>4</code> (status). Compare the four status LEDs with these animations. The colours in the drawings are only for readability.</p>
<div class="led-grid">
<div class="led-card">
<img src="/images/leds/v2-boot.png" alt="V2: LEDs 4, 3, 2, 1 in turn, then 1 blinking" width="210" height="60">
<p><strong>Starting up</strong><br>4, 3, 2, 1 light in turn (shown slowed). One staying lit means start-up is stuck there.</p>
</div>
<div class="led-card">
<img src="/images/leds/v2-idle.png" alt="V2: LED 1 blinking quickly" width="210" height="60">
<p><strong>Ready and idle</strong><br>Normal: 1 blinks quickly. It may pause while processing commands.</p>
</div>
<div class="led-card">
<img src="/images/leds/v2-moving.png" alt="V2: LED 2 on, LED 1 blinking" width="210" height="60">
<p><strong>Moving</strong><br>2 is on while moves are executed.</p>
</div>
<div class="led-card">
<img src="/images/leds/v2-halted.png" alt="V2: LED 2 blinking slowly, LED 1 quickly" width="210" height="60">
<p><strong>Halted</strong><br>2 blinks slowly (kill button, limit switch...). Fix the cause, then send <mcode>M999</mcode>.</p>
</div>
<div class="led-card">
<img src="/images/leds/v2-sd-card.png" alt="V2: LED 3 on, LEDs 1 and 2 blinking" width="210" height="60">
<p><strong>SD card unreadable</strong><br>3 on, 1 and 2 blink slowly. Check the card is readable and has <code>config.ini</code>.</p>
</div>
<div class="led-card">
<img src="/images/leds/v2-config-error.png" alt="V2: LEDs 1 and 2 blinking slowly" width="210" height="60">
<p><strong>Configuration error</strong><br>1 and 2 blink slowly, 3 off. Bad <code>config.ini</code> or <code>flashme.bin</code>; the serial console says which.</p>
</div>
<div class="led-card">
<img src="/images/leds/v2-hard-fault.png" alt="V2: LEDs 1 to 4 steadily on" width="210" height="60">
<p><strong>Crash: hard fault</strong><br>All four on. Reset and report it.</p>
</div>
<div class="led-card">
<img src="/images/leds/v2-stack-overflow.png" alt="V2: LEDs 1, 3 and 4 steadily on" width="210" height="60">
<p><strong>Crash: stack overflow</strong><br>1, 3 and 4 on: out of task memory. Reset and report it.</p>
</div>
</div>
<p>A separate LED marked <code>MSC</code> blinks while the SD card is being shared with your computer as a USB drive.</p>
</v2>
</versioned>
{:/nomarkdown}
