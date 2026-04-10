import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-about-page',
  template: `
    <app-page-layout
      eyebrow="تعرّف علينا"
      title="من نحن"
      subtitle="وكالة تسويق إلكتروني متكاملة تساعد الشركات على النمو والتوسع في السوق الرقمي">
      <app-about></app-about>
      <section class="section-wrapper section-alt">
        <app-stats></app-stats>
      </section>
    </app-page-layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPageComponent {}
