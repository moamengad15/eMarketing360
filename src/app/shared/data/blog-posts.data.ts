const img = (id: number) => `assets/images/blog/post-${id}.jpg`;

export interface BlogPostModel {
  id: number;
  slug: string;
  /** Internal route for category (RouterLink). */
  categoryPath: string;
  imageUrl: string;
  thumbUrl: string;
  imageSrcset: string;
  dateIso: string;
  dateKey: string;
}

export const BLOG_POSTS: BlogPostModel[] = [
  {
    id: 1,
    slug: 'photography-and-brand',
    categoryPath: '/services/photography',
    imageUrl: img(1),
    thumbUrl: img(1),
    imageSrcset: `${img(1)} 1x`,
    dateIso: '2026-01-15',
    dateKey: 'blog.post1.date',
  },
  {
    id: 2,
    slug: 'brand-identity-beyond-design',
    categoryPath: '/services/brand-identity',
    imageUrl: img(2),
    thumbUrl: img(2),
    imageSrcset: `${img(2)} 1x`,
    dateIso: '2025-12-21',
    dateKey: 'blog.post2.date',
  },
  {
    id: 3,
    slug: 'ai-and-brand-building',
    categoryPath: '/services/seo',
    imageUrl: img(3),
    thumbUrl: img(3),
    imageSrcset: `${img(3)} 1x`,
    dateIso: '2025-12-21',
    dateKey: 'blog.post3.date',
  },
];

const IDS = new Set(BLOG_POSTS.map(p => p.id));

export function isKnownBlogId(id: number): boolean {
  return Number.isInteger(id) && IDS.has(id);
}

export function blogPostById(id: number): BlogPostModel | undefined {
  return BLOG_POSTS.find(p => p.id === id);
}

/** @deprecated kept for any slug-based lookups */
export function isKnownBlogSlug(slug: string | null): boolean {
  return !!slug && BLOG_POSTS.some(p => p.slug === slug);
}

export function blogPostBySlug(slug: string): BlogPostModel | undefined {
  return BLOG_POSTS.find(p => p.slug === slug);
}
