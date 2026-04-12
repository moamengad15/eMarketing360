import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import {
  PROJECTS_ARCHIVE_ITEMS,
  type ProjectsArchiveItem,
} from '../../shared/data/projects.data';

export interface ProjectsArchiveFilter {
  labelKey: string;
  value: string;
}

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsPageComponent {
  activeFilter = 'all';
  activeItem: ProjectsArchiveItem | null = null;
  currentLbIndex = 0;

  readonly filters: ProjectsArchiveFilter[] = [
    { labelKey: 'projects.filter.all', value: 'all' },
    { labelKey: 'projects.filter.social', value: 'social' },
    { labelKey: 'projects.filter.profile', value: 'profile' },
    { labelKey: 'projects.filter.ecommerce', value: 'ecommerce' },
  ];

  readonly items = PROJECTS_ARCHIVE_ITEMS;

  constructor(private cdr: ChangeDetectorRef) {}

  filterCount(value: string): number {
    if (value === 'all') return this.items.length;
    return this.items.filter(i => i.filterKey === value).length;
  }

  paddedCount(value: string): string {
    const n = this.filterCount(value);
    return n < 10 ? `0${n}` : String(n);
  }

  get filteredItems(): ProjectsArchiveItem[] {
    if (this.activeFilter === 'all') return this.items;
    return this.items.filter(i => i.filterKey === this.activeFilter);
  }

  setFilter(value: string): void {
    this.activeFilter = value;
    this.cdr.markForCheck();
  }

  openLightbox(item: ProjectsArchiveItem): void {
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

  trackById(_: number, item: ProjectsArchiveItem): string {
    return item.id;
  }

  trackByFilterValue(_: number, f: ProjectsArchiveFilter): string {
    return f.value;
  }
}
