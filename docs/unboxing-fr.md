
<div class='panel panel-default wrap_right' style='width:340px;padding:10px '>
<div class='panel-heading'><h4 class='panel-title'>Connecteurs USB</h4></div>
<img src='images/usb-cable.png' width='320px'><br/>
Smoothie utilise l'USB-B
</div>

# Déballage

Votre Smoothieboard est livrée avec une carte Micro SD insérée dans le port Micro SD.

Les cartes livrées sont pré-configurées. Il n'est pas nécessaire de préparer la carte SD avant de connecter la Smoothieboard à votre ordinateur pour pouvoir l'utiliser, puisqu'un fichier de configuration basique y est installé.

Avant de connecter votre carte, il est préférable de jeter un œil à notre liste de [Logiciels](software.md) et d'installer un programme "hôte" pour communiquer avec la smoothie.

## Connexion via USB

Vous pouvez commencer par vous familiariser avec la Smoothieboard en la connectant à votre ordinateur. Connectez un câble [USB-B](https://fr.wikipedia.org/wiki/Universal_Serial_Bus) au port USB de la carte et de votre ordinateur.

<div class='panel panel-default wrap_right' style='width:340px;padding:10px '>
<div class='panel-heading'><h4 class='panel-title'>Carte SD</h4></div>

<img src='images/smoothie-config-screencap.png' width='320px'><br/>

Fichiers sur votre carte SD
</div>

Une fois la connexion effectuée, votre ordinateur reconnaîtra la Smoothieboard en tant que [périphérique de stockage USB](https://fr.wikipedia.org/wiki/USB_Mass_Storage) (comme un lecteur de clé USB ou de carte SD) et affichera les fichiers présents sur la carte SD. Des pilotes (drivers) sont nécessaires sous Windows 7 et 8, alors que Linux et Mac OS X peuvent supporter directement le périphérique. [Cliquez ici pour accéder aux pilotes.](http://smoothieware.org/windows-drivers.md).

Ceci permet d'ajouter, de copier, d'éditer ou de supprimer n'importe quel fichier. Un fichier nommé « config » est déjà présent sur la carte SD. Ce fichier contient toutes les options de configuration de votre carte et se lit lorsque vous la lancez ou réinitialisez. Pour éditer la [configuration](http://smoothieware.org/configuring-smoothie.md) il vous suffit d'éditer ce fichier dans un [Éditeur de texte](https://wiki.gnome.org/Apps/Gedit), d'enregistrer, puis de réinitialiser la carte. Inutile de recompiler ou de configurer la carte.

> [!SUCCESS]
> Pour en savoir plus sur la configuration de votre Smoothieboard, cliquez ici : [Configurer la Smoothieboard](http://smoothieware.org/configuring-smoothie.md)

> [!PRIMARY]
> La carte SD peut également être utilisée pour configurer votre carte avec une version plus récente du firmware (micrologiciel), voir [Où trouver le fichier binaire](getting-smoothie.md) et [Comment le remplacer via une carte SD](flashing-smoothie-firmware.md).
>
> Elle s'utilise aussi pour ranger et lire des fichiers en format [G-Code](https://fr.wikipedia.org/wiki/Programmation_de_commande_num%C3%A9rique), voir [Lecteur](player.md).

La carte ne sert cependant pas qu'à stocker des données. Elle possède également une interface série [USB CDC](http://en.wikipedia.org/wiki/USB_communications_device_class), vous permettant d'envoyer du G-code et de recevoir des réponses (Il existe une interface DFU pour mettre à jour les firmwares, mais elle est surtout destinée aux développeurs.)

L'interface CDC (Série) est aussi utilisée par des programmes hôte comme [Pronterface](pronterface.md) pour vous permettre d'interagir avec votre machine. Si vous le connaissez déjà, essayez de vous connecter dès à présent et vous recevrez une réponse de la carte. Dans le cas contraire, l'explication se trouve un peu plus loin dans le guide.

## Connexion réseau

<div class='panel panel-default wrap_right' style='width:340px;padding:10px '>
<div class='panel-heading'><h4 class='panel-title'>Réseau</h4></div>
<img src='images/network.switches.jpg' width='320px'><br/>
J'espère que vous avez moins de câbles...
</div>

À part le port USB, l'autre interface de communication principale présente sur la Smoothieboard est le port Ethernet, qui permet de connecter la carte au réseau ethernet local et d'interagir avec elle par TCP/IP.

Vous trouverez le même type de technologie, par exemple, sur une imprimante 2D connectée en réseau.

Vous pouvez ainsi accéder à une interface web hébergée par la carte, et contrôler l'appareil via votre navigateur.

Cela vous permet de connecter en réseau des logiciels capables de le supporter (comme [Pronterface](pronterface.md) et [Visicut](visicut.md)) à votre Smoothieboard.

Par défaut, le réseau est désactivé. Il est cependant très simple à activer et à configurer.

Cette méthode est également recommandée pour communiquer avec votre Smoothieboard.

Retrouvez toutes les informations nécessaires à l'utilisation de l'interface du réseau ici: [Interface réseau](http://smoothieware.org/network.md)

## Mettre à jour le micrologiciel

Maintenant que vous avez votre carte, la meilleure chose à faire est d'installer la version mise à jour du micrologiciel.

Pour ce faire, téléchargez la dernière version du fichier `firmware.bin`, copiez-le sur la carte SD puis relancez la carte (bouton Reset ou débranchez-rebranchez l'alimentation de la carte)

Le nouveau micrologiciel va alors s'installer (vous verrez les LEDs de la carte clignoter de manière différente) et vous avez maintenant la dernière version.

Ceci est très utile si jamais vous demandez de l'aide, car la communauté suppose que vous avez la dernière version

Vous trouverez le fichier ainsi que des informations pour l'installation ici : [Mettre à jour le micrologiciel Smoothie](http://smoothieware.org/flashing-smoothie-firmware.md).
