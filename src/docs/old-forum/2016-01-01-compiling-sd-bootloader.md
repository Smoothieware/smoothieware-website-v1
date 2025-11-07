# Compiling SD bootloader

*Original post date: 2016-01-01*

---

# Forum: Smoothie

## Compiling SD bootloader

**Summary:**  
This thread discusses challenges related to compiling the bootloader for an SD card-based system. The user has added custom code to the bootloader and is seeking guidance on potential limitations and solutions.

---

### Post by Jitu Singh (14 Oct 2014 21:31)

I have added the following code to the bootloader:

```c
// Custom code to control relay via GPIO
void setup() {
  pinMode(2, OUTPUT); // Assuming GPIO 2 is used
  digitalWrite(2, HIGH); // Activate relay
}

void loop() {
  // Bootloader logic here
}

This code is intended to activate a relay during the boot process. However, I'm concerned about potential size limitations of the bootloader. Are there any best practices for adding custom code without exceeding memory constraints?

---

### Reply by wolfmanjm (26 Oct 2014 02:35)

The bootloader can take very little extra code as it is already pretty much near the maximum size it can be. So I suggest you find an alternative way to do what you want, or find a way to reduce the size of the bootloader, or make the bootloader use more flash and change the start address of Smoothie.

---

**New Post**  
[Create a new post](#)

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150826210007/http://smoothieware.org/forum/t-1039556/compiling-sd-bootloader)*
