import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { books } from './books';
import { Book } from './book';
@Injectable({
  providedIn: 'root'
})
export class BooksService {
 getBooks(): Observable<Book[]> {
   return of(books);
 }
 getBook(id: number): Observable<Book> {
     return of(books.find(book => book.id === id));
   }
  constructor() { }
}
