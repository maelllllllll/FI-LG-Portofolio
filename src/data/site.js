// ---------------------------------------------------------------------------
// Contenu du site. Tout ce qui est texte, titre ou chemin d'image se modifie
// ici : pas besoin de toucher aux pages elles-mêmes.
// Les images se rangent dans /public/images/ (voir scripts/optimize-images.mjs).
// ---------------------------------------------------------------------------

export const identite = {
  prenom: 'Laura',
  nom: 'Gauthier-Petit',
  // TODO à confirmer avec Mael : titres exacts à afficher sous le nom.
  titres: [
    'Fondatrice & directrice artistique',
    'Créatrice textile',
    'Designer',
  ],
  // Grande image de fond de la page d'accueil. À remplacer par le fichier choisi.
  imageFond: '/images/hero.jpg',
  // Portrait, plus bas sur la page d'accueil.
  portrait: '/images/portrait.jpg',
  portraitLegende: '',
  bio: '',
};

export const sections = [
  {
    numero: '01',
    slug: 'fete-imperiale',
    titre: 'Fête Impériale',
    sousTitre: 'La marque',
    chapo:
      'Maison de prêt-à-porter féminin fondée en 2015. Un vestiaire graphique, ' +
      'né du dessin et de l’impression textile.',
    couverture: '/images/sections/fete-imperiale.jpg',
    images: [],
  },
  {
    numero: '02',
    slug: 'design-interieur',
    titre: 'Design d’intérieur',
    sousTitre: 'Art de vivre',
    chapo:
      'Le passage du vêtement à l’intérieur : motifs, velours et matières, ' +
      'pensés pour l’espace domestique.',
    couverture: '/images/sections/design-interieur.jpg',
    images: [],
  },
  {
    numero: '03',
    slug: 'presse',
    titre: 'Presse',
    sousTitre: 'Ils en parlent',
    chapo: 'Parutions et revue de presse.',
    couverture: '/images/sections/presse.jpg',
    images: [],
  },
  {
    numero: '04',
    slug: 'project',
    titre: 'Project',
    sousTitre: 'Travaux',
    chapo: 'Dessins, séries et pièces uniques.',
    couverture: '/images/sections/project.jpg',
    images: [],
  },
];

export const contact = {
  email: '',
  instagram: '',
  siteMarque: '',
};
