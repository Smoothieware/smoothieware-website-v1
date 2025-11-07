# Smoothie thermistor input T1 bad?

*Original post date: 2016-01-01*

---

auprès de l'utilisateur, je dois analyser le problème de la carte Smoothieboard avec un thermistor input T1 défectueux. L'utilisateur a déplacé le thermistor vers un autre port et cela a fonctionné, mais il veut savoir si le problème est dans le microcontrôleur ou dans le circuit imprimé. Les réponses précédentes suggèrent que le dommage est probablement dans le microcontrôleur, mais je dois vérifier si cela est certain.

Je dois expliquer que les cartes Smoothieboard ont des ports redondants pour limiter les dommages, mais si un port est défectueux, cela peut indiquer un problème interne. Cependant, il est possible que le problème soit dans le circuit imprimé, comme un court-circuit ou une mauvaise soudure. Je devrais recommander des tests supplémentaires, comme vérifier les connexions, tester avec un autre thermistor, ou consulter un professionnel si nécessaire. Il faut aussi mentionner que remplacer le microcontrôleur pourrait être une solution, mais cela nécessite des compétences techniques.
</think>

Il semble que le problème avec le thermistor input T1 de votre carte Smoothieboard soit lié à un **dommage sur le microcontrôleur**. Voici une analyse détaillée et des recommandations :

---

### **1. Analyse du problème**
- **Symptômes observés** :  
  - Le thermistor ne fonctionne pas sur le port T1, mais fonctionne correctement sur un autre port.  
  - Le microcontrôleur est probablement endommagé, car les ports thermistor sont généralement connectés directement à des broches du microcontrôleur.  
  - La présence de ports redondants (comme les thermistors, MOSFETs, et endstops) sur la Smoothieboard est conçue pour limiter les impacts d’un dommage localisé. Cependant, si un seul port est affecté, cela suggère un problème interne (ex : court-circuit, surtension, ou défaillance du microcontrôleur).

- **Cause probable** :  
  - **Dommage au microcontrôleur** : Les ports thermistor sont gérés par des circuits intégrés (comme des ADCs) sur le microcontrôleur. Si ces circuits sont endommagés, le port T1 ne fonctionnera pas, même si les autres ports sont intacts.  
  - **Court-circuit ou surtension** : Une surtension (ex : inversion de polarité, alimentation incorrecte) ou un court-circuit pourrait avoir endommagé le microcontrôleur, affectant uniquement le port T1.

---

### **2. Solutions et recommandations**
#### **Option 1 : Vérification des connexions et tests supplémentaires**
- **Vérifiez les connexions physiques** :  
  - Assurez-vous que le thermistor est bien soudé et que les broches du port T1 ne sont pas oxydées ou endommagées.  
  - Testez avec un autre thermistor pour éliminer un problème lié à l’élément lui-même.  

- **Utilisez un multimètre** :  
  - Mesurez la résistance du thermistor à différentes températures pour confirmer qu’il fonctionne correctement.  
  - Vérifiez la tension et la continuité sur le port T1 pour détecter un court-circuit ou une défaillance de la carte.

#### **Option 2 : Remplacement du microcontrôleur**
- Si le microcontrôleur est endommagé, il peut être remplacé par un professionnel ou un utilisateur expérimenté.  
- **Risques** :  
  - Le remplacement du microcontrôleur nécessite des compétences en soudage et une connaissance approfondie de la carte.  
  - Il existe un risque de dommages supplémentaires si le remplacement n’est pas effectué correctement.

#### **Option 3 : Utilisation d’un port redondant**
- Comme vous l’avez déjà fait, déplacer le thermistor vers un autre port (ex : T2, T3) est une solution temporaire.  
- Cela permet de continuer à utiliser la carte sans interruption, bien que cela ne résolve pas la cause racine du problème.

#### **Option 4 : Contactez le support technique**
- Si vous n’êtes pas à l’aise avec les réparations techniques, contactez le support de la communauté Smoothieboard ou un professionnel.  
- Ils pourront vous aider à diagnostiquer le problème avec des outils spécialisés ou vous proposer une solution de remplacement.

---

### **3. Conclusion**
Le problème est **probablement lié au microcontrôleur**, mais il est important de vérifier les connexions et de tester avec un autre thermistor avant de conclure. Si le microcontrôleur est effectivement endommagé, le remplacement ou la réparation par un expert sera nécessaire. En attendant, l’utilisation d’un port redondant reste une solution pratique.

Si vous avez besoin d’aide pour identifier les broches du microcontrôleur ou pour des instructions de remplacement, n’hésitez pas à demander !

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20160323014012/http://smoothieware.org/forum/t-1586848/smoothie-thermistor-input-t1-bad)*
