
For the [Smoothie](/smoothie.md) project, a [MCP4351](http://www.microchip.com/wwwproducts/Devices.aspx?dDocName=en547501) SPI digital potentiometer will be used to control the current setting of the 4 A4983.
That will allow direct control of the current settings from the firmware / via serial commands, and automatic benchmarking of the current settings.

Today's mission was to get it to work on a breadboard.

Here, a MCP4331 was used instead of the MCP4351, but it's basically the same thing, with less resolution.
It was soldered on a [breakout board](http://www.beldynsys.com/p535.htm)... it did not work at the first try, but finally hot air + solder paste did the job.

Now, the datasheet is one of the bad kind: no clear indication on how to get started quickly... it took about 4 hours to figure that the reset pin must be kept HIGH.
Once that was ok, it was quick to get it to work with the [BusPirate](http://dangerousprototypes.com/bus-pirate-manual/).

Quick story: Mode 5 (SPI), any speed, default options (except Normal (H=3.3V, L=GND) output), Power On (W command), Pullup resistors On (P command), and it starts responding.

Pin positions:

| BusPirate pin | Cable color | MCP43XX Pin number | MCP43XX Pin function |
| -------------- | ----------- | ------------------ | -------------------- |
| GND            | Brown       | 5                  | VSS                  |
| +3.3V          | Red         | 15                 | VDD                  | Also connect to pin 13: Reset |
| MISO           | Black       | 14                 | SDO                  |
| CS             | White       | 2                  | CS                   |
| MOSI           | Grey        | 4                  | SDI                  |
| CLK            | Purple      | 3                  | SCK                  |

Now in the Bus Pirate console, we can do things like this:

```plaintext
SPI>M5
Mode selected
Set speed:
 1. 30KHz
 2. 125KHz
 3. 250KHz
 4. 1MHz
Clock polarity:
 1. Idle low *default
 2. Idle high
Output clock edge:
 1. Idle to active
 2. Active to idle *default
Input sample phase:
 1. Middle *default
 2. End
Select output type:
 1. Open drain (H=Hi-Z, L=GND)
 2. Normal (H=3.3V, L=GND)
READY
SPI>P
Pull-up resistors ON
SPI>W
POWER SUPPLIES ON
SPI>{0b00001100 0}           // Read first potentiometer value
WRITE: 0x0C READ: 0xFE
WRITE: 0x00 READ: 0x40       // Returns 0x40
SPI>{0b00000000 5}           // Write 0x05 there
WRITE: 0x00 READ: 0xFF        
WRITE: 0x05 READ: 0xFF
SPI>{0b00001100 0}           // Read first potentiometer value again
WRITE: 0x0C READ: 0xFE
WRITE: 0x00 READ: 0x05       // Returns 5 as set
```

Checking with a multimeter shows the resistance at the corresponding pins changing: hurrah!

A word on the commands: First 4 bits are the memory address, first potentiometer (0000) in our case. The next two are the command (00 = write, 11 = read, why not the other way???). The next 10 bits are data, but for writing to potentiometers, you really only use 7 or 8 bits depending on your chip. The datasheet is pretty understandable on this.

Now all we need to do is have the same thing from an Arduino.

The pin connections from an Arduino are similar, really nothing to say on this side.

Here is the code on the Arduino side:

```cpp
#define SCK_PIN   13
#define MISO_PIN  12
#define MOSI_PIN  11
#define SS_PIN    10

class SPI{
  public:
  
  SPI(){
  // initialize the SPI pins
  pinMode(SCK_PIN, OUTPUT);
  pinMode(MOSI_PIN, OUTPUT);
  pinMode(MISO_PIN, INPUT);
  pinMode(SS_PIN, OUTPUT);

  // enable SPI Master, MSB, SPI mode 0, FOSC/4
  this->mode(0);
  }

  void mode(byte config){
  byte tmp;
  // enable SPI master with configuration byte specified
  SPCR = 0;
  SPCR |= (1<<SPE)|(1<<MSTR)|(1<<SPR0);
  SPDR = 0x01;
  tmp = SPSR;
  tmp = SPDR;
  }

  byte transfer(byte value){
  SPDR = value;
  while (!(SPSR & (1<<SPIF))) ;
  return SPDR;
  }

  byte transfer(byte value, byte period){
  SPDR = value;
  if (period > 0) delayMicroseconds(period);
  while (!(SPSR & (1<<SPIF))) ;
  return SPDR;
  }
  
};

SPI Spi = SPI();

void setup(){
  Serial.begin(9600);
}

void loop(){
  for( byte i = 0; i < 129; i++ ){
  digitalWrite(10,LOW);
  Spi.transfer(0b00000000);
  Spi.transfer(i);
  digitalWrite(10,HIGH);

  digitalWrite(10,LOW);
  Spi.transfer(0b00001100);
  byte returned = Spi.transfer(0b11000011);
  digitalWrite(10,HIGH);
  
  delay(1);
  }
}
```

What this code does, it just loops through all the values the first potentiometer can have... if you connect a LED there, you even can see it lighting up slowly in a loop.

It took a bit of time to get this too working, but now it does.

That's all for today, next: the A4983 on a breadboard!
