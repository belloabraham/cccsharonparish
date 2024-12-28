import { Component } from '@angular/core';
import { CommonComponent, PAGE_TITLE_KEY, SharedModule } from '../shared';
import { SIGNUP_STRING_RESOURCE_KEY } from './i18n/string-res-keys';
import { RouterLink } from '@angular/router';
import { ROUTE } from '@cccsharonparish/mydailydigest';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  imports: [SharedModule, RouterLink, NgOptimizedImage],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
  providers: [
    {
      provide: PAGE_TITLE_KEY,
      useValue: SIGNUP_STRING_RESOURCE_KEY.PAGE_TITLE,
    },
  ],
})
export class SignUpComponent extends CommonComponent {
  ROUTE=ROUTE
  KEY = SIGNUP_STRING_RESOURCE_KEY
  //TODO update user id token information with data from the user
}
