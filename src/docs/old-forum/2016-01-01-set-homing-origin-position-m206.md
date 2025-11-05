# Set Homing/Origin position/M206

*Original post date: 2016-01-01*

---

# Set Homing/Origin Position/M206

**Forum:** [forum/t-1795760/set-homing-origin-position-m206](/forum/t-1795760/set-homing-origin-position-m206)

---

## Post by Snupple (16 Aug 2016 08:19)

I'm trying to set the homing origin position using M206. My current configuration is:

```ini
extruder_offset = { "left": { "x": 0, "y": 0 }, "right": { "x": 0, "y": 0 } }

However, I need to adjust the values to account for a physical offset of `-10` mm in the X direction and `-5` mm in the Y direction. What is the correct way to configure this?

---

## Re: Set Homing/Origin Position/M206

**Post by arthurwolf (16 Aug 2016 08:58)**

Your problem has nothing to do with "extruder offsets," which are related to using multiple extruders. I think you are looking for the `alpha/beta/gamma_min` values, and `move_to_origin`.

```ini
alpha_min = -10
beta_min = -5
gamma_min = 0
move_to_origin = true

These settings define the minimum positions for the axes and whether to move to the origin after homing. Adjust these values based on your printer's physical dimensions.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20161007174805/http://smoothieware.org/forum/t-1795760/set-homing-origin-position-m206)*
