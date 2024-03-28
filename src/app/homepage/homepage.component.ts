import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  books: any[] = [];

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.searchBooks('').subscribe((data: any) => { 
      this.books = data.items;
    });
  }

  truncateDescription(description: string): string {
    const maxLength = 150;
    if (description.length <= maxLength) {
      return description;
    } else {
      return description.substr(0, maxLength) + '...';
    }
  }

  navigateToDetail(bookId: string): void {
    this.router.navigate(['/book-details', bookId]);
  }
}
