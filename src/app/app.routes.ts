import { Routes } from '@angular/router';
import { TechnologiesComponent } from './technologies/technologies.component';
import { BooksComponent } from './books/books.component';
import { WrongInputComponent } from './wrong-input/wrong-input.component';

export const routes: Routes = [
  { path: '', component: TechnologiesComponent },
  { path: 'Books', component: BooksComponent },
  { path: '**', component: WrongInputComponent },
];
