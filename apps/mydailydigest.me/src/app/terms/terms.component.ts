import { Component } from '@angular/core';
import { SharedModule } from '../shared';
import { CONSTANT, environment } from '@cccsharonparish/mydailydigest';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-terms',
  imports: [SharedModule, UpperCasePipe],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.scss',
})
export class TermsComponent {
  APP_NAME = environment.appName;
  EMAIL = CONSTANT.CONTACT.EMAIL;
}
