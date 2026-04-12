import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-why-us-page',
  template: `
    <app-page-layout
      [eyebrow]="'why.page.eyebrow' | t"
      [title]="'why.page.title' | t"
      [subtitle]="'why.page.subtitle' | t">

      <div class="why-us-content">

        <div class="why-grid">
          <div class="why-card" *ngFor="let item of whyItems; trackBy: trackWhy">
            <div class="why-icon"><i [class]="item.icon"></i></div>
            <h3 class="why-title">{{ item.titleKey | t }}</h3>
            <p class="why-desc">{{ item.descKey | t }}</p>
          </div>
        </div>

        <div class="why-stats-strip">
          <div class="why-stat" *ngFor="let s of stats; trackBy: trackStat">
            <span class="why-stat-num">{{ s.value }}</span>
            <span class="why-stat-label">{{ s.labelKey | t }}</span>
          </div>
        </div>

        <div class="why-cta-block">
          <h2>{{ 'why.cta.title' | t }}</h2>
          <p>{{ 'why.cta.desc' | t }}</p>
          <a href="mailto:info@e-marketing360.com" class="btn btn-primary">
            {{ 'why.cta.btn' | t }} <i class="fa-solid fa-envelope"></i>
          </a>
        </div>

      </div>
    </app-page-layout>
  `,
  styles: [`
    .why-us-content { display: flex; flex-direction: column; gap: 4rem; }
    .why-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
    }
    .why-card {
      padding: 2rem;
      border-radius: 12px;
      background: #f8faff;
      border: 1px solid #e8eeff;
      display: flex;
      flex-direction: column;
      gap: .75rem;
      transition: box-shadow .25s;
    }
    .why-card:hover { box-shadow: 0 4px 24px rgba(37,99,235,.1); }
    .why-icon {
      width: 52px; height: 52px;
      border-radius: 50%;
      background: rgba(37,99,235,.12);
      color: #2563eb;
      display: flex; align-items: center; justify-content: center;
      font-size: 1.3rem;
    }
    .why-title { font-size: 1rem; font-weight: 700; margin: 0; }
    .why-desc  { font-size: .87rem; color: #64748b; line-height: 1.7; margin: 0; }
    .why-stats-strip {
      display: flex;
      justify-content: center;
      gap: 3rem;
      flex-wrap: wrap;
      padding: 2.5rem;
      background: #2563eb;
      border-radius: 16px;
    }
    .why-stat { text-align: center; color: #fff; }
    .why-stat-num { display: block; font-size: 2.5rem; font-weight: 800; }
    .why-stat-label { font-size: .85rem; opacity: .8; }
    .why-cta-block { text-align: center; padding: 2rem 0; }
    .why-cta-block h2 { font-size: 1.8rem; margin-bottom: .75rem; }
    .why-cta-block p  { color: #64748b; margin-bottom: 1.5rem; }
    @media(max-width: 768px) { .why-grid { grid-template-columns: 1fr; } }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhyUsPageComponent {
  readonly whyItems = [
    { icon: 'fa-solid fa-rocket', titleKey: 'why.i1t', descKey: 'why.i1d' },
    { icon: 'fa-solid fa-chart-line', titleKey: 'why.i2t', descKey: 'why.i2d' },
    { icon: 'fa-solid fa-handshake', titleKey: 'why.i3t', descKey: 'why.i3d' },
    { icon: 'fa-solid fa-palette', titleKey: 'why.i4t', descKey: 'why.i4d' },
    { icon: 'fa-solid fa-globe', titleKey: 'why.i5t', descKey: 'why.i5d' },
    { icon: 'fa-solid fa-headset', titleKey: 'why.i6t', descKey: 'why.i6d' },
  ];

  readonly stats = [
    { value: '+127', labelKey: 'why.s1l' },
    { value: '+155', labelKey: 'why.s2l' },
    { value: '+15', labelKey: 'why.s3l' },
    { value: '+12', labelKey: 'why.s4l' },
  ];

  trackWhy(_: number, w: { titleKey: string }): string {
    return w.titleKey;
  }

  trackStat(_: number, s: { labelKey: string }): string {
    return s.labelKey;
  }
}
