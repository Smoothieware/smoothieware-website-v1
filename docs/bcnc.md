# bCNC

{::nomarkdown}
<a href="/images/coding.png">
  <img src="/images/coding.png" alt="Coding" width="300" height="300" style="float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

[bCNC](https://github.com/vlachoudis/bCNC) is a program that makes it convenient to use Smoothie as a CNC mill or laser cutter, and better yet, it is free!

It also comes with several features useful for CNC and laser work, such as a work coordinate system, basic CAM, and a remote pendant web app.

{::nomarkdown}
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Be Careful</strong>: Failure to properly configure bCNC for use with Smoothie can result in your machine crashing, parts breaking, and being sad. Be careful and check your work.
</sl-alert>
{:/nomarkdown}

## Getting Started

The first step is to update your SmoothieBoard to the latest, edge, version of the CNC firmware build, as support for bCNC is relatively new.

Remember, before you upgrade to a new firmware, backup your config, config-override, and old firmware.

See [flashing firmware](flashing-smoothie-firmware) for more help.

The second step is to get bCNC, which is available at [bCNC's GitHub repository](https://github.com/vlachoudis/bCNC).

Simply download and extract the archive of bCNC and run `bCNC.bat` after installing all of the dependencies as listed on the ReadMe.

Once installed, select Smoothieboard from the drop-down menu on the communication panel under the File tab and edit the machine configuration under the Tools tab.

Once all of these things are done, you are ready to use bCNC with Smoothie!

## Compatibility Note

Unfortunately, bCNC is not 100% compatible with Smoothie.

It mostly works, but feedhold does not work as expected, and after you do an abort or stop, bCNC may need to be exited and restarted as it currently does not handle the way Smoothie does abort properly.
