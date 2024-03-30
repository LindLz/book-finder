import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { BooksRoutingMoudle } from './books-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BookService } from '../services/book.service';
import { AppComponent } from '../app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';



@NgModule({
  declarations: [
    BooksComponent,
    HomepageComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingMoudle,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class BooksModule { }
