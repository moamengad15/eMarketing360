import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-page-layout',
  template: `
    <div class="sub-page-layout">
      <!-- Page header banner -->
      <div class="page-hero-banner">
        <div class="page-container">
          <div class="page-hero-inner">
            <p class="page-hero-eyebrow" *ngIf="eyebrow">{{ eyebrow }}</p>
            <h1 class="page-hero-title">{{ title }}</h1>
            <p class="page-hero-subtitle" *ngIf="subtitle">{{ subtitle }}</p>
          </div>
        </div>
      </div>
      <!-- Page content -->
      <div class="sub-page-content page-container">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .sub-page-layout { min-height: 60vh; }
    .page-hero-banner {
      background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
      padding: 80px 0 60px;
      margin-top: var(--header-h, 102px);
      text-align: center;
    }
    .page-hero-inner { max-width: 700px; margin: 0 auto; }
    .page-hero-eyebrow {
      font-size: .8rem;
      letter-spacing: .12em;
      text-transform: uppercase;
      color: rgba(255,255,255,.7);
      margin-bottom: .5rem;
      font-weight: 600;
    }
    .page-hero-title {
      font-size: clamp(1.8rem, 4vw, 3rem);
      font-weight: 800;
      color: #fff;
      margin: 0 0 .75rem;
      line-height: 1.2;
    }
    .page-hero-subtitle {
      font-size: .95rem;
      color: rgba(255,255,255,.8);
      line-height: 1.7;
      margin: 0;
    }
    .sub-page-content { padding: 60px 32px 80px; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageLayoutComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() eyebrow = '';
}
