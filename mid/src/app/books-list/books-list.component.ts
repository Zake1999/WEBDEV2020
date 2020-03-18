import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BooksService } from '../books.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
books:Book[];
  constructor(
  private route: ActivatedRoute,
  private booksService : BooksService,
  private location : Location
  ) { }

  ngOnInit(): void {
  this.getBooks();
  }
  getBooks(): void {
    this.booksService.getBooks()
        .subscribe(books => this.books = books);
  }
  goBack(): void {
    this.location.back();
  }
}

