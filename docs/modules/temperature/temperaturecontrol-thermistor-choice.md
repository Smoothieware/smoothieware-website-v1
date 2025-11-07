---
permalink: /temperaturecontrol-thermistor-choice
---

### Thermistor Choice

Different models of thermistors are used in hotends or heated beds, and each type translates temperature into resistance differently. It's essential to inform Smoothie about the specific thermistor model you have to ensure accurate temperature readings.

This configuration is done using the `thermistor` option in the configuration file. You provide the name of your thermistor, and Smoothie will handle the math accordingly.

```markdown
temperature_control.hotend.thermistor        EPCOS100K
```

Currently, Smoothie recognizes the following thermistor models:

| Name | Beta for 0-80°C | Beta for 185-230°C | I for Steinhart Hart | J for Steinhart Hart | K for Steinhart Hart | Part number |
| ---- | --------------- | ------------------ | -------------------- | -------------------- | -------------------- | ----------- |
| `EPCOS100K` | 4066 | 4193 | 0.000722378300319346F | 0.000216301852054578F | 9.2641025635702e-08F | B57540G0104F000 |
| `Honeywell100K` | 3974 | 4385 | 0.000596153185928425F | 0.000231333192738335F | 6.19534004306738e-08F | 135-104LAG-J01 |
| `Semitec` | 4267 | 4375 | 0.000811290160145459F | 0.000211355789144265F | 7.17614730463848e-08F | 104GT-2 |
| `Honeywell-QAD` | 0.000827339299500986F | 0.000208786427208899F | 8.05595282332277e-08F | 135-104QAD-J01 |
| `Semitec-104NT4` | 0.000797110609710217F | 0.000213433144381270F | 6.5338987554e-08F | 104NT-4R025H42G |
| `RRRF100K` | 3960 | | | | | |
| `RRRF10K` | 3964 | | | | | |
| `HT100K` | 3990 | | | | | |

#### Unknown Thermistor

If your thermistor is not recognized by Smoothie, you can define the parameters manually in the configuration file using either the beta value or the Steinhart Hart algorithm.

##### Using Beta Values

Set the beta value in the configuration file:

```markdown
temperature_control.hotend.beta       4066   # set beta for thermistor
```

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  Beta values provided by manufacturers are typically for the 0-80°C range, which can result in readings being about 7-10°C too high for the 185-230°C range.<br><br>This makes beta values generally suitable for heated beds but not for hotends.
</sl-alert>
{:/nomarkdown}

If the thermistor is 100K ohms at 25°C, this setting is usually sufficient. Additional settings like `r0`, `t0`, `r1`, `r2` are not typically needed as the defaults work well.

If you're unsure about your thermistor model, contact the designer or seller of your 3D printer, hotend, or heated bed to obtain the specifications and beta value.

##### Using the Steinhart Hart Algorithm

This is the preferred method. Set the Steinhart Hart coefficients in the configuration file:

```markdown
temperature_control.hotend.coefficients 0.000722376862540841,0.000216302098124288,0.000000092640163984
```

To determine the Steinhart Hart coefficients for your thermistor, please refer to the [SteinhartHart](steinharthart) page.

Alternatively, if you have the temperature curve for your thermistor, you can define three points on that curve and let Smoothie calculate the coefficients:

```markdown
temperature_control.hotend.rt_curve          20.0,126800,150,1360,240,206.5
```
