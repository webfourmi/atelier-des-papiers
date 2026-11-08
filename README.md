# L’Atelier des Papiers

Une première version **PWA statique** de l'application personnelle de scrapbooking, conçue pour mobile et ordinateur.

## Contenu (version 0.3.0)

- Accueil avec thème graphique au choix : printemps, été, automne, hiver.
- Huit cours progressifs avec matériel, conseils, schémas pédagogiques, erreurs à éviter, exercices, progression mémorisée et notes personnelles.
- Projets créatifs saisonniers : tags vintage, cartes, pages photo, mini-albums, junk journal, objets en papier.
- Galerie d'inspiration et premiers sketches.
- Carnet personnel : fiches éditables, jusqu'à cinq photographies par fiche, états et notes, suppression après confirmation.
- Inventaire de matériel, nuancier d'encres, favoris.
- Sauvegarde intégrale exportable en JSON et restauration après confirmation.
- PWA hors connexion après une première visite en ligne.
- Icône et bouton d'installation sur Android, iOS, Chrome et Edge lorsque le navigateur le permet.
- Vérification de version depuis Mon atelier, notification de mise à jour, installation après confirmation et journal détaillé affiché une seule fois par version.

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