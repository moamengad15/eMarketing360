import { Component, ChangeDetectionStrategy } from '@angular/core';

export interface Service {
  icon: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaUrl: string; // Angular route path
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
      title: 'تطوير المتاجر الالكترونية',
      description: 'طور متجرك الالكتروني على منصات التجارة الالكترونية سلة و زد بواجهة جذابة وعصرية!',
      ctaLabel: 'اعرف المزيد',
      ctaUrl: '/services/ecommerce',
    },
    {
      icon: 'fa-solid fa-bullhorn',
      title: 'إدارة السوشيال ميديا',
      description: 'نصمّم، نروّج، وندير حساباتك باحتراف لتعزيز حضورك وتحقيق نتائج ملموسة.',
      ctaLabel: 'اعرف المزيد',
      ctaUrl: '/services/social-media',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      title: 'تحسين محركات البحث (SEO)',
      description: 'تفوّق على المنافسين واحصل على ترتيب لموقعك الالكتروني في الصفحة الأولى لـ Google',
      ctaLabel: 'اعرف المزيد',
      ctaUrl: '/services/seo',
    },
    {
      icon: 'fa-solid fa-globe',
      title: 'تطوير المواقع الالكترونية',
      description: 'احصل على موقع الكتروني بتصميم استثنائي متوافق مع كافة الأجهزة مع الدعم التقني المجاني لمدة 6 أشهر.',
      ctaLabel: 'اعرف المزيد',
      ctaUrl: '/services/website-design',
    },
    {
      icon: 'fa-solid fa-pen-ruler',
      title: 'تطوير الهويات البصرية',
      description: 'تصميم شعارات فريدة وألوان متناغمة وخطوط جذابة تعبر عن هويتك وتترك انطباعاً قوياً.',
      ctaLabel: 'اعرف المزيد',
      ctaUrl: '/services/brand-identity',
    },
    {
      icon: 'fa-solid fa-camera',
      title: 'التصوير الاحترافي',
      description: 'اجذب انتباه عملائك بصور احترافية تحكي قصتك وتعبر عن أهدافك.',
      ctaLabel: 'اعرف المزيد',
      ctaUrl: '/services/photography',
    },
  ];

  trackByTitle(_: number, s: Service): string { return s.title; }
}
