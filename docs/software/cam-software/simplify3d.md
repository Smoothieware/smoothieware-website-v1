---
permalink: /simplify3d
---

# Simplify3D and Smoothie

## The Problem

S3D has a problem generating way more line segments than is sane/reasonable, and older versions of Smoothie could choke on that.

Current edge versions should not find it an issue other than being very inefficient.

Issue discussion here: [forum.smoothieware.org](http://forum.smoothieware.org/forum/t-1179593?from=email#post-2284378)

## Cleaning up G-code

There are a number of cleanup postprocessors for the S3D G-code that fixes the issues.

Discussion on smoothieware-support: [Google Groups Discussion](https://groups.google.com/d/topic/smoothieware-support/TKtdYDK2_fY/discussion)

### Online Cleanup Tool

Simply pass your S3D G-code through this tool and the problem will stop occurring:

[SimplifyS3D G-code Cleanup Tool](http://mikk36.eu/SimplifyS3D/)

## July 2016 Update

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Good News:</strong> Both Simplify3D and Smoothie have addressed the compatibility issues.
</sl-alert>
{:/nomarkdown}

A small update of the S3D issue:

- **Simplify3D acknowledged the issue** and claims to have fixed it in their latest release ([Release Notes](https://www.simplify3d.com/software/release-notes/))

- **The latest major update to the Smoothie firmware** (see /blog for related blog posts), which is a complete rewrite of step generation, is expected to make Smoothie resistant, if you are using an older version of S3D, or some other new slicing program which would make the same mistake.

We'd really appreciate it if users of S3D and Smoothie would test the latest versions of both together.

And if you run into any problem, report it to both.

Cheers.

## S3D Host Software

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  It seems that the S3D Host does not support Smoothie correctly, so it is <strong>recommended to NOT use that as host software</strong>.
</sl-alert>
{:/nomarkdown}
