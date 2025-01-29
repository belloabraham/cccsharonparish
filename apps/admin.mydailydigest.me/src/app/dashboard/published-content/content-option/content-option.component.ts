import { Component, inject } from '@angular/core';
import { SharedModule } from '../../../shared';
import { EmptyStatusComponent } from '../../shared';
import { PUBLISHED_CONTENT_OPTION_STRING_RESOURCE_KEY } from './i18n/string-res-keys';
import { PublishedContentStore } from '../published-content-store';
import { MatRippleModule } from '@angular/material/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ROUTE } from '@cccsharonparish/mydailydigest';

@Component({
  selector: 'app-content-option',
  imports: [
    SharedModule,
    EmptyStatusComponent,
    MatRippleModule,
    NgIf,
    NgFor,
    RouterLink,
  ],
  templateUrl: './content-option.component.html',
  styleUrl: './content-option.component.scss',
})
export class ContentOptionComponent {
  readonly KEY = PUBLISHED_CONTENT_OPTION_STRING_RESOURCE_KEY;
  readonly contentStore = inject(PublishedContentStore);
  ROUTE = ROUTE;
}
