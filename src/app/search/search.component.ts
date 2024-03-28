import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  books: any[] = [];
  searchQuery: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['q'];
      this.loadBooks();
    });
  }

  loadBooks(): void {
    this.bookService.searchBooks(this.searchQuery).subscribe((data: any) => {
      this.books = data.items;
    });
  }

  truncateDescription(description: string): string {
    const maxLength = 130;
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
