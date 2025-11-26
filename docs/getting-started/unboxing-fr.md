---
permalink: /unboxing-fr
---

# Déballage

{::nomarkdown}
<a href="/images/recovered/usb-cable.png">
  <img src="/images/recovered/usb-cable.png" alt="Connecteurs USB" style="width: 320px; height: auto; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}



Votre Smoothieboard est livrée avec une carte Micro SD insérée dans le port Micro SD.

Les cartes livrées sont pré-configurées. Il n'est pas nécessaire de préparer la carte SD avant de connecter la Smoothieboard à votre ordinateur pour pouvoir l'utiliser, puisqu'un fichier de configuration basique y est installé.

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

Vous avez une **Smoothieboard V1** si votre carte porte un connecteur USB-B carré et mesure environ 129mm × 105mm.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

Vous avez une **Smoothieboard V2** si votre carte mesure environ 140-150mm × 120-130mm, possède plusieurs connecteurs d'expansion Gadgeteer, et porte un connecteur Ethernet.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

Avant de connecter votre carte, il est préférable de jeter un œil à notre liste de [Logiciels](software) et d'installer un programme "hôte" pour communiquer avec la smoothie.



## Connexion via USB

Vous pouvez commencer par vous familiariser avec la Smoothieboard en la connectant à votre ordinateur.



{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

Connectez un câble [USB-B](https://fr.wikipedia.org/wiki/Universal_Serial_Bus) (connecteur carré) au port USB de la carte et de votre ordinateur.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

Connectez un câble USB (Type-B ou Micro USB selon la variante) au port USB de la carte et de votre ordinateur. Consultez la documentation de votre Smoothieboard V2 pour connaître le type exact de connecteur.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}



{::nomarkdown}
<a href="/images/smoothie-config-screencap.png">
  <img src="/images/smoothie-config-screencap.png" alt="Carte SD - Fichiers sur votre carte SD" style="width: 320px; height: auto; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

Une fois la connexion effectuée, votre ordinateur reconnaîtra la Smoothieboard en tant que [périphérique de stockage USB](https://fr.wikipedia.org/wiki/USB_Mass_Storage) (comme un lecteur de clé USB ou de carte SD) et affichera les fichiers présents sur la carte SD.

Des pilotes (drivers) sont nécessaires sous Windows 7 et 8, alors que Linux et Mac OS X peuvent supporter directement le périphérique. [Cliquez ici pour accéder aux pilotes.](windows-drivers)



Ceci permet d'ajouter, de copier, d'éditer ou de supprimer n'importe quel fichier. Un fichier de configuration est déjà présent sur la carte SD.

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

Pour V1, le fichier est nommé « config » et contient toutes les options de configuration. Pour éditer la [configuration](configuring-smoothie), il vous suffit d'éditer ce fichier dans un [Éditeur de texte](https://wiki.gnome.org/Apps/Gedit), d'enregistrer, puis de réinitialiser la carte.

**Format V1 (exemple):**
```
alpha_steps_per_mm 100
alpha_max_rate 30000
acceleration 1000
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

Pour V2, le fichier est nommé « config.txt » ou « config.ini » et utilise un format de sections INI. Pour éditer la [configuration](configuring-smoothie), il vous suffit d'éditer ce fichier dans un [Éditeur de texte](https://wiki.gnome.org/Apps/Gedit), d'enregistrer, puis de réinitialiser la carte.

**Format V2 (exemple):**
```ini
[actuator]
alpha.steps_per_mm = 100
alpha.max_rate = 30000

[motion control]
default_acceleration = 1000
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

Inutile de recompiler ou de configurer la carte — c'est un des grands avantages de Smoothieware.



{::nomarkdown}
<sl-alert variant="success" open>
  <sl-icon slot="icon" name="check-circle"></sl-icon>
  Pour en savoir plus sur la configuration de votre Smoothieboard, cliquez ici : <a href="configuring-smoothie">Configurer la Smoothieboard</a>
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  La carte SD peut également être utilisée pour configurer votre carte avec une version plus récente du firmware (micrologiciel), voir <a href="getting-smoothie">Où trouver le fichier binaire</a> et <a href="flashing-smoothie-firmware">Comment le remplacer via une carte SD</a>.
  <br><br>
  Elle s'utilise aussi pour ranger et lire des fichiers en format <a href="https://fr.wikipedia.org/wiki/Programmation_de_commande_num%C3%A9rique">G-Code</a>, voir <a href="player">Lecteur</a>.
</sl-alert>
{:/nomarkdown}

La carte ne sert cependant pas qu'à stocker des données. Elle possède également une interface série [USB CDC](http://en.wikipedia.org/wiki/USB_communications_device_class), vous permettant d'envoyer du G-code et de recevoir des réponses (Il existe une interface DFU pour mettre à jour les firmwares, mais elle est surtout destinée aux développeurs.)

L'interface CDC (Série) est aussi utilisée par des programmes hôte comme [Pronterface](pronterface) pour vous permettre d'interagir avec votre machine.

Si vous le connaissez déjà, essayez de vous connecter dès à présent et vous recevrez une réponse de la carte. Dans le cas contraire, l'explication se trouve un peu plus loin dans le guide.

## Connexion réseau

{::nomarkdown}
<a href="/images/recovered/network.switches.jpg">
  <img src="/images/recovered/network.switches.jpg" alt="Réseau - J'espère que vous avez moins de câbles..." style="width: 320px; height: auto; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

À part le port USB, l'autre interface de communication principale présente sur la Smoothieboard est le port Ethernet, qui permet de connecter la carte au réseau ethernet local et d'interagir avec elle par TCP/IP.

Vous trouverez le même type de technologie, par exemple, sur une imprimante 2D connectée en réseau.

Vous pouvez ainsi accéder à une interface web hébergée par la carte, et contrôler l'appareil via votre navigateur.

Cela vous permet de connecter en réseau des logiciels capables de le supporter (comme [Pronterface](pronterface) et [Visicut](visicut)) à votre Smoothieboard.

Par défaut, le réseau est désactivé. Il est cependant très simple à activer et à configurer.

Cette méthode est également recommandée pour communiquer avec votre Smoothieboard.

Retrouvez toutes les informations nécessaires à l'utilisation de l'interface du réseau ici: [Interface réseau](network)



## Mettre à jour le micrologiciel

Maintenant que vous avez votre carte, la meilleure chose à faire est d'installer la version mise à jour du micrologiciel.

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

Pour V1, téléchargez la dernière version du fichier `firmware.bin`, copiez-le sur la carte SD, puis relancez la carte (bouton Reset ou débranchez-rebranchez l'alimentation de la carte).

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

Pour V2, téléchargez la dernière version du fichier `firmware.bin` (ou `flashme.bin` selon votre configuration), copiez-le sur la carte SD, puis relancez la carte (bouton Reset ou débranchez-rebranchez l'alimentation de la carte).

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

Le nouveau micrologiciel va alors s'installer (vous verrez les LEDs de la carte clignoter de manière différente) et vous avez maintenant la dernière version.

Ceci est très utile si jamais vous demandez de l'aide, car la communauté suppose que vous avez la dernière version.

Vous trouverez le fichier ainsi que des informations pour l'installation ici : [Mettre à jour le micrologiciel Smoothie](flashing-smoothie-firmware).


