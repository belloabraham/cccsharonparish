import { PROFILE_STRING_RESOURCE_KEY } from './string-res-keys';

describe('PROFILE_STRING_RESOURCE_KEY', () => {
  it('should have the correct keys and values', () => {
    expect(PROFILE_STRING_RESOURCE_KEY).toEqual({
      PROFILE: 'profile',
      DROP_IT: 'drop_it',
      UPDATE: 'update',
      PROFILE_UPDATE_SUCCESS_MSG: 'profile_update_success_message',
      PROFILE_UPDATE_ERR_MSG: 'profile_update_error_message',
      UPDATED: 'updated',
    });
  });

  it('should contain specific keys', () => {
    expect(PROFILE_STRING_RESOURCE_KEY).toHaveProperty('PROFILE', 'profile');
    expect(PROFILE_STRING_RESOURCE_KEY).toHaveProperty('DROP_IT', 'drop_it');
    expect(PROFILE_STRING_RESOURCE_KEY).toHaveProperty('UPDATE', 'update');
    expect(PROFILE_STRING_RESOURCE_KEY).toHaveProperty(
      'PROFILE_UPDATE_SUCCESS_MSG',
      'profile_update_success_message'
    );
    expect(PROFILE_STRING_RESOURCE_KEY).toHaveProperty(
      'PROFILE_UPDATE_ERR_MSG',
      'profile_update_error_message'
    );
    expect(PROFILE_STRING_RESOURCE_KEY).toHaveProperty('UPDATED', 'updated');
  });

  it('should not contain unexpected keys', () => {
    const allowedKeys = [
      'PROFILE',
      'DROP_IT',
      'UPDATE',
      'PROFILE_UPDATE_SUCCESS_MSG',
      'PROFILE_UPDATE_ERR_MSG',
      'UPDATED',
    ];
    const actualKeys = Object.keys(PROFILE_STRING_RESOURCE_KEY);

    expect(actualKeys.every((key) => allowedKeys.includes(key))).toBe(true);
  });
});
