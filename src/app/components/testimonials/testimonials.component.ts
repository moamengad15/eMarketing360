import { Component, ChangeDetectionStrategy } from '@angular/core';

export interface TestimonialTab {
  labelKey: string;
  id: string;
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent {
  activeTabId = 'tab-0';
  activeSlideIndex = 0;

  readonly testimonialIds = ['t1', 't2', 't3'] as const;

  readonly tabs: TestimonialTab[] = [
    { labelKey: 'testimonials.tab0', id: 'tab-0' },
    { labelKey: 'testimonials.tab1', id: 'tab-1' },
    { labelKey: 'testimonials.tab2', id: 'tab-2' },
    { labelKey: 'testimonials.tab3', id: 'tab-3' },
  ];

  readonly avatars: Record<string, string> = {
    t1: 'https://graphica-marketing.com/wp-content/uploads/2022/03/images.png',
    t2: 'https://graphica-marketing.com/wp-content/uploads/2022/03/feedback-02-1.jpg',
    t3: 'https://graphica-marketing.com/wp-content/uploads/2022/03/feedback-01.jpg',
  };

  get activeTid(): string {
    return this.testimonialIds[this.activeSlideIndex];
  }

  k(part: 'headline' | 'content' | 'name' | 'role'): string {
    return `testimonials.${this.activeTid}.${part}`;
  }

  selectTab(id: string): void {
    this.activeTabId = id;
    this.activeSlideIndex = 0;
  }

  prevSlide(): void {
    const len = this.testimonialIds.length;
    this.activeSlideIndex = (this.activeSlideIndex - 1 + len) % len;
  }

  nextSlide(): void {
    const len = this.testimonialIds.length;
    this.activeSlideIndex = (this.activeSlideIndex + 1) % len;
  }

  trackById(_: number, t: TestimonialTab): string {
    return t.id;
  }
}
