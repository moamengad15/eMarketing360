import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  HostListener,
  OnInit,
} from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TranslationService } from '../../shared/services/translation.service';

export interface NavLink {
  labelKey: string;
  route: string;
  fragment?: string;
  children?: NavChild[];
}

export interface NavChild {
  labelKey: string;
  route: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {

  isMenuOpen = false;
  isSticky = false;
  isMobile = false;
  activeSubmenu: string | null = null;
  currentRoute = '/';
  isSearchOpen = false;
  searchQuery = '';

  // ✅ FIX: email variables (needed by HTML)
  mailtoInfo: string = 'mailto:info@e-marketing360.com';
  displayInfoEmail: string = 'info@e-marketing360.com';

  readonly navLinks: NavLink[] = [
    { labelKey: 'nav.home', route: '/' },
    {
      labelKey: 'nav.about',
      route: '/about',
      children: [
        { labelKey: 'nav.about', route: '/about' },
        { labelKey: 'nav.about.why', route: '/about/why-us' },
      ],
    },
    {
      labelKey: 'nav.services',
      route: '/services',
      children: [
        { labelKey: 'nav.services.web', route: '/services/website-design' },
        { labelKey: 'nav.services.ecom', route: '/services/ecommerce' },
        { labelKey: 'nav.services.seo', route: '/services/seo' },
        { labelKey: 'nav.services.brand', route: '/services/brand-identity' },
        { labelKey: 'nav.services.social', route: '/services/social-media' },
        { labelKey: 'nav.services.photo', route: '/services/photography' },
      ],
    },
    { labelKey: 'nav.portfolio', route: '/projects' },
    { labelKey: 'nav.blog', route: '/', fragment: 'blog' },
    { labelKey: 'nav.contact', route: '/', fragment: 'contact' },
  ];

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
    public ts: TranslationService,
  ) {}

  ngOnInit(): void {
    this.isMobile = window.innerWidth <= 960;
    this.currentRoute = this.router.url.split('#')[0] || '/';

    this.router.events
      .pipe(filter((e: Event): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(e => {
        this.currentRoute = e.urlAfterRedirects.split('#')[0] || '/';
        this.isMenuOpen = false;
        this.activeSubmenu = null;
        this.cdr.markForCheck();
      });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isSticky = window.scrollY > 40;
  }

  @HostListener('window:resize', [])
  onResize(): void {
    this.isMobile = window.innerWidth <= 960;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    this.activeSubmenu = null;
  }

  toggleSubmenu(l: string): void {
    this.activeSubmenu = this.activeSubmenu === l ? null : l;
  }

  hasChildren(link: NavLink): boolean {
    return !!(link.children?.length);
  }

  trackByRoute(_: number, l: { route: string }): string {
    return l.route;
  }

  trackByLabelKey(_: number, l: NavLink): string {
    return l.labelKey;
  }

  isActive(link: NavLink): boolean {
    if (link.route === '/projects') return this.currentRoute.startsWith('/projects');
    if (link.route === '/') return this.currentRoute === '/';
    return this.currentRoute.startsWith(link.route);
  }

  navigate(route: string, fragment?: string): void {
    this.closeMenu();

    if (route === '/' && fragment) {
      if (this.currentRoute === '/') {
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
    if (!this.isSearchOpen) this.searchQuery = '';
  }

  onSearch(query: string): void {
    if (query.trim()) {
      console.log('Search:', query);
    }
  }

  toggleLang(): void {
    this.ts.toggle();
    this.cdr.markForCheck();
  }

  trackByChildKey(_: number, c: NavChild): string {
    return c.labelKey;
  }
}