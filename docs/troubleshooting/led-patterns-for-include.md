{::nomarkdown}
<versioned orientation="vertical">
<v1>
<p>The status LEDs are near the center of the board: <code>VBB</code> (red, motor power), <code>3.3V</code> (orange, logic power), and <code>1</code> to <code>4</code> (green). Compare the green ones with these animations.</p>
<div style="margin:1.5rem 0">
  <strong>Normal operation</strong><br>
  <img src="/images/leds/v1-normal.gif" alt="V1: LEDs 1 and 4 on, 2 and 3 blinking" width="520" style="max-width:100%;height:auto;border-radius:6px;margin:.4rem 0"><br>
  <span>LEDs 1 and 4 stay on, LEDs 2 and 3 blink. The firmware is running.</span>
</div>
<div style="margin:1.5rem 0">
  <strong>SD card problem</strong><br>
  <img src="/images/leds/v1-sd-card.gif" alt="V1: LED 1 on, 2 and 3 blinking, 4 off" width="520" style="max-width:100%;height:auto;border-radius:6px;margin:.4rem 0"><br>
  <span>LED 1 stays on, LEDs 2 and 3 blink, LED 4 stays off. The firmware is running but could not use the SD card. Reinsert the card, or <a href="/sd-card">set up another one</a>.</span>
</div>
<div style="margin:1.5rem 0">
  <strong>Crash or no firmware: all four on, nothing blinking</strong><br>
  <img src="/images/leds/v1-frozen-all.gif" alt="V1: LEDs 1 to 4 steadily on" width="520" style="max-width:100%;height:auto;border-radius:6px;margin:.4rem 0"><br>
  <span>The firmware stopped, or none was ever flashed. <a href="/flashing-smoothie-firmware">Flash the firmware again</a>.</span>
</div>
<div style="margin:1.5rem 0">
  <strong>Crash: only 1 and 4 on, nothing blinking</strong><br>
  <img src="/images/leds/v1-frozen-1-4.gif" alt="V1: LEDs 1 and 4 steadily on" width="520" style="max-width:100%;height:auto;border-radius:6px;margin:.4rem 0"><br>
  <span>The firmware has stopped. Reset the board, and flash the firmware again if it keeps happening.</span>
</div>
<div style="margin:1.5rem 0">
  <strong>Watchdog timeout: 2 and 4 on</strong><br>
  <img src="/images/leds/v1-watchdog.gif" alt="V1: LEDs 2 and 4 steadily on" width="520" style="max-width:100%;height:auto;border-radius:6px;margin:.4rem 0"><br>
  <span>The firmware stopped responding and its watchdog (a safety timer) caught it. Reset the board and report what it was doing.</span>
</div>
<div style="margin:1.5rem 0">
  <strong>No bootloader: 1 and 3 on, nothing blinking</strong><br>
  <img src="/images/leds/v1-no-bootloader.gif" alt="V1: LEDs 1 and 3 steadily on" width="520" style="max-width:100%;height:auto;border-radius:6px;margin:.4rem 0"><br>
  <span>The board may have no bootloader (the small program that loads the firmware). Contact whoever sold you the board.</span>
</div>
</v1>
<v2>
<p>On Smoothieboard V2 Prime, one row of LEDs is labelled <code>VFET</code>, <code>VMOT</code> and <code>3.3V</code> (power present) followed by <code>1</code> to <code>4</code> (status). Compare the four status LEDs with these animations. The colours in the drawings are only for readability.</p>
<div style="margin:1.5rem 0">
  <strong>Starting up</strong><br>
  <img src="/images/leds/v2-boot.gif" alt="V2: LEDs 4, 3, 2, 1 in turn, then 1 blinking" width="520" style="max-width:100%;height:auto;border-radius:6px;margin:.4rem 0"><br>
  <span>LED 4 lights first, then 3, 2 and 1 as each start-up stage is reached, then LED 1 starts blinking. Shown slowed down. If one LED stays lit, start-up is stuck at that stage.</span>
</div>
<div style="margin:1.5rem 0">
  <strong>Ready and idle</strong><br>
  <img src="/images/leds/v2-idle.gif" alt="V2: LED 1 blinking quickly" width="520" style="max-width:100%;height:auto;border-radius:6px;margin:.4rem 0"><br>
  <span>LED 1 blinks quickly. This is the normal state. It can pause or flicker while commands are being processed.</span>
</div>
<div style="margin:1.5rem 0">
  <strong>Moving</strong><br>
  <img src="/images/leds/v2-moving.gif" alt="V2: LED 2 on, LED 1 blinking" width="520" style="max-width:100%;height:auto;border-radius:6px;margin:.4rem 0"><br>
  <span>LED 2 is on while there are moves being executed.</span>
</div>
<div style="margin:1.5rem 0">
  <strong>Halted</strong><br>
  <img src="/images/leds/v2-halted.gif" alt="V2: LED 2 blinking slowly, LED 1 quickly" width="520" style="max-width:100%;height:auto;border-radius:6px;margin:.4rem 0"><br>
  <span>LED 2 blinks slowly while LED 1 keeps blinking quickly. The machine is in the halt (alarm) state, for example after a kill button press or a limit switch hit. Fix the cause, then clear it with <mcode>M999</mcode>.</span>
</div>
<div style="margin:1.5rem 0">
  <strong>SD card or config.ini cannot be read</strong><br>
  <img src="/images/leds/v2-sd-card.gif" alt="V2: LED 3 on, LEDs 1 and 2 blinking" width="520" style="max-width:100%;height:auto;border-radius:6px;margin:.4rem 0"><br>
  <span>LED 3 stays on while LEDs 1 and 2 blink slowly. Check that the card is inserted, readable, and contains <code>config.ini</code>.</span>
</div>
<div style="margin:1.5rem 0">
  <strong>Configuration error, or bad flashme.bin</strong><br>
  <img src="/images/leds/v2-config-error.gif" alt="V2: LEDs 1 and 2 blinking slowly" width="520" style="max-width:100%;height:auto;border-radius:6px;margin:.4rem 0"><br>
  <span>LEDs 1 and 2 blink slowly (together or alternately) and LED 3 is off. There is an error in <code>config.ini</code>, or the <code>flashme.bin</code> update file could not be flashed. The serial console says which.</span>
</div>
<div style="margin:1.5rem 0">
  <strong>Firmware crash (hard fault): all four on</strong><br>
  <img src="/images/leds/v2-hard-fault.gif" alt="V2: LEDs 1 to 4 steadily on" width="520" style="max-width:100%;height:auto;border-radius:6px;margin:.4rem 0"><br>
  <span>The firmware has crashed. Reset the board and report what it was doing.</span>
</div>
<div style="margin:1.5rem 0">
  <strong>Firmware crash (stack overflow): 1, 3 and 4 on</strong><br>
  <img src="/images/leds/v2-stack-overflow.gif" alt="V2: LEDs 1, 3 and 4 steadily on" width="520" style="max-width:100%;height:auto;border-radius:6px;margin:.4rem 0"><br>
  <span>The firmware ran out of working memory in one of its tasks. Reset the board and report it.</span>
</div>
<p>A separate LED marked <code>MSC</code> blinks while the SD card is being shared with your computer as a USB drive.</p>
</v2>
</versioned>
{:/nomarkdown}
