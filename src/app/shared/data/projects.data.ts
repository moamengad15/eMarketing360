/** Home portfolio + archive — original media URLs; navigation uses in-app routes only (slug). */

export interface PortfolioHomeItem {
  id: string;
  slug: string;
  filterKey: string;
  imageUrl: string;
  hoverImageUrl: string;
  lightboxImages: string[];
}

const G = 'https://graphica-marketing.com/wp-content/uploads';

export const PORTFOLIO_HOME_ITEMS: PortfolioHomeItem[] = [
  {
    id: 'p1',
    slug: 'kingdom-palmae',
    filterKey: 'social',
    imageUrl: `${G}/2025/05/kingdom-palmae-cover.webp`,
    hoverImageUrl: `${G}/2025/05/kingdom-palmae-01.webp`,
    lightboxImages: [`${G}/2025/05/kingdom-palmae-cover.webp`, `${G}/2025/05/kingdom-palmae-01.webp`],
  },
  {
    id: 'p2',
    slug: 'labaniyah',
    filterKey: 'ecommerce',
    imageUrl: `${G}/2025/06/Artboard-2-1920x2400.avif`,
    hoverImageUrl: `${G}/2025/06/Artboard-1-3-1920x2400.jpg`,
    lightboxImages: [
      `${G}/2025/06/Artboard-2-1920x2400.avif`,
      `${G}/2025/06/Artboard-1-3-1920x2400.jpg`,
      `${G}/2025/06/Artboard-3-3-1920x1560.jpg`,
    ],
  },
  {
    id: 'p3',
    slug: 'nasser-al-krayaan',
    filterKey: 'profile',
    imageUrl: `${G}/2025/05/nasser-cover.webp`,
    hoverImageUrl: `${G}/2025/05/nasser-01.webp`,
    lightboxImages: [`${G}/2025/05/nasser-cover.webp`, `${G}/2025/05/nasser-01.webp`],
  },
  {
    id: 'p4',
    slug: 'al-saree-curtains',
    filterKey: 'social',
    imageUrl: `${G}/2025/05/011-1024x623.jpg`,
    hoverImageUrl: `${G}/2025/05/041-1920x977.jpg`,
    lightboxImages: [`${G}/2025/05/011-1920x1168.jpg`, `${G}/2025/05/041-1920x977.jpg`, `${G}/2025/05/022-1920x977.jpg`],
  },
  {
    id: 'p5',
    slug: 'wateen-al-hayah',
    filterKey: 'profile',
    imageUrl: `${G}/2025/06/Artboard-1-1-1024x746.jpg`,
    hoverImageUrl: `${G}/2025/06/Artboard-2-1920x1399.jpg`,
    lightboxImages: [
      `${G}/2025/06/Artboard-1-1-1920x1399.jpg`,
      `${G}/2025/06/Artboard-2-1920x1399.jpg`,
      `${G}/2025/06/Artboard-3-1-1920x1399.jpg`,
    ],
  },
  {
    id: 'p6',
    slug: 'datumind',
    filterKey: 'social',
    imageUrl: `${G}/2025/05/01-1024x623.jpg`,
    hoverImageUrl: `${G}/2025/05/021-1920x977.jpg`,
    lightboxImages: [`${G}/2025/05/01-1920x1168.jpg`, `${G}/2025/05/021-1920x977.jpg`, `${G}/2025/05/031-1920x977.jpg`],
  },
];

export interface ProjectsArchiveItem {
  id: string;
  slug: string;
  titleKey: string;
  categoryKey: string;
  filterKey: string;
  imageUrl: string;
  hoverImageUrl: string;
  lightboxImages: string[];
  descriptionKey: string;
  projectNameKey: string;
  projectTypeKey: string;
  locationKey: string;
}

export const PROJECTS_ARCHIVE_ITEMS: ProjectsArchiveItem[] = [
  {
    id: 'labaniyah',
    slug: 'labaniyah',
    titleKey: 'projects.items.labaniyah.title',
    categoryKey: 'projects.items.labaniyah.category',
    filterKey: 'ecommerce',
    imageUrl: `${G}/2025/06/Artboard-2-1920x2400.avif`,
    hoverImageUrl: `${G}/2025/06/Artboard-1-3-1920x2400.jpg`,
    lightboxImages: [
      `${G}/2025/06/Artboard-2-1920x2400.avif`,
      `${G}/2025/06/Artboard-1-3-1920x2400.jpg`,
      `${G}/2025/06/Artboard-3-3-1920x1560.jpg`,
    ],
    descriptionKey: 'projects.items.labaniyah.description',
    projectNameKey: 'projects.items.labaniyah.projectName',
    projectTypeKey: 'projects.items.labaniyah.projectType',
    locationKey: 'projects.items.labaniyah.location',
  },
  {
    id: 'walaa',
    slug: 'al-walaa-trading',
    titleKey: 'projects.items.walaa.title',
    categoryKey: 'projects.items.walaa.category',
    filterKey: 'social',
    imageUrl: `${G}/2025/05/02-1920x977.webp`,
    hoverImageUrl: `${G}/2025/05/03-1-1920x977.webp`,
    lightboxImages: [
      `${G}/2025/05/02-1920x977.webp`,
      `${G}/2025/05/03-1-1920x977.webp`,
      `${G}/2025/05/04-1-1920x977.webp`,
      `${G}/2025/05/05-1-1920x977.webp`,
    ],
    descriptionKey: 'projects.items.walaa.description',
    projectNameKey: 'projects.items.walaa.projectName',
    projectTypeKey: 'projects.items.walaa.projectType',
    locationKey: 'projects.items.walaa.location',
  },
  {
    id: 'alsaree',
    slug: 'al-saree-curtains',
    titleKey: 'projects.items.alsaree.title',
    categoryKey: 'projects.items.alsaree.category',
    filterKey: 'social',
    imageUrl: `${G}/2025/05/011-1024x623.jpg`,
    hoverImageUrl: `${G}/2025/05/041-1920x977.jpg`,
    lightboxImages: [`${G}/2025/05/011-1920x1168.jpg`, `${G}/2025/05/041-1920x977.jpg`, `${G}/2025/05/022-1920x977.jpg`],
    descriptionKey: 'projects.items.alsaree.description',
    projectNameKey: 'projects.items.alsaree.projectName',
    projectTypeKey: 'projects.items.alsaree.projectType',
    locationKey: 'projects.items.alsaree.location',
  },
  {
    id: 'datumind',
    slug: 'datumind',
    titleKey: 'projects.items.datumind.title',
    categoryKey: 'projects.items.datumind.category',
    filterKey: 'social',
    imageUrl: `${G}/2025/05/01-1024x623.jpg`,
    hoverImageUrl: `${G}/2025/05/021-1920x977.jpg`,
    lightboxImages: [`${G}/2025/05/01-1920x1168.jpg`, `${G}/2025/05/021-1920x977.jpg`, `${G}/2025/05/031-1920x977.jpg`],
    descriptionKey: 'projects.items.datumind.description',
    projectNameKey: 'projects.items.datumind.projectName',
    projectTypeKey: 'projects.items.datumind.projectType',
    locationKey: 'projects.items.datumind.location',
  },
  {
    id: 'gti',
    slug: 'gti-car-care',
    titleKey: 'projects.items.gti.title',
    categoryKey: 'projects.items.gti.category',
    filterKey: 'ecommerce',
    imageUrl: `${G}/2025/05/gti-cover-1920x1076.webp`,
    hoverImageUrl: `${G}/2025/05/gti-01-1920x1584.webp`,
    lightboxImages: [`${G}/2025/05/gti-cover-1920x1076.webp`, `${G}/2025/05/gti-01-1920x1584.webp`, `${G}/2025/05/gti-02-1920x1584.webp`],
    descriptionKey: 'projects.items.gti.description',
    projectNameKey: 'projects.items.gti.projectName',
    projectTypeKey: 'projects.items.gti.projectType',
    locationKey: 'projects.items.gti.location',
  },
  {
    id: 'wateen',
    slug: 'wateen-al-hayah',
    titleKey: 'projects.items.wateen.title',
    categoryKey: 'projects.items.wateen.category',
    filterKey: 'profile',
    imageUrl: `${G}/2025/06/Artboard-1-1-1024x746.jpg`,
    hoverImageUrl: `${G}/2025/06/Artboard-2-1920x1399.jpg`,
    lightboxImages: [
      `${G}/2025/06/Artboard-1-1-1920x1399.jpg`,
      `${G}/2025/06/Artboard-2-1920x1399.jpg`,
      `${G}/2025/06/Artboard-3-1-1920x1399.jpg`,
    ],
    descriptionKey: 'projects.items.wateen.description',
    projectNameKey: 'projects.items.wateen.projectName',
    projectTypeKey: 'projects.items.wateen.projectType',
    locationKey: 'projects.items.wateen.location',
  },
  {
    id: 'kingdom',
    slug: 'kingdom-palmae',
    titleKey: 'projects.items.kingdom.title',
    categoryKey: 'projects.items.kingdom.category',
    filterKey: 'social',
    imageUrl: `${G}/2025/05/kingdom-palmae-cover.webp`,
    hoverImageUrl: `${G}/2025/05/kingdom-palmae-01.webp`,
    lightboxImages: [`${G}/2025/05/kingdom-palmae-cover.webp`, `${G}/2025/05/kingdom-palmae-01.webp`],
    descriptionKey: 'projects.items.kingdom.description',
    projectNameKey: 'projects.items.kingdom.projectName',
    projectTypeKey: 'projects.items.kingdom.projectType',
    locationKey: 'projects.items.kingdom.location',
  },
  {
    id: 'nasser',
    slug: 'nasser-al-krayaan',
    titleKey: 'projects.items.nasser.title',
    categoryKey: 'projects.items.nasser.category',
    filterKey: 'profile',
    imageUrl: `${G}/2025/05/nasser-cover.webp`,
    hoverImageUrl: `${G}/2025/05/nasser-01.webp`,
    lightboxImages: [`${G}/2025/05/nasser-cover.webp`, `${G}/2025/05/nasser-01.webp`],
    descriptionKey: 'projects.items.nasser.description',
    projectNameKey: 'projects.items.nasser.projectName',
    projectTypeKey: 'projects.items.nasser.projectType',
    locationKey: 'projects.items.nasser.location',
  },
];

const ALL_PROJECT_SLUGS = new Set<string>([
  ...PORTFOLIO_HOME_ITEMS.map(i => i.slug),
  ...PROJECTS_ARCHIVE_ITEMS.map(i => i.slug),
]);

export function isKnownProjectSlug(slug: string | null): boolean {
  return !!slug && ALL_PROJECT_SLUGS.has(slug);
}

export function projectTitleKeyForSlug(slug: string): string | null {
  const fromArchive = PROJECTS_ARCHIVE_ITEMS.find(i => i.slug === slug);
  if (fromArchive) return fromArchive.titleKey;
  const fromHome = PORTFOLIO_HOME_ITEMS.find(i => i.slug === slug);
  if (fromHome) return `portfolio.items.${fromHome.id}.title`;
  return null;
}

export function projectDescriptionKeyForSlug(slug: string): string | null {
  const fromArchive = PROJECTS_ARCHIVE_ITEMS.find(i => i.slug === slug);
  if (fromArchive) return fromArchive.descriptionKey;
  const fromHome = PORTFOLIO_HOME_ITEMS.find(i => i.slug === slug);
  if (fromHome) return `portfolio.items.${fromHome.id}.description`;
  return null;
}

export function projectBodyKeyForSlug(slug: string): string {
  return `project.body.${slug}`;
}

/** Cover image for project detail page (same as grid card). */
export function projectHeroImageForSlug(slug: string): string {
  const fromArchive = PROJECTS_ARCHIVE_ITEMS.find(i => i.slug === slug);
  if (fromArchive) return fromArchive.imageUrl;
  const fromHome = PORTFOLIO_HOME_ITEMS.find(i => i.slug === slug);
  if (fromHome) return fromHome.imageUrl;
  return '';
}
