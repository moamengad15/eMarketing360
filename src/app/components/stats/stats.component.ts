import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ElementRef,
} from '@angular/core';

export interface StatItem {
  icon: string;
  iconStyle: 'contained' | 'outlined';
  prefix: string;
  target: number;
  label: string;
  current: number;
}

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsComponent implements OnInit, AfterViewInit, OnDestroy {
  private observer: IntersectionObserver | null = null;
  private hasAnimated = false;

  readonly stats: StatItem[] = [
    { icon: 'fas fa-users', iconStyle: 'contained', prefix: '+', target: 127, label: 'العملاء', current: 0 },
    { icon: 'bi bi-x-diamond', iconStyle: 'outlined', prefix: '+', target: 155, label: 'المشاريع', current: 0 },
    { icon: 'far fa-star', iconStyle: 'contained', prefix: '+', target: 15, label: 'سنوات الخبرة', current: 0 },
  ];

  readonly companyStats = [
    { target: 49, label: 'شركاؤنا العالميون', current: 0, prefix: '' },
    { target: 12, label: 'الدول التي عملنا فيها', current: 0, prefix: ' ' },
  ];

  constructor(
    private cdr: ChangeDetectorRef,
    private elRef: ElementRef,
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
  }

  private setupIntersectionObserver(): void {
    if (typeof IntersectionObserver !== 'undefined') {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !this.hasAnimated) {
              this.hasAnimated = true;
              this.animateCounters();
            }
          });
        },
        { threshold: 0.3 },
      );
      const el = this.elRef.nativeElement;
      if (el) {
        this.observer.observe(el);
      }
    }
  }

  private animateCounters(): void {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    this.stats.forEach((stat) => {
      const increment = stat.target / steps;
      let step = 0;
      const timer = setInterval(() => {
        step++;
        stat.current = Math.min(Math.round(increment * step), stat.target);
        this.cdr.markForCheck();
        if (step >= steps) {
          clearInterval(timer);
        }
      }, interval);
    });

    this.companyStats.forEach((stat) => {
      const increment = stat.target / steps;
      let step = 0;
      const timer = setInterval(() => {
        step++;
        stat.current = Math.min(Math.round(increment * step), stat.target);
        this.cdr.markForCheck();
        if (step >= steps) {
          clearInterval(timer);
        }
      }, interval);
    });
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  trackByLabel(_index: number, stat: StatItem): string {
    return stat.label;
  }
}
