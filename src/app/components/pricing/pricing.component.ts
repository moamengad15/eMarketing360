import { Component, ChangeDetectionStrategy } from '@angular/core';

export interface PricingFeature { text: string; }
export interface PricingPlan {
  title: string;
  subtitle: string;
  price: string;
  originalPrice: string;
  description: string;
  features: PricingFeature[];
  ctaLabel: string;
  theme: 'light' | 'dark' | 'featured';
}

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingComponent {
  readonly contactEmail = 'mailto:info@e-marketing360.com';

  readonly plans: PricingPlan[] = [
    {
      title: 'باقة انطلاقة',
      subtitle: '(السعر المخفض لأول 7 عملاء فقط)',
      price: '9,999 ر.س',
      originalPrice: '13,500 ر.س',
      description: 'مناسبة لـ: رواد الأعمال، أفراد، مشاريع صغيرة وتجارب السوق',
      features: [
        { text: 'تصميم هوية بصرية أساسية (شعار + ألوان + خط).' },
        { text: 'تصميم صفحة هبوط أنيقة وجذابة. أو تصميم واجهة متجر إلكتروني (سلة/زد)' },
        { text: '15 منشور احترافي: 12 ثابت + 3 موشن جرافيك' },
        { text: 'إدارة إعلانات احترافية لمدة شهر كامل.' },
        { text: 'خطة محتوى أساسية.' },
        { text: 'تقرير أداء شهري مبسط.' },
      ],
      ctaLabel: 'انطلق الآن',
      theme: 'light',
    },
    {
      title: 'باقة ارتقاء',
      subtitle: '(السعر المخفض لأول 5 عملاء فقط)',
      price: '18,500 ر.س',
      originalPrice: '24,000 ر.س',
      description: 'مناسبة لـ: المشاريع التي تسعى لتوسيع نطاقها وزيادة تواجدها الرقمي بشكل احترافي.',
      features: [
        { text: 'تصميم موقع الكتروني متعدد الصفحات (4 صفحات).' },
        { text: '35 منشور: 25 ثابت + 10 موشن جرافيك.' },
        { text: 'إدارة إعلانات متقدمة لمدة شهرين (Google + Meta).' },
        { text: 'خطة محتوى مفصلة واحترافية.' },
        { text: 'تقارير أداء شهرية دقيقة.' },
        { text: 'جلستان استشاريتان لتطوير استراتيجيتك التسويقية.' },
        { text: 'تصميم هوية تجارية احترافية كاملة.' },
      ],
      ctaLabel: 'ارتقِ الآن',
      theme: 'dark',
    },
    {
      title: 'باقة قمة',
      subtitle: '(السعر المخفض لأول 3 عملاء فقط)',
      price: '23,000 ر.س',
      originalPrice: '30,000 ر.س',
      description: 'مناسبة لـ: المشاريع التي تهدف لتصدر المنافسة والتوسع الكبير وتحقيق نتائج استثنائية.',
      features: [
        { text: 'موقع إلكتروني متكامل (لغتين)' },
        { text: '45 منشور: 30 ثابت + 15 موشن جرافيك' },
        { text: 'إدارة إعلانات متقدمة لمدة شهرين + حملة خاصة متكاملة' },
        { text: '3 جلسات استراتيجية احترافية.' },
        { text: 'إدارة الردود والمتابعة المستمرة للمنصات.' },
        { text: 'تقارير تفصيلية وتحليل شامل للمنافسين.' },
        { text: 'خطة محتوى موسعة + ملف PDF احترافي' },
        { text: 'فيديو تعريفي (موشن جرافيك 30 ثانية) هدية.' },
        { text: 'هوية تجارية متكاملة + كتيب إرشادات الهوية' },
        { text: 'بونص: تصميم بروشور PDF أو عرض تقديمي رقمي.' },
      ],
      ctaLabel: 'كن على القمة الآن',
      theme: 'featured',
    },
  ];

  trackByTitle(_: number, p: PricingPlan): string { return p.title; }
  trackByText(_: number, f: PricingFeature): string { return f.text; }
}
