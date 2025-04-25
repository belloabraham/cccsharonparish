import { Component } from '@angular/core';
import { SharedModule } from '../shared';
import { environment } from '@cccsharonparish/mydailydigest';

@Component({
  selector: 'app-privacy',
  imports: [SharedModule],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss',
})
export class PrivacyComponent {
  APP_NAME = environment.appName;
}
