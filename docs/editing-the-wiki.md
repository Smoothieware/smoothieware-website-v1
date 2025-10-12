
# Editing the Documentation

This documentation is hosted on GitHub Pages and uses Jekyll with Markdown formatting.

Anyone can contribute improvements by submitting pull requests to the [GitHub repository](https://github.com/Smoothieware/smoothieware-website-v1).

You are very much encouraged to help us improve this documentation.

Even small contributions can have a large impact and make lots of new user's lives easier.

## How to Contribute

In order to edit the documentation, you will need to:

1. Fork the repository on GitHub

2. Edit markdown files in the `/docs` folder

3. Submit a pull request with your changes

You can just write plain text, and it will be displayed, but there are ways to make it more useful using Markdown formatting.

It is fairly simple, and you can very easily just copy the way it is done on existing pages.

A good starting point is the [GitHub Flavored Markdown documentation](https://guides.github.com/features/mastering-markdown/).

## A few examples

### Text

You can just write text and it will be displayed as-is.

To make sure lines are separated, leave an empty line between them, like this:

```
You can just write text and it will be displayed as-is.

To make sure lines are separated, leave an empty line between them, like this:
```

### Headers

You can add headers to structure your page (like on this page), by doing:

```
## Header
```

The number of `+` signs determines how big the header is, the page title has one `+` sign, and the rest get more and more as they go deeper.

### Links

To insert a link into a page, simply do:

```
This is a link: [link name](http://www.example.com).
```

### Page links

To insert a link to a page on the wiki itself, do:

```
This is a link to the [Editing the wiki](editing-the-wiki) page.
```

### Images

To insert an image, do:

```html
{::nomarkdown}
<img src="images/SampleImage.jpg" alt="Sample Image">
{:/nomarkdown}
```

A nicer way of integrating images is to do the following:

```html
<div class='panel panel-default wrap_right' style='width:450px;padding:10px '>
  <div class='panel-heading'><h4 class='panel-title'>A laser power supply</h4></div>
  <img src='images/laser-power-supply.png' width='400px' height='400px'><br/>
  They use very high voltages and are dangerous
</div>
```

Which gives you a box, labels, and float control.

Note that you can change the floats to `middle` to make the image centered, or `left` to make it float to the left.

### Commands

If you are mentioning a G-code or a configuration option, we have a special syntax that makes it look `like this`, simply do:

```
The `G1` G-code is pretty cool.
```

### Code

To insert code into the page, you can use the special code tag:

```
# This is redundant
Some code
```

It will be formatted as mono-space, and will not be interpreted as Wiki markup.

### Alert Boxes

We use Shoelace alert components for notes, warnings, and other callouts:

<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>Shiny box</strong><br>
  With lots of yummy information
</sl-alert>

The syntax is:

```html
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>Shiny box</strong><br>
  With lots of yummy information
</sl-alert>
```

Available variants and their typical uses:

- `variant="danger"`: Red - for critical warnings

- `variant="warning"`: Orange - for important cautions

- `variant="primary"`: Blue - for tips and recommendations

- `variant="neutral"`: Gray - for general information and notes

### Table of contents

If the page has many headers, you can add a table of contents to it to make it easier to navigate, by doing:

```
[TOC]
```

You can right-justify it by doing:

```
[TOC]
```

Here is what it looks like:

[TOC]

### Lists

You can make nicely formatted lists by doing:

```
- Item one
- Item two
- Item three
```

They then look like this:

- Item one
- Item two
- Item three

### HTML

You can insert raw HTML into the page by doing:

```html
<h1>Custom HTML</h1>
<p>Something else</p>
{::nomarkdown}
<img src="images/circuit.png" alt="hello ;-)">
{:/nomarkdown}
```

This is in particular useful to insert Youtube videos and the like.

### Page Layout

The site uses Jekyll with custom CSS for formatting.

For images, you can float them to the right or center them:

**Floating an image to the right:**

```html
{::nomarkdown}
<a href="images/example.png">
  <img src="images/example.png" alt="Description" width="200" height="150" style="float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}
```

**Centering a large image:**

```html
{::nomarkdown}
<div style="text-align: center;">
  <a href="images/example.png">
    <img src="images/example.png" alt="Description" style="min-width: 640px; width: 100%; max-width: 800px;"/>
  </a>
</div>
{:/nomarkdown}
```
