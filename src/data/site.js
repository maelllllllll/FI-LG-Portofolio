// ---------------------------------------------------------------------------
// Site content. Every piece of text and every image path lives here, so the
// pages themselves never need to be edited to change a label or add a photo.
// Images go in /public/images/ (see scripts/optimize-images.mjs).
// ---------------------------------------------------------------------------

export const identity = {
  firstName: 'Laura',
  lastName: 'Gauthier-Petit',
  titles: ['Art Direction', 'Design'],

  // Full-bleed background image of the home page.
  heroImage: 'images/hero.jpg',

  // Portrait, further down the home page.
  portrait: 'images/portrait.jpg',
  portraitCaption: '',
  bio: '',
};

export const sections = [
  {
    number: '01',
    slug: 'fete-imperiale',
    title: 'Fête Impériale',
    subtitle: 'The brand',
    // Sourced from the press coverage in the Drive folder — to be confirmed.
    intro: 'A womenswear label founded in 2015.',
    cover: 'images/sections/fete-imperiale.jpg',
    images: [],
  },
  {
    number: '02',
    slug: 'interior-design',
    title: 'Interior Design',
    subtitle: 'Living',
    intro: '',
    cover: 'images/sections/interior-design.jpg',
    images: [],
  },
  {
    number: '03',
    slug: 'press',
    title: 'Press',
    subtitle: 'In the media',
    intro: '',
    cover: 'images/sections/press.jpg',
    images: [],
  },
  {
    number: '04',
    slug: 'project',
    title: 'Project',
    subtitle: 'Works',
    intro: '',
    cover: 'images/sections/project.jpg',
    images: [],
  },
];

/** Lien vers une rubrique. Relatif, donc valable quel que soit l'hébergeur. */
export const href = (slug) => `${slug}.html`;

export const homeHref = 'index.html';

export const contact = {
  email: '',
  instagram: '',
  brandSite: '',
};
