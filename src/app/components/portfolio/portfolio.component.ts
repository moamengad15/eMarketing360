import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import {
  PORTFOLIO_HOME_ITEMS,
  type PortfolioHomeItem,
} from '../../shared/data/projects.data';

export interface PortfolioFilter {
  value: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioComponent {
  activeFilter = 'all';
  activeItem: PortfolioHomeItem | null = null;
  currentLbIndex = 0;

  readonly filters: PortfolioFilter[] = [
    { value: 'all' },
    { value: 'social' },
    { value: 'profile' },
    { value: 'ecommerce' },
  ];

  readonly items = PORTFOLIO_HOME_ITEMS;

  constructor(private cdr: ChangeDetectorRef) {}

  itemTitleKey(item: PortfolioHomeItem): string {
    return `portfolio.items.${item.id}.title`;
  }
  itemCategoryKey(item: PortfolioHomeItem): string {
    return `portfolio.items.${item.id}.category`;
  }
  itemDescriptionKey(item: PortfolioHomeItem): string {
    return `portfolio.items.${item.id}.description`;
  }
  itemProjectNameKey(item: PortfolioHomeItem): string {
    return `portfolio.items.${item.id}.projectName`;
  }
  itemProjectTypeKey(item: PortfolioHomeItem): string {
    return `portfolio.items.${item.id}.projectType`;
  }
  itemLocationKey(item: PortfolioHomeItem): string {
    return `portfolio.items.${item.id}.location`;
  }

  filterLabelKey(f: PortfolioFilter): string {
    return `portfolio.home.filter.${f.value}`;
  }

  get filteredItems(): PortfolioHomeItem[] {
    if (this.activeFilter === 'all') return this.items;
    return this.items.filter(i => i.filterKey === this.activeFilter);
  }

  setFilter(value: string): void {
    this.activeFilter = value;
  }

  openLightbox(item: PortfolioHomeItem): void {
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

  trackById(_: number, item: PortfolioHomeItem): string {
    return item.id;
  }

  trackByFilterValue(_: number, f: PortfolioFilter): string {
    return f.value;
  }
}
