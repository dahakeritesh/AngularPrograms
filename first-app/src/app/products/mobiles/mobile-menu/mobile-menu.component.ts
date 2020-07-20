import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mobile-menu",
  template: `
    <nav class="white" role="navigation">
      <div class="nav-wrapper container">
        <ul class="left hide-on-med-and-down">
          <li><a routerLink="/mobiles">Mobiles</a></li>
          <li><a routerLink="/mobiles/moto">Motorola</a></li>
          <li><a routerLink="/mobiles/samsung">Samsung</a></li>
        </ul>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class MobileMenuComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
