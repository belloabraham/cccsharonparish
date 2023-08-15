import { commonDateTime } from './date-time';

describe('commonDateTime', () => {
  it('should work', () => {
    expect(commonDateTime()).toEqual('common-date-time');
  });
});
