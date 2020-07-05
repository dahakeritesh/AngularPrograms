import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './layouts/nav/nav.component';
import { BannerOneComponent } from './layouts/banner-one/banner-one.component';
import { BannerTwoComponent } from './layouts/banner-two/banner-two.component';
import { BannerThreeComponent } from './layouts/banner-three/banner-three.component';
import { ProductsComponent } from './layouts/products/products.component';
import { ContactUsComponent } from './layouts/contact-us/contact-us.component';
import { FooterComponent } from './layouts/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BannerOneComponent,
    BannerTwoComponent,
    BannerThreeComponent,
    ProductsComponent,
    ContactUsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
