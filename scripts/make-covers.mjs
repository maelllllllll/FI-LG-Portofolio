// ---------------------------------------------------------------------------
// Fabrique les images de couverture des rubriques à partir des visuels
// disponibles. Relancer après tout changement dans assets-src/.
// ---------------------------------------------------------------------------

import sharp from 'sharp';

const L = 900;
const H = 1200;
const FOND = { r: 26, g: 24, b: 21, alpha: 1 }; // --noir-doux

// --- 01 Fête Impériale : le blason, inversé pour tenir sur fond sombre -------
// Le logo d'origine est noir sur blanc. En négatif il devient clair sur noir,
// et le mode "screen" laisse alors le fond sombre transparaître.
const blason = await sharp('assets-src/brand/logo-blason.jpg')
  .negate({ alpha: false })
  .resize({ width: 440 })
  .toBuffer();

await sharp({
  create: { width: L, height: H, channels: 3, background: FOND },
})
  .composite([{ input: blason, blend: 'screen' }])
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile('public/images/sections/fete-imperiale.jpg');

// --- 03 Presse : le haut de la parution ELLE (bandeau + photo + titre) -------
await sharp('assets-src/press/elle-deco-crush.jpg')
  .extract({ left: 0, top: 250, width: 1953, height: 2604 })
  .resize({ width: L, height: H })
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile('public/images/sections/press.jpg');

// --- 04 Project : un fragment du motif, cadré au centre ---------------------
const motif = sharp('assets-src/project/corps-nus.jpg');
const { width, height } = await motif.metadata();
const cropL = Math.round(height * (L / H));
await motif
  .extract({
    left: Math.round((width - cropL) / 2),
    top: 0,
    width: cropL,
    height,
  })
  .resize({ width: L, height: H })
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile('public/images/sections/project.jpg');

console.log('couvertures générées : fete-imperiale, press, project');
