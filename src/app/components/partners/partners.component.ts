import { Component, ChangeDetectionStrategy } from '@angular/core';

export interface PartnerLogo { lightSrc: string; darkSrc: string; alt: string; }

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartnersComponent {
  readonly logos: PartnerLogo[] = [
    { lightSrc: 'https://graphica-marketing.com/wp-content/uploads/2024/12/02-3.png', darkSrc: 'https://graphica-marketing.com/wp-content/uploads/2024/12/02-2-1.png', alt: 'Partner 2' },
    { lightSrc: 'https://graphica-marketing.com/wp-content/uploads/2024/12/03-3.png', darkSrc: 'https://graphica-marketing.com/wp-content/uploads/2024/12/03-2-2.png', alt: 'Partner 3' },
    { lightSrc: 'https://graphica-marketing.com/wp-content/uploads/2024/12/04.png', darkSrc: 'https://graphica-marketing.com/wp-content/uploads/2024/12/04-2.png', alt: 'Partner 4' },
    { lightSrc: 'https://graphica-marketing.com/wp-content/uploads/2024/12/06-1.png', darkSrc: 'https://graphica-marketing.com/wp-content/uploads/2024/12/06-2-1.png', alt: 'Partner 6' },
    { lightSrc: 'https://graphica-marketing.com/wp-content/uploads/2024/12/05-1.png', darkSrc: 'https://graphica-marketing.com/wp-content/uploads/2024/12/05-2-1.png', alt: 'Partner 5' },
    { lightSrc: 'https://graphica-marketing.com/wp-content/uploads/2024/12/01-3.png', darkSrc: 'https://graphica-marketing.com/wp-content/uploads/2024/12/01-2-1.png', alt: 'Partner 1' },
  ];
  trackByAlt(_: number, l: PartnerLogo): string { return l.alt; }
}
