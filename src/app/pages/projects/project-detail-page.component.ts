import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  isKnownProjectSlug,
  projectTitleKeyForSlug,
  projectBodyKeyForSlug,
  projectHeroImageForSlug,
} from '../../shared/data/projects.data';

@Component({
  selector: 'app-project-detail-page',
  template: `
    <section class="section-wrapper">
      <div class="page-container">
        <a routerLink="/projects" class="btn btn-outline btn-sm" style="margin-bottom:1rem;display:inline-block;">
          {{ 'project.back' | t }}
        </a>
        <img
          [src]="heroImage"
          [alt]="titleKey | t"
          style="width:100%;max-height:420px;object-fit:cover;border-radius:12px;margin-bottom:1.5rem;display:block;" />
        <h1 style="margin-bottom:1rem;">{{ titleKey | t }}</h1>
        <div class="project-detail-body" [innerHTML]="bodyKey | t"></div>
      </div>
    </section>
  `,
  styles: [`
    .project-detail-body { font-size: .95rem; line-height: 1.8; color: var(--grey-text, #64748b); }
    .project-detail-body p { margin-bottom: 1rem; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetailPageComponent implements OnInit {
  slug = '';
  titleKey = '';
  bodyKey = '';
  heroImage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (!isKnownProjectSlug(slug)) {
      void this.router.navigate(['/projects']);
      return;
    }
    this.slug = slug!;
    const tk = projectTitleKeyForSlug(this.slug);
    if (!tk) {
      void this.router.navigate(['/projects']);
      return;
    }
    this.titleKey = tk;
    this.bodyKey = projectBodyKeyForSlug(this.slug);
    this.heroImage = projectHeroImageForSlug(this.slug);
    this.cdr.markForCheck();
  }
}
