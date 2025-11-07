# How does one use the 500C thermistor with Smoothie for the 500C Pico?

*Original post date: 2016-01-01*

---

# 如何在 Smoothie 固件中使用 500C 热敏电阻（针对 500C Pico）

## 原帖：arduinomike（2014-08-18 16:23）
> 我正在尝试在 Smoothie 固件中配置 500C 热敏电阻。在 Marlin 中，我们可以在 config.h 中设置热敏电阻参数，但 Smoothie 的配置方式不同。有人知道如何在 Smoothie 中切换热敏电阻吗？我看到代码中有一些关于热电偶的提及，但不确定是否相关。

---

## 回复：arduinojoe（2014-08-19 00:17）
> 在 Smoothie 中，热敏电阻配置通常在 `config.g` 文件中完成。你需要找到类似以下的代码段：
> 
> ```gcode
> M307 P0 S1000000 R10000000 T1000000000
> ```
> 这里的参数含义：
> - `P0`：热敏电阻编号（通常为 0）
> - `S`：热敏电阻的 β 值（单位：K）
> - `R`：热敏电阻的参考电阻（单位：Ω）
> - `T`：热敏电阻的参考温度（单位：K）
> 
> 请根据你的热敏电阻规格调整这些值。如果需要更精确的校准，可以使用 `M308` 命令进行温度补偿。

---

## 回复：arduinomike（2014-08-19 08:35）
> 感谢你的回复！我手头的热敏电阻参数如下：
> - β 值：3950 K
> - 参考电阻：10 kΩ
> - 参考温度：25°C（298.15 K）
> 
> 我应该将这些值代入 `M307` 命令中吗？另外，是否需要修改其他配置文件？

---

## 回复：arduinojoe（2014-08-19 12:45）
> 是的，使用你提供的参数，配置应为：
> 
> ```gcode
> M307 P0 S3950 R10000 T298.15
> ```
> 确保 `config.g` 中没有其他冲突的 `M307` 命令。如果使用的是 Smoothie 的旧版本，可能需要更新到支持 `M307` 的版本。

---

## 回复：arduinomike（2014-08-19 14:20）
> 我尝试了上述配置，但温度读数不准确。是否需要使用 `M308` 进行校准？如果需要，如何操作？

---

## 回复：ralphxyz（2014-08-19 16:24）
> 你提到热电偶，但原帖是关于热敏电阻的。请确认你是否混淆了热敏电阻和热电偶的配置。热电偶需要不同的固件支持（如 `MAX31855` 驱动）。

---

## 回复：B3 Innovations（2014-11-14 22:09）
> 500C 热敏电阻的典型参数：
> - β 值：3950 K
> - 参考电阻：10 kΩ
> - 参考温度：25°C（298.15 K）
> 
> 在 Smoothie 中，使用以下配置：
> 
> ```gcode
> M307 P0 S3950 R10000 T298.15
> ```
> 如果需要更高精度，可添加：
> 
> ```gcode
> M308 P0 T298.15 R10000 S3950
> ```
> 确保固件版本支持这些命令，并重启设备使配置生效。


---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150730052647/http://smoothieware.org/forum/t-933831/how-does-one-use-the-500c-thermistor-with-smoothie-for-the-5)*
