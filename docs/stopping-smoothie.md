
> [!INFO]
> **Stopping Smoothie**
>
> These are the different ways of stopping Smoothie:
>
> | Command | G-code | Movement | Heaters | File playing | Recoverable | Documentation | Explanation |
> | ------- | ------ | -------- | ------- | ------------ | ----------- | ------------- | ----------- |
> | `abort` | `M26` | Stops an SDCARD print immediately | Not affected | Aborts | Position maintained, but file must be restarted | [Player](player.md) | Stops the execution of a file being played from SDCARD, it will complete the current gcode, but stop immediately after that, the rest of the queued commands are discarded. It attempts to maintain the correct position after the abort. |
> | `suspend` | `M600` | Stops once queue is empty | Turned off if option enabled (default) | Paused, can be resumed | Yes, with `resume` or `M601`, position maintained | [Player](player.md) | Suspends the execution of a file being played from SDCARD or being streamed from a host (upstream support required currently pronterface and octoprint support it, otherwise host needs to be manually paused), all state is saved and jogging and extruding is allowed. Mainly used for mid print filament change, or filament out detection. `M601` resumes the print or the `resume` command |
> | No command, but there is a configurable «kill» button | `M112` | Stops instantly if kill button pressed, if issued from host has to wait for the receive buffer to have room. | Turned off | aborted | No, position is lost, home will be required | [supported-g-codes](supported-g-codes.md) | Instantly stops all operations, printer fully halts until `M999` is sent. Position is lost. |
> | Sending Control-X to smoothie over the serial port or USB serial port | | should work at any time even when streaming, does the same as the kill button | Turned off | aborted | No, position is lost, home will be required | | Instantly stops all operations, printer fully halts until `M999` is sent (or `$X`). Position is lost. |
>
> If the kill button is pressed (or there is a temperature fault, `M112` is issued, a limit switch is hit or other error) the system enters the Halt state, in this state the play led flashes, and the state can be cleared by issuing `M999` or holding the flashing kill button for 2 seconds (it can also be cleared from the LCD panel). While in the Halt state any command issued from the host will get a `!!` response (with a few exceptions). The PSU may be turned off when Halt is entered if there is a psu Switch defined.
>
> All commands can be triggered by a button or a sensor if a [Switch](switch.md) module is configured to do so.
>
> You can read more about the kill button at [Smoothie kill button](killbutton.md)
