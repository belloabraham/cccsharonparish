import { Component } from '@angular/core';
import { CommonComponent, PAGE_TITLE_KEY, SharedModule } from '../shared';
import { SIGNUP_STRING_RESOURCE_KEY } from './i18n/string-res-keys';

@Component({
  selector: 'app-sign-up',
  imports: [SharedModule],
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
  //TODO update user id token information with data from the user
}
