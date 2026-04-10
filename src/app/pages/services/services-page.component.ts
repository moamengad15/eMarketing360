import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-services-page',
  template: `
    <app-page-layout
      eyebrow="ما نقدمه"
      title="خدماتنا"
      subtitle="حلول تسويقية متكاملة تلبي كل احتياجات مشروعك الرقمي">
      <app-services></app-services>
    </app-page-layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesPageComponent {}
