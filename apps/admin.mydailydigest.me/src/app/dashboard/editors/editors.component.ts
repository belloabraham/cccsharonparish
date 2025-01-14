import { Component } from '@angular/core';
import { SharedModule } from '../../shared';
import { EDITORS_STRING_RESOURCE_KEY } from './i18n/string-res-keys';

@Component({
  selector: 'app-editors',
  imports: [SharedModule],
  templateUrl: './editors.component.html',
  styleUrl: './editors.component.scss'
})
export class EditorsComponent {
  KEY = EDITORS_STRING_RESOURCE_KEY
}
