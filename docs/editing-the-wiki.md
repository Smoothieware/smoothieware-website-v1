
# Editing the Wiki

This documentation is a [Wiki](https://en.wikipedia.org/wiki/Wiki), which means anyone can edit it.

Simply click the `Edit` button at the bottom of every page. The first time you will need to create a Wikidot account, which takes just a minute.

You are very much encouraged to help us improve this documentation.

Even small contributions can have a large impact and make lots of new user's life easier.

In order to edit the wiki, you will need to learn a few things, like how to write in Wiki Markup language.

You can just write plain text, and it will be displayed, but there are ways to make it more useful :)

It is fairly simple, and you can very easily just copy the way it is done on existing pages.

A good starting point is the Wikidot [Wiki Syntax documentation](http://www.wikidot.com/doc-wiki-syntax:start).

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
This is a link to the [Editing the wiki](editing-the-wiki.md) page.
```

### Images

To insert an image, do:

```html
<img src="images/SampleImage.jpg" alt="Sample Image">
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

### Boxes

We have a special syntax for "notes" that makes nice colored boxes, like this:

> [!SUCCESS]
> **Shiny box**
> With lots of yummy information

The syntax is:

```
> [!SUCCESS]
> **Shiny box**
> With lots of yummy information
```

You can change the color of the box by changing `bs-callout-success` to other values:
- `bs-callout-danger`: Red
- `bs-callout-warning`: Orange
- `bs-callout-success`: Green
- `bs-callout-primary`: Blue
- `bs-callout-info`: Light blue
- `bs-callout-default`: Grey

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
<img src="images/circuit.png" alt="hello ;-)">
```

This is in particular useful to insert Youtube videos and the like.

### Page formatting

The Smoothie wiki uses [Bootstrap](http://getbootstrap.com/) for formatting, which means you can use its nice features to make your pages look nicer.

For example, you can format your page with two columns:

```
One column
Another column
```

You do this by writing:

```
One column
Another column
```
