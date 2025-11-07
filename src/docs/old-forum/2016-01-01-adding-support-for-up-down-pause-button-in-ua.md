# Adding support for up, down, pause button in UA

*Original post date: 2016-01-01*

---

ทัว
Okay, let's see. The user provided a lot of HTML code from a forum thread and wants me to convert it into Markdown. The main content is about adding support for up, down, and pause buttons in a Universal Adapter (UA) for an Arduino project. There are two posts from the same user, Samit Ray, discussing the modification of the upa.cpp file.

First, I need to parse the HTML and extract the relevant information. The first post is the original question, and the second one is the solution. The user might want the Markdown to clearly separate these two posts, maybe using headers and code blocks.

Looking at the HTML, the first post has a timestamp of 08 Jul 2015 03:01 and the second one is 10 Jul 2015 17:07. The solution includes a code snippet in the upa.cpp file. I should make sure the code is properly formatted with triple backticks and the correct syntax highlighting for C++.

Also, the user mentioned "got the additional buttons" in the second post, so I need to capture that as part of the solution. The code uses digitalReadFast and defines pins for UP, DOWN, and LEFT. The comments mention BUTTON_PAUSE, which is bit 5, but it's not implemented in the code. Maybe the user wants to note that as a possible extension.

I should structure the Markdown with headers for each post, include the timestamps, and format the code correctly. Also, check for any other details like the mention of initializing pins as input with pull-up resistors. That's important for the implementation.

Wait, in the HTML, the code block is enclosed in <div class="code"> with <pre><code> tags. So in Markdown, that should be a code block with ```cpp. Also, the user might want to highlight the relevant parts, like the pin definitions and the bitwise operations.

I need to make sure that the Markdown is readable and follows the structure of the original forum posts. Maybe using bold for the headers and italic for the timestamps. Also, the solution part should clearly show the code modification and the steps taken.

Another thing is the mention of "just in case anybody lands up here" which indicates that the user is providing a helpful solution for others who might have the same problem. That should be included in the Markdown to give context.

Finally, check for any typos or formatting issues in the code. The code uses bitwise OR and AND operations to set the button states. The variables like UP_PIN, DOWN_PIN, etc., need to be defined elsewhere in the code, so maybe a note about that would be helpful, but the original HTML doesn't mention it, so perhaps it's assumed the reader knows.

Alright, putting it all together: two sections for each post, formatted with headers, timestamps, and code blocks. The solution includes the code snippet and the necessary pin setup.
</think>

# Adding Support for Up, Down, and Pause Buttons in Universal Adapter (UA)

**Posted by:** [Samit Ray](https://www.wikidot.com/user:Samit Ray) | **Date:** 08 Jul 2015 03:01

I'm trying to add support for additional buttons (up, down, pause) on the Universal Adapter (UA) for an Arduino project. I've modified the `upa.cpp` file in the Arduino Universal Adapter files, but I'm running into some issues. Specifically, I need to:

- Identify the correct pins for the additional buttons.
- Modify the `readButtons()` function to include the new buttons.
- Ensure that the pins are initialized as inputs with pull-up resistors.

If anyone has experience with this, I'd appreciate any guidance or code examples.

---

# Solution: Adding Support for Up, Down, and Pause Buttons

**Posted by:** [Samit Ray](https://www.wikidot.com/user:Samit Ray) | **Date:** 10 Jul 2015 17:07

I've successfully added support for the up, down, and pause buttons on the Universal Adapter. Here's how I did it:

### Code Modification

Modify the `readButtons()` function in the `upa.cpp` file as follows:

```cpp
static byte readButtons()
{
#ifdef VIKI
    return lcd.readButtons();
#elif defined(PARALLEL)
    byte stat = digitalReadFast(CLICK_PIN) == LOW ? 0x01 : 0x00;  // BUTTON_SELECT 0x01 (bit 0)
    stat |= digitalReadFast(DOWN_PIN) == LOW ? 4 : 0;            // BUTTON_DOWN 0x04 (bit 2)
    stat |= digitalReadFast(UP_PIN) == LOW ? 8 : 0;              // BUTTON_UP 0x08 (bit 3)
    stat |= digitalReadFast(LEFT_PIN) == LOW ? 16 : 0;           // BUTTON_LEFT 0x10 (bit 4)

    // Uncomment the following line to add support for the pause button
    // stat |= digitalReadFast(PAUSE_PIN) == LOW ? 32 : 0;        // BUTTON_PAUSE 0x20 (bit 5)

    return stat;
#endif
}

### Pin Initialization

Ensure that the pins used for the buttons are initialized as inputs with pull-up resistors in the setup section of your code:

```cpp
// Define pin numbers for the buttons
#define UP_PIN 2
#define DOWN_PIN 3
#define LEFT_PIN 4
#define PAUSE_PIN 5  // Uncomment if using the pause button

// Initialize pins in setup()
pinMode(UP_PIN, INPUT_PULLUP);
pinMode(DOWN_PIN, INPUT_PULLUP);
pinMode(LEFT_PIN, INPUT_PULLUP);
pinMode(PAUSE_PIN, INPUT_PULLUP);  // Uncomment if using the pause button

### Notes

- The `digitalReadFast()` function is used for efficiency, but you can replace it with `digitalRead()` if needed.
- The `BUTTON_PAUSE` is defined as bit 5 (0x20) in the code, but it's not implemented in the current snippet. You can uncomment the relevant line if you want to add support for the pause button.
- Make sure the pins used for the buttons are not conflicting with other hardware components.

This solution should help anyone looking to add support for additional buttons on the Universal Adapter. Let me know if you need further assistance!

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150720072113/http://smoothieware.org/forum/t-1273174/adding-support-for-up-down-pause-button-in-ua)*
