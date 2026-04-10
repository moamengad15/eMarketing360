import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  readonly safeVideoUrl: SafeResourceUrl;
  readonly bannerImage = 'https://graphica-marketing.com/wp-content/uploads/2024/06/banner-021000.png';

  isVideoOpen = false;

  constructor(private sanitizer: DomSanitizer) {
    this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/p-wJ_xCDTAU?controls=1&start=0&mute=1&autoplay=1&rel=0'
    );
  }

  openVideo(): void  { this.isVideoOpen = true; }
  closeVideo(): void { this.isVideoOpen = false; }
}
