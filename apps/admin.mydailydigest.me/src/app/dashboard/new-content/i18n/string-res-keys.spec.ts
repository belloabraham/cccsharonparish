import { TABLE_STRING_RESOURCE_KEYS } from "../../shared";
import { CONTENT_STRING_RESOURCE_KEYS } from "./string-res-keys";

describe('CONTENT_STRING_RESOURCE_KEYS', () => {

  it('should have the correct additional keys and values', () => {
    expect(CONTENT_STRING_RESOURCE_KEYS).toMatchObject({
      NO_ADDED_CONTENT_MSG: 'no_added_content_msg',
      DELETE_CONTENT_QUEST: 'delete_content_quest',
      DELETE_CONTENT_MSG: 'delete_content_msg',
      SUBMIT_FOR_REVIEW_MSG: 'submit_for_review_msg',
      SUBMIT_FOR_REVIEW_QUEST: 'submit_for_review_quest',
      DELETE: 'delete',
      TRANSLATE: 'translate',
      UPDATE_TRANSLATION: 'update_translation',
      SUBMIT_FOR_REVIEW: 'submit_for_review',
      SUBMIT_FOR_REVIEW_WARN_MSG: 'submit_for_review_warn_msg',
    });
  });

  it('should not contain unexpected keys', () => {
    const allowedKeys = [
      ...Object.keys(TABLE_STRING_RESOURCE_KEYS),
      'NO_ADDED_CONTENT_MSG',
      'DELETE_CONTENT_QUEST',
      'DELETE_CONTENT_MSG',
      'SUBMIT_FOR_REVIEW_MSG',
      'SUBMIT_FOR_REVIEW_QUEST',
      'DELETE',
      'TRANSLATE',
      'UPDATE_TRANSLATION',
      'SUBMIT_FOR_REVIEW',
      'SUBMIT_FOR_REVIEW_WARN_MSG',
    ];
    const actualKeys = Object.keys(CONTENT_STRING_RESOURCE_KEYS);

    expect(actualKeys.every((key) => allowedKeys.includes(key))).toBe(true);
  });
});
