import { Component } from '@angular/core';
import { SharedModule } from '../../shared';
import { DRAFT_STRING_RESOURCE_KEY } from './i18n/string-res-keys';
import { EmptyStatusComponent } from '../shared';

@Component({
  selector: 'app-draft',
  imports: [SharedModule, EmptyStatusComponent],
  templateUrl: './draft.component.html',
  styleUrl: './draft.component.scss'
})
export class DraftComponent {
readonly KEY = DRAFT_STRING_RESOURCE_KEY
}
