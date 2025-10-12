
# Playing G-code files

The Player module allows you to play files from the SD card.

Files are read one line at a time, and each line is executed as if it had been received from a controlling host.

## Important Notes

Mac users beware: it appears that the play function does not accept files that have a space in their name.

Files on sdcard **MUST** be line terminated by `\n` **ONLY**, not `\r` (Note for MAC users).

On the very latest version of smoothieware it will tolerate `\r\n` terminated lines.



## Configuration

Here are all the available options for the Player module:

{% include_relative player-options.md %}

## Commands

### `play`

You can use the `play` command to execute files stored on the SD card.

You must specify a file name and its path, for example:

```gcode
play /sd/gcodefile.gcode
```

By default, the command will be quiet.

If you want the command to output every G-code in the file to the serial port ( the command was called from ), add the `-v` ( verbose ) parameter:

```gcode
play /sd/gcodefile.gcode -v
```

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Pronterface Note:</strong> Pronterface will ignore commands it does not understand, unless you prefix them with <code>@</code>.

  Therefore, send your command as <code>@play /sd/gcodefile.gcode</code> and it will work.
</sl-alert>

<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Repetier Warning:</strong> Repetier will act kind of mean, and ignore any command it doesn't understand.

  Unlike Pronterface it won't give you a method to pass commands anyway.

  You can possibly use the <a href="supported-g-codes">M24</a> G-code instead.
</sl-alert>



### `progress`

When a file is playing, you can use the `progress` command to get a report of the current position in the file, and elapsed time.

### `abort`

You can also use the `abort` command to stop the execution of the file.

### `suspend`

Can be used for either sd card playing or when streaming from Pronterface or Octoprint.

Will suspend a print in progress. It does the following:



1. Send pause to upstream host, or pause if printing from sd
2. Wait for empty queue
3. Save the current position, extruder position, temperatures - any state that would need to be restored
4. --retract by specified amount either on command line or in config-- - not implemented yet
5. Turn off heaters (unless the config has `leave_heaters_on_suspend true`)
6. Optionally run after_suspend gcode (set in config defines gcode to run eg. `after_suspend G91G0E20G90`)

User may jog or remove and insert filament at this point, extruding or retracting as needed.

This could be triggered by a Switch module to setup a simple out of filament detector.

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>NOTE:</strong> Issuing a home after a suspend will cancel the suspend and you will not be able to resume.
</sl-alert>

<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Performance Note:</strong> The queue must drain before it will suspend. If you need to have the system suspend quicker the only way to do it is to set the config variable <code>mm_per_line_segment 1</code>. This will mean it will stop within 32mm, but there is a performance penalty for segmenting when you do not need to.
</sl-alert>



{% include_relative stopping-smoothie.md %}

### `resume`

Will resume a suspended print. It does the following:

1. Restore the temperatures and wait for them to get up to temp
2. Optionally run before_resume gcode if specified
3. Restore the position it was at and E and any other saved state
4. Resume sd print or send resume upstream

## G-codes

The following G-codes are supported by the Player module:



- `M21` : Initialize the SD card. This does nothing in Smoothie but is kept for compatibility
- `M23` : Select a file, for example : `M23 file.gcode`
- `M24` : Start or resume SD card print
- `M25` : Pause SD card print 
- `M26` : Abort a SD card print
- `M27` : Report print progress
- `M32` : Select a file, and start playing it, for example : `M32 file.gcode`
- `M600` : Suspend print in progress (use console command resume or M601 to continue)
- `M600.1` : Suspend print in progress, but leave heaters on
- `M601` : Resume print after suspend
