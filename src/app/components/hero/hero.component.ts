import {
  Component,
  ChangeDetectionStrategy,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  ChangeDetectorRef,
  effect,
} from '@angular/core';
import { TranslationService } from '../../shared/services/translation.service';
import { MAILTO_INFO } from '../../shared/constants/contact';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  readonly contactEmail = MAILTO_INFO;

  private readonly wordKeys = ['hero.word1', 'hero.word2', 'hero.word3', 'hero.word4'] as const;

  private dynamicEl: HTMLElement | null = null;
  private timer: ReturnType<typeof setTimeout> | null = null;
  private idx = 0;
  private charIdx = 0;
  private deleting = false;

  constructor(
    private elRef: ElementRef,
    private ts: TranslationService,
    private cdr: ChangeDetectorRef,
  ) {
    effect(() => {
      this.ts.lang();
      if (this.dynamicEl) {
        this.restartTyping();
      }
    });
  }

  ngAfterViewInit(): void {
    this.dynamicEl = this.elRef.nativeElement.querySelector('.dynamic-text-output');
    if (this.dynamicEl) {
      this.timer = setTimeout(() => this.tick(), 600);
    }
  }

  private restartTyping(): void {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    this.idx = 0;
    this.charIdx = 0;
    this.deleting = false;
    if (this.dynamicEl) {
      this.dynamicEl.textContent = '';
    }
    this.timer = setTimeout(() => this.tick(), 350);
  }

  private tick(): void {
    if (!this.dynamicEl) return;
    const word = this.ts.t(this.wordKeys[this.idx % this.wordKeys.length]);
    if (!this.deleting) {
      this.charIdx++;
      this.dynamicEl.textContent = word.slice(0, this.charIdx);
      if (this.charIdx === word.length) {
        this.deleting = true;
        this.timer = setTimeout(() => this.tick(), 2000);
        this.cdr.markForCheck();
        return;
      }
      this.timer = setTimeout(() => this.tick(), 75);
    } else {
      this.charIdx--;
      this.dynamicEl.textContent = word.slice(0, this.charIdx);
      if (this.charIdx === 0) {
        this.deleting = false;
        this.idx++;
        this.timer = setTimeout(() => this.tick(), 350);
        this.cdr.markForCheck();
        return;
      }
      this.timer = setTimeout(() => this.tick(), 32);
    }
    this.cdr.markForCheck();
  }

  ngOnDestroy(): void {
    if (this.timer) clearTimeout(this.timer);
  }
}
