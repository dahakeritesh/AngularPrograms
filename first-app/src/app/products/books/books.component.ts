import { Component, OnInit } from "@angular/core";
import { BookList } from "./book";
import { BOOKLIST } from "./mock";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styles: [],
})
export class BooksComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  bookList: BookList[] = BOOKLIST;
}
