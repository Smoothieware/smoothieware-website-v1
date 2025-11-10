---
permalink: /network-options
---

# Network Configuration Options

This page lists all network-related configuration options for Smoothieware.

For more information about network setup, see the [Network](network) guide.

## Configuration Reference

| Option | Default Value | Description |
| ------ | ------------- | ----------- |
| <setting v1="network.enable" v2="network.enable"></setting> | `true` | If set to `true`, enable the Ethernet network services |
| <setting v1="network.webserver.enable" v2="network.webserver_enable"></setting> | `false` | If set to `true`, enable the web server service, on port 80, which provides a control and upload web interface. Note: Sample configurations commonly set this to `true`. |
| <setting v1="network.telnet.enable" v2="network.shell_enable"></setting> | `false` | If set to `true`, enable the telnet service, on port 23, which behaves much like a Serial interface. Note: Sample configurations commonly set this to `true`. |
| <setting v1="network.plan9.enable"></setting> | `false` | If set to `true`, enable the plan9 network filesystem on port 564 which allows mounting the Smoothieboard |
| <setting v1="network.ip_address" v2="network.ip_address"></setting> | `auto` | If set to `auto`, use DHCP to request an IP address. If set to an IP address, use that address as a static IP. |
| <setting v1="network.ip_mask" v2="network.ip_mask"></setting> | `255.255.255.0` | If using a static IP, define the mask for the network. |
| <setting v1="network.ip_gateway" v2="network.ip_gateway"></setting> | `192.168.1.254` | If using a static IP, define the gateway for the network. |
| <setting v1="network.mac_override"></setting> | `AB.AB.AB.AB.AB.AB` | If set, override the MAC address for the Ethernet interface. Only set this if you have a conflict on your network. |
| <setting v1="network.hostname" v2="network.hostname"></setting> | `shapeoko17` | Some DHCP servers accept a hostname for the machine, which then allows you to connect to it using that name instead of its IP. |
