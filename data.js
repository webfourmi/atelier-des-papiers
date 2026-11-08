window.ATELIER_DATA = {
  version:'0.6.2',
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
