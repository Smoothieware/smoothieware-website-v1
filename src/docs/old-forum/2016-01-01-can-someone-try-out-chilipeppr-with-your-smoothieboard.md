# Can someone try out chilipeppr with your smoothieboard?

*Original post date: 2016-01-01*

---

现有内容已经详细描述了用户在使用Chilipeppr与Smoothieboard结合时遇到的问题，以及社区成员的讨论和建议。为了更好地组织信息并提高可读性，可以将内容分为几个部分，如问题描述、解决方案、社区讨论和建议等。同时，确保使用清晰的标题和列表来突出重点。

以下是整理后的内容：

---

### 问题描述

用户在使用Chilipeppr与Smoothieboard结合时遇到了以下问题：

- **无法正确识别Smoothieboard**：Chilipeppr可能无法正确识别Smoothieboard，导致无法进行通信。
- **GCode执行问题**：即使通信成功，执行GCode时可能出现问题，如无法正确移动轴或执行命令。
- **缺少官方支持**：Chilipeppr主要针对TinyG等控制器进行优化，对Smoothieboard的支持有限。

---

### 解决方案

1. **检查通信设置**：
   - 确保Smoothieboard的串口设置正确（波特率、数据位、停止位等）。
   - 确认Chilipeppr中的串口配置与Smoothieboard匹配。

2. **使用正确的固件**：
   - 确保Smoothieboard上运行的是与Chilipeppr兼容的固件版本。
   - 可尝试更新或更换固件以提高兼容性。

3. **手动配置Chilipeppr**：
   - 在Chilipeppr中手动配置Smoothieboard的通信参数。
   - 可参考社区讨论中的配置示例。

4. **使用替代工具**：
   - 如果Chilipeppr无法满足需求，可考虑使用其他支持Smoothieboard的CNC控制软件，如SmoothieWeb或Grbl。

---

### 社区讨论与建议

- **John Lauer（Chilipeppr开发者）的回应**：
  - John Lauer表示对Smoothieboard了解有限，但有兴趣与用户交流以改进支持。
  - 他建议用户加入Chilipeppr的Google+社区，与其他Smoothieboard用户交流经验。

- **用户反馈**：
  - 有用户提到，Smoothieboard在处理复杂GCode（如有机3D模型）时表现更好，适合需要高精度和复杂路径的场景。
  - 一些用户建议使用TinyG 2作为替代，因其在CNC应用中更为常见。

- **社区建议**：
  - 加入Chilipeppr的Google+社区，与其他用户交流。
  - 在GitHub或论坛上提交问题，寻求开发者支持。
  - 尝试使用其他支持Smoothieboard的软件，如SmoothieWeb。

---

### 总结

虽然Chilipeppr对Smoothieboard的支持有限，但通过正确的配置和社区资源，用户仍有可能实现基本的通信和控制。对于需要更高兼容性和功能的用户，建议考虑其他支持Smoothieboard的CNC控制软件。

---

### 参考链接

- [Chilipeppr Google+社区](https://plus.google.com/)
- [Smoothieboard官方文档](https://smoothieboard.com/)
- [Chilipeppr GitHub仓库](https://github.com/chilipeppr)

---

以上整理旨在帮助用户更好地理解问题，并提供可行的解决方案和资源。希望这些信息对您有所帮助！
</think>

### 使用 Chilipeppr 与 Smoothieboard 的问题及解决方案

---

### 问题描述

用户在使用 Chilipeppr 与 Smoothieboard 结合时遇到了以下问题：

- **无法正确识别 Smoothieboard**：Chilipeppr 可能无法正确识别 Smoothieboard，导致无法进行通信。
- **GCode 执行问题**：即使通信成功，执行 GCode 时可能出现问题，如无法正确移动轴或执行命令。
- **缺少官方支持**：Chilipeppr 主要针对 TinyG 等控制器进行优化，对 Smoothieboard 的支持有限。

---

### 解决方案

1. **检查通信设置**：
   - 确保 Smoothieboard 的串口设置正确（波特率、数据位、停止位等）。
   - 确认 Chilipeppr 中的串口配置与 Smoothieboard 匹配。

2. **使用正确的固件**：
   - 确保 Smoothieboard 上运行的是与 Chilipeppr 兼容的固件版本。
   - 可尝试更新或更换固件以提高兼容性。

3. **手动配置 Chilipeppr**：
   - 在 Chilipeppr 中手动配置 Smoothieboard 的通信参数。
   - 可参考社区讨论中的配置示例。

4. **使用替代工具**：
   - 如果 Chilipeppr 无法满足需求，可考虑使用其他支持 Smoothieboard 的 CNC 控制软件，如 SmoothieWeb 或 Grbl。

---

### 社区讨论与建议

- **John Lauer（Chilipeppr 开发者）的回应**：
  - John Lauer 表示对 Smoothieboard 了解有限，但有兴趣与用户交流以改进支持。
  - 他建议用户加入 Chilipeppr 的 Google+ 社区，与其他 Smoothieboard 用户交流经验。

- **用户反馈**：
  - 有用户提到，Smoothieboard 在处理复杂 GCode（如有机 3D 模型）时表现更好，适合需要高精度和复杂路径的场景。
  - 一些用户建议使用 TinyG 2 作为替代，因其在 CNC 应用中更为常见。

- **社区建议**：
  - 加入 Chilipeppr 的 Google+ 社区，与其他用户交流。
  - 在 GitHub 或论坛上提交问题，寻求开发者支持。
  - 尝试使用其他支持 Smoothieboard 的软件，如 SmoothieWeb。

---

### 总结

虽然 Chilipeppr 对 Smoothieboard 的支持有限，但通过正确的配置和社区资源，用户仍有可能实现基本的通信和控制。对于需要更高兼容性和功能的用户，建议考虑其他支持 Smoothieboard 的 CNC 控制软件。

---

### 参考链接

- [Chilipeppr Google+ 社区](https://plus.google.com/)
- [Smoothieboard 官方文档](https://smoothieboard.com/)
- [Chilipeppr GitHub 仓库](https://github.com/chilipeppr)

---

以上整理旨在帮助用户更好地理解问题，并提供可行的解决方案和资源。希望这些信息对您有所帮助！

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150930181242/http://smoothieware.org/forum/t-1014921/can-someone-try-out-chilipeppr-with-your-smoothieboard)*
