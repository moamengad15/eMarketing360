import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home-page',
  template: `
    <!-- All homepage sections in order -->
    <div id="top">
      <app-hero></app-hero>
    </div>
    <section id="partners" class="section-wrapper section-alt">
      <app-partners></app-partners>
    </section>
    <section id="pricing" class="section-wrapper">
      <app-pricing></app-pricing>
    </section>
    <section id="about" class="section-wrapper section-alt">
      <app-about></app-about>
    </section>
    <section id="services" class="section-wrapper">
      <app-services></app-services>
    </section>
    <section id="stats" class="section-wrapper section-alt">
      <app-stats></app-stats>
    </section>
    <section id="portfolio" class="section-wrapper">
      <app-portfolio></app-portfolio>
    </section>
    <section id="clients" class="section-wrapper section-alt">
      <app-clients></app-clients>
    </section>
    <section id="testimonials" class="section-wrapper">
      <app-testimonials></app-testimonials>
    </section>
    <section id="contact" class="section-wrapper">
      <app-cta></app-cta>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
