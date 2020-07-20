import { MobileMenuComponent } from "./../products/mobiles/mobile-menu/mobile-menu.component";
import { SamsungComponent } from "./../products/mobiles/samsung/samsung.component";
import { MotoComponent } from "./../products/mobiles/moto/moto.component";
import { HomeComponent } from "./../products/home/home.component";
import { NotFoundComponent } from "./../products/not-found/not-found.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { MobilesComponent } from "../products/mobiles/mobiles.component";
import { LaptopsComponent } from "../products/laptops/laptops.component";
import { BooksComponent } from "../products/books/books.component";

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  {
    path: "mobiles",
    component: MobileMenuComponent,
    children: [
      { path: "", component: MobilesComponent },
      { path: "moto", component: MotoComponent },
      { path: "samsung", component: SamsungComponent },
    ],
  },
  { path: "laptops", component: LaptopsComponent },
  { path: "books", component: BooksComponent },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
