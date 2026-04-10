import { Injectable, signal, computed } from '@angular/core';

export type Language = 'ar' | 'en';

export interface Translations {
  [key: string]: string;
}

const AR: Translations = {
  // Nav
  'nav.home':         'الرئيسية',
  'nav.about':        'من نحن',
  'nav.about.why':    'لماذا e-Marketing360 مناسبة لشركات مرحلة النمو؟',
  'nav.services':     'خدماتنا',
  'nav.services.web': 'تصميم وتطوير مواقع إلكترونية',
  'nav.services.ecom':'تطوير المتاجر الإلكترونية',
  'nav.services.seo': 'تحسين محركات البحث (SEO)',
  'nav.services.brand':'تطوير الهويات البصرية',
  'nav.services.social':'إدارة السوشيال ميديا',
  'nav.services.photo':'خدمات التصوير الإحترافية',
  'nav.portfolio':    'أعمالنا',
  'nav.blog':         'المدونة',
  'nav.contact':      'تواصل معنا',
  'nav.profile':      'بروفايل',
  'nav.lang':         'العربية',
  // Hero
  'hero.badge':       'e-Marketing360 للتسويق الإلكتروني',
  'hero.line1a':      'إستمتع بقوة',
  'hero.line1b':      'التسويق الرقمي',
  'hero.line2':       'خدمات تسويق إلكتروني تعزز',
  'hero.desc':        'نبتكر استراتيجيات تسويق إلكتروني حديثة تجمع بين الإبداع والتقنية لتعزيز حضورك الرقمي وتحقيق نمو فعلي لعلامتك.',
  'hero.cta':         'إنطلق الآن',
  'hero.partners':    'نقدم خدماتنا بدعم من',
  'hero.partners.bold':'شركائنا',
  // Footer
  'footer.email':     'info&#64;e-marketing360.com',
  'footer.contact':   'تواصل معنا',
  // Generic
  'btn.more':         'اعرف المزيد',
  'btn.start':        'ابدأ الآن',
};

const EN: Translations = {
  // Nav
  'nav.home':         'Home',
  'nav.about':        'About',
  'nav.about.why':    'Why e-Marketing360 for Growth Companies?',
  'nav.services':     'Services',
  'nav.services.web': 'Website Design & Development',
  'nav.services.ecom':'E-Commerce Development',
  'nav.services.seo': 'Search Engine Optimization (SEO)',
  'nav.services.brand':'Brand Identity Development',
  'nav.services.social':'Social Media Management',
  'nav.services.photo':'Professional Photography',
  'nav.portfolio':    'Portfolio',
  'nav.blog':         'Blog',
  'nav.contact':      'Contact Us',
  'nav.profile':      'Profile',
  'nav.lang':         'English',
  // Hero
  'hero.badge':       'e-Marketing360 Digital Agency',
  'hero.line1a':      'Experience the Power of',
  'hero.line1b':      'Digital Marketing',
  'hero.line2':       'E-Marketing services that boost',
  'hero.desc':        'We innovate modern digital marketing strategies combining creativity and technology to enhance your online presence and achieve real growth for your brand.',
  'hero.cta':         'Get Started',
  'hero.partners':    'We serve our clients with the support of',
  'hero.partners.bold':'our partners',
  // Footer
  'footer.email':     'info&#64;e-marketing360.com',
  'footer.contact':   'Contact Us',
  // Generic
  'btn.more':         'Learn More',
  'btn.start':        'Start Now',
};

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private _lang = signal<Language>('ar');

  readonly lang   = this._lang.asReadonly();
  readonly isRtl  = computed(() => this._lang() === 'ar');
  readonly dir    = computed(() => (this._lang() === 'ar' ? 'rtl' : 'ltr'));
  readonly htmlLang = computed(() => this._lang());

  private get dict(): Translations {
    return this._lang() === 'ar' ? AR : EN;
  }

  t(key: string): string {
    return this.dict[key] ?? key;
  }

  toggle(): void {
    const next: Language = this._lang() === 'ar' ? 'en' : 'ar';
    this._lang.set(next);
    // Update document direction live
    document.documentElement.setAttribute('dir', next === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', next);
    localStorage.setItem('em360-lang', next);
  }

  init(): void {
    const saved = localStorage.getItem('em360-lang') as Language | null;
    if (saved && (saved === 'ar' || saved === 'en')) {
      this._lang.set(saved);
      document.documentElement.setAttribute('dir', saved === 'ar' ? 'rtl' : 'ltr');
      document.documentElement.setAttribute('lang', saved);
    }
  }
}
