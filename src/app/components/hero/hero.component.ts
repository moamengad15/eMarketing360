import {
  Component,
  ChangeDetectionStrategy,
  AfterViewInit,
  OnDestroy,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  readonly contactEmail = 'mailto:info@e-marketing360.com';

  // Typed words (blue part at end of line 2)
  readonly typedStrings = ['الإبتكار', 'الاحترافية', 'النجاح', 'التميّز'];

  private dynamicEl: HTMLElement | null = null;
  private timer: ReturnType<typeof setTimeout> | null = null;
  private idx = 0;
  private charIdx = 0;
  private deleting = false;

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.dynamicEl = this.elRef.nativeElement.querySelector('.dynamic-text-output');
    if (this.dynamicEl) {
      setTimeout(() => this.tick(), 600);
    }
  }

  private tick(): void {
    const word = this.typedStrings[this.idx % this.typedStrings.length];
    if (!this.deleting) {
      this.charIdx++;
      if (this.dynamicEl) this.dynamicEl.textContent = word.slice(0, this.charIdx);
      if (this.charIdx === word.length) {
        this.deleting = true;
        this.timer = setTimeout(() => this.tick(), 2000);
        return;
      }
      this.timer = setTimeout(() => this.tick(), 75);
    } else {
      this.charIdx--;
      if (this.dynamicEl) this.dynamicEl.textContent = word.slice(0, this.charIdx);
      if (this.charIdx === 0) {
        this.deleting = false;
        this.idx++;
        this.timer = setTimeout(() => this.tick(), 350);
        return;
      }
      this.timer = setTimeout(() => this.tick(), 32);
    }
  }

  ngOnDestroy(): void {
    if (this.timer) clearTimeout(this.timer);
  }
}
