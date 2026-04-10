import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-website-design-page',
  template: `
    <app-page-layout
      eyebrow="خدماتنا"
      title="تصميم وتطوير مواقع إلكترونية"
      subtitle="مواقع استثنائية سريعة وآمنة تمثل علامتك التجارية بأفضل صورة">
      <div class="service-detail-content">
        <div class="service-features-grid">
          <div class="service-feature-card" *ngFor="let item of features">
            <div class="sf-icon"><i class="fa-solid fa-globe" style="color:#2563eb"></i></div>
            <h3 class="sf-title">{{ item.title }}</h3>
            <p class="sf-desc">{{ item.desc }}</p>
          </div>
        </div>
        <div class="service-cta-block" style="background:#2563eb;">
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
export class WebsiteDesignPageComponent {
  readonly features = [
    { title: 'تصميم UI/UX احترافي', desc: 'واجهات مستخدم جذابة وسهلة الاستخدام مبنية على أبحاث سلوك المستخدم.' },
    { title: 'تطوير WordPress & React', desc: 'نختار التقنية الأنسب لمشروعك سواء كانت WordPress أو React أو Angular.' },
    { title: 'SEO-Ready من البداية', desc: 'بنية موقع محسّنة لمحركات البحث لضمان ظهورك في أعلى النتائج.' },
    { title: 'تجاوب كامل مع الأجهزة', desc: 'موقعك يبدو مثالياً على الهاتف والتابلت وسطح المكتب.' },
    { title: 'أمان SSL وحماية متقدمة', desc: 'تشفير كامل وحماية من الاختراق لضمان سلامة موقعك وعملائك.' },
    { title: 'دعم تقني مجاني 6 أشهر', desc: 'متابعة وصيانة مجانية لمدة 6 أشهر بعد الإطلاق.' }
  ];
}
