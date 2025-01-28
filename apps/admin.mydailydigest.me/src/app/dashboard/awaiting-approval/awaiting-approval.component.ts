import { Component } from '@angular/core';
import { SharedModule } from '../../shared';
import { DRAFT_STRING_RESOURCE_KEY } from '../awaiting-approval/i18n/string-res-keys';

@Component({
  selector: 'app-awaiting-approval',
  imports: [SharedModule],
  templateUrl: './awaiting-approval.component.html',
  styleUrl: './awaiting-approval.component.scss',
})
export class AwaitingApprovalComponent {
  readonly KEY = DRAFT_STRING_RESOURCE_KEY;
}
