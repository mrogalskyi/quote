import { Routes, RouterModule } from '@angular/router';
import { QuoteListComponent } from './quoteList/quoteList.component';

export const ROUTES: Routes = [
  { path: '',      component: QuoteListComponent },
  { path: 'new',   component: QuoteListComponent },
  { path: 'random',   component: QuoteListComponent },
  { path: 'best',   component: QuoteListComponent },
  { path: 'add',   component: QuoteListComponent },
];
