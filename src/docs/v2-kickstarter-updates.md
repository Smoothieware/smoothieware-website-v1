Update #1
Pin
First day !
user avatar
Arthur WolfCreator
September 8, 2019
It's been one day and we are close to the minimum goal for production, thank you so much to all of you who had been waiting for a long time to back the project, and thank you to everyone who has backed so early.

So far this is going faster than the v1 Kickstarter did, which is very encouraging.

If you have any question or need any help, again don't hesitate to ask.


Update #2
￼Pin
Goal reached !
￼
Arthur WolfCreator
September 10, 2019
Woohoo, we got there already :) Thank you so much to everyone for the support so far !

Again, if you don't mind taking a minute, sharing a link to the Kickstarter on your social media is exactly how this sort of project becomes succesful, so don't hesitate :)

Cheers !

Update #3
￼Pin
Done !
￼
Arthur WolfCreator
September 29, 2019
The Campaign is finished ! Thank you all so much !

We are working on the next proto of v2-prime, we'll have views of the new PCB very soon.

We are also going to do an Indiegogo in a bit as lots of people asked for it to be able to pledge even after the campaign ends ( that is now ).

Update #4
￼Pin
Development update
￼
Arthur WolfCreator
December 7, 2019
Hello everyone.

Here's an update to keep you up to date with what we've been working on and where things are at with the design and prototypes.

As mentioned before, we have a prototype of each of the three boards, the pro being the oldest, and the prime the most recent. Prime and mini only have minor issues to solve that were discovered during testing of the protos we have. Not easy as in "quick", more easy as in "straightforward". There's an exception to this and that's Ethernet, more on that below

Mark has been working on turning the design for the v2-prime prototype into a production design. Here are some of the things he's done on it : 

We had issues with 5V flowing back into the motor voltage circuit, due to the new circuit being much more advanced than what we had in v1 ( Smoothie v2 has it's own onboard regulator, which can do 3A, where v1 was optional and only 0.5 or 1A ). Solved by adding a diode :

￼
￼
On the original design for v2-prime, we tried two ROM options. In the final design, we only need one of the two. This freed some board space, and we used that to add more gadgeteer ports. So you bought a board with 6 gadgeteer ports, but will actually be getting one with 9 ports. Because we use a BGA256 chip we actually have that many pins. This is a huge improvement over v1 which had an LPQF100 chip and only a dozen free pins ( which were not as easy to access as the gadgeteer ports make them on v2 ). We think there is a chance we might still add one more to the board, it'd be surface mounted. These are the new gadgeteer ports right next to the microcontroller :

￼
Previous routing for comparison : 

￼
We realized we can control the "enable" status using SPI commands instead of having to use a pin for it, so we tied ENN to GND, and freed up the pins for other uses in the future : 

￼
￼
Additionally, we also changed the ADC protection diodes to MBR0520L. Mark says « By using slightly more expensive Schottky diodes with only 0.3V forward voltage the Zener is not needed anymore and the circuit is much simpler and more reliable. » V2-prime and pro have much more protections on the ADCs, stepper motor drivers and other I/O.

Smoothieboard v2 prime has an Ethernet connector that will serve a web interface amongst other things. We have tested that Ethernet port, and it is functional. However, we have found under some circumstances it keeps switching between half and full-duplex. That doesn't prevent it from working, but it's not the kind of thing you want in a production design. So Mark is working on making the design closer to other designs we know to work correctly. That's the last big thing that's still to do on v2-prime. We've had some delays caused by research into figuring out this problem, but we have good hopes the next prototype will fix them.

Still todo on the v2-prime : 

Ethernet redesign
Adding a control circuit to the SSR outputs, this was a bit more complex than initially expected but we have a good way forward
Swap VFET protection circuit to use PFet instead of stacked NFets
Break out the stepper motor control SPI port to allow control of external drivers
Still todo on the v2-mini: 

Port over some of the recent changes from v2-prime
A few ideas to reduce the price further, that's the main focus of the "mini"
Complete re-routing, this was planned from a long date and should be fairly quick as the design is much simpler than the other ones.
All in all, we expect to be able to make test runs of the v2-prime and v2-mini designs very soon. 

We'll keep you updated as production starts, when we get the boards, and of how testing goes. Once that's done, we can pretty much start production and shipping the boards to you. Can't wait to get there.

To finish, I'll answer Kevin Bartlett's question from the comments : 

« I wonder if you could include in the next update a very brief  description of what type of improvements we can expect from the switch  to FreeRTOS, or what deficiencies you were aiming to mitigate by  switching? »

This will improve the overall code quality and structure. Things that are very important to Smoothie and that make it we have been able to keep the codebase sane despite the many features having to interact with each other, and supporting both 3D printing and laser/CNC uses. 

I'm sure you care more about "performance" improvements though, and there definitely will be some. A great example of how this will help is Ethernet. On v1, you can use Ethernet and it will serve a web interface. However, if you reload the page ( which requires accessing the SD card to read the file ) while the machine is currently playing ( executing Gcode ) it can result in a crash. The documentation on v1 simply says not to do that. We just don't have enough RAM and processing power on v1 to fix that. With v2, we had enough that we could switch to a RTOS, and it allowed us to design the Ethernet code in a way that doesn't have this issue.

« Also any information on support for SPI peripherals such as the MAX31865 for PT100 sensors? »

We plan on supporting PT100 to the level v1 currently does ( http://smoothieware.org/pt100 ) shortly after release as more of the v1 code gets ported over to the v2 codebase. MAX31865 support would be a new feature, it's not currently on the todo list, but might get there as other things get done ( assuming one of the contributors actually has the hardware, which is sometimes the limiting factor ). And if somebody wants to contribute the code for it, they are very welcome, and contributing to v2 is expected to be even easier than with v1.

As we make more and more gadgeteer extension boards, we intend to get to some of the SPI ones and MAX31865 would be a good candidate. Once we actually have the board available I expect firmware support would come very quickly.

That's all for today, if you have questions don't hesitate to ask in the comments ! Thanks again for supporting the project !

Update #5
￼Pin
Last prototype before production
￼
Arthur WolfCreator
February 16, 2020
Hello all !

We've been delayed a bit by issues with the Ethernet feature. We are now doing one last prototype to test that we have correctly fixed this issue, as well as to validate all other features.

Hopefully, this is the very last prototype, and once it's done, we can immediately produce the actual boards to send to you.

We are now ordering the components and PCBs for these last prototypes of v2-mini and v2-prime. As soon as the ordering is done, we are starting work on the v2-pro redesign, so it can go through the same process. Once we receive the components and PCBs, we'll assemble the prototypes, and test them as soon as possible. We are doing all we can to expedite the process.

Here are links so you can take a look at the very latest PCBs for prime. Note we have to separate into several links as Gerblook has a limit on layers, and prime has 8 (!) layers.

https://www.gerblook.org/pcb/rQuPpwcjaB2LPob6V82wMJ ( 1/8 and masks )
https://www.gerblook.org/pcb/eXyoxJwqHGZ2agrAx49jdF ( 2/7 )
https://www.gerblook.org/pcb/vV8haFpwnLhTA3UhTxz4R ( 3/6 )
https://www.gerblook.org/pcb/VhUm2qPF8J9vVZ6Kb2Rxgd ( 4/5 )
Also, here's an animated Gif if you don't want to click on the links to see the details: 

￼
Thanks for your patience, the next update will be for the prototypes starting testing, or progress on v2-pro, whichever comes first.

Cheers !

Update #6
￼Pin
Mini update
￼
Arthur WolfCreator
March 25, 2020
We got tracking on the PCBs for the last v2-prime proto, finally!

https://www.dhl.com/en/express/tracking.html?AWB=9104975526&brand=DHL

They were delayed by the current mess ( we wouldn't have ordered from China if we had known what we know now ). But what's important is they are on their way, and very soon we'll be able to assemble boards and do the ( hopefully ) last run of testing before production.

Things have been pretty tough lately. Smoothie isn't enough for me to make a living, we don't make enough margin, and the cloners take a lot of our sales away. So as a side gig, I've been selling Smoothie-powered laser cutters, CNC routers and giant 3D printers via my company Robotseed.com ( the entity legally responsible for this Kickstarter, and one of the main contributors to the Smoothie project ).

Unfortunately, those machines *also* come from China, before we pimp them out for EU sales, and not being able to get them here means that source of income too has dried up.


However, we expect things will progressively get to normal, and more importantly for you awesome backers, we don't think the virus will delay things more than the few weeks it has so far.

I'll update you as soon as we have more to show you, stay tuned.

Thanks a lot also for all the people offering support and kind words, it really helps a lot.


Cheers !

Update #7
￼Pin
Coronupdate
￼
Arthur WolfCreator
May 15, 2020
Hello everyone.

Hope you're staying safe. 

A lot of you have printed PPE for local medical personnel, it was super fascinating/admirable to see. 

We offered to send people free smoothieboards if their board is broken while printing PPE ( including non-smoothie owners ), and close to 20 answered/got boards, so one can only imagine how many were printing if this many needed new boards.

On the Smoothie front, our current income ( smoothieboard sales are only a small part of it, it's also selling smoothie-powered machines, consulting work etc. These have been the main financiers of Smoothie dev these past few years ) has plummeted, like it has for a lot of others. We are working on recovering/getting back to normal, but as our customers are slow to do so, it slows us down a lot also. 

Not having revenue is really making things complicated, but thankfully we did most of the spending for the current round of prototypes before the current crisis started, so the main impact has been that shipments ( PCBs, stencils ) have been delayed. 

Right now, Chris, who will be assembling the boards, is setting everything up, and should start assembling quite soon. Once we have the boards, testing begins, and that's where we'll know if this design is ready to ship to you, or if there's still some kind of issue we need to figure out. Really hoping it goes smoothly.

If you have any kind of question, don't hesitate to ask, here in comments, or directly at wolf.arthur@gmail.com

Thank you again so much for your support!

Cheers.

Update #8
￼Pin
July Update
￼
Arthur WolfCreator
July 19, 2020
There were lots of delays recently due to the virus, both in supply and in availability of workers, but we are finally getting there: the new v2-prime prototypes are nearly fully assembled.

Here are some pictures from the ongoing work:

￼
￼
￼
￼
The fact that there are components on both sides of the board has made prototyping more difficult than with previous boards, but Chris is now very close to finishing assembly on these, which will mean we then get to actually testing them, and hopefully that will confirm all outstanding issues have been resolved, and we can move on top actual production.

And that's not all! We also have significant progress on the firmware side of things.

Jim has implemented firmware-flashing features right into the Smoothie firmware. The board will have a bootloader to make sure it can never be bricked, but the "normal" way of flashing it will be done by the firmware itself.

One of the really neat things about this, is for example we'll be able to package web interfaces and documentation along with firmware files. So you'll only need to download and drag/drop a single file to upgrade your whole system.

But Jim made this even better: He implemented a system where the board itself automatically downloads the upgrade from github over it's Network interface. 

Using this, you can fully upgrade your board with a single click or command. Pretty cool I think. We're all about the littel things that make it less of a pain to use the system, and this is one I really like seeing happen: it was planned to be done in a long time, but Jim just had a try at it and got it to work very fast.

I should have another update for you very soon, stay tuned.

Update #9
￼Pin
Assembly
￼
Arthur WolfCreator
July 27, 2020
As the assembly is now nearly done ( the reflow oven took more time to get up and running than we expected ) on the v2-prime last prototypes, I wanted to share a few pictures of the process with you, hope you find them interesting/exciting:

￼
￼
￼
￼
￼
￼
￼
￼
More updates very soon as testing begins. We've actually done some testing already yesterday by testing some possible solutions to the Ethernet issue.

Update #10
￼Pin
New feature
￼
Arthur WolfCreator
July 29, 2020
As we make progress on the last prototype for v2-prime, Jim ( Smoothie firmware lead dev, did all of the current v2 firmware, that currently can 3D print, laser, etc ), added a very cool new feature.

Chris ( who is assembling the prototypes ) wanted to share this new feature, so he did an update in the form of a video. Here it is: 

￼
So yeah, no more downloading files, copy/pasting them, resetting, etc. 

Just one command sent via UART, or USB Serial or Telnet or the web interface, and you get the latest firmware, the board takes care of all of it for you and does it very safely ( safer than the manual method in v1, which while it was a great improvement over previous systems, wasn't perfectly safe, we got people reporting corrupting their firmware a few times a year. This will avoid that ).

I really like giving you guys updates, but it feels nice somebody else takes does that work for a bit :)

Update #11
￼Pin
Last prototype, bonus, other news.
￼
Arthur WolfCreator
January 18, 2021
Hello everyone, hope you are doing well.


Things have been pretty harsh for the team here like they tend to be all around, but we are still making progress, and are now very close to being able to finally fulfill your pledges.


First off, some of you asked for more details on the work that has been going on, and on the details of the fixes/improvements that went into the latest revision of v2-prime beta. Chris Cecil, who assembles the v2 prototypes, has made a very detailed write-up on that, which you can read here: https://www.robosprout.com/smoothieboard-v2-prototyping-update-1/


About where we are. We have v2-mini ready for production, and we are just putting the finishing touches on v2-prime to be able to produce both together and finally start fulfilling pledges.


One thing that happened with v2-prime, is Jim Morris, who writes the v2 firmware and has been testing/using the v2 prototypes for a while (he uses them in 3D printers, lasers etc for months, giving us quite a bit of confidence in the current design), and has had, on one earlier v2-prime alpha board, some of the endstops die with no satisfactory explanation.


We do not currently think this is something that would happen in a production batch of the final design, but we don't want to waste time or take any risks, so we are upgrading all v2-prime (and later all v2-pro) endstop circuits to use optocouplers in the final production design instead of the current design. v2-mini keeps the exact proven design v1 had (and has not displayed those pin deaths).


So that's the good news: you're all getting more than you paid for, you are going to get opto-coupled endstop inputs, potentially making them much sturdier than they normally would be. Yay!


We now have only minor amounts of work to do in the Kicad/design side of things before we can start production, however Mark Cooper, who has done the design of all boards so far, is less available than he normally is (due to the general situation, and some family/health issues), so to speed things up, I'm currently looking for help to speed this last stretch and finally get everybody what they deserve.


I've been contacting some of the (many) people who over the years have offered PCB design help to the project, however, if you feel you can do Kicad work to the level required for small fixes and the aforementioned switch to optocouplers, and you want to help, don't hesitate to contact wolf.arthur@gmail.com 


As soon as the v2-prime and v2-mini boards ship, we will switch all design work to v2-pro and finally start working on the v2 documentation.


Thank you again for your patience, it hasn't been easy but we are really getting there now.

Update #12
￼Pin
Chip shortage, new design, prototypes [September 2021 Update]
￼
Arthur WolfCreator
September 6, 2021
Hello everyone!

Thank you so much for your patience and for backing the project!

This is our update on the project, the chip supply situation, to provide extra information, answer your questions, and clarify everything as much as we can.

If like many CNC nerds and hackers, you follow Hackaday, you might have seen the article about this Kickstarter and the current worldwide electronic component supply issues (https://hackaday.com/2021/07/17/tales-from-the-global-chip-shortage-smoothieboard/ ). Pretty cool!

(Note: If you don’t want to read so much, there is a TL;DR section at the bottom of this update)

THE PROBLEM
The Covid-19 pandemic has created a lot of issues in the worldwide production of electronic components/chips.

Many components are out of stock, or sold at exorbitant prices.

If you are curious about the reasons behind this, this article might be a good start: https://www.wsj.com/articles/why-the-chip-shortage-is-so-hard-to-overcome-11618844905. Also this Youtube video: https://www.youtube.com/watch?v=_OVPOSRIYZY 

When we produced Smoothieboard v1 boards recently for people who use them in OEM/series production machines, we had to pay 3 to 4 times the usual price for the LPC1769, and have even seen chips sold for over $100.

Even the cloners and counterfeiters are/were steeply increasing their prices, running out of stock, or switching to counterfeit components.

And now the LPC1769 is completely out of stock, impossible to source/purchase anywhere, at any price.

IMPACT ON SMOOTHIE V2
The LPC4330 chip, that the Smoothieboard v2 was originally designed around, is also out of stock worldwide currently, you can’t buy it, even at higher-than-normal prices, and it is likely that this situation is going to last for more than a year more from now.

This means, as things are, we have no way at all to produce the Smoothieboard v2 design we worked so hard on these past two years.

When we first realized this was an issue, we were trying to purchase LPC4330 chips for the very last prototype run of the v2-prime board, and that’s when we noticed the availability issue.

￼
Zero stock of Octopart
No LPC4330 chips available, means no prototype, means the project is at a complete standstill, unable to make any progress (that is, test our designgs so we can confirm they work). And even worse, it means we can’t make any of the boards you pledged for and are waiting for.

If we had been able to make these prototypes, and there were no supply issues, right now you likely would have your v2-prime (and v2-mini) in your hands, with work on v2-pro well on its way.

But unfortunately, that’s not the situation. The chip can’t be found, so we can’t finish the dev work on the system, and we can’t provide boards to our backers for at least a year.

At least, not with the current design.

OUR SOLUTION: SWITCH MICROCONTROLLERS
Enter Kliment, Reprap legend, author of Pronterface ( https://www.pronterface.com/ ), and amongst many other projects, one of the first 32bit Reprap boards, created around the same time Smoothieboard was ( https://reprap.org/wiki/4pi . Kliment helped a lot with Smoothieboard while designing 4pi at the time, too ).

When we discussed our current predicament and situation, he offered to help.

We discussed the problem and possible solutions, and it was decided to upgrade the board to a chip that was more recent (and therefore more powerful than the one you paid for when you backed the project), and more importantly, that was (at the time) available for purchase at normal prices and in large quantities: The STM32H7: https://www.st.com/en/microcontrollers-microprocessors/stm32h7-series.html

The STM32H7 is a more powerful chip from a different manufacturer (STM)  than the LPC4330 (LPC), that messed up less in their production, and thus has more chips available.

Pretty much every characteristic of this chip is better than the LPC4330.

￼
Presentation of the STM32H7 Series
Another advantage is the person porting the firmware to v2 (Jim Morris) strongly prefers STM from a software/tool chain/firmware point of view, and was always annoyed having to work with the LPC chips, so this is a nice change for him.

You are getting your board late, but you are also getting a truly massive upgrade compared to what you would normally have gotten.

There is a minor price/cost hike on the chip itself, which we will be absorbing.

Also, the new design will have increased costs, again we are also going to take those upon ourselves, we will not be asking you anything for the upgrade, this is all free for you.

See the comparison of the two chips:

￼
LPC4330/STM32H7 comparison table
Source for this table: https://docs.google.com/spreadsheets/d/1DDMflx5Cr8gOOoUEgHUeac6ta_YS8VEiQUdXbmI4kdU

Some highlights to get excited about:

The core types get upgraded from M4+M0 to M7+M4, the speed doubled. This will have massive impact on performance. The FPU is also more capable, and the chips have all sorts of fancy/helpful features that will make dev easier/nicer, and allow for new/better features.
 
We get massively more RAM: From 164 to 1024 kilobytes. 164 was already extraordinary (v1 was 64kB), more than we really immediately needed, but 1024kB opens the door for a lot of fun possibilities, for example running some time-critical code from RAM instead of flash, so it executes faster.
 
Some internal flash (2Mb) where the previous design had none, and relied only on the external 8Mb of QSPI flash, which is slower than internal flash).
 
More precise ADC : 16 now vs 12 bits before (like v1), with more ADC-capable pins and faster/better ADC abilities.
 
More peripherals overall, and more capable peripherals, which means more options for extensions and future development. In particular, more/better timers, but also improvements on the communications side of things.
 
Are you jumping in your seat yet? I sure am. Have been for months as we’ve worked on this, my chair is getting pretty damaged.

PERIPHERAL CHANGES
There are also some other changes to the board, for example the stepper driver is changed too, for supply reasons too (the one we originally used is out of stock, we used another one).

The old chip we planned to use on the previous design was the TMC2660 ( https://www.trinamic.com/fileadmin/assets/Products/ICs_Documents/TMC2660C_Datasheet_Rev1.01.pdf ). It was capable of a maximum of 2.2A RMS current per coil.

The new chip is the TMC2590 from Trinamic ( https://www.trinamic.com/products/integrated-circuits/details/tmc2590-ta/ ).

Because it does not have integrated FETs, but uses external FETs ( https://www.onsemi.com/pdf/datasheet/si4542dy-d.pdf ) , which we can choose, and we have to populate ourselves on the board, it is able to handle more current.

We’ll be able to do a low power version at 2.4A RMS (default), and a high power version at 4.6A RMS (exact values subject to change).

Note: Why different stepper driver power/current ability versions/models/setups? Different combinations of sense resistors and configurations make for setups optimized for different ranges of stepper motor power/current rating, so while the Mosfets are always the same, and could in theory be able to handle up to 6A, we have to choose a range and configure/populate the board for that range, and using steppers outside that range will result in sub-optimal performance (what that means exactly, we are not sure at this point, and plan to actually test for). But the basic idea is that we can’t just populate the board in a way that allows you to use *any* stepper from 0 to 6A, we have to choose smaller ranges, and for the first version, this will be something like 0.8A to 2.4A, and soon after we will likely try to do a version that allows 1.4A to 4.6A (all RMS). If you are curious about this, I recommend you take a look at the documentation from Trinamic about these chips (see link for TMC2590 just above).

(Note: All current values given here are estimations at this point in the design process, and are subject to change. All we guarantee at this point, is the RMS rating of the v2-prime will not be lower than the one advertised at the Kickstarter page when you pledged, that is 2.2A RMS. But it might be 2.4A as said above, or it might be 3.1A, we do not know for sure yet, testing is ongoing).

Another change is we removed the Raspberry Pi port, it was a bad design, it didn’t work (mostly for reasons that are due to decisions from the Raspberry team’s side of things), and after trying again and again in each prototype, we are replacing that with a simple gadgeteer/extension-based board/adapter, which will make interfacing with a Raspberry Pi trivial.

Another change, that’s not a hardware one, but that is worth mentioning, is how accessing the SD card will work. Before, you plugged the board via USB, and you would immediately get the SD card mounting on your computer, so you could access it and edit your config. This was very convenient, but had an issue (due to the way MSD access is designed as a standard, this has nothing to do with anything we did/are doing) that you could sometimes corrupt your SD card. To solve this issue, you now do not get the SD card mounting automatically by default, and you need to either press a button on the board, or send a command via serial, or press a button in the web interface, for the SD card to mount on your computer via USB/MSD. It’s a small extra step, but it’s technically more correct, and removes the risk of corruption of the SD card happening. Ultimately, all of this will be made obsolete when we implement USB/MTP, which allows for safe concurrent access to the file system on the SD card, which will allow us to get rid of the button press, while still keeping everything perfectly corruption-safe.

NEW DESIGN
So, Kliment made a new board from scratch. You can see the new design’s PCB here:

￼
Front view of the Smoothieboard v2 STM32H7 re-design by Kliment Yanev ( https://github.com/kliment ). Source: https://github.com/Smoothieware/Smoothieboard2/blob/h7-redesign/frontview.png
￼
Back view of the Smoothieboard v2 STM32H7 re-design by Kliment Yanev ( https://github.com/kliment ). Source: https://github.com/Smoothieware/Smoothieboard2/blob/h7-redesign/backview.png
Some interesting features of the new design:

Like on Smoothie v1, and the LPC4330 v2-prime before it, this board makes its best effort to have connectors around the periphery of the board as much as it can.
 
The board is 110x110mm, and the mounting holes are 100x100mm apart.
 
The stepper motor connectors have mounting options to easily double the number of connectors, so it is now trivial to wire two stepper motors in parallel for an axis, simply solder an additional connector there, and you’re done.
 
There are more gadgeteer ports than on the previous version ( *nine* ! ), and they are neatly arranged in a column. You can see the pinouts here: https://github.com/Smoothieware/SmoothieV2/blob/master/pins.md
 
There is now a support for a cell/coin battery, which will allow those who want to, to enable the RTC (Real Time Clock), so that the board keeps track of the current date, and the dates for the files on the SD card are correct and current.
 
The endstop inputs now have actual buffers («TPD4E1U06 Quad-Channel, High-Speed ESD Protection Device») to protect them, instead of the simpler circuit they had previously, making them much more resilient/protected. Note, we now also have these buffers on the USB ports, by the way. https://www.ti.com/lit/ds/symlink/tpd4e1u06.pdf
 
The stepper drivers have TVS diodes for protection on the stepper motor outputs, making them much more resilient than a classical/straightforward setup like found on most boards / Smoothieboard v1 had.
 
The LPC1769 (Smoothie v1)  had an option to configure GPIO pins as open-drain ( https://smoothieware.org/pin-configuration ). The LPC4330 lacked this, which was a downgrade from the original v1 design. There was a way to still get a pin to work as Open-Drain, but it was a hack. The STM32H7, on the other hand, has native support for Open-Drain pin configuration, and on the GPIO front, is pretty much feature-equivalent to v1.
 
The probe input can handle up to 36V (where it was previously not sure if it would be 24V or 36V). In theory, it should be able to handle even more, but we’ll be rating it for 36V. This means you can very easily use it with inductive sensors, no need to add voltage dividers or any of those sorts of headaches.
 
The bottom of the board has a flat/component-free area for heat sinking/easily adding heat sinks. That should not be strictly required as the PCB itself is designed to provide enough heat sinking, but there are special cases (if the board is stuck in a poorly ventilated enclosure, or if you live in the desert) for which this is a neat addition.
 
STM32H7 IS OUT OF STOCK, WE ARE DOOMED! ARE WE?
After hearing we are changing chips, some of you might have immediately taken to Google with healthy skepticism, to check if maybe our plan sucks: After all, if we switch to STM32H7, but that becomes unavailable too, we just wasted months of work redesigning for that new chip, and we’re back to square one, unable to make boards anyway.

And if you look at stock on Octopart right now ( https://octopart.com/stm32h743vit6-stmicroelectronics-76372527 ) , STM32H7 IS out of stock !!! Noooooo !!!

But guess what. We’re the ones who bought all of it! (Well, not alone, I’m sure :) Other purchasers around the planet might have helped a bit).

We’ve got enough in stock, in our hands, to make all the Kickstarter boards (your boards), and even start production on top of that. We expect we have enough to ride the entire year until the situation is resolved, and chip supply is back to normal.

Chris Cecil is actually the one who did all the logistics/organizing/purchasing for this, it’s thanks to him that supply for your boards are guaranteed. At the time he did all this, by himself, I was in a panic looking for a job not to get kicked from my home due to COVID-19-related debts/lack of work, so if he hadn’t taken it upon himself to take care of all this, I wouldn’t have been able to, so he really rules for managing this.

( Note: If you want to hear more about Smoothieboard v2, the work around the new design, the worldwide chip supply issues, and all the project’s adventures solving these issues, Chris made a very long/complete write-up about all of this, which is so neat that it triggered Hackaday to make an article about it. You can read the write-up/update here:

 https://www.robosprout.com/status-of-smoothieboard-v2-september-2021-update/ The most recent update (September 2021).
 https://www.robosprout.com/the-global-chip-shortage-and-smoothie/ You can also read a previous pretty complete/long update here.
 https://www.robosprout.com/smoothieboard-v2-prototyping-update-1/ Written when we were still planning on using LPC/NXP chips, and we were very close to finishing dev on that version.
)

And he did this not just for the STM32H7, but also other components like the Ethernet PHYs, ceramic capacitors, MosFETs. Some other chips we are pre-ordering, and they are coming soon.

Update: Just before posting this, we have enough components to produce about 500 boards, except for the stepper motor drivers, which we are still sourcing.

MOVING FORWARD
So, we have a new design.

We now need to make a prototype of it, so we can test it. That is going to take a few weeks from now, we are just waiting on a bit of money from (non-smoothie) salaries and (smoothie v1) sales to do the ordering of the PCBs (Update: Got the PCBs!)

If that prototype works, and there is no fundamental issue with it (we are very hopeful that will be the case), then we will just need one last prototype to fix the unavoidable small issues the first proto will have, and we’ll be able to start production.

This means, if everything goes well, and there is no major issue ( that was close to being the case for the LPC4330 version, for reference/comparison ), we are right now two to three months away from starting work on production.

Note: By the way, Jim Morris (wolfmanjm) does amazing work, and has very quickly ported the LPC4330 firmware (which was already able to do 3D printing and laser work on the LPC4330-based version of v2-prime protos we had made/working) to the STM32H7 chip, and has it working so well he’s been able to do actual CNC work with it.

You can see the firmware actually driving motors here: https://youtu.be/p3UXBg1yU3A

WE NEED HELP
Mark Cooper (Logxen, of Uberclock, who finished the original v1 design) was originally the person working on the v2 board designs. For personal reasons, and in part because of Covid, he is no longer able to do that work, which is now being done by Kliment.

Thank you so much again, Kliment, you saved the project: Before Kliment came forward to redesign v2-prime for STM32H7, I was in the process of organizing a group of contributors (people who over the years have offered to help the project, but for most of them, have not yet) to collectively work on the designs together, which would not have been as easy/efficient as the work Kliment has been doing.

There is still something we need help with, though: Extension boards (See specs for the extension boards at goo.gl/XP5iZc ).

A big part of the v2 project is our very large planned series of extension boards. We already have about a dozen designed, but Logxen is not going to be working on them, and Kliment is busy with v2-prime and not planning to work on extensions.

So for the extension boards, we need the community’s help. Your help. About half of the boards that have been done so far have been done by volunteers, members of the Smoothie community who answered previous calls for help.

This is another call for help!

Please if you know electronics design, and KiCad, we need your help!

This is extremely easy work, the boards are very simple, most of them, we just need you to spend a few hours doing the actual design, and publishing it to Github.

Please if you feel like helping the project, email wolf.arthur@gmail.com, and I will help you get started.

You would be helping the community massively, you would have my eternal gratitude, and I would definitely give you free hardware (once the boards start shipping) and any free help you might want with anything I can help with (though I offer that to everybody, so it’s not a very exclusive reward :) ).

( Note: It’s not just Mark Cooper having issues with Covid. Arthur Wolf/me writing this, have lost the revenue from selling Smoothie-powered laser cutters and CNC routers, as well as from the sale of v1 Smoothieboards due to the chip outage, and as such have had to take a salaried job for the first time in a decade, working with the awesome people of Wire ( https://wire.com/en/ . Their product is Open-Source, and it’s really great, take a look at it if you are looking for a safe communication system ). Chris Cecil has similar issues, and is working extra hard to help v2 move forward on top of working on making ends meet, providing an amount of effort and help to the project that is truly amazing. )

IN CONCLUSION
Thank you so much for your patience.

While only a very minor part of the delays have been due to actual technical issues, and most of it has been due to Covid, we still very much appreciate all of your patience and the amazing support you’ve shown us.

We are so glad to be able to make progress and work around the chip shortage, and very happy about upgrading the chip to a better one. This is all very exciting, and we can’t wait to finally be able to ship your boards.

TL;DR 
« Too Long, Didn’t Read » :

In short: there is a worldwide shortage of components that doomed the v2 project to at least a year of additional delays, but we found a solution, redesigned the board around a new (and much more powerful/recent, meaning you get a free massive upgrade compared to what you originally ordered/paid for/supported), and we pre-ordered the components, so we will not be missing components when we get to actual production of your pledge boards.

REFERENCES
Link to the Smoothieboard v2 specifications, for more information/details on the v2 specs, plans and discussions by the dev team and community: http://goo.gl/ojN5eM
 
You can find the new design in Kliment’s branch of the original v2 repository, on Github at: https://github.com/Smoothieware/Smoothieboard2/tree/h7-redesign
 
Jim Morris’ new port of the firmware to STM32H7 can be found on Github at: https://github.com/Smoothieware/SmoothieV2
 
You can see a full schematic of the new design on Github at: https://github.com/Smoothieware/Smoothieboard2/blob/h7-redesign/smoothiev2-prime.pdf
 
ST produces very nice video presentations/documentation for the features of the chip, some of those are very interesting, and might help you if you are curious about the new chip, and/or want to implement some interesting new feature into Smoothie v2: https://www.st.com/content/st_com/en/support/learning/stm32-education/stm32-online-training/stm32h7-online-training.html 
￼
Current PCB (Front)
￼Like


Update #13
￼Pin
Quick december update
￼
Arthur WolfCreator
December 6, 2021
Chris has finished building the prototype of the new STM32H7 Smothieboard v2 design.

It's been on its way to Jim Morris for firmware development for a while now, but got stuck at customs from the US to the UK. It is expected to start moving soon though. 

Here is a quick video by Chris of the board actually running a test firmware:

￼￼ PLAY
Expect more updates soon as firmware development and testing on the new prototype progresses.

Thanks for your patience and support, we are so excited to be this close to a fully working board.

Update #14
￼Pin
Smoothieboard V2 February 2022 update.
￼
Chris CecilCollaborator
February 25, 2022
It has been a while since we last posted. Very busy times...there has been a lot of progress to catch up on.

First off,

Chip shortage is still raging. We have everything on hand except for the TMC2590. We placed our orders back in August and the original estimate was September. Slowly the dates have been pushing back about every couple weeks. We have significant orders in with both Digikey (Mar. 11) and Mouser (Apr.11).  So as soon as these parts are delivered we will have plenty for the V2 Prime as well as the daughterboards. Although, based on the shifting dates I have seen so far I would not expect these shipping estimates to be reliable.

This time has allowed us to revise 3 versions of the prototype and we have enough drivers onhand for testing.

￼
TMC2590
Although this may seem bleak, don't fret, we have plans. More on that in a bit.

Second,

Prototypes for the V2 Prime have reached the final point (we believe).

￼
All known bugs have been solved and core segments have been tested and verified. The board has quite a few changes since the initial prototype...here are some of the changes and updates.

-Multiple driver options:

￼
V2 TMC2660
￼
V2 TMC2590
Due to the ongoing chip shortages our orders for TMC2590 keeps being pushed back and during that time the TMC2660 seem to have for the moment come back in stock. We recognized the benefit of multiple driver options on the Prime board and Kliment was kind enough to revise the TMC2590 version into a TMC2660 version as well.  We also decided to use the higher current range resistors for the TMC2590 so it will be more suitable for CNC and larger motors and the TMC2660 version will be better for Lasers, printers and smaller stepper motors.

This we believe for most users will be acceptable as the cost is similar and we believe for smaller motors (lower currents) the TMC2660 may function better. This is all going to require a lot more testing and verification including customer feedback...but the TMC2660 we also used on the earlier LPC4330 version of the board and they worked very well on my machine. At this point it looks like the first production Kickstarter batch will be the TMC2660 (as the dates continue to push back for the TMC2590) so our backers will have the option of which board type they would prefer to have although the TMC2660 version will be fulfilling first.

-Board auto-recognize

Due to the multiple board options we are planning we thought it would be best to assign a couple unrouted hardware pins to be used as a binary indicator of which board is present so the firmware can automatically config based on the settings/drivers of that particular board. The auto config settings can also be changed in the config if needed.

-Probe input:

￼
Probe Section
We added a comparator and ESD protection to the probe input. Now the onboard input is capable of switching powered probes with voltage ranges from 3-26V. For higher voltages (i.e. 40V inductive probes) we plan on making a plug in board with another comparator onboard which will allow higher voltages.

-5v system

￼
5v/3.3v regulator section test build
We revised the 5v system to have a few differences and options. The output is 3A @5v and 1.2A @3.3v while using the onboard 5v regulator which is driven from the main power input.

The USB input automatically switches off and isolates from the 5v regulator circuit when it is powered up and also has a jumper to disable the USB power entirely (for when you want data only on USB such as when using a raspberry pi).  The 5v regulator can also now be shut off entirely with a jumper for those who want to run an offboard 5v regulator or otherwise would like the circuit to be disabled.

There has been current limiting added to some of the 3.3 and 5v outputs on the expansion headers, USB and endstops to prevent accidental damage from shorting.

-ADC inputs

￼
ADC goodness :)
This board has considerably better ADC inputs than previous versions. Each Thermistor input is now ESD protected and opamp buffered. This should allow for much more stable readings on the first 4 ADC ports. Currently, the Prime has 3 thermistor inputs and an onboard PCB thermistor. The MCU also reports chip temperature as well.

There are 2 spare raw ADC pins which are also broken out and assigned to Gadgeteer headers for those who would like an ADC with none of the discretes and/or opamp in the circuit.

-FET and SSR outputs

There are 4 primary FET outputs which can be assigned for hotends, fans, etc. They are all the same standard fet. The Vfet which is supplied to the primary FET circuit also has a high side FET onboard which can be used to shut off hotends/fans in case of emergency and/or low side FET failure.

A separate bed circuit has 2 paralleled FETs which do not have a high side switch which are intended for higher loads such as a heated printer bed.

As well as the FET outputs we also have added 2 “SSR outputs” which have small onboard transistors for driving things such as SSRs and other devices which have more current draw than a standard MCU pin can provide.

-MSD button

With V1 often users had issues when the MSD (sd card) was enabled to automount.  This also led to at times SD card corruption and failed runs (write conflicts between MCU and host).  For the V2 board we have added a small pushbutton to the pcb that when pressed enables MSD.  When ejected the board returns to it's normal state and the SD card is unmounted from the Host.


Next,

There have been some questions about plans for dates on the next versions of the boards such as the Mini and the Pro. I believe as soon as the Prime ships the first plan is to make the “Core” board....which will be expanded into the Mini. Most of the major issues have been worked out and this process should be fairly painless (compared to the parts shortage).

For the Pro...I see the main issue being the availability of FPGAs. From what I have heard they were one component which was hit hard by the chip shortage...but even if the parts were available we still have a lot to get done before we get there. I expect Pro to be the last thing completed and is still many months out at least.

Several more expansion boards have been planned during the development as well and it should make setting up machines significantly less painful compared to the past. Plugs and configs will be able to be plug/play. I have personally been experimenting with DIN rail mounting of the electronics and daughterboards for a cleaner setup (more to come). As an added benefit, largely, where we could we are using the same parts on the main boards as we are on the expansion daughterboards...this should make our entire production flow much simpler as well as allow for predictability in our expansions.

For the good news, things are going very well. Everything is almost ready to go into full production (will be before we have PCBs and parts). The reflow profile I have been using has so far been perfect and the boards are coming out nicely.

￼
Next is to setup the PnP. So far I have been hand placing the boards @ about 4hrs/board (front and back)...it will be nice to have the machine do that part.

These are exciting times. We are almost there and I can't wait to start seeing what kind of machines you brew up with the new more powerful hardware.


Chris Cecil,

Robosprout

Update #15
￼Pin
September 2022 update
￼
Chris CecilCollaborator
September 11, 2022
Ok.  So...here we are entering fall and time for another update.   How are things you might ask?  There is a clip from an old TV show which explains everything best.


My off the cuff estimate is that I typically need to fix/tune/setup 3 machines for every 1 that I need to have running...but such is life and learning.

Last I checked in we were very close...still are.  All parts (and more) are on hand and currently being loaded into the pick and place machine and programming has started.  It has been a while since this machine was used so I have been spending a bit of time cleaning and setting everything up...as well as designing/printing some “Manual feeders” which will mount in the machine, since we have over 2x the individual parts count on the SMT as we do automatic feeders, but more on that later.

We ordered what we thought was going to be the final revision of the board and I was confident everything was fine...but of course...a couple bugs crept in.  Both of which deserve a writeup of their own..so others can learn from our debugging (priority is finishing boards though).

￼
Pullups
￼
Voltage divider and deadbug
￼
Deadbug rework...more parts than it looks like.
So at this point I was in the middle of installing a board into a 3d printer I had recently rebuilt/retuned so I could verify all function....and the board I was using in my printer amassed some rework wires.

￼
V2 Prime TMC2660 version
Where am I at now?  I have been running the board in my printer for quite some time now and even printed some of the feeders for the PnP on it (Printing tooling for v2 smoothie...using v2 smoothie).

Also, I installed a 2590 version in a stepper driven router/mill which is using 3a per motor with no issues.  (also switching the router and mister).

￼
Mill Router test setup
So after reviewing the bugs and finding some “fixes” I decided to manufacture some of the boards we ordered and apply the rework to fix them to “fully functional” for testing by the devs and testers.   I took the opportunity to also setup the PnP and run these prototypes with the machine.  This process took quite a bit longer than I expected but has gone well.  Although, there is still some tuning/setup to do on the machine before full production starts.   PnP setup/tuning is about 80% done as I type and moving along nicely, currently it completes 100% of the bottom parts and about 80% of the top parts with no issues.  Every board I run gets better though by tuning.  Still beats 4.5hrs/board hand placing.

￼
PnP loaded with parts.
Once others verify that the reworked boards function in test we will order the new rev of PCB at which time it will be a matter of running the machines .   I did not want to waste another PCB order without more testing even if it would likely save quite a bit of time.

Once we begin fulfillment of the initial V2 prime boards we plan on turning on preorders which will be  a month out from that point since it will require another PCB order.

There has been a bunch of adapter boards and different expansions that have come as a byproduct of the advancements with V2.  The design really does make it easy to add on a daughterboard which can allow functions to be added to the hardware which may not be on the board and also allows for future expansion.  I am working on 3 separate Z axis motor driver boards currently...and they will simply be plug/play/config.  Everything we are designing for expansion boards will share parts with the V2 Smoothieboard as to allow for easy on site builds without changing feeders on the PnP so that will make it very easy for us to maintain expansion board inventory as well as do custom OEM builds if needed (assuming we can find parts...but here's to hoping that improves...seems to be) .

All in all...things are going well.  Albeit, behind schedule.

TL;DR;   All parts here, found a couple more bugs, did a ton more testing, PnP mostly setup, boards being shipped to testers, need to order another board revision after testing.

As I have been bad about posting regular updates you can always check my youtube or flickr for random videos and such which may/may not show actual progress :)  

Update #16
￼Pin
V2 quick update. October 2022
￼
Chris CecilCollaborator
October 30, 2022
Just a quick update to let you know where we are.  I just updated the smoothieboard2 github issues with the last known issues that we came across while testing this most recent rev.

These board updates listed should have us ready to begin Kickstarter production. 


To read more here is the link.   https://github.com/Smoothieware/Smoothieboard2/issues



Longer update coming as soon as there is more to tell.  We made a lot of progress in the last month of tests and there are new features and tools which have been developed by wolfmanjm during this process which should help with TMC driver tuning (Smoopi tool).  More info to come.

￼Like


Update #17
￼Pin
Smoothieboard V2 End of Year 2022 update
￼
Chris CecilCollaborator
December 27, 2022
Smoothieboard v2 End of 2022 update.

So here we are approaching yet another year.  Another update is long due.

Where is the project at?

We worked through some issues recently on the board.  After sending out boards to wolfmanjm we found a couple issues that I had not encountered on my setup.  It took a bit of time to test these things as well as come up with suitable fixes.  I did quite a bit of work deadbugging mods on and verifying to limit the number of prototypes assembled while still testing functions across all situations (that we thought of at least).   {issue list}

Revisions to the design have been made and are in the process of being reviewed as many times as we can before ordering boards...since there is a delay due to funding for another week or so this added work should not effect timelines in any way.  At this point it is just verifying rework and checking silkscreen.  DRC passed when I ran it on my end.

If anyone would like to assist in review, feel free to download my modified branch here  and submit issues you may see.

All parts should be on hand to fulfill the Kickstarter batch plus begin sales.  Currently, we just need to order PCBs and stencils from the current revision and begin assembly.  Looking back...I seem to be overly optimistic on timeframes...so I won't give a specific estimate...but there should not be significant issues this time around with setup or production.  I have put in a good portion of my year to get everything setup and operational in order to complete this in house.  So after getting PCBs...the only blocker is me doing the work.  I am eager to begin being able to turn on sales, so you can be sure I am doing what I can to get the Kickstarter fulfilled as quickly as I can.

Both Wolfmanjm and myself have been running boards for quite a while now with very few issues.  And quite a few “new to this firmware” features have been added.  It is exciting to see where this has gone so far and I am looking forward to seeing what everyone else does with this as well.  This board so far seems far superior to V1 in every way.

Again...we all know how things go.  Everything that can go wrong typically does...when things go according to plan I begin to get suspicious of what else we may be missing.

What about daughterboards and other addons?

Working on this.  There are several designs which either need testing or are partially completed for expansions.  Most share the same parts as the V2 board, or have an overlap of some sort, so it will not be an issue to assemble/test these.  Same as the V2, at this point we just need PCBs for the most part.

And since all assembly is being done in house it will be not a big deal to produce or modify.

I have a lot of ideas in this area on top of the submitted boards which users and devs had previously put in.  I hope to get a few of these in with the next PCB order as well.

Happy New Year.  Looking forward to shipping ASAP

Chris Cecil

Update #18
￼Pin
Smoothieboard V2 Final specs and update.
￼
Chris CecilCollaborator
January 25, 2023
Smoothieboard V2 Prime final Revision features.

So as we finalized some of the features on the V2 prime it is a good time to do a writeup of what to expect.  Please be aware I may be slightly off on some specs but I believe this information to be accurate.

MCU-

￼
STM32H7
As you probably know we started with the LPC4330 but due to parts shortages we were forced (to the glee of some of the devs) to change to the STM32H745.  This MCU should be a bit better overall and Wolfmanjm seems to be happier with this choice than he was with the LPC.

We chose the 265 pin BGA version of this chip and procured enough supply early on to fulfill the entire kickstarter plus some sales.   Since we purchased these parts there have been no new supply of them on the open market.  Although, I have seen up to $500/MCU on the grey market.   From this point forward even when supply resumes they will cost ~$25/MCU based on statements from suppliers.

Here is the link to the datasheet {https://www.st.com/en/microcontrollers-microprocessors/stm32h745-755.html}

Stepper drivers-

Originally we were planning to use the TMC2260 which we tested on the early revisions of the board.  The chip shortage forced us to choose to use the TMC2590 initially, then there was huge delays on the shipment and backorder of our parts.  So we made yet another design which uses the TMC2660 again...since it had come back in stock.

Now our plan is to release both versions.  The TMC2660 version is better tuned for the lower current motors 1.2-2.2A and the TMC2590 version is tuned for higher currents 2.5-4.6A .  These ranges are set by the sense resistors...which potentially can be varied to change the ranges.

Other than the stepper drivers there is no significant difference between variants of the board and should be drop in compatible for all other features other than motor current...although, there is some overlap on that too.

So far these function very well on both boards.  I have been running a leadscrew based printer as well as a router table from different board variants.   I believe Wolfmanjm has been running deltas and lasers as well as mills and standard printers.

Motor power is supplied by it's own XT30 connector which also supplies power to the onboard 5v regulator

￼
TMC2590
Output FETs and connectors-

There is 4 lower current FETs which are intended to be used with things such as hotends and fans.  They are all connected to a common +VFET point which is controlled by a highside PFET for added watchdog safety in case of lowside FET failure.

The bed shares the same FET type but there is 2 paralleled for higher current.  The bed FET is independent of the highside PFET and is not controlled by it.

There are 2x XT30 connectors on the VFET input which should allow for up to 30a of continuous flow (15a/connector continuous).  This was preferable to having a larger XT60 connector which has a much larger vertical footprint.  The second connector is usually not needed but in the case of 12v systems it would be very easy to overload the 15a connector if a large heated bed was used (or the entirety of a 400w@12v psu).

Endstops-

No significant change here from the V1 endstop layout with the exception of an added buffer and ESD protection for all inputs.  Still 6 inputs with XYZ min/max labels

Probe-

This was an area with a bit of added work.  We put in a comparator on the probe input as well as other ESD and buffering protections.  This will allow use of a variety of probes.  Everything from a simple switch up to active inputs which are up to 24v.  For higher voltages (i.e. 40v inductive probes) we are planning a daughterboard expansion which plugs into the probe input for protection of higher voltages which will use the exact same parts but with higher range tuning.

ADC inputs-

We have 3 buffered and ESD protected ADC inputs which can be used for thermistors.  This should have a stability improvement over V1 (in theory) and allow for more stable readings of temperature.

There is also an onboard thermistor for sensing board temperature.

6 unbuffered ADC inputs reside on 2 gadgeteer headers and there is a planned daugterboard which will plug in and allow identical expansion of the 3 onboard ADC inputs (or other options which require hardware on the inputs).

-LED indicators

We have indicators for the Vmot, Vfet, 3.3v and 4 status leds for the MCU debugging.  There are also LED indicators on all MOSFET outputs.

A single LED also indicates MSD function when selected.

-5v input options

There is an onboard 3a@5vregulator which is powered by Vmot which is the preferred method of powering the board and all peripherals (on my test setup I am powering a raspi and 7” touchscreen from the onboard 5Vreg).

Second to that is a USB input which is current limited and has physical jumpers which can be cut to hardware disable the USB 5v input.  This allows for devices like raspberry pis to not attempt to power the board.

After that there is a 5v input header which allows for a direct input to the 5v system.

All 3 inputs are protected with ideal diodes which allows for backflow prevention between connected 5v sources but also has very little drop unlike what you would expect with standard diodes.

MSD pushbutton-

In the past there was often an issue when the MSD was mounted to a host computer and it would cause communication issues while running a job.  This has been solved by adding a pushbutton to the board.   If you press this button (or send the command) it will go into MSD mode and mount the board as a storage device until it is ejected by the host.

Ethernet-

Function of the ethernet is much better on this version.  Features such as autoupdate have also been added.  {get wolfmanjm to inform on functions}

SD function-

We now have SD running over SDIO instead of SPI...this will allow for significantly higher transfer speeds over the V1 board.  This was a big issue with most users...and at times myself.

Yet unused stuff-

Currently, we have some stuff onboard which is hooked up but has no function in firmware.

USB host-  This currently has no function but is ready and capable for the code to match...make it do something useful.

M4 core-  Right now...the firmware resides in the M7 core.  The M4 core is completely unused and disabled.

RTC battery-  Footprint and connections are there to hookup a RTC to the board.  As far as I know there is no plan to use this...but it is there.

Gadgeteers-  There are 9 headers with 7 spare pins on each.  Some have various functions such as SPI, I2C, ADC and GPIO but this allows for easy connection of expansion and breakout boards.

Cool features so far on V2.

-Autoupdate via ethernet

Just send “update” command and the board will automatically check, verify, download and update the firmware if needed.

-Parallel motors on the same axis in software

Recently added was the ability to parallel 2 motors in config and have them act as a single axis.  This feature has long been asked for my multiple users but was not easy on V1 due to limitations.

Along with this feature has been the ability to probe across the axis to independently align 2 motors (such as on a Y axis on a router table with 2 motors/actuators).  You can attach a probe to the X axis which probes Y length and physically compensate based on errors in alignment during homing.

MSD function-

This really does make it nice to just make the board appear as a device to copy files to it.  Although, there are multiple methods of transferring files to the onboard SD card.  The board flashes an led when in this mode and remains in the mounted state until ejected at which time it resets the board, reloads config and if applicable reflashes firmware.

So where does this all leave us?

￼
Smoothieboard Prime V2
We are finally ready to begin fulfillment.  So far all the issues that were known are solved.  I am beginning production this week and I will likely be ready to begin shipping before we are ready with the final information update.  Arthur will update you with instructions in the next coming days on how to handle this.  We are just now setting up to finish this and some logistics but keep watch for this information so we can be sure to get all the necessary information for fulfillment.

This has been a long journey...even before the long journey.  Thank you to all our backers for being patient.  Thank you to all the devs who made this happen regardless of obstacles and annoyances.

I am looking forward to seeing what everyone makes with the boards...as well as future features and developments.

Chris Cecil,

Robosprout

Update #18
￼Pin
Smoothieboard V2 Final specs and update.
￼
Chris CecilCollaborator
January 25, 2023
Smoothieboard V2 Prime final Revision features.

So as we finalized some of the features on the V2 prime it is a good time to do a writeup of what to expect.  Please be aware I may be slightly off on some specs but I believe this information to be accurate.

MCU-

￼
STM32H7
As you probably know we started with the LPC4330 but due to parts shortages we were forced (to the glee of some of the devs) to change to the STM32H745.  This MCU should be a bit better overall and Wolfmanjm seems to be happier with this choice than he was with the LPC.

We chose the 265 pin BGA version of this chip and procured enough supply early on to fulfill the entire kickstarter plus some sales.   Since we purchased these parts there have been no new supply of them on the open market.  Although, I have seen up to $500/MCU on the grey market.   From this point forward even when supply resumes they will cost ~$25/MCU based on statements from suppliers.

Here is the link to the datasheet {https://www.st.com/en/microcontrollers-microprocessors/stm32h745-755.html}

Stepper drivers-

Originally we were planning to use the TMC2260 which we tested on the early revisions of the board.  The chip shortage forced us to choose to use the TMC2590 initially, then there was huge delays on the shipment and backorder of our parts.  So we made yet another design which uses the TMC2660 again...since it had come back in stock.

Now our plan is to release both versions.  The TMC2660 version is better tuned for the lower current motors 1.2-2.2A and the TMC2590 version is tuned for higher currents 2.5-4.6A .  These ranges are set by the sense resistors...which potentially can be varied to change the ranges.

Other than the stepper drivers there is no significant difference between variants of the board and should be drop in compatible for all other features other than motor current...although, there is some overlap on that too.

So far these function very well on both boards.  I have been running a leadscrew based printer as well as a router table from different board variants.   I believe Wolfmanjm has been running deltas and lasers as well as mills and standard printers.

Motor power is supplied by it's own XT30 connector which also supplies power to the onboard 5v regulator

￼
TMC2590
Output FETs and connectors-

There is 4 lower current FETs which are intended to be used with things such as hotends and fans.  They are all connected to a common +VFET point which is controlled by a highside PFET for added watchdog safety in case of lowside FET failure.

The bed shares the same FET type but there is 2 paralleled for higher current.  The bed FET is independent of the highside PFET and is not controlled by it.

There are 2x XT30 connectors on the VFET input which should allow for up to 30a of continuous flow (15a/connector continuous).  This was preferable to having a larger XT60 connector which has a much larger vertical footprint.  The second connector is usually not needed but in the case of 12v systems it would be very easy to overload the 15a connector if a large heated bed was used (or the entirety of a 400w@12v psu).

Endstops-

No significant change here from the V1 endstop layout with the exception of an added buffer and ESD protection for all inputs.  Still 6 inputs with XYZ min/max labels

Probe-

This was an area with a bit of added work.  We put in a comparator on the probe input as well as other ESD and buffering protections.  This will allow use of a variety of probes.  Everything from a simple switch up to active inputs which are up to 24v.  For higher voltages (i.e. 40v inductive probes) we are planning a daughterboard expansion which plugs into the probe input for protection of higher voltages which will use the exact same parts but with higher range tuning.

ADC inputs-

We have 3 buffered and ESD protected ADC inputs which can be used for thermistors.  This should have a stability improvement over V1 (in theory) and allow for more stable readings of temperature.

There is also an onboard thermistor for sensing board temperature.

6 unbuffered ADC inputs reside on 2 gadgeteer headers and there is a planned daugterboard which will plug in and allow identical expansion of the 3 onboard ADC inputs (or other options which require hardware on the inputs).

-LED indicators

We have indicators for the Vmot, Vfet, 3.3v and 4 status leds for the MCU debugging.  There are also LED indicators on all MOSFET outputs.

A single LED also indicates MSD function when selected.

-5v input options

There is an onboard 3a@5vregulator which is powered by Vmot which is the preferred method of powering the board and all peripherals (on my test setup I am powering a raspi and 7” touchscreen from the onboard 5Vreg).

Second to that is a USB input which is current limited and has physical jumpers which can be cut to hardware disable the USB 5v input.  This allows for devices like raspberry pis to not attempt to power the board.

After that there is a 5v input header which allows for a direct input to the 5v system.

All 3 inputs are protected with ideal diodes which allows for backflow prevention between connected 5v sources but also has very little drop unlike what you would expect with standard diodes.

MSD pushbutton-

In the past there was often an issue when the MSD was mounted to a host computer and it would cause communication issues while running a job.  This has been solved by adding a pushbutton to the board.   If you press this button (or send the command) it will go into MSD mode and mount the board as a storage device until it is ejected by the host.

Ethernet-

Function of the ethernet is much better on this version.  Features such as autoupdate have also been added.  {get wolfmanjm to inform on functions}

SD function-

We now have SD running over SDIO instead of SPI...this will allow for significantly higher transfer speeds over the V1 board.  This was a big issue with most users...and at times myself.

Yet unused stuff-

Currently, we have some stuff onboard which is hooked up but has no function in firmware.

USB host-  This currently has no function but is ready and capable for the code to match...make it do something useful.

M4 core-  Right now...the firmware resides in the M7 core.  The M4 core is completely unused and disabled.

RTC battery-  Footprint and connections are there to hookup a RTC to the board.  As far as I know there is no plan to use this...but it is there.

Gadgeteers-  There are 9 headers with 7 spare pins on each.  Some have various functions such as SPI, I2C, ADC and GPIO but this allows for easy connection of expansion and breakout boards.

Cool features so far on V2.

-Autoupdate via ethernet

Just send “update” command and the board will automatically check, verify, download and update the firmware if needed.

-Parallel motors on the same axis in software

Recently added was the ability to parallel 2 motors in config and have them act as a single axis.  This feature has long been asked for my multiple users but was not easy on V1 due to limitations.

Along with this feature has been the ability to probe across the axis to independently align 2 motors (such as on a Y axis on a router table with 2 motors/actuators).  You can attach a probe to the X axis which probes Y length and physically compensate based on errors in alignment during homing.

MSD function-

This really does make it nice to just make the board appear as a device to copy files to it.  Although, there are multiple methods of transferring files to the onboard SD card.  The board flashes an led when in this mode and remains in the mounted state until ejected at which time it resets the board, reloads config and if applicable reflashes firmware.

So where does this all leave us?

￼
Smoothieboard Prime V2
We are finally ready to begin fulfillment.  So far all the issues that were known are solved.  I am beginning production this week and I will likely be ready to begin shipping before we are ready with the final information update.  Arthur will update you with instructions in the next coming days on how to handle this.  We are just now setting up to finish this and some logistics but keep watch for this information so we can be sure to get all the necessary information for fulfillment.

This has been a long journey...even before the long journey.  Thank you to all our backers for being patient.  Thank you to all the devs who made this happen regardless of obstacles and annoyances.

I am looking forward to seeing what everyone makes with the boards...as well as future features and developments.

Chris Cecil,

Robosprout

￼Like


Update #19
￼Pin
V2 Prime Fulfillment update.
￼
Chris CecilCollaborator
February 5, 2023
I am currently in the process of producing the boards for fulfillment (in house) and everything is going well.  As I said before all issues seem to have tested out and I expect no significant delays.

We have setup my website to handle final shipping and it is going to take a few days to go over the backer list and get the emails sent out for how to use the site to finalize.  This will allow accurate shipping addresses and such.

In the meantime I have turned on pre-orders for the first Post-Kickstarter batch of 200pcs expected to be ready to ship by Mid-March.

If anyone is interested...here is the link 

Thank you again to all our backers, devs and other supporters. Without you this would never have come to fruition. 


Chris Cecil,

Robosprout

Update #20
￼Pin
A day in the life at Robosprout
￼
Chris CecilCollaborator
February 22, 2023
Just thought I would post a quick update...along with a short story about how things go around the shop.

If you can't have your board yet at least you can be slightly entertained.

https://www.robosprout.com/murphy-broke-the-belt/


Chris Cecil,

Robosprout

Update #21
￼Pin
Update on shipping
￼
Arthur WolfCreator
March 27, 2023
We’re finally here: we’re just about ready to start shipping boards!

￼
It’s been a lot of waiting for you guys, and I’m baffled by how nice the entire community has been about it, I was really expecting at least some frustration, but it’s all been just support and enthusiasm all the way.

If you’ve followed the Kickstarter updates, you know the story so far: we were just about ready to do our last prototypes of v2-prime and v2-mini, and poof, Covid happened.

This caused a worldwide shortage of components/chips, which meant we had to redesign the board from scratch (thanks again, Kliment!).

For you, this was good news because it meant you were getting a much more powerful (and better designed) board, sort of like skipping v2 and going directly to v2.5.

For us, it has been a lot of work, in particular from Kliment who designed the new board, Jim who wrote an incredible port of the firmware for it, and Chris who tested the boards, hunted down all the new components (no easy feat) and has been spending months setting up production.

On my side, what I’ve mostly been doing is work to finance the components for the new board. By the time the new design was ready, we pretty much had no money left from the Kickstarter. It was a tight budget and Covid-19/delays/changes ate pretty much all of it. At this point, lots of Kickstarters just make a very sad update and weather the barrage of angry comments, but we really didn’t want to do that to you guys, not if there was any possible alternative.

So for the past two years, I’ve taken a chunk of each of my paychecks and used it to purchase components for a batch of v2-prime boards, and a few months back, we reached a full stock, meaning we have all the hardware we need to produce.

And so here we are, with everything we need to start production.

There are a few caveats.

First, lots of you pledged for v2-mini boards, because they were much less expensive. But we don’t have an updated design for v2-mini, only for v2-prime. We don’t want you to wait another couple of years for your boards, so despite this being one more big loss for us, we’re upgrading everybody with a v2-mini pledge to v2-prime! You’re welcome!

Second, same goes for v2-pro, there is currently no available FPGA that fits the bill, so we can’t even attempt to design a board. We have plans to move forward, but it’ll take quite a bit of time, and money, so it’ll be dependent on the success of v2-prime. Like the v2-mini folk, we don’t want you to wait anymore, so everybody with a v2-pro pledge will be getting a v2-prime board now.   Since we can develop/test potential FPGA breakouts once there are some V2 boards in the wild this should help speed things along on the pro.  Also, you still get a v2-pro whenever they become available.

Those who purchased the expansion board kits will still get them as they come available.  Several compatible boards are currently in prototype or design phase.

Third, comes the question of shipping. When I say we had to start funding the entire budget from scratch, this includes shipping, meaning right now we don’t have any funds available for shipping.  In addition to that costs to ship have gone up since the Kickstarter.

The plan there is the same as for the components: I will progressively use my own money to pay the shipping costs. The problem is I’m not exactly rich, so it’s going to take a bit of time to get around to everybody (probably a few months for the end, but we’d ship the first ones right away).

I discussed this with some of you, and many expressed they really didn’t care about paying for shipping again if it meant they’d get their board early (and if it helps the project a bit too).

So the plan right now is this:

You’re all going to get discount codes for the Robosprout shop that give you a free Smoothieboard v2-prime, meaning in the shop, you can order a v2-prime, and you’ll only need to pay for the shipping.
If you don’t go through with this, you don’t have to worry, you’ll still get your board, it’ll just (possibly) take a bit more time, I just won’t have enough cash to pay everybody’s shipping right away, but shipping boards, including for those who don’t pay shipping again, will start happening right away.
Let me repeat, you only need to pay for shipping again if you’re in a big hurry to get your board. Otherwise, you should still get your board reasonably soon.

We are soon going to be sending out surveys using the Kickstarter survey system, so keep an eye out for these.

We can’t wait to start shipping boards and for you guys to start using them.

Thanks again for all the support over the years, it’s incredible to finally be here.

￼
Purple has TMC2660, Black has TMC2590


Update #22Backers only
￼Pin
Instructions for paying shipping cost @ Robosprout
￼
Chris CecilCollaborator
May 4, 2023
Thank you again for backing the project...as well as your patience.


We are ready to begin shipping on a per tier basis to keep things organized.  If you have responded to the survey and would like to pay shipping cost to get your board faster please follow these instructions:

1. Go to this link Robosprout

2. Select stepper driver type

3. Use coupon code "FINALLY" to give 100% discount and only charge for shipping. 

4. Complete checkout and be sure to fill in all information.  Please use the same name which is on your Kickstarter account and/or the email for that account for verification purposes.

If you would like to order an additional board we will have some extras in this batch after the Kickstarter fulfillment so if you were to order an additional from the preorder or kickstarter version link it would very likely ship at the same time (another batch to follow as well).   This will not slow down the rate at which orders are shipped. 


Please email me directly at robosprout@gmail.com if there are any issues/questions.


Chris Cecil,

Robosprout


Update #23
￼Pin
Fulfillment update #1
￼
Chris CecilCollaborator
May 16, 2023
Things are moving forward well.  Here is a post with more details. 

Robosprout post link 


We started fulfillment on the Prime and early bird prime backers who chose to pay the extra for shipping.  Surveys should be going out shortly for the other tiers.

TMC2660 is shipping first.  TMC2590 beginning production this week.  I am shipping as I produce so things should go quickly.

Most of my time the last 2 weeks was spent getting test fixtures, connector and packaging stuff sorted mostly.


More updates shortly...including a basic "First unbox and setup" post I am working on next.


Chris Cecil,

Robosprout

Update #24
￼Pin
Unboxing and setup warnings
￼
Chris CecilCollaborator
May 17, 2023
To those of you who have used a Smoothieboard in the past most of the connections and configuration will be very similar.  There are a few important considerations and warnings that should be read before any connections are made to the board.  

I have made a brief list here https://www.robosprout.com/smoothieboard-v2-unboxing-and-setup-warnings/  (This post may vary slightly as other devs comment, so check back regularly even if you have read this)


Chris Cecil,

Robosprout

Update #25
￼Pin
Short update.
￼
Chris CecilCollaborator
June 11, 2023
Just a quick update to let everyone know things are going well.  Just getting everything moving and more efficient, as usual there are the typical delays and unplanned added time.


Some boards went out a couple weeks back and since then I have been mostly getting organized and moving along.  Arthur has finally received his boards and should be working on documentation...so things are certainly picking up.

I have also been working on some Smoopi images which should help those who want to run the Raspberry pi and Touchscreen get moving with just an image.  As well as doing a few different installs on Ubuntu and giving notes to Jim so he can update the readmes.   

In my opinion...Smoopi is the best option for Smoothieware host.  Regardless of machine type, it has options for 3d printing and more milling/laser setups.  Also, there are many tools built in such as UART monitor, TMC config tuning (sliders), webcam/spindle cam, etc.


For those who paid shipping you will get an email when they ship, also an update on Kickstarter.  

For those who have not received their survey yet...it is coming.  No worries.  Nobody will miss out. 


There are still a few boards available for pre-order as well.  If you are looking to support the project in terms of speeding along hardware development and larger volume of boards available...this is the best way.   They will begin shipping shortly.

As always...the donations to the link on smoothieware.org are the best way to support directly to the software side of the development.  


If anyone who has received their boards has any videos, comments, machine plans, questions or anything else...please reach out to us.  We would love to see what you are doing with the boards and your notes and opinions on the design.

Thank you all for the patience and support...we are getting close.

Chris Cecil,

Robosprout

Update #26
￼Pin
TMC2590 boards about to start shipping.
￼
Chris CecilCollaborator
July 24, 2023
Just a quick update.  I have some TMC2590 variant boards about ready to ship.  They are in final test now.


If anyone has any boards setup and running be sure to share with us.


Chris Cecil,

Robosprout  

Update #27
￼Pin
It's all my fault...and that's OK
￼
Chris CecilCollaborator
August 21, 2023
Here we are fast approaching finally getting all of our backers the boards they were promised as rewards a few years back when we started this Kickstarter campaign.

For those who were not following along too closely,  we endured financial burdens, team members leaving and/or not being available, a pandemic, worldwide chip shortages...as well as the ever present Murphy throwing wrenches in at every inopportune moment.

It has been a long struggle that seems to get more difficult as I approach the end.  The best metaphor is a tractor pull <link for those unenlightened>.  The key is to just do your best to get to the end without spinning wheels or blowing an engine.  Keep traction...don't run too hard. Burnout is a real thing.

So...no we get to the explanation of the title.   What do I mean by that?

It is my fault.  Anything and everything since the design was completed is on me.  It has only been my hands on your boards.  I am personally responsible for every single step in the production process with the exception of making the physical PCBs (thanks JLCPCB).   Not to mention setting up, repairing, calibrating and operating all machines (PnP, ovens, automated wire cutters, etc).  All hand soldering, jigs, testing, cleaning, packaging and shipping....is me.  

As well as any and all delays.

We can safely say that anything that is wrong with your board or your order is completely my fault...and again.  This is fine.   It actually feels nice to have nobody to blame but myself.   If there are any issues please get in touch.  I do my best but it is very likely, especially in these first initial boards, there may be some faults that get past.  My test procedure is not perfect yet, and my visual inspection is dependent on me, so it would not be a stretch to imagine some things get past.  Your constructive criticism won't be ignored.

Anything that may come up we can and will fix.  Let me know and we can work through things.  Although, I do believe it is an unwritten rule that your worst work will go to the harshest (and most vocal) critics, we will do everything we can to remedy any faults and update the process to eliminate future faults.

Overall, I am very happy with how production is going and I expect very few issues with the boards.  I have been doing multiple rounds of visual inspection at every step and the boards are power on tested more than once (low power initial test and flash, then final high power test).  This has always been a requirement and is part of the reason in the past we have had such a low failure rate at the end user.

Let me know anything you suggest, any issues you see, suggestions on expansions, etc.  The best way to do so is to file an “issue” on github if it is a board or design issue.  This allows us to not only track the problems but to also add notes for anyone who may be following along in the future for a better understanding of how/why we made changes.

As we speak I have shipped most of the preorder/prepaid shipping boards (with just a couple exceptions that will ship in the next day or so), so I expect more reviews and designs to begin appearing from users.  Be sure to let us know what you are doing with the boards.

The preorder page will change slightly for those who missed getting in on the Kickstarter or want extra boards.  The first post Kickstarter batch will have updated silkscreen and possibly some slight revisions but overall will be the same form factor as your rewards.  So it is safe to design your mounts and enclosures around the board.   Keep watch for the updated page. 

If you have not paid for shipping or wish to wait for your board we are going to have everyone go through Robosprout to give shipping info and select which board type you would like.  Those who have multiple boards have the option to mix and match if you add it to the comments in the checkout.   More info to come shortly regarding this.  It may require another reward survey...you will be messaged though.  

And remember...you know who to yell at if there are any problems.                        

Chris Cecil

Robosprout

Update #28
￼Pin
November 2023 update..still getting there.
￼
Chris CecilCollaborator
November 6, 2023
Production drags on and things are moving along.  I took a bit of a slowdown during Late Summer to organize and rethink my methods.  The way I was doing it where I was shipping as I went was too disorienting.  I decided to take things in better steps and complete chunks.  Much easier to package and ship when everything you need is actually there.


I have also been taking advantage of the production equipment and wire cutting lines already on hand to increase productivity without adding manpower.  The time to get them setup and running efficiently is starting to pay off now and it is allowing me to get more done.  Wire cutter making ribbon cables

As I am going through this fulfillment there is a lot of things that are beginning to get more well formed such as packaging and documentation.  All of this should help in the future but it adds a lot of work now.  

I appreciate everyone's patience.  Things are getting there.  Fulfillment will happen.  I suspect there will be a lot more info available as people get their boards as well.  I have already had a couple backers who are volunteering to help with documentation and things like pinouts.   To those people: Your work is much appreciated and I am sure the community will benefit,  every bit helps at this point.  Videos, docs, writeups, pictures...it all can help someone.

Things are back on track and I should have shipping for those who have paid caught up in the next couple weeks.

For those who would like to pay for shipping but have not yet here is a link to the instructions.  Let me know if there are any issues.  

https://www.kickstarter.com/projects/arthurwolf/smoothieboard-v2/posts/3800825


Thank you all again more updates soon,


Chris Cecil,

Robosprout

Update #29
￼Pin
Just another update...
￼
Chris CecilCollaborator
November 14, 2023
It has been a busy week.  

I have a very large run about to go into the oven right now.  This batch is the remaining backside boards of both type...as well as a few batches of some of the other devices and remaining connector pack items required to kit up the boards.   

Although, as usual I am behind things are moving along.  My plan right now is to finish everything in steps instead of attempting to have production going on in "every step at once".  Since manpower is limited it is much easier to keep everything organized as well as less mental toll from constantly switching tasks.  At this moment today that involves running the pick and place mostly and preparing boards for the oven.  Then comes inspection/testing, through hole parts, more testing, cleaning and finally packaging.   

Another update soon.  Things are moving along well currently.  Hoping to be done with fulfillment soon...still a lot of work to do.  

If anyone has any questions feel free to email me directly...or respond to the posts.  I will do my best to respond quickly.

Chris Cecil,

Robosprout 

Update #30
￼Pin
Video of my test machine setup and wiring...
￼
Chris CecilCollaborator
November 26, 2023
This video is just to show a quick overview of a V2 Smoothieboard on my personal (test platform) machine.   There is also a demonstration of using the jaUART board which every backer should get in their kit as a bonus.  Wolfmanjm has requested that everyone uses a UART for initial setup and configuration at the bare minimum.  


 This also gives an overview of some failsafe protections I have been working on.  I personally believe everyone needs similar failsafes on every 3d printer and I hope the community begins to adopt some additional layers of fire prevention above and beyond MCU watchdogs.  We can add layers to the onion.

More to come soon.     

V2 Smoothieboard wiring walkthrough video


Chris Cecil,

Robosprout

Update #31
￼Pin
January 2024 update.
￼
Chris CecilCollaborator
January 10, 2024
Welcome to 2024...another year starts and still working to finalize this campaign.

Production is moving along as well as expected given certain limitations.  I was hoping to have more assistance in person by this point but I am working to automate more where I lack employees.  Nothing changed there. 

Here is the list of times currently for my per board process steps:

1). Procure parts and PCBs (no time listed, NRE)

2). Prep and inspect PCB (1 min)

3). Prep PnP (12hrs estimated, NRE)

4). Stencil Backside PCB (2min)

5). PnP Backside board (5min)

6). Inspect and re-place parts (2min)

7). Flow backside (2min)

8). Inspect backside reflow under scope (1min)

9). Stencil topside (2min)

10). PnP topside (6min)

11). Inspect and re-place top side, add additional parts (30min) {4min}

12). Flow topside (2min)

13). Inspect topside and bottomside reflow under scope (4min)

14). Add USB, SWD and UART through-hole parts (8min)

15). Test USB power 

16). Cube programmer  (4min)  {faster via command line?}

  a). Disable M4 core

  b). Flash initial firmware

17). Test and verify function of MCU and SD.  (1min)

18). Add remaining through-hole parts (25min) {5min}

19). Full power on test of all  basic functions.  FETS, Motors, ethernet, endstops, thermistors. (10min)  {2min}

20). Clean board (3min) {1min}

21). Package (3min)

So on average it appears I am spending 111 "process minutes" total on every board.  A large part of this time is spent adding additional parts after the topside PnP procedure "Step 11"(adding a bay of feeders would save 26min in this step), as well as the main through-hole parts "Step 18" (purchasing a selective soldering machine would save 20min in this step).

So as I progress in production I will be expanding some things in order to eliminate time cost per board.   It seems fairly straightforward to shave off 50min of shop time just by purchasing another bay of feeders (~$30k from manncorp) and a selective solder machine (~$6k imported, then an XY stage would need to be added).  

My hope initially was to use more items as "tray items" and eliminate the need for feeders but quickly this ended up being an issue as the tray items have a different "waste procedure" than the "feeder items" do so it causes the per board run time (and therefore machine use time) to go up significantly.  (Feeder waste procedure is drop in waste tray when failed vision, tray waste procedure is to put the part back from where it was picked up and retry "x" times, the latter causes small parts to bounce often and the added time adds wear).  

Smart business solution here is more feeders.

I currently have 50 of the TMC2660 boards that are at "Step 12" and the remaining boards are all at "Step 9".  This week the goal is to have the 50 boxed up and ready to go before I ship more. 

As it stands...I have shipped everything that had shipping paid with the exception of about 12 orders.  I hope to ship those in the next week or so.  The remaining orders who did not pay for shipping additionally I will be shipping your boards out as money comes in from sales of further batches.

Up until this point we have made nearly nothing on the V2 boards aside from the initial Kickstarter money.  There is no "profit" until we get into selling boards and having inventory on hand.  This is all progressing and will happen.  I have parts on hand for another 200 pcs right away and main/expensive parts for another 600pcs past those.  Mostly, I just need to order PCBs (and time).

If you have paid for your shipping or a preorder...all is well.  Your order is secure, and will ship soon.  If you have not paid for shipping and would like to(or have not finalized your survey) please refer back to previous updates regarding instructions on how to do so.

Anyone who would like to purchase a preorder they are available on Robosprout.com and will be fulfilled as soon as I finish this batch and order PCBs.  Should be soon...providing I don't draw any more "lose 10 turns" cards.

Feel free to email me at robosprout@gmail.com if you have any questions or would like to potentially help out.  We do have things that we need a lot of help with such as making a github mirror of the smoothieware.org wiki (currently down, arthur working on it), writing instructions and diagrams, Machine install walkthroughs...etc.  

New features (listed here)  such as lathe functions and slaved axis could certainly use some full writeups as well.   If anyone is interested send a message and we can arrange it.

Thanks everyone for the patience.  I have been working hard on this even if it seems like it is taking forever...things are moving forward and your boards will get to you.

More info to come soon,

Chris Cecil,

Robosprout

Update #32
￼Pin
Couple quick videos demonstrating some of the Smoopi and UART tools available to users
￼
Chris CecilCollaborator
January 12, 2024
Smoopi Trinamic TMC configuration tool:  

￼
jaUART connection and UART data logging setup: 

￼
￼Like


Update #33
￼Pin
Gcode and command list for V2 Smoothieware
￼
Chris CecilCollaborator
January 20, 2024
Quick update to give anyone who is planning/setting up/operating a machine running the V2 firmware a list of the commands which apply.   

https://github.com/Smoothieware/SmoothieV2/wiki/GCodes-and-Commands

Wolfmanjm spent a lot of time over the years to attempt to keep all the Gcode to a "standard" which carries over to other platforms such as linuxCNC, etc.  There are a couple unavoidable command differences to make Smoothieware compatible with "RepRap" which are show as differences between that mode and the GRBL mode.  Some commands such as homing work differently between the different options.  

This list also gives the list of useful function commands which should be taken note of (for instance the "fire" command if you are using a laser).  Many of these are helpful with setup and configuration. 

Also, if you are using the Smoopi host this list as well as the pinouts are available under the console tab when you press the "?" button. 

￼
￼
Things are progressing well.  I have a batch of boards in progress now.  Currently, in between the most time consuming stages and preparing for through hole soldering.

If anyone has not done their reward survey (or paid for shipping if wanted) now is a good time.  

More info soon.

Chris Cecil,

Robosprout

Update #34
￼Pin
Update and instructions for those who are waiting for shipping.
￼
Chris CecilCollaborator
February 10, 2024
Things are moving along. By Monday I will have shipped all the orders which prepaid for shipping (aside from a couple which have special cases). Now what is left is to ship to those who did not pay extra for the shipping.

In order to do this the easiest way I have created a coupon on Robosprout.com which will allow you to select which board type you wish to have and use the coupon “ IALREADYPAIDYOU “ to get a discount on the board and on the shipping cost.

If you would like to jump to the front of the line by paying shipping the option to use the coupon “FINALLY” is still there and will discount your board but not the shipping cost.

This I have found is the easiest way to handle the board selection without having to individually read emails from backers. It also allows for easier information tracking on my site (Kickstarter locks me out after a certain period of time, wasn't designed for projects this late).

The plan is to turn on immediate sales of boards and use those sales to fund the shipping cost of those who have not got their boards yet. If you are someone who has already got their board and would like more for future projects this is a good time to do so as it will help others get their items shipped. Normally I would wait until the backers had been fulfilled before turning on “immediate sales” but this is the best/fastest way to get the remaining boards out. Please be aware your order is secure and not lost as long as you have filled out the backer survey and information on Robosprout.com.

I have all of the remaining boards from the first batch in process and they will all be completed shortly. My goal is to have all of the remaining backers boards in packages sitting ready to go while producing the next batch (waiting to order PCBs still). The parts are on hand to do the assembly when the PCBs arrive. I still have not solved the issue of process time which I discussed in earlier posts but it is a priority. Essentially, getting more feeders doubles the rate at which I can produce boards. There is always the option in the future to use outside contract manufacturers which may be explored as well if the demand is there.

If you have not responded to the survey please do so. I am slowly going through the backer report and listing the backers which have had their boards shipped on the Kickstarter site. If you have paid for shipping and have not received your board please check your email and spam to see if there are any emails from USPS.com which may have tracking/customs numbers. Often, things get stuck in customs and if you missed the tracking email you may never know until it gets returned to me.

If you have paid shipping on Robosprout.com but have not responded to the Kickstarter survey please do so to keep the tracking accurate on their end. I am attempting to keep everything tracked and logged so that everyone who backed for the reward gets what they were promised.

For those who backed things like the expansion boards pack...the plan is still to get you those once we have some on hand. This will likely cost us a bit more in shipping but at the moment this is the only fair way to handle things since very few of the developed boards have been produced in volume. There are a lot in the works as well as many that were designed in the past. Most need to be revised a bit though in order to make them compatible with the parts we have on hand for V2 Smoothieboard. This should make production and parts procurement easier/faster in the long run which should help keep inventory on the shelves.

If you have already received your board and are in the process of making a machine let us know how things are going. Videos and pics are always welcome. Full writeups even better.

The hardware we made has a lot of potential beyond what we are currently using it for. There is a ton of room for advancement which will take getting more people using the board and modifying firmware.

Please don't be afraid to make a fork or branch. Not everything will get merged into main branch “every single time”. Things will require a lot of testing and review (as usual) to get into the main...but that is the point of Git. Sometimes custom machines require firmware mods which may break the toolchain for other (often more common) machines. Best way to avoid this is to make a maintained fork of the firmware and testing that branch on as many machines as you can.

TLDR:

Prepaid shipping orders shipped,

Kickstarter batch almost done, going to turn on ability to order immediately...which will allow us to fund shipping of the remaining orders.

Please be sure to fill out your backer survey if you have not (even if you already have your board).

Those who did not pay extra for shipping cost need to go to Robosprout.com and use the coupon “IALREADYPAIDYOU” in order to get the information in the site for shipping and board selection.

As always, email me at robosprout@gmail.com directly if you have any questions or need support. I do my best to answer the emails immediately but please be patient as I have quite a bit on my plate right now (and when I am in the shop working I have no internet/phone).

Looking forward to getting this project completed. It has been a long experience full of frustration and delays...but also full of learning and new experiences. Glad to have stuck it out...our backers deserve it.

Chris Cecil

Robosprout

Update #35
￼Pin
Update March 2024
￼
Chris CecilCollaborator
March 19, 2024
Another update to let you know I am still here...

Boards have been going out.  I believe everyone who paid for shipping has had their board shipped out, some of those who did not pay have also gone out.  I have been producing a bit slow still due to the hand placing of quite a few parts on every board...more to come on this later in this. 

There is light at the end of the tunnel.  The kickstarter batch is getting close to done and now I am finalizing the PCB for the final version and we should be selling those shortly.  Every board that sells helps ship more boards to backers...thank you all again for the patience.  Your rewards are coming.

If you have not gone through the procedure to submit your address/order/stepper driver selection please be sure to do that based on the procedure listed in my previous updates.

Recently, one of those who got their board already linked a video of their machine in build.  

￼
Be sure to post pics and videos of your builds.  It is nice to see these going into machines and making stuff.

I have been busy and there has been quite a bit going on which will warrant a proper blog post and likely some videos.  

Currently, I am in the process of making some Siemens feeders work with my PnP machine.  Normally this would be an extremely long and difficult project due to the closed nature of both sides.  I can monitor my PnP's signals to the feeders and find the signal that allows for the advance of the tape but normally I would also need to trackdown the codes to make the feeders operate as well.  Since these are basically 2 separate machines which speak with each other and operate in sync this seemed like a long/difficult path...then I came across a project which is for OpenPnP done by Bilsef https://github.com/bilsef/SchultzController along with a youtube video which expanded on his work.  Video is certainly worth the watch just for the methods of reverse engineering. 

￼
This will allow me to control the feeders with gcode commands and allow up to 20 feeders to connect to a single board.

Now...the only work I need to do is monitor the advance signal and make that send gcode.  

The best part about this to me is that OpenPnP was originally developed using Smoothieware...now the work of developers in that project is allowing me to make more Smoothieboards.  It is the circle of opensource. 

More will come of this as I move forward.  I plan on documenting and sharing my work so that others can benefit as well. 

￼
￼
 So far I have designed a 3d printed mount ( https://github.com/Ccecil/SchultzFeeder_Mounts ) that allowed me to build a rack that holds the 10 feeders we have tracked down (3 lanes of 8mm tape each) so this will double the number of available feeders that we have on the machine.  I still need to order some parts and pcbs to make the interface board but I believe I should have the parts on hand to do some testing

Keep making and hacking. 

Chris Cecil,

Robosprout

￼Like


Update #36
￼Pin
Shipping approaching completion.
￼
Chris CecilCollaborator
May 2, 2024
Attention all backers:

If you have entered your information at Robosprout.com (as described in previous posts here and here) then your board will have shipped by tomorrow.  If you have not done so already please follow the instructions there.   Also, if you could enter your response to the survey on Kickstarter so I can be sure to mark as fulfilled.  I plan on doing another survey as a reminder soon.  

In order for you to be able to select a board type it is required that you enter your info into Robosprout.com...even if you are not paying for extra shipping.   There are quite a few backers who still have not done this but the boards will be there so we will be going through the Backer report and attempting to email individually.

Note: This does not include the accessory boards for those who backed the expansion packs...and the plan is to continue to develop the FPGA expansion using the gadgeteer headers initially then using that work to complete the V2 pro version for those who backed those. 

The mini, pro and core versions are all in the planning phase with little/no work done yet but now that everything is moving along better that should not take nearly as much time.

Some of you may have noticed that Smoothieware.org has been down for quite some time.  Arthur was attempting to deal with that issue but instead he leveraged ChatGPT to convert the wiki to Markdown so it will be located on Github along with the rest of the project shortly.  This is a work in progress and may still take a bit of time to get complete.

For V2 this causes a slight issue with the network update function but this is temporary and I am working on a long term fix.  For now updates will need to be done via SD card as described here  under method 2. 

The wiki and info for V2 is on Github at https://github.com/Smoothieware/SmoothieV2/wiki  This is still limited information but it should help get anyone familiar with V1 Smoothieware up and running.  If help is needed feel free to reach out.  There are some config differences but for the most part it is a painless upgrade.  Contributions are welcome. 

Keep watching Robosprout.com for more accessories being added as we go.  Currently...I am in the process of listing things like connector packs and wire packs for expansion headers. There are several expansion boards which are in development/test right now and I hope there will be more soon.   Feel free to post suggestions for which boards you would like to see.  I have mostly just been developing based on cloning sections of the V2 prime board (endstops, probe, motors, etc) and other expansions that I personally need but I would like to hear more from the community. 

V2 Prime boards will be in stock and ready to ship shortly as well now that the Kickstarter is almost complete.  So anyone who would like more boards can preorder or contact me directly for info.  We hope to have some V1 boards in stock as well shortly since there is still demand for them for legacy machines.  

Looking forward to seeing more of these boards out in the wild.  Post videos or photos below.

TLDR, Boards are shipped for those who registered as described in previous posts, expansion packs and more board versions to come, wiki being moved to github, boards for sale on Robosprout shortly.   And most important:  If you have not responded to the survey and registered on Robosprout.com please do so ASAP.

Chris Cecil,

Robosprout

Update #37
￼Pin
June 2024 update
￼
Chris CecilCollaborator
June 9, 2024
Things are (were) moving along well but I had to take a bit of a break over the last month in order to find a new house to live in and get moved (lease was up, needed to find a new place).  All of the time pressing work involved in the move is done but at the same time I am also going to be moving production.

This will not effect the Kickstarter boards much since the only thing left to do is throughhole and test on some boards.  Everything is past the pick and place and oven...just a matter of finishing up and getting them shipped.

As mentioned before this is taking a bit more time due to a large portion of the boards requiring us to pay shipping costs (not the backer's fault, this is on us).  All is well though.  If you have entered your information at Robosprout.com as mentioned in the previous post you will get your board.  

If your board has not shipped yet please don't worry.  All will ship in due time.  

If you have not entered your information at Robosprout.com please review the previous post and follow links for instructions on how to do so.   You can pay shipping costs if you wish...it is greatly appreciated but it is not required. 

Again...sorry for the further delay.  Despite my best efforts sometimes personal life gets in the way.  It has several times already this year but things are looking up. 

Things are coming together.  This last month several major hurdles to getting consistent production have come in line.  Just a bit more time now.  Thank you all for your continued patience.   There is a lot of work still to do but it is getting very close. 

Chris Cecil,

Robosprout

Update #38
￼Pin
July 2024 update
￼
Chris CecilCollaborator
July 15, 2024
Things are moving along well.  All of the boards from the kickstarter batch are past through hole and are either in test or rework currently.  There are boards ready to ship but I ran out of the UART boards which I am providing with them so in order to get more of those I had to order a batch of PCBs...but since I was ordering the V2 boards the timing worked out fairly well.  

As I mentioned in the last post I have been moving my physical location as well as modifying the PnP to add more feeders.  Everything is mostly setup now in the new location and I am currently in the process of finalizing the feeder hack (everything is here, just a matter of making it happen).   Here is a short video explaining the method I have planned to make the communication work. 

￼
￼
I received the PCBs for the finalized V2, UART adapters as well as a PWM board which will help greatly for running lasers and hobby servos (this board needs it's own wiki probably). 

There is only one minor change to these boards compared to the Kickstarter batch and that involves the probe input.  The upcoming batch will be able to handle up to 45v on the probe input (range set by jumper) whereas the Kickstarter batch can only go up to 24v on the probe input.   Aside from that and some silkscreen work there is no mods between the revs. 

Smoothieware.org is currently back up and pointing to the wiki where all the info is currently being migrated to.  There is a version of the V1 wiki on the github currently (images missing still) and the V2 wiki is on the V2 page.  Documentation should be adequate to get started for anyone who has used smoothie in the past.  If you need any help please reach out.  I will do my best to get the problems solved. 

I fully expect to have all of the Kickstarter boards packaged and ready to go and be back up in full production before the end of the month.   It has been a long 8 weeks of moving, cleaning, setup, wiring and planning hacks.   Once all is running the time will be very worth it. 

Anyone who has their board and has a machine running...please feel free to post links in the comments.  We would love to know more about what you are doing with the boards.  

Please be sure your shipping addresses are correct and unchanged.  

If anyone has not gone through the procedure for entering info on Robosprout.com please refer to the previous instructions here and here. 

Looking forward to finalizing all this work.  Over half have shipped...but it seems like the end takes the longest. 

Chris Cecil,

Robosprout

Update #39
￼Pin
Another update. Early September
￼
Chris CecilCollaborator
September 5, 2024
I am coming close to having the shop completely back running.  It was more work than I was planning for (as usual).  There was a lot of work involved getting the environment ready for the machines to run (i.e. wiring, cleaning, air routing, etc).  

While doing that I have been working on getting the feeders working so that we can begin production of boards to have for sale.   This, as per usual, is taking a lot longer than I was planning, mostly due to not having the time while doing moving and setup of other things.  

My progress on that project is being documented in video and on my github so others will be able to use my work in the future if they wish to do the same (or similar) mod. 

As of right now we have shipped over half of the rewards to those who responded to the survey.  There are just over 20 which have registered their address and board preference on Robosprout.com which have not been shipped.  The boards for these orders are completed and just need final packaging and wiring/component packs.  Main delay is due to the need to make more UART boards (I have been including them with every kickstarter order to make config easier) and physically build some cables for the wiring packs.  This is coming soon.  I need to run a power wire for the oven and then I can hand place and flow what is needed.   Again...nothing is easy and straightforward when you are moving and setting up the shop.   

Every board will be shipped and there will be boards being produced for sale shortly.  I have not changed course in any way...just in location.   The issue with the delays is just time and not having enough of "me" to go around to get this done.  Currently, I am doing all of the hands on by myself including setup, repair and upgrading of the production line.   As well as doing production, sales, customer support and more, while attempting to maintain "life" as well.   I appreciate the patience you have all lent so far.  Please know I am doing all I can to get this project completed.  

Anyone who would like to help in any way please reach out.  There is a lot of documentation to be done still, V2 wiki is on Github.   Videos of new functions and "how to's" always are very welcome.   Please reach out to me at Robosprout@gmail.com if you think you can help.

In the meantime...Here are some videos I just uploaded discussing key points of wiring to the "gadgeteer" headers (as well as some info about the PnP mods). 

Chris Cecil,

Robosprout

￼
￼
￼Like
￼2 people like this update

Update #40
￼Pin
Update on fulfillment and plans for the future.
￼
Chris CecilCollaborator
March 2, 2025
Another new year is here, plus some.  Time for another update on the project.

￼
Fulfillment:

Right now we have fulfilled over 50% of the backers.  These are the people who followed the links to Robosprout and used the coupon to get the board. 

There are quite a few others who responded to the survey but did not choose which board they wanted (stepper driver choice).  If you are one of these people please follow the links here for more info: 

https://www.kickstarter.com/projects/arthurwolf/smoothieboard-v2/posts/3761730 

https://www.kickstarter.com/projects/arthurwolf/smoothieboard-v2/posts/3800825 

https://www.kickstarter.com/projects/arthurwolf/smoothieboard-v2/posts/4010197

All of the boards for the initial fulfillment are produced and ready to ship once the info is provided.  Sales of retail boards will fund this shipping so it may happen in batches.

If you are international and have registered for shipping please watch for customs notifications as they may be stopped and require dues.  Please do not reject the dues as this is a waste of $50/board on shipping (I have had 2 come back this way).  I have very little control over these fees and am still not 100% sure the best way to handle them. 

Future plans:

FPGA:  The plan as of right now for FPGA expansion is to begin experimenting using the Colorlight i5/i9 FPGA board 

This is a SODIMM form factor board that was developed for lighting displays.  It is quite useful and has some extra onboard ethernet phy as well as the FPGA. 

At the moment the plan is to put the FPGA between the MCU and the Stepper drivers but on the current Prime boards this requires using external drivers since we don't have the headers broken out to go between.

The plan for the V2 "Core" board right now is to incorporate the FPGA SODIMM header on the board to allow direct connection but those developing would probably benefit from purchasing one of the breakout boards shown in the repo. 

In the future there "may" be a possibility of using the GPIO headers and passing back through the MCU but at the moment there has been no work in this direction and it would require some fresh developers who were interested. 

Expansion boards:  I have a few that I have developed along the way but most are still in need of revision.  A lot of work is needed in this direction and the priority of which boards need to be developed first is going to be based on feedback from the community.  Those who would like to help more on these please reach out and we can begin discussing what parts are available and common.  Anything that is on the V2 board is preferred since they are already in house and on the PnP. 

Firmware:  The V2 firmware is very solid from what I have seen.  There have been very few issues and Wolfmanjm has been steadily testing and adding new things as they come up.  As usual feedback is welcome, test branches before merge requests are much appreciated. 

Production:  I have the Pick and Place modified so that I could over double the amount of feeders I have available.  This took quite a bit of work and is partially explained here: 

￼
There are retail boards now complete and ready to ship immediately...as well as more in production.   I expect steady production and no issues fulfilling future orders.  More updates to come at the Robosprout blog. 

￼
This has been an extremely long and rough road for me...going to be very happy to see fulfillment complete.   

If anyone is interested in helping the project, ordering OEM retail quantities of boards or have any other questions please reach out to me personally at robosprout@gmail.com

Much thanks to those who support opensource.

Chris Cecil,

Robosprout

Update #41
￼Pin
April 1 update.
￼
Chris CecilCollaborator
April 1, 2025
Just another update for everyone.

There are V2 prime boards of both types in retail form and for sale at Robosprout. For those who would like to purchase a board they are ready and on the shelf. 

The Kickstarter is over halfway fulfilled with about 86% of backers reporting to the survey.  For the most part those who registered their board choice and info at Robosprout have been shipped.  This covers just over half of the backers who get rewards.  The remaining boards are here and ready to ship.  

There are quite a few others who responded to the survey but did not choose which board they wanted (stepper driver choice).  If you are one of these people please follow the links here for more info: 

https://www.kickstarter.com/projects/arthurwolf/smoothieboard-v2/posts/3761730 

https://www.kickstarter.com/projects/arthurwolf/smoothieboard-v2/posts/3800825 

https://www.kickstarter.com/projects/arthurwolf/smoothieboard-v2/posts/4010197

(This has been repeated before but it seems every time I post this a couple more people fill out their info)

As far as the project goes everything is moving forward with the V2.  The prime board is solid and works well.  Moving on to the V2 core and beginning planning FPGA expansion using the colorlight i9 module.  This should allow much more development in multiple directions but will need more people who are interested in helping with development. 

Firmware is stable.  V1 Smoothieware is officially in "maintenance only" mode and any new work will be done exclusively on V2 Firmware.   There is plenty of headroom now for expansion and growth.  No longer limited by memory, there is also a M4 processor in the STM32H7 that we are not currently using. 

Although we have no plans to expand V1 firmware we still have OEMs and requests for V1 boards.  Therefore, I am currently working on a V1.5 board which will be form/function compatible with the V1.1 Smoothieboard but will use all the same protections, buffers and parts which were developed for V2.  Keep a watch for this.  It is currently in development (on the side) but is moving along quickly.  The schematic is mostly done and I am at the point of doing the PCB layout (Kliment offered to assist in the layout so it should move along quickly). 

If there is any interest in these developments or opinions please be sure to contact me at robosprout@gmail.com or leave comments below.  

To those backers who have received their boards we are always interested in pics/videos of machines.  Let us know how you used it.   There was a lot of amazing things done with the V1 boards...it should be even more interesting now with the capabilities of the V2 firmware/hardware. 

Thank you again to all the backers.  This Kickstarter is finally getting towards the end after many years.  Your patience and support has been greatly appreciated and our hopes are that you are as happy with the results as we are.

Chris Cecil,

Robosprout

Update #42
￼Pin
May 2025. Quick update and info for support.
￼
Chris CecilCollaborator
May 26, 2025
Been still moving forward getting things done.  V2 Smoothieboards are in stock and ready to ship if anyone has a project.  

If you have been waiting around to put your board in a machine due to being concerned about the process I have been doing a set of videos on youtube with a tutorial step by step on  how to wire, config and setup a V2 Smoothieboard on a small CNC router/mill.   I currently am just past the config stage in the video playlist and adding more.   This will cover Smoopi host also. 

Moving forward as a support channel we have a few options.

IRC: #Smoothieware@libera.chat  (best choice to talk directly to devs)

Forums: https://forum.makerforums.info/c/controllers/smoothie/101  (forum regularly checked by devs)

Email: Robosprout@gmail.com  (direct email to me)

Also, I plan on adding more info to my blog at Robosprout.com when more info comes out.  So that is a good place to check at times.   I may do a newsletter sign up on the site as well in the future but as of writing I have not done so. 

Hope everyone is enjoying their boards.   If you have not received your board and have followed instructions from previous updates on how to register at Robosprout your order is not lost.  There are a couple right now. 

If you have not registered your shipping info on Robosprout.com for the rewards choice please do so.  If you need help feel free to reach out to me. 

Chris Cecil, 

Robosprout

Update #43
￼Pin
July 2025 Info and updates. Such a long, winding road....
￼
Chris CecilCollaborator
July 15, 2025
In a perfect world this post would be about how the campaign is completed and all boards and variants have shipped...but in that same world this post would have been 5 years ago.  So I will do my best to lay out where we are and where the project is heading. 

V2 prime boards:   After a long process of design, testing, acquiring parts..etc, we now have boards in stock.  There are boards ready to ship and more able to be built.   If you backed the Kickstarter to a reward level your board is complete and ready to ship (assuming you have gone through the Robosprout registration process from previous links).   I have been running V2 prime boards on my machines for a couple years now while testing and my results have been nothing but positive.  It is a very solid and protected board that should give very few issues.   

V2 Pro boards:  The plan to have the FPGA version was sidelined during the chip shortage.  Currently, plans are to make a "V2 Core" board which has all the digital functions from the V2 prime but without onboards stepper drivers and FETs.   This will allow the use of an FPGA expansion (still in planning phase, needs user feedback) which will plug directly into the board and allow the FPGA to integrate, this needs more discussion and planning.  We can either put the FPGA between the MCU and stepper drivers, or it can be placed on the expansion headers and send/receive signals from the MCU and feed back to the MCU which will then go to the stepper drivers.  The first option (in my opinion) is very close to what TMC does in their drivers.  There are some issues with this plan: interpolation, modification of signals after the MCU is not necessarily the best path but would require less modifications to the existing firmware.  The second option would require modifications to the current firmware (likely it's own branch) and may face other issues such as being bottlenecked by the MCU speeds.  I suspect the FPGA would be able to generate steprates that will not be able to be accurately backfed through the MCU (I know very little about this, just an assumption).  Development is going to require more community participation and feedback.  Currently, the team is very small and there are things that cannot (or will not) be done by the current devs.  Originally when the idea for the pro came about the plan was to use the same FPGA as the Papillio project and to leverage some of the work done there to ease the development burden.  Currently, the plan is to develop around the Colorlight i9 FPGA module since it has quite a bit onboard and comes in a compact SODIMM module.   I would really love to have this design available and in active testing/development but as I said before...we really need some community support to develop and guide this process.  If there is anyone who has FPGA experience that would like to help out please feel free to contact me.

V2 Mini:  This board will likely be developed in some form, it likely will follow close to the original plan but will not take place until the V2 core is done.  Loosely, the plan is to retain the digital section and protections from the V2 prime/core but will use different stepper drivers (possibly Allegro like V1) and will have less FETs.  There is also an option to use an MCU with less pinout like the STM32H743 (this is the MCU used for the original firmware development using the Nucleo).  The goal of this board is to keep costs down and have an adequate, yet powerful, board that is V2 firmware compatible.   More feedback on this option would be greatly appreciated.  If you have a specific use case for this board please reach out and we can discuss possible development options. 

Expansion boards:  I have been developing small expansion boards throughout the entire process.  Not all are tested or verified.  There is a lot of planning going on in this area and if you have a specific expansion you would like please contact us so we can plan accordingly.  Most expansions will be designed using as many of the common components as possible to V2 prime as to make in house production easier/faster.   Those who backed the expansion boards pack will still get them once there are enough developed to make a proper "pack". 

I know this process has been long going, but I have not given up.  There have been many issues...some in my control but mostly not.  The struggle through this campaign has been nonstop.  If it seems to be taking a long time from the perspective of a backer...imagine being in my shoes.  The last 4 years have been a nonstop battle.  Devs leaving the project, chip shortages, money issues, pandemic, wars and more have interfered with the process.  If it wasn't for the support of Kliment and Wolfmanjm through their continued development we would not have made it this far.  I have stretched my expertise and knowledge to their bounds seemingly every day.  It has been an nonstop process of learning new things and going far out of my comfort zone.   During this process I have attempted to write about it and share the info I gathered with anyone who may encounter similar issues.  If nothing else at least others may learn from our struggles. 

Even through all this I feel we managed to produce a very solid CNC controller with tons of new hardware and firmware features that were not on the V1 board (or most other controllers on the market).  The room for expansion is very great, there are hardware features which have not been fully developed or expanded and there is plenty of headroom to spare on the MCU and memory (unlike the V1 board which was pushed to it's limits by the firmware).  

If you are developing and would like some help please reach out.  I may be able to point you in the right direction.  The process to integrate the board into your machine is very straightforward if you have used a V1 board, but easier.  There is a lot more UART logging and config error messages than we ever had on V1.  The config is slightly different but there are some tools to make the transition easier.   If you have not reviewed the new features there are many which may be of interest including the experimental "lathe" functions which were added. I have a playlist on youtube that goes through the process of setting up a V2 board on a small mill.  If you are planning to integrate into a machine it is a good idea to watch these videos (especially the ones on setting up a config and using Smoopi).   If you are making a machine we would love to see the results/process.  Let us know what you have made. 

I am working to get more activity in the forums, youtube, twitter and other social media which has search persistence so that any/all questions can be referenced by others in the future.  If you have any links that can be of assistance please forward them and I can be sure to post your work so that it can help others as well. 

If you have not received your board please review the prior posts about how to register on Robosprout to select stepper driver choice and setup shipping address.  If you did so and did not receive your board contact me and I will look into the delay.  There are a couple right now that need to ship but for the most part those who filled out the info (and did not refuse the board at customs) have their boards.   If you did refuse your board at customs you will need to contact me and arrange new shipping plans, otherwise, I will consider your backing as fulfilled.

Again, V2 prime boards are in stock now.  Further development is dependent on sales and/or community participation.  We can't do this alone...your support thus far has been greatly appreciated. 

Thank you for helping us continue to keep giving the gift of opensource hardware and software to the world.   

Chris Cecil,

Robosprout

