
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
                <p>Must be set to <raw>true</raw> to use any network feature. V1 and V2 expose different service sets, described on the Network page.</p>
                <tag type="performance">Frees ~8KB RAM when disabled</tag>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="network.webserver.enable"></setting></td>
            <td><setting no-version v2="network.webserver_enable"></setting></td>
            <td class="description-cell">
                <tag type="service">HTTP</tag>
                <tag type="default">false</tag>
                <p>If set to <raw>true</raw>, enables the HTTP server on port 80. It serves static files from <raw>/sd/www</raw> and exposes the <raw>/command</raw> and <raw>/upload</raw> WebSocket endpoints.</p>
                <p>The service itself does not provide authentication or encryption. Restrict it to a trusted network.</p>
                <tag type="note">Sample configurations commonly set this to true</tag>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="network.telnet.enable"></setting></td>
            <td><setting no-version v2="network.shell_enable"></setting></td>
            <td class="description-cell">
                <tag type="service">Network shell</tag>
                <tag type="default">false</tag>
                <p>If set to <raw>true</raw>, enables the raw network shell on port 23, which behaves much like a serial interface and supports up to three clients.</p>
                <p>The protocol is unencrypted and has no authentication. Use it only on a trusted network.</p>
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
                <tag type="default">V1: 192.168.1.254; V2: 192.168.1.1</tag>
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
        <tr>
            <td><tag type="unavailable">Not documented for V1 here</tag></td>
            <td><setting no-version v2="network.dns_server"></setting></td>
            <td class="description-cell">
                <tag type="network">DNS</tag>
                <tag type="default">auto</tag>
                <p>Uses the DHCP-provided DNS server when set to <raw>auto</raw>, or sets an explicit DNS-server address.</p>
                <p>DNS is required when <setting v2="network.ntp_server"></setting>, <setting v2="network.firmware_url"></setting>, or a <raw>wget</raw> URL uses a hostname.</p>
            </td>
        </tr>
        <tr>
            <td><tag type="unavailable">Not in V1</tag></td>
            <td><setting no-version v2="network.ftp_enable"></setting></td>
            <td class="description-cell">
                <tag type="service">FTP</tag>
                <tag type="default">false</tag>
                <p>Enables the Smoothieware V2 FTP server on TCP port 21.</p>
                <p>This is unencrypted standard FTP. It is neither SFTP nor the V1 Simple File Transfer Protocol service on port 115.</p>
            </td>
        </tr>
        <tr>
            <td><tag type="unavailable">Not in V1</tag></td>
            <td><setting no-version v2="network.ntp_enable"></setting></td>
            <td class="description-cell">
                <tag type="service">NTP</tag>
                <tag type="default">true</tag>
                <p>Requests the time from an NTP server when the V2 network starts and writes it to the real-time clock.</p>
                <p>The network and DNS configuration must work before hostname-based NTP servers can resolve.</p>
            </td>
        </tr>
        <tr>
            <td><tag type="unavailable">Not in V1</tag></td>
            <td><setting no-version v2="network.ntp_server"></setting></td>
            <td class="description-cell">
                <tag type="service">NTP</tag>
                <tag type="default">pool.ntp.org</tag>
                <p>Sets the hostname of the NTP server used by Smoothieware V2.</p>
            </td>
        </tr>
        <tr>
            <td><tag type="unavailable">Not in V1</tag></td>
            <td><setting no-version v2="network.timezone"></setting></td>
            <td class="description-cell">
                <tag type="service">NTP</tag>
                <tag type="default">0</tag>
                <p>Applies a fixed integer offset in hours to the NTP result before setting the V2 real-time clock.</p>
                <p>It does not implement daylight-saving rules or fractional-hour time zones. Use zero to keep the clock on UTC.</p>
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
