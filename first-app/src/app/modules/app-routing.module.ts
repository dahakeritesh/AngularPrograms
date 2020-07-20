import { ContainerComponent } from "./../products/container/container.component";
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
import { MOBPARTS } from "../products/mobiles/mock";
import { LAPILIST } from "./../products/laptops/mock";
import { BOOKLIST } from "../products/books/mock";

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  {
    path: "mobiles",
    component: MobileMenuComponent,
    children: [
      {
        path: "",
        component: MobilesComponent,
        children: [
          {
            path: "",
            component: ContainerComponent,
            data: [{ type: "Mobile", productList: MOBPARTS }],
          },
        ],
      },
      {
        path: "moto",
        component: MotoComponent,
        children: [
          {
            path: "",
            component: ContainerComponent,
            data: [{ type: "Motorola", productList: MOBPARTS }],
          },
        ],
      },
      {
        path: "samsung",
        component: SamsungComponent,
        children: [
          {
            path: "",
            component: ContainerComponent,
            data: [{ type: "Samsung", productList: MOBPARTS }],
          },
        ],
      },
    ],
  },
  {
    path: "laptops",
    component: LaptopsComponent,
    children: [
      {
        path: "",
        component: ContainerComponent,
        data: [{ type: "Laptop", productList: LAPILIST }],
      },
    ],
  },
  {
    path: "books",
    component: BooksComponent,
    children: [
      {
        path: "",
        component: ContainerComponent,
        data: [{ type: "Book", productList: BOOKLIST }],
      },
    ],
  },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
