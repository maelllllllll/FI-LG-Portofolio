// ---------------------------------------------------------------------------
// Prépare les images du Drive pour le web.
//
//   1. Déposer les fichiers d'origine (même à 18 Mo) dans  assets-src/
//   2. Lancer  npm run images
//   3. Les versions optimisées atterrissent dans  public/images/
//
// Les originaux ne sont pas versionnés (voir .gitignore) : seules les versions
// allégées partent sur le dépôt.
// ---------------------------------------------------------------------------

import { mkdir, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ENTREE = 'assets-src';
const SORTIE = 'public/images';

// Largeur maximale retenue : au-delà, l'œil ne fait plus la différence sur un
// écran courant, mais le poids, lui, double.
const LARGEUR_MAX = 2400;
const QUALITE = 82;

const EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.tif', '.tiff', '.webp']);

/** Parcourt récursivement un dossier et renvoie les chemins de fichiers. */
async function lister(dossier) {
  const entrees = await readdir(dossier, { withFileTypes: true });
  const fichiers = await Promise.all(
    entrees.map(async (entree) => {
      const chemin = path.join(dossier, entree.name);
      return entree.isDirectory() ? lister(chemin) : [chemin];
    }),
  );
  return fichiers.flat();
}

/** Nom de fichier web : minuscules, sans accent ni espace. */
function assainir(nom) {
  return nom
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9.-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

const octetsEnMo = (octets) => (octets / 1024 / 1024).toFixed(2);

async function principal() {
  let sources;
  try {
    sources = (await lister(ENTREE)).filter((fichier) =>
      EXTENSIONS.has(path.extname(fichier).toLowerCase()),
    );
  } catch {
    console.error(`Dossier "${ENTREE}" introuvable. Créez-le et déposez-y les images.`);
    process.exitCode = 1;
    return;
  }

  if (sources.length === 0) {
    console.log(`Aucune image dans "${ENTREE}/". Rien à faire.`);
    return;
  }

  let avant = 0;
  let apres = 0;

  for (const source of sources) {
    const relatif = path.relative(ENTREE, source);
    // Chaque segment est assaini séparément : sinon les barres obliques
    // disparaissent et l'arborescence est aplatie en un seul nom.
    const dossier = path.dirname(relatif);
    const dossierSortie =
      dossier === '.'
        ? SORTIE
        : path.join(SORTIE, ...dossier.split(path.sep).map(assainir));
    await mkdir(dossierSortie, { recursive: true });

    const base = assainir(path.basename(relatif, path.extname(relatif)));
    const poidsAvant = (await stat(source)).size;
    avant += poidsAvant;

    const image = sharp(source).rotate(); // respecte l'orientation EXIF
    const { width } = await image.metadata();
    const redimensionnee = width && width > LARGEUR_MAX
      ? image.resize({ width: LARGEUR_MAX })
      : image;

    // Un JPEG pour la compatibilité, un WebP pour le poids.
    const cibleJpg = path.join(dossierSortie, `${base}.jpg`);
    const cibleWebp = path.join(dossierSortie, `${base}.webp`);

    await redimensionnee.clone().jpeg({ quality: QUALITE, mozjpeg: true }).toFile(cibleJpg);
    await redimensionnee.clone().webp({ quality: QUALITE }).toFile(cibleWebp);

    const poidsApres = (await stat(cibleJpg)).size;
    apres += poidsApres;

    console.log(
      `${relatif}  ${octetsEnMo(poidsAvant)} Mo → ${octetsEnMo(poidsApres)} Mo`,
    );
  }

  console.log(
    `\n${sources.length} image(s) : ${octetsEnMo(avant)} Mo → ${octetsEnMo(apres)} Mo`,
  );
}

principal();
