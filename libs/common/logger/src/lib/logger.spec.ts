import { commonLogger } from './logger';

describe('commonLogger', () => {
  it('should work', () => {
    expect(commonLogger()).toEqual('common-logger');
  });
});
