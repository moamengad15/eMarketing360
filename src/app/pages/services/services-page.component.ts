import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-services-page',
  template: `
    <app-page-layout
      [eyebrow]="'svc.page.eyebrow' | t"
      [title]="'svc.page.title' | t"
      [subtitle]="'svc.page.subtitle' | t">
      <app-services></app-services>
    </app-page-layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesPageComponent {}
