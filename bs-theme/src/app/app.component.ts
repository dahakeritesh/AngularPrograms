import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "bs-theme";

  mobParts = [
    {
      customerId: 1,
      customerName: "Alex",
      customerAge: 25,
      status: 0,
    },
    {
      customerId: 2,
      customerName: "John",
      customerAge: 45,
      status: 1,
    },
    {
      customerId: 3,
      customerName: "Martin",
      customerAge: 55,
      status: 2,
    },
  ];
}
