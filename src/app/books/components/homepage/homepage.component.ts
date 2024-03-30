import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from '../../../services/book.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  books: any[] = [];
  filteredBooks: any[] = [];
  searchQuery: string = '';

  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['q'] || '';
      this.loadBooks();
    });
  }

  loadBooks(): void {
    this.bookService.searchBooks(this.searchQuery).subscribe((data: any) => { 
      this.books = data.items;
      this.filteredBooks = this.books;
    });
  }

  onSearch(event: Event) {
    event.preventDefault();
    this.router.navigate([''], { queryParams: { q: this.searchQuery } });
   
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
