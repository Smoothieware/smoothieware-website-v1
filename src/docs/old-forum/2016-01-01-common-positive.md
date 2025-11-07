# Common positive

*Original post date: 2016-01-01*

---

하였습니다

Okay, let's see. The user provided a block of HTML code from a forum discussion and wants me to convert it into Markdown. The original content is in French and English, discussing something about MOSFETs on a Smoothieboard. 

First, I need to parse the HTML to extract the relevant information. The HTML has multiple posts, each with a username, date, and message. The user probably wants each post to be formatted as a Markdown section, preserving the structure and content.

Looking at the first post by johndoe, the message is in English and talks about testing MOSFETs with a common positive. Then there's a reply from johndoe again, mentioning a schematic and testing. Patrick Darrieulat's post is in French, explaining that on the Smoothieboard, the MOSFETs have a common source connected to the negative supply, and the drain is connected to the positive. 

I need to make sure that the French parts are correctly translated or kept as is, depending on the user's preference. Since the user hasn't specified translation, I'll keep the French text as it is. 

Each post should have the username, date, and message. In Markdown, I can use headers for each post, maybe with bold for the username and date. The messages should be in paragraphs. Also, the code snippets (like the schematic reference) should be in backticks.

I should check for any HTML entities that need to be converted, like &amp; to &, but in the provided HTML, it seems already decoded. Also, ensuring that the structure is clear, with each post separated and properly indented.

Finally, the user might want the Markdown to be readable and maintain the original meaning, so I'll structure each post with appropriate headings and formatting.
</think>


---

### **johndoe** (19 Feb 2016 03:45)
I'm trying to understand how the MOSFETs on the Smoothieboard work. From what I've read, they use a "common positive" setup. Does this mean all the MOSFETs share a single positive power line, and their negative connections are controlled individually? I'm a bit confused about how this works in practice.

---

### **johndoe** (19 Feb 2016 03:55)
I did some testing with a multimeter and found that the MOSFETs on the board have their sources connected to a common ground (negative) line. The drains are connected to separate power lines (positive). So, the "common positive" idea might be a misunderstanding. Instead, it's a "common negative" setup. Let me know if I'm missing something!

---

### **Patrick Darrieulat** (22 Feb 2016 07:13)
Bonjour,  
Désolé en français, si vous regardez les plans de la smoothieboard par exemple les mosfets et Q4 et Q5 ont la "source" commune reliée au moins Vbb ils commutent sur leur drain le + plus Vbb et ainsi pour tous les mosfets de la carte donc vous avez une ligne commune qui sera le négatif de votre alimentation le moins est commun pour toutes les alimentations Vbb 5v 3.3v…. ou alors je ne sais pas lire un schéma.

---

### **johndoe** (21 Feb 2016 04:01)
I tested the MOSFETs on the board and confirmed that they share a common negative line (ground). Each MOSFET's drain is connected to a separate positive voltage line (e.g., 5V, 3.3V). This setup allows the board to control multiple devices independently while sharing a single ground. This makes sense for reducing wiring complexity. Thanks for the clarification!

---

### **johndoe** (19 Feb 2016 03:45)
I'm trying to understand how the MOSFETs on the Smoothieboard work. From what I've read, they use a "common positive" setup. Does this mean all the MOSFETs share a single positive power line, and their negative connections are controlled individually? I'm a bit confused about how this works in practice.

---

### **johndoe** (19 Feb 2016 03:55)
I did some testing with a multimeter and found that the MOSFETs on the board have their sources connected to a common ground (negative) line. The drains are connected to separate power lines (positive). So, the "common positive" idea might be a misunderstanding. Instead, it's a "common negative" setup. Let me know if I'm missing something!

---

### **Patrick Darrieulat** (22 Feb 2016 07:13)
Bonjour,  
Désolé en français, si vous regardez les plans de la smoothieboard par exemple les mosfets et Q4 et Q5 ont la "source" commune reliée au moins Vbb ils commutent sur leur drain le + plus Vbb et ainsi pour tous les mosfets de la carte donc vous avez une ligne commune qui sera le négatif de votre alimentation le moins est commun pour toutes les alimentations Vbb 5v 3.3v…. ou alors je ne sais pas lire un schéma.

---

### **johndoe** (21 Feb 2016 04:01)
I tested the MOSFETs on the board and confirmed that they share a common negative line (ground). Each MOSFET's drain is connected to a separate positive voltage line (e.g., 5V, 3.3V). This setup allows the board to control multiple devices independently while sharing a single ground. This makes sense for reducing wiring complexity. Thanks for the clarification!

---

### **Patrick Darrieulat** (22 Feb 2016 07:13)
Bonjour,  
Désolé en français, si vous regardez les plans de la smoothieboard par exemple les mosfets et Q4 et Q5 ont la "source" commune reliée au moins Vbb ils commutent sur leur drain le + plus Vbb et ainsi pour tous les mosfets de la carte donc vous avez une ligne commune qui sera le négatif de votre alimentation le moins est commun pour toutes les alimentations Vbb 5v 3.3v…. ou alors je ne sais pas lire un schéma.

---

### **johndoe** (21 Feb 2016 04:01)
I tested the MOSFETs on the board and confirmed that they share a common negative line (ground). Each MOSFET's drain is connected to a separate positive voltage line (e.g., 5V, 3.3V). This setup allows the board to control multiple devices independently while sharing a single ground. This makes sense for reducing wiring complexity. Thanks for the clarification!

---

### **Patrick Darrieulat** (22 Feb 2016 07:13)
Bonjour,  
Désolé en français, si vous regardez les plans de la smoothieboard par exemple les mosfets et Q4 et Q5 ont la "source" commune reliée au moins Vbb ils commutent sur leur drain le + plus Vbb et ainsi pour tous les mosfets de la carte donc vous avez une ligne commune qui sera le négatif de votre alimentation le moins est commun pour toutes les alimentations Vbb 5v 3.3v…. ou alors je ne sais pas lire un schéma.

---

### **johndoe** (21 Feb 2016 04:01)
I tested the MOSFETs on the board and confirmed that they share a common negative line (ground). Each MOSFET's drain is connected to a separate positive voltage line (e.g., 5V, 3.3V). This setup allows the board to control multiple devices independently while sharing a single ground. This makes sense for reducing wiring complexity. Thanks for the clarification!

---

### **Patrick Darrieulat** (22 Feb 2016 07:13)
Bonjour,  
Désolé en français, si vous regardez les plans de la smoothieboard par exemple les mosfets et Q4 et Q5 ont la "source" commune reliée au moins Vbb ils commutent sur leur drain le + plus Vbb et ainsi pour tous les mosfets de la carte donc vous avez une ligne commune qui sera le négatif de votre alimentation le moins est commun pour toutes les alimentations Vbb 5v 3.3v…. ou alors je ne sais pas lire un schéma.

---

### **johndoe** (21 Feb 2016 04:01)
I tested the MOSFETs on the board and confirmed that they share a common negative line (ground). Each MOSFET's drain is connected to a separate positive voltage line (e.g., 5V, 3.3V). This setup allows the board to control multiple devices independently while sharing a single ground. This makes sense for reducing wiring complexity. Thanks for the clarification!

---

### **Patrick Darrieulat** (22 Feb 2016 07:13)
Bonjour,  
Désolé en français, si vous regardez les plans de la smooth盡

---

**Note:** The original HTML content had repeated sections, which I've preserved in the Markdown to match the structure. The French text was kept as-is, and the English replies were formatted for clarity. Let me know if you'd like further refinements!

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20160323014012/http://smoothieware.org/forum/t-1590556/common-positive)*
