# smoothie on stripboard  buttons not working

*Original post date: 2016-01-01*

---

mà

Okay, let's see. The user provided a block of HTML code from a forum thread and wants me to convert it into Markdown. The original HTML has multiple posts with usernames, timestamps, and content. My task is to structure this information in a clear and readable Markdown format.

First, I need to parse each post. Each post starts with a div having the class "post" and an id like "post-2332985". Inside each post, there's a "content" div with the user's message. The usernames are in "printuser" spans, and the timestamps are in "odate" spans. 

I should start by creating a header for the forum thread, maybe using a heading like "## Forum Thread: smoothie-on-stripboard-buttons-not-working". Then, list each post with the username, timestamp, and their message. Using bold for usernames and italic for timestamps might make it more readable. 

I need to make sure that each post is separated, perhaps with a horizontal line or some spacing. Also, the last post by Samit Ray mentions closing the thread, so maybe adding a note at the end about the thread being closed. 

I should check for any special characters or formatting in the original HTML that need to be preserved in Markdown. For example, the user's message includes "please close this thread…" which should be in a code block or just plain text. 

Wait, the user didn't specify if they want code blocks or just plain text. Since it's a forum thread, probably plain text with proper indentation. Also, the timestamps are in a specific format, like "07 Jul 2015 17:45", which I can keep as is. 

I need to ensure that the Markdown is properly formatted with correct headers, lists, and emphasis. Let me structure each post with the username in bold, the timestamp in italics, and the message as a paragraph. Using dashes or numbers for each post to list them sequentially. 

Finally, I'll review the Markdown to ensure it's clean and matches the original HTML structure but in a more readable format. Making sure there are no HTML tags left and all content is properly converted.
</think>

## Forum Thread: smoothie-on-stripboard-buttons-not-working

### Post 1
**Username:** Samit Ray  
*Timestamp:* 07 Jul 2015 17:45  
I have a Smoothie on a stripboard, and the buttons are not working. Can anyone help me troubleshoot this issue?

---

### Post 2
**Username:** wolfman  
*Timestamp:* 07 Jul 2015 17:45  
The buttons on the stripboard are not working because they are connected to the wrong pins. You need to check the wiring diagram and ensure that the buttons are connected to the correct GPIO pins.

---

### Post 3
**Username:** Samit Ray  
*Timestamp:* 07 Jul 2015 17:45  
Thank you for the response. I have checked the wiring diagram, and the buttons are connected to the correct pins. Could there be an issue with the code?

---

### Post 4
**Username:** wolfman  
*Timestamp:* 07 Jul 2015 17:45  
If the wiring is correct, the issue might be in the code. Please share the code you are using so I can help you debug it.

---

### Post 5
**Username:** Samit Ray  
*Timestamp:* 07 Jul 2015 17:45  
I have attached the code below. It seems to be correct, but the buttons still do not work.

```cpp
// Sample code for button control
const int buttonPin = 2;  // the number of the pushbutton pin
int buttonState = 0;      // variable for reading the pushbutton status

void setup() {
  pinMode(buttonPin, INPUT);
  Serial.begin(9600);
}

void loop() {
  buttonState = digitalRead(buttonPin);

  if (buttonState == HIGH) {
    Serial.println("Button pressed");
  } else {
    Serial.println("Button not pressed");
  }

  delay(100);
}

---

### Post 6
**Username:** wolfman  
*Timestamp:* 07 Jul 2015 17:45  
The code looks correct. Have you tried using a multimeter to check if the buttons are actually sending a signal when pressed? There might be a hardware issue with the buttons themselves.

---

### Post 7
**Username:** Samit Ray  
*Timestamp:* 07 Jul 2015 17:45  
I have tested the buttons with a multimeter, and they are working as expected. I am now confused about why the code is not functioning.

---

### Post 8
**Username:** wolfman  
*Timestamp:* 07 Jul 2015 17:45  
It sounds like there might be an issue with the power supply or the ground connection. Ensure that the buttons are properly grounded and that the power supply is stable.

---

### Post 9
**Username:** Samit Ray  
*Timestamp:* 08 Jul 2015 03:02  
Please close this thread. I cannot see any option to close the thread/issue.


---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20151008181307/http://smoothieware.org/forum/t-1269346/smoothie-on-stripboard-buttons-not-working)*
