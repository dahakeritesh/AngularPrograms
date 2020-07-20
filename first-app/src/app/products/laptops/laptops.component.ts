import { LAPILIST } from "./mock";
import { Component, OnInit } from "@angular/core";
import { LapiList } from "./laptop";

@Component({
  selector: "app-laptops",
  templateUrl: "./laptops.component.html",
  styles: [],
})
export class LaptopsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  lapiList: LapiList[] = LAPILIST;
}
