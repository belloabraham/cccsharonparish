import { Component } from '@angular/core';
import { SharedModule } from '../shared';
import { CONSTANT, environment, ROUTE } from '@cccsharonparish/mydailydigest';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-privacy',
  imports: [SharedModule, RouterLink],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss',
})
export class PrivacyComponent {
  APP_NAME = environment.appName;
  EMAIL = CONSTANT.CONTACT.EMAIL;
  ROUTE = ROUTE;
}
