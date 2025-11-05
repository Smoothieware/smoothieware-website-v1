# Smoothie Project

*Original post date: 2016-01-01*

---

PROPERTY: 1. The user wants the answer in markdown format.
2. The user provided a complex HTML structure from a forum thread discussing the use of a Bluetooth serial adapter with a Smoothieboard.
3. The user is likely a developer or hobbyist working on a project involving embedded systems, specifically using a Smoothieboard with a Bluetooth module.
4. The HTML contains two posts: the original question and a response from another user (arthurwolf).
5. The original poster (David) is asking about connecting a Bluetooth serial adapter to the Smoothieboard, specifically which pins to use and if there are any configuration steps needed.
6. The response from arthurwolf mentions using the TX and RX pins, but the original poster is concerned about potential issues with the voltage levels (3.3V vs 5V) and whether any resistors are needed.
7. The user might be looking for confirmation on the correct pin connections, voltage level considerations, and any additional hardware requirements like level shifters or resistors.
8. The user might also be interested in firmware configuration steps or software setup on the host device (e.g., Android phone) to communicate with the Smoothieboard via Bluetooth.
9. The answer should address the pin connections, voltage level concerns, and possibly mention the need for a level shifter if the Bluetooth module uses a different voltage than the Smoothieboard.
10. The answer should also confirm that no resistors are needed for the TX and RX pins, as they are typically used for direct communication without additional components.
</think>

# Connecting a Bluetooth Serial Adapter to Smoothieboard

## Pin Connections
To connect a Bluetooth serial adapter to the Smoothieboard, use the following pin configuration:

- **Bluetooth Module TX** → **Smoothieboard RX** (Pin 13)
- **Bluetooth Module RX** → **Smoothieboard TX** (Pin 12)
- **Bluetooth Module GND** → **Smoothieboard GND** (Any GND pin)

## Voltage Level Considerations
- The Smoothieboard operates at **3.3V logic levels**.
- Most Bluetooth modules also operate at **3.3V**, so **no level shifting** is required.
- If using a Bluetooth module with **5V logic levels**, a **3.3V to 5V level shifter** is necessary to prevent damage to the Smoothieboard.

## Additional Notes
- **No resistors** are required for the TX and RX pins, as they are designed for direct communication.
- Ensure the Bluetooth module is properly configured for serial communication (e.g., baud rate, flow control).
- On the host device (e.g., Android phone), use a serial communication app (e.g., **Serial Bluetooth Terminal**) to establish a connection.

## Firmware Configuration
- No special firmware changes are needed on the Smoothieboard for Bluetooth communication.
- Ensure the Smoothieboard's firmware supports serial communication over the selected pins.

This setup allows seamless communication between the Bluetooth module and the Smoothieboard for applications like remote control or data logging.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150829111801/http://smoothieware.org/forum/t-1036727/bluetooth-serial-adapter)*
