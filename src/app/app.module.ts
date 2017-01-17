import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import 'bootstrap/dist/css/bootstrap.css';

import { QuoteListComponent } from './quoteList/quoteList.component';
import { TopMenuComponent } from './topMenu/topMenu.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent,
    QuoteListComponent,
    TopMenuComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
