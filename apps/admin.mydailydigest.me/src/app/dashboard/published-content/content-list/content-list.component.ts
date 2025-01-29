import { Component, input } from '@angular/core';
import { SharedModule } from '../../../shared';
import { PUBLISHED_CONTENT_LIST_STRING_RESOURCE_KEY } from './i18n/string-res-keys';

@Component({
  selector: 'app-content-list',
  imports: [SharedModule],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss',
})
export class ContentListComponent {
  contentYear = input.required<string>({
    alias: 'contentYear',
  });
  KEY = PUBLISHED_CONTENT_LIST_STRING_RESOURCE_KEY
}
