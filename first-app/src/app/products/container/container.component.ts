import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-container",
  templateUrl: "./container.component.html",
  styleUrls: ["./container.component.css"],
})
export class ContainerComponent implements OnInit {
  product_type: string;
  productList = [];

  constructor(private actRoute: ActivatedRoute) {
    this.product_type = this.actRoute.snapshot.data[0]["type"];
    this.productList = this.actRoute.snapshot.data[0]["productList"];
  }

  ngOnInit(): void {}
}
