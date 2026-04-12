import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-blog-page',
  template: `
    <section id="blog" class="section-wrapper section-alt">
      <app-blog></app-blog>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPageComponent {}
