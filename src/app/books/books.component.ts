import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  searchQuery: any;
  

  constructor(private router: Router) {}

  ngOnInit(): void {
  }
  onSearch(event: Event) {
    event.preventDefault();
    if (this.searchQuery.trim() !== '') {
      this.router.navigate([''], { queryParams: { q: this.searchQuery } });
    }
  }

}
