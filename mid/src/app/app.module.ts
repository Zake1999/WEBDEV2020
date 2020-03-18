import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
        RouterModule.forRoot([
          { path: '',redirectTo:'/books',pathMatch:'full' },
          { path: 'books', component: BooksListComponent },
          { path: 'book-detail/:id', component: BookDetailComponent },
        ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
