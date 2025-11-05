# Marlin  to Smoothieware

*Original post date: 2016-01-01*

---

网友们在讨论将Marlin固件转换为Smoothieware固件时遇到的问题。用户提到在使用Smoothieware时遇到了三角洲校准问题，而同样的打印机在Marlin下工作正常。用户提供了Smoothieware的配置文件和Marlin的Delta设置参数，寻求帮助找出配置错误。

需要检查Smoothieware的配置参数是否与Marlin的设置一致，特别是与Delta几何相关的参数，如对角杆长度、滑动杆偏移、效应器偏移等。同时，注意Smoothieware中的端停设置、归零方向、软件微调等是否正确。可能还需要检查Z探针设置和校准策略是否配置正确。
</think>

在将Marlin固件转换为Smoothieware时遇到的三角洲校准问题，可能与以下配置参数不一致或设置错误有关。以下是需要重点检查和调整的配置项：

---

### **1. Delta几何参数**
确保Smoothieware的Delta几何参数与Marlin的设置一致，特别是以下关键参数：

#### **(1) 对角杆长度（DELTA_DIAGONAL_ROD）**
- **Marlin设置**：`#define DELTA_DIAGONAL_ROD 237.0`  
- **Smoothieware对应参数**：  
  ```ini
  delta_diagonal_rod = 237.0
  ```
  - **检查点**：确保`delta_diagonal_rod`的值与Marlin的`DELTA_DIAGONAL_ROD`完全一致。

#### **(2) 滑动杆偏移（DELTA_SMOOTH_ROD_OFFSET）**
- **Marlin设置**：`#define DELTA_SMOOTH_ROD_OFFSET 162.5`  
- **Smoothieware对应参数**：  
  ```ini
  delta_smooth_rod_offset = 162.5
  ```
  - **检查点**：确保`delta_smooth_rod_offset`与Marlin的`DELTA_SMOOTH_ROD_OFFSET`一致。

#### **(3) 效应器偏移（DELTA_EFFECTOR_OFFSET）**
- **Marlin设置**：`#define DELTA_EFFECTOR_OFFSET 20.0`  
- **Smoothieware对应参数**：  
  ```ini
  delta_effector_offset = 20.0
  ```
  - **检查点**：确保`delta_effector_offset`与Marlin的`DELTA_EFFECTOR_OFFSET`一致。

#### **(4) 车架偏移（DELTA_CARRIAGE_OFFSET）**
- **Marlin设置**：`#define DELTA_CARRIAGE_OFFSET 22.5`  
- **Smoothieware对应参数**：  
  ```ini
  delta_carriage_offset = 22.5
  ```
  - **检查点**：确保`delta_carriage_offset`与Marlin的`DELTA_CARRIAGE_OFFSET`一致。

---

### **2. 端停（Endstop）和归零设置**
检查Smoothieware的端停配置是否与Marlin的归零逻辑一致：

#### **(1) 归零方向（Homing Direction）**
- **Marlin设置**：`#define DELTA_HOMING 1`（强制同时归零）  
- **Smoothieware对应参数**：  
  ```ini
  delta_homing = true
  ```
  - **检查点**：确保`delta_homing`设置为`true`，以匹配Marlin的强制同时归零行为。

#### **(2) 软件微调（Software Trim）**
- **Smoothieware设置**：  
  ```ini
  alpha_trim = -10.2
  beta_trim = -10.55
  gamma_trim = -10.95
  ```
  - **检查点**：确保这些值与Marlin的机械调整一致。如果Marlin中未使用软件微调，可能需要移除或调整这些值。

---

### **3. Z探针（Z Probe）设置**
如果使用Z探针进行自动校准，需确保以下参数正确：

#### **(1) Z探针使能**
- **Smoothieware设置**：  
  ```ini
  zprobe.enable = true
  ```
  - **检查点**：确保`zprobe.enable`设置为`true`（如果使用Z探针）。

#### **(2) Z探针引脚和校准策略**
- **Smoothieware设置**：  
  ```ini
  zprobe.probe_pin = 1.29!^
  leveling-strategy.delta-calibration.enable = true
  leveling-strategy.delta-calibration.radius = 100
  ```
  - **检查点**：确保`zprobe.probe_pin`与实际硬件连接一致，并且校准半径（`radius`）与打印机的探针范围匹配。

---

### **4. 其他关键参数**
- **最大Z高度（gamma_max）**：  
  ```ini
  gamma_max = 310.000
  ```
  - **检查点**：确保该值与打印机的实际高度一致。

- **归零速率（Homing Rates）**：  
  ```ini
  alpha_fast_homing_rate_mm_s = 150
  beta_fast_homing_rate_mm_s = 150
  gamma_fast_homing_rate_mm_s = 150
  ```
  - **检查点**：确保归零速率与Marlin的设置一致（如`DELTA_FAST_HOME`和`DELTA_SLOW_HOME`）。

---

### **5. 校准建议**
1. **手动校准**：  
   - 如果自动校准失败，尝试手动调整`alpha_trim`、`beta_trim`、`gamma_trim`值，逐步逼近正确位置。

2. **使用Z探针校准**：  
   - 确保Z探针接触可靠，避免噪声干扰（如`zprobe.debounce_count`设置为100）。

3. **检查机械结构**：  
   - 确保三角洲臂、滑动杆、效应器的安装位置与Marlin配置一致，避免机械偏差。

---

### **6. 验证步骤**
1. **重启打印机**，确保所有配置生效。
2. **执行`G28`归零**，观察是否出现异常（如Z轴无法归零或位置偏移）。
3. **执行`G32`自动校准**（如果启用Z探针），检查校准后的打印质量。
4. **打印测试模型**（如立方体），检查层间粘合和高度一致性。

---

### **7. 常见问题排查**
- **问题：校准后Z轴高度不一致**  
  - **可能原因**：`delta_diagonal_rod`或`delta_smooth_rod_offset`设置错误。
  - **解决方法**：重新测量对角杆长度和滑动杆偏移，更新配置。

- **问题：Z探针无法触发**  
  - **可能原因**：`zprobe.probe_pin`设置错误或探针接触不良。
  - **解决方法**：检查探针引脚连接，调整`zprobe.probe_height`和`zprobe.slow_feedrate`。

- **问题：归零后X/Y轴偏移**  
  - **可能原因**：`alpha_trim`、`beta_trim`设置错误。
  - **解决方法**：调整软件微调值，逐步逼近正确位置。

---

通过以上步骤，可以系统性地排查和解决Smoothieware配置与Marlin不一致导致的三角洲校准问题。如果问题仍然存在，建议提供更详细的校准日志或错误信息，以便进一步分析。

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150826210007/http://smoothieware.org/forum/t-989939/marlin-to-smoothieware)*
