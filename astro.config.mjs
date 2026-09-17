import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // React ne s'exécute que dans les composants qui le demandent : les pages
  // .astro existantes restent du HTML statique, sans JavaScript envoyé.
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },

  // Adresse de publication. `base` est indispensable : GitHub Pages sert le
  // site depuis un sous-dossier, et Astro génère sinon des chemins absolus
  // vers ses propres fichiers JavaScript (/assets/...) qui pointent à côté.
  // Les composants React ne se chargeaient alors jamais.
  site: 'https://maelllllllll.github.io',
  base: '/FI-LG-Portofolio',

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
