
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
                Master enable switch for the entire Ethernet network functionality. When disabled, the network module is completely unloaded to free system resources (approximately 8KB RAM). Must be set to <code>true</code> to use any network features including webserver, telnet, Plan9, or SFTP services.
                <tag type="performance">Frees ~8KB RAM when disabled</tag>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="network.webserver.enable"></setting></td>
            <td><setting no-version v2="network.webserver_enable"></setting></td>
            <td class="description-cell">
                <tag type="service">HTTP</tag>
                <tag type="default">false</tag>
                If set to <code>true</code>, enable the web server service on port 80, which provides a control and upload web interface. The web interface allows you to control the machine, upload files, and monitor status from any web browser on your network.
                <tag type="note">Sample configurations commonly set this to true</tag>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="network.telnet.enable"></setting></td>
            <td><setting no-version v2="network.shell_enable"></setting></td>
            <td class="description-cell">
                <tag type="service">Telnet</tag>
                <tag type="default">false</tag>
                If set to <code>true</code>, enable the telnet service on port 23, which behaves much like a Serial interface. Telnet provides command-line access to Smoothie over the network, useful for streaming G-code or running console commands remotely.
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
                If set to <code>true</code>, enable the Plan9 (9P/Styx) network filesystem on port 564, which allows mounting the Smoothieboard SD card as a network filesystem on Linux systems. This provides direct filesystem access similar to NFS or SMB.
                <tag type="critical">NOT built into Smoothie by default - requires rebuild with PLAN9=1</tag>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="network.ip_address"></setting></td>
            <td><setting no-version v2="network.ip_address"></setting></td>
            <td class="description-cell">
                <tag type="network">IP Configuration</tag>
                <tag type="default">auto</tag>
                Configures the IP address assignment method for the Smoothieboard. Set to <code>auto</code> to use DHCP for automatic configuration, or specify a static IP address (e.g., <code>192.168.1.100</code>). When using a static IP, you must also configure <code>network.ip_mask</code> and <code>network.ip_gateway</code>.
                <tag type="note">If shows 173.222.239.190, DHCP failed - use static IP instead</tag>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="network.ip_mask"></setting></td>
            <td><setting no-version v2="network.ip_mask"></setting></td>
            <td class="description-cell">
                <tag type="network">IP Configuration</tag>
                <tag type="default">255.255.255.0</tag>
                Defines the subnet mask for static IP configuration. The netmask determines which portion of the IP address identifies the network and which portion identifies the host. Only used when <code>network.ip_address</code> is set to a static IP (not <code>auto</code>). When using DHCP, this setting is ignored and the subnet mask is provided automatically by the DHCP server.
                <tag type="example">255.255.255.0 = Class C network (254 hosts)</tag>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="network.ip_gateway"></setting></td>
            <td><setting no-version v2="network.ip_gateway"></setting></td>
            <td class="description-cell">
                <tag type="network">IP Configuration</tag>
                <tag type="default">192.168.1.254</tag>
                Specifies the default gateway (router) IP address for static IP configuration. The gateway is used for routing traffic outside the local network. Only used when <code>network.ip_address</code> is set to a static IP (not <code>auto</code>). With DHCP, the gateway is provided automatically by the DHCP server.
                <tag type="example">Common home router: 192.168.1.1</tag>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="network.mac_override"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="network">MAC Address</tag>
                <tag type="advanced">Rarely needed</tag>
                Allows manual override of the Ethernet MAC (Media Access Control) address. By default, Smoothieboard auto-generates a unique MAC address based on the CPU's serial number using a cryptographic hash. Only set this if you experience MAC address conflicts on your network or need to preserve a specific MAC address after hardware replacement.
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
                Sets a hostname that is sent to the DHCP server during IP address requests. Some DHCP servers register this hostname in local DNS, allowing you to access the Smoothieboard by name (e.g., <code>http://smoothie-cnc/</code>) instead of IP address. Only used when <code>network.ip_address</code> is set to <code>auto</code> (DHCP mode). Has no effect with static IP configuration.
                <tag type="note">Hostname support depends on DHCP server capabilities</tag>
                <tag type="example">smoothie-cnc, laser-cutter, printer3d</tag>
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
