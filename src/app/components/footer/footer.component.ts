import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

export interface FooterPost { title: string; url: string; date: string; imageUrl: string; }
export interface FooterNav  { label: string; route: string; fragment?: string; }

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();

  // Navigation links — uses Angular Router
  readonly footerNav: FooterNav[] = [
    { label: 'من نحن',      route: '/about' },
    { label: 'خدماتنا',     route: '/services' },
    { label: 'أعمالنا',     route: '/', fragment: 'portfolio' },
    { label: 'المدونة',     route: '/', fragment: 'blog' },
    { label: 'تواصل معنا',  route: '/', fragment: 'contact' },
  ];

  readonly recentPosts: FooterPost[] = [
    {
      title: 'لماذا أصبح التصوير الفوتوغرافي عنصرًا حاسمًا في نجاح العلامة التجارية؟',
      url:  'https://graphica-marketing.com/blog/',
      date: 'يناير 15, 2026',
      imageUrl: 'https://graphica-marketing.com/wp-content/uploads/2025/12/10-150x150.jpg',
    },
    {
      title: 'لماذا لم يعد تطوير الهوية التجارية يعتمد على التصميم فقط؟',
      url:  'https://graphica-marketing.com/blog/',
      date: 'ديسمبر 21, 2025',
      imageUrl: 'https://graphica-marketing.com/wp-content/uploads/2025/12/01-150x150.jpg',
    },
  ];

  constructor(private router: Router) {}

  navigate(route: string, fragment?: string): void {
    if (route === '/' && fragment) {
      if (this.router.url === '/') {
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

  trackByTitle(_: number, p: FooterPost): string { return p.title; }
  trackByLabel(_: number, n: FooterNav):  string { return n.label; }
}
