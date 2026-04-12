import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-about-page',
  template: `
    <app-page-layout
      [eyebrow]="'about.page.eyebrow' | t"
      [title]="'about.page.title' | t"
      [subtitle]="'about.page.subtitle' | t">
      <app-about></app-about>
      <section class="section-wrapper section-alt">
        <app-stats></app-stats>
      </section>
    </app-page-layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPageComponent {}
