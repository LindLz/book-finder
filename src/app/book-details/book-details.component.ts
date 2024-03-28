import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  bookDetails: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const bookId = params['id'];
      this.fetchBookDetails(bookId);
    });
  }

  fetchBookDetails(bookId: string): void {
    this.bookService.getBookDetails(bookId).subscribe((data: any) => {
      this.bookDetails = data.volumeInfo;
    });
  }

  goBack(): void {
    window.history.back();
  }
}
