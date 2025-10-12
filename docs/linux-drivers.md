
# Linux + Smoothie == ❤️

This is optional, but makes things more convenient.

## udev rules

Create a file `/etc/udev/rules.d/90-smoothie.rules` and add the following to it:

```bash
SUBSYSTEM=="usb", ATTRS{idVendor}=="1d50", ATTRS{idProduct}=="6015", MODE="0666"
SUBSYSTEM=="tty", ATTRS{idVendor}=="1d50", ATTRS{idProduct}=="6015", SYMLINK+="smoothie%n"
```

After you've done that, you need to reload the udev rules to get them working:

```bash
udevadm control --reload-rules
# or
sudo service udev restart # ubuntu
```

Under Fedora, Smoothieboard is handled by the modem manager (as an Openmoko).

To avoid this, add the following to the udev rule:

```bash
ENV{ID_MM_DEVICE_IGNORE}="1"
```

Then plug in Smoothie, and it should appear as `/dev/smoothie0`.

If you have two USB serial devices configured, the second one will be `/dev/smoothie1`.

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  The distribution-specific sections need to be verified for other distributions.
</sl-alert>
{:/nomarkdown}

### Fedora, Ubuntu, Debian, and derivatives

If you want to be able to communicate with `/dev/smoothie0` using your regular non-superuser login, then you need to add your user to the `dialout` group.

To be able to flash via DFU as a regular user, add the user to the `plugdev` group too.

This can be done with:

```bash
sudo adduser <username> dialout
sudo adduser <username> plugdev
```

or by editing the group file directly:

```bash
sudo vigr
```

and adding the username to the end of the line for `dialout` and `plugdev`.

### Arch

To be able to communicate with the Smoothie on Arch Linux, you need to be in the `uucp` group.

```bash
usermod -a -G uucp <username>
```

Replace `<username>` with the name of your user.

To be able to upload firmware using `make upload` without needing to use `sudo`, you need the udev rule shown above.

It sets the permissions for all users to `rw` (0666).

## PID problems

If your PID and VIDs are `0000`, take a look at [this forum post](http://smoothieware.org/forum/t-1047411?from=email#post-2184547).

## Kernel versions

One user has found that one kernel version caused his machine to disconnect, while other kernel versions didn't.

Here's what his tests showed:

- `Linux octoprint 4.19.0-8-amd64 #1 SMP Debian 4.19.98-1 (2020-01-26) x86_64 GNU/Linux` works
- `Linux zen 5.3.18-2-pve #1 SMP PVE 5.3.18-2 (Sat, 15 Feb 2020 15:11:52 +0100) x86_64 GNU/Linux`

If you have weird Linux issues where it disconnects, maybe try a different kernel version and see if that helps.
