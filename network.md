
# Network Interface

Smoothieboard has an RJ45 connector, which can be used to connect the board to your local Ethernet network and communicate with it over TCP/IP. This works similarly to how you would access your 2D printer or other network devices.

## Settings

Smoothie supports Ethernet access, which must be enabled in the [configuration file](/configuring-smoothie.md).

To enable the network, set `network.enable` to `true`.

The IP address can be set statically or set to use DHCP. However, due to buffer size limitations, some DHCP servers are not supported.

Here is an example of a setup using DHCP (meaning that the router automatically assigns an IP address to the Smoothieboard):

```plaintext
# network settings
network.enable                               true            # enable the ethernet network services
network.webserver.enable                     true             # enable the webserver
network.telnet.enable                        true             # enable the telnet server
network.plan9.enable                         true             # enable the plan9 network filesystem
network.ip_address                           auto             # use dhcp to get ip address
```

And an example of how to set up with a static IP:

```plaintext
# network settings
network.enable                               true             # enable the ethernet network services
network.webserver.enable                     true             # enable the webserver
network.telnet.enable                        true             # enable the telnet server
network.plan9.enable                         true             # enable the plan9 network filesystem
network.ip_address                           192.168.3.222    # the IP address
network.ip_mask                              255.255.255.0    # the ip mask
network.ip_gateway                           192.168.3.1      # the gateway address
```

The basic network configuration options can be seen at the end of the [Config Sample](https://github.com/arthurwolf/Smoothie/blob/edge/ConfigSamples/Smoothieboard/config#L312).

If your configuration file does not contain the network section, it probably means the version of Smoothie that shipped with your board is too old. You need to use the latest edge firmware and use the latest configuration file. See [Flashing Smoothie Firmware](/flashing-smoothie-firmware.md) and [Configuring Smoothie](/configuring-smoothie.md).

### All Options

| Option | Example Value | Explanation |
| ------ | ------------- | ----------- |
{% include_relative network-options.md %}

### Wiring

To access your Smoothieboard, you need to connect it to your network by plugging an Ethernet cable into the Smoothieboard at one end and into your Ethernet router at the other end. Please note that you can't connect a Smoothieboard directly to your computer unless you use a special type of cable and configuration on your computer. You want to use a router for this.

Once configured and plugged in, reset the Smoothieboard and wait for it to connect to the network.

## Accessing Smoothie

To access Smoothie over the network, you first need to know its IP address. If you are not sure what IP address Smoothie has been assigned, you can use one of the following methods:

- If you have a panel connected to the Smoothieboard, the panel should display the IP address.
- If you have access to your network's main router's administration interface, it should tell you the IP address of all peripherals connected to it.
- If you are connected to the board via USB, you can use a program like Pronterface to send the `@net` command, which gives you the current IP address.
- If you are running Linux, you can use a command like `nmap -sn 192.168.0.0/24` to find all accessible peripherals on the network.
- **NOTE**: If the IP address shows `173.222.239.190`, then it means that DHCP did not get an IP address assigned. (Try a static IP instead).

You can access Smoothie by using its network services:

- Telnet (port 23) to run commands, stream G-code to Smoothie, or connect from [Pronterface](/pronterface.md) (see below)
- HTTP web server (port 80) allows control from your web browser
- Simple File Transfer Protocol (port 115) allows uploading of files from an SFTP client.
- (**NOT SUPPORTED** needs to be enabled and compiled) Plan9 (9P/Styx) (port 564) provides remote access to the file system from compatible clients (typically Linux)

#### Telnet (port 23)

You can use a terminal to connect to your board via telnet by typing in a terminal:

```plaintext
telnet ip_of_smoothie:23
```

[Pronterface](/pronterface.md) can also connect to Smoothie over the network by using telnet - just enter `ip_of_smoothie:23` instead of the serial port before clicking 'Connect'. Where `ip_of_smoothie` is the IP address of your Smoothie. You must check the box under Settings Menu that says `TCP streaming mode`.

Raw telnet provides console access to run [console commands](/console-commands.md) or G-code, useful network commands here are `net` and `netstat`. See the [smoothie-stream.py example](https://github.com/arthurwolf/Smoothie/blob/edge/smoothie-stream.py) for streaming.

#### Web Server (port 80)

You can access the default user interface by going to this address in your web browser:

```plaintext
http://ip_of_smoothie/
```

Custom web pages can be accessed from the SD card, for example:

```plaintext
http://ip_of_smoothie/sd/webif/index.html
```

> [!SUCCESS]
> Smoothie ships with a very basic web interface, however, you can install better ones by following these instructions: [Installing the new web interface](http://smoothieware.org/install-web-interface.md).

> [!DANGER]
> **DO NOT** use the web interface and telnet at the same time. This will crash Smoothie.

> [!WARNING]
> For Smoothieboards v1, make sure you never access or refresh the web interface while the machine is executing a G-code file. This can result in a crash. Just make sure you don't do it, load the page while it's not running, then use the page but do not refresh or re-load it. This is a limitation of the current firmware, we expect it to be possible to fix in v2.

> [!WARNING]
> If you have several interfaces, or installed a new one, whenever changing from an interface to another, make sure you fully clear your cache. See the documentation for your browser, or google about it, to find exact instructions for your setup.

<div class='panel panel-default wrap_center' style='width:640px;padding:10px '>
<div class='panel-heading'><h4 class='panel-title'>Web interface</h4></div>
<img src='/images/network/new_webif.png' width='620px'><br/>
It allows you to control the machine over the network
</div>

#### Simple File Transfer Protocol (port 115)

Note: [Simple File Transfer Protocol](http://en.wikipedia.org/wiki/Simple_File_Transfer_Protocol) (NOT secure file transfer!) allows uploading of files. See the [smoothie-upload.py example](https://github.com/Smoothieware/Smoothieware/blob/edge/smoothie-upload.py).

#### Plan9 Network Filesystem (port 564)

**NOTE**: Plan9 is not built into Smoothie by default. To include it, rebuild Smoothie with `make PLAN9=1`. See [Compiling Smoothie](/compiling-smoothie.md).

The Plan9 network file system can be used on Linux to directly mount the Smoothieboard over the network. First, activate the option `network.plan9.enable` and restart your Smoothie. After that, you can mount with:

```plaintext
mount -t 9p 192.168.2.120 -o dfltuid=1000,dfltgid=1000 /mnt/smoothie 
```

Now you can access the SD card of the Smoothieboard like a normal filesystem!

The `dfltuid/dfltgid` are the uid/gid of the user which owns the files in the mount. It is recommended to set these to the uid/gid of the user who will write to the filesystem.

If you want, you can also add the filesystem to your `/etc/fstab` as follows:

```plaintext
# /etc/fstab
# <file system> <mount point> <type> <options>                      <dump> <pass>
... your other stuff ...
192.168.1.6     /mnt/smoothie 9p     user,noauto,dfltuid=1000,dfltgid=1000 0      0
```

#### Using a Hosts File

If IP addresses are getting you down, you can address your Smoothie by name if you add a line to your computer's [hosts file](http://en.wikipedia.org/wiki/Hosts_file). For example, assuming your Smoothie's address is 192.168.2.120, you could add:

```plaintext
192.168.2.120        smoothie
```

And then simply use `smoothie:23` in the Port field of Pronterface, and simply `http://smoothie` in your web browser.

This only works from the computer you edit the hosts file on and requires Smoothie to have a constant IP address, either through configuring Smoothie as a static IP or by configuring your DHCP server to always assign Smoothie the same IP address.

## Hardware Requirements

To use the network capabilities of the Smoothieboard (4X and 5X, note the 3X board does not have Ethernet capabilities), an RJ45 Magnetic Modular Jacks aka RJ45 network transformer like the Hanrun HR911105A needs to be soldered onto the board.

They are, for example, available from [RobotSeed](http://robotseed.com/index.php?id_product=16&controller=product&id_lang=2).

> [!PRIMARY]
> Versions of Smoothieboard starting August 2014 have the Ethernet connector soldered by default.

> [!WARNING]
> Note it must be a Mag (Magnetic) Jack; a standard RJ45 connector will not work. The only officially supported connector is the **Hanrun HR911105A**.

## Hostname

You can configure a hostname for the DHCP server as such:

```plaintext
network.ip_address  auto          # use dhcp to get IP address
network.hostname   smoothie1   # optionally set this hostname for dhcp
```

Note the `network.hostname` is optional. (see section 3.14 [RFC 2132](https://www.ietf.org/rfc/rfc2132.txt))

## Net Command

If your network interface doesn't work as it should, you can get some debugging information (such as the current IP) by sending the `net` command (`@net` from Pronterface) via the console (USB or UART).

```plaintext
IP Addr: 192.168.1.100
IP GW: 192.168.1.254
IP mask: 255.255.255.0
MAC Address: 00:1F:11:02:04:C9
```

## API

Creating a custom interface, a script that talks to a Smoothieboard, or helping with Smoothie's web interface (please do!)?

Here's the API you can expect the board to answer to over HTTP.

### GET /sd/file

Retrieves the content of a file from the SD card. You can use this to retrieve the configuration file, but make sure to try both "/sd/config" and "/sd/config.txt" as both are valid filenames.

### GET /query

Returns the same as the "?" command over serial, or the "get status" command over any interface.

Example output:

```plaintext
<Idle|MPos:-700.0000,0.0000,360.0000,0.0000|WPos:-700.0000,0.0000,360.0000|F:4000.0000|T:163.5,0.0|B:178.4,0.0>
```

Much faster than sending "get status" using /command.

### POST /command

Parameter: The command you want to execute as the POST data/parameter.

Returns: Whatever the command returned.

### POST /command_silent

Parameter: The command you want to execute as the POST data/parameter.

Returns: Nothing. Faster than /command, prefer whenever possible.
