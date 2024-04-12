
# SD Card (very) slow to unmount on Mac OS X?

This issue is due to Spotlight indexing the card, especially when large STL files are on the card.

There are two solutions to fix this:

1. Type this Terminal command when the SD card is mounted:
   ```bash
   mdutil -i off /Volumes/Smoothie/
   ```
   
2. Place an empty file named `.metadata_never_index` at the volume root. This can be done very quickly with the following Terminal command:
   ```bash
   cd /Volumes/Smoothie/
   touch .metadata_never_index
   ```
