import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

export interface FooterPost {
  titleKey: string;
  postUrl: string;
  dateKey: string;
  imageUrl: string;
}

export interface FooterNav {
  labelKey: string;
  route: string;
  fragment?: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();

  readonly footerNav: FooterNav[] = [
    { labelKey: 'footer.nav.about', route: '/about' },
    { labelKey: 'footer.nav.services', route: '/services' },
    { labelKey: 'footer.nav.portfolio', route: '/projects' },
    { labelKey: 'footer.nav.blog', route: '/', fragment: 'blog' },
    { labelKey: 'footer.nav.contact', route: '/', fragment: 'contact' },
  ];

  readonly recentPosts: FooterPost[] = [
    {
      titleKey: 'blog.post1.title',
      postUrl:
        'https://graphica-marketing.com/%d9%84%d9%85%d8%a7%d8%b0%d8%a7-%d8%a3%d8%b5%d8%a8%d8%ad-%d8%a7%d9%84%d8%aa%d8%b5%d9%88%d9%8a%d8%b1-%d8%a7%d9%84%d9%81%d9%88%d8%aa%d9%88%d8%ba%d8%b1%d8%a7%d9%81%d9%8a-%d8%b9%d9%86%d8%b5%d8%b1%d9%8b%d8%a7-%d8%ad%d8%a7%d8%b3%d9%85%d9%8b%d8%a7/',
      dateKey: 'blog.post1.date',
      imageUrl: 'https://graphica-marketing.com/wp-content/uploads/2025/12/10-150x150.jpg',
    },
    {
      titleKey: 'blog.post2.title',
      postUrl:
        'https://graphica-marketing.com/%d9%84%d9%85%d8%a7%d8%b0%d8%a7-%d9%84%d9%85-%d9%8a%d8%b9%d8%af-%d8%aa%d8%b7%d9%88%d9%8a%d8%b1-%d8%a7%d9%84%d9%87%d9%88%d9%8a%d8%a9-%d8%a7%d9%84%d8%aa%d8%ac%d8%a7%d8%b1%d9%8a%d8%a9/',
      dateKey: 'blog.post2.date',
      imageUrl: 'https://graphica-marketing.com/wp-content/uploads/2025/12/01-150x150.jpg',
    },
  ];

  constructor(private router: Router) {}

  navigate(route: string, fragment?: string): void {
    if (route === '/' && fragment) {
      if (this.router.url.split('#')[0] === '/') {
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

  trackByTitleKey(_: number, p: FooterPost): string {
    return p.titleKey;
  }
  trackByNavKey(_: number, n: FooterNav): string {
    return n.labelKey;
  }
}
