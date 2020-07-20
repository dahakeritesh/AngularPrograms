import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styles: [],
})
export class BooksComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  books = [
    {
      id: 3001,
      name: "bg-book",
      subName: "The Complete book on Angularjs",
      pageCnt: 564,
      img: "ng-book.jpg",
      stock: 5,
      Publisher: "Fullstack.io",
      author: "Avi lerner",
      price: 800,
    },
    {
      id: 3002,
      name: "Angular Up",
      subName: "Learnung Angular Step by Step",
      pageCnt: 564,
      img: "angular-up.jpg",
      stock: 12,
      publisher: "O'Reilly",
      author: "Shyam Seshadri",
      price: 430,
    },
    {
      id: 3003,
      name: "pro Angular 9",
      subName: "Build powerful & Dynamic Web Apps",
      pageCnt: 564,
      img: "pro-angular-9.jpg",
      stock: 9,
      publisher: "Apress",
      author: "Adam Freeman",
      price: 590,
    },
  ];
}
