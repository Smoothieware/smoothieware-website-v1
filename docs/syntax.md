
# Formatting Syntax

DokuWiki supports some simple markup language, which tries to make the data files as readable as possible. This page contains all possible syntax you may use when editing the pages. Simply have a look at the source of this page by pressing "Edit this page". If you want to try something, just use the [playground](playground.md) page. The simpler markup is easily accessible via [quick buttons](toolbar.md), too.

## Basic Text Formatting

DokuWiki supports **bold**, _italic_, <ins>underlined</ins> and <samp>monospaced</samp> texts. Of course, you can **_combine_** all these.

You can use <sub>subscript</sub> and <sup>superscript</sup>, too.

You can mark something as <del>deleted</del> as well.

**Paragraphs** are created from blank lines. If you want to **force a newline** without a paragraph, you can use two backslashes followed by a whitespace or the end of the line.

This is some text with some linebreaks\
Note that the two backslashes are only recognized at the end of a line\
or followed by a whitespace\
this happens without it.

You should use forced newlines only if really needed.

## Links

DokuWiki supports multiple ways of creating links.

### External

External links are recognized automatically: [http://www.google.com](http://www.google.com) or simply [www.google.com](http://www.google.com) - You can set the link text as well: [This Link points to google](http://www.google.com). Email addresses like this one: <andi@splitbrain.org> are recognized, too.

### Internal

Internal links are created by using square brackets. You can either just give a [pagename](pagename.md) or use an additional [link text](pagename.md).

Wiki page names are converted to lowercase automatically, special characters are not allowed.

You can use [some:namespaces](some/namespaces.md) by using a colon in the page name.

For details about namespaces see [namespaces](namespaces.md).

Linking to a specific section is possible, too. Just add the section name behind a hash character as known from HTML. This links to [this Section](syntax.md#internal).

Notes:

- Links to [existing pages](syntax.md) are shown in a different style from [nonexisting](nonexisting.md) ones.
- DokuWiki does not use CamelCase to automatically create links by default, but this behavior can be enabled in the [config](config.md) file. Hint: If DokuWiki is a link, then it's enabled.
- When a section's heading is changed, its bookmark changes, too. So don't rely on section linking too much.

### Interwiki

DokuWiki supports [Interwiki](Interwiki.md) links. These are quick links to other Wikis. For example, this is a link to Wikipedia's page about Wikis: [Wiki](wp>wiki.md).

### Windows Shares

Windows shares like [this](\\server\share.md) are recognized, too. Please note that these only make sense in a homogeneous user group like a corporate [Intranet](wp>intranet.md).

Notes:

- For security reasons direct browsing of windows shares only works in Microsoft Internet Explorer per default (and only in the "local zone").
- For Mozilla and Firefox, it can be enabled through different workarounds mentioned in the [Mozilla Knowledge Base](http://kb.mozillazine.org/Links_to_local_pages_do_not_work). However, there will still be a JavaScript warning about trying to open a Windows Share. To remove this warning (for all users), put the following line in `conf/lang/en/lang.php` (more details at [localization](localization.md)): 
```php
<?php
/**
 * Customization of the english language file
 * Copy only the strings that needs to be modified
 */
$lang['js']['nosmblinks'] = '';
```

### Image Links

You can also use an image to link to another internal or external page by combining the syntax for links and images (see below) like this:

!<img src="https://www.dokuwiki.org/lib/tpl/dokuwiki/images/logo.png" alt="DokuWiki Logo" width =200>

Please note: The image formatting is the only formatting syntax accepted in link names.

The whole image and link syntax is supported (including image resizing, internal and external images and URLs, and interwiki links).

## Footnotes

You can add footnotes[^1] by using double parentheses.

[^1]: This is a footnote

## Sectioning

You can use up to five different levels of headlines to structure your content. If you have more than three headlines, a table of contents is generated automatically -- this can be disabled by including the string `~~NOTOC~~` in the document.

### Headline Level 3
#### Headline Level 4
##### Headline Level 5

By using four or more dashes, you can make a horizontal line:

---

## Media Files

You can include external and internal images, videos, and audio files with curly brackets. Optionally you can specify the size of them.

Real size: ![DokuWiki Logo](wiki:dokuwiki-128.png)

Resize to given width: ![DokuWiki Logo](wiki:dokuwiki-128.png?50)

Resize to given width and height: ![DokuWiki Logo](wiki:dokuwiki-128.png?200x50)

Resized external image: ![PHP Logo](http://php.net/images/php.gif?200x50)

By using left or right whitespaces you can choose the alignment.

![DokuWiki Logo](wiki:dokuwiki-128.png)

![DokuWiki Logo](wiki:dokuwiki-128.png)

![DokuWiki Logo](wiki:dokuwiki-128.png)

Of course, you can add a title (displayed as a tooltip by most browsers), too.

![DokuWiki Logo](wiki:dokuwiki-128.png "This is the caption")

For linking an image to another page see Image Links above.

### Supported Media Formats

DokuWiki can embed the following media formats directly.

| Image | `gif`, `jpg`, `png`  |
| Video | `webm`, `ogv`, `mp4` |
| Audio | `ogg`, `mp3`, `wav`  |
| Flash | `swf`                |

If you specify a filename that is not a supported media format, then it will be displayed as a link instead.

By adding `?linkonly` you provide a link to the media without displaying it inline

[![DokuWiki Logo](wiki:dokuwiki-128.png?linkonly)](wiki:dokuwiki-128.png?linkonly) This is just a link to the image.

### Fallback Formats

Unfortunately, not all browsers understand all video and audio formats. To mitigate the problem, you can upload your file in different formats for maximum browser compatibility.

For example, consider this embedded mp4 video:

![A funny video](video.mp4)

When you upload a `video.webm` and `video.ogv` next to the referenced `video.mp4`, DokuWiki will automatically add them as alternatives so that one of the three files is understood by your browser.

Additionally, DokuWiki supports a "poster" image which will be shown before the video has started. That image needs to have the same filename as the video and be either a jpg or png file. In the example above a `video.jpg` file would work.

## Lists

Dokuwiki supports ordered and unordered lists. To create a list item, indent your text by two spaces and use a `*` for unordered lists or a `-` for ordered ones.

- This is a list
- The second item
  - You may have different levels
- Another item

1. The same list but ordered
2. Another item
   - Just use indention for deeper levels
3. That's it

Also, take a look at the [FAQ on list items](faq:lists.md).

## Text Conversions

DokuWiki can convert certain pre-defined characters or strings into images or other text or HTML.

### Text to Image Conversions

DokuWiki converts commonly used emoticons to their graphical equivalents. Those Smileys and other images can be configured and extended. Here is an overview of Smileys included in DokuWiki:

- 8-) `8-)`
- 8-O `8-O`
- :-( `:-(`
- :-) `:-)`
- =)  `=)`
- :-/ `:-/`
- :-\ `:-\`
- :-? `:-?`
- :-D `:-D`
- :-P `:-P`
- :-O `:-O`
- :-X `:-X`
- :-| `:-|`
- ;-) `;-)`
- ^_^ `^_^`
- :?: `:?:`
- :!: `:!:`
- LOL `LOL`
- FIXME `FIXME`
- DELETEME `DELETEME`

### Text to HTML Conversions

Typography: DokuWiki can convert simple text characters to their typographically correct entities. Here is an example of recognized characters.

-> <- <-> => <= <=> >> << -- --- 640x480 (c) (tm) (r)
"He thought 'It's a man's world'..."

The same can be done to produce any kind of HTML, it just needs to be added to the [pattern file](entities.md).

There are three exceptions which do not come from that pattern file: multiplication entity (640x480), 'single' and "double quotes". They can be turned off through a [config option](config:typography.md).

## Quoting

Sometimes you want to mark some text to show it's a reply or comment. You can use the following syntax:

> I think we should do it
>
>> No we shouldn't
>>
>>> Well, I say we should
>>
>> Really?
>>
>>> Yes!
>>>
>>>> Then let's do it!

## Tables

DokuWiki supports a simple syntax to create tables.

| Heading 1   | Heading 2                    | Heading 3   |
|-------------|------------------------------|-------------|
| Row 1 Col 1 | Row 1 Col 2                  | Row 1 Col 3 |
| Row 2 Col 1 | some colspan (note the double pipe) |           |
| Row 3 Col 1 | Row 3 Col 2                  | Row 3 Col 3 |

Table rows have to start and end with a `|` for normal rows or a `^` for headers.

To connect cells horizontally, just make the next cell completely empty as shown above. Be sure to have always the same amount of cell separators!

Vertical table headers are possible, too.

|              | Heading 1   | Heading 2   |
|--------------|-------------|-------------|
| Heading 3    | Row 1 Col 2 | Row 1 Col 3 |
| Heading 4    | no colspan this time |             |
| Heading 5    | Row 2 Col 2 | Row 2 Col 3 |

As you can see, it's the cell separator before a cell which decides about the formatting.

You can have rowspans (vertically connected cells) by adding `:::` into the cells below the one to which they should connect.

| Heading 1   | Heading 2                  | Heading 3   |
|-------------|----------------------------|-------------|
| Row 1 Col 1 | this cell spans vertically | Row 1 Col 3 |
| Row 2 Col 1 | :::                        | Row 2 Col 3 |
| Row 3 Col 1 | :::                        | Row 2 Col 3 |

Apart from the rowspan syntax, those cells should not contain anything else.

You can align the table contents, too. Just add at least two whitespaces at the opposite end of your text: Add two spaces on the left to align right, two spaces on the right to align left, and two spaces at least at both ends for centered text.

|           Table with alignment           |
|------------------------------------------|
|         right|    center    |left        |
|left          |         right|    center  |
| xxxxxxxxxxxx | xxxxxxxxxxxx | xxxxxxxxxxxx |

Note: Vertical alignment is not supported.

## No Formatting

If you need to display text exactly like it is typed (without any formatting), enclose the area either with `<nowiki>` tags or even simpler, with double percent signs `%%`.

```
This is some text which contains addresses like this: http://www.splitbrain.org and **formatting**, but nothing is done with it.
```
The same is true for `//__this__ text// with a smiley ;-)`.

## Code Blocks

You can include code blocks into your documents by either indenting them by at least two spaces (like used for the previous examples) or by using the tags `<code>` or `<file>`.

```
This is text is indented by two spaces.
```

```java
/**
 * The HelloWorldApp class implements an application that
 * simply displays "Hello World!" to the standard output.
 */
class HelloWorldApp {
    public static void main(String[] args) {
        System.out.println("Hello World!"); //Display the string.
    }
}
```

DokuWiki can highlight source code, which makes it easier to read. It uses the GeSHi Generic Syntax Highlighter -- so any language supported by GeSHi is supported. The syntax uses the same code and file blocks described in the previous section, but this time the name of the language syntax to be highlighted is included inside the tag, e.g. `<code java>` or `<file java>`.

There are additional [advanced options](syntax_highlighting.md) available for syntax highlighting, such as highlighting lines or adding line numbers.

### Downloadable Code Blocks

When you use the `<code>` or `<file>` syntax as above, you might want to make the shown code available for download as well. You can do this by specifying a file name after the language code like this:

```php
<?php echo "hello world!"; ?>
```

If you don't want any highlighting but want a downloadable file, specify a dash (`-`) as the language code: `<code - myfile.foo>`.

## Embedding HTML and PHP

You can embed raw HTML or PHP code into your documents by using the `<html>` or `<php>` tags. (Use uppercase tags if you need to enclose block-level elements.)

HTML example:

```html
This is some <span style="color:red;font-size:150%;">inline HTML</span>
<p style="border:2px dashed red;">And this is some block HTML</p>
```

PHP example:

```php
echo 'The PHP version: ';
echo phpversion();
echo ' (inline HTML)';
echo '<table class="inline"><tr><td>The same, but inside a block-level element:</td>';
echo '<td>'.phpversion().'</td>';
echo '</tr></table>';
```

**Please Note**: HTML and PHP embedding is disabled by default in the configuration. If disabled, the code is displayed instead of executed.

## RSS/ATOM Feed Aggregation

DokuWiki can integrate data from external XML feeds. For parsing the XML feeds, SimplePie is used. All formats understood by SimplePie can be used in DokuWiki as well. You can influence the rendering by multiple additional space-separated parameters:

| Parameter  | Description |
|------------|-------------|
| any number | will be used as the maximum number of items to show, defaults to 8 |
| reverse    | display the last items in the feed first |
| author     | show item authors' names |
| date       | show item dates |
| description| show the item description. If HTML is disabled all tags will be stripped |
| nosort     | do not sort the items in the feed |
| n[dhm]     | refresh period, where d=days, h=hours, m=minutes. (e.g. 12h = 12 hours). |

The refresh period defaults to 4 hours. Any value below 10 minutes will be treated as 10 minutes. DokuWiki will generally try to supply a cached version of a page, obviously this is inappropriate when the page contains dynamic external content. The parameter tells DokuWiki to re-render the page if it is more than the refresh period since the page was last rendered.

By default, the feed will be sorted by date, newest items first. You can sort it by oldest first using the `reverse` parameter, or display the feed as is with `nosort`.

**Example:**

```markdown
[rss](http://slashdot.org/index.rss 5 author date 1h)
```

## Control Macros

Some syntax influences how DokuWiki renders a page without creating any output itself. The following control macros are available:

| Macro         | Description |
|---------------|-------------|
| `~~NOTOC~~`   | If this macro is found on the page, no table of contents will be created |
| `~~NOCACHE~~` | DokuWiki caches all output by default. Sometimes this might not be wanted (e.g. when the `<php>` syntax above is used), adding this macro will force DokuWiki to rerender a page on every call |

## Syntax Plugins

DokuWiki's syntax can be extended by [Plugins](plugins.md). How the installed plugins are used is described on their appropriate description pages. The following syntax plugins are available in this particular DokuWiki installation:

```markdown
INFO:syntaxplugins
```
