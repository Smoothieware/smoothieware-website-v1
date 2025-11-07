# Migrating to Smoothie

{::nomarkdown}
<a href="/images/migration.png">
  <img src="/images/migration.png" alt="Migration" style="width: 320px; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

If you are migrating from another firmware, here are guides to help you understand how some values from your old firmware match the values in your new Smoothie system.

Smoothie uses different configuration parameters and approaches than other common CNC/3D printer firmwares. These guides will help you translate your existing settings.

## Migration Guides

Choose the guide that matches your current firmware:

- [Moving from Marlin to Smoothie](from-marlin) - For users coming from Marlin (common in 3D printers)
- [Moving from GRBL to Smoothie](from-grbl) - For users coming from GRBL (common in CNC mills and laser cutters)

## General Tips

When migrating to Smoothie:

- **Back up your existing configuration** before making changes
- **Start with a fresh config file** from the Smoothie repository as a template
- **Transfer settings gradually** rather than all at once
- **Test each major change** before proceeding to the next
- **Consult the troubleshooting guide** if you encounter issues

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  Need help with your migration? Visit the <a href="irc">IRC channel</a> or check the <a href="troubleshooting">troubleshooting guide</a>.
</sl-alert>
{:/nomarkdown}
