import { LanguageResourceKey } from './language-resource-key';

describe('LanguageResourceKey', () => {
  it('should have the correct value for PAGE_TITLE', () => {
    expect(LanguageResourceKey.PAGE_TITLE).toEqual('page_not_found_title');
  });
});
