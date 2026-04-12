import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { CommonModule }     from '@angular/common';
import { FormsModule }      from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

// Core
import { AppComponent }         from './app.component';
import { TranslatePipe }        from './shared/services/translate.pipe';
import { TranslationService }   from './shared/services/translation.service';
import { PageLayoutComponent }  from './shared/components/page-layout/page-layout.component';

// Existing section components
import { NavbarComponent }       from './components/navbar/navbar.component';
import { HeroComponent }         from './components/hero/hero.component';
import { PartnersComponent }     from './components/partners/partners.component';
import { PricingComponent }      from './components/pricing/pricing.component';
import { AboutComponent }        from './components/about/about.component';
import { ServicesComponent }     from './components/services/services.component';
import { StatsComponent }        from './components/stats/stats.component';
import { PortfolioComponent }    from './components/portfolio/portfolio.component';
import { ClientsComponent }      from './components/clients/clients.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { BlogComponent }         from './components/blog/blog.component';
import { CtaComponent }          from './components/cta/cta.component';
import { FooterComponent }       from './components/footer/footer.component';

// Page components
import { HomePageComponent }          from './pages/home-page.component';
import { AboutPageComponent }          from './pages/about/about-page.component';
import { WhyUsPageComponent }          from './pages/about-why-us/why-us-page.component';
import { ServicesPageComponent }       from './pages/services/services-page.component';
import { WebsiteDesignPageComponent }  from './pages/services/website-design/website-design-page.component';
import { EcommercePageComponent }      from './pages/services/ecommerce/ecommerce-page.component';
import { SeoPageComponent }            from './pages/services/seo/seo-page.component';
import { BrandIdentityPageComponent }  from './pages/services/brand-identity/brand-identity-page.component';
import { SocialMediaPageComponent }    from './pages/services/social-media/social-media-page.component';
import { PhotographyPageComponent }    from './pages/services/photography/photography-page.component';
import { ProjectsPageComponent }       from './pages/projects/projects-page.component';
import { ProjectDetailPageComponent }  from './pages/projects/project-detail-page.component';
import { BlogPageComponent }           from './pages/blog/blog-page.component';
import { BlogArticlePageComponent }    from './pages/blog/blog-article-page.component';

// Init translation on app start
function initTranslation(ts: TranslationService) {
  return () => ts.init();
}

@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe,
    PageLayoutComponent,
    // Sections
    NavbarComponent,
    HeroComponent,
    PartnersComponent,
    PricingComponent,
    AboutComponent,
    ServicesComponent,
    StatsComponent,
    PortfolioComponent,
    ClientsComponent,
    TestimonialsComponent,
    BlogComponent,
    CtaComponent,
    FooterComponent,
    // Pages
    HomePageComponent,
    AboutPageComponent,
    WhyUsPageComponent,
    ServicesPageComponent,
    WebsiteDesignPageComponent,
    EcommercePageComponent,
    SeoPageComponent,
    BrandIdentityPageComponent,
    SocialMediaPageComponent,
    PhotographyPageComponent,
    ProjectsPageComponent,
    ProjectDetailPageComponent,
    BlogPageComponent,
    BlogArticlePageComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initTranslation,
      deps: [TranslationService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
