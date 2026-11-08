# L’Atelier des Papiers

PWA statique personnelle de scrapbooking, version initiale **0.1.0**, 8 novembre 2026.

## Contenu
Accueil avec thèmes saisonniers ; huit cours guidés ; tags, carterie, mini-albums et junk journal ; carnet avec photographies et notes ; inventaire de matériel et nuancier ; favoris ; export/restauration JSON.

## Publication GitHub Pages
Dans le dépôt, **Settings → Pages → Build and deployment → Deploy from a branch**, sélectionner **main** et **/(root)**, puis enregistrer.
Adresse attendue lorsque Pages est activé : https://webfourmi.github.io/atelier-des-papiers/

## Organisation
`index.html`, `styles.css`, `data.js`, `app.js`, `manifest.webmanifest`, `sw.js` et `icons/`.
Les SVG de saison et des projets sont incorporés dans `app.js` afin de fonctionner sans ressources externes. Les illustrations des gestes sont pour l'instant des schémas, à remplacer plus tard par des photographies.

## Données personnelles
Les notes, photos et listes sont enregistrées localement dans le navigateur (IndexedDB / localStorage). Aucune synchronisation de compte. Utiliser régulièrement **Exporter ma sauvegarde**. L'effacement des données du navigateur ou un changement d'appareil peut les supprimer. La restauration remplace les données précédentes après confirmation.

Le dépôt GitHub et le site Pages sont publics. Les notes et photographies privées conservées dans le navigateur ne sont pas publiées sur GitHub.
Application indépendante, sans affiliation avec Tim Holtz, Ranger, Stampers Anonymous ou Simple Stories.
