import { Component } from '@angular/core';
import { NotFoundComponent as SDDNotFoundComponent } from '@cccsharonparish/mydailydigest';

@Component({
  selector: 'app-not-found',
  imports: [SDDNotFoundComponent],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {}
