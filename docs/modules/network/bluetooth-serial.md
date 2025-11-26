---
permalink: /bluetooth-serial
---


# Bluetooth Serial Connection

If you wish to make your SmoothieBoard wireless, you can easily add a cheap Bluetooth SPP (Serial Port Profile) module.

## Introduction

The Bluetooth SPP module on a breakout board makes for an easily configured wireless connection for the SmoothieBoard and other motion-control units. 

## Bluetooth Module

The most popular of these SPP modules are the 'HC' series of modules.

Be careful what you buy - not all HC modules are created equal, just as not all JY-MCU breakout boards with HC-05 modules are the same.

The ubiquitous JY-MCU breakout board has been copied and made by a vast number of Chinese board manufacturers and not all of them are good - some add level shifting for all pins from 5-7V to the 3.3V needed by the HC module, some only level shift the power pins - you get what you pay for.

If you are buying from one of the well-known Chinese market sites, check the reviews of that product in the shop you are buying from.

If every JY-MCU being sold on Aliexpress was actually made by Linvor, they would be an extremely profitable company.

For an SPP module, I recommend the HC-05 Bluetooth 2.1 EDR (Enhanced Data Rate) module on a breakout board (like the JY-MCU or my personal favourite, the CZ-HC-05).

You can also use a BLE (Bluetooth Low Energy) or BT4.0 device like the HC-10, but you will need a comms device that talks BLE/BT4.0 and not many computers do (a recent-model Apple Macbook Pro/Air will be able to, my recent-model HP doesn't).

By sticking to the HC-05 you can be sure of being compatible with the majority of devices.

{::nomarkdown}
<a href="https://components101.com/sites/default/files/components/HC-05-Bluetooth-Module.jpg">
  <img src="https://components101.com/sites/default/files/components/HC-05-Bluetooth-Module.jpg" alt="HC-05 Bluetooth Module" width="400" style="float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

I prefer the CZ over the JY for a few reasons – it is really small, it is really well made, it has the KEY (P34, state pin) already broken out and it does level shifting of all the pins back to the 3.3V required by the HC module, unlike some of the other breakouts.

Of course, some of the US manufacturers make some great boards with superior features and wonderful quality control, but that comes at a price - personally I like paying $4 for a bluetooth module, rather than $25-30.

## Tools:

- 4 'DuPont' type female-female cables for connecting the HC-05
- An HC-05 BT module of some sort, on a breakout board. Not all 'HC-05' modules are created equal - check that the AT command set supports the commands we need.
- An Arduino or some other MCU to issue the AT commands to the BT module.
- A breadboard and jumper wires helps.

## Wiring

Connect the BT module to the Arduino as follows:

Arduino pins:
- D10 (RX) to HC-05 TX
- D11(TX) to HC-05 RX
- GND to HC-05 GND
- 5V to HC-05 VCC
- 5v to HC-05 KEY or HC-05 P34

Adding a signal (or voltage) to this pin when you power it on puts the HC-05 in command mode, where you can program the features.

Some manufacturers break P34 out on the breakout board, but leave the pin un-soldered, some wire it all up just like the CZ, some wire other pins.

If they haven't wired it, you will need to hold a signal high to P34 while you power cycle the HC-05 to get it into command mode.

Once you have it in command mode, you can remove the signal – it will stay in command mode until reset or power-cycle the module.

## Arduino sketch: to program the HC-05

```cpp
// SERIAL LOOP SKETCH FOR COMMUNICATING WITH A BLUETOOTH SPP MODULE

// BASE HC-05 Config Commands

// AT+ORGL (Restore the factory default state)
// AT+UART=115200,0,0 (Set transmission rate to 115200 bps, one stop bit and no parity bit)
// AT+NAME=Smoothie
// AT+PSWD=0000 Set pairing code to 0000

#include <SoftwareSerial.h>
#define rxPin 10
#define txPin 11
SoftwareSerial mySerial(rxPin, txPin); // RX, TX
char myChar ;
void setup() {
  Serial.begin(9600);   
  Serial.println("AT");
  mySerial.begin(38400);
  mySerial.println("AT");
}
void loop() {
  while (mySerial.available()) {
    myChar = mySerial.read();
    Serial.print(myChar);
  }
 while (Serial.available()) {
    myChar = Serial.read();
    Serial.print(myChar); //echo
    mySerial.print(myChar);
  }
}
```

## Configure the Bluetooth Module

Connect/power on the Arduino, load the Arduino IDE and load the sketch above.

Recycle the Arduino and the HC05 should initialise and slowly flash its LED – this indicates it is in Command Mode.

Bring up the Arduino IDE serial monitor and set to 9600+CR+LF.

Enter `AT` and you should get `OK` back.

If not, check your settings and electrical connections.

Is the HC LED slowly pulsing or fast? If it is fast, you aren't in command mode - go back over the steps above.

By default, the HC-05 should be set to:

- Slave Mode
- Connection mode: Connect to the Bluetooth device specified
- Transmission rate: 38,400 bps; Stop bit: 1 bit; Parity bit: None.
- Passkey: « 1234 »
- Device name: « H-C-2010-06-01 » (or some variant depending on what is programmed in the firmware).

The first thing to do is to ensure the module is set to factory defaults, using the `AT+ORGL` command.

Then, to set up for the SmoothieBoard:

- Set the transmission rate to 115,200 bps: `AT+UART=115200,0,0`
- Change the device name: `AT+NAME=Smoothie` (or anything you like: KillR3D, MyPrinter, Arthur, KZ223398 - the module don't care)

You can also change the pairing key if you want, either for easier access or for privacy.

My Macbook defaults to 0000, but the HC-05 defaults to 1234.

To make it publicly accessible, give it a pin of 0000: `AT+PSWD=0000`.

To make it secure, pick any 4-digits that you will remember.

```cpp
AT+ORGL (Restore the factory default state)
AT+UART=115200,0,0 (Set transmission rate to 115,200 bps, one stop bit and no parity bit)
AT+NAME=Smoothie
AT+PSWD=0000
```

There are other parameters in the AT command set, but none of them are relevant to getting the HC-05 working on the SmoothieBoard.

Connect the female DuPont cables to the 4 UART pins on the Smoothie (next to the USB connector - labelled TX RX V+ GND) and the corresponding pins on the HC-05 breakout and power up the board.

## Connect

Reboot the SmoothieBoard and you should now be able to connect using a terminal app like CoolTerm or directly using your printer app (like [Pronterface](pronterface)).

In this configuration, the UART is set to 115,200 bps, but the HC-05 is capable of 230,400bps, 460,800bps - right up to 1,382,400.

Although at those rates you will probably be experiencing some significant percentage of comms errors.

The BT SPP link itself is capable of upwards of 3Mb/s, given perfect radio conditions.

In my experience, going over 230400 doesn't really give you anything except the likelihood of more errors.

Stick with 115,200 or 230,400 as UART speeds - this is set in the config file:



{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

```cpp
# Serial communications configuration ( transmission rate default to 9600 if undefined )
uart0.baud_rate  115200   # Baud rate for the default hardware serial port
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```ini
[uart]
baud_rate = 115200   # Baud rate for the default hardware serial port
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}



It may be that you are able to perform the Bluetooth AT command setting using the SmoothieBoard itself, but I haven't investigated that method. If you have a spare FTDI USB-to-UART module, you can connect that directly to the Bluetooth module and program it using a terminal app.
