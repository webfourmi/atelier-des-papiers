window.ATELIER_DATA = {
  version:'0.6.7',
  families:[
    {id:'tampons',label:'Tampons & impression',icon:'stamp'},
    {id:'encres',label:'Encres & fonds',icon:'droplets'},
    {id:'embossage',label:'Embossage & pochoirs',icon:'sparkles'},
    {id:'albums',label:'Albums, cartes & reliures',icon:'book'},
    {id:'mixed',label:'Junk journal & mixed media',icon:'layers'},
  ],
  courses:[
    {
      id:'tamponnage',number:1,title:'Empreintes & souvenirs',subtitle:'Réussir ses premiers tamponnages',family:'tampons',level:'Découverte',duration:'35 min',image:'stamps',color:'#82715b',
      description:'Comprendre le geste, découvrir les tampons transparents et cling, puis réaliser une étiquette botanique nette et élégante.',
      outcome:'Un tag botanique de 7 × 12 cm avec une belle empreinte et des bords doucement patinés.',
      materials:['Tampon transparent ou tampon caoutchouc cling à motif botanique','Bloc acrylique propre adapté à la taille du motif','Encre noire pour papier (ou encre Archival pour les finitions à l’eau)','Papier blanc lisse 180 à 250 g/m², plus quelques chutes','Papier kraft, règle, massicot ou ciseaux','Chiffon et nettoyant compatibles avec l’encre'],
      preparation:'Installer une surface stable et propre. Prévoir une feuille de brouillon sous la réalisation et tester l’encre sur une chute du même papier.',
      steps:[
        {title:'Observer les tampons',time:'3 min',body:'Un tampon transparent laisse voir le motif à travers le bloc. Un tampon en caoutchouc cling est opaque : c’est sa face adhérente, montée sur mousse, qui se fixe au bloc. Observer le relief pour distinguer la surface à encrer.',tip:'Pour un tampon opaque, un bloc quadrillé ou une plateforme de positionnement aide à placer le motif.',mistake:'Ne pas coller définitivement un tampon cling sur son bloc.',views:['Comparaison des deux tampons, recto et verso','Macro du relief de la gravure']},
        {title:'Installer le tampon',time:'3 min',body:'Fixer la face adhérente sur un bloc acrylique sec et propre, assez large pour soutenir tout le motif. Vérifier qu’aucun coin ne dépasse. Poser le bloc face tampon vers le haut pour préparer l’encrage.',tip:'Si le tampon adhère mal, nettoyer son dos selon les conseils du fabricant.',mistake:'Un bloc trop petit rend la pression irrégulière.',views:['Position du tampon sur le bloc','Vue de profil du relief et de la mousse']},
        {title:'Appliquer l’encre',time:'5 min',body:'Tapoter le coussinet sur la surface du tampon, en le tenant au-dessus du motif. Couvrir tous les reliefs avec une fine couche uniforme. Observer en lumière rasante : l’encre ne doit pas former de flaques.',tip:'Sur un grand tampon, amener le coussinet à l’empreinte plutôt que le tampon au coussinet.',mistake:'Trop d’encre remplit les détails fins et provoque des bavures.',views:['Coussinet tenu au-dessus du tampon','Macro : surface correctement encrée','Comparaison encrage juste / surchargé']},
        {title:'Imprimer sans bouger',time:'5 min',body:'Repérer mentalement l’emplacement, puis abaisser le bloc verticalement. Presser doucement et régulièrement sur toute la surface, sans balancer ni faire glisser. Soulever ensuite dans l’axe.',tip:'Effectuer d’abord un essai sur brouillon pour ajuster la pression.',mistake:'Un mouvement latéral crée une double empreinte.',views:['Vue de dessus : positionnement','Vue rapprochée du geste des mains','Résultat immédiatement après retrait']},
        {title:'Comparer trois essais',time:'5 min',body:'Réaliser trois empreintes sur des chutes. Examiner contours et zones pleines : une image trop claire manque parfois d’encre ou de pression ; une image baveuse révèle souvent une pression excessive, un glissement ou trop d’encre.',tip:'Pour imprimer à nouveau exactement au même endroit, utiliser une plateforme de positionnement.',mistake:'Ne pas repositionner à l’œil un tampon pour « compléter » une empreinte.',views:['Empreinte trop pâle','Empreinte bavée','Empreinte nette et équilibrée']},
        {title:'Composer son tag botanique',time:'10 min',body:'Découper un tag de 7 × 12 cm. Biseauter les coins supérieurs et faire un trou centré à environ 1 cm du haut. Patiner doucement les bords avec une encre brune, laisser sécher puis tamponner une branche botanique. Ajouter une courte inscription et une ficelle.',tip:'Conserver des zones vides : le motif botanique reste le point focal.',mistake:'Les effets de vieillissement ne doivent pas masquer les détails du tampon.',views:['Patine légère des bords','Composition avant encrage définitif','Tag terminé en vue générale et macro']},
        {title:'Nettoyer et ranger',time:'4 min',body:'Enlever l’excès d’encre puis nettoyer avec un produit compatible avec l’encre et le matériau du tampon. Sécher soigneusement ; replacer le tampon sur son support ou sa feuille de rangement.',tip:'Les encres permanentes exigent parfois un nettoyant spécialisé.',mistake:'Éviter les solvants agressifs et le frottement brutal sur le relief.',views:['Nettoyage du tampon','Tampon sec sur sa feuille de rangement']}
      ],
      mistakes:['Empreinte pâle : tester une pression plus régulière et vérifier l’encrage.','Motif flou : tenir le bloc immobile et retirer à la verticale.','Petits détails bouchés : enlever l’excès d’encre et diminuer la pression.'],
      challenge:'Réalise trois empreintes du même motif puis choisis la plus nette. Transforme-la en tag botanique de 7 × 12 cm.',
      sources:[{label:'Hero Arts : conseils de tamponnage',url:'https://heroarts.com/'},{label:'Stampers Anonymous : gammes de tampons',url:'https://www.stampersanonymous.com/'}]
    },
    {
      id:'encres',number:2,title:'Le monde des encres',subtitle:'Dye, pigment, Archival, Distress Ink et Distress Oxide',family:'encres',level:'Découverte',duration:'45 min',image:'inks',
      description:'Choisir une encre pour tamponner, créer un fond, aquareller ou jouer avec les superpositions.',outcome:'Un nuancier de cinq encres avec échantillon tamponné, bande de couleur et essai à l’eau.',
      materials:['Différents coussinets encreurs disponibles','Un même petit tampon pour comparer','Papier blanc lisse et papier kraft','Applicateur mousse ou brosse','Pinceau fin, eau, chiffon et stylo pour annoter'],
      preparation:'Identifier le nom exact de chaque encre. Vérifier les consignes d’usage de la marque : toutes les encres pigmentaires ou à colorants ne réagissent pas de la même façon.',
      steps:[
        {title:'Identifier les familles',body:'Repérer la mention dye (colorant), pigment ou hybride sur les emballages. Une encre à colorants est souvent translucide ; certaines encres pigmentaires sont plus couvrantes. Les différences dépendent aussi des formules.',tip:'Lire les indications du fabricant plutôt que de déduire la résistance à l’eau de la seule famille.',views:['Étiquettes de coussinets','Comparaison des noms de gammes']},
        {title:'Tamponner un motif identique',body:'Préparer des cartes de 7 × 10 cm. Sur chaque carte, imprimer le même tampon avec une encre différente, en notant marque et référence.',tip:'Utiliser le même papier et la même pression pour une comparaison utile.',views:['Cartes étiquetées','Empreintes comparées']},
        {title:'Créer un aplat',body:'Sous le motif, étaler une petite bande d’encre au moyen d’une mousse ou d’une brosse. Observer intensité, translucidité et facilité d’estompage.',tip:'Faire un deuxième test sur papier kraft pour apprécier la couverture.',views:['Bande de couleur sur blanc','Bande sur kraft']},
        {title:'Tester le comportement avec l’eau',body:'Sur une zone sèche et adaptée, déposer une petite goutte d’eau puis tamponner. La Distress Ink et la Distress Oxide réagissent à l’eau, contrairement à une Archival sèche conçue pour y résister.',tip:'Noter les temps de séchage et ne pas mouiller des documents de valeur.',views:['Test avant goutte','Test après goutte']},
        {title:'Assembler son nuancier',body:'Classer les cartes par marque, coloris ou famille. Ajouter une photo nette de chaque carte dans Mon atelier.',tip:'Conserver les références exactes pour les retrouver plus tard.',views:['Nuancier classé','Détail d’une carte annotée']}
      ],
      mistakes:['Une encre permanente n’est résistante à l’eau qu’après séchage selon ses spécifications.','Une couleur peut être très différente sur papier kraft et sur papier blanc.'],challenge:'Créer au moins cinq cartes de nuancier et les classer dans Mon atelier.',sources:[{label:'Ranger Ink : Distress',url:'https://rangerink.com/collections/distress'},{label:'Ranger Ink : Archival',url:'https://rangerink.com/collections/archival-ink'}]
    },
    {id:'degrades',number:3,title:'Les fonds encrés',subtitle:'Dégradés doux et effets avec l’eau',family:'encres',level:'Découverte',duration:'45 min',image:'gradient',description:'Apprendre à fondre plusieurs couleurs sans marques d’applicateur.',outcome:'Deux fonds 10 × 15 cm : dégradé simple et dégradé texturé.',materials:['Papier lisse adapté','Encres estompables jaune, orange et brun','Brosses ou mousses','Brouillon','Brumisateur et essuie-tout'],preparation:'Protéger la table et tester les encres sur une chute ; les effets d’eau doivent être réservés aux formulations compatibles.',steps:[{title:'Préparer le fond',body:'Fixer doucement le papier et placer un brouillon autour. Commencer avec la couleur la plus claire.',tip:'Les passages légers se fondent mieux que les couches épaisses.',views:['Papier et outils disposés','Brosse légèrement chargée']},{title:'Poser le jaune',body:'Commencer les gestes circulaires sur le brouillon et entrer doucement sur la feuille. Étendre une zone claire.',tip:'Une brosse presque sèche limite les marques.',views:['Geste de départ hors du papier','Première zone colorée']},{title:'Faire fondre l’orange',body:'Appliquer l’orange en chevauchant la zone jaune. Revenir avec la couleur claire pour lisser la transition.',tip:'Faire plusieurs couches fines.',views:['Chevauchement jaune-orange','Transition obtenue']},{title:'Accentuer les bords',body:'Appliquer une quantité modérée de brun vers les bords pour apporter de la profondeur.',tip:'Ne pas encercler uniformément le papier si l’on souhaite garder de la lumière.',views:['Brun posé sur les coins','Fond équilibré']},{title:'Explorer les gouttelettes',body:'Sur le deuxième fond sec et avec une encre réactive à l’eau, déposer quelques gouttes, attendre brièvement puis absorber.',tip:'Faire un essai sur une chute : la réaction varie selon le papier et l’encre.',views:['Gouttes sur le fond','Texture après absorption']}],mistakes:['Traces rondes : commencer le geste en dehors du papier.','Couleurs boueuses : laisser sécher ou limiter le nombre de superpositions.'],challenge:'Produire deux fonds d’automne différents.',sources:[{label:'Ranger Ink : gammes Distress',url:'https://rangerink.com/collections/distress'}]},
    {id:'embossage',number:4,title:'Éclats & relief',subtitle:'L’embossage à chaud',family:'embossage',level:'Découverte +',duration:'40 min',image:'emboss',description:'Faire fondre une poudre à embosser pour obtenir un motif brillant et en relief.',outcome:'Deux étiquettes : poudre dorée sur fond sombre et poudre blanche sur kraft.',materials:['Tampon et bloc','Encre lente spéciale embossage','Poudre à embosser','Pistolet chauffant pour loisirs créatifs','Papier épais','Feuille pour récupérer la poudre','Pinceau fin et pince isolante'],preparation:'Travailler sur une surface résistante à la chaleur dans un espace aéré. Garder les doigts hors du flux d’air brûlant.',steps:[{title:'Préparer le papier',body:'Couper une étiquette et utiliser un sachet antistatique si besoin.',tip:'La poudre collera moins aux endroits non souhaités.',views:['Étiquette préparée','Traitement antistatique']},{title:'Tamponner',body:'Encrer le motif avec une encre spéciale embossage et imprimer nettement.',tip:'Préparer la poudre avant d’encrer.',views:['Tampon chargé','Motif humide']},{title:'Saupoudrer',body:'Verser généreusement la poudre et récupérer aussitôt l’excédent. Enlever les grains isolés au pinceau.',tip:'Récupérer la poudre sur une feuille pliée.',views:['Poudre appliquée','Motif après retrait']},{title:'Faire fondre',body:'Chauffer avec l’outil adapté, à distance prudente selon ses instructions, jusqu’à fusion complète de la poudre. Arrêter de chauffer dès que le motif devient brillant.',tip:'Le papier et le pistolet restent chauds : laisser refroidir.',views:['Fusion en cours','Macro de la texture brillante']},{title:'Comparer deux rendus',body:'Créer un second motif avec poudre blanche sur kraft et comparer les contrastes.',tip:'Tester une poudre plus fine pour les petits détails.',views:['Étiquette dorée','Étiquette blanche']}],mistakes:['Surchauffe : papier gondolé ou relief abîmé.','Grains parasites : papier chargé d’électricité statique.','Un sèche-cheveux n’est pas un substitut au pistolet chauffant adapté.'],challenge:'Créer deux étiquettes embossées et comparer les rendus.',sources:[{label:'Ranger Ink : poudres embossage',url:'https://rangerink.com/collections/embossing-powders'}]},
    {id:'pochoirs',number:5,title:'Pochoirs & texture',subtitle:'De la couleur au relief',family:'embossage',level:'Découverte +',duration:'45 min',image:'stencils',description:'Un même pochoir donne deux résultats : motif encré et motif en relief.',outcome:'Une planche 15 × 15 cm, moitié encrée, moitié texturée.',materials:['Pochoir propre','Papier cartonné épais','Encre adaptée','Brosse d’estompage','Pâte de texture','Spatule','Ruban repositionnable'],preparation:'Protéger le plan de travail et prévoir de nettoyer immédiatement le pochoir après la pâte.',steps:[{title:'Positionner le pochoir',body:'Fixer le pochoir pour éviter tout déplacement sur un papier 15 × 15 cm.',tip:'Vérifier que les petites découpes reposent bien à plat.',views:['Fixation du pochoir','Vue des ouvertures']},{title:'Encrer en plusieurs passages',body:'Charger très légèrement la brosse et appliquer progressivement pour limiter les bavures sous le pochoir.',tip:'Les couches fines donnent des contours plus nets.',views:['Brosse sur pochoir','Révélation du motif']},{title:'Préparer l’essai relief',body:'Placer le pochoir sur une autre moitié de papier et étaler une fine couche de pâte.',tip:'Tenir le pochoir bien en place pendant le passage de la spatule.',views:['Pâte sur spatule','Pâte étalée']},{title:'Soulever et nettoyer',body:'Retirer le pochoir d’un seul mouvement vertical, puis le nettoyer immédiatement.',tip:'Ne pas toucher la pâte encore humide.',views:['Relief frais','Pochoir au nettoyage']},{title:'Laisser sécher et comparer',body:'Attendre le séchage complet selon le produit. Photographier le contraste entre motif plat et texture.',tip:'Une photographie en lumière rasante révèle mieux le relief.',views:['Texture sèche en macro','Comparaison des deux résultats']}],mistakes:['Trop d’encre peut passer sous le pochoir.','Ne pas chauffer sans vérifier la compatibilité de la pâte.'],challenge:'Créer une carte d’échantillons avec les deux versions.',sources:[]},
    {id:'carte-botanique',number:6,title:'La carte botanique',subtitle:'Une composition élégante, du fond à la finition',family:'albums',level:'Découverte +',duration:'1 h',image:'card',description:'Assembler encrage, tamponnage et embossage dans une première création complète.',outcome:'Une carte pliée de 10,5 × 15 cm.',materials:['Carton 21 × 15 cm','Panneau décoratif 9,5 × 14 cm','Encres vert sauge et beige','Tampons de feuillages','Poudre dorée facultative','Colle de précision et plioir'],preparation:'Repérer la place du motif principal avant de commencer les fonds.',steps:[{title:'Découper la base',body:'Découper 21 × 15 cm et marquer le pli à 10,5 cm pour obtenir une carte 10,5 × 15 cm.',tip:'Marquer le pli avec un plioir pour un résultat net.',views:['Règle et dimensions','Carte pliée']},{title:'Créer le fond',body:'Travailler un dégradé très léger vert sauge et beige sur le panneau de 9,5 × 14 cm.',tip:'Réserver des zones claires pour les empreintes.',views:['Dégradé en cours','Panneau sec']},{title:'Tamponner les feuillages',body:'Placer les motifs en privilégiant un groupe principal et un contrepoint discret.',tip:'Essayer la composition sur un brouillon.',views:['Disposition des tampons','Empreintes finies']},{title:'Ajouter une touche d’or',body:'Embosser un petit motif ou une inscription si le matériel est disponible.',tip:'Une touche légère suffit pour créer une finition raffinée.',views:['Poudre dorée','Détail final']},{title:'Assembler',body:'Coller le panneau au centre de la carte en vérifiant les marges régulières.',tip:'Laisser sécher à plat.',views:['Alignement du panneau','Carte finalisée']}],mistakes:['Ne pas tamponner sur un fond encore humide.','Une surcharge d’embellissements nuit à la lisibilité.'],challenge:'Créer une version botanique et une seconde carte avec une palette différente.',sources:[]},
    {id:'album-accordeon',number:7,title:'L’album accordéon',subtitle:'Une première reliure simple',family:'albums',level:'Intermédiaire',duration:'1 h 30',image:'album',description:'Fabriquer un mini-album en trois volets avec deux couvertures rigides.',outcome:'Mini-album 10 × 10 cm, trois volets, couverture 10,5 × 10,5 cm.',materials:['Papier de scrapbooking 30 × 30 cm','Deux cartons 10,5 × 10,5 cm','Massicot, règle et plioir','Colle adaptée aux papiers','Photos de petit format, étiquettes et ruban'],preparation:'Vérifier le sens des motifs imprimés avant les découpes. Pour les photos importantes, utiliser des copies ou des coins de conservation adaptés.',steps:[{title:'Découper la bande',body:'Dans une feuille 30 × 30 cm, découper une bande de 10 × 30 cm.',tip:'Laisser une marge de sécurité au massicot pour ne pas rogner la taille.',views:['Mesures de découpe','Bande 10 × 30 cm']},{title:'Marquer les plis',body:'Faire deux lignes de rainage à 10 et 20 cm, puis plier en accordéon, une vallée et une montagne.',tip:'Plier doucement dans l’axe pour garder des panneaux carrés.',views:['Rainage 10 et 20 cm','Accordéon plié']},{title:'Préparer les couvertures',body:'Découper deux cartons de 10,5 × 10,5 cm. Habiller avec du papier décoratif selon l’épaisseur choisie.',tip:'Tester la fermeture avant collage définitif.',views:['Deux couvertures','Habillage décoratif']},{title:'Assembler l’album',body:'Coller une couverture sur chaque face extérieure des volets d’extrémité puis mettre sous un poids léger.',tip:'Éviter la colle près des lignes de pliage.',views:['Collage dos couverture','Album assemblé']},{title:'Décorer et fermer',body:'Ajouter les photos, tampons et étiquettes. Fixer si souhaité un ruban extérieur de fermeture.',tip:'Ne pas surcharger les plis d’éléments épais.',views:['Pages décorées','Album replié et fermé']}],mistakes:['Un carton trop épais sur les plis gêne la fermeture.','Conserver les photographies originales séparément si l’album n’est pas conçu pour l’archivage.'],challenge:'Réaliser un album sur le thème d’une promenade.',sources:[{label:'Library of Congress : conservation des photos',url:'https://www.loc.gov/preservation/care/photo.html'}]},
    {id:'junk-journal',number:8,title:'Le jardin oublié',subtitle:'Première page de junk journal & mixed media',family:'mixed',level:'Découverte +',duration:'1 h 15',image:'journal',description:'Combiner collages, encres et motifs autour d’un souvenir imaginaire.',outcome:'Une double page A5 avec point focal, textures et écriture.',materials:['Carnet à papier résistant','Chutes de papiers et reproductions de lettres','Colle compatible avec le support','Encre brune, tampon botanique','Pochoir et gesso facultatifs','Étiquette et crayon'],preparation:'Choisir des copies pour les documents précieux. Protéger la table et faire un essai de collage.',steps:[{title:'Composer à blanc',body:'Choisir trois papiers et les disposer sans coller pour créer une diagonale et un point focal.',tip:'Garder une zone de respiration.',views:['Papiers disposés','Composition épurée']},{title:'Coller les couches',body:'Déchirer ou couper les fragments, puis les coller du fond vers l’avant.',tip:'Éviter les bulles en lissant du centre vers les bords.',views:['Collage en cours','Couches stabilisées']},{title:'Ajouter de la texture',body:'Si désiré, déposer un voile fin de gesso et quelques motifs au pochoir ; laisser sécher complètement.',tip:'Une épaisseur modérée protège la souplesse du carnet.',views:['Voile de gesso','Motif au pochoir']},{title:'Patiner et tamponner',body:'Vieillir quelques bordures avec une encre brune puis ajouter un motif botanique sur une zone sèche.',tip:'Laisser des contrastes suffisants pour la lecture du motif.',views:['Patine des bords','Motif tamponné']},{title:'Raconter une histoire',body:'Ajouter une étiquette datée, trois lignes de journal ou une courte citation personnelle.',tip:'Un détail manuscrit rend la page singulière.',views:['Détail de l’écriture','Double page terminée']}],mistakes:['Gesso humide : attendre avant d’encrer.','Trop d’éléments : masquer le point focal.'],challenge:'Créer une page sur un lieu réel ou imaginaire et expliquer pourquoi tu as choisi ses textures.',sources:[]}
  ],
  projects:[
    {"id":"tag-vintage","title":"Tag vintage aux encres Distress","category":"Tags","season":"automne","level":"Découverte","duration":"55 à 70 min","image":"tag-vintage-final.webp","coverPhoto":"tag-vintage-final.webp","tutorial":true,"description":"Un tag de 7 × 12 cm aux couleurs de l’automne, avec un fond patiné à la Distress Ink, des effets d’eau et une empreinte botanique précise.","courseIds":["tamponnage","encres","degrades"],"materials":["Papier cartonné ivoire ou manille 200 à 300 g/m² (au moins 7 × 12 cm)","Règle, crayon, massicot ou ciseaux, perforatrice Ø 5 mm","Encre Distress Ink Antique Linen ou Scattered Straw (fond clair)","Encre Distress Ink Vintage Photo ou Tea Dye (patine brune)","Encre Distress Ink Walnut Stain (bords, facultatif)","Outil applicateur mousse ou brosse à encrer","Mini-vaporisateur d’eau, essuie-tout et surface protégée","Tampon botanique et encre Archival noire ou sépia, résistant à l’eau une fois sec","Ficelle de lin, ruban ou œillet de décoration (facultatif)"],"preparation":"Commencer par protéger la table. Effectuer un test des encres sur une chute du même papier. On peut réaliser le projet avec une marque différente si les encres réagissent bien à l’eau.","pattern":"./assets/patron-tag-7x12cm.pdf","patternDescription":"Patron PDF A4 avec deux tags de 70 × 120 mm, coins coupés à 10 mm, trou Ø 5 mm placé à 10 mm du bord supérieur et trait de contrôle de 5 cm. Imprimer à taille réelle (100 %).","steps":[{"title":"Rassembler le matériel","duration":"5 min","body":"Préparer trois coussinets dans une gamme claire, ocre et brune, un applicateur, du papier ivoire, une perforatrice, une branche botanique et un peu de ficelle. Réserver une chute pour les essais.","tip":"Deux encres suffisent pour une première version : une teinte claire et un brun de patine.","mistake":"Commencer directement sur la pièce finale sans tester la réaction du papier à l’eau.","photo":"tag-photo-01.webp","caption":"Matériel disposé avant de commencer : trois encres, applicateur, bloc et papier."},{"title":"Tracer le patron 7 × 12 cm","duration":"5 min","body":"À l’aide du patron imprimé à 100 %, tracer un rectangle de 70 mm de large sur 120 mm de haut. Sur les deux coins supérieurs, marquer 10 mm depuis le haut et 10 mm depuis chaque côté pour obtenir deux biseaux symétriques.","tip":"Contrôler le trait de 5 cm sur le PDF avec une règle. Si ce trait est plus court, désactiver « Ajuster à la page ».","mistake":"Confondre 7 × 12 cm avec un format de 7 × 12 pouces ou imprimer le patron à échelle réduite.","photo":"tag-photo-02.webp","caption":"Tracer les biseaux des coins supérieurs avec une règle."},{"title":"Découper les coins","duration":"4 min","body":"Découper d’abord le rectangle, puis les deux segments obliques des coins supérieurs. Garder un bord propre : la patine des encres viendra ensuite assouplir visuellement la découpe.","tip":"Une paire de ciseaux à lames fines suffit ; pour une série, utiliser un massicot et un gabarit.","mistake":"Couper deux coins de tailles différentes : le ruban paraîtra décentré.","photo":"tag-photo-03.webp","caption":"Découpe précise de l’angle supérieur suivant les repères."},{"title":"Percer le trou","duration":"3 min","body":"Marquer un point à 35 mm du bord gauche et 10 mm sous le bord supérieur du tag. Perforer un trou de 5 mm de diamètre, centré sur ce repère. Poser éventuellement un œillet en fin de travail.","tip":"Perforer avant l’encrage évite de plier ou d’abîmer le fond fini.","mistake":"Percer trop près du bord : le tag risque de se déchirer quand on noue la ficelle.","photo":"tag-photo-04.webp","caption":"Perforation au centre de la bordure supérieure."},{"title":"Poser la teinte claire","duration":"8 min","body":"Charger très légèrement la mousse avec Antique Linen (ou une autre Distress claire). Commencer le geste circulaire sur un brouillon puis entrer progressivement sur le papier. Garder le centre plus lumineux que les bords.","tip":"Multiplier les passages très légers plutôt qu’une couche forte.","mistake":"Appuyer dès le premier contact avec une mousse saturée : des cercles foncés peuvent rester visibles.","photo":"tag-photo-05.webp","caption":"Application de la première couche claire au centre et près des bords."},{"title":"Patiner les bords","duration":"8 min","body":"Ajouter Vintage Photo ou Tea Dye en mouvements circulaires légers depuis l’extérieur vers l’intérieur du tag. Insister doucement aux angles et laisser quelques zones ivoire visibles. Avec Walnut Stain, accentuer seulement l’extrême bord si souhaité.","tip":"Un petit dégradé progressif est souvent plus convaincant qu’un contour brun uniforme et épais.","mistake":"Poser trop d’encre sombre partout : le tag perd sa lumière et les tampons sont moins lisibles.","photo":"tag-photo-06.webp","caption":"Patine brune progressive appliquée sur le périmètre."},{"title":"Créer des traces d’eau","duration":"8 min + séchage","body":"Sur les encres bien appliquées, laisser tomber quelques gouttelettes d’eau ou brumiser très légèrement. Patienter environ 5 à 10 secondes puis tamponner l’excès avec un essuie-tout. Laisser sécher complètement avant le tamponnage final.","tip":"Tester d’abord sur une chute : plus le papier est poreux, plus les gouttes diffusent.","mistake":"Tremper le tag ou le manipuler encore humide : le papier peut gondoler et le motif final baver.","photo":"tag-photo-07.webp","caption":"Effet de gouttelettes d’eau sur le fond encré, avant séchage."},{"title":"Tamponner le motif botanique","duration":"8 min","body":"Sur le tag sec, encrer un tampon botanique avec une Archival noire ou sépia. Imprimer verticalement sans mouvement latéral, en conservant le haut dégagé pour le trou. Ajouter éventuellement un petit motif d’écriture, de manière discrète.","tip":"Une encre Archival sèche résiste à l’eau, mais ici elle intervient à la toute fin, lorsque le fond est déjà bien sec.","mistake":"Tamponner tant que le fond est humide ou trop près du trou, ce qui brouille la composition.","photo":"tag-photo-08.webp","caption":"Impression nette du tampon botanique sur le tag sec."},{"title":"Fixer la ficelle et photographier","duration":"6 min","body":"Passer une ficelle de lin ou un ruban étroit dans le trou. Nouer sans forcer. Facultativement, ajouter un petit morceau de papier imprimé, une étiquette ou un œillet. Photographier le tag terminé, puis enregistrer ta version dans Mon carnet.","tip":"Une zone vide et un seul motif principal donnent souvent davantage de caractère qu’une accumulation d’embellissements.","mistake":"Ajouter trop d’éléments en relief avant que les encres ou la colle aient séché.","photo":"tag-photo-09.webp","caption":"Résultat final : tag patiné, motif botanique et ficelle de lin."}],"mistakes":["Un départ d’encrage trop appuyé laisse des marques de mousse : commencer sur un brouillon.","Une patine trop foncée étouffe les détails. Garder un centre plus clair.","La réaction à l’eau dépend du papier et de la quantité d’encre : tester avant.","Pour une empreinte nette, tamponner uniquement quand le fond est sec."],"variants":["Version douce : Antique Linen + Tea Dye, sans Walnut Stain.","Version sous-bois : Peeled Paint + Vintage Photo et tampon feuille.","Version hiver : Weathered Wood + Hickory Smoke, avec ruban bleu gris."],"sources":[{"label":"Ranger Ink : Distress Imagination Tag (fond et gouttelettes)","url":"https://rangerink.com/blogs/projects/distress-imagination-tag"},{"label":"Ranger Ink : Distress Ink et Oxide, questions fréquentes","url":"https://rangerink.com/pages/faqs"},{"label":"Ranger Ink : Distressed Tag Journal","url":"https://rangerink.com/blogs/projects/distressed-tag-journal-by-tim-holtz"}]},
    {id:'feuilles-du-temps',title:'Les feuilles du temps',category:'Mini-albums',season:'automne',level:'Découverte +',duration:'3 à 4 h',image:'hero-autumn',featured:true,description:'Un carnet botanique pour conserver les souvenirs de promenades et les couleurs de l’automne.',courseIds:['tamponnage','degrades','album-accordeon'],materials:['Papiers kraft et ivoire','Photographies','Encre brun et orange','Tampons feuilles','Ruban'],steps:['Préparer les pages et la reliure.','Créer trois fonds automnaux à l’encre.','Placer les photographies et les pochettes.','Ajouter les tampons, titres et rubans.']},
    {id:'carte-sauge',title:'Carte botanique sauge & or',category:'Carterie',season:'printemps',level:'Découverte +',duration:'1 h',image:'card',description:'Une carte florale élégante avec touches dorées.',courseIds:['carte-botanique','embossage'],materials:['Carton de carte','Tampons floraux','Encre verte','Poudre dorée'],steps:['Marquer le pli central.','Créer le fond encré.','Tamponner les motifs.','Embosser l’inscription et assembler.']},
    {id:'album-voyage',title:'Mon carnet de voyage',category:'Mini-albums',season:'ete',level:'Intermédiaire',duration:'2 à 3 h',image:'hero-summer',description:'Pochettes, tickets et petites photos composent un carnet nomade.',courseIds:['album-accordeon','junk-journal'],materials:['Papier bleu et kraft','Photographies et copies de tickets','Règle et plioir','Colle'],steps:['Choisir le format du carnet.','Assembler les pages et pochettes.','Positionner les photographies.','Décorer avec tampons et écritures.']},
    {id:'journal-jardin',title:'Le jardin oublié',category:'Junk journal',season:'printemps',level:'Découverte +',duration:'1 h 15',image:'journal',description:'Une double page composée de collages anciens et de textures botaniques.',courseIds:['junk-journal'],materials:['Carnet A5','Papiers anciens ou reproductions','Gesso','Tampons et encres'],steps:['Composer à blanc.','Coller les papiers.','Appliquer la texture.','Tamponner et écrire.']},
    {
  "id": "tags-hiver",
  "title": "Tags givrés",
  "category": "Tags",
  "season": "hiver",
  "level": "Découverte +",
  "duration": "1 h 20 + séchage",
  "image": "tags-givres-final.svg",
  "coverPhoto": "tags-givres-final.svg",
  "tutorial": true,
  "tutorialLabel": "TAGS D’HIVER · EFFETS GIVRÉS",
  "description": "Trois tags assortis de 7 × 12 cm aux bleus fumés, flocons embossés et neige en relief. Un atelier pour découvrir les effets d’eau, le tamponnage et les superpositions de saison.",
  "courseIds": [
    "degrades",
    "tamponnage",
    "embossage",
    "pochoirs"
  ],
  "materials": [
    "Trois feuilles ivoire ou blanches 200 à 300 g/m², de 7 × 12 cm minimum",
    "Règle, massicot ou ciseaux, perforatrice Ø 5 mm et patron de tag",
    "Encres Distress Ink ou Oxide : bleu clair, bleu gris et gris froid (ou couleurs équivalentes)",
    "Trois brosses ou mousses d’estompage propres, brouillon et papier absorbant",
    "Petite pipette ou vaporisateur pour les effets à l’eau",
    "Tampons sapin, branche ou feuillage et encre de contours appropriée",
    "Tampons flocons, encre lente d’embossage, poudre blanche à embosser et sachet antistatique",
    "Pistolet d’embossage spécial loisirs créatifs, surface résistante à la chaleur",
    "Pâte de texture blanche ou Grit-Paste Snowfall, pochoir optionnel et spatule",
    "Petits morceaux de papier clair pour étiquettes et trois rubans ou ficelles"
  ],
  "preparation": "Commencer avec trois feuilles de même grammage. Imprimer le patron PDF à 100 % et vérifier son trait de contrôle de 5 cm. Protéger la table contre l’eau, la chaleur et la pâte. Séparer l’étape d’embossage à chaud de l’étape de pâte de texture, puis laisser bien sécher entre les opérations.",
  "tipsIntro": "Pour éviter tout problème de matière : travailler sur le papier complètement sec avant l’embossage à chaud, puis appliquer la texture neigeuse une fois le tag refroidi. La pâte sèche à l’air selon les instructions du fabricant.",
  "pattern": "./assets/patron-tag-7x12cm.pdf",
  "patternDescription": "Patron PDF A4 à taille réelle : tag de 70 × 120 mm, biseaux de 10 mm, trou Ø 5 mm centré à 10 mm du bord supérieur. Réutiliser trois fois le même gabarit. Fiche de réalisation illustrée séparée.",
  "guide": "./assets/fiche-tags-givres.svg",
  "patternPreview": "tags-givres-02.svg",
  "visualNote": "Illustrations originales de montage, non photographies d’essais réels. Les gestes et dimensions écrites permettent de reproduire la création avec ton propre matériel.",
  "steps": [
    {
      "title": "Préparer la table et les couleurs",
      "duration": "8 min",
      "body": "Rassembler les trois papiers pour tags, un applicateur propre par couleur, des encres froides (bleu, gris et une teinte très claire), un tampon de sapin ou de branche, un pochoir à neige et des rubans. Protéger la table et réserver trois chutes du même papier pour tester l’eau, la poudre et la pâte.",
      "tip": "Choisir un bleu froid et un gris doux, puis conserver le troisième tag presque ivoire pour créer un ensemble harmonieux.",
      "mistake": "Mélanger des applicateurs déjà chargés d’encre brune ou orange donne des fonds ternes.",
      "caption": "Préparation de trois papiers, des encres froides et des outils.",
      "photo": "tags-givres-01.svg"
    },
    {
      "title": "Découper trois tags 7 × 12 cm",
      "duration": "10 min",
      "body": "Découper trois rectangles de 70 × 120 mm. Retirer sur les coins supérieurs deux triangles de 10 × 10 mm pour obtenir les biseaux. Marquer le trou à 35 mm du côté gauche et 10 mm sous le bord supérieur, puis perforer à Ø 5 mm. Vérifier le trait de 50 mm du patron PDF imprimé à 100 %.",
      "tip": "Perforer dès le départ : on évite de tordre ensuite un tag dont la pâte de texture est sèche et fragile.",
      "mistake": "Une perforation trop proche du bord peut se déchirer une fois la ficelle nouée.",
      "caption": "Trois tags identiques, biseaux et trous percés aux bonnes dimensions.",
      "photo": "tags-givres-02.svg"
    },
    {
      "title": "Créer les fonds glacés",
      "duration": "12 min",
      "body": "Sur le premier tag, estomper Distress Ink ou Oxide dans des tons comme Tumbled Glass et Stormy Sky ; sur le deuxième, essayer un gris bleuté ; sur le troisième, travailler très peu d’encre pour conserver l’ivoire. Partir du brouillon puis entrer sur le papier en mouvements légers.",
      "tip": "Garder le centre plus clair que les contours : les motifs blancs ressortent sans transformer le tag en bloc bleu.",
      "mistake": "Appliquer beaucoup de couleur d’un seul coup peut former une tache foncée et difficile à adoucir.",
      "caption": "Trois fonds froids dont la couleur devient légèrement plus soutenue vers les bords.",
      "photo": "tags-givres-03.svg"
    },
    {
      "title": "Faire apparaître les traces d’eau",
      "duration": "6 min + séchage",
      "body": "Déposer quelques fines gouttelettes d’eau sur les fonds réactifs. Attendre quelques secondes, puis éponger verticalement sans frotter. Laisser sécher complètement à plat avant d’utiliser les tampons ou les poudres.",
      "tip": "Trois ou quatre gouttelettes sur une petite zone suffisent. Le comportement change avec le grammage et la formulation de l’encre.",
      "mistake": "Ne pas enchaîner l’embossage à chaud sur un papier humide : l’humidité favorise l’adhésion indésirable de poudre et les déformations.",
      "caption": "Les fonds s’éclaircissent par petites touches après les gouttelettes d’eau.",
      "photo": "tags-givres-04.svg"
    },
    {
      "title": "Tamponner les sapins et les branches",
      "duration": "9 min",
      "body": "Une fois les trois tags entièrement secs, placer une silhouette de sapin sur le premier, un bouquet de branches sur le deuxième et un motif discret sur le troisième. Utiliser une encre de contours appropriée, comme Archival Ink après séchage, et garder libre la zone autour du trou.",
      "tip": "Pour une composition équilibrée, placer le motif principal dans le tiers inférieur ou central, et varier la taille sur chaque tag.",
      "mistake": "Tamponner sur une pâte de texture non sèche produit des empreintes incomplètes ou déformées.",
      "caption": "Silhouettes végétales sur les fonds d’hiver secs.",
      "photo": "tags-givres-05.svg"
    },
    {
      "title": "Embosser des flocons blancs",
      "duration": "10 min",
      "body": "Passer un sachet antistatique sur le tag parfaitement sec. Tamponner un flocon avec une encre lente spéciale embossage, verser une poudre blanche à embosser, retirer l’excédent et chauffer avec un pistolet d’embossage adapté jusqu’à fusion. Garder les mains éloignées du flux chaud et travailler sur un support résistant à la chaleur.",
      "tip": "Une poudre fine permet de conserver les détails d’un petit flocon. Arrêter de chauffer lorsque la poudre fond et devient régulière.",
      "mistake": "Un sèche-cheveux n’est pas un substitut au pistolet d’embossage ; il souffle la poudre avant sa fusion.",
      "caption": "Flocons blancs en relief déposés sur les tags par embossage à chaud.",
      "photo": "tags-givres-06.svg"
    },
    {
      "title": "Ajouter la neige en texture",
      "duration": "10 min + séchage",
      "body": "Sur les tags froids et entièrement refroidis, appliquer à la spatule une fine couche de pâte neigeuse ou de pâte de texture blanche au bord inférieur, puis soulever délicatement le pochoir si utilisé. Ranger permet notamment des textures de neige comme Grit-Paste Snowfall. Nettoyer immédiatement la spatule et le pochoir, puis laisser sécher à l’air selon le fabricant.",
      "tip": "Limiter la texture aux bords et à quelques petites zones pour préserver le motif tamponné et la souplesse du papier.",
      "mistake": "Ne pas utiliser le pistolet à embosser pour forcer le séchage d’une pâte, sauf indication expresse de son fabricant.",
      "caption": "Neige en relief créée sur les bordures basses et autour des flocons.",
      "photo": "tags-givres-07.svg"
    },
    {
      "title": "Placer les étiquettes et ornements",
      "duration": "8 min",
      "body": "Découper trois petits cartouches de 5 × 1,5 cm dans un papier clair ou argenté. Écrire un mot d’hiver différent sur chacun, puis fixer ces cartouches sur une zone calme. Ajouter éventuellement un petit rameau découpé ou une étoile légère en papier.",
      "tip": "Répéter une seule touche de couleur sur les trois tags, par exemple argent ou blanc, pour relier l’ensemble.",
      "mistake": "Trop d’ornements et de colle risquent d’écraser les motifs et de masquer les effets givrés.",
      "caption": "Les tags reçoivent une petite étiquette assortie et des finitions discrètes.",
      "photo": "tags-givres-08.svg"
    },
    {
      "title": "Nouer les rubans et documenter",
      "duration": "7 min",
      "body": "Passer une ficelle naturelle ou un ruban gris bleuté dans chaque trou. Nouer sans tirer sur le papier encore souple. Photographier les trois tags ensemble et ajouter ta réalisation à Mon carnet, avec le nom des encres et ton expérience de l’embossage et de la pâte.",
      "tip": "Conserver quelques chutes encrées avec les tags : elles serviront de nuancier pour de futures cartes d’hiver.",
      "mistake": "Éviter de refermer les tags dans une pochette tant que la pâte de texture n’est pas parfaitement sèche.",
      "caption": "Trois tags givrés terminés, avec rubans, sapins et neige en relief.",
      "photo": "tags-givres-09.svg"
    }
  ],
  "layerGuide": [
    "1. Trois formes de tag découpées et perforées, avant toute couleur.",
    "2. Encres d’hiver estompées puis révélées par l’eau, avec séchage complet.",
    "3. Tampons de sapins et de branches sur les fonds secs.",
    "4. Flocons embossés à chaud et refroidis sur une surface adaptée.",
    "5. Pâte neigeuse ou texture blanche appliquée ensuite, puis séchée à l’air.",
    "6. Étiquettes, petits ornements et rubans fixés à la fin."
  ],
  "mistakes": [
    "Travailler sur une base encore humide peut faire coller l’embossage hors des flocons.",
    "Une chaleur excessive risque de brûler le papier ou ternir la poudre ; utiliser uniquement l’outil prévu.",
    "La pâte de texture ne doit pas être chauffée comme une poudre à embosser sans indication du fabricant.",
    "Les trois tags doivent être secs avant de glisser dans une pochette ou d’être offerts."
  ],
  "variants": [
    "Nuit polaire : bleu marine, argent et sapins blancs.",
    "Hiver doux : ivoire, gris perle et flocons embossés à peine nacrés.",
    "Forêt enneigée : vert sapin, bleu ardoise et petites branches embossées."
  ],
  "sources": [
    {
      "label": "Ranger : comment réussir l’embossage à chaud",
      "url": "https://rangerink.com/blogs/videos/how-to-heat-emboss"
    },
    {
      "label": "Ranger : Grit-Paste Snowfall (pâte neige)",
      "url": "https://rangerink.com/products/tim-holtz-distress-grit-paste-snowfall"
    },
    {
      "label": "Ranger : produits Distress et encres",
      "url": "https://rangerink.com/collections/tim-holtz-distress"
    }
  ]
},
    {id:'page-photo',title:'Souvenirs en images',category:'Pages photo',season:'toutes',level:'Découverte +',duration:'1 h 30',image:'photo',description:'Une page avec photo principale, titre, légende et superpositions discrètes.',courseIds:['tamponnage','degrades'],materials:['Papier 30 × 30 cm','Photo imprimée','Deux papiers assortis','Étiquettes'],steps:['Choisir un point focal.','Matrer la photo.','Placer les papiers.','Ajouter une légende et deux embellissements.']},
    {id:'cadeaux-papier',title:'Pochettes de petits trésors',category:'Objets en papier',season:'toutes',level:'Découverte +',duration:'1 h',image:'gift',description:'De petites pochettes décoratives pour mots doux et souvenirs.',courseIds:['tamponnage','pochoirs'],materials:['Papier cartonné','Plioir','Tampons','Ruban ou ficelle'],steps:['Découper un gabarit.','Plier et coller.','Tamponner un motif.','Installer la fermeture.']},
  ],
  inspirations:[
    {title:'Botanique patinée',subtitle:'Encres, herbiers et étiquettes',image:'hero-autumn',filter:'Tags'},
    {title:'Histoires de voyage',subtitle:'Tickets, photos, cartes et pochettes',image:'hero-summer',filter:'Mini-albums'},
    {title:'Papiers coordonnés',subtitle:'Palettes, motifs et superpositions',image:'gift',filter:'Carterie'},
    {title:'Le charme du vintage',subtitle:'Collages et matières',image:'journal',filter:'Junk journal'}
  ]
};

// L'Atelier des Papiers • extension pédagogique V0.4.0
window.ATELIER_DATA.courses.push({
  "id": "distress-ink-oxide",
  "number": 9,
  "title": "Distress Ink ou Oxide ?",
  "subtitle": "Deux encres, deux tags : observer la vraie différence",
  "family": "encres",
  "level": "Découverte +",
  "duration": "1 h 10",
  "image": "duo-ink-oxide-cover.webp",
  "description": "Un atelier comparatif pour comprendre les rendus, la transparence, l’oxydation et la réaction à l’eau des encres de Tim Holtz. Tu réaliseras deux tags identiques avec neuf gestes photographiés.",
  "outcome": "Deux tags botaniques de 7 × 12 cm, réalisés avec le même papier et la même couleur pour comparer Distress Ink et Distress Oxide.",
  "materials": [
    "Deux tags en papier ivoire lisse 200 à 250 g/m², 7 × 12 cm chacun",
    "Une Distress Ink et une Distress Oxide de la même couleur, si possible",
    "Deux mousses ou brosses d’estompage distinctes",
    "Règle, ciseaux ou massicot, perforatrice de 5 mm",
    "Brumisateur ou pipette, eau propre et papier absorbant",
    "Tampon botanique, bloc et encre permanente adaptée au papier (Archival une fois sèche)",
    "Ficelle ou ruban, éventuellement deux œillets",
    "Patron PDF imprimé à 100 % et chutes pour essais"
  ],
  "preparation": "Prévoir une surface protégée, un papier de brouillon et une bonne lumière. Étiqueter les deux échantillons au dos. Si tu possèdes une seule des deux gammes, réalise l’expérience avec cette encre et consulte la comparaison pour préparer un futur essai.",
  "steps": [
    {
      "title": "Découper deux tags identiques",
      "time": "7 min",
      "body": "Découpe deux tags de 70 × 120 mm dans la même feuille de papier ivoire lisse (200 à 250 g/m²). Coupe les angles supérieurs sur 10 mm et perce un trou central de 5 mm, à 10 mm du bord supérieur. Utilise le patron imprimable à 100 % ; mesure le trait témoin de 50 mm.",
      "tip": "Conserver les deux morceaux provenant de la même feuille limite les variations de papier dans la comparaison.",
      "mistake": "Des papiers différents peuvent modifier la diffusion et fausser l’observation.",
      "views": [
        "Les deux tags vierges et le matériel"
      ],
      "photos": [
        "duo-ink-oxide-01.webp"
      ]
    },
    {
      "title": "Préparer un essai comparable",
      "time": "5 min",
      "body": "Au dos, inscris « Ink » sur le premier tag et « Oxide » sur le second. Choisis une teinte disponible dans les deux gammes, idéalement la même référence colorée. Prépare un applicateur distinct pour chaque encre, un brouillon et un petit récipient d’eau.",
      "tip": "Pour comparer honnêtement, ne change ni le papier, ni le geste, ni la couleur choisie. Si tu ne possèdes qu’une gamme, réalise simplement son essai.",
      "mistake": "Deux couleurs très différentes ne permettent pas de comparer leurs rendus de façon fiable.",
      "views": [
        "Identification des échantillons au dos"
      ],
      "photos": [
        "duo-ink-oxide-02.webp"
      ]
    },
    {
      "title": "Estomper la Distress Ink",
      "time": "8 min",
      "body": "Charge légèrement l’applicateur avec la Distress Ink, encre à colorants réactive à l’eau. Commence les mouvements circulaires sur le brouillon, puis entre doucement sur le premier tag. Construis le fond en couches fines, en laissant le centre plus clair.",
      "tip": "L’Ink laisse souvent transparaître davantage le support, ce qui crée une patine lumineuse. Essaie des bords un peu plus soutenus.",
      "mistake": "Commencer avec une mousse saturée directement au milieu peut laisser une tache ronde difficile à fondre.",
      "views": [
        "Pose de la Distress Ink en mouvements circulaires",
        "Vue rapprochée du dégradé clair"
      ],
      "photos": [
        "duo-ink-oxide-03.webp",
        "duo-ink-oxide-detail-03.webp"
      ]
    },
    {
      "title": "Estomper la Distress Oxide",
      "time": "8 min",
      "body": "Avec un applicateur propre, applique la Distress Oxide sur le second tag en répétant exactement le même geste. Sa formule associant colorants et pigments peut donner un rendu plus doux et crayeux. Ne cherche pas à reproduire une opacité artificielle en ajoutant beaucoup plus d’encre.",
      "tip": "Observe particulièrement le centre du tag : la différence de transparence apparaît souvent mieux sur une zone claire.",
      "mistake": "Un applicateur déjà chargé de Distress Ink contaminerait le résultat de l’Oxide.",
      "views": [
        "Application de Distress Oxide sur le second tag",
        "Macro du fond plus doux et opaque"
      ],
      "photos": [
        "duo-ink-oxide-04.webp",
        "duo-ink-oxide-detail-04.webp"
      ]
    },
    {
      "title": "Comparer après séchage",
      "time": "5 min",
      "body": "Laisse sécher les deux fonds quelques minutes, puis pose-les côte à côte sous la même lumière. Note lequel laisse davantage apparaître le papier, lequel paraît plus mat, et si les bords sont plus ou moins marqués.",
      "tip": "Photographie les tags ensemble, de préférence en lumière du jour indirecte, en gardant une petite carte blanche comme référence de couleur.",
      "mistake": "Comparer un fond encore humide avec un fond sec risque de donner de fausses impressions.",
      "views": [
        "Observation des deux rendus côte à côte"
      ],
      "photos": [
        "duo-ink-oxide-05.webp"
      ]
    },
    {
      "title": "Tester la réaction à l’eau",
      "time": "6 min",
      "body": "Sur une petite zone de chaque tag, fais tomber trois gouttelettes d’eau de taille comparable. Laisse agir quelques secondes sans frotter. Les deux encres sont réactives à l’eau, mais la présence de pigments dans l’Oxide peut produire un effet oxydé caractéristique.",
      "tip": "Ne mouille pas toute la feuille : quelques gouttes suffisent pour observer le résultat sans gondoler excessivement le papier.",
      "mistake": "Le comportement dépend aussi du papier, de la quantité d’encre et du temps de contact : il n’existe pas une réaction identique à chaque essai.",
      "views": [
        "Trois gouttelettes par tag",
        "Gros plan de la réaction de surface"
      ],
      "photos": [
        "duo-ink-oxide-06.webp",
        "duo-ink-oxide-detail-06.webp"
      ]
    },
    {
      "title": "Éponger et laisser sécher",
      "time": "8 min + séchage",
      "body": "Dépose doucement un papier absorbant sur les gouttes, sans tirer ni frotter. Retire-le verticalement. Compare les zones éclaircies et les auréoles obtenues, puis laisse les tags sécher complètement avant tout tamponnage.",
      "tip": "Sur un fond encore humide, on peut observer une migration de pigments ou de colorants ; attends le séchage pour juger la couleur finale.",
      "mistake": "Frotter l’essuie-tout provoque des traînées qui masquent le test de gouttelettes.",
      "views": [
        "Épongeage délicat des deux fonds"
      ],
      "photos": [
        "duo-ink-oxide-07.webp"
      ]
    },
    {
      "title": "Tamponner le même motif",
      "time": "8 min",
      "body": "Une fois les tags secs, imprime le même tampon botanique avec une encre permanente résistante à l’eau après séchage, par exemple Archival Ink. Utilise le même positionnement et la même pression sur les deux tags afin de conserver une comparaison utile.",
      "tip": "Teste d’abord l’encre de contour sur une chute et veille à ce que le support soit sec. Le motif noir apporte un point focal commun.",
      "mistake": "L’encre noire ordinaire réactive à l’eau peut baver si tu ajoutes ensuite des finitions humides.",
      "views": [
        "Motif botanique imprimé sur les deux fonds",
        "Détail du tampon et de l’empreinte"
      ],
      "photos": [
        "duo-ink-oxide-08.webp",
        "duo-ink-oxide-detail-08.webp"
      ]
    },
    {
      "title": "Terminer et conserver le duo",
      "time": "7 min",
      "body": "Passe une ficelle dans chaque trou ou ajoute un œillet si tu le souhaites. Inscris « Ink » et « Oxide » discrètement au dos, ainsi que la couleur, le papier et la date. Photographier les deux tags côte à côte terminera ce petit laboratoire personnel.",
      "tip": "Garde les essais dans un classeur ou enregistre une photo et tes observations dans « Mon carnet ». Recommence plus tard sur papier kraft pour une autre comparaison.",
      "mistake": "Ne tire pas de conclusion définitive à partir d’une seule teinte : les formulations et supports modifient le résultat.",
      "views": [
        "Les deux tags botaniques terminés",
        "Vue comparative des effets"
      ],
      "photos": [
        "duo-ink-oxide-09.webp",
        "duo-ink-oxide-cover.webp"
      ]
    }
  ],
  "mistakes": [
    "Comparer deux papiers ou deux couleurs différents rend les résultats difficiles à interpréter.",
    "Les deux gammes réagissent à l’eau : elles ne sont pas des encres permanentes pour contours aquarellés.",
    "Une Oxide n’est pas systématiquement plus claire : teinte, support et quantité appliquée comptent.",
    "Laisser sécher complètement avant de tamponner le motif final."
  ],
  "challenge": "Réalise le duo Ink/Oxide avec la même couleur, note trois observations, puis photographie les tags ensemble. Recommence sur papier kraft si tu as envie d’approfondir.",
  "sources": [
    {
      "label": "Ranger Ink : FAQ officielle Ink et Oxide",
      "url": "https://rangerink.com/pages/faqs"
    },
    {
      "label": "Ranger Ink : gamme Tim Holtz Distress",
      "url": "https://rangerink.com/collections/tim-holtz-distress"
    }
  ],
  "pattern": "./assets/atelier-encres-ink-oxide.pdf",
  "imageNote": "Photographies d’illustration générées pour la pédagogie, pas photographies d’un essai réel. Le résultat exact dépend du matériel utilisé.",
  "comparison": [
    {
      "feature": "Composition",
      "ink": "Encre à colorants (dye)",
      "oxide": "Encre hybride colorants + pigments"
    },
    {
      "feature": "Sur papier blanc",
      "ink": "Fond généralement plus translucide",
      "oxide": "Effet plus doux et crayeux"
    },
    {
      "feature": "Superposition",
      "ink": "Patine et transparence",
      "oxide": "Couverture plus marquée selon la teinte"
    },
    {
      "feature": "Réaction à l’eau",
      "ink": "Diffusion, éclaircissements",
      "oxide": "Effets oxydés et nuagés"
    },
    {
      "feature": "Pour essayer",
      "ink": "Vieux papiers et fonds patinés",
      "oxide": "Fonds doux et couches pigmentées"
    }
  ]
});
window.ATELIER_DATA.projects.unshift({
  "id": "duo-tags-encres",
  "title": "Duo de tags : Ink & Oxide",
  "category": "Tags",
  "season": "toutes",
  "level": "Découverte +",
  "duration": "1 h 10",
  "image": "duo-ink-oxide-cover.webp",
  "coverPhoto": "duo-ink-oxide-cover.webp",
  "tutorial": true,
  "mistakes": ["Comparer deux couleurs ou deux papiers différents fausse l’expérience.", "Des encres réactives à l’eau ne remplacent pas l’encre permanente destinée au contour.", "Ne pas tamponner avant le séchage complet des gouttelettes."],
  "variants": ["Refaire le duo sur papier kraft.", "Tester une seconde couleur, puis réunir les tags sur un anneau.", "Comparer un tampon foncé et un tampon sépia sur le même fond."],
  "description": "Deux tags jumeaux aux encres Distress : l’un patiné et translucide, l’autre doux et oxydé. Un projet pour jouer avec l’eau et les superpositions.",
  "courseIds": [
    "tamponnage",
    "encres",
    "degrades",
    "distress-ink-oxide"
  ],
  "materials": [
    "Deux tags en papier ivoire lisse 200 à 250 g/m², 7 × 12 cm chacun",
    "Une Distress Ink et une Distress Oxide de la même couleur, si possible",
    "Deux mousses ou brosses d’estompage distinctes",
    "Règle, ciseaux ou massicot, perforatrice de 5 mm",
    "Brumisateur ou pipette, eau propre et papier absorbant",
    "Tampon botanique, bloc et encre permanente adaptée au papier (Archival une fois sèche)",
    "Ficelle ou ruban, éventuellement deux œillets",
    "Patron PDF imprimé à 100 % et chutes pour essais"
  ],
  "preparation": "Prévoir une surface protégée, un papier de brouillon et une bonne lumière. Étiqueter les deux échantillons au dos. Si tu possèdes une seule des deux gammes, réalise l’expérience avec cette encre et consulte la comparaison pour préparer un futur essai.",
  "pattern": "./assets/atelier-encres-ink-oxide.pdf",
  "patternDescription": "PDF de deux pages : fiche comparant les encres et deux patrons vierges de 70 × 120 mm à taille réelle, avec trait témoin de 50 mm.",
  "steps": [
    {
      "title": "Découper deux tags identiques",
      "duration": "7 min",
      "body": "Découpe deux tags de 70 × 120 mm dans la même feuille de papier ivoire lisse (200 à 250 g/m²). Coupe les angles supérieurs sur 10 mm et perce un trou central de 5 mm, à 10 mm du bord supérieur. Utilise le patron imprimable à 100 % ; mesure le trait témoin de 50 mm.",
      "tip": "Conserver les deux morceaux provenant de la même feuille limite les variations de papier dans la comparaison.",
      "mistake": "Des papiers différents peuvent modifier la diffusion et fausser l’observation.",
      "photo": "duo-ink-oxide-01.webp",
      "caption": "Les deux tags vierges et le matériel"
    },
    {
      "title": "Préparer un essai comparable",
      "duration": "5 min",
      "body": "Au dos, inscris « Ink » sur le premier tag et « Oxide » sur le second. Choisis une teinte disponible dans les deux gammes, idéalement la même référence colorée. Prépare un applicateur distinct pour chaque encre, un brouillon et un petit récipient d’eau.",
      "tip": "Pour comparer honnêtement, ne change ni le papier, ni le geste, ni la couleur choisie. Si tu ne possèdes qu’une gamme, réalise simplement son essai.",
      "mistake": "Deux couleurs très différentes ne permettent pas de comparer leurs rendus de façon fiable.",
      "photo": "duo-ink-oxide-02.webp",
      "caption": "Identification des échantillons au dos"
    },
    {
      "title": "Estomper la Distress Ink",
      "duration": "8 min",
      "body": "Charge légèrement l’applicateur avec la Distress Ink, encre à colorants réactive à l’eau. Commence les mouvements circulaires sur le brouillon, puis entre doucement sur le premier tag. Construis le fond en couches fines, en laissant le centre plus clair.",
      "tip": "L’Ink laisse souvent transparaître davantage le support, ce qui crée une patine lumineuse. Essaie des bords un peu plus soutenus.",
      "mistake": "Commencer avec une mousse saturée directement au milieu peut laisser une tache ronde difficile à fondre.",
      "photo": "duo-ink-oxide-03.webp",
      "caption": "Pose de la Distress Ink en mouvements circulaires"
    },
    {
      "title": "Estomper la Distress Oxide",
      "duration": "8 min",
      "body": "Avec un applicateur propre, applique la Distress Oxide sur le second tag en répétant exactement le même geste. Sa formule associant colorants et pigments peut donner un rendu plus doux et crayeux. Ne cherche pas à reproduire une opacité artificielle en ajoutant beaucoup plus d’encre.",
      "tip": "Observe particulièrement le centre du tag : la différence de transparence apparaît souvent mieux sur une zone claire.",
      "mistake": "Un applicateur déjà chargé de Distress Ink contaminerait le résultat de l’Oxide.",
      "photo": "duo-ink-oxide-04.webp",
      "caption": "Application de Distress Oxide sur le second tag"
    },
    {
      "title": "Comparer après séchage",
      "duration": "5 min",
      "body": "Laisse sécher les deux fonds quelques minutes, puis pose-les côte à côte sous la même lumière. Note lequel laisse davantage apparaître le papier, lequel paraît plus mat, et si les bords sont plus ou moins marqués.",
      "tip": "Photographie les tags ensemble, de préférence en lumière du jour indirecte, en gardant une petite carte blanche comme référence de couleur.",
      "mistake": "Comparer un fond encore humide avec un fond sec risque de donner de fausses impressions.",
      "photo": "duo-ink-oxide-05.webp",
      "caption": "Observation des deux rendus côte à côte"
    },
    {
      "title": "Tester la réaction à l’eau",
      "duration": "6 min",
      "body": "Sur une petite zone de chaque tag, fais tomber trois gouttelettes d’eau de taille comparable. Laisse agir quelques secondes sans frotter. Les deux encres sont réactives à l’eau, mais la présence de pigments dans l’Oxide peut produire un effet oxydé caractéristique.",
      "tip": "Ne mouille pas toute la feuille : quelques gouttes suffisent pour observer le résultat sans gondoler excessivement le papier.",
      "mistake": "Le comportement dépend aussi du papier, de la quantité d’encre et du temps de contact : il n’existe pas une réaction identique à chaque essai.",
      "photo": "duo-ink-oxide-06.webp",
      "caption": "Trois gouttelettes par tag"
    },
    {
      "title": "Éponger et laisser sécher",
      "duration": "8 min + séchage",
      "body": "Dépose doucement un papier absorbant sur les gouttes, sans tirer ni frotter. Retire-le verticalement. Compare les zones éclaircies et les auréoles obtenues, puis laisse les tags sécher complètement avant tout tamponnage.",
      "tip": "Sur un fond encore humide, on peut observer une migration de pigments ou de colorants ; attends le séchage pour juger la couleur finale.",
      "mistake": "Frotter l’essuie-tout provoque des traînées qui masquent le test de gouttelettes.",
      "photo": "duo-ink-oxide-07.webp",
      "caption": "Épongeage délicat des deux fonds"
    },
    {
      "title": "Tamponner le même motif",
      "duration": "8 min",
      "body": "Une fois les tags secs, imprime le même tampon botanique avec une encre permanente résistante à l’eau après séchage, par exemple Archival Ink. Utilise le même positionnement et la même pression sur les deux tags afin de conserver une comparaison utile.",
      "tip": "Teste d’abord l’encre de contour sur une chute et veille à ce que le support soit sec. Le motif noir apporte un point focal commun.",
      "mistake": "L’encre noire ordinaire réactive à l’eau peut baver si tu ajoutes ensuite des finitions humides.",
      "photo": "duo-ink-oxide-08.webp",
      "caption": "Motif botanique imprimé sur les deux fonds"
    },
    {
      "title": "Terminer et conserver le duo",
      "duration": "7 min",
      "body": "Passe une ficelle dans chaque trou ou ajoute un œillet si tu le souhaites. Inscris « Ink » et « Oxide » discrètement au dos, ainsi que la couleur, le papier et la date. Photographier les deux tags côte à côte terminera ce petit laboratoire personnel.",
      "tip": "Garde les essais dans un classeur ou enregistre une photo et tes observations dans « Mon carnet ». Recommence plus tard sur papier kraft pour une autre comparaison.",
      "mistake": "Ne tire pas de conclusion définitive à partir d’une seule teinte : les formulations et supports modifient le résultat.",
      "photo": "duo-ink-oxide-09.webp",
      "caption": "Les deux tags botaniques terminés"
    }
  ],
  "sources": [
    {
      "label": "Ranger Ink : FAQ officielle Ink et Oxide",
      "url": "https://rangerink.com/pages/faqs"
    },
    {
      "label": "Ranger Ink : gamme Tim Holtz Distress",
      "url": "https://rangerink.com/collections/tim-holtz-distress"
    }
  ]
});
window.ATELIER_DATA.inspirations.unshift({"title":"Deux encres, deux ambiances","subtitle":"Comparer Distress Ink et Distress Oxide sur des tags","image":"duo-ink-oxide-cover.webp","filter":"Tags"});

// V0.6.0 • projets originaux de composition avec papiers coordonnés
window.ATELIER_DATA.projects.unshift({
  "id": "jardin-de-saison-guide",
  "title": "Jardin de saison : page photo",
  "category": "Pages photo",
  "season": "toutes",
  "level": "Découverte +",
  "duration": "1 h",
  "image": "jardin-page-finale.svg",
  "coverPhoto": "jardin-page-finale.svg",
  "tutorial": true,
  "tutorialLabel": "PAPIERS COORDONNÉS · PAGE PHOTO",
  "sketchId": "photo-vedette",
  "description": "Une page 30 × 30 cm aux papiers floraux, à la photo principale et aux détails patinés. Un pas-à-pas de neuf étapes pour apprendre à répartir les couches sans surcharger la composition.",
  "courseIds": [
    "tamponnage",
    "degrades",
    "carte-botanique"
  ],
  "materials": [
    "Papier de base uni crème 30 × 30 cm, assez épais",
    "Papier à motifs floraux : une bande de 26 × 5 cm",
    "Papier vert sauge : une bande de 3 × 24 cm",
    "Papier terracotta : une bande de 24 × 3 cm à déchirer",
    "Une photographie verticale 10 × 15 cm (copie recommandée pour un montage créatif)",
    "Coins photo adaptés à la conservation si la photographie est originale",
    "Étiquette pour le titre 9 × 2,7 cm",
    "Petit tag à journaling 5 × 8 cm",
    "Dentelle en papier, deux groupes de découpes botaniques, ruban et outils habituels"
  ],
  "preparation": "Préparer une table dégagée. Garder toutes les découpes mobiles avant de coller. Utiliser une copie des photographies patrimoniales ou des coins photo adaptés. Les schémas d’étapes présentent l’ordre de montage, pas un patron à taille réelle.",
  "pattern": "./assets/guide-page-jardin.svg",
  "patternDescription": "Fiche de dimensions et schéma de composition SVG imprimable. Un format 30 × 30 cm ne tient pas à taille réelle sur A4 : se fier aux mesures écrites.",
  "steps": [
    {
      "title": "Choisir les papiers",
      "duration": "6 min",
      "body": "Sur une base de scrapbooking 30 × 30 cm crème, associer un motif floral dominant, un papier vert sauge discret et une texture terracotta. Placer les papiers à blanc pour vérifier leur contraste avant de couper.",
      "tip": "Choisis un papier « vedette », un discret et un uni. Trois familles suffisent pour éviter une page confuse.",
      "mistake": "Multiplier les motifs aussi forts les uns que les autres rend la photo peu lisible.",
      "photo": "jardin-page-01.svg",
      "caption": "Schéma de montage de la page photo, étape 1 : Choisir les papiers"
    },
    {
      "title": "Découper la bande florale",
      "duration": "6 min",
      "body": "Couper une bande de papier floral de 26 × 5 cm. Vérifier le sens des fleurs, puis garder environ 2 cm de marge à gauche et à droite de la page.",
      "tip": "Conserver une chute du motif : elle pourra servir à découper une petite fleur pour rappeler la bande principale.",
      "mistake": "Découper trop vite un motif directionnel peut mettre les fleurs tête en bas.",
      "photo": "jardin-page-02.svg",
      "caption": "Schéma de montage de la page photo, étape 2 : Découper la bande florale"
    },
    {
      "title": "Ajouter la bande verticale",
      "duration": "5 min",
      "body": "Découper 3 × 24 cm dans le papier vert sauge et la positionner à environ 2 cm du bord droit, en recouvrant très légèrement la bande florale.",
      "tip": "Cette bande apporte un axe vertical et relie visuellement le haut et le bas.",
      "mistake": "Une bande trop large écraserait la photographie et déplacerait l’équilibre de la page.",
      "photo": "jardin-page-03.svg",
      "caption": "Schéma de montage de la page photo, étape 3 : Ajouter la bande verticale"
    },
    {
      "title": "Installer la photographie",
      "duration": "8 min",
      "body": "Préparer une photographie verticale de 10 × 15 cm. La placer à 4 cm du bord gauche et 9,5 cm du haut. Pour un tirage original, fixer avec des coins photo de conservation plutôt qu’en appliquant directement de la colle au dos.",
      "tip": "Avant le montage définitif, vérifier que les coins ne masquent aucun détail important de l’image.",
      "mistake": "Éviter les rubans adhésifs ordinaires sur les photographies destinées à être conservées.",
      "photo": "jardin-page-04.svg",
      "caption": "Schéma de montage de la page photo, étape 4 : Installer la photographie"
    },
    {
      "title": "Positionner le titre",
      "duration": "6 min",
      "body": "Préparer une étiquette titre de 9 × 2,7 cm. La poser à droite de la photographie, environ 17 cm depuis le bord gauche et 9 cm sous le bord supérieur. Utiliser un alphabet, un petit tampon texte ou une inscription à la main.",
      "tip": "Limiter le titre à quelques mots : c’est la photographie qui doit porter l’histoire.",
      "mistake": "Ne pas superposer une étiquette volumineuse sur le visage d’une personne ou une partie importante de la photo.",
      "photo": "jardin-page-05.svg",
      "caption": "Schéma de montage de la page photo, étape 5 : Positionner le titre"
    },
    {
      "title": "Composer la bande basse",
      "duration": "7 min",
      "body": "Déchirer une bande terracotta de 24 × 3 cm et la placer à environ 26 cm du haut de la page. Ajouter une fine bande de dentelle ou de papier ajouré au-dessus, sans couvrir la photographie.",
      "tip": "Les bords déchirés répondent au style floral et donnent une texture douce.",
      "mistake": "Mettre trop de couches en bas peut rendre la page difficile à glisser dans sa protection.",
      "photo": "jardin-page-06.svg",
      "caption": "Schéma de montage de la page photo, étape 6 : Composer la bande basse"
    },
    {
      "title": "Créer un tag de journaling",
      "duration": "7 min",
      "body": "Découper un petit tag de 5 × 8 cm et percer un trou pour une ficelle. Le placer à droite et en dessous de la photo, sans recouvrir la légende ou la bande florale. Écrire au dos une date, un lieu ou une anecdote.",
      "tip": "Le tag peut être amovible si tu le places dans une petite pochette, ce qui enrichit la page sans la surcharger.",
      "mistake": "Éviter de coller l’ensemble du tag si tu veux garder ses deux faces consultables.",
      "photo": "jardin-page-07.svg",
      "caption": "Schéma de montage de la page photo, étape 7 : Créer un tag de journaling"
    },
    {
      "title": "Ajouter deux groupes d’embellissements",
      "duration": "8 min",
      "body": "Placer un premier groupe de petites fleurs ou de feuillages près de l’étiquette titre, et un second groupe plus discret vers le bas. Ajouter éventuellement un papillon, puis vérifier que les éléments ne débordent pas sur les zones utiles.",
      "tip": "Une répétition de deux couleurs et de quelques formes donne plus d’unité qu’une multitude d’ornements différents.",
      "mistake": "Trop d’éléments en relief risquent d’abîmer les pages voisines.",
      "photo": "jardin-page-08.svg",
      "caption": "Schéma de montage de la page photo, étape 8 : Ajouter deux groupes d’embellissements"
    },
    {
      "title": "Assembler et documenter",
      "duration": "6 min",
      "body": "Coller les papiers en commençant par les grandes bandes, puis fixer les éléments fins. Ajouter date et lieu, prendre une photo de l’ensemble et noter dans ton carnet les papiers utilisés et ce que tu modifierais la prochaine fois.",
      "tip": "Garde une photo du montage avant collage : elle sera utile si tu veux recréer ce style.",
      "mistake": "N’utilise pas une colle humide à proximité d’une photographie fragile ; protège ou remplace les originaux.",
      "photo": "jardin-page-09.svg",
      "caption": "Schéma de montage de la page photo, étape 9 : Assembler et documenter"
    }
  ],
  "mistakes": [
    "Superposer de trop nombreux motifs d'égale importance et perdre le point focal.",
    "Coller les photographies originales avec une colle de bricolage non adaptée.",
    "Choisir des reliefs volumineux qui empêchent de ranger la page dans sa protection."
  ],
  "variants": [
    "Version Simple Stories : choisir un papier floral vedette, un uni et un motif ton sur ton de la même collection.",
    "Version automne vintage : vieux rose, brun patiné, petite étiquette numérotée et tampons d’écriture.",
    "Version carnet de voyage : remplacer le tag botanique par une pochette pour billet et date."
  ],
  "layerGuide": [
    "1. Base unie, pour laisser respirer la photographie.",
    "2. Motif floral principal et bande contrastante.",
    "3. Photographie (fixation réversible si elle est précieuse).",
    "4. Titre et journaling.",
    "5. Éléments fins et embellissements, posés en dernier."
  ],
  "sources": [
    {
      "label": "Simple Stories : collections de papiers coordonnées",
      "url": "https://www.simplestories.com/collections"
    },
    {
      "label": "Library of Congress : conservation des albums et photographies",
      "url": "https://www.loc.gov/preservation/care/albums.html"
    }
  ]
},
{
  "id": "carte-jardin-coordonnee",
  "title": "Une attention botanique",
  "category": "Carterie",
  "season": "toutes",
  "level": "Découverte",
  "duration": "40 min",
  "image": "carte-coordonnee-finale.svg",
  "coverPhoto": "carte-coordonnee-finale.svg",
  "tutorial": true,
  "tutorialLabel": "CARTERIE · PAPIERS COORDONNÉS",
  "sketchId": "carte-botanique",
  "description": "Une carte florale de 10,5 × 15 cm avec trois papiers assortis, un motif central et un message. Six étapes cotées pour apprendre les superpositions en douceur.",
  "courseIds": [
    "tamponnage",
    "carte-botanique"
  ],
  "materials": [
    "Papier cartonné de base 21 × 15 cm, à plier à 10,5 cm",
    "Papier uni vert sauge : 9,5 × 14 cm",
    "Papier floral : 8,5 × 5 cm",
    "Bande contrastante : 2 × 11 cm",
    "Motif botanique tamponné ou découpe originale",
    "Étiquette message : 6 × 1,5 cm",
    "Plioir, règle, massicot, colle adaptée et petite mousse adhésive facultative"
  ],
  "preparation": "Choisir trois papiers coordonnés mais visuellement distincts : un uni calme, un floral et un petit motif discret. Tester la composition à blanc avant le collage. Les images sont des schémas de montage, pas des photographies de gestes.",
  "pattern": "./assets/guide-carte-botanique.svg",
  "patternDescription": "Plan SVG imprimable indiquant toutes les mesures. Le dessin de composition n’est pas un patron de découpe à taille réelle.",
  "steps": [
    {
      "title": "Découper et plier la base",
      "duration": "5 min",
      "body": "Découper un papier cartonné de 21 × 15 cm. Marquer un pli vertical à 10,5 cm, puis replier soigneusement avec un plioir pour obtenir une carte fermée de 10,5 × 15 cm.",
      "tip": "Un carton de 220 à 300 g/m² offre une carte qui se tient bien sans devenir difficile à plier.",
      "mistake": "Un pli fait sans rainage peut fissurer un carton très épais.",
      "photo": "carte-coordonnee-01.svg",
      "caption": "Schéma coté de la carte, étape 1 : Découper et plier la base"
    },
    {
      "title": "Poser le panneau de couleur",
      "duration": "5 min",
      "body": "Découper un panneau vert sauge de 9,5 × 14 cm. Centrer à blanc sur la face avant de la carte : il restera une marge de 0,5 cm de chaque côté.",
      "tip": "Pour une composition soignée, mesure les marges avant de fixer la colle.",
      "mistake": "Coller le panneau sans vérifier le sens d’ouverture peut inverser la carte.",
      "photo": "carte-coordonnee-02.svg",
      "caption": "Schéma coté de la carte, étape 2 : Poser le panneau de couleur"
    },
    {
      "title": "Installer le papier floral",
      "duration": "6 min",
      "body": "Découper un morceau floral de 8,5 × 5 cm. Le placer dans le tiers supérieur du panneau sauge, sans chercher à recouvrir toute la surface. Tester l’emplacement du motif avant collage.",
      "tip": "Si les fleurs sont grandes, choisir une zone du motif qui laisse une partie plus calme pour le sujet central.",
      "mistake": "Le motif très dense peut concurrencer le message si toute la carte est imprimée.",
      "photo": "carte-coordonnee-03.svg",
      "caption": "Schéma coté de la carte, étape 3 : Installer le papier floral"
    },
    {
      "title": "Ajouter la bande contrastante",
      "duration": "5 min",
      "body": "Préparer une bande de 2 × 11 cm en papier à texture ou à motifs discrets. La placer verticalement près du bord droit du panneau, en chevauchant la partie fleurie.",
      "tip": "La bande contraste relie les deux zones et donne de la profondeur sans multiplier les couleurs.",
      "mistake": "Vérifier qu’elle ne déborde pas de la base ni ne cache le futur motif central.",
      "photo": "carte-coordonnee-04.svg",
      "caption": "Schéma coté de la carte, étape 4 : Ajouter la bande contrastante"
    },
    {
      "title": "Créer le point focal",
      "duration": "10 min",
      "body": "Tamponner une fleur botanique sur un petit papier clair, ou utiliser une découpe florale originale, puis la placer vers le centre. Pour obtenir un effet de superposition, glisser seulement un petit carré de mousse adhésive sous la découpe.",
      "tip": "Limiter le relief si la carte doit voyager dans une enveloppe. Sur un papier de collection, une découpe assortie remplace très bien le tampon.",
      "mistake": "Ne pas superposer plusieurs gros motifs : le regard doit trouver un point focal clair.",
      "photo": "carte-coordonnee-05.svg",
      "caption": "Schéma coté de la carte, étape 5 : Créer le point focal"
    },
    {
      "title": "Poser le message et terminer",
      "duration": "8 min",
      "body": "Découper une étiquette de 6 × 1,5 cm portant « Pour toi » ou un court message. La placer dans le tiers inférieur. Fixer tous les éléments, ajouter éventuellement trois petits points décoratifs, puis laisser sécher à plat.",
      "tip": "Une carte complète tient souvent sur trois papiers, une découpe et un message : les vides font partie de la composition.",
      "mistake": "Éviter d’ajouter un embellissement sous le pli ou sur la zone nécessaire à l’écriture.",
      "photo": "carte-coordonnee-06.svg",
      "caption": "Schéma coté de la carte, étape 6 : Poser le message et terminer"
    }
  ],
  "mistakes": [
    "Une bande décorative trop large masque le motif principal.",
    "Un panneau collé sans vérifier le pli peut inverser le sens d’ouverture.",
    "Une trop grande épaisseur d’embellissements peut empêcher la fermeture ou l’envoi postal."
  ],
  "variants": [
    "Version Simple Stories : remplacer le motif tamponné par une découpe florale assortie à la collection.",
    "Version Tim Holtz : patiner légèrement les bords et ajouter un petit chiffre tamponné.",
    "Version hiver : motifs givrés et touches argentées."
  ],
  "layerGuide": [
    "1. Base et pli, avant toute décoration.",
    "2. Panneau uni pour établir les marges.",
    "3. Papier floral et bande contrastante.",
    "4. Motif central avec relief discret.",
    "5. Étiquette et finitions."
  ],
  "sources": [
    {
      "label": "Simple Stories : collections de papiers coordonnées",
      "url": "https://www.simplestories.com/collections"
    }
  ]
});
window.ATELIER_DATA.inspirations.unshift({"title":"Jardin de saison","subtitle":"Page photo, papiers floraux et superpositions","image":"jardin-page-finale.svg","filter":"Pages photo"},{"title":"Carterie botanique","subtitle":"Trois papiers coordonnés pour une carte élégante","image":"carte-coordonnee-finale.svg","filter":"Carterie"});


/* Version 0.6.1 · Harmonisation du premier projet historique : tag vintage */
(()=>{
const p=window.ATELIER_DATA.projects.find(x=>x.id==='tag-vintage');
if(!p)return;
p.tutorialLabel="L'ART DES TAGS · DISTRESS INK";
p.visualNote="Photographies d'illustration générées et schémas originaux de mesure. Leurs rendus sont indicatifs ; suis les gestes et dimensions écrits pour ton propre matériel.";
p.guide="./assets/fiche-tag-vintage.svg";
p.patternPreview="tag-technique-02.svg";
p.preparation="Protéger la table, vérifier le patron imprimé à taille réelle grâce au trait de 5 cm et préparer une chute du même papier. Avant d'encrer le tag, tester sur cette chute les mouvements de mousse et les gouttelettes d'eau. Garder l'emplacement de l'œillet dégagé pendant la décoration.";
p.layerGuide=[
"1. Papier ivoire 7 × 12 cm : découpe des biseaux et perçage à sec.",
"2. Fond clair : Antique Linen ou Scattered Straw appliquée progressivement.",
"3. Patine des bords : Tea Dye ou Vintage Photo, éventuellement une pointe de Walnut Stain.",
"4. Effet de gouttes : eau, épongeage délicat, puis séchage intégral.",
"5. Motif botanique : encre de contour permanente et résistante à l'eau une fois sèche.",
"6. Éléments de finition : œillet, ficelle, petite étiquette, sans surcharger."
];
p.tipsIntro="Le fond est réalisé en Distress Ink, une encre à colorants réactive à l'eau. L'empreinte botanique utilise une encre Archival, permanente et résistante à l'eau après séchage.";
p.steps.forEach((st,i)=>{
 st.diagram="tag-technique-"+String(i+1).padStart(2,'0')+".svg";
 st.diagramCaption=[
  "Disposition du matériel et du tag avant le travail",
  "Dimensions exactes : 70 × 120 mm et biseaux de 10 mm",
  "Emplacement des deux découpes en biais",
  "Axe du trou Ø 5 mm, centré à 10 mm du haut",
  "Mouvements doux pour poser la couleur claire",
  "Patine plus soutenue sur les bords, centre lumineux",
  "Gouttelettes d’eau et zones éclaircies",
  "Tampon botanique net sur un fond totalement sec",
  "Position de l’œillet, de la ficelle et de l’étiquette"
 ][i];
});
})();


// V0.6.3 : photos d'illustration du projet Tags givrés
(()=>{
 const project=window.ATELIER_DATA.projects.find(p=>p.id==='tags-hiver');
 if(!project)return;
 project.image='tags-givres-photo-final.webp';
 project.coverPhoto='tags-givres-photo-final.webp';
 project.visualNote="Vues photoréalistes générées pour illustrer les étapes, non photographies d'essais réalisés. Les anciens schémas techniques restent accessibles séparément et les dimensions écrites font référence.";
 project.steps.forEach((step,index)=>{
   step.diagram=step.photo;
   step.diagramCaption="Schéma technique original de l'étape "+(index+1)+" : "+step.title;
   step.photo='tags-givres-photo-'+String(index+1).padStart(2,'0')+'.webp';
   step.caption="Vue photoréaliste d'illustration : "+step.title;
 });
})();


/* V0.6.4 • Projet photos pour Jardin de saison et Une attention botanique */
(()=>{
 const projects=window.ATELIER_DATA.projects;
 const configs=[
  {id:'jardin-de-saison-guide',prefix:'jardin',n:9,
   note:"Séquence d'illustrations photoréalistes générées pour expliquer le montage : ce ne sont pas des photographies prises pendant une réalisation réelle. Les mesures écrites et le sketch coté restent la référence.",
   caption:"Montage de la page photo 30 × 30 cm"},
  {id:'carte-jardin-coordonnee',prefix:'carte',n:6,
   note:"Séquence de vues photoréalistes composées numériquement à partir d'éléments de scrapbooking : ce ne sont pas des photos d'un atelier réalisé. Le plan coté fait foi pour les découpes et le pli.",
   caption:"Montage de la carte 10,5 × 15 cm"}
 ];
 for(const config of configs){
  const p=projects.find(x=>x.id===config.id);if(!p)continue;
  p.image=config.prefix+'-thumb.webp';
  p.coverPhoto=config.prefix+'-photo-final.webp';
  p.visualNote=config.note;
  p.steps.forEach((step,i)=>{
   const old=step.photo;
   if(old&&old.toLowerCase().endsWith('.svg')){step.diagram=old;step.diagramCaption='Schéma coté de l’étape '+(i+1)+' : '+step.title;}
   step.photo=config.prefix+'-photo-'+String(i+1).padStart(2,'0')+'.webp';
   step.caption=config.caption+', étape '+(i+1)+' : '+step.title;
  });
 }
 const inspirations=window.ATELIER_DATA.inspirations;
 for(const ins of inspirations){
  if(ins.title==='Jardin de saison')ins.image='jardin-thumb.webp';
  if(ins.title==='Carterie botanique')ins.image='carte-thumb.webp';
 }
})();


/* V0.6.5 • Harmonisation d'anciens projets, identifiants conservés */
(()=>{
 const projects=window.ATELIER_DATA.projects;
 const upgrades=[{"id":"feuilles-du-temps","prefix":"feuilles","duration":"3 à 4 h","level":"Découverte +","steps":[["Préparer le matériel","10 min","Choisir quatre feuilles de papier épais et deux feuilles de couverture. Préparer deux anneaux de reliure de 25 mm, une règle, un plioir, une perforatrice de 5 mm, du papier ivoire, kraft et floral, des photos de 6 × 8 cm, des copies de billets et des étiquettes.","Composer une palette de trois papiers : ivoire, kraft et une petite touche de rose automnal.","Éviter des papiers trop fins qui se déchireraient aux perforations."],["Découper les feuilles et percer la reliure","25 min","Découper quatre pages et deux couvertures de 12 × 16 cm. Avec le patron imprimé à 100 %, placer deux perforations de 5 mm à 1,5 cm du bord de reliure, à 3 cm et 13 cm du haut. Vérifier l'alignement des six feuilles avant de poser les anneaux.","Perforer les couvertures et les pages en les regroupant avec une pince de maintien, si leur épaisseur le permet.","Des trous décalés forcent les anneaux et abîment les pages."],["Habiller les pages de papiers coordonnés","20 min","Découper des bandes décoratives de 10 × 3 cm pour les parties supérieures des pages. Coller les bandes hors de la zone de perforation et laisser un bord de 5 à 8 mm visible autour.","Utiliser des papiers floraux à petit motif pour que la photographie reste le point focal.","Ne pas recouvrir les trous ni la zone où les anneaux doivent pivoter."],["Créer une légère patine automnale","20 min","Appliquer une fine Distress Ink brun clair sur les bords des pages avec une petite mousse. Faire un essai sur une chute, puis estomper de l'extérieur vers le centre. Laisser sécher complètement avant de coller.","Sur kraft, les encres peuvent paraître plus sombres que sur papier ivoire : travailler en couches minces.","Éviter d'humidifier les couvertures non protégées, elles peuvent gondoler."],["Installer les photographies","25 min","Préparer des copies des photographies, idéalement au format 6 × 8 cm. Disposer une photo dans la partie supérieure de chaque page et laisser un espace libre pour la légende. Si les tirages sont originaux, utiliser des coins photo de conservation adaptés.","Alterner photographies de paysages, détails de feuilles et petits souvenirs manuscrits.","Ne pas coller directement sur des tirages précieux avec une colle non prévue pour la conservation."],["Fabriquer les pochettes à souvenirs","25 min","Découper des pochettes de 8,5 × 5,5 cm. Appliquer l'adhésif seulement sur les deux côtés et le bord inférieur, sans fermer l'ouverture du haut. Coller une pochette au bas de deux pages, suffisamment loin des anneaux. Glisser des tags de 7 × 4 cm ou des copies de tickets.","Tester le passage du tag avant que la colle soit totalement prise, et ne placer aucun adhésif sur l'ouverture.","Coller les quatre côtés ferme la pochette et empêche d'y ranger les souvenirs."],["Tamponner les feuillages et écrire les légendes","20 min","Sur des zones propres, imprimer de petits motifs de feuilles à l'encre appropriée au papier. Ajouter des dates, des lieux et une phrase de souvenir, puis positionner deux ou trois embellissements sans couvrir les photographies.","Répéter un même tampon discret sur chaque page crée un fil conducteur visuel.","Des impressions trop grandes peuvent entrer en conflit avec les photos."],["Assembler, relier et photographier","15 min","Lorsque tout est sec, empiler les deux couvertures et les quatre pages, vérifier l'alignement des trous et installer les deux anneaux de 25 mm. Tester l'ouverture page par page. Photographier une double page terminée et noter les papiers utilisés dans Mon carnet.","Ne pas trop remplir les pochettes si le carnet doit rester facile à fermer. Conserver une copie des fichiers photo.","Refermer le carnet avant séchage complet peut transférer encre ou colle sur la page opposée."]],"title":"Les feuilles du temps","pattern":"./assets/patron-feuilles-du-temps.svg","patternDescription":"Patron A4 de pages et de pochettes. Page 12 × 16 cm et trous Ø 5 mm aux positions 15 mm du bord de reliure, 30 et 130 mm du haut. Imprimer à 100 % et vérifier le repère de 50 mm.","tutorialLabel":"MINI-ALBUM · AUTOMNE & SOUVENIRS","visualNote":"Séquence photoréaliste composée numériquement pour montrer le montage d'un carnet à anneaux : les visuels ne sont pas des photos d'un album réellement assemblé. Vérifier toutes les dimensions sur le patron.","preparation":"Un mini-album à deux anneaux : 4 pages et 2 couvertures de 12 × 16 cm, toutes perforées au même endroit. Préparer de préférence les reproductions des photos et les copies de billets avant le montage.","layerGuide":["1. Couvertures et pages découpées et perforées.","2. Bandes de papier floral collées hors de la zone de reliure.","3. Patine des bords, avec séchage.","4. Photographies et petites pochettes à souvenirs.","5. Tampons, étiquettes et légendes.","6. Deux anneaux et fermeture seulement lorsque les pages sont sèches."],"variants":["Album d'herbier : photographies de feuilles avec étiquettes de date et d'espèce.","Album de voyage : petits plans, tickets reproduits et photographies.","Album de lecture : citations manuscrites et pages imprimées en reproduction."],"mistakes":["Poinçonner des trous de reliure décalés","Coller la poche sur ses quatre côtés","Coller des photographies originales avec une colle de loisir créatif non adaptée"],"materials":["4 pages et 2 couvertures de papier épais, 12 × 16 cm","2 anneaux de reliure d'environ 25 mm","Papier kraft, ivoire et floral","Photographies 6 × 8 cm (copies de préférence)","Règle, massicot, plioir et perforatrice Ø 5 mm","Bandes décoratives 10 × 3 cm","Pochettes de 8,5 × 5,5 cm et tags 7 × 4 cm","Distress Ink brune, tampons feuilles, colle adaptée, adhésif"],"sources":[{"label":"Library of Congress : conservation des photographies et albums","url":"https://www.loc.gov/preservation/care/albums.html"}]},{"id":"carte-sauge","prefix":"sauge","duration":"45 à 60 min","level":"Découverte +","steps":[["Découper la base et marquer le pli","6 min","Découper une feuille de 21 × 15 cm en carton blanc de 220 à 300 g/m². Marquer le pli à 10,5 cm au plioir : la carte fermée mesure 10,5 × 15 cm. Vérifier l'ouverture avant toute décoration.","Rainurer plutôt que plier brutalement un carton épais évite de fissurer sa surface.","Le pli peut se trouver du mauvais côté si la face extérieure n'a pas été identifiée."],["Poser le panneau vert sauge","6 min","Découper un panneau de papier vert sauge de 9,5 × 14 cm. Le disposer à 5 mm des bords de la face avant avant de le fixer, avec une colle en couche fine ou un adhésif double-face adapté.","Une marge identique des quatre côtés donne une belle finition.","Un panneau humide ou trop chargé de colle peut gondoler."],["Choisir et installer le motif floral","7 min","Découper un papier floral de 8,1 × 5,2 cm et le placer dans le tiers supérieur. Préparer un motif botanique tamponné sur papier clair pour le centre de la composition.","La fleur principale doit être bien lisible sur le papier uni, même si l'arrière-plan est imprimé.","Éviter de multiplier les motifs concurrents avec celui du papier."],["Ajouter une bande de contraste","6 min","Découper une bande discrète de 1,5 × 10 cm dans un papier beige à petites écritures ou à pois. La placer verticalement près du bord droit, en conservant quelques millimètres de retrait. Tester les autres éléments à blanc.","Une bande étroite structure la carte sans masquer le motif floral.","Une bande qui dépasse du pli gêne l'ouverture et peut s'accrocher."],["Tamponner puis ajouter l'or","9 min","Sur un papier séparé, tamponner une branche ou une fleur avec une encre adaptée, puis la découper. Pour les touches dorées, utiliser une encre lente spéciale embossage, de la poudre dorée et un pistolet d'embossage sur un support résistant à la chaleur. Laisser refroidir avant de fixer la découpe sur la carte.","Un petit détail doré suffit : un bord d'étiquette ou quelques points mettent la fleur en valeur.","Ne pas chauffer la poudre directement sur une surface qui ne supporte pas la chaleur ; ne pas confondre pistolet d'embossage et sèche-cheveux."],["Coller le message et terminer","6 min","Découper une étiquette de 6 × 1,5 cm, écrire « Pour toi » ou un court message, puis la fixer sous le motif central. Ajouter deux ou trois petites touches d'or en respectant les espaces libres. Vérifier le pli et photographier la carte ouverte et fermée.","Pour envoyer la carte, limiter l'épaisseur des embellissements et tester l'enveloppe.","Un relief trop épais peut déchirer l'enveloppe pendant l'envoi."]],"title":"Carte botanique sauge & or","pattern":"./assets/plan-carte-sauge-or.svg","patternDescription":"Plan de composition imprimable : face avant 10,5 × 15 cm à l'échelle, base complète 21 × 15 cm à découper à part. Repère 50 mm.","tutorialLabel":"CARTERIE · SAUGE & EMBOSSAGE OR","visualNote":"Images photoréalistes composées à partir d'illustrations de scrapbooking. Elles montrent l'ordre d'assemblage et ne constituent pas des photographies d'un travail exécuté. Respecter les mesures écrites du plan.","preparation":"Choisir un uni sauge, un floral et un motif discret beige, ainsi qu'un tampon botanique. Préparer le matériel d'embossage à chaud sur un support résistant à la chaleur et tester la poudre sur une chute.","layerGuide":["1. Base blanche pliée à 10,5 cm.","2. Panneau sauge 9,5 × 14 cm.","3. Panneau floral 8,1 × 5,2 cm.","4. Bande contrastante 1,5 × 10 cm.","5. Motif botanique tamponné et découpé.","6. Petites touches dorées et étiquette 6 × 1,5 cm."],"variants":["Version pastel : sauge, rose clair et cuivre rosé.","Version automne : olive, kraft et or vieilli.","Version minimaliste : fond blanc avec une seule branche embossée."],"mistakes":["Confondre l'embossage à chaud avec le séchage d'une colle","Mélanger trop de papiers à motifs","Prévoir un relief trop épais pour l'envoi postal"],"materials":["Papier cartonné de base 21 × 15 cm, 220 à 300 g/m²","Panneau vert sauge 9,5 × 14 cm","Papier floral 8,1 × 5,2 cm","Papier de contraste 1,5 × 10 cm","Étiquette message 6 × 1,5 cm","Tampon de fleur ou branche botanique, bloc acrylique","Encre lente d'embossage et poudre dorée","Pistolet d'embossage spécial loisirs créatifs et support résistant à la chaleur","Plioir, règle, colle, ciseaux, chutes pour essais"],"sources":[{"label":"Ranger Ink : embossage à chaud","url":"https://rangerink.com/blogs/videos/how-to-heat-emboss"}]}];
 for(const u of upgrades){
  const p=projects.find(x=>x.id===u.id);if(!p)continue;
  Object.assign(p,{image:u.prefix+'-thumb.webp',coverPhoto:u.prefix+'-photo-final.webp',
     tutorial:true,tutorialLabel:u.tutorialLabel,level:u.level,duration:u.duration,
     pattern:u.pattern,patternDescription:u.patternDescription,visualNote:u.visualNote,
     preparation:u.preparation,layerGuide:u.layerGuide,variants:u.variants,
     mistakes:u.mistakes,materials:u.materials,sources:u.sources});
  p.steps=u.steps.map((raw,i)=>({
    title:raw[0],duration:raw[1],body:raw[2],tip:raw[3],mistake:raw[4],
    photo:u.prefix+'-photo-'+String(i+1).padStart(2,'0')+'.webp',
    caption:u.title+', étape '+(i+1)+' : '+raw[0],
    ...(i===1?{diagram:u.pattern.split('/').pop(),diagramCaption:'Plan de construction et repères de coupe'}:{})
  }));
 }
})();

/* V0.6.6 : carnet de voyage et junk journal, identifiants préservés. */
(()=>{
 const upgrades=[
  {
    "id": "album-voyage",
    "prefix": "voyage",
    "tutorialLabel": "MINI-ALBUM · ACCORDÉON DE VOYAGE",
    "description": "Un petit accordéon kraft et bleu de quatre volets, avec photographies, légendes et pochette à tickets. Un carnet nomade à ouvrir comme un paysage.",
    "level": "Découverte +",
    "duration": "2 à 3 h + séchage",
    "pattern": "./assets/patron-carnet-voyage.pdf",
    "patternPreview": "plan-carnet-voyage.svg",
    "patternDescription": "Patron PDF A4 paysage à 100 % : bande A 21 × 15 cm, bande B 20 × 15 cm, deux couvertures 10,5 × 15,5 cm et poche avec languettes. Quatre pages, une pièce ou un groupe par page ; contrôler le repère de 5 cm, sans ajuster à la page.",
    "guide": "./assets/fiche-carnet-voyage.pdf",
    "preparation": "Préparer deux bandes kraft : A de 21 × 15 cm et B de 20 × 15 cm. Elles formeront quatre volets de 10 × 15 cm. Choisir deux papiers coordonnés, un uni bleu et un motif carte discret. Travailler avec des copies de tickets et des tirages de travail. Le carnet est prévu pour des éléments plats, sans mousse 3D.",
    "tipsIntro": "Faire d'abord tout l'accordéon sur un brouillon : les plis doivent alterner et les quatre volets se superposer sans forcer. Les images générées montrent les gestes ; utiliser le patron pour les cotes et la construction exacte.",
    "materials": [
      "Papier kraft de 180 à 220 g/m² : une bande de 21 × 15 cm et une de 20 × 15 cm",
      "Deux couvertures en carton bleu épais de 10,5 × 15,5 cm, environ 250 à 300 g/m²",
      "Quatre papiers de fond carte ou imprimé discret, 9 × 14 cm",
      "Une pièce kraft de 10 × 6 cm pour la poche, avec trois languettes de 1 cm",
      "Trois petites photos de 6 × 8 cm et une de 6 × 4 cm pour le volet à pochette",
      "Deux ou trois étiquettes ivoire, environ 6 × 1,5 cm ; copies de tickets de moins de 7 cm de large",
      "Ruban plat de 50 à 60 cm, largeur 5 à 10 mm",
      "Règle, crayon, massicot ou ciseaux, plioir, colle pour papier en couche fine",
      "Coins photo sans acide ni lignine pour des photographies à préserver, stylo fin et chutes d'essai"
    ],
    "layerGuide": [
      "Bandes kraft rainurées, raccordées puis pliées en accordéon.",
      "Ruban fixé sur l'intérieur de la couverture arrière ; dos des volets extrêmes collés sur les couvertures.",
      "Fonds imprimés de 9 × 14 cm, sans couvrir les plis.",
      "Pochette collée par ses trois languettes, ouverture supérieure libre.",
      "Photos, petits tickets, étiquettes et écriture.",
      "Séchage complet et fermeture par un nœud souple."
    ],
    "mistakes": [
      "Oublier la languette de 1 cm de la bande A ou la compter comme un cinquième volet.",
      "Coller un papier décoratif ou une photographie à cheval sur un pli.",
      "Fermer le haut de la pochette avec de la colle.",
      "Remplir le carnet d'éléments épais : cet accordéon n'a pas de dos compensant le relief."
    ],
    "variants": [
      "Escapade en bord de mer : bleu grisé, kraft et photos de détails marins.",
      "Souvenirs de randonnée : vert sauge, cartes reproduites et une phrase par étape.",
      "Carnet de musée : détails d'œuvres photographiées lorsque c'est autorisé, billets reproduits et notes de visite."
    ],
    "sources": [
      {
        "label": "Library of Congress : matériaux et conservation des albums",
        "url": "https://www.loc.gov/preservation/care/albums.html"
      }
    ],
    "steps": [
      {
        "title": "Choisir les souvenirs et les papiers",
        "duration": "10 min",
        "body": "Retenir trois photos de 6 × 8 cm et une petite de 6 × 4 cm pour le volet à pochette. Associer kraft, bleu uni et carte imprimée. Préparer les bandes, couvertures, ruban et petites étiquettes avant de commencer. Les formats photo peuvent être adaptés, à condition de rester à l'intérieur de chaque volet.",
        "tip": "Pour des souvenirs irremplaçables, travailler avec des reproductions ; pour des tirages à préserver, privilégier les coins photo adaptés.",
        "mistake": "Commencer le collage sans vérifier la taille des photos et des tickets.",
        "caption": "Matériel et palette kraft, bleu et carte imprimée, avant le montage.",
        "photo": "voyage-photo-01.webp"
      },
      {
        "title": "Découper et rainurer les deux bandes",
        "duration": "15 min",
        "body": "Sur la bande A de 21 × 15 cm, marquer deux plis à 10 et 20 cm du bord gauche : il reste une languette de 1 cm à droite. Sur la bande B de 20 × 15 cm, marquer un pli à 10 cm. Rainurer doucement au plioir contre la règle, sans couper les fibres. Vérifier les mesures sur le patron imprimé à 100 %.",
        "tip": "Tracer les repères au crayon sur le dos et les effacer après la rainure.",
        "mistake": "Rainurer à 10 cm depuis chaque bord de A : le deuxième pli serait mal placé.",
        "caption": "Deux bandes kraft rainurées : deux volets et une languette pour A, deux volets pour B.",
        "diagram": "plan-carnet-voyage.svg",
        "diagramCaption": "Plan coté : bandes, languette et raccord central",
        "photo": "voyage-photo-02.webp"
      },
      {
        "title": "Raccorder et former l'accordéon",
        "duration": "15 min + séchage",
        "body": "Poser les bandes côté intérieur vers soi. Glisser la languette de A sous le premier centimètre du bord gauche de B, en alignant les bords hauts et bas ; la face avant des quatre volets reste continue. Coller seulement la languette. Après séchage, alterner les plis : vallée à 10 cm, montagne au raccord à 20 cm, vallée à 30 cm. La bande assemblée mesure 40 × 15 cm.",
        "tip": "Une vallée forme un V vu de face ; une montagne forme une arête. Tester la fermeture avant de décorer.",
        "mistake": "Coller deux volets entiers l'un sur l'autre : on perdrait une page.",
        "caption": "Raccord des deux bandes kraft et alternance des plis de l'accordéon.",
        "photo": "voyage-photo-03.webp"
      },
      {
        "title": "Fixer le ruban et les couvertures",
        "duration": "15 min + séchage",
        "body": "Découper deux couvertures bleues de 10,5 × 15,5 cm. Fixer le milieu du ruban horizontalement sur la face intérieure de la couverture arrière, à mi-hauteur, en laissant sortir ses deux extrémités. Coller le dos du dernier volet par-dessus. Coller la première couverture au dos du premier volet, avec une marge de 2,5 mm tout autour. Tester le déploiement.",
        "tip": "Le ruban est pris entre le kraft et la couverture arrière ; il entoure ensuite le carnet fermé.",
        "mistake": "Coller le ruban entre deux volets mobiles ou trop serrer le nœud.",
        "caption": "Le ruban est fixé avant de coller le volet arrière sur sa couverture.",
        "photo": "voyage-photo-04.webp"
      },
      {
        "title": "Habiller les quatre volets",
        "duration": "15 min",
        "body": "Découper quatre fonds imprimés de 9 × 14 cm. En poser un au centre de chaque volet, à 5 mm des bords, puis coller en couche fine. Choisir des motifs discrets pour conserver la lisibilité des photographies. Laisser le papier bien à plat pendant la prise de la colle.",
        "tip": "Répéter le même imprimé sur deux volets éloignés suffit à créer une continuité.",
        "mistake": "Recouvrir un pli avec une bande décorative : elle se déchirera à l'ouverture.",
        "caption": "Les quatre fonds imprimés sont centrés, avec une bordure kraft et des plis dégagés.",
        "photo": "voyage-photo-05.webp"
      },
      {
        "title": "Fabriquer la pochette à tickets",
        "duration": "15 min",
        "body": "Découper la pièce kraft de 10 × 6 cm. Rainurer à 1 cm du bord gauche, du bord droit et du bas. Retirer les deux petits carrés inférieurs de 1 × 1 cm, puis replier les trois languettes au dos. On obtient une face de 8 × 5 cm. Coller les seules languettes au bas du deuxième volet, à 1 cm du bord inférieur. Le haut reste ouvert.",
        "tip": "Tester le passage d'un ticket de moins de 7 cm de large avant que la colle ne soit prise.",
        "mistake": "Encoller toute la face arrière de la poche ou fermer son ouverture supérieure.",
        "caption": "Trois languettes maintiennent la pochette ; le bord supérieur reste ouvert.",
        "diagram": "plan-poche-voyage.svg",
        "diagramCaption": "Gabarit de poche : découpe 10 × 6 cm, face 8 × 5 cm",
        "photo": "voyage-photo-06.webp"
      },
      {
        "title": "Installer les photos et les légendes",
        "duration": "20 min",
        "body": "Placer les grandes photos sur les volets 1, 3 et 4. Sur le volet 2, installer la petite photo dans la partie haute et garder la poche accessible en bas. Fixer les tirages à préserver avec des coins photo adaptés. Ajouter de petites étiquettes avec un lieu, une date et une phrase. Glisser seulement des copies de tickets dans la poche.",
        "tip": "Composer d'abord à blanc ; une seule photo par volet et une légende courte rendent le carnet facile à lire.",
        "mistake": "Un coin de photo ou une étiquette ne doit ni déborder sur un pli ni bloquer la poche.",
        "caption": "Photographies, coins photo et étiquettes posés sur les fonds, pochette accessible.",
        "photo": "voyage-photo-07.webp"
      },
      {
        "title": "Contrôler la fermeture et garder une trace",
        "duration": "10 min + séchage",
        "body": "Attendre le séchage complet, retirer les tickets pour le premier essai et replier les quatre volets sans forcer. Replacer ensuite un ou deux petits souvenirs plats. Fermer avec un nœud souple. Photographier le carnet ouvert et fermé, puis ajouter ta réalisation à Mon carnet avec les papiers choisis et les dimensions utilisées.",
        "tip": "Si le carnet ferme mal, réduire le contenu de la poche et l'épaisseur des décorations.",
        "mistake": "Forcer sur les plis pour compenser une surépaisseur ou fermer avant séchage.",
        "photo": "voyage-photo-final.webp",
        "caption": "Accordéon terminé : quatre volets, couvertures bleues et ruban de lin."
      }
    ],
    "image": "voyage-thumb.webp",
    "coverPhoto": "voyage-photo-final.webp",
    "tutorial": true,
    "visualNote": "Images générées au rendu photographique pour illustrer les gestes, et non photos d'une réalisation effectuée. Les détails peuvent varier d'une vue à l'autre : suivre les mesures et les repères du plan."
  },
  {
    "id": "journal-jardin",
    "prefix": "journal",
    "tutorialLabel": "JUNK JOURNAL · COLLAGES BOTANIQUES",
    "description": "Une double page A5 aux papiers patinés, feuillages et voile de gesso. Deux groupes de collages se répondent en laissant respirer le carnet.",
    "level": "Découverte +",
    "duration": "1 h 15 à 1 h 45 + séchages",
    "pattern": "./assets/plan-jardin-oublie.pdf",
    "patternPreview": "plan-jardin-oublie.svg",
    "patternDescription": "Plan de composition d'une double page A5 : positions indicatives des deux groupes, pli central dégagé, ordre des couches et tailles conseillées des fragments. Ce plan est réduit, ce n'est pas un gabarit à taille réelle.",
    "guide": "./assets/fiche-jardin-oublie.pdf",
    "preparation": "Choisir un carnet A5 dont les pages conviennent aux techniques humides, idéalement un papier mixed media d'environ 200 g/m² ou plus. Protéger les pages suivantes par une feuille de récupération. Utiliser des reproductions de textes et de cartes plutôt que des documents anciens précieux. Tester la colle, l'encre et le gesso sur une chute du même papier.",
    "tipsIntro": "Le gesso blanc est semi-opaque : un voile très fin adoucit les contrastes, une couche épaisse cache les imprimés. Laisser sécher selon le produit et les conditions de l'atelier. Ne pas refermer le carnet tant qu'une surface est humide ou collante.",
    "materials": [
      "Carnet A5 adapté au mixed media, environ 200 g/m² ou plus ; double page ouverte d'environ 29,6 × 21 cm",
      "Six à huit fragments de textes et cartes reproduits, environ 4 × 6 à 7 × 10 cm",
      "Quelques chutes ivoire, kraft clair et rose poudré",
      "Une découpe botanique plate de 8 à 12 cm et un petit papillon de papier",
      "Deux petites étiquettes ivoire, environ 5 × 2 cm",
      "Gesso blanc acrylique, petit pinceau plat ou carte plastique usagée",
      "Colle pour papier et chiffon ; feuilles de protection",
      "Tampon branche ou fougère, bloc acrylique, encre compatible avec papier et surface acrylique sèche",
      "Ciseaux fins, stylo fin et chutes d'essai"
    ],
    "layerGuide": [
      "Fragments de texte et de carte, placés à blanc en deux groupes.",
      "Collage des fonds, du fragment le plus grand au plus petit.",
      "Voile très fin de gesso sur certains raccords, puis séchage complet.",
      "Empreintes botaniques sur les zones sèches et suffisamment lisses.",
      "Découpes de fougère et de papillon, puis étiquettes.",
      "Quelques mots manuscrits et photographie de la double page."
    ],
    "mistakes": [
      "Remplir toute la double page : les deux groupes perdent leur lisibilité.",
      "Coller un élément rigide à cheval sur le pli central.",
      "Poser une couche épaisse de gesso qui masque les textes et ralentit le séchage.",
      "Tamponner sur une texture trop irrégulière ou avant le séchage de l'acrylique."
    ],
    "variants": [
      "Herbier de promenade : remplacer le papillon par la copie d'une petite étiquette de plante.",
      "Jardin d'hiver : bleu grisé et branches fines sur des papiers ivoire.",
      "Version sans gesso : choisir dès le départ des reproductions très pâles et poursuivre directement le tamponnage."
    ],
    "sources": [
      {
        "label": "GOLDEN : gesso, couches fines et temps de séchage",
        "url": "https://goldenartistcolors.com/products/gesso"
      },
      {
        "label": "Library of Congress : conserver les documents et albums",
        "url": "https://www.loc.gov/preservation/care/albums.html"
      }
    ],
    "steps": [
      {
        "title": "Préparer la double page et les matières",
        "duration": "10 min",
        "body": "Ouvrir le carnet sur une double page A5 et protéger les feuilles voisines. Préparer six à huit fragments imprimés, deux étiquettes, une fougère et un petit papillon découpés. Garder une palette ivoire, brun et sauge avec une très petite touche rose. Tester les produits sur une chute.",
        "tip": "Un papier mixed media épais supporte mieux les couches humides qu'une feuille de carnet ordinaire.",
        "mistake": "Appliquer directement des produits humides sur une page très fine ou sur un document original.",
        "caption": "Carnet, reproductions, découpes botaniques, colle, gesso et tampons préparés.",
        "photo": "journal-photo-01.webp"
      },
      {
        "title": "Composer les deux groupes à blanc",
        "duration": "10 min",
        "body": "Déchirer les fragments à la main pour obtenir des bords souples. Former un groupe en bas à gauche et un plus petit en haut à droite. Superposer texte, carte et papier uni, sans remplir le centre. Garder environ 1 cm libre de chaque côté du pli. Photographier cette disposition avant de déplacer les pièces.",
        "tip": "Les tailles indiquées sont des repères : adapter les fragments à ton carnet et conserver des zones vides.",
        "mistake": "Faire deux groupes strictement identiques ou recouvrir tout le fond.",
        "caption": "Composition à blanc en diagonale, avec le pli central dégagé.",
        "diagram": "plan-jardin-oublie.svg",
        "diagramCaption": "Plan réduit : disposition des deux groupes et zones à préserver",
        "photo": "journal-photo-02.webp"
      },
      {
        "title": "Coller du fond vers le premier plan",
        "duration": "15 min + séchage",
        "body": "Reprendre la photo de repérage. Coller d'abord les grands fragments, puis les plus petits, avec une couche fine de colle jusqu'aux bords. Lisser doucement du centre vers l'extérieur. Garder les découpes botaniques et les étiquettes de côté. Laisser sécher avant d'ajouter un produit acrylique.",
        "tip": "Tester les reproductions imprimées : certaines encres peuvent migrer au contact de colle ou de gesso humide.",
        "mistake": "Déposer beaucoup de colle au centre et laisser les bords se relever.",
        "caption": "Collage des papiers de fond, sans encore fixer les motifs principaux.",
        "photo": "journal-photo-03.webp"
      },
      {
        "title": "Adoucir les raccords avec le gesso",
        "duration": "10 min + séchage complet",
        "body": "Prélever très peu de gesso blanc avec un pinceau plat et l'essuyer presque entièrement sur une chute. Balayer quelques raccords entre papier et page pour obtenir un voile fin, sans recouvrir tous les imprimés. Nettoyer le pinceau rapidement. Laisser sécher à l'air selon la notice ; la durée dépend de l'épaisseur, de la température et de l'humidité.",
        "tip": "S'arrêter quand le texte reste visible. Tester sur une chute sèche avant d'appliquer l'encre sur l'acrylique.",
        "mistake": "Utiliser le gesso comme une pâte épaisse ou tamponner alors qu'il est encore humide.",
        "caption": "Un voile fin de gesso atténue les raccords tout en laissant lire les papiers.",
        "photo": "journal-photo-04.webp"
      },
      {
        "title": "Tamponner les feuillages",
        "duration": "10 min",
        "body": "Sur la surface complètement sèche, choisir deux ou trois zones lisses près des collages. Encrer une branche ou une fougère, essayer sur une chute et tamponner verticalement, sans balancer le bloc. Utiliser une encre adaptée à la surface : le papier nu et le gesso n'absorbent pas de la même façon. Laisser sécher l'empreinte avant manipulation.",
        "tip": "Si la surface est trop bosselée, tamponner sur un papier séparé, découper le motif puis le coller.",
        "mistake": "Appuyer plus fort pour compenser les creux : cela peut déformer ou doubler l'empreinte.",
        "caption": "Empreintes botaniques sur les parties sèches et lisses autour des collages.",
        "photo": "journal-photo-05.webp"
      },
      {
        "title": "Poser les motifs et les étiquettes",
        "duration": "15 min",
        "body": "Placer la fougère de papier dans le groupe de gauche et le petit papillon dans celui de droite. Les faire chevaucher légèrement les papiers de fond pour relier les couches. Ajouter deux petites étiquettes, environ 5 × 2 cm, et une touche rose discrète. Vérifier la composition puis coller à plat, sans mousse 3D.",
        "tip": "Laisser dépasser un peu de chaque couche pour que l'on comprenne la superposition.",
        "mistake": "Masquer tous les tampons sous les découpes ou ajouter du relief près de la reliure.",
        "caption": "Fougère, papillon et étiquettes relient les couches sans encombrer le centre.",
        "photo": "journal-photo-06.webp"
      },
      {
        "title": "Écrire, laisser sécher et photographier",
        "duration": "10 min + séchage",
        "body": "Ajouter une date et quelques mots dans les espaces réservés. Essayer le stylo sur une chute : écrire sur papier nu si le gesso accroche la pointe. Attendre que les surfaces soient sèches et non collantes avant de refermer. Photographier la double page, puis enregistrer le projet dans Mon carnet avec les papiers et produits utilisés.",
        "tip": "Une phrase courte sur une promenade ou une saison suffit à donner une histoire à la page.",
        "mistake": "Refermer le carnet pour aplatir des couches encore humides : elles risquent d'adhérer entre elles.",
        "photo": "journal-photo-final.webp",
        "caption": "Double page terminée : deux groupes botaniques, quelques mots et beaucoup d'espace libre."
      }
    ],
    "image": "journal-thumb.webp",
    "coverPhoto": "journal-photo-final.webp",
    "tutorial": true,
    "visualNote": "Images générées au rendu photographique pour illustrer les gestes, et non photos d'une réalisation effectuée. Les détails peuvent varier d'une vue à l'autre : suivre les mesures et les repères du plan."
  }
];
 for(const upgrade of upgrades){
  const project=window.ATELIER_DATA.projects.find(p=>p.id===upgrade.id);
  if(project){const {prefix,...content}=upgrade;Object.assign(project,content);}
 }
})();

/* V0.6.7 : deux derniers projets harmonisés ; identifiants préservés. */
(()=>{const upgrades=[
  {
    "id": "page-photo",
    "title": "Souvenirs en images",
    "description": "Une page de 30 × 30 cm qui met une photographie en valeur : tons sauge et kraft, superpositions légères et quelques mots pour raconter le souvenir.",
    "tutorialLabel": "PAGE PHOTO · COMPOSITION & SOUVENIRS",
    "duration": "1 h 30 environ",
    "level": "Découverte +",
    "pattern": "./assets/plan-souvenirs-images.pdf",
    "patternPreview": "plan-souvenirs-images.svg",
    "patternDescription": "Plan A4 à échelle réduite d'une page de 30 × 30 cm : dimensions des papiers et positions mesurées depuis le coin supérieur gauche. Ce plan ne sert pas de patron de découpe à taille réelle.",
    "guide": "./assets/fiche-souvenirs-images.pdf",
    "sources": [
      {
        "label": "Library of Congress : albums et conservation des photographies",
        "url": "https://www.loc.gov/preservation/care/albums.html"
      }
    ],
    "preparation": "Prévoir une photographie horizontale de 15 × 10 cm, de préférence une copie, et deux papiers coordonnés. Les mesures sont données largeur × hauteur. Repérer le haut de la page et travailler sur une table propre et sèche. Les coordonnées du plan partent du coin supérieur gauche de la base.",
    "materials": [
      "Base ivoire 30 × 30 cm, papier épais 220 à 300 g/m²",
      "Papier vert sauge 20 × 22 cm et bande imprimée 24 × 8 cm",
      "Une photographie horizontale 15 × 10 cm, copie de préférence",
      "Mat kraft 16 × 11 cm, étiquette 8 × 2 cm, carte légende 12 × 4 cm",
      "Quatre coins photo adaptés ; papiers sans acide ni lignine au contact du tirage",
      "Petit tampon botanique, bloc et encre adaptée au papier",
      "Deux petites découpes botaniques plates et un feutre fin",
      "Règle, crayon, massicot ou ciseaux ; adhésif pour les seuls papiers décoratifs"
    ],
    "layerGuide": [
      "Base ivoire 30 × 30 cm, puis panneau sauge 20 × 22 cm.",
      "Bande botanique 24 × 8 cm, posée horizontalement sur le panneau.",
      "Petites empreintes sur les zones libres, avant toute photographie.",
      "Mat kraft 16 × 11 cm, puis photographie 15 × 10 cm retenue par ses coins.",
      "Étiquette de titre, légende et deux petits détails botaniques."
    ],
    "variants": [
      "Version randonnée : photographie de paysage, sauge et kraft, légende avec lieu et date.",
      "Version famille : papiers unis doux et petite anecdote manuscrite, sans multiplier les motifs.",
      "Version maritime : bleu grisé, ivoire et papier à carte, avec le même plan de composition."
    ],
    "mistakes": [
      "Découper ou coller un original irremplaçable : préparer une copie pour le projet décoratif.",
      "Ajouter une empreinte humide ou de la colle près du tirage déjà installé.",
      "Multiplier les gros embellissements et perdre la photographie comme point focal."
    ],
    "steps": [
      {
        "title": "Choisir la photographie et les papiers",
        "duration": "10 min",
        "body": "Choisir une photographie horizontale de 15 × 10 cm avec un sujet lisible. Préparer une base ivoire de 30 × 30 cm, un uni sauge, un imprimé botanique et du kraft. Poser les papiers près du tirage pour vérifier que leurs couleurs accompagnent l'image.",
        "tip": "Pour un tirage à préserver, privilégier des coins photo adaptés et des matériaux sans acide ni lignine au contact de l'image.",
        "mistake": "Ne pas utiliser un document unique pour tester une colle, une encre ou un recadrage.",
        "caption": "Les papiers, le tirage et les outils préparés séparément.",
        "photo": "souvenirs-photo-01.webp"
      },
      {
        "title": "Découper les cinq éléments",
        "duration": "15 min",
        "body": "Découper le panneau sauge à 20 × 22 cm, la bande imprimée à 24 × 8 cm et le mat kraft à 16 × 11 cm. Préparer aussi une étiquette de titre de 8 × 2 cm et une carte de légende de 12 × 4 cm. Garder la photographie à son format de 15 × 10 cm.",
        "tip": "Le mat kraft dépassera de 5 mm sur chacun des quatre côtés du tirage.",
        "mistake": "Ne pas confondre le mat de papier, qui encadre l'image, avec la base de la page.",
        "caption": "Les pièces découpées et le massicot en cours d’utilisation.",
        "diagram": "plan-souvenirs-images.svg",
        "diagramCaption": "Plan technique : mesures et repères de montage",
        "photo": "souvenirs-photo-02.webp"
      },
      {
        "title": "Composer sans coller",
        "duration": "12 min",
        "body": "Depuis le coin supérieur gauche de la base, poser le panneau sauge à 2 cm du bord gauche et 3 cm du haut. Placer la bande imprimée à 2 cm du bord gauche et 13 cm du haut. Le coin supérieur gauche du mat se place à 6 cm du bord gauche et 6 cm du haut. Disposer provisoirement titre et légende en dessous, comme sur le plan.",
        "tip": "Photographier cette disposition à blanc avant de retirer les éléments.",
        "mistake": "Ne pas coller avant d'avoir contrôlé les marges et la place réservée au texte.",
        "caption": "Essai à blanc des superpositions, sans tampon ni collage.",
        "diagram": "plan-souvenirs-images.svg",
        "diagramCaption": "Plan technique : mesures et repères de montage",
        "photo": "souvenirs-photo-03.webp"
      },
      {
        "title": "Tamponner puis fixer les fonds",
        "duration": "12 min",
        "body": "Retirer la photographie, le mat, le titre et la légende. Tester le tampon sur une chute, puis imprimer deux petites branches dans les angles libres de la base, en bas à gauche et en haut à droite. Laisser sécher selon la notice de l'encre. Fixer ensuite le panneau sauge et la bande imprimée avec un adhésif réservé aux papiers décoratifs.",
        "tip": "Garder les empreintes discrètes : la photographie doit rester le premier élément regardé.",
        "mistake": "Ne pas tamponner au-dessus d'une photographie installée et ne pas enfermer une encre encore humide.",
        "caption": "Un tampon botanique sur un angle libre ; la photographie reste à l’écart.",
        "photo": "souvenirs-photo-04.webp"
      },
      {
        "title": "Matrer et installer la photographie",
        "duration": "12 min",
        "body": "Coller uniquement le mat kraft à l'emplacement prévu, sans le tirage. Une fois les papiers secs, installer la photographie au centre du mat avec quatre coins photo dont l'adhésif reste sur le support. La marge kraft est de 5 mm sur chaque côté. Vérifier que l'image reste plane et que les coins ne la serrent pas.",
        "tip": "Si le tirage est précieux, conserver l'original séparément et exposer une reproduction dans cette page décorative.",
        "mistake": "Ne pas mettre d'adhésif de loisir créatif directement sur le dos ou la face de l'original.",
        "caption": "Gros plan sur les coins photo posés sur le mat kraft.",
        "photo": "souvenirs-photo-05.webp"
      },
      {
        "title": "Raconter le souvenir",
        "duration": "20 min",
        "body": "Écrire un titre court sur l'étiquette de 8 × 2 cm, puis la fixer à 11 cm du bord gauche et 20,5 cm du haut. Sur la carte de 12 × 4 cm, noter lieu, date et une ou deux phrases ; la placer à 9 cm du bord gauche et 23 cm du haut. Ajouter deux petits motifs botaniques plats, en bas à gauche du groupe et près de son angle supérieur droit, sans recouvrir la photographie.",
        "tip": "Rédiger et laisser sécher le texte sur les pièces séparées avant leur fixation.",
        "mistake": "Ne pas remplir toutes les zones vides : elles rendent la page plus lisible.",
        "caption": "Ajout du titre manuscrit, de la légende et de deux petites découpes.",
        "photo": "souvenirs-photo-06.webp"
      },
      {
        "title": "Vérifier et garder une trace",
        "duration": "9 min",
        "body": "Contrôler les quatre coins du tirage, la tenue des papiers et le séchage complet. Photographier la page bien à plat, sans reflet. Ajouter ta version à Mon carnet avec le lieu, les papiers choisis et les dimensions. Ranger ensuite la page dans une protection adaptée au format, sans comprimer les petits reliefs.",
        "tip": "Conserver aussi le fichier numérique de la photographie et une photo nette de la page terminée.",
        "mistake": "Éviter le soleil direct et les pages d'album trop chargées ou serrées.",
        "caption": "La page terminée : photographie, titre et souvenir manuscrit.",
        "photo": "souvenirs-photo-final.webp"
      }
    ],
    "image": "souvenirs-thumb.webp",
    "coverPhoto": "souvenirs-photo-final.webp",
    "tutorial": true,
    "visualNote": "Images générées au rendu photographique pour illustrer le projet et les gestes. Elles ne sont pas les photos d'une réalisation effectuée. Pour les découpes et les emplacements précis, suivre le plan et les mesures écrites."
  },
  {
    "id": "cadeaux-papier",
    "title": "Pochettes de petits trésors",
    "description": "Une pochette kraft à rabat de 12 × 8 cm, tamponnée et fermée par une ficelle amovible : pour glisser un mot doux ou une copie de petit souvenir.",
    "tutorialLabel": "OBJETS EN PAPIER · PLIAGE & TAMPONNAGE",
    "duration": "1 h environ, hors séchage",
    "level": "Découverte +",
    "pattern": "./assets/patron-pochettes-tresors.pdf",
    "patternPreview": "plan-pochettes-tresors.svg",
    "patternDescription": "Patron A4 à taille réelle : départ 14 × 20 cm, pochette finie 12 × 8 cm et rabat de 4 cm. Imprimer à 100 %, sans ajuster, puis vérifier le repère de 5 cm. Les deux languettes restent seulement sur la façade basse du gabarit.",
    "guide": "./assets/fiche-pochettes-tresors.pdf",
    "sources": [
      {
        "label": "Library of Congress : albums et conservation des photographies",
        "url": "https://www.loc.gov/preservation/care/albums.html"
      }
    ],
    "preparation": "Commencer par un essai en papier ordinaire. Le gabarit se lit verticalement, rabat en haut : 4 cm de rabat, 8 cm de dos, 8 cm de façade. Les languettes de 1 cm se trouvent uniquement de part et d'autre de la façade. La face intérieure sera placée vers toi pour le pliage.",
    "materials": [
      "Papier kraft ou imprimé souple, 160 à 200 g/m², rectangle de 14 × 20 cm",
      "Patron A4 et papier de brouillon pour un premier essai",
      "Règle, crayon, ciseaux et plioir",
      "Double-face étroit de 5 à 6 mm ou colle papier en couche fine",
      "Tampon botanique, bloc et encre adaptée au papier",
      "Environ 55 cm de ficelle de coton ou ruban fin",
      "Étiquette ivoire 4 × 2 cm et petite perforatrice",
      "Une ou deux cartes 9,5 × 6 cm ; petits souvenirs plats reproduits"
    ],
    "layerGuide": [
      "Découpe et rainurage du gabarit, puis retrait des bandes latérales inutiles.",
      "Empreintes et petite décoration sur la face extérieure, avant assemblage.",
      "Languettes de la façade repliées vers l’intérieur ; adhésif sur leur face qui touche le dos.",
      "Façade relevée sur le dos ; ouverture supérieure laissée libre.",
      "Cartes glissées dans la poche, rabat abaissé et ficelle amovible."
    ],
    "variants": [
      "Noël vintage : papier crème, tampon de sapin et ficelle rouge, sans changer le patron.",
      "Petit cadeau botanique : tampon fougère, étiquette ivoire et chute vert sauge.",
      "Souvenir de voyage : copie de ticket et petite carte portant lieu et date."
    ],
    "mistakes": [
      "Conserver des languettes sur le rabat ou sur le dos : elles n’y sont pas nécessaires.",
      "Coller toute la façade ou le bord supérieur et condamner la poche.",
      "Trop remplir la pochette : ce modèle est plat, sans soufflet."
    ],
    "steps": [
      {
        "title": "Préparer le papier et le contenu",
        "duration": "7 min",
        "body": "Choisir un papier souple de 160 à 200 g/m² et une encre compatible. Prévoir une ou deux cartes de 9,5 × 6 cm : elles doivent entrer facilement dans la pochette finie de 12 × 8 cm. Préparer le patron, les outils et environ 55 cm de ficelle. Faire le premier essai dans une feuille de brouillon.",
        "tip": "Cette pochette est décorative ; garder les originaux irremplaçables dans un rangement de conservation séparé et utiliser des copies ici.",
        "mistake": "Ne pas prévoir d'objet épais : le modèle ne comporte pas de soufflet.",
        "caption": "Le kraft, les cartes, les tampons, le plioir et la ficelle préparés.",
        "photo": "tresors-photo-01.webp"
      },
      {
        "title": "Découper et marquer les plis",
        "duration": "10 min",
        "body": "Découper un rectangle de 14 × 20 cm. Le placer verticalement. Depuis le haut, marquer deux plis horizontaux à 4 cm et à 12 cm : ils délimitent rabat, dos et façade. Marquer aussi les lignes verticales à 1 cm de chaque bord latéral. Avec un plioir, rainurer sans trancher le papier.",
        "tip": "Vérifier le repère de 5 cm sur le PDF imprimé avant de reporter les traits.",
        "mistake": "Ne pas inverser les mesures depuis le haut : le petit panneau de 4 cm est le rabat.",
        "caption": "Rainurage du rectangle avant de retirer les bandes latérales.",
        "diagram": "plan-pochettes-tresors.svg",
        "diagramCaption": "Plan technique : mesures et repères de montage",
        "photo": "tresors-photo-02.webp"
      },
      {
        "title": "Dégager le rabat et les languettes",
        "duration": "9 min",
        "body": "Retirer les bandes de 1 cm sur chaque côté du rabat et du dos, soit sur les 12 cm supérieurs du rectangle. Conserver les languettes latérales uniquement sur la façade, le panneau inférieur de 8 cm. Biseauter légèrement leurs extrémités sans réduire la façade. Couper en biais les deux coins supérieurs du rabat, sur environ 1 cm. Faire un essai de pliage sans colle.",
        "tip": "Sur le plan, les zones grisées sont à retirer ; les deux languettes restantes sont les seules zones de collage.",
        "mistake": "Ne pas couper les languettes de la façade et ne pas prolonger une coupe dans le dos.",
        "caption": "Le gabarit dégagé : rabat en haut, dos au milieu et façade à deux languettes en bas.",
        "diagram": "plan-pochettes-tresors.svg",
        "diagramCaption": "Plan technique : mesures et repères de montage",
        "photo": "tresors-photo-03.webp"
      },
      {
        "title": "Tamponner la face extérieure",
        "duration": "10 min",
        "body": "Repérer la face qui sera visible à l'extérieur de la façade lors de l'essai de pliage et y faire un petit repère au crayon. Déplier, poser cette face vers toi, puis tamponner une ou deux fougères à l'emplacement choisi. Vérifier le sens du motif en repliant brièvement le modèle avant d'encrer. Ajouter si souhaité une petite chute sauge, hors des plis, puis laisser sécher.",
        "tip": "Un essai en papier permet de comprendre le retournement des panneaux et le sens du motif.",
        "mistake": "Ne pas tamponner le modèle déjà collé : les surépaisseurs rendent l'empreinte moins régulière.",
        "caption": "Tamponnage botanique sur la façade encore dépliée.",
        "photo": "tresors-photo-04.webp"
      },
      {
        "title": "Former la poche et coller les côtés",
        "duration": "12 min",
        "body": "Placer la face intérieure vers toi et le rabat en haut. Replier les deux languettes de la façade vers l'intérieur. Poser un adhésif de 5 à 6 mm sur la face de chaque languette qui viendra toucher le dos. Relever la façade sur le pli à 12 cm et la presser contre le dos : seules les languettes adhèrent. Garder le bord supérieur ouvert, puis contrôler l'intérieur avec une carte de brouillon. Attendre la prise de la colle si nécessaire.",
        "tip": "Tester à blanc la face des languettes qui touche le dos avant de poser l'adhésif.",
        "mistake": "Aucune colle au centre de la façade, sur le bord supérieur ni sur le rabat.",
        "caption": "Assemblage de la façade sur le dos ; la poche reste ouverte en haut.",
        "diagram": "plan-pochettes-tresors.svg",
        "diagramCaption": "Plan technique : mesures et repères de montage",
        "photo": "tresors-photo-05.webp"
      },
      {
        "title": "Ajouter la carte et la fermeture",
        "duration": "8 min",
        "body": "Glisser une ou deux cartes de 9,5 × 6 cm dans la poche. Écrire un message sur l'étiquette ivoire de 4 × 2 cm et perforer un petit trou près de son bord. Abaisser le rabat, passer la ficelle autour de la pochette dans le sens vertical et enfiler l'étiquette avant de nouer un petit nœud souple. La ficelle doit pouvoir être retirée sans déchirer le papier.",
        "tip": "La ficelle est amovible : elle ne se colle pas et ne traverse pas le corps de la pochette.",
        "mistake": "Ne pas trop serrer le nœud ; un contenu trop épais déforme le rabat.",
        "caption": "Carte insérée, étiquette et ficelle amovible autour du rabat.",
        "photo": "tresors-photo-06.webp"
      },
      {
        "title": "Contrôler et photographier",
        "duration": "4 min",
        "body": "Ouvrir et refermer la pochette pour vérifier que rien n'accroche et que les cartes restent amovibles. Contrôler le séchage, la tenue des deux côtés et la propreté de l'ouverture. Photographier la version fermée puis ouverte, et l'ajouter à Mon carnet avec les papiers, les tampons et le destinataire souhaité.",
        "tip": "Garder le patron avec une note sur le papier utilisé pour refaire une petite série assortie.",
        "mistake": "Ne pas offrir une pochette dont la colle ou l'encre est encore humide.",
        "caption": "Les pochettes terminées, l’une fermée et l’autre ouverte.",
        "photo": "tresors-photo-final.webp"
      }
    ],
    "image": "tresors-thumb.webp",
    "coverPhoto": "tresors-photo-final.webp",
    "tutorial": true,
    "visualNote": "Images générées au rendu photographique pour illustrer le projet et les gestes. Elles ne sont pas les photos d'une réalisation effectuée. Pour les découpes et les emplacements précis, suivre le plan et les mesures écrites."
  }
];
for(const u of upgrades){const p=window.ATELIER_DATA.projects.find(p=>p.id===u.id);if(p)Object.assign(p,u);}
})();
