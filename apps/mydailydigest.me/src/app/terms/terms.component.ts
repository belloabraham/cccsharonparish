import { Component } from '@angular/core';
import { SharedModule } from '../shared';
import { CONSTANT, environment, ROUTE } from '@cccsharonparish/mydailydigest';
import { UpperCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-terms',
  imports: [SharedModule, UpperCasePipe, RouterLink],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.scss',
})
export class TermsComponent {
  APP_NAME = environment.appName;
  EMAIL = CONSTANT.CONTACT.EMAIL;
  ROUTE = ROUTE;
  PAGE_TRANSLATION = `https://translate.google.com/?sl=en&tl=fr&text=https%3A%2F%2Fmydailydigest.me%2Fterms&op=translate`;
  CCC_SHARON_PARISH_WEBSITE = CONSTANT.CCC_SHARON_PARISH;
  CCC_SHARON_PARISH = 'CCC Sharon Parish';
}
