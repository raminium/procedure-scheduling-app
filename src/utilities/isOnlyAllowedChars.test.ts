import isOnlyAllowedChars from './isOnlyAllowedChars';

describe('isOnlyAllowedChars', () => {
  it('returns true when it only recieves letters', () => {
    expect(isOnlyAllowedChars('study')).toBeTruthy();
    expect(isOnlyAllowedChars('ähnlich')).toBeTruthy();
    expect(isOnlyAllowedChars('élise')).toBeTruthy();
  });
  it('returns false when it receives a non letter character', () => {
    expect(isOnlyAllowedChars('!')).toBeFalsy();
    expect(isOnlyAllowedChars('?')).toBeFalsy();
    expect(isOnlyAllowedChars('.')).toBeFalsy();
    expect(isOnlyAllowedChars('1')).toBeFalsy();
    expect(isOnlyAllowedChars('@')).toBeFalsy();
    expect(isOnlyAllowedChars('"')).toBeFalsy();
  });
});
