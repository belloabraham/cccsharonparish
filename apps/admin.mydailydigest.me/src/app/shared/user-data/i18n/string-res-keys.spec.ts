import { USER_DATA_STRING_RESOURCE_KEY } from "./string-res-keys";

describe('USER_DATA_STRING_RESOURCE_KEY', () => {
  it('should have the correct keys and values', () => {
    expect(USER_DATA_STRING_RESOURCE_KEY).toEqual({
      FIRST_NAME: 'firstName',
      LAST_NAME: 'lastName',
      PHONE_NUMBER: 'phone_number',
      WHATS_APP: 'whats_app',
      INVALID_NAME_MSG: 'invalid_name_msg',
      SELECT_A_COUNTRY: 'select_a_country',
      INVALID_PHONE_MSG: 'invalid_phone_msg',
    });
  });

  it('should contain specific keys', () => {
    expect(USER_DATA_STRING_RESOURCE_KEY).toHaveProperty(
      'FIRST_NAME',
      'firstName'
    );
    expect(USER_DATA_STRING_RESOURCE_KEY).toHaveProperty(
      'LAST_NAME',
      'lastName'
    );
    expect(USER_DATA_STRING_RESOURCE_KEY).toHaveProperty(
      'PHONE_NUMBER',
      'phone_number'
    );
    expect(USER_DATA_STRING_RESOURCE_KEY).toHaveProperty(
      'WHATS_APP',
      'whats_app'
    );
    expect(USER_DATA_STRING_RESOURCE_KEY).toHaveProperty(
      'INVALID_NAME_MSG',
      'invalid_name_msg'
    );
    expect(USER_DATA_STRING_RESOURCE_KEY).toHaveProperty(
      'SELECT_A_COUNTRY',
      'select_a_country'
    );
    expect(USER_DATA_STRING_RESOURCE_KEY).toHaveProperty(
      'INVALID_PHONE_MSG',
      'invalid_phone_msg'
    );
  });

  it('should not contain unexpected keys', () => {
    const allowedKeys = [
      'FIRST_NAME',
      'LAST_NAME',
      'PHONE_NUMBER',
      'WHATS_APP',
      'INVALID_NAME_MSG',
      'SELECT_A_COUNTRY',
      'INVALID_PHONE_MSG',
    ];
    const actualKeys = Object.keys(USER_DATA_STRING_RESOURCE_KEY);

    expect(actualKeys.every((key) => allowedKeys.includes(key))).toBe(true);
  });
});
