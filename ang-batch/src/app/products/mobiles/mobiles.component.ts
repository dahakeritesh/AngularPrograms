import { Component, OnInit } from "@angular/core";
import { MOBPARTS } from "./mock";
import { MobParts } from "./mob-parts";

@Component({
  selector: "app-mobiles",
  templateUrl: "./mobiles.component.html",
  styles: [],
})
export class MobilesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  mobParts: MobParts[] = MOBPARTS;
  calcProds() {
    let sum = 0;
    for (let mobPart of this.mobParts) {
      sum = sum + mobPart.stock;
    }
    return sum;
  }
  upQuantity(mobPart) {
    if (mobPart.stock > mobPart.quantity) {
      mobPart.quantity++;
    }
  }
  downQuantity(mobPart) {
    // tslint:disable-next-line: triple-equals
    if (mobPart.quantity > 0) {
      mobPart.quantity--;
    }
  }
}
