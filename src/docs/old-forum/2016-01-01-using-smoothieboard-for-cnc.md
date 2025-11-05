# Using Smoothieboard for CNC

*Original post date: 2016-01-01*

---

羡慕，我有办法解决这个问题吗？嗯，用户提到在使用Smoothieboard进行CNC加工时遇到了单位制的问题，特别是美国用户需要使用英寸单位，但Smoothieboard的默认设置可能使用的是公制单位。用户希望能在软件界面中直接使用英寸，而不是在生成G代码后进行转换，这样可以减少出错的可能。

首先，我需要确认Smoothieboard是否支持英寸单位。根据我之前了解的信息，Smoothieboard是基于Marlin固件的，而Marlin通常使用毫米作为默认单位。不过，用户可以通过修改固件配置文件中的相关参数来切换单位制。例如，在Marlin的configuration.h文件中，有一个定义叫做`#define DEFAULT_AXIS_STEP_PULSE`，但可能不是直接控制单位的。更可能的是，用户需要修改`#define DEFAULT_AXIS_STEPS_PER_UNIT`来调整每单位步数，从而适应不同的单位制。不过，这可能涉及到更复杂的配置，比如调整步进电机的步数和微步设置，以确保英寸单位的正确转换。

另外，用户提到使用Pronterface时，界面中的步进设置可能没有直接的英寸选项。这时候，用户可能需要手动调整步进设置，或者寻找是否有插件或自定义配置可以支持英寸单位。例如，某些CNC软件可能允许用户在设置中选择单位制，但Pronterface可能主要针对3D打印，而不是CNC加工，因此可能需要使用其他软件，如Universal Gcode Sender（UGS）或Grbl，这些软件可能更适用于CNC应用，并且支持单位制的切换。

此外，用户可能需要检查Smoothieboard的固件版本，确保其支持所需的单位制设置。如果固件不支持，可能需要升级到最新版本，或者寻找社区提供的修改版本。同时，用户可能需要在生成G代码时，使用CAM软件（如Fusion 360、VCarve等）直接输出英寸单位的G代码，这样就不需要在软件界面中进行单位转换，从而减少出错的可能。

不过，用户可能更倾向于在软件界面中直接使用英寸，而不是在生成G代码时进行转换。这时候，可能需要寻找支持英寸单位的CNC控制软件，或者在Pronterface中进行自定义配置，例如修改配置文件中的单位设置，或者通过插件来实现。如果Pronterface不支持，用户可能需要转向其他软件，如UGS，它允许用户在设置中选择单位制，从而更方便地进行CNC加工。

总结来说，用户的问题可能需要通过修改固件配置、使用支持英寸单位的软件，或在生成G代码时直接使用英寸单位来解决。需要根据用户的具体情况和使用的软件来提供相应的解决方案。
</think>

在使用 Smoothieboard 进行 CNC 加工时，若需在软件界面中直接使用英寸单位（而非依赖 GCode 转换），可采取以下步骤：

---

### **1. 修改 Smoothieboard 固件配置**
Smoothieboard 基于 Marlin 固件，需调整配置文件以支持英寸单位：

- **步骤：**
  1. 打开 `configuration.h` 文件（位于 Marlin 固件目录）。
  2. 找到并修改以下定义：
     ```cpp
     #define DEFAULT_AXIS_STEPS_PER_UNIT { 80, 80, 400, 0 } // 原默认值（毫米）
     ```
     根据你的步进电机和驱动设置，将数值调整为 **英寸对应的步数**。例如，若每英寸需要 200 步：
     ```cpp
     #define DEFAULT_AXIS_STEPS_PER_UNIT { 200, 200, 800, 0 } // 假设 X/Y/Z 轴每英寸 200/200/800 步
     ```
  3. 保存文件并重新编译上传固件。

- **注意：** 步数需根据实际电机、驱动器（如 A4988、TMC2209）和微步设置计算。例如，若电机为 200 步/转，驱动器设置为 1/8 微步，则每毫米步数为 `200 * 8 / 25.4`（转换为英寸）。

---

### **2. 使用支持英寸单位的 CNC 控制软件**
若固件修改复杂，可使用其他软件替代 Pronterface：

- **推荐软件：**
  - **Universal Gcode Sender (UGS):**  
    - 支持单位制切换（菜单 → Preferences → Units → Inches）。
    - 直接发送英寸单位的 GCode，无需转换。
  - **Grbl (适用于 CNC 机床):**  
    - Grbl 支持英寸单位（通过 `G20` 命令启用），可配合 UGS 使用。

- **操作示例（UGS）：**
  1. 打开 UGS，连接 Smoothieboard。
  2. 点击菜单 → Preferences → Units → 选择 **Inches**。
  3. 生成 GCode 时，CAM 软件（如 Fusion 360）可直接输出英寸单位代码，UGS 会自动识别。

---

### **3. CAM 软件直接输出英寸 GCode**
若希望保留 Pronterface，可在生成 GCode 时直接使用英寸单位：

- **步骤：**
  1. 使用 CAM 软件（如 VCarve、BobCAD）设置单位为 **Inches**。
  2. 导出 GCode 文件（确保 `G20` 命令已插入，表示英寸单位）。
  3. 在 Pronterface 中加载 GCode，Smoothieboard 会自动识别单位（需固件支持 `G20`）。

---

### **4. 验证单位设置**
- **测试方法：**
  - 发送 `G20`（英寸）或 `G21`（毫米）命令至 Smoothieboard，观察响应。
  - 使用 `M114` 查看当前坐标，确认单位是否正确。

---

### **总结**
| 方法 | 优点 | 缺点 |
|------|------|------|
| 修改固件 | 直接支持英寸单位 | 需编程和重新烧录固件 |
| 使用 UGS | 简单易用，支持单位切换 | 需更换软件 |
| CAM 直接输出 | 无需修改固件或软件 | 依赖 CAM 软件设置 |

根据需求选择方案，若追求便捷性，**推荐使用 Universal Gcode Sender**，它能无缝支持英寸单位，避免手动转换的麻烦。

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150930181242/http://smoothieware.org/forum/t-1127989/using-smoothieboard-for-cnc)*
