# L’Atelier des Papiers

Une première version **PWA statique** de l'application personnelle de scrapbooking, conçue pour mobile et ordinateur.

## Contenu (version 0.6.6)

- Accueil avec thème graphique au choix : printemps, été, automne, hiver.
- Neuf cours progressifs avec matériel, conseils, schémas pédagogiques, erreurs à éviter, exercices, progression mémorisée et notes personnelles.
- Projets créatifs saisonniers : tags vintage, cartes, pages photo, mini-albums, junk journal, objets en papier.
- Galerie d'inspiration et premiers sketches.
- Carnet personnel : fiches éditables, jusqu'à cinq photographies par fiche, états et notes, suppression après confirmation.
- Inventaire de matériel, nuancier d'encres, favoris.
- Sauvegarde intégrale exportable en JSON et restauration après confirmation.
- PWA hors connexion après une première visite en ligne.
- Icône et bouton d'installation sur Android, iOS, Chrome et Edge lorsque le navigateur le permet.
- Vérification de version depuis Mon atelier, notification de mise à jour, installation après confirmation et journal détaillé affiché une seule fois par version.

## Nouveautés 0.6.3 : Tags givrés illustré en photoréalisme

- La couverture et la vignette du projet **Tags givrés** utilisent une vue photoréaliste de trois tags finis.
- Chaque étape présente désormais sa propre image photoréaliste, soit **neuf vues**, au lieu d'un SVG comme image principale.
- Les anciens SVG ne sont pas supprimés : ils sont consultables séparément par **Voir le schéma technique** ; la fiche et le patron PDF restent disponibles.
- Toutes les illustrations photoréalistes sont **générées numériquement**, pas des photos de travaux réels.
- Le service worker met en cache les dix nouveaux WebP. L'identifiant du projet et les sauvegardes existantes sont inchangés.

## Nouveautés 0.6.6 : Carnet de voyage et Jardin oublié

- **Mon carnet de voyage** : accordéon de quatre volets 10 × 15 cm, huit étapes détaillées, pochette à trois languettes, couvertures bleues et ruban. Patron PDF A4 paysage à 100 % et fiche illustrée.
- **Le jardin oublié** : double page A5 en sept étapes, collage de reproductions, voile fin de gesso, empreintes et découpes botaniques. Plan réduit de composition et fiche illustrée.
- Quinze images générées au rendu photographique, quinze vues d'étapes (résultat final également utilisé en dernière étape), deux couvertures et deux miniatures optimisées. Les visuels restent des illustrations, pas des photos d'atelier réel.
- Galerie actualisée et schémas séparés, liens cours/carnet, zoom et suivi d'étapes conservés.
- Projets restant à harmoniser : **Souvenirs en images** et **Pochettes de petits trésors**, puis les cours techniques et l'accueil selon le plan éditorial.
- Aucun changement de structure des données personnelles ni réinitialisation.

## Nouveautés 0.6.5 : Les feuilles du temps et Sauge & or

- **Les feuilles du temps** : mini-album relié avec 2 anneaux, 4 pages et 2 couvertures de 12 × 16 cm. Huit étapes détaillées, huit vues photoréalistes numériques et un patron A4 à l'échelle 1:1 (repère de 50 mm).
- **Carte botanique sauge & or** : 6 étapes de carterie, format fermé 10,5 × 15 cm. Plan SVG et vues photoréalistes composées.
- Les illustrations restent distinctes des schémas de dimensions ; elles sont générées numériquement et ne décrivent pas un atelier réellement photographié.
- Identifiants des projets, sauvegardes, favoris et notes inchangés.
- Nouvelles images WebP incluses dans le cache hors ligne PWA.

## Nouveautés 0.6.4 : Jardin de saison et Une attention botanique en photos

- **Jardin de saison** : 9 vues de montage photoréalistes, couverture et vignette WebP optimisée.
- **Une attention botanique** : 6 vues photoréalistes construites à partir de matériaux de scrapbooking, couverture et vignette WebP.
- Les schémas cotés SVG restent disponibles **séparément**, avec le bouton « Voir le schéma technique ».
- Leurs dimensions et fiches imprimables ne changent pas ; les visuels ne sont pas des photographies d'une fabrication réellement effectuée.
- Les deux projets conservent leurs identifiants et la progression enregistrée.
- Préchargement PWA des nouvelles images, sans suppression des données utilisateur.

## Nouveautés 0.6.2 : corrections visuelles et Tags givrés

### Correction du Tag vintage

- Correction de l'image dans la galerie des projets : le visuel final `tag-vintage-final.webp` remplace l’ancienne vignette `tag.svg`.
- Correction mobile : ne plus empiler le schéma sous la photo d’étape. Les neuf schémas techniques restent accessibles par un bouton **« Voir le schéma technique »** dans les explications.
- Même ID `tag-vintage`, même progression et mêmes photographies.

### Refonte du projet Tags givrés

- Conservé sous l’ID `tags-hiver`, désormais au format détaillé des projets pédagogiques récents.
- Trois tags d’hiver, 7 × 12 cm, avec **9 étapes** complètes et illustrations SVG originales individuelles, plus la couverture générale.
- Matériel, préparation, conseils, erreurs fréquentes, progression, variantes, ordre des couches, ressources officielles Ranger.
- Réutilisation du **patron PDF 7 × 12 cm** à taille réelle, et nouvelle fiche récapitulative SVG.
- Images SVG = illustrations pédagogiques, pas photographies de gestes réellement exécutés.

### Précautions

Embossage à chaud : encre adaptée, poudre puis pistolet chauffant sur support résistant. Pâte à texture : application après chauffage et séchage à l’air selon le fabricant.

Références : [Ranger, How to Heat Emboss](https://rangerink.com/blogs/videos/how-to-heat-emboss) et [Grit Paste Snowfall](https://rangerink.com/products/tim-holtz-distress-grit-paste-snowfall).

Toutes les données locales restent inchangées. Nouvelle version PWA mise en cache avec activation à la demande.

## Nouveautés 0.6.1 : harmonisation du tag vintage Distress

Premier projet historique remis au format des tutoriels récents, **sans modifier son identifiant ni ses neuf étapes enregistrées**.

- Neuf photographies d'illustration préexistantes conservées.
- Neuf schémas SVG supplémentaires, zoomables depuis chaque étape : mesures, découpes, œillet, encrage, eau, empreinte et finition.
- Préparation du matériel, ordre des couches, conseils et erreurs à éviter.
- Patron PDF 7 × 12 cm à taille réelle préservé ; nouvelle fiche SVG A4 à imprimer (schéma récapitulatif non à l'échelle).
- Les illustrations sont explicitement distinguées des photographies d'essais exécutés.
- Les données locales, favoris, photos et progression sont préservés. Une mise à jour du service worker ajoute les images SVG au cache hors ligne.

Références vérifiées : [FAQ Ranger Ink](https://rangerink.com/pages/faqs) et [Distress Imagination Tag](https://rangerink.com/blogs/projects/distress-imagination-tag).

## Nouveautés 0.6.0 : projets complets avec papiers coordonnés

- **Jardin de saison** : projet guidé de page photo 30 × 30 cm, neuf étapes cotées, papiers floraux et vert sauge, photographie centrale, tag de journaling, découpes et embellissements.
- **Une attention botanique** : projet de carterie 10,5 × 15 cm, six étapes et trois papiers coordonnés.
- Chaque création possède des schémas d’assemblage SVG originaux, zoomables, un plan imprimable, le matériel, les erreurs à éviter, plusieurs variations et une progression enregistrable.
- Les deux tutoriels renvoient à leur sketch d’origine. Le volet **Inspirations & sketches** contient un guide en trois papiers (uni, motif principal, motif discret).
- Pour les photos originales, éviter la colle ou le ruban ordinaire appliqué directement sur l’image ; privilégier des coins photo adaptés. Source : [Library of Congress](https://www.loc.gov/preservation/care/albums.html).
- Les visuels intégrés au site pour ces deux projets sont des **illustrations schématiques**, pas des photographies d’une réalisation exécutée. Les dimensions écrites sont prioritaires.
- Les plans SVG imprimables ne sont pas des patrons 1:1 : une page 30 × 30 cm ne tient pas sur A4.
- Les données personnelles restent dans le navigateur ; les sauvegardes existantes ne sont pas modifiées.

## Nouveautés 0.5.0 : sketches & papiers coordonnés

- Bibliothèque de **sept sketches originaux** dans Projets → Inspirations & sketches.
- Pages photo, carterie, tag, couverture de mini-album, junk journal et page à pochettes.
- Dessins interactifs SVG, mesures en cm, matériel, pas-à-pas et trois variantes.
- Trois palettes de prévisualisation : Vintage patiné, Papiers coordonnés et Hiver poudré.
- Inspiration des collections coordonnées sans reprendre de visuels ou modèles propriétaires.
- Enregistrer un sketch comme favori, imprimer la fiche, télécharger un SVG vectoriel ou créer une fiche de carnet directement depuis la composition.
- Guide « Mon kit de papiers » et petit défi des trois papiers.
- Les SVG sont des **schémas de disposition**, non des patrons à taille réelle. Sur un format 30 × 30 cm, l'impression A4 réduit le dessin mais garde les dimensions chiffrées.
- Les données personnelles sont conservées ; le champ palette est exporté et restauré dans les sauvegardes.

Référence de contexte : [collections officielles Simple Stories](https://www.simplestories.com/collections). Application indépendante et non affiliée.

## Nouveautés 0.4.0 : l’atelier des encres

- **Cours 09 : Distress Ink ou Oxide ?** Un essai sur deux tags identiques avec neuf étapes détaillées, quatorze vues (dont des recadrages rapprochés), conseils et erreurs fréquentes.
- **Projet guidé : Duo de tags Ink & Oxide**, disponible dans la catégorie Tags, avec progression et carnet personnel.
- **Fiche PDF A4** : comparatif des deux encres, déroulement et gabarit imprimable pour deux tags vierges de 7 × 12 cm avec trait témoin de 50 mm.
- **Photos agrandissables** dans les cours qui en disposent ; illustrations numériques clairement identifiées, non présentées comme des photographies d’expériences réelles.
- **Recherche dans le carnet** par titre, type de projet et notes, et filtre par statut de réalisation.
- **Accueil enrichi**, avec accès direct au nouveau cours et aux tags comparatifs.
- Le contenu de la version est détaillé dans `changelog.json`. La mise à jour est livrée par le service worker avec activation à la demande.
- Les données personnelles conservées dans IndexedDB / localStorage **ne sont pas modifiées** par cette livraison.

Références techniques : [Ranger Ink, FAQ](https://rangerink.com/pages/faqs) et [Ranger Ink, gamme Distress](https://rangerink.com/collections/tim-holtz-distress). Le tutoriel n’est pas affilié aux marques citées.

## Nouveauté 0.3.0 : installation et suivi des mises à jour

- Un bouton **Installer** est proposé dans l'en-tête et dans Mon atelier. Il ouvre la proposition native si Chrome / Edge la fournit, ou un guide manuel selon l'appareil.
- Sur iPhone : depuis Safari, **Partager > Sur l'écran d'accueil**.
- Les icônes 192 / 512 pixels et le manifeste PWA sont présents, avec une icône dédiée également sur iOS.
- **Mon atelier > Application et mises à jour** permet de vérifier la présence de nouveautés et d'ouvrir l'historique des versions.
- Les nouvelles versions sont préparées par un service worker en attente, puis activées **sur demande**, pour éviter un rechargement pendant un projet.
- Après la mise à jour, la fenêtre **Nouveautés** détaille les ajouts et corrections. Sa fermeture est mémorisée dans localStorage : elle ne réapparaît plus avant la version suivante. Le bouton « Nouveautés » reste disponible pour relire le journal.
- Les données personnelles déjà présentes dans IndexedDB / localStorage ne sont pas réinitialisées.
- Un mécanisme unique de migration 0.2 → 0.3 permet à l'ancienne PWA de prendre en compte les nouveaux fichiers à la prochaine ouverture.

**Pour une version future :** mettre à jour simultanément `data.js` (numéro de version), `changelog.json` (nouvelle entrée en tête), et `sw.js` (nouveau nom de cache et liste de ressources si nécessaire). Ne jamais vider les données utilisateur pour forcer une mise à jour.

## Nouveauté 0.2.0 : tag vintage aux encres Distress

- Neuf étapes illustrées dans Projets → Tags → Tag vintage aux encres Distress.
- Matériel détaillé, conseils, erreurs fréquentes, variantes et liens vers Ranger Ink.
- Patron PDF A4 à imprimer à 100 %, tag de 7 × 12 cm à taille réelle.
- Progression enregistrée pour chaque étape du tag.
- Photographies d’illustration générées numériquement : les gestes exacts sont décrits dans le texte, et ne remplacent pas des prises de vue de gestes réels.

## Démarrage

Aucun outil de compilation n'est nécessaire. Pour une utilisation normale, déposer **tous les fichiers et dossiers de cette archive** à la racine d'un hébergement HTTPS statique (GitHub Pages, Netlify ou autre).

Pour un test sur un ordinateur où Python est disponible :

```bash
python -m http.server 8080
```

Puis ouvrir `http://localhost:8080`.

L'ouverture directe du fichier `index.html` peut fonctionner pour une consultation locale, mais l'installation PWA et le fonctionnement hors connexion nécessitent un site HTTPS.

## GitHub Pages

1. Créer un nouveau dépôt nommé `atelier-des-papiers`.
2. Ajouter le contenu de l'archive à la racine du dépôt (pas le dossier qui les contient).
3. Activer **Settings > Pages > Deploy from a branch > main / (root)** si les GitHub Pages sont disponibles sur le dépôt.
4. Ouvrir l'adresse de Pages indiquée par GitHub, vérifier l'installation mobile et exporter régulièrement les sauvegardes.

La publication GitHub Pages peut rendre le site et ses ressources accessibles publiquement, même si les données personnelles restent enregistrées localement. Éviter d'ajouter des fichiers privés au dépôt et choisir soigneusement les réglages de visibilité. Pour un hébergement privé réel, prévoir une solution avec contrôle d'accès.

## Stockage et sécurité des sauvegardes

Les données de l'utilisateur restent **locales à ce navigateur et à cette installation** (IndexedDB ; repli localStorage si indisponible). Il n'y a actuellement aucune synchronisation ni compte en ligne. Les photos importées sont réduites à 1440 pixels maximum et stockées dans les fiches du carnet sous forme de données JPEG. Le navigateur peut effacer ces données en cas de désinstallation ou de purge du stockage. L'export JSON régulier est indispensable. La restauration écrase les données actuelles après confirmation.

## Documentation et étapes suivantes

Les visuels de saison et de couverture sont des **illustrations SVG originales**, pas des photographies de gestes. Les petites vues dans les cours sont des **schémas de démonstration** provisoires. La prochaine étape éditoriale consiste à photographier les gestes en deux ou trois cadrages précis par étape, à remplacer les schémas correspondants et à produire les patrons / gabarits imprimables.

Références techniques (documentation fabricant / conservation) : Ranger Ink, Stampers Anonymous, Hero Arts, Library of Congress. L’application est indépendante de ces marques, sans affiliation avec Tim Holtz ou Simple Stories.

## Structure

- `index.html` : page d’entrée
- `app.js` : interface, navigation, carnet, sauvegardes et logique
- `data.js` : contenu des cours, projets et inspirations
- `styles.css` : mise en page adaptative et saisons
- `assets/` : illustrations SVG originales
- `icons/` : icônes PWA
- `manifest.webmanifest` et `sw.js` : installation et cache hors connexion

Version de création : 8 novembre 2026.