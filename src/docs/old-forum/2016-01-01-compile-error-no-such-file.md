# Compile Error: No such file

*Original post date: 2016-01-01*

---

ᴶ

Okay, let's see. The user provided a conversation between two people, dancole and arthurwolf, discussing a compile error related to a missing file in a project. The error message mentioned is "No such file or directory: 'arm-none-eabi-gcc'". The user wants me to act as an assistant and provide a helpful response.

First, I need to understand the context. The error is about the compiler not being found. The user's PATH environment variable includes the directory where arm-none-eabi-gcc should be, but the system can't find it. That might mean the compiler isn't installed, or the PATH is incorrect.

Looking at the PATH provided: /usr/local/arm-none-eabi/bin is included. So, the user probably installed the toolchain there. But maybe the installation is incomplete or the path is wrong. Alternatively, the user might have installed it in a different location.

Next, I should check common solutions for this error. The usual steps are: verifying the installation of the toolchain, checking the PATH variable, and ensuring that the compiler is in the correct directory. Also, maybe the user needs to use the full path to the compiler when running the build command.

Another possibility is that the toolchain wasn't installed correctly. The user might need to reinstall it or check the installation instructions again. For example, if they used a package manager like apt, maybe the package name was incorrect, or if they downloaded a tarball, the extraction might have failed.

Also, the user might be on a different operating system. The PATH includes /usr/local, which is common on Unix-like systems, but if they're on Windows, the approach would be different. However, the presence of /usr/local suggests a Unix-based system, possibly Linux or macOS.

I should also consider that the build system might be looking for a specific version of the compiler. Maybe the installed version doesn't match what the project expects. Checking the project's documentation for required toolchain versions could help.

Another angle: the user might have multiple versions of the toolchain installed, and the PATH is pointing to the wrong one. They could check which version is actually installed and adjust the PATH accordingly.

Additionally, the user might need to run the build command with the correct environment variables set. For example, using a script that sets up the environment for the toolchain.

I should structure the response to first confirm the error, then provide step-by-step solutions: checking installation, verifying PATH, reinstalling if necessary, using full path, and checking for multiple versions. Also, mention checking the project's documentation for specific requirements.

Make sure the response is clear and not too technical, but thorough enough to cover possible causes. Avoid assuming the user's exact setup but provide general guidance that applies to common scenarios.
</think>

The error message `No such file or directory: 'arm-none-eabi-gcc'` indicates that the build system cannot locate the ARM GCC compiler, which is required for compiling code for embedded systems (e.g., STM32, ARM Cortex-M). Here's how to resolve this:

---

### **1. Verify Toolchain Installation**
Ensure the ARM GCC toolchain is installed:
- **Linux (Debian/Ubuntu):**  
  Install via package manager:  
  ```bash
  sudo apt update && sudo apt install arm-none-eabi-gcc
  ```
- **macOS (Homebrew):**  
  ```bash
  brew install arm-none-eabi-gcc
  ```
- **Windows:**  
  Download the toolchain from [ARM's official site](https://developer.arm.com/tools-and-software/open-source-software/developer-tools/gnu-toolchain/gnu-arm-embedded) or use a Linux subsystem (WSL).

---

### **2. Check the `PATH` Environment Variable**
The compiler must be in your system's `PATH`. Confirm the toolchain is installed in a directory listed in `PATH`:
```bash
echo $PATH

- If `/usr/local/arm-none-eabi/bin` (or similar) is **not** present, add it:
  ```bash
  export PATH=/usr/local/arm-none-eabi/bin:$PATH
  ```
- **Persist the change** by adding the line to `~/.bashrc`, `~/.zshrc`, or your shell's config file.

---

### **3. Reinstall the Toolchain (if missing)**
If the compiler is not installed:
- **Linux:**  
  ```bash
  sudo apt install gcc-arm-none-eabi
  ```
- **macOS:**  
  ```bash
  brew install arm-none-eabi-gcc
  ```
- **Windows:**  
  Use the installer from [ARM's website](https://developer.arm.com/tools-and-software/open-source-software/developer-tools/gnu-toolchain/gnu-arm-embedded).

---

### **4. Use the Full Path to the Compiler**
If the toolchain is installed but not in `PATH`, specify the full path during the build:
```bash
/usr/local/arm-none-eabi/bin/arm-none-eabi-gcc your_code.c

---

### **5. Check for Multiple Toolchain Versions**
If multiple versions are installed, ensure the correct one is used:
```bash
which arm-none-eabi-gcc

- If the wrong version is found, adjust `PATH` or use the full path.

---

### **6. Project-Specific Requirements**
Some projects require specific toolchain versions. Check the project's documentation for:
- Required GCC version (e.g., `arm-none-eabi-gcc-10.3-2021.10`).
- Instructions for setting up the environment.

---

### **7. Verify Installation**
After installation, confirm the compiler is working:
```bash
arm-none-eabi-gcc --version

This should output the compiler version. If it fails, reinstall the toolchain.

---

### **Summary**
- **Install** the ARM GCC toolchain if missing.
- **Update `PATH`** to include the toolchain's directory.
- Use the **full path** to the compiler if `PATH` is not configured.
- Check for **version mismatches** or multiple installations.

Let me know if you need help with a specific OS or project setup!

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150830105535/http://smoothieware.org/forum/t-1089564/compile-error:no-such-file)*
