
S3D has a problem generating way more line segments than is sane/reasonable, and older versions of Smoothie could choke on that. Current edge versions should not find it an issue other than being very inefficient.

Issue discussion here... [forum.smoothieware.org](http://forum.smoothieware.org/forum/t-1179593?from=email#post-2284378)

## Cleaning up gcode

There are a number of cleanup postprocessors for the S3D gcode that fixes the issues...

[smoothieware-support](https://groups.google.com/d/topic/smoothieware-support/TKtdYDK2_fY/discussion)

And an online version: simply pass your S3D gcode through this tool and the problem will stop occurring

[SimplifyS3D](http://mikk36.eu/SimplifyS3D/)

## July 2016 update

Hello.

A small update of the S3D issue:

- Simplify3D finally acknowledged the issue, and claims to have fixed it in their latest release ([Release Notes](https://www.simplify3d.com/software/release-notes/))
- The latest major update to the Smoothie firmware ([Blog Post](http://smoothieware.org/blog:14)), which is a complete rewrite of step generation, is expected to make Smoothie resistant, if you are using an older version of S3D, or some other new slicing program which would make the same mistake.

We'd really appreciate it if users of S3D and Smoothie would test the latest versions of both together. 
And if you run into any problem, report it to both.

Cheers.

## S3D Host

It seems that the S3D Host does not support Smoothie correctly, so it is recommended to NOT use that as host S/W
