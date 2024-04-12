
# Sensor Types

Here is a table of the common sensor types, with their pros, cons, and our advice:

| Type | Uses | Pros | Cons | Our rating | Advice |
| ---- | ---- | ---- | ---- | ---------- | ------ |
| Mechanical switch | Endstops, retractable Z-probes | Cheap, very durable, very precise/repeatable | None | This is the simplest, and also by chance the best sensor. Don't use anything else unless you have a very good reason to. Just getting a fancier sensor because it feels cool to do so, is most likely going to bite you in the back quickly. | |
| Optical switch | Endstops, retractable Z-probes | Cheap, durable, very precise/repeatable | Dust can block light path after some time | This can be used in place of mechanical switches in most situations, has similar advantages, and doesn't produce any sound. | |
| Hall effect | Endstops, bed probe | Fairly cheap, non-contact, variable precision/repeatability | Requires magnets, which accumulates ambient metal dust, can lack repeatability | A fair non-contact option if contact is an issue in your setup. | |
| Inductive | Endstops, bed probe | Non-contact | Expensive, difficult to wire, substandard repeatability, 24-36V requirement, endstop input protection (voltage divider) required | You probably shouldn't use these unless you have a very good reason. | |
| Capacitive | Endstops, bed probe | Non-contact, can be used with glass bed | Expensive, difficult to wire, substandard repeatability, 24-36V requirement, endstop input protection (voltage divider) required | You probably shouldn't use these unless you have a very good reason. | |
| Force sensitive resistor (FSR) | Bed probe | Can be used under a glass bed, non-contact, can be very reliable if set up correctly | Difficult to set up correctly, finicky, expensive, analog meaning it requires an adapter, more complex to wire | You probably shouldn't use these unless you have a very good reason. | |
| IR probes | Z probe, bed probe | Non-contact | Expensive, analog meaning it requires an adapter, terrible repeatability/accuracy, more complex to wire | You probably shouldn't use these unless you have a very good reason. | |
| Bltouch | Retractable Z-probes | Cheap, very durable, very precise/repeatable, retractable (equivalent to a servo-mounted mechanical switch) | None, other than the added complexity of retracting | The mechanical switches are the best sensors by far, but this is very similar, essentially emulating a servo-mounted mechanical switch. | |

The [Reprap probe page](https://reprap.org/wiki/Z_probe#Inductive.md) also has information on this that you might find helpful.
