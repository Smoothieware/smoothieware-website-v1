---
permalink: /test-components
layout: default
title: Shoelace Components Test
---

# Shoelace Components Test Page

This page tests Shoelace components integration with the Smoothieware theme.

## Alert Components

### Primary Alert

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>This is a primary alert</strong><br />
  This is what a primary alert looks like with Shoelace components.
</sl-alert>
{:/nomarkdown}

### Success Alert

{::nomarkdown}
<sl-alert variant="success" open>
  <sl-icon slot="icon" name="check2-circle"></sl-icon>
  <strong>Success!</strong><br />
  This is what a success alert looks like.
</sl-alert>
{:/nomarkdown}

### Neutral Alert (Similar to our current callout-note)

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Note</strong><br />
  This is a neutral alert that could replace our callout-note style.
</sl-alert>
{:/nomarkdown}

### Warning Alert

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Warning</strong><br />
  This is what a warning alert looks like.
</sl-alert>
{:/nomarkdown}

### Danger Alert

{::nomarkdown}
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>Danger!</strong><br />
  This is what a danger alert looks like.
</sl-alert>
{:/nomarkdown}

## Alert Without Icon

{::nomarkdown}
<sl-alert variant="primary" open>
  <strong>No Icon Alert</strong><br />
  This alert doesn't have an icon.
</sl-alert>
{:/nomarkdown}

## Closable Alert

{::nomarkdown}
<sl-alert variant="primary" open closable>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Closable Alert</strong><br />
  You can close this alert by clicking the X button.
</sl-alert>
{:/nomarkdown}

## Testing with Dark Theme

All alerts above should display nicely with the midnight dark theme.

The Shoelace components should automatically adapt or we may need to adjust styling.

## Other Components

### Button

{::nomarkdown}
<sl-button variant="primary">Primary Button</sl-button>
<sl-button variant="success">Success Button</sl-button>
<sl-button variant="neutral">Neutral Button</sl-button>
<sl-button variant="warning">Warning Button</sl-button>
<sl-button variant="danger">Danger Button</sl-button>
{:/nomarkdown}

### Badge

{::nomarkdown}
<sl-badge variant="primary">Primary</sl-badge>
<sl-badge variant="success">Success</sl-badge>
<sl-badge variant="neutral">Neutral</sl-badge>
<sl-badge variant="warning">Warning</sl-badge>
<sl-badge variant="danger">Danger</sl-badge>
{:/nomarkdown}

## Back to Documentation

[Return to Homepage](index)
