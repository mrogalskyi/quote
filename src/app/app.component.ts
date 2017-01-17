import { Component } from '@angular/core';
@Component({
  selector: 'qu-app',
  template: `
  <div>
    <qu-top-menu></qu-top-menu>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  </div>
  `,
})
export class AppComponent { }
