import { defineConfig } from 'astro/config';

export default defineConfig({
  // Le site est 100 % statique : il se déploie tel quel sur n'importe quel
  // hébergeur (GitHub Pages, Vercel, Netlify, un FTP classique...).
  // `site` et `base` seront renseignés une fois l'hébergement choisi.
  build: {
    format: 'directory',
  },
});
