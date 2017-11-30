import validateCC, { reverseDoubleEveryOtherDigits, transformAndSumDigits } from './validateCC';

describe('validateCC testing... ', () => {
  it('validates correctly test 1', () => {
    const testCard = '4408041234567893';
    expect(reverseDoubleEveryOtherDigits(testCard)).
      toEqual(['8', '4', '0', '8', '0', '4', '2', '2', '6', '4', '10', '6', '14', '8', '18', '3']);

    expect(transformAndSumDigits(reverseDoubleEveryOtherDigits(testCard))).
      toEqual(70);

    expect(validateCC(testCard)).toBe(true);
  });

  it('validates correctly test 2', () => {
    const testCard = '4417123456789112';
    expect(reverseDoubleEveryOtherDigits(testCard)).
      toEqual(['8', '4', '2', '7', '2', '2', '6', '4', '10', '6', '14', '8', '18', '1', '2', '2']);

    expect(transformAndSumDigits(reverseDoubleEveryOtherDigits(testCard))).
      toEqual(69);

    expect(validateCC(testCard)).toBe(false);
  });
});
