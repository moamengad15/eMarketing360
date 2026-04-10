import { Component, ChangeDetectionStrategy } from '@angular/core';

export interface Testimonial {
  headline: string; content: string;
  avatarUrl: string; authorName: string; authorRole: string;
}
export interface TestimonialTab { label: string; id: string; testimonials: Testimonial[]; }

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent {
  activeTabId = 'tab-0';
  activeSlideIndex = 0;

  private readonly allTestimonials: Testimonial[] = [
    {
      headline: 'تصميم وبرمجة موقع الكتروني',
      content: 'توصية قوية من منظمة حفظ النعمة لشركة e-Marketing360. عملنا معهم على تصميم موقعنا الإلكتروني الجديد بنجاح، ونحن سعداء بالنتائج. خدماتهم شملت تصميم موقع جذاب يعبر عن قيمنا، وموقع سهل الاستخدام يتوافق مع جميع الأجهزة، إلى جانب دعمهم الممتاز طوال العملية.',
      avatarUrl: 'https://graphica-marketing.com/wp-content/uploads/2022/03/images.png',
      authorName: 'محمد طعمة',
      authorRole: 'مسؤول الإعلام في منظمة حفظ النعمة',
    },
    {
      headline: 'هوية بصرية كاملة',
      content: 'نشكر شركة e-Marketing360 على مهنيتها العالية وتقديمها خدمات استثنائية في التصميم والتسويق الرقمي. حققت e-Marketing360 لنا نجاحات كبيرة من خلال تصميم هوية بصرية وموقع إلكتروني يعبر عن رؤيتنا، إضافة إلى حلول تسويقية مبتكرة في وقت قصير.',
      avatarUrl: 'https://graphica-marketing.com/wp-content/uploads/2022/03/feedback-02-1.jpg',
      authorName: 'صلة للخدمات التعليمية',
      authorRole: 'منصة متخصصة للطلاب',
    },
    {
      headline: 'تصميم وبرمجة موقع الكتروني',
      content: 'عملنا مع فريق e-Marketing360 على تطوير موقع تعريفي ديناميكي يعكس مكانتنا كأول شركة سعودية في مجال الذكاء الاصطناعي التوليدي. أظهروا احترافية عالية في التصميم والبرمجة وكتابة المحتوى، مع دعم فني فعال ومرونة في التعامل مع التعديلات.',
      avatarUrl: 'https://graphica-marketing.com/wp-content/uploads/2022/03/feedback-01.jpg',
      authorName: 'علي بن إبراهيم أبوحرب',
      authorRole: 'مؤسس شركة ديتومّايند',
    },
  ];

  readonly tabs: TestimonialTab[] = [
    { label: 'تصميم المواقع',           id: 'tab-0', testimonials: this.allTestimonials },
    { label: 'تصميم المتاجر',           id: 'tab-1', testimonials: this.allTestimonials },
    { label: 'تحسين محركات البحث',      id: 'tab-2', testimonials: this.allTestimonials },
    { label: 'تصميم الهويات التجارية',  id: 'tab-3', testimonials: this.allTestimonials },
  ];

  get activeTab(): TestimonialTab { return this.tabs.find(t => t.id === this.activeTabId) || this.tabs[0]; }
  get activeTestimonial(): Testimonial { return this.activeTab.testimonials[this.activeSlideIndex]; }

  selectTab(id: string): void { this.activeTabId = id; this.activeSlideIndex = 0; }

  prevSlide(): void {
    const len = this.activeTab.testimonials.length;
    this.activeSlideIndex = (this.activeSlideIndex - 1 + len) % len;
  }
  nextSlide(): void {
    const len = this.activeTab.testimonials.length;
    this.activeSlideIndex = (this.activeSlideIndex + 1) % len;
  }

  trackById(_: number, t: TestimonialTab): string { return t.id; }
}
