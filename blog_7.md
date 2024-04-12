
# Smoothie Edge-0b3e620 and later now pays attention to config option "planner_queue_size"

After updating to this or later versions, it may be necessary to configure the `planner_queue_size` to 32. The previous default in the config files was 64.

## Background

With a setting of 64, Smoothie has been observed to crash (halted printer movement and become unresponsive to controls) mid-print. This was on a Smoothie with the `planner_queue_size` of 64 while also configured for the Kossel arm solution.
