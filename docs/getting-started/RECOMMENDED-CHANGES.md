# Recommended V1/V2 Versioning Changes for getting-started.md

This document outlines additional changes that could be made to improve v1/v2 clarity in the getting-started guide. These are NOT implemented, but recommended for future review.

## 1. Windows Drivers Section (Line 127, 137-139)

### Current Text
```
**Windows users:** You'll need to install [Windows Drivers](windows-drivers) for the board to show up properly.

If you're on Windows, go install the [Windows drivers](windows-drivers) now. Linux and Mac have drivers built in.
```

### Issue
- Assumes both V1 and V2 need drivers (partially incorrect for V2)
- Doesn't explain which chip or driver needed
- Ambiguous for V2 users (may not need drivers)

### Recommended Change
```html
{::nomarkdown}
<versioned orientation="horizontal">
<v1>
{:/nomarkdown}

**Windows users:** Install [USB drivers (CH340/CP2102)](/windows-drivers) for the board to show up properly. Linux and Mac have drivers built-in.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

**Windows users:** V2 uses native USB and typically works without drivers on Windows 10+. If the board doesn't appear, see [V2 connection help](/windows-drivers-v2). Linux and Mac have full support built-in.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}
```

### Files to Create/Update
- [ ] `/windows-drivers` - Clarify it's for V1 chips
- [ ] `/windows-drivers-v2` - V2 native USB information

---

## 2. Host Software Selection (Line 141-150)

### Current Text
```
- **[Smoopi](smoopi)** - Recommended, runs on Raspberry Pi with touchscreen
- **[Pronterface](pronterface)** - Popular for 3D printers, simple and reliable
- **[Octoprint](octoprint)** - Web-based 3D printer control, very nice
- **[bCNC](bcnc)** - Good for CNC mills

See [Software](software) for the full list.
```

### Issue
- List is heavily V1-focused (Smoopi mainly for V1)
- Octoprint has limited V2 support
- Doesn't mention V2's better network capabilities
- Doesn't mention V2-specific tools

### Recommended Change
```html
{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

You need software on your computer to talk to the board. Pick one:

- **[Smoopi](smoopi)** - Recommended, runs on Raspberry Pi with touchscreen
- **[Pronterface](pronterface)** - Popular for 3D printers, simple and reliable
- **[Octoprint](octoprint)** - Web-based 3D printer control, very nice
- **[bCNC](bcnc)** - Good for CNC mills

See [Software](software) for the full list.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

You need software on your computer (or network) to talk to the board. V2 supports both USB and Ethernet:

- **[SmoothieV2 WebUI](smoothiev2-webui)** - Purpose-built for V2, web-based, recommended
- **[bCNC](bcnc)** - Excellent for CNC mills, network-compatible
- **[Pronterface](pronterface)** - Classic tool, works with V2 over USB
- Network-aware tools are recommended (V2 supports Ethernet)

See [Software](software) for V2-compatible tool list.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}
```

### Files to Create/Update
- [ ] `/software` - Add V2-compatible tool list
- [ ] Create V2-specific host software documentation

---

## 3. USB Connection / First Connection (Line 165-187)

### Current Text
```
Connect the USB cable from your computer to the Smoothieboard. The board should power on (you'll see LEDs light up).

Your computer should recognize it as:
- A USB serial device
- A USB mass storage device (the SD card shows up like a USB stick)
```

### Issue
- V1 recognized as serial device (CH340/CP2102)
- V2 native USB may show differently
- No mention of potential issues or delays

### Recommended Change (Optional, Informational)
```html
{::nomarkdown}
<versioned>
<v1>
{:/nomarkdown}

Connect the USB cable. The board should power on (green LED lights up).

Your computer recognizes it as:
- A USB serial device (via CH340/CP2102 chip)
- A USB mass storage device (SD card shows as USB stick)

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

Connect the USB cable. The board should power on (LEDs light up).

Your computer recognizes it as:
- A USB composite device (native USB)
- A USB mass storage device (SD card shows as USB stick)

Windows 10+ may take a moment to recognize the device.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}
```

---

## 4. USB Troubleshooting (Line 298-303)

### Current Text
```
**Board not recognized**

- Windows: Install [Windows drivers](windows-drivers)
- Try different USB cable
- Try different USB port
- Check for LED activity on board
```

### Issue
- Driver installation is V1-specific
- Doesn't account for V2 native USB
- No distinction between USB recognition and serial connection

### Recommended Change
```html
{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

**Board not recognized**

- Windows: Install [USB drivers (CH340/CP2102)](/windows-drivers)
- Try different USB cable (defective cables are common)
- Try different USB port
- Check for LED activity on board (green LED = power)
- Check Device Manager for unrecognized USB devices

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

**Board not recognized**

- Windows: Should work on Windows 10+ without drivers
- Check for LED activity on board (white/green LED = power)
- Try a different USB cable (defective cables are common)
- Try a different USB port
- Wait a moment (first connection may be slow)
- See [V2 Troubleshooting](/v2-troubleshooting) for more

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}
```

### Files to Create/Update
- [ ] `/v2-troubleshooting` - V2-specific connection troubleshooting

---

## 5. Time Estimates (Line 129-133)

### Current Text
```
**Time estimate:**
- Software setup: 15-30 minutes
- Wiring everything: 1-2 hours
- Configuration: 1-2 hours
- Testing and calibration: 30 minutes to 1 hour
```

### Issue
- V2 configuration might be faster if user is familiar with INI format
- First-time user may take longer on either version
- No guidance on parallelizable tasks

### Recommended Enhancement (Optional)
```
**Time estimate:**
- Software setup: 15-30 minutes
- Wiring everything: 1-2 hours
- Configuration: 1-2 hours (V2 may be faster if familiar with INI format)
- Testing and calibration: 30 minutes to 1 hour

Total: 2-4 hours for experienced users, 4-6 hours for first-time users
```

---

## 6. V2-Specific Features to Mention (In "What's Next" section)

### Current Text (Lines 350-367)
Mentions various follow-up docs but no V2-specific resources.

### Recommended Addition
Add at end of "What's next" section:

```markdown
{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

You've got the basics! To unlock more power:
- [Motion Control](motion-control) - Fine-tune acceleration and speeds
- [Advanced G-codes](supported-g-codes) - All 70+ G-code commands
- [Console Commands](console-commands) - Scripting and automation

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

You've got the basics! V2 has additional capabilities:
- [Network Configuration](/network) - Set up Ethernet (faster than USB)
- [V2 Modules](/v2-modules) - Advanced features like networking and new drivers
- [Motion Control](motion-control) - Fine-tune acceleration and motion
- [Advanced G-codes](supported-g-codes) - All supported G-code commands

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}
```

---

## Summary of Recommendations

| Section | Priority | Complexity | Files Needed |
|---------|----------|-----------|--------------|
| Windows drivers | High | Low | windows-drivers, windows-drivers-v2 |
| Host software | High | Medium | software (update), smoothiev2-webui (new) |
| First connection | Medium | Low | None (informational only) |
| USB troubleshooting | High | Medium | v2-troubleshooting (new) |
| Time estimates | Low | Low | None (inline note) |
| What's next section | Medium | Low | None (expand existing) |

---

## Implementation Path

### Phase 1 (High Priority)
1. Add Windows drivers versioning (once pages exist)
2. Add host software versioning
3. Add USB troubleshooting versioning

### Phase 2 (Medium Priority)
1. Add first connection clarification
2. Expand "What's next" with V2 features

### Phase 3 (Supporting Work)
1. Create missing documentation pages
2. Update Windows drivers page
3. Create V2-specific troubleshooting page

---

**Note**: These recommendations are for future review. The two review blocks already in the file (`getting-started:download-config` and `getting-started:config-setup`) cover the most critical configuration differences.
