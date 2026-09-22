// ---------------------------------------------------------------------------
// Site content. Every piece of text and every image path lives here, so the
// pages themselves never need to be edited to change a label or add a photo.
//
// Images: drop the originals in assets-src/, run `npm run images`, then point
// to the optimised file under images/.
//
// A chapter can carry, in this order:
//   asciiHero   a full-screen ASCII landing built from one image
//   collections an interactive shelf, one volume per collection
//   groups      named sub-sections, each with its own gallery
//   images      a single closing gallery
//
// Gallery image `format`:
//   'portrait' → cropped to 4:5   'landscape' → cropped to 16:10
//   'free'     → keeps the file's own proportions (best for artwork and scans)
// ---------------------------------------------------------------------------

export const identity = {
  firstName: 'Laura',
  lastName: 'Gauthier-Petit',
  titles: ['Art Direction', 'Design'],

  heroImage: 'images/hero-madura.jpg',

  portrait: 'images/portrait.jpg',
  portraitCaption: '',
  bio: '',
};

// Couleurs de reliure des volumes. Reprennent la charte du site plutôt que
// la palette bleue fournie par défaut avec le composant.
// Toutes les reliures sont identiques : papier crème, filets et titre rouges,
// à la manière d'une collection littéraire. C'est l'uniformité qui fait l'effet
// de série sur l'étagère.
const RELIURE = { color: '#f2ece0', foil: '#9b2a24' };

/** Les collections, dans l'ordre chronologique. */
export const collections = [
  {
    id: 'fw16-posh-birds',
    title: 'Posh Birds',
    date: 'FW 2016',
    ...RELIURE,
    images: [
      { src: 'images/collections/fw16-posh-birds/151215-feteimperial-002-073b.jpg', format: 'portrait' },
    ],
  },
  { id: 'ss17-madeleine', title: 'La Madeleine de Proust', date: 'SS 2017', ...RELIURE },
  {
    id: 'ss18-jardin-suspendu',
    title: 'Le Jardin Suspendu',
    date: 'SS 2018',
    ...RELIURE,
    images: [
      { src: 'images/collections/ss18-jardin-suspendu/5812-01.jpg', format: 'landscape' },
      { src: 'images/collections/ss18-jardin-suspendu/5812-02.jpg', format: 'portrait' },
      { src: 'images/collections/ss18-jardin-suspendu/5817-25.jpg', format: 'portrait' },
      { src: 'images/collections/ss18-jardin-suspendu/arte-fushia-ld.jpg', format: 'portrait' },
      { src: 'images/collections/ss18-jardin-suspendu/boldini-js-ld.jpg', format: 'portrait' },
      { src: 'images/collections/ss18-jardin-suspendu/boldini-ocre-ld.jpg', format: 'portrait' },
      { src: 'images/collections/ss18-jardin-suspendu/campaign-fi-12046-hd-srgb.jpg', format: 'portrait' },
      { src: 'images/collections/ss18-jardin-suspendu/campaign-fi-12216-hd-srgb.jpg', format: 'portrait' },
      { src: 'images/collections/ss18-jardin-suspendu/campaign-fi-12421-hd-srgb.jpg', format: 'portrait' },
      { src: 'images/collections/ss18-jardin-suspendu/feteimpariale-2-hd-srgb.jpg', format: 'landscape' },
      { src: 'images/collections/ss18-jardin-suspendu/feteimpariale-3-hd-srgb-ld.jpg', format: 'landscape' },
      { src: 'images/collections/ss18-jardin-suspendu/feteimpariale-5-hd-srgb.jpg', format: 'portrait' },
      { src: 'images/collections/ss18-jardin-suspendu/img-8390-2.jpg', format: 'free' },
    ],
  },
  { id: 'ss19-voile-mariee', title: 'Le Voile de la Mariée', date: 'SS 2019', ...RELIURE },
  { id: 'fw19-botaniste', title: 'La Botaniste', date: 'FW 2019', ...RELIURE },
  { id: 'ss20-les-nues', title: 'Les Nues', date: 'SS 2020', ...RELIURE },
  { id: 'ss21-riviera', title: 'Riviera', date: 'SS 2021', ...RELIURE },
  { id: 'fw21-contre-temps', title: 'À Contre-Temps', date: 'FW 2021 — SS 2022', ...RELIURE },
  {
    id: 'ss23-corsica',
    title: 'Corsica',
    date: 'SS 2023 — FW 2024',
    ...RELIURE,
    images: [
      { src: 'images/collections/ss23-corsica/000006690004.jpg', format: 'landscape' },
      { src: 'images/collections/ss23-corsica/000006690011.jpg', format: 'portrait' },
      { src: 'images/collections/ss23-corsica/000006690015.jpg', format: 'landscape' },
      { src: 'images/collections/ss23-corsica/000006760004.jpg', format: 'landscape' },
      { src: 'images/collections/ss23-corsica/000006760011.jpg', format: 'portrait' },
      { src: 'images/collections/ss23-corsica/000006760028.jpg', format: 'portrait' },
      { src: 'images/collections/ss23-corsica/aleria-ecru-1.jpg', format: 'portrait' },
      { src: 'images/collections/ss23-corsica/bastia-vinyle-1.jpg', format: 'portrait' },
      { src: 'images/collections/ss23-corsica/bonifacio-beige-1.jpg', format: 'portrait' },
      { src: 'images/collections/ss23-corsica/bonifacio-fuschia-2.jpg', format: 'portrait' },
      { src: 'images/collections/ss23-corsica/castiglione-1.jpg', format: 'portrait' },
      { src: 'images/collections/ss23-corsica/cesari-1.jpg', format: 'portrait' },
      { src: 'images/collections/ss23-corsica/dsc-3453.jpg', format: 'portrait' },
      { src: 'images/collections/ss23-corsica/eurydice-beige-1.jpg', format: 'portrait' },
      { src: 'images/collections/ss23-corsica/immortelles.jpg', format: 'portrait' },
      { src: 'images/collections/ss23-corsica/jasmin-immortelles-1.jpg', format: 'portrait' },
      { src: 'images/collections/ss23-corsica/kea-immortelles-2.jpg', format: 'landscape' },
      { src: 'images/collections/ss23-corsica/marguerite-bleue-1.jpg', format: 'portrait' },
      { src: 'images/collections/ss23-corsica/marguerite-noire-1.jpg', format: 'portrait' },
      { src: 'images/collections/ss23-corsica/nymphe-corsica-2.jpg', format: 'portrait' },
      { src: 'images/collections/ss23-corsica/orso-jaune-2.jpg', format: 'portrait' },
      { src: 'images/collections/ss23-corsica/ringo-kaki-1.jpg', format: 'landscape' },
      { src: 'images/collections/ss23-corsica/sartene-immortelles-1.jpg', format: 'portrait' },
      { src: 'images/collections/ss23-corsica/sasha-2.jpg', format: 'portrait' },
    ],
  },
  { id: 'fw23-indistinct-chatter', title: 'Indistinct Chatter', date: 'FW 2023', ...RELIURE },
  {
    id: 'ss24-blue-sand',
    title: 'Blue Sand',
    date: 'SS 2024',
    ...RELIURE,
    images: [
      { src: 'images/collections/ss24-blue-sand/f0a3141.jpg', format: 'portrait' },
      { src: 'images/collections/ss24-blue-sand/f0a3189.jpg', format: 'portrait' },
      { src: 'images/collections/ss24-blue-sand/f0a3211.jpg', format: 'landscape' },
      { src: 'images/collections/ss24-blue-sand/fi-00-21.jpg', format: 'portrait' },
      { src: 'images/collections/ss24-blue-sand/fi-00-22.jpg', format: 'portrait' },
      { src: 'images/collections/ss24-blue-sand/fi-00-25-1.jpg', format: 'portrait' },
      { src: 'images/collections/ss24-blue-sand/fi-00-27.jpg', format: 'portrait' },
      { src: 'images/collections/ss24-blue-sand/fi-00-28.jpg', format: 'portrait' },
      { src: 'images/collections/ss24-blue-sand/fi-00-30.jpg', format: 'portrait' },
      { src: 'images/collections/ss24-blue-sand/fi-00-34.jpg', format: 'portrait' },
      { src: 'images/collections/ss24-blue-sand/fi-00-37.jpg', format: 'portrait' },
      { src: 'images/collections/ss24-blue-sand/fi-00-41.jpg', format: 'portrait' },
      { src: 'images/collections/ss24-blue-sand/fi-00-45.jpg', format: 'landscape' },
      { src: 'images/collections/ss24-blue-sand/fi-00-51.jpg', format: 'portrait' },
      { src: 'images/collections/ss24-blue-sand/fi-00-55-2.jpg', format: 'landscape' },
      { src: 'images/collections/ss24-blue-sand/fi-00-60.jpg', format: 'landscape' },
      { src: 'images/collections/ss24-blue-sand/fi-00-63.jpg', format: 'landscape' },
      { src: 'images/collections/ss24-blue-sand/louise-2.jpg', format: 'portrait' },
    ],
  },
];

/** Lien vers une collection. */
export const collectionHref = (id) => `collection-${id}.html`;

/**
 * Les volumes tels que l'étagère les attend. Seules les collections pourvues
 * de visuels reçoivent un lien : sans `href`, cliquer un volume le met en
 * avant sans mener à une page vide.
 */
export const collectionVolumes = collections.map((collection) => ({
  ...collection,
  href: collection.images?.length ? collectionHref(collection.id) : undefined,
}));

export const sections = [
  {
    number: '01',
    slug: 'fete-imperiale',
    title: 'Fête Impériale',
    subtitle: 'The brand',
    intro:
      'A womenswear label founded in 2015, built around drawing and printed ' +
      'textile. Eleven collections to date.',
    cover: 'images/sections/fete-imperiale.jpg',

    // TODO — rédigé à partir des articles de presse du Drive (ELLE,
    // FashionNetwork, Marie Claire Maison). Le brand deck 2022 pèse 13 Mo et
    // reste hors de portée du connecteur : à valider par Laura, et à enrichir
    // dès que le deck sera déposé.
    brand: {
      emblem: 'images/brand/blason-negatif.jpg',
      statement:
        'Fête Impériale was founded in Paris in 2015. The label builds its ' +
        'womenswear on drawing: prints are conceived first, then the garment ' +
        'follows. The result is a dreamlike, quietly decadent vocabulary — ' +
        'closer to the graphic excess of the 1980s than to minimalism.',
      facts: [
        { label: 'Founded', value: 'Paris, 2015' },
        { label: 'Founder', value: 'Laura Gauthier-Petit' },
        { label: 'Collections', value: 'Eleven, since FW 2016' },
        { label: 'Typography', value: 'Futura' },
      ],
      collaborations: [
        { name: 'Boucheron', note: 'Uniforms for the Place Vendôme townhouse reopening' },
        { name: 'Madura', note: 'Appolonie interior capsule, 2019' },
        { name: 'L’Impératrice', note: 'Stage costumes, 2020 tour' },
      ],
    },

    collections: collectionVolumes,

    groups: [
      {
        title: 'Stage costumes',
        subtitle: 'L’Impératrice — 2020 tour',
        images: [
          { src: 'images/brand/limperatrice-tournee2020.jpg', alt: 'L’Impératrice on stage, 2020 tour', format: 'free' },
          { src: 'images/brand/limperatrice-tournee2020-2.jpg', alt: 'L’Impératrice on stage, 2020 tour', format: 'free' },
          { src: 'images/brand/limperatrice-tournee2020-4.jpg', alt: 'L’Impératrice on stage, 2020 tour', format: 'free' },
          { src: 'images/brand/limperatrice-tournee2020-5.jpg', alt: 'L’Impératrice on stage, 2020 tour', format: 'free' },
          { src: 'images/brand/limperatrice-tournee2020-6.jpg', alt: 'L’Impératrice on stage, 2020 tour', format: 'free' },
          { src: 'images/brand/limperatrice-tournee2020-7.jpg', alt: 'L’Impératrice on stage, 2020 tour', format: 'free' },
        ],
      },
    ],

    images: [],
  },

  {
    number: '02',
    slug: 'interior-design',
    title: 'Interior Design',
    subtitle: 'Living',
    intro: 'Madura × Fête Impériale — the Appolonie capsule.',
    cover: 'images/hero-madura.jpg',
    images: [
      {
        src: 'images/hero-madura.jpg',
        alt: 'Madura × Fête Impériale interior, Appolonie capsule',
        caption: 'Madura × Fête Impériale — Appolonie',
        format: 'landscape',
      },
      // TODO — les onze autres prises de vue Madura dépassent la limite de
      // 10 Mo du connecteur Drive (voir README).
    ],
  },

  {
    number: '03',
    slug: 'press',
    title: 'Press',
    subtitle: 'In the media',
    intro: '',
    cover: 'images/sections/press.jpg',
    groups: [
      {
        title: 'Fête Impériale',
        images: [
          {
            src: 'images/press/elle-deco-crush.jpg',
            alt: 'ELLE article on the Madura × Fête Impériale capsule collection',
            caption: 'ELLE — #ELLEDécoCrush',
            format: 'free',
          },
        ],
      },
      {
        title: 'Interior Design',
        images: [
          {
            src: 'images/press/marie-claire-maison-2019-fete-imperiale.jpg',
            alt: 'Marie Claire Maison, October 2019',
            caption: 'Marie Claire Maison — October 2019',
            format: 'free',
          },
          {
            src: 'images/press/marie-claire-maison-2019.jpg',
            alt: 'Marie Claire Maison, October 2019',
            caption: 'Marie Claire Maison — October 2019',
            format: 'free',
          },
          {
            src: 'images/press/fashion-network.jpg',
            alt: 'FashionNetwork article on Fête Impériale and Madura',
            caption: 'FashionNetwork',
            format: 'free',
          },
          // TODO — THE TIMES.pdf reste à convertir en image (voir README).
        ],
      },
    ],
    images: [],
  },

  {
    number: '04',
    slug: 'project',
    title: 'Project',
    subtitle: 'Prints',
    intro: '',
    cover: 'images/sections/project.jpg',

    asciiHero: {
      // Négatif du motif : le trait est clair sur fond noir, ce que le
      // rendu ASCII sait amplifier (voir le réglage brightnessBoost).
      src: 'images/imprimes/corps-nus-negatif.jpg',
      alt: 'Corps nus — motif rendu en caractères ASCII',
    },

    images: [
      {
        src: 'images/imprimes/corps-nus.jpg',
        alt: 'Corps nus — repeating line-drawn print',
        caption: 'Corps nus — 39 × 35 cm',
        format: 'free',
      },
      {
        src: 'images/imprimes/foulard-corsica-100x100.jpg',
        alt: 'Corsica — printed scarf',
        caption: 'Corsica — 100 × 100 cm',
        format: 'free',
      },
      {
        src: 'images/imprimes/grand-pelican-bay-140x140cm.jpg',
        alt: 'Pelican Bay — print',
        caption: 'Grand Pelican Bay — 140 × 140 cm',
        format: 'free',
      },
      {
        src: 'images/imprimes/petit-pelican-bay-100x140cm.jpg',
        alt: 'Pelican Bay — print',
        caption: 'Petit Pelican Bay — 100 × 140 cm',
        format: 'free',
      },
    ],
  },
];

/** Link to a chapter. Relative, so it works whatever the host. */
export const href = (slug) => `${slug}.html`;

export const homeHref = 'index.html';

export const contact = {
  email: '',
  instagram: '',
  brandSite: '',
};
