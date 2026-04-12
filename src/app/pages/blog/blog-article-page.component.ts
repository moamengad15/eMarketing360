import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { blogPostById, isKnownBlogId } from '../../shared/data/blog-posts.data';

@Component({
  selector: 'app-blog-article-page',
  template: `
    <section class="section-wrapper section-alt">
      <div class="page-container">
        <a routerLink="/blog" class="btn btn-outline btn-sm" style="margin-bottom:1rem;display:inline-block;">
          {{ 'blog.article.back' | t }}
        </a>
        <div class="blog-article-meta" *ngIf="post">
          <time [attr.datetime]="post.dateIso">{{ dateKey | t }}</time>
          <a [routerLink]="post.categoryPath" class="blog-article-cat">{{ categoryKey | t }}</a>
        </div>
        <img
          *ngIf="post"
          [src]="post.imageUrl"
          [srcset]="post.imageSrcset"
          sizes="(max-width: 768px) 100vw, 1024px"
          [alt]="titleKey | t"
          style="width:100%;max-height:420px;object-fit:cover;border-radius:12px;margin:1rem 0 1.5rem;display:block;" />
        <h1 *ngIf="post" style="margin-bottom:1rem;">{{ titleKey | t }}</h1>
        <div *ngIf="post" class="blog-article-body" [innerHTML]="bodyKey | t"></div>
      </div>
    </section>
  `,
  styles: [`
    .blog-article-meta { font-size: .85rem; color: var(--grey-text, #64748b); display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; }
    .blog-article-cat { color: var(--blue, #2563eb); font-weight: 600; text-decoration: none; }
    .blog-article-body { font-size: .95rem; line-height: 1.85; color: var(--grey-text, #64748b); }
    .blog-article-body p { margin-bottom: 1rem; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogArticlePageComponent implements OnInit {
  post: ReturnType<typeof blogPostById> | undefined;
  titleKey = '';
  dateKey = '';
  categoryKey = '';
  bodyKey = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    const raw = this.route.snapshot.paramMap.get('id');
    const id = raw !== null ? parseInt(raw, 10) : NaN;
    if (!Number.isInteger(id) || !isKnownBlogId(id)) {
      void this.router.navigate(['/blog']);
      return;
    }
    this.post = blogPostById(id);
    if (!this.post) {
      void this.router.navigate(['/blog']);
      return;
    }
    this.titleKey = `blog.post${this.post.id}.title`;
    this.dateKey = this.post.dateKey;
    this.categoryKey = `blog.post${this.post.id}.category`;
    this.bodyKey = `blog.article.${this.post.slug}.body`;
    this.cdr.markForCheck();
  }
}
