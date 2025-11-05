# ST7920 LCD with push buttons

*Original post date: 2016-01-01*

---

-Re: ST7920 LCD with Push Buttons

Okay, let's see. The user is trying to use push buttons with their ST7920 LCD panel, but they're running into issues. From the forum posts, I remember that the GLCD panel doesn't have up/down buttons, which are part of the Viki panel setup. But the user is using the GLCD, so maybe they're trying to use different buttons or there's a configuration problem.

First, I need to check the wiring. Are the buttons connected correctly to the microcontroller? Maybe the pins aren't set up properly in the code. The user mentioned using the reprap firmware, so I should look into the configuration files there. They might need to enable the buttons in the firmware settings.

Also, the GLCD panel might require specific pin assignments for the buttons. If the user is using the wrong pins, the buttons won't work. They should check the pinout diagram for their specific board and make sure the buttons are connected to the correct GPIO pins.

Another thing is the debounce settings. If the buttons are bouncing, the firmware might not register them correctly. Adding a debounce delay in the code could help. Also, checking if the buttons are pulled up or down properly with resistors.

Maybe the user hasn't initialized the buttons in the firmware. They need to make sure that the button pins are set as inputs and that the interrupt service routines are properly configured to handle button presses.

I should also suggest testing the buttons with a simple blink LED example to see if they're working at all. If the LED doesn't blink when the button is pressed, the issue is likely with the hardware setup. If it does, then the problem is in the firmware configuration.

Finally, looking at the forum posts, someone mentioned that the GLCD doesn't support up/down buttons. But maybe the user is trying to use other buttons, like the menu or confirm buttons. They should check the available buttons on their panel and ensure they're using the correct ones in the firmware.
</think>

To resolve the issue with the ST7920 LCD panel and push buttons, follow these steps:

### 1. **Verify Hardware Connections**
   - **Pin Configuration**: Ensure the buttons are connected to the correct GPIO pins on your microcontroller (e.g., Arduino, Raspberry Pi, or STM32). Refer to your board's pinout diagram.
   - **Pull-up/Pull-down Resistors**: Use external resistors (or enable internal pull-up/pull-down in code) to prevent floating inputs. For example, on Arduino, use `pinMode(buttonPin, INPUT_PULLUP)`.

### 2. **Firmware Configuration**
   - **Enable Button Support**: In your firmware (e.g., Reprap, Marlin, or custom code), ensure button functionality is enabled. Look for settings like `#define BTN_PIN` or similar in configuration files.
   - **Debounce Settings**: Add debounce logic to handle button bounce. Example for Arduino:
     ```cpp
     long lastDebounceTime = 0;
     long debounceDelay = 50; // milliseconds
     int buttonState = HIGH;
     int lastButtonState = HIGH;

     void loop() {
       int reading = digitalRead(buttonPin);

       if (reading != lastButtonState) {
         lastDebounceTime = millis();
       }

       if ((millis() - lastDebounceTime) > debounceDelay) {
         if (reading != buttonState) {
           buttonState = reading;
           // Handle button press here
         }
       }

       lastButtonState = reading;
     }
     ```

### 3. **Test with a Simple Example**
   - **Blink LED Test**: Create a simple sketch to blink an LED when the button is pressed. This isolates hardware issues:
     ```cpp
     const int buttonPin = 2;
     const int ledPin = 13;

     void setup() {
       pinMode(buttonPin, INPUT_PULLUP);
       pinMode(ledPin, OUTPUT);
     }

     void loop() {
       if (digitalRead(buttonPin) == LOW) {
         digitalWrite(ledPin, HIGH);
       } else {
         digitalWrite(ledPin, LOW);
       }
     }
     ```
   - If the LED doesn't respond, check wiring or resistor connections.

### 4. **Check Panel Compatibility**
   - **GLCD Limitations**: The GLCD panel does not have dedicated "up/down" buttons (unlike the Viki panel). Ensure you're using buttons that are physically present on your GLCD (e.g., menu, confirm, or encoder buttons).
   - **Custom Button Mapping**: If using encoder buttons, map them to the appropriate functions in your firmware.

### 5. **Debugging Tips**
   - **Serial Debug Output**: Print button states to the serial monitor to confirm the firmware is detecting presses.
   - **Interrupts**: Use interrupts for button presses if your firmware supports it (e.g., `attachInterrupt()` on Arduino).

### 6. **Example Configuration for Reprap Firmware**
   If using Reprap, ensure the following in `config.h` or similar:
   ```cpp
   #define BTN_PIN 3
   #define BTN_PIN2 4
   #define BTN_PIN3 5
   ```
   And initialize in `setup()`:
   ```cpp
   pinMode(BTN_PIN, INPUT_PULLUP);
   ```

By systematically checking hardware connections, firmware settings, and testing with simple examples, you should be able to resolve the issue. If the problem persists, share your wiring diagram and firmware code for further assistance.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150829111801/http://smoothieware.org/forum/t-1082528/st7920-lcd-with-push-buttons)*
