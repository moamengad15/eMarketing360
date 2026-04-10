import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  filterKey: string;
  imageUrl: string;
  hoverImageUrl: string;
  projectUrl: string;
  lightboxImages: string[];
  description: string;
  projectName: string;
  projectType: string;
  location: string;
}

export interface PortfolioFilter { label: string; value: string; }

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioComponent {
  activeFilter = 'all';
  activeItem: PortfolioItem | null = null;
  currentLbIndex = 0;

  readonly filters: PortfolioFilter[] = [
    { label: 'الكل',                              value: 'all' },
    { label: 'تصاميم سوشيال ميديا',               value: 'social' },
    { label: 'تصميم البروفايلات',                  value: 'profile' },
    { label: 'تصميم وتطوير المتاجر الإلكترونية',   value: 'ecommerce' },
  ];

  readonly items: PortfolioItem[] = [
    {
      id: 'p1',
      title: 'سوشيال ميديا | نخلة المملكة',
      category: 'تصاميم سوشيال ميديا',
      filterKey: 'social',
      imageUrl: 'https://graphica-marketing.com/wp-content/uploads/2025/05/kingdom-palmae-cover.webp',
      hoverImageUrl: 'https://graphica-marketing.com/wp-content/uploads/2025/05/kingdom-palmae-01.webp',
      projectUrl: 'https://graphica-marketing.com/project/%d8%b3%d9%88%d8%b4%d9%8a%d8%a7%d9%84-%d9%85%d9%8a%d8%af%d9%8a%d8%a7-%d9%86%d8%ae%d9%84%d8%a9-%d8%a7%d9%84%d9%85%d9%85%d9%84%d9%83%d8%a9/',
      lightboxImages: [
        'https://graphica-marketing.com/wp-content/uploads/2025/05/kingdom-palmae-cover.webp',
        'https://graphica-marketing.com/wp-content/uploads/2025/05/kingdom-palmae-01.webp',
      ],
      description: 'تصميم محتوى سوشيال ميديا متكامل لنخلة المملكة بهوية بصرية أنيقة تعكس جودة المنتج.',
      projectName: 'نخلة المملكة',
      projectType: 'تصميم سوشيال ميديا',
      location: 'المملكة العربية السعودية',
    },
    {
      id: 'p2',
      title: 'متجر إلكتروني | لبانية',
      category: 'تصميم وتطوير المتاجر الإلكترونية',
      filterKey: 'ecommerce',
      imageUrl: 'https://graphica-marketing.com/wp-content/uploads/2025/06/Artboard-2-1920x2400.avif',
      hoverImageUrl: 'https://graphica-marketing.com/wp-content/uploads/2025/06/Artboard-1-3-1920x2400.jpg',
      projectUrl: 'https://graphica-marketing.com/project/%d9%85%d8%aa%d8%ac%d8%b1%d8%a5%d9%84%d9%83%d8%aa%d8%b1%d9%88%d9%86%d9%8a-%d9%84%d8%a8%d8%a7%d9%86%d9%8a%d8%a9/',
      lightboxImages: [
        'https://graphica-marketing.com/wp-content/uploads/2025/06/Artboard-2-1920x2400.avif',
        'https://graphica-marketing.com/wp-content/uploads/2025/06/Artboard-1-3-1920x2400.jpg',
        'https://graphica-marketing.com/wp-content/uploads/2025/06/Artboard-3-3-1920x1560.jpg',
      ],
      description: 'متجر إلكتروني متكامل لعلامة لبانية العُمانية المتخصصة في المنتجات الطبيعية المصنوعة من اللبان.',
      projectName: 'لبانية',
      projectType: 'تصميم متجر إلكتروني',
      location: 'سلطنة عمان',
    },
    {
      id: 'p3',
      title: 'بروفايل تعريفي | ناصر آل كريعان',
      category: 'تصميم البروفايلات',
      filterKey: 'profile',
      imageUrl: 'https://graphica-marketing.com/wp-content/uploads/2025/05/nasser-cover.webp',
      hoverImageUrl: 'https://graphica-marketing.com/wp-content/uploads/2025/05/nasser-01.webp',
      projectUrl: 'https://graphica-marketing.com/project/%d8%a8%d8%b1%d9%88%d9%81%d8%a7%d9%8a%d9%84-%d8%aa%d8%b9%d8%b1%d9%8a%d9%81%d9%8a-%d9%86%d8%a7%d8%b5%d8%b1-%d8%a2%d9%84-%d9%83%d8%b1%d9%8a%d8%b9%d8%a7%d9%86/',
      lightboxImages: [
        'https://graphica-marketing.com/wp-content/uploads/2025/05/nasser-cover.webp',
        'https://graphica-marketing.com/wp-content/uploads/2025/05/nasser-01.webp',
      ],
      description: 'بروفايل تعريفي احترافي بهوية بصرية متكاملة تعكس مكانة ناصر آل كريعان.',
      projectName: 'ناصر آل كريعان',
      projectType: 'تصميم بروفايل تعريفي',
      location: 'المملكة العربية السعودية',
    },
    {
      id: 'p4',
      title: 'سوشيال ميديا | السريع للستائر',
      category: 'تصاميم سوشيال ميديا',
      filterKey: 'social',
      imageUrl: 'https://graphica-marketing.com/wp-content/uploads/2025/05/011-1024x623.jpg',
      hoverImageUrl: 'https://graphica-marketing.com/wp-content/uploads/2025/05/041-1920x977.jpg',
      projectUrl: 'https://graphica-marketing.com/project/%d8%b3%d9%88%d8%b4%d9%8a%d8%a7%d9%84-%d9%85%d9%8a%d8%af%d9%8a%d8%a7-%d8%a7%d9%84%d8%b3%d8%b1%d9%8a%d8%b9-%d9%84%d9%84%d8%b3%d8%aa%d8%a7%d8%a6%d8%b1/',
      lightboxImages: [
        'https://graphica-marketing.com/wp-content/uploads/2025/05/011-1920x1168.jpg',
        'https://graphica-marketing.com/wp-content/uploads/2025/05/041-1920x977.jpg',
        'https://graphica-marketing.com/wp-content/uploads/2025/05/022-1920x977.jpg',
      ],
      description: 'تصميم محتوى سوشيال ميديا لمتجر السريع للستائر مع إبراز جودة وتنوع المنتجات.',
      projectName: 'السريع للستائر',
      projectType: 'تصميم سوشيال ميديا',
      location: 'الإمارات العربية المتحدة',
    },
    {
      id: 'p5',
      title: 'بروفايل تعريفي | وتين الحياة',
      category: 'تصميم البروفايلات',
      filterKey: 'profile',
      imageUrl: 'https://graphica-marketing.com/wp-content/uploads/2025/06/Artboard-1-1-1024x746.jpg',
      hoverImageUrl: 'https://graphica-marketing.com/wp-content/uploads/2025/06/Artboard-2-1920x1399.jpg',
      projectUrl: 'https://graphica-marketing.com/project/%d8%a8%d8%b1%d9%88%d9%81%d8%a7%d9%8a%d9%84-%d8%aa%d8%b9%d8%b1%d9%8a%d9%81%d9%8a-%d9%88%d8%aa%d9%8a%d9%86-%d8%a7%d9%84%d8%ad%d9%8a%d8%a7%d8%a9/',
      lightboxImages: [
        'https://graphica-marketing.com/wp-content/uploads/2025/06/Artboard-1-1-1920x1399.jpg',
        'https://graphica-marketing.com/wp-content/uploads/2025/06/Artboard-2-1920x1399.jpg',
        'https://graphica-marketing.com/wp-content/uploads/2025/06/Artboard-3-1-1920x1399.jpg',
      ],
      description: 'بروفايل تعريفي لتطبيق وتين الحياة المتخصص في الرعاية الصحية والسياحة العلاجية.',
      projectName: 'وتين الحياة',
      projectType: 'تصميم بروفايل تعريفي',
      location: 'المملكة العربية السعودية',
    },
    {
      id: 'p6',
      title: 'سوشيال ميديا | Datumind',
      category: 'تصاميم سوشيال ميديا',
      filterKey: 'social',
      imageUrl: 'https://graphica-marketing.com/wp-content/uploads/2025/05/01-1024x623.jpg',
      hoverImageUrl: 'https://graphica-marketing.com/wp-content/uploads/2025/05/021-1920x977.jpg',
      projectUrl: 'https://graphica-marketing.com/project/%d8%b3%d9%88%d8%b4%d9%8a%d8%a7%d9%84-%d9%85%d9%8a%d8%af%d9%8a%d8%a7-datumind/',
      lightboxImages: [
        'https://graphica-marketing.com/wp-content/uploads/2025/05/01-1920x1168.jpg',
        'https://graphica-marketing.com/wp-content/uploads/2025/05/021-1920x977.jpg',
        'https://graphica-marketing.com/wp-content/uploads/2025/05/031-1920x977.jpg',
      ],
      description: 'محتوى سوشيال ميديا لشركة Datumind المتخصصة في حلول الذكاء الاصطناعي بأسلوب تقني عصري.',
      projectName: 'Datumind',
      projectType: 'تصميم سوشيال ميديا',
      location: 'الإمارات العربية المتحدة',
    },
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  get filteredItems(): PortfolioItem[] {
    if (this.activeFilter === 'all') return this.items;
    return this.items.filter(i => i.filterKey === this.activeFilter);
  }

  setFilter(value: string): void { this.activeFilter = value; }

  openLightbox(item: PortfolioItem): void {
    this.activeItem = item;
    this.currentLbIndex = 0;
    this.cdr.markForCheck();
  }

  closeLightbox(): void {
    this.activeItem = null;
    this.cdr.markForCheck();
  }

  prevImage(): void {
    if (!this.activeItem) return;
    const len = this.activeItem.lightboxImages.length;
    this.currentLbIndex = (this.currentLbIndex - 1 + len) % len;
    this.cdr.markForCheck();
  }

  nextImage(): void {
    if (!this.activeItem) return;
    const len = this.activeItem.lightboxImages.length;
    this.currentLbIndex = (this.currentLbIndex + 1) % len;
    this.cdr.markForCheck();
  }

  trackById(_: number, item: PortfolioItem): string { return item.id; }
}
