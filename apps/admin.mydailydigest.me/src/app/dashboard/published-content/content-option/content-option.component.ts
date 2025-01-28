import { Component } from '@angular/core';
import { SharedModule } from '../../../shared';
import { EmptyStatusComponent } from '../../shared';
import { PUBLISHED_CONTENT_OPTION_STRING_RESOURCE_KEY } from './i18n/string-res-keys';

@Component({
  selector: 'app-content-option',
  imports: [SharedModule, EmptyStatusComponent],
  templateUrl: './content-option.component.html',
  styleUrl: './content-option.component.scss',
})
export class ContentOptionComponent {
  readonly KEY = PUBLISHED_CONTENT_OPTION_STRING_RESOURCE_KEY;
}
