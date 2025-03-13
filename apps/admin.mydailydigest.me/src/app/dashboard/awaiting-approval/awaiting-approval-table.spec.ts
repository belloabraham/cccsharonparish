import { IAwaitingApprovalContentTableUIState } from "@cccsharonparish/mydailydigest";
import { CONTENT_AWAITING_APPROVE_TABLE_COLUMNS, contentAwaitingApprovalTableStateKeys } from "./awaiting-approval-table";

describe('CONTENT_AWAITING_APPROVE_TABLE_COLUMNS', () => {
  it('should contain all expected keys', () => {
    expect(CONTENT_AWAITING_APPROVE_TABLE_COLUMNS).toEqual([
      'sn',
      'date',
      'topic',
      'message',
      'reference',
      'verses',
      'keyVerse',
      'supplication',
      'reflection',
      'imagePath',
      'audioUrl',
      'tags',
      'createdBy',
      'updatedBy',
    ]);
  });

  it('should only contain valid keys from IAwaitingApprovalContentTableUIState', () => {
    const validKeys: (keyof IAwaitingApprovalContentTableUIState)[] = [
      'sn',
      'date',
      'topic',
      'message',
      'reference',
      'verses',
      'keyVerse',
      'supplication',
      'reflection',
      'imagePath',
      'audioUrl',
      'tags',
      'createdBy',
      'updatedBy',
    ];
    CONTENT_AWAITING_APPROVE_TABLE_COLUMNS.forEach((key) => {
      expect(
        validKeys.includes(key as keyof IAwaitingApprovalContentTableUIState)
      ).toBe(true);
    });
  });

  it('should not contain unexpected keys', () => {
    const allowedKeys = Object.keys(contentAwaitingApprovalTableStateKeys);
    const actualKeys = CONTENT_AWAITING_APPROVE_TABLE_COLUMNS;
    expect(actualKeys.every((key) => allowedKeys.includes(key))).toBe(true);
  });
});
