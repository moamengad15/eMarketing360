import { Injectable, signal, computed, inject, ApplicationRef } from '@angular/core';
import { SITE_PAIRS } from '../i18n/site-pairs';
import { SITE_PAIRS_DETAIL } from '../i18n/site-pairs-detail';

export type Language = 'ar' | 'en';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private readonly appRef = inject(ApplicationRef);
  private _lang = signal<Language>('ar');

  readonly lang = this._lang.asReadonly();
  readonly isRtl = computed(() => this._lang() === 'ar');
  /** Layout stays RTL in both languages so UI structure does not flip; only copy changes. */
  readonly dir = computed(() => 'rtl' as const);
  readonly htmlLang = computed(() => this._lang());

  t(key: string): string {
    const pair = SITE_PAIRS[key] ?? SITE_PAIRS_DETAIL[key];
    if (pair) {
      return this._lang() === 'ar' ? pair.ar : pair.en;
    }
    return key;
  }

  toggle(): void {
    const next: Language = this._lang() === 'ar' ? 'en' : 'ar';
    this._lang.set(next);
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', next);
    localStorage.setItem('em360-lang', next);
    this.appRef.tick();
  }

  init(): void {
    const saved = localStorage.getItem('em360-lang') as Language | null;
    if (saved && (saved === 'ar' || saved === 'en')) {
      this._lang.set(saved);
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', saved);
    }
  }
}
