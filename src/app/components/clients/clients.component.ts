import { Component, ChangeDetectionStrategy } from '@angular/core';

export interface ClientLogo {
  lightSrc: string;
  darkSrc: string;
  alt: string;
}

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsComponent {
  readonly clients: ClientLogo[][] = [
    [
      { lightSrc: 'https://graphica-marketing.com/wp-content/uploads/2024/12/01.png', darkSrc: 'https://graphica-marketing.com/wp-content/uploads/2024/12/01-2.png', alt: 'Client 1' },
      { lightSrc: 'https://graphica-marketing.com/wp-content/uploads/2024/12/06.png', darkSrc: 'https://graphica-marketing.com/wp-content/uploads/2024/12/06-2.png', alt: 'Client 6' },
    ],
    [
      { lightSrc: 'https://graphica-marketing.com/wp-content/uploads/2024/12/02-1.png', darkSrc: 'https://graphica-marketing.com/wp-content/uploads/2024/12/02-2.png', alt: 'Client 2' },
      { lightSrc: 'https://graphica-marketing.com/wp-content/uploads/2024/12/09.png', darkSrc: 'https://graphica-marketing.com/wp-content/uploads/2024/12/09-2.png', alt: 'Client 9' },
    ],
    [
      { lightSrc: 'https://graphica-marketing.com/wp-content/uploads/2024/12/05.png', darkSrc: 'https://graphica-marketing.com/wp-content/uploads/2024/12/05-2.png', alt: 'Client 5' },
      { lightSrc: 'https://graphica-marketing.com/wp-content/uploads/2024/12/03-2.png', darkSrc: 'https://graphica-marketing.com/wp-content/uploads/2024/12/03-2-1.png', alt: 'Client 3' },
    ],
    [
      { lightSrc: 'https://graphica-marketing.com/wp-content/uploads/2024/12/07.png', darkSrc: 'https://graphica-marketing.com/wp-content/uploads/2024/12/07-2.png', alt: 'Client 7' },
      { lightSrc: 'https://graphica-marketing.com/wp-content/uploads/2024/12/11.png', darkSrc: 'https://graphica-marketing.com/wp-content/uploads/2024/12/11-2.png', alt: 'Client 11' },
    ],
  ];

  trackByAlt(_index: number, logo: ClientLogo): string { return logo.alt; }
  trackByIndex(index: number): number { return index; }
}
