// ---------------------------------------------------------------------------
// Site content. Every piece of text and every image path lives here, so the
// pages themselves never need to be edited to change a label or add a photo.
//
// Images: drop the originals in assets-src/, run `npm run images`, then point
// to the optimised file under images/.
//
// Gallery image `format`:
//   'portrait' → cropped to 4:5   'landscape' → cropped to 16:10
//   'free'     → keeps the file's own proportions (best for artwork and scans)
// ---------------------------------------------------------------------------

export const identity = {
  firstName: 'Laura',
  lastName: 'Gauthier-Petit',
  titles: ['Art Direction', 'Design'],

  // TODO — still a placeholder. Needs a landscape photo (see README).
  heroImage: 'images/hero.jpg',

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
    // TODO — still a placeholder, waiting on the Madura photographs.
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
    images: [
      {
        src: 'images/press/elle-deco-crush.jpg',
        alt: 'ELLE article on the Madura x Fête Impériale capsule collection',
        caption: 'ELLE — #ELLEDécoCrush',
        format: 'free',
      },
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
    ],
  },
  {
    number: '04',
    slug: 'project',
    title: 'Project',
    subtitle: 'Works',
    intro: '',
    cover: 'images/sections/project.jpg',
    images: [
      {
        src: 'images/project/corps-nus.jpg',
        alt: 'Corps nus — repeating line-drawn print',
        caption: 'Corps nus — 39 × 35 cm',
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
