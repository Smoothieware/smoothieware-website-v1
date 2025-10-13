
# Kill/Pause Button

There are two solutions:

## LED Tactile Button

Solder an [LED Tactile Button](https://www.sparkfun.com/products/10442) on the Smoothieboard.

{::nomarkdown}
<a href="/images/led-tactile-button.png">
  <img src="/images/led-tactile-button.png" alt="Led Tactile Button" style="display:block;margin:20px auto;min-width:640px;max-width:100%;height:auto;"/>
</a>
{:/nomarkdown}

## Simple Button

Wire a simple button on two pins.

{::nomarkdown}
<a href="/images/simple-button.png">
  <img src="/images/simple-button.png" alt="Simple Button" style="display:block;margin:20px auto;min-width:640px;max-width:100%;height:auto;"/>
</a>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>It is highly recommended the pause button be configured as a Kill switch instead</strong><br><br>
  The pause mechanism causes the axis to stop immediately with no deceleration, and when restarted it continues at the speed it was going with no acceleration. This will most likely cause the stepper motors to skip and thus lose position.
</sl-alert>
{:/nomarkdown}

The pause button may be configured as a kill switch instead of pause, this will halt all operations and turn off heaters and pause the host. It can be cleared with a `M999` or reset. To enable a kill button the following is added to the config:

```plaintext
kill_button_enable                        true             # set to true to enable a kill button
kill_button_pin                           2.12             # kill button pin. default is same as pause button 2.12
```

When in the halted state (after kill button is pressed) the play LED will flash rapidly, whereas when paused it flashes slowly.
