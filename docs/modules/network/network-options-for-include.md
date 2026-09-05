
{::nomarkdown}
<table class="config-options-table">
    <thead>
        <tr>
            <th style="width: 25%;">V1 Setting</th>
            <th style="width: 25%;">V2 Setting</th>
            <th style="width: 50%;">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><setting no-version v1="network.enable"></setting></td>
            <td><setting no-version v2="network.enable"></setting></td>
            <td class="description-cell">
                <tag type="critical">Master enable</tag>
                <tag type="module">Network</tag>
                <p>This turns Ethernet networking on or off for the whole board.</p>
                <p>Turn it off and the network module doesn't even get loaded, so you get about 8KB of RAM back.</p>
                <p>You need this set to <code>true</code> to use any network feature: webserver, telnet, Plan9, SFTP, all of it.</p>
                <tag type="performance">Frees ~8KB RAM when disabled</tag>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="network.webserver.enable"></setting></td>
            <td><setting no-version v2="network.webserver_enable"></setting></td>
            <td class="description-cell">
                <tag type="service">HTTP</tag>
                <tag type="default">false</tag>
                <p>Set this to <code>true</code> and it turns on the web server on port 80, giving you a control and upload web interface.</p>
                <p>From there you can control the machine, upload files, and check its status from any browser on your network.</p>
                <tag type="note">Sample configurations commonly set this to true</tag>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="network.telnet.enable"></setting></td>
            <td><setting no-version v2="network.shell_enable"></setting></td>
            <td class="description-cell">
                <tag type="service">Telnet</tag>
                <tag type="default">false</tag>
                <p>Set this to <code>true</code> and it turns on telnet on port 23, which works pretty much like a serial connection.</p>
                <p>It gives you command-line access to Smoothie over the network, handy for streaming G-code or running console commands remotely.</p>
                <tag type="note">Sample configurations commonly set this to true</tag>
                <tag type="note">Renamed to shell_enable in V2</tag>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="network.plan9.enable"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="service">Plan9</tag>
                <tag type="default">false</tag>
                <tag type="advanced">Requires custom build</tag>
                <p>Set this to <code>true</code> and it turns on the Plan9 (9P/Styx) network filesystem on port 564, so you can mount the Smoothieboard's SD card as a network filesystem on Linux.</p>
                <p>It gives you direct filesystem access, similar to NFS or SMB.</p>
                <tag type="critical">NOT built into Smoothie by default - requires rebuild with PLAN9=1</tag>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="network.ip_address"></setting></td>
            <td><setting no-version v2="network.ip_address"></setting></td>
            <td class="description-cell">
                <tag type="network">IP Configuration</tag>
                <tag type="default">auto</tag>
                <p>This sets how the Smoothieboard gets its IP address.</p>
                <p>Set it to <code>auto</code> and it uses DHCP to configure itself, or give it a static IP address, like <code>192.168.1.100</code>.</p>
                <p>If you go with a static IP, you also need to set <code>network.ip_mask</code> and <code>network.ip_gateway</code>.</p>
                <tag type="note">If shows 173.222.239.190, DHCP failed - use static IP instead</tag>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="network.ip_mask"></setting></td>
            <td><setting no-version v2="network.ip_mask"></setting></td>
            <td class="description-cell">
                <tag type="network">IP Configuration</tag>
                <tag type="default">255.255.255.0</tag>
                <p>This is the subnet mask for a static IP setup. It tells the board which part of the IP address is the network and which part is the host.</p>
                <p>It only matters when <code>network.ip_address</code> is set to a static IP, not <code>auto</code>.</p>
                <p>With DHCP, this setting is ignored, the DHCP server hands you a subnet mask automatically.</p>
                <tag type="example">255.255.255.0 = Class C network (254 hosts)</tag>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="network.ip_gateway"></setting></td>
            <td><setting no-version v2="network.ip_gateway"></setting></td>
            <td class="description-cell">
                <tag type="network">IP Configuration</tag>
                <tag type="default">192.168.1.254</tag>
                <p>This is the default gateway (your router) IP address for a static IP setup, it's what routes traffic outside your local network.</p>
                <p>It only matters when <code>network.ip_address</code> is set to a static IP, not <code>auto</code>.</p>
                <p>With DHCP, the gateway comes from the DHCP server automatically.</p>
                <tag type="example">Common home router: 192.168.1.1</tag>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="network.mac_override"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="network">MAC Address</tag>
                <tag type="advanced">Rarely needed</tag>
                <p>This lets you set the Ethernet MAC (Media Access Control) address by hand.</p>
                <p>By default, Smoothieboard generates a unique one from the CPU's serial number, run through a cryptographic hash.</p>
                <p>You'd only set this if you're running into MAC address conflicts on your network, or need to keep a specific MAC address after swapping hardware.</p>
                <tag type="critical">Each device on a network must have a unique MAC address</tag>
                <tag type="note">Auto-generated format: 00:1F:11:02:04:xx</tag>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="network.hostname"></setting></td>
            <td><setting no-version v2="network.hostname"></setting></td>
            <td class="description-cell">
                <tag type="network">DHCP</tag>
                <tag type="convenience">DNS Name</tag>
                <p>This sets a hostname that gets sent to the DHCP server when the board asks for an IP address.</p>
                <p>Some DHCP servers register it in local DNS, so you can reach the Smoothieboard by name, like <code>http://smoothie-cnc/</code>, instead of by IP.</p>
                <p>It only applies when <code>network.ip_address</code> is set to <code>auto</code> (DHCP mode). It does nothing with a static IP.</p>
                <tag type="note">Hostname support depends on DHCP server capabilities</tag>
                <tag type="example">smoothie-cnc, laser-cutter, printer3d</tag>
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
