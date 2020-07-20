import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavComponent } from "./layouts/nav/nav.component";
import { BannerOneComponent } from "./layouts/banner-one/banner-one.component";
import { BannerTwoComponent } from "./layouts/banner-two/banner-two.component";
import { BannerThreeComponent } from "./layouts/banner-three/banner-three.component";
import { ProductsComponent } from "./layouts/products/products.component";
import { ContactUsComponent } from "./layouts/contact-us/contact-us.component";
import { FooterComponent } from "./layouts/footer/footer.component";
import { SqrtPipe } from "./pipes/sqrt.pipe";
import { DiscPipe } from "./pipes/disc.pipe";
import { MyStyleDirective } from "./directives/my-style.directive";
import { MobilesComponent } from "./products/mobiles/mobiles.component";
import { LaptopsComponent } from "./products/laptops/laptops.component";
import { BooksComponent } from "./products/books/books.component";

import { RouterModule, Routes } from "@angular/router";
import { AppRoutingModule } from "./modules/app-routing.module";
import { HomeComponent } from "./products/home/home.component";
import { NotFoundComponent } from "./products/not-found/not-found.component";
import { MotoComponent } from "./products/mobiles/moto/moto.component";
import { SamsungComponent } from "./products/mobiles/samsung/samsung.component";
import { MobileMenuComponent } from './products/mobiles/mobile-menu/mobile-menu.component';
import { ContainerComponent } from './products/container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BannerOneComponent,
    BannerTwoComponent,
    BannerThreeComponent,
    ProductsComponent,
    ContactUsComponent,
    FooterComponent,
    SqrtPipe,
    DiscPipe,
    MyStyleDirective,
    MobilesComponent,
    LaptopsComponent,
    BooksComponent,
    HomeComponent,
    NotFoundComponent,
    MotoComponent,
    SamsungComponent,
    MobileMenuComponent,
    ContainerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
