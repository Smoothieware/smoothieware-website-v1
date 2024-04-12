
You have now successfully connected to the Smoothieboard using [Pronterface](/pronterface.md) over the USB cable.

Now we want to check if the board actually answers to requests from you.

In the Pronterface interface, on the bottom right, there is a text input, which allows you to enter commands to be sent to the board.

In that input type:

```
@version
```

Then click on `Send`.

If the board answers something like this:

```
>>> @version
SENDING:version
Build version: edge-0e69deb, Build date: Mar  1 2015 16:02:03, MCU: LPC1769, System Clock: 120MHz
```

Then the board does answer to your commands, click on **Yes**

Otherwise, if the board does not answer, or if Pronterface returns an error, click on **No**

---

[**Yes**](/debug:get_answer_over_serial.md){: .btn .btn-success .btn-lg .btn-block}

[**No**](/debug:no_serial_answer.md){: .btn .btn-warning .btn-lg .btn-block}
