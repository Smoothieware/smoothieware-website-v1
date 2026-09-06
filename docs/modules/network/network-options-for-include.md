
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
                <p>Master enable switch for the entire Ethernet network functionality.</p>
                <p>When disabled, the network module is completely unloaded to free system resources (approximately 8KB RAM).</p>
                <p>Must be set to <raw>true</raw> to use any network features, including webserver, telnet, Plan9, or SFTP services.</p>
                <tag type="performance">Frees ~8KB RAM when disabled</tag>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="network.webserver.enable"></setting></td>
            <td><setting no-version v2="network.webserver_enable"></setting></td>
            <td class="description-cell">
                <tag type="service">HTTP</tag>
                <tag type="default">false</tag>
                <p>If set to <raw>true</raw>, enables the web server service on port 80, which provides a control and upload web interface.</p>
                <p>The web interface lets you control the machine, upload files, and monitor status from any web browser on your network.</p>
                <tag type="note">Sample configurations commonly set this to true</tag>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="network.telnet.enable"></setting></td>
            <td><setting no-version v2="network.shell_enable"></setting></td>
            <td class="description-cell">
                <tag type="service">Telnet</tag>
                <tag type="default">false</tag>
                <p>If set to <raw>true</raw>, enables the telnet service on port 23, which behaves much like a Serial interface.</p>
                <p>Telnet provides command-line access to Smoothie over the network, useful for streaming G-code or running console commands remotely.</p>
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
                <p>If set to <raw>true</raw>, enables the Plan9 (9P/Styx) network filesystem on port 564, which allows mounting the Smoothieboard SD card as a network filesystem on Linux systems.</p>
                <p>Provides direct filesystem access similar to NFS or SMB.</p>
                <tag type="critical">NOT built into Smoothie by default - requires rebuild with PLAN9=1</tag>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="network.ip_address"></setting></td>
            <td><setting no-version v2="network.ip_address"></setting></td>
            <td class="description-cell">
                <tag type="network">IP Configuration</tag>
                <tag type="default">auto</tag>
                <p>Configures the IP address assignment method for the Smoothieboard.</p>
                <p>Set to <raw>auto</raw> to use DHCP for automatic configuration, or specify a static IP address (e.g., <raw>192.168.1.100</raw>).</p>
                <p>When using a static IP, you must also configure <setting v1="network.ip_mask" v2="network.ip_mask"></setting> and <setting v1="network.ip_gateway" v2="network.ip_gateway"></setting>.</p>
                <tag type="note">If shows 173.222.239.190, DHCP failed - use static IP instead</tag>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="network.ip_mask"></setting></td>
            <td><setting no-version v2="network.ip_mask"></setting></td>
            <td class="description-cell">
                <tag type="network">IP Configuration</tag>
                <tag type="default">255.255.255.0</tag>
                <p>Defines the subnet mask for static IP configuration — the netmask determines which portion of the IP address identifies the network and which portion identifies the host.</p>
                <p>Only used when <setting v1="network.ip_address" v2="network.ip_address"></setting> is set to a static IP (not <raw>auto</raw>).</p>
                <p>With DHCP, this setting is ignored and the subnet mask is provided automatically by the DHCP server.</p>
                <tag type="example">255.255.255.0 = Class C network (254 hosts)</tag>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="network.ip_gateway"></setting></td>
            <td><setting no-version v2="network.ip_gateway"></setting></td>
            <td class="description-cell">
                <tag type="network">IP Configuration</tag>
                <tag type="default">192.168.1.254</tag>
                <p>Specifies the default gateway (router) IP address for static IP configuration — used for routing traffic outside the local network.</p>
                <p>Only used when <setting v1="network.ip_address" v2="network.ip_address"></setting> is set to a static IP (not <raw>auto</raw>).</p>
                <p>With DHCP, the gateway is provided automatically by the DHCP server.</p>
                <tag type="example">Common home router: 192.168.1.1</tag>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="network.mac_override"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="network">MAC Address</tag>
                <tag type="advanced">Rarely needed</tag>
                <p>Allows manual override of the Ethernet MAC (Media Access Control) address.</p>
                <p>By default, Smoothieboard auto-generates a unique MAC address based on the CPU's serial number, using a cryptographic hash.</p>
                <p>Only set this if you experience MAC address conflicts on your network, or need to preserve a specific MAC address after hardware replacement.</p>
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
                <p>Sets a hostname that is sent to the DHCP server during IP address requests.</p>
                <p>Some DHCP servers register this hostname in local DNS, letting you access the Smoothieboard by name (e.g., <raw>http://smoothie-cnc/</raw>) instead of by IP address.</p>
                <p>Only used when <setting v1="network.ip_address" v2="network.ip_address"></setting> is set to <raw>auto</raw> (DHCP mode); has no effect with static IP configuration.</p>
                <tag type="note">Hostname support depends on DHCP server capabilities</tag>
                <tag type="example">smoothie-cnc, laser-cutter, printer3d</tag>
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
