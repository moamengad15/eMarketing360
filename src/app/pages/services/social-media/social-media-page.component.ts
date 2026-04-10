import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-social-media-page',
  template: `
    <app-page-layout
      eyebrow="خدماتنا"
      title="إدارة السوشيال ميديا"
      subtitle="حضور رقمي قوي ومتسق على كل منصات التواصل الاجتماعي">
      <div class="service-detail-content">
        <div class="service-features-grid">
          <div class="service-feature-card" *ngFor="let item of features">
            <div class="sf-icon"><i class="fa-solid fa-bullhorn" style="color:#e11d48"></i></div>
            <h3 class="sf-title">{{ item.title }}</h3>
            <p class="sf-desc">{{ item.desc }}</p>
          </div>
        </div>
        <div class="service-cta-block" style="background:#e11d48;">
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
export class SocialMediaPageComponent {
  readonly features = [
    { title: 'استراتيجية محتوى مخصصة', desc: 'خطة محتوى شهرية تناسب جمهورك وتعكس هوية علامتك.' },
    { title: 'تصميم بصري احترافي', desc: 'تصاميم جذابة لكل منشور ثابت وموشن جرافيك.' },
    { title: 'إدارة المجتمع Community', desc: 'الرد على التعليقات والرسائل بشكل يومي واحترافي.' },
    { title: 'الإعلانات المدفوعة', desc: 'حملات إعلانية مستهدفة على Instagram وFacebook وTikTok.' },
    { title: 'التقارير والتحليلات', desc: 'تقارير شهرية بمؤشرات الأداء الرئيسية KPIs.' },
    { title: 'التسويق المؤثر', desc: 'ربطك بالمؤثرين المناسبين لجمهورك وميزانيتك.' }
  ];
}
