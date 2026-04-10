import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-seo-page',
  template: `
    <app-page-layout
      eyebrow="خدماتنا"
      title="تحسين محركات البحث (SEO)"
      subtitle="تصدّر نتائج البحث وجذب عملاء جدد بدون إعلانات مدفوعة">
      <div class="service-detail-content">
        <div class="service-features-grid">
          <div class="service-feature-card" *ngFor="let item of features">
            <div class="sf-icon"><i class="fa-solid fa-magnifying-glass" style="color:#9333ea"></i></div>
            <h3 class="sf-title">{{ item.title }}</h3>
            <p class="sf-desc">{{ item.desc }}</p>
          </div>
        </div>
        <div class="service-cta-block" style="background:#9333ea;">
          <div class="service-cta-inner">
            <h2>هل أنت جاهز للبدء؟</h2>
            <p>تواصل معنا للحصول على عرض سعر مجاني</p>
            <a href="mailto:info@e-marketing360.com" class="btn btn-white">تواصل معنا</a>
          </div>
        </div>
      </div>
    </app-page-layout>
  `,
  styles: [`
    .service-detail-content { display:flex; flex-direction:column; gap:3rem; }
    .service-features-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1.25rem; }
    .service-feature-card { padding:1.75rem; border-radius:12px; background:#f8faff; border:1px solid #e8eeff; }
    .sf-icon { font-size:1.5rem; margin-bottom:.65rem; }
    .sf-title { font-size:.97rem; font-weight:700; margin:0 0 .35rem; }
    .sf-desc  { font-size:.85rem; color:#64748b; line-height:1.65; margin:0; }
    .service-cta-block { border-radius:16px; padding:3rem 2rem; text-align:center; }
    .service-cta-inner h2 { font-size:1.7rem; color:#fff; margin-bottom:.7rem; }
    .service-cta-inner p  { color:rgba(255,255,255,.8); margin-bottom:1.4rem; }
    .btn-white { background:#fff; color:#1e3a8a; font-weight:700; }
    @media(max-width:768px) { .service-features-grid { grid-template-columns:1fr; } }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeoPageComponent {
  readonly features = [
    { title: 'تحليل الكلمات المفتاحية', desc: 'بحث شامل عن الكلمات التي يبحث عنها عملاؤك فعلاً.' },
    { title: 'تحسين الصفحة On-Page SEO', desc: 'تحسين العناوين والمحتوى والصور وبنية الروابط الداخلية.' },
    { title: 'بناء الروابط الخارجية', desc: 'اكتساب روابط عالية الجودة من مواقع موثوقة في مجالك.' },
    { title: 'SEO التقني', desc: 'تحسين سرعة الموقع وملف XML Sitemap و robots.txt وأكثر.' },
    { title: 'محتوى محسّن للبحث', desc: 'كتابة مقالات ومحتوى موقع مُحسَّن لمحركات البحث.' },
    { title: 'تقارير شهرية مفصّلة', desc: 'تتبع الترتيب والزيارات العضوية والكلمات المفتاحية شهرياً.' }
  ];
}
