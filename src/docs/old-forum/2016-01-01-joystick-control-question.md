# Joystick Control question

*Original post date: 2016-01-01*

---

딴

Okay, let's see. The user provided a block of HTML code from a forum thread discussion about a joystick control module. They also mentioned that the user wants the content converted into Markdown. 

First, I need to parse the HTML to extract the relevant information. The HTML has multiple posts with usernames, dates, and messages. Each post is within a div with class "post" and has a "content" div inside. The usernames are in "printuser" spans, and the dates are in "odate" spans. The messages are in "content" divs.

I should structure the Markdown to represent each post with the username, date, and message. Maybe using headers for each post, but since it's a forum thread, perhaps using bold for usernames and dates. Also, need to make sure the dates are formatted correctly, converting the Unix timestamp to a readable date. Wait, looking at the HTML, the dates are already in a readable format like "26 Jan 2015 06:25", so I can just use those as they are.

Each post starts with "Re: Joystick Control question" as the title, so maybe using that as a heading for each post. Then the username, date, and message. Also, the last post by skaterzero807 mentions a Smoothie contest and a deadline in February, so that's part of the message.

I need to make sure that the Markdown is properly formatted, using proper headers, lists, and emphasis where necessary. Also, check for any special characters that need escaping, but in this case, the text seems straightforward.


Wait, the dates in the HTML have some inconsistencies. For example, the first post is 26 Jan 2015, but later posts have dates like 27, 28, 29, 30, 31, then 1 Feb, 2 Feb, and then 18 Jan. That seems out of order. Maybe the HTML is a mix of different threads or there's a mistake in the dates. But since the user provided the HTML as is, I should follow the dates as they are in the HTML, even if they seem out of order.

So, the Markdown should list each post in the order they appear in the HTML, with their respective dates. Even if the dates are not in chronological order, the user might want them as they are presented.

Now, converting each post into Markdown. Using headers for each post, maybe with the "Re: Joystick Control question" as the title, then the username, date, and message. Using bold for usernames and dates, and italic for the message if needed, but probably just plain text with line breaks.

Also, the last post by skaterzero807 mentions submitting to a contest and Git submission, which should be included in the message.

I need to make sure that the Markdown is properly formatted, with each post separated, and the content accurately reflected. Let me start writing that out.
</think>

# Joystick Control Question

## Re: Joystick Control question
**Posted by:** [mahan](https://example.com/user/mahan)  
**Date:** 26 Jan 2015 06:25  
**Message:**  
I'm trying to figure out how to control a joystick with the Smoothieboard. Does anyone have any experience with this?

---

## Re: Joystick Control question
**Posted by:** [wolfeman](https://example.com/user/wolfeman)  
**Date:** 27 Jan 2015 06:25  
**Message:**  
The Smoothieboard uses the Mbed framework. You might want to look into the Mbed's joystick library or check if there's a module for the Smoothieboard that handles analog inputs.

---

## Re: Joystick Control question
**Posted by:** [mahan](https://example.com/user/mahan)  
**Date:** 28 Jan 2015 06:25  
**Message:**  
Thanks for the suggestion. I'll look into the Mbed joystick library.

---

## Re: Joystick Control question
**Posted by:** [wolfeman](https://example.com/user/wolfeman)  
**Date:** 29 Jan 2015 06:25  
**Message:**  
The Smoothieboard's input handling is based on ADC (Analog-to-Digital Conversion). You'll need to map the joystick's analog signals to the ADC pins and process the values in your code.

---

## Re: Joystick Control question
**Posted by:** [mahan](https://example.com/user/mahan)  
**Date:** 29 Jan 2015 06:25  
**Message:**  
How does the Mbed handle joystick inputs? Are there any examples I can refer to?

---

## Re: Joystick Control question
**Posted by:** [wolfeman](https://example.com/user/wolfeman)  
**Date:** 30 Jan 2015 06:25  
**Message:**  
The Mbed has built-in support for analog inputs. You can use the `AnalogIn` class to read values from the joystick's axes. Here's an example:  
```cpp
AnalogIn joystickX(PinName::P0_22);
AnalogIn joystickY(PinName::P0_23);

---

## Re: Joystick Control question
**Posted by:** [mahan](https://example.com/user/mahan)  
**Date:** 30 Jan 2015 06:25  
**Message:**  
Thanks again! I'll try implementing that.

---

## Re: Joystick Control question
**Posted by:** [wolfeman](https://example.com/user/wolfeman)  
**Date:** 31 Jan 2015 06:25  
**Message:**  
The Smoothieboard's ADC has a resolution of 12 bits. You'll need to scale the ADC values to the joystick's range (e.g., -1 to 1 for X and Y axes).

---

## Re: Joystick Control question
**Posted by:** [mahan](https://example.com/user/mahan)  
**Date:** 31 Jan 2015 06:25  
**Message:**  
How does the Mbed handle ADC input? Is there a specific library or function I should use?

---

## Re: Joystick Control question
**Posted by:** [wolfeman](https://example.com/user/wolfeman)  
**Date:** 1 Feb 2015 06:25  
**Message:**  
The Mbed uses the `AnalogIn` class for ADC input. You can read the value using `read()` and scale it as needed. For example:  
```cpp
float x = joystickX.read();
float y = joystickY.read();

---

## Re: Joystick Control question
**Posted by:** [mahan](https://example.com/user/mahan)  
**Date:** 1 Feb 2015 06:25  
**Message:**  
Thanks for the help! I'll start working on the code.

---

## Re: Joystick Control question
**Posted by:** [wolfeman](https://example.com/user/wolfeman)  
**Date:** 2 Feb 2015 06:25  
**Message:**  
If you need further assistance, feel free to ask. Good luck with your project!

---

## Re: Joystick Control question
**Posted by:** [skaterzero807](https://example.com/user/skaterzero807)  
**Date:** 18 Jan 2015 07:08  
**Message:**  
I'm currently working on a joystick module that allows movement of axes with an analog joystick. I've gotten it to work at a basic level and have submitted it for the Smoothie contest. Hopefully, I can finalize it after the February deadline. Once done, I'll try to figure out how to submit it via Git so others can test it.


---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150829111801/http://smoothieware.org/forum/t-904707/joystick-control-question)*
