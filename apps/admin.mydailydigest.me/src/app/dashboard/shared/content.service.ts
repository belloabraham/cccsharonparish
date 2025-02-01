import { inject, Injectable } from '@angular/core';
import { ApprovedService } from '../approved/approved.service';
import { DraftService } from '../new-content/draft.service';
import { TranslateService } from '../translate/translate.service';
import { AwaitingApprovalService } from '../awaiting-approval/awaiting-approval.service';

@Injectable()
export class ContentService {
  private readonly draftService = inject(DraftService);
  private readonly approvedService = inject(ApprovedService);
  private readonly translateService = inject(TranslateService);
  private readonly awaitingApprovalService = inject(AwaitingApprovalService);

  getDraftContents() {
    return this.draftService.getDraftContents();
  }

  getContentsAwaitingApproval() {
    return this.awaitingApprovalService.getContentsAwaitingApproval();
  }

  getApprovedContents() {
    return this.approvedService.getApprovedContents();
  }
}
