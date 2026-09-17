# Portfolio — Laura Gauthier-Petit

Site vitrine statique : une page d'accueil et quatre chapitres
(Fête Impériale, Design d'intérieur, Presse, Project).

## Démarrer

```bash
npm install
npm run dev      # http://localhost:4321
```

## Commandes

| Commande         | Effet                                                  |
| ---------------- | ------------------------------------------------------ |
| `npm run dev`    | Serveur de développement, rechargement à chaud          |
| `npm run build`  | Génère le site dans `dist/`                             |
| `npm run preview`| Sert le contenu de `dist/` pour vérification            |
| `npm run images` | Optimise les images de `assets-src/` vers `public/images/` |

## Modifier le contenu

Tout le texte (nom, titres, chapôs, légendes) et les chemins d'images sont
dans **`src/data/site.js`**. C'est le seul fichier à toucher pour changer un
libellé ou ajouter une photo à une galerie.

## Ajouter des images

Les fichiers du Drive font 10 à 18 Mo : ils doivent être allégés avant d'être
mis en ligne.

1. Déposer les originaux dans `assets-src/` (ce dossier n'est pas versionné) ;
2. `npm run images` — les versions redimensionnées (2400 px de large max,
   JPEG + WebP) sont écrites dans `public/images/` ;
3. Référencer le chemin `/images/…` dans `src/data/site.js`.

## Typographie

L'identité de Fête Impériale repose sur **Futura**. Futura n'étant pas
librement diffusable sur le web, la feuille de style l'utilise si elle est
installée chez le visiteur et bascule sinon sur **Jost**, son revival libre.
Pour utiliser la vraie Futura partout, il faut acquérir une licence web et
déposer les fichiers de police dans `public/fonts/`.

## Déploiement

`npm run build` produit un dossier `dist/` entièrement statique, déployable
tel quel sur GitHub Pages, Vercel, Netlify ou un hébergement classique.
Renseigner alors `site` (et `base` si le site n'est pas à la racine) dans
`astro.config.mjs`.
