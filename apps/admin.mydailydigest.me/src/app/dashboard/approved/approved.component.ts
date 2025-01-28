import { Component } from '@angular/core';
import { SharedModule } from '../../shared';
import { APPROVED_STRING_RESOURCE_KEY } from './i18n/string-res-keys';

@Component({
  selector: 'app-approved',
  imports: [SharedModule],
  templateUrl: './approved.component.html',
  styleUrl: './approved.component.scss',
})
export class ApprovedComponent {
  readonly KEY = APPROVED_STRING_RESOURCE_KEY;
}
