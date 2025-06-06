
# Installing the web interface to the SD card

You are here either because your SD card is [missing its web interface](missing-web-interface.md) or because you want to upgrade your currently installed web interface.

This page explains how to grab the web interface off the internet, and then install it to your SD card.

The basic process is simply to [download it](https://github.com/Smoothieware/Webif-pack) then copy it to your SD card.

The process in more detail is as such:

## 1. Download the web interface

The web interface is stored in a Github repository so that the community can contribute and help make it better. Please don't hesitate to help.

Go to this address: [https://github.com/Smoothieware/Webif-pack](https://github.com/Smoothieware/Webif-pack)

Then click on the Green «Clone or Download» button

Then click on «Download Zip»

Or alternatively, you can also download the Zip directly by going to this link: [https://github.com/Smoothieware/Webif-pack/archive/gh-pages.zip](https://github.com/Smoothieware/Webif-pack/archive/gh-pages.zip)

## 2. Extract the web interface to your SD card.

First, make sure you can access your Smoothieboard's SD card, either by plugging the Smoothieboard's USB cable into your computer, or by plugging the Smoothieboard's microSD card into your computer's MicroSD slot. This will allow to copy the new files to it.

Now that you have downloaded the `gh-pages.zip` file, open it in your file navigator.

Next, select «Extract» to extract the files from the ZIP file.

The file extraction tool will ask you Where to extract the files.

Select the Smoothieboard's SD card, then extract the files.

Next, rename the `Webif-pack-gh-pages` folder to simply `webif`

Finally, «safely eject» the SD card from the computer (this is a software function not a physical action).

Now, your web interface is ready to use

> [!WARNING]
> Some users have reported problems extracting the Zip file using the normal Windows unzipping program.
> 
> If this happens to you, please try using 7zip ([http://www.7-zip.org/](http://www.7-zip.org/)), it has been reported to work fine.

## 3. Use your web interface.

Now, restart your Smoothieboard.

If your Smoothieboard is located on your network at the `192.168.0.20` IP Address, you can access the Smoothieboard's internal web interface (stored in flash) by typing `http://192.168.0.20/` in your browser's address bar.

To access the new web interface you just installed to your SD card, you now need to use the following address:

`http://192.168.0.20/sd/webif/index.html`

And there you go, you now have access to your new interface (make sure you empty your cache of course), bookmark it and you are done!

If you need any help, don't [hesitate to ask](mailto:wolf.arthur@gmail.com).

## All steps in a video

[![All steps in a video](https://img.youtube.com/vi/mvWzaHfcL1k/0.jpg)](https://www.youtube.com/watch?v=mvWzaHfcL1k)

## 4. Bonus: skip copying files

You can also skip copying files simply by accessing [http://smoothieware.github.io/Webif-pack/new-web-interface/index.html](http://smoothieware.github.io/Webif-pack/new-web-interface/index.html) and entering your machine's IP address, but this requires having internet access.
