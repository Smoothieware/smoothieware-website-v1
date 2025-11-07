---
permalink: /lcd-screen-design
---


# LCD Screen Design

The goal of this page is to work on design ideas for LCD screens for the panel system in Smoothie.

This page documents the proposed improvements and changes to how information is displayed on LCD screens connected to Smoothieboard.

## Watch Screen

The watch screen is the main display that shows real-time status information during operation.

### Current Design

The current watch screen layout displays temperature and position information:

```plaintext
T:999/000 B:999/000
X   0 Y   0 Z   0.00
100%  0:00   0% sd
     Smoothie ready
```

### Requested Design

The requested design reorganizes the information with visual symbols for better clarity:

```plaintext
                 X   0 Y   0 Z   0.00
                  100%  0:00   0% sd
                    Smoothie ready
'Hotend Symbol1'   'Hotend Symbol2'       'Heatbed Symbol'    'Fan Symbol'
 T:999/000          T:999/000              B:999/000           100%
```

This design provides:
- Clearer visual hierarchy with position information at the top
- Symbol-based identification for different temperature sensors
- Separate display areas for hotend, heatbed, and fan status
