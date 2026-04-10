import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-why-us-page',
  template: `
    <app-page-layout
      eyebrow="الميزة التنافسية"
      title="لماذا e-Marketing360 مناسبة لشركات مرحلة النمو؟"
      subtitle="نفهم مرحلة نموك ونصمم حلولاً تسويقية تناسبها تماماً">

      <div class="why-us-content">

        <!-- Value props grid -->
        <div class="why-grid">
          <div class="why-card" *ngFor="let item of whyItems">
            <div class="why-icon"><i [class]="item.icon"></i></div>
            <h3 class="why-title">{{ item.title }}</h3>
            <p class="why-desc">{{ item.desc }}</p>
          </div>
        </div>

        <!-- Stats strip -->
        <div class="why-stats-strip">
          <div class="why-stat" *ngFor="let s of stats">
            <span class="why-stat-num">{{ s.value }}</span>
            <span class="why-stat-label">{{ s.label }}</span>
          </div>
        </div>

        <!-- CTA -->
        <div class="why-cta-block">
          <h2>جاهز لبدء رحلتك؟</h2>
          <p>تواصل معنا اليوم واحصل على استشارة مجانية لتطوير مشروعك.</p>
          <a href="mailto:info@e-marketing360.com" class="btn btn-primary">
            تواصل معنا <i class="fa-solid fa-envelope"></i>
          </a>
        </div>

      </div>
    </app-page-layout>
  `,
  styles: [`
    .why-us-content { display: flex; flex-direction: column; gap: 4rem; }
    .why-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
    }
    .why-card {
      padding: 2rem;
      border-radius: 12px;
      background: #f8faff;
      border: 1px solid #e8eeff;
      display: flex;
      flex-direction: column;
      gap: .75rem;
      transition: box-shadow .25s;
    }
    .why-card:hover { box-shadow: 0 4px 24px rgba(37,99,235,.1); }
    .why-icon {
      width: 52px; height: 52px;
      border-radius: 50%;
      background: rgba(37,99,235,.12);
      color: #2563eb;
      display: flex; align-items: center; justify-content: center;
      font-size: 1.3rem;
    }
    .why-title { font-size: 1rem; font-weight: 700; margin: 0; }
    .why-desc  { font-size: .87rem; color: #64748b; line-height: 1.7; margin: 0; }
    .why-stats-strip {
      display: flex;
      justify-content: center;
      gap: 3rem;
      flex-wrap: wrap;
      padding: 2.5rem;
      background: #2563eb;
      border-radius: 16px;
    }
    .why-stat { text-align: center; color: #fff; }
    .why-stat-num { display: block; font-size: 2.5rem; font-weight: 800; }
    .why-stat-label { font-size: .85rem; opacity: .8; }
    .why-cta-block { text-align: center; padding: 2rem 0; }
    .why-cta-block h2 { font-size: 1.8rem; margin-bottom: .75rem; }
    .why-cta-block p  { color: #64748b; margin-bottom: 1.5rem; }
    @media(max-width: 768px) { .why-grid { grid-template-columns: 1fr; } }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhyUsPageComponent {
  readonly whyItems = [
    { icon: 'fa-solid fa-rocket', title: 'خبرة +15 عاماً',             desc: 'فريق متمرس بأسواق الخليج والعالم العربي مع سجل حافل من المشاريع الناجحة.' },
    { icon: 'fa-solid fa-chart-line', title: 'نتائج مقيّسة',            desc: 'نعمل بمنهجية مبنية على البيانات لتضمن لك ROI حقيقي وقابل للقياس.' },
    { icon: 'fa-solid fa-handshake', title: 'شراكة استراتيجية',         desc: 'لسنا مجرد مزود خدمة — نحن شريكك التسويقي في كل مرحلة من مراحل النمو.' },
    { icon: 'fa-solid fa-palette', title: 'إبداع بلا حدود',              desc: 'نصنع محتوى ومواد بصرية تتميز وتصنع الفارق في سوق مزدحم بالمنافسين.' },
    { icon: 'fa-solid fa-globe', title: 'حضور رقمي شامل',               desc: 'من المواقع إلى السوشيال ميديا والسيو — نغطي كل نقاط تواصلك مع عملائك.' },
    { icon: 'fa-solid fa-headset', title: 'دعم مستمر 24/7',              desc: 'فريقنا دائماً متاح للإجابة على استفساراتك ودعم نموك في أي وقت.' },
  ];

  readonly stats = [
    { value: '+127', label: 'عميل راضٍ' },
    { value: '+155', label: 'مشروع منجز' },
    { value: '+15',  label: 'سنة خبرة' },
    { value: '+12',  label: 'دولة عملنا فيها' },
  ];
}
