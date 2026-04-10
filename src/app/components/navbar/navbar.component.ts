import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  HostListener,
  OnInit,
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TranslationService } from '../../shared/services/translation.service';

export interface NavLink {
  label: string;
  route: string;         // Angular route path (e.g. '/about')
  fragment?: string;     // optional in-page fragment for home-page sections
  children?: NavChild[];
}

export interface NavChild {
  label: string;
  route: string;         // Always a real Angular route for sub-pages
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
  isMenuOpen = false;
  isSticky    = false;
  isMobile    = false;
  activeSubmenu: string | null = null;
  currentRoute = '/';
  isSearchOpen = false;
  searchQuery  = '';

  readonly navLinks: NavLink[] = [
    { label: 'الرئيسية',    route: '/' },
    {
      label: 'من نحن',      route: '/about',
      children: [
        { label: 'من نحن',                                              route: '/about' },
        { label: 'لماذا e-Marketing360 مناسبة لشركات مرحلة النمو؟',   route: '/about/why-us' },
      ],
    },
    {
      label: 'خدماتنا',     route: '/services',
      children: [
        { label: 'تصميم وتطوير مواقع إلكترونية',  route: '/services/website-design' },
        { label: 'تطوير المتاجر الإلكترونية',      route: '/services/ecommerce'      },
        { label: 'تحسين محركات البحث (SEO)',        route: '/services/seo'            },
        { label: 'تطوير الهويات البصرية',           route: '/services/brand-identity' },
        { label: 'إدارة السوشيال ميديا',            route: '/services/social-media'   },
        { label: 'خدمات التصوير الإحترافية',        route: '/services/photography'    },
      ],
    },
    { label: 'أعمالنا',    route: '/', fragment: 'portfolio' },
    { label: 'المدونة',    route: '/', fragment: 'blog'      },
    { label: 'تواصل معنا', route: '/', fragment: 'contact'   },
  ];

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
    public ts: TranslationService,
  ) {}

  ngOnInit(): void {
    this.isMobile    = window.innerWidth <= 960;
    this.currentRoute = this.router.url;

    // Track active route for .active class on nav items
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: any) => {
        this.currentRoute = e.urlAfterRedirects;
        this.isMenuOpen   = false;
        this.activeSubmenu = null;
        this.cdr.markForCheck();
      });
  }

  @HostListener('window:scroll', [])
  onScroll(): void { this.isSticky = window.scrollY > 40; }

  @HostListener('window:resize', [])
  onResize(): void { this.isMobile = window.innerWidth <= 960; }

  toggleMenu(): void    { this.isMenuOpen = !this.isMenuOpen; }
  closeMenu(): void     { this.isMenuOpen = false; this.activeSubmenu = null; }
  toggleSubmenu(l: string): void {
    this.activeSubmenu = this.activeSubmenu === l ? null : l;
  }

  hasChildren(link: NavLink): boolean { return !!(link.children?.length); }
  trackByRoute(_: number, l: { route: string }): string { return l.route; }

  isActive(link: NavLink): boolean {
    if (link.route === '/') return this.currentRoute === '/';
    return this.currentRoute.startsWith(link.route);
  }

  /** Navigate to a route; if it's the home page with a fragment, scroll after */
  navigate(route: string, fragment?: string): void {
    this.closeMenu();
    if (route === '/' && fragment) {
      if (this.currentRoute === '/') {
        // Already on home — just scroll
        setTimeout(() => {
          document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 50);
      } else {
        this.router.navigate(['/'], { fragment }).then(() => {
          setTimeout(() => {
            document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 300);
        });
      }
    } else {
      this.router.navigate([route]);
    }
  }

  toggleSearch(): void {
    this.isSearchOpen = !this.isSearchOpen;
    if (!this.isSearchOpen) { this.searchQuery = ''; }
  }

  onSearch(query: string): void {
    if (query.trim()) {
      // Future: wire to search page/service
      console.log('Search:', query);
    }
  }

  toggleLang(): void {
    this.ts.toggle();
    this.cdr.markForCheck();
  }
}
