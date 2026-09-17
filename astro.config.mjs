import { defineConfig } from 'astro/config';

export default defineConfig({
  // Le site est 100 % statique : il se déploie tel quel sur n'importe quel
  // hébergeur (GitHub Pages, Vercel, Netlify, un FTP classique...).
  // `site` et `base` seront renseignés une fois l'hébergement choisi.
  build: {
    // Une page = un fichier .html à la racine. Aucune réécriture d'URL
    // n'est alors nécessaire côté serveur, quel que soit l'hébergeur.
    format: 'file',
    // Par défaut Astro place ses fichiers compilés dans "_astro". Certains
    // hébergeurs ignorent ou réservent les dossiers commençant par "_".
    assets: 'assets',
    // Les feuilles de style sont légères : les intégrer au HTML évite deux
    // requêtes et supprime toute dépendance à un chemin absolu, donc le site
    // fonctionne aussi bien à la racine d'un domaine que dans un sous-dossier.
    inlineStylesheets: 'always',
  },
});
