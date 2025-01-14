import { Component } from '@angular/core';
import { SharedModule } from '../../shared';
import { EmptyStatusComponent } from '../shared';
import { PUBLISHED_CONTENT_STRING_RESOURCE_KEY } from './i18n/string-res-keys';

@Component({
  selector: 'app-published-content',
  imports: [SharedModule, EmptyStatusComponent],
  templateUrl: './published-content.component.html',
  styleUrl: './published-content.component.scss'
})
export class PublishedContentComponent {
  readonly KEY = PUBLISHED_CONTENT_STRING_RESOURCE_KEY
}
