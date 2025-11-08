# General.

* [ ] Add the pictures of the `v2` boards to the `smoothieboards` page.
* [ ] v2 info is completely outdated in the `smoothieboards` page.
* [x] Globally identify and fix all the broken images, using the internet archive wherever it makes sense.
* [ ] Some images were replaced with placeholders/temporary images, replace them with good images.
* [ ] Search for software, both G-code senders and G-code generators (maybe do that in smoothie-marketing, we already have a task like that in there), and use the results as the basis for a new software page.
* [ ] Create a "migration" tool from v1 config to v2 config, including recognizing which v1 settings were default meaning they no longer need to be set in v2 (assuming the default in v2 has the same value)
* [ ] Document all the snippets at https://github.com/Smoothieware/Smoothieware/tree/edge/ConfigSamples/Snippets 
* [ ] Endstops page doesn't contain the new endstops config format, must update.
* [ ] Create an online configuration wizard system.
* [ ] Clicking on a config option should open a menu, and one of the entries should be to show/hide the v1/v2 values, another should be a full card showing the specs of that option like default values etc., and the other should be to be able to copy the value into the clipboard.
* [ ] First comer users get asked in a big dialog if they have a v1 or a v2 board, and get the right setting for their board, and there is also a big "I don't know, show me both" button where we show both.
* [ ] Identify more g-codes that we support, and have all of them have their own page, create pages for those that are missing.
* [ ] Create a "custom format" for G-codes the same way we are planning to do for config settings, that will make them display nicer and link to their specific page.
* [ ] Improve the existing G-code pages, have a template to follow and make them all consistent, include examples and explanations. Maybe different templates for different "types"
* [ ] Run a search of the site for places where we could mention G-codes more often/mention more G-codes etc., do this by first creating a list of G-codes and what they do, put that list into "context", then have sub-agents with that context go over all the pages and locate interesting locations for mentioning G-codes/G-codes.
* [x] The pick and place page still has a few differences from the other guides like the missing icon at the top, ask a model to find all differences, then ask it to fix them.
* [ ] Currently, images are surrounded by a `a href`, we want to change that with an actual setup where when we click an image, we have a popup show up (and in that popup there is an actual link to the image if needed), this should be do-able with just shoelace and some JavaScript.
* [ ] Create XML files or YAML files for the list of pages with descriptions, for the list of settings with all the data we collected, for the list of G-codes with lots of details, and then in our "fancy" displays like the ones for details about settings, use that data like the one about the pages etc, to show extra data for example for the recommended pages we can show a description of each, etc. Same for the G-codes.
* [ ] FEATURE implement full translations of the site in multiple languages and publish them as sub-folders and promote them, do a dozen languages then one new language each week. This will require also translating things like the planned xml/YAML files with all the data.
* [ ] Once the YAML files are created with all the data about config options and G-code etc., ask Chris Cecil to review them, maybe pay him for them even as it's quite a bit of work.
* [ ] FEATURE: Configuration wizard in JavaScript.
* [ ] Create "planner" page, based on the source code of the planner, that explains in detail and with pedagogy what the planner does and how, ideally with ai-generated images (mermaid?)
* [ ] Create on-boot-gcode page about `on_boot.gcode` file and fill it, and find the right places to link to it from.
* [ ] Figure out a full list of gcodes and mcodes from the source code and the docs.
* [ ] FEATURE: We have extracted the `old-forum` data/posts, we need to fix their dates, then we should figure out some categories, move them into those, and then from there create a section of the site in which we have lists of posts, and we can go see those posts.
* [ ] `old-forums` is missing some posts that it says the Wayback Machine has not saved, we should ask it for examples of such posts, and then go see ourselves if they really are missing or not. 
* [ ] Make sure in all places in the code where we have default values, we distinguish/describe BOTH code default values, and example config file default values.
* [ ] Some pages, such as compilation, will be very different from v1 to v2, for those we want a two-column system, where the columns can be hidden based on which version is selected, with still some kind of selector on each of them letting us see the v1 if we are in v2 and vice versa if we want to.
* [ ] Some settings are like `custome_menu.something.some_setting`, and the "something" means no matches with the YAML file, we need to either standardize all mentions to a something, or create some code that can adapt to this when we implement the "rich" setting help stuff.
* [ ] Once we have created the full forum backup, publish it to the site.
* [ ] Once we have created the full forum backup, farm it for FAQ entries (give them numbers, and try to group them by number of mentions to sort them from most mentioned to least), and separately for possible additions to the docs (information a user didn't have so presuming the user had read the docs this might mean the info was not present in the docs, that was provided in an answer to them, give them IDs/numbers so they can easily be farmed to sub-agents), and then separate those into those that are already present, and those that are not already present, and those that are not already present transform them into proposed edits to the site.
* [ ] STUPID FEATURE: Create an SVG version of the OSHW logo we have at the top from the PNG, and then create a matching other gear, and a few other gears, and have an animation when we hover where these gears appear one after another and match the actual rotation, including the "empty" tooth.
* [ ] Go over ALL the pages and fix any outdated info, missing info, and v1/v2 mismatches.
* [ ] Figure out hardware and firmware differences between v1 and v2 from docs and research, and from there create a list of proposed changes to the site and "parallel" side by side parts of the site.
* [ ] The "tooltip" for the settings should be smart about where to display, displaying where on the screen there is currently the most space.
* [ ] Ask Chris Cecil to go over the entire documentation page by page, maybe a few pages a day (create an "all pages" with groups to be able to do it bit by bit, maybe with a section under each to add notes?)
* [x] Verify that the YAML files for the settings actually get cached and not loaded from the server every time a page is loaded.
* [x] Add the new "settings" tag to http://localhost:4000/editing-the-wiki 
* [ ] Link to or include the pin-configuration page from the various guides and from more places in the site.
* [ ] Have a "raw value" tag, for example for the symbols in https://smoothieware.org/pin-configuration and other places, and document it in the editing-the-wiki page.
* [ ] Restructure the src/site/ files to be broken down into more libraries, and make sure the libraries are correctly integrated into the actual site along with the code.
* [ ] Have a new tag format for pins <pin>, and first create a list of all places in the code where a specific pin is listed (and work out v1/v2 correspondences/matches)
* [ ] We have a lot of templates now in docs/assets/templates/, maybe some of those can be merged, maybe the logic is unnecessarily complicated and can be simplified/compacted in some ways? (also make sure there isn't code duplication between the templates...)
* [ ] In the settings YAML files, some of the v1 settings have better/longer descriptions than the v2 ones, and more details in general. And sometimes it's the opposite. We need to fix that by porting any extra information from one to the other where it's acceptable, and where it's verified from the source code and from the docs.
* [ ] Some stuff like the config example files in assets/ need to be kept up to date, we should create a script that gets them from github and updates as needed.
* [ ] Ask Jim Morris for a list of new features in v2 and where I could learn about them to document them.
* [ ] I nthe list of settings, have an icon for each setting "type".
* [ ] It's possible the way the setting tag is currently implementd isn't good for SEO, we should look into that and if needed change somewhat how it's used.
* [ ] Settings popups should have a link at the bottom to the page with all settings, same thing for gcodes, same thing for pins, and we should have all those pages on the homepage too.
* [ ] Have the PDFs for the microcontroller user manuals and some of the other components like the motor drivers inside of docs/assets/ somewhere and add download links in some places in the docs.
* [x] On http://localhost:4000/pin-configuration give more detailled explanation of what each thing means.
* [ ] For the pin configuration page we (maybe) figured out a way to convert pngs to svgs that use our site's font, we should document this process and then use it for more of our images, all those that are diagrams.
* [ ] On http://localhost:4000/editing-the-wiki add screenshots for the "how to contribute" guide.
* [ ] In the page with all the settings, for settings that are pins in the description we should use <pin> tags for the default pin.
* [ ] They yaml file for pins should have for each pin a clear description of what it's used for/as on the smoothieboard board.
* [ ] We added cache busting to the includes in docs/_layouts/default.html , we should remove them once everything is stable.
* [ ] Setting to see only v1 or v2 settings, that is closable.

# <setting> tag.

* [ ] **Maybe**, create a page for each setting, based on the template used for the <setting> tag popups?
* [x] Add full support for the <setting> tag to only have a v1 or v2 entry and not two.
* [ ] The "arm_solution" setting in the yaml file doesn't have a "valid values" list for v1 but has it for v2, we need to fix this, and find other places where there are mismatches like this, but always base it on actual data from the source code.
* [ ] Currently when we select an element with the <setting> tag the text that gets actually selected/copy-pasted isn't ideal, we'd like a custom format for settings, we should try to figure out a way to implement this so something nicer is selected when users select text that contains a <setting>.
* [ ] CRITICAL: In advance, figure out which v2 settings don't have a matching v1 setting and vice versa and figure all that out BEFORE we edit the entire site to use the new <setting> tags.
* [ ] CRITICAL: Now that we support <setting> tags with a single attribute (v1 or v2), how do we handle this if we set the site to only showing one version and a tag doesn't have that attribute? we must figure that out...
* [ ] CRITICAL: For the v2 settings we need an example section where we use the example config file and we show this setting "in-situ" inside the example config file. Actually maybe we need to do that for v1 too.
* [ ] Let us configure between hover or click for the setting popups.
* [ ] For any steps_per_mm value, have a "calculator" inside an alert in the popup. then once that is added, ask the coding agent for ideas for any other such tools, get a list of such tools, and select some to actually implement.
* [ ] For stuff that contains alpha, beta, etc, for both v1 and v2 we should have a diagram based on the board images we have, that shows "this is alpha, this is beta", etc with the current one highlighted.
* [ ] Currently if I copy/paste a line with a <setting> tag in it there are carriage returns between the elements, we want a nicer format, ideally with the v1/v2 labels included in a single-line format etc.
* [ ] Currently for the default values we only use the value from the code, but we should show both the value from the code and the one from the example file if it exists.
* [ ] For pin-type setting tags, use the svg diagrams to display which pins are valid for each one.
* [ ] For values that are speeds like values with feed_rate etc in them (and we might be able to determine also based on the unit type value/property), we should have a simple thing where a circle goes around a pill-shape track that's the width of the popup, that shows what the speed looks like, trying to figure out the size of the screen based on its resolution and type (desktop, phone), etc, and a slider that lets us select the speed with exponential changes/scale.
*_[ ] For the arm_solution setting we should have images for each of the possible values.
* [ ] CRITICAL: Before we actually replace all the settings with <setting> tags, we need to create a very clear and detailled spec for what settings should look like/be specified at, including adding the full path, including the section for v2 settings etc.

# Testing.

* [ ] Create unit tests including some using playwright for things like checking if links still work, specific pages still display, images show up, the <settings> tag do their things, etc.
* [ ] Move more things to libraries in src/site/ and use unit tests for all of these.

# v2/v1.

* [ ] Create a nice-looking tag for the settings, where we have a nice tag format, where we can spedify v1/v2 config options in a single format, that's like [ v1 / config.something.something | v2 / module #something / option ] (in a nice format like the zsh terminal pill stuff), v1 and v2 are "inverted" (color on black instead of black on color) to not be confused with the values. And there is a global flag to hide/show v1/v2 config values, by default showing both.

# Refactoring.

* [x] The PNP guide should be a full guide like the others, with includes and everything else needed.
* [ ] We created  src/docs/config-option-mentions.md to find all mentions of settings, but we should also have a run (once the settings are much better set up) to figure out places where settings **should** be mentionned, but they are not.
* [ ] Try to reorganize the project pages into folders without changing any URLs.
* [ ] Once we add the new "interactive"/rich config value display with the popup, we should have callouts for specific types of settings, for example a callout for pin types that explain some of the stuff about them and links to the pin configuration stuff.
 
# Integrations.

* [ ] Fix « Current edge build status: Build Status » on the homepage.

# Style.

* [x] Change the font.
* [ ] When SORA2 or other models get out, create an animated version of all the guide icons into animated GIFs.
* [ ] Use pure svgs for some of the images and draw them on the page with https://maxwellito.github.io/vivus/ 

# Prompts.

* [ ] A vector drawing animation of a filament 3D printing (FDM, filament deposition) process in action. The hotend at the top remains stationary, while the nozzle in the center deposits plastic at the top of the object being build, the object is positionned on a build plate, and the object moves with the build plate left to right so plastic can be deposited on its top. Thre is no spray or sparks, only slow progressive deposition of new plastic at the top of the printed object..  The camera does not move at all.

# Recovery.

* [ ] Attempt recovery of lost images by going to the old capture at http://smoothieware.github.io/Webif-pack/documentation/web/html/10442.html


# Graphics.

* [ ] Go over all of the images, and use automated AI processing/tools to remove backgrounds and make them look nicer in general. Give a general style to all the images, maybe with a shared "blueprint" background/theme. Auto-adjust contrast etc so they all share the same coherent style.
* [ ] We have a prompt in `prompt.md` about generating svgs for v2, we need to run it again/see the results, and also see if maybe some of the attempts failed because some stuff wasn't installed, and install what might be missing.
* [ ] We have generated board vector graphics for the v2 boards using 10 different methods, we should look at what we have, and use the information and know-how gathered to then create a more straightforward method from that.
* [ ] Contacted somebody on fiverr about generating the diagram/pcb, check if we got an answer or not.

# Board generation.

* [ ] CRITICAL: Get the list of boards from google drive, and try to use AI and libraries to generate files/gerbers for the extension boards.

# Board documentation.

* [ ] We should have drawings of the various parts of the schematic on the relevant pages, we can get some of that with https://kicanvas.org/ 
* [ ] Implement https://yaqwsx.github.io/Pinion/ for nice interactive diagrams of the board (requires pcbdraw output)
* [ ] Ask Kliment about the missing components for pcbdraw output.