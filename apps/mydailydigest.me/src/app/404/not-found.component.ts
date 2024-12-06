import { Component, inject } from '@angular/core';
import { NotFoundComponent as SDDNotFoundComponent } from '@cccsharonparish/mydailydigest';

@Component({
  selector: 'app-not-found',
  imports: [SDDNotFoundComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
}
