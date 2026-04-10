import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
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

const routes: Routes = [
  // Home
  { path: '',                          component: HomePageComponent, pathMatch: 'full' },
  // About
  { path: 'about',                     component: AboutPageComponent },
  { path: 'about/why-us',              component: WhyUsPageComponent },
  // Services
  { path: 'services',                  component: ServicesPageComponent },
  { path: 'services/website-design',   component: WebsiteDesignPageComponent },
  { path: 'services/ecommerce',        component: EcommercePageComponent },
  { path: 'services/seo',              component: SeoPageComponent },
  { path: 'services/brand-identity',   component: BrandIdentityPageComponent },
  { path: 'services/social-media',     component: SocialMediaPageComponent },
  { path: 'services/photography',      component: PhotographyPageComponent },
  // Fallback
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 110],
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
