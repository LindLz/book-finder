import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchQuery: string = '';

  constructor(private router: Router) {}

  onSearch(event: Event) {
    event.preventDefault();
    if (this.searchQuery.trim() !== '') {
      this.router.navigate([''], { queryParams: { q: this.searchQuery } });
    }
  }
}
