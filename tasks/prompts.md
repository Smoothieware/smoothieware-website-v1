# Exploring and building.

So, moving forward, I'll want you to work on pages, improve them, fix some issues they have, etc.

As part of this, right now the technique I use to test a change, is to commit it to github, let the site rebuild, and look at the change at smoothieware.org (or you do that with playwright mcp).

That's very heavy.

Is there a more "local" way of doing this that you could implement?

For example you build the site "locally", and open the site with file: // (or using a `python3 -m http.server`-type thing and then going to http://localhost:port/ etc) with the playwright mcp that you could do?

Please explore your options, figure out some valid options, test each of them, and then give me a report on what you found that works best/is easiest/is fastest/is best.

# Some more fixes.

* I still see images that are displayed as their own source code ( <img src=”images/board.png” alt=”Board” width=100 height=100> ) instead of the image, on the home page (and presumably others), figure out why this is happening, when it did not happen before, and fix it.
* At the top of the page, there is a very large padding/empty space, remove it, "Smoothieware" should be at most 20 pixels from the top.
* « Smoothieboard v2 is HERE ! » should be much larger text, (and should be a link) at least 3 times larger.
* Update the site to integrate the «shoelace» components library ( https://shoelace.style/components/alert ), using a CDN integration ( <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.1/cdn/themes/light.css" /><script type="module" src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.1/cdn/shoelace-autoloader.js"></script>
 ), adapt it as needed so it integrates nicely into our theme (you can create a test-components.md page in which you test the components and make sure they display nicely by adding them there, restarting jeckyll, and checking what they look like with the playwright mcp).
* Once you have added shoelace, change our "callout" setup/component that we use on lots of places, with a special syntax, to instead use the shoelace "alert" component. once you've set that up, restart jeckyll server and check if it works well in playwright mcp.
* Once you have added shoelace, remove the "Smoothieware" at the top of each page, and add a full-width-of-page nav bar at the top, that's like 80px large, and contains the Smoothieware text (that's clickable to go back to the home page), with to its left the oshw logo (images/oshw-logo.png), and for now, nothing else in that bar.
* I have noticed that for a bunch of links, you call /page.md instead of calling /page, and this breaks/has the link getting the user to the source markdown for the page instead of the rendered page itself. find all instances of this and fix it...









# General fixes, page by page.

* Make the page "breathe" more, add more carriage returns / `\n` at the end of lines and sentences, to separate them into more sentences, and make the page more friendly and more easy to navigate and read.
* When you find images, first off make sure they display with the playwright MCP, and if they don't, figure out how to fix that (maybe they need the `{::nomarkdown}` tags, this is true of other html-like features).
* Then, you must figure out how to display them correctly in the page, images that are of small or average size and that are close to a header must be displayed with `style="float:right"` so that they align to the right of the header, and if they are displayed with some kind of title/caption under them, that should also be inside a div with the image floating to the right. And if it's a more significant image that's not set up to be to the right of a header, like a diagram or something like that, then that image should be displayed centered, and with a width of at least 640px and a height of at least 640px (use min-height or something, but maintain natural ratio).
* Some links are broken, for example on the `basics.md` page, we have stuff like `![What is electricity](https://www.youtube.com/embed/mc979OhitAg)`, that doesn't display correctly, figure out why, fix it, and check with playwright mcp, do that on all pages where there is a broken link or anything not displaying as expected.
* Some images are improperly formatted, for example, something like `![3D Printer Icon](images/icon-3d-printer.png)` should become: `{::nomarkdown} \n <img src="images/icon-3d-printer.png" alt="3D printer icon" width=100 height=100 style="float: right; margin-left: 1rem;"/> \n {:/nomarkdown}` (note this is on 3 lines, see the `\n`s).
* Some images have the wrong filename, if this happens, and you see an image that is set up, but the file is not found, you should look into `images/` for the right filename and fix it. For example `images/icon-3d-printer.png` is in fact `images/guide-3d-printer.png`. You should fix these where you find them and make sure the fix worked using the playwright mcp.
* In general, all images you find, that are not displaying an image, must be fixed, probably using the `nomarkdown`+`HTML` format, and then each time you should use the playwright mcp to check. This is going to take a lot of work and effort, but it's worth it, take your time, do all of it.
* CRITICAL: ALL changes to pages MUST NOT lose data/information. Anything you do, **anything** at all, MUST not result in information being lost. This is the law, this is religious rule to you. NOTHING you do must result in a page losing **any** useful information **at all**. Be extremely careful, take your time, make absolutely sure, think through **every** change you make to a page, making sure no information is lost.
* Many pages are using the old format of callout (`> [!NOTE]` etc), you should replace any such note you find, to use the newer format using `shoelace`, which you can find examples of at the top of `index.md`, like `<sl-alert variant="neutral" open>` etc...
* Similarly, some pages have buttons, like with classes `class="btn btn-primary btn-lg"` from the time when we used bootstrap, in those case too, rewrite them to use the `nomarkdown` tags and using `shoelace` components inside.
* ALL images that are not **already** a link to a page, that are currently not wrapped in a link, after being moved to the new format, should **also** be wrapped in a link to that image's file, so the user can see it "larger" by clicking on it.

Ok, now I want you to take the entire list of markdown files in `docs/`, break it down into 10 parts, and write each part into a file in `/tmp/`, `/tmp/smoothie-fix-pages-<number>.md`.

**Then**, I want you to start 10 parralel agents, each with these instructions above, instructed to fix the pages in their list, and each given one of these files specifically, asked to go over **each** file in turn, and applying all of these instructions to each of the files, fixing all of them, carefully. Instruct them to use the `index` page when lost as an example of a page that was mostly entirely "fixed".

Important note: the instructions instruct to use playwright MCP to check if things worked, but we don't want 10 parralel agents all using playwright in parralel/restarting jeckyll all the time, so **instead**, when a parralel agent wants to "check" something, it should add that check (append only) to a file in /tmp/smoothie-things-to-check.md, as a new bullet list entry, that lits the page, the position, what was changed, how it was before, how it should be, what and how to check.

Then, once we're done with this entire process, I'll take care of checking all of them.

Now please start this process, create the lists of files, start the parralel agents, have them all go over each of the files in their "group"/file, fixing them according to the instrucitons above.

Go.