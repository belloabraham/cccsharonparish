import { Component, inject } from '@angular/core';
import {MDDNotFoundComponent } from '@cccsharonparish/mydailydigest';

@Component({
  selector: 'app-not-found',
  imports: [MDDNotFoundComponent],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {}
