import { TABLE_STRING_RESOURCE_KEYS } from "../../shared";
import { DRAFT_STRING_RESOURCE_KEY } from "./string-res-keys";

describe('DRAFT_STRING_RESOURCE_KEY', () => {
  it('should have the correct additional keys and values', () => {
    expect(DRAFT_STRING_RESOURCE_KEY).toMatchObject({
      NO_CONTENT_AWAITING_APPROVAL_MSG: 'no_content_awaiting_approval_msg',
      AWAITING_APPROVAL: 'awaiting_approval',
      APPROVE: 'approve',
      SUBMIT_FOR_APPROVAL_MSG: 'submit_for_approval_msg',
      CONTENT_GETS_APPROVED_MSG: 'content_gets_approved_msg',
    });
  });

  it('should not contain unexpected keys', () => {
    const allowedKeys = [
      ...Object.keys(TABLE_STRING_RESOURCE_KEYS),
      'NO_CONTENT_AWAITING_APPROVAL_MSG',
      'AWAITING_APPROVAL',
      'APPROVE',
      'SUBMIT_FOR_APPROVAL_MSG',
      'CONTENT_GETS_APPROVED_MSG',
    ];
    const actualKeys = Object.keys(DRAFT_STRING_RESOURCE_KEY);
    expect(actualKeys.every((key) => allowedKeys.includes(key))).toBe(true);
  });
});
