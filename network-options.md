
# Network Options

| Option | Default Value | Description |
| ------ | ------------- | ----------- |
| `network.enable` | `true` | If set to `true`, enable the Ethernet network services |
| `network.webserver.enable` | `true` | If set to `true`, enable the web server service, on port 80, which provides a control and upload web interface |
| `network.telnet.enable` | `true` | If set to `true`, enable the telnet service, on port 23, which behaves much like a Serial interface |
| `network.plan9.enable` | `false` | If set to `true`, enable the plan9 network filesystem on port 564 which allows mounting the Smoothieboard |
| `network.ip_address` | `auto` | If set to `auto`, use DHCP to request an IP address. If set to an IP address, use that address as a static IP. |
| `network.ip_mask` | `255.255.255.0` | If using a static IP, define the mask for the network. |
| `network.ip_gateway` | `192.168.3.1` | If using a static IP, define the gateway for the network. |
| `network.mac_override` | `AB.AB.AB.AB.AB.AB` | If set, override the MAC address for the Ethernet interface. Only set this if you have a conflict on your network. |
| `network.hostname` | `shapeoko17` | Some DHCP servers accept a hostname for the machine, which then allows you to connect to it using that name instead of its IP. |
