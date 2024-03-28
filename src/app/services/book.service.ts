import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
 
  constructor(private http: HttpClient) { }

  searchBooks(query: string): Observable<any> {
    const defaultQuery = 'james bond';
    const apiUrl = query.trim() !== '' ?
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}+intitle:${encodeURIComponent(query)}&fields=items(id,volumeInfo(title,authors,description,imageLinks,publishedDate))` :
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(defaultQuery)}&maxResults=10&fields=items(id,volumeInfo(title,authors,description,imageLinks,publishedDate))`;
    return this.http.get(apiUrl);
  }

  getBookDetails(bookId: string): Observable<any> {
    return this.http.get<any>(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
  }
}
