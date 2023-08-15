import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-nx-welcome></app-nx-welcome>
    <router-outlet></router-outlet>`,
  styles: [''],
})
export class AppComponent {
  title = 'mydailydigest.me';
}
