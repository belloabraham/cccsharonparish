import { Component } from '@angular/core';
import { SharedModule } from '../shared';
import { environment } from '@cccsharonparish/mydailydigest';

@Component({
  selector: 'app-terms',
  imports: [SharedModule],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.scss',
})
export class TermsComponent {
  APP_NAME = environment.appName;
}
