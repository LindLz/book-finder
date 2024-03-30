import { RouterModule, Routes } from "@angular/router";
import { BookDetailsComponent } from "./components/book-details/book-details.component";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { BooksComponent } from "./books.component";

const routes: Routes = [
  {
    path: '', component: BooksComponent, children: [
      {path: 'homepage', component: HomepageComponent},
      {path: 'book-details/:id', component: BookDetailsComponent}
    ]
  }
];
export const BooksRoutingMoudle = RouterModule.forChild(routes);