import { LanguageResourceKey } from './language-resource-key';

describe('LanguageResourceKey', () => {
  it('should have the correct value for PAGE_TITLE', () => {
    expect(LanguageResourceKey.PAGE_TITLE).toEqual('page_not_found_title');
  });

  it('should have the correct value for PAGE_NOT_FOUND_MESSAGE', () => {
    expect(LanguageResourceKey.PAGE_NOT_FOUND_MESSAGE).toEqual(
      'page_not_found_message'
    );
  });

  it('should have the correct value for GO_HOME', () => {
    expect(LanguageResourceKey.GO_HOME).toEqual('go_home');
  });

  it('should have the correct value for LOGO', () => {
    expect(LanguageResourceKey.LOGO).toEqual('logo');
  });
});
