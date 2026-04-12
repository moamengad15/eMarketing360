import { Component, ChangeDetectionStrategy } from '@angular/core';

export interface Service {
  icon: string;
  listKey: string;
  ctaUrl: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {
  readonly allServices: Service[] = [
    {
      icon: 'fa-solid fa-cart-shopping',
      listKey: 'ecom',
      ctaUrl: '/services/ecommerce',
    },
    {
      icon: 'fa-solid fa-bullhorn',
      listKey: 'social',
      ctaUrl: '/services/social-media',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      listKey: 'seo',
      ctaUrl: '/services/seo',
    },
    {
      icon: 'fa-solid fa-globe',
      listKey: 'web',
      ctaUrl: '/services/website-design',
    },
    {
      icon: 'fa-solid fa-pen-ruler',
      listKey: 'brand',
      ctaUrl: '/services/brand-identity',
    },
    {
      icon: 'fa-solid fa-camera',
      listKey: 'photo',
      ctaUrl: '/services/photography',
    },
  ];

  svcTitleKey(s: Service): string {
    return `svc.list.${s.listKey}.title`;
  }
  svcDescKey(s: Service): string {
    return `svc.list.${s.listKey}.desc`;
  }

  trackByListKey(_: number, s: Service): string {
    return s.listKey;
  }
}
