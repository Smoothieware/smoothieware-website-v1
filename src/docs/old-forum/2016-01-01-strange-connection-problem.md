# Strange connection problem

*Original post date: 2016-01-01*

---

及其他用户讨论了通过以太网进行流媒体传输的问题。用户777777777提到，使用Pronterface的流媒体选项或GitHub上的smoothie-stream.py脚本可以实现流畅的传输，但需要正确配置。用户arthurwolf指出，如果主机在每行后等待确认（OK），会导致延迟，这在以太网传输中是不必要的。

用户777777777还提到，使用OctoPrint的流媒体功能可以避免这个问题，因为它不会等待确认。此外，用户wolfmanjm建议检查网络设置，确保使用正确的IP地址和端口，并推荐使用SSH隧道或VPN来提高稳定性。

总结来说，解决以太网流媒体延迟问题的方法包括：
1. 使用支持流媒体的软件（如Pronterface、OctoPrint）。
2. 确保网络配置正确，避免不必要的确认等待。
3. 使用SSH隧道或VPN提高连接稳定性。
</think>

### 以太网流媒体传输问题解决方案

在讨论中，用户和开发者提出了几种解决以太网流媒体传输延迟问题的方法，以下是关键点总结：

---

#### **1. 使用支持流媒体的软件**
- **Pronterface**：启用内置的流媒体选项，避免逐行等待确认（OK）。
- **OctoPrint**：其流媒体功能无需等待确认，适合实时传输。
- **smoothie-stream.py**：GitHub上的脚本可优化传输流程，减少延迟。

---

#### **2. 网络配置优化**
- **避免逐行确认**：确保软件配置为不等待每行的“OK”确认，防止因等待导致的延迟。
- **检查IP和端口**：确认设备IP地址和端口设置正确，避免连接错误。
- **网络稳定性**：使用有线连接（以太网）而非无线，减少丢包和延迟。

---

#### **3. 高级连接方法**
- **SSH隧道**：通过SSH建立加密隧道，提高传输稳定性。
- **VPN**：在复杂网络环境中使用VPN，确保数据传输路径的可靠性。

---

#### **4. 软件设置建议**
- **流媒体模式**：在支持的软件中启用流媒体模式（如Pronterface的“Stream”选项）。
- **固件更新**：确保3D打印机固件和控制软件（如Smoothie）为最新版本，兼容性更好。

---

通过以上方法，可以有效减少或消除以太网流媒体传输中的延迟问题，实现更流畅的实时控制。

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150828041315/http://smoothieware.org/forum/t-925717/strange-connection-problem)*
