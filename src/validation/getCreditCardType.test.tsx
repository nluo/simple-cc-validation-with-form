import getCreditCardType from './getCreditCardType';

describe('GetCreditCardType testing... ', () => {
  it('Could get visa test 1 when card number length is 16', () => {
    const testVisaCard: string = '4111111111111111';
    const result = getCreditCardType(testVisaCard);
    expect(result).toBe('Visa');
  });

  it('Could get visa test 2 when card number length is 13', () => {
    const testVisaCard: string = '4111111111111';
    const result = getCreditCardType(testVisaCard);
    expect(result).toBe('Visa');
  });

  it('Could get visa test 3', () => {
    const testVisaCard: string = '4012888888881881';
    const result = getCreditCardType(testVisaCard);
    expect(result).toBe('Visa');
  });

  it('Could get Amex Card test 1', () => {
    const testAmexCard: string = '378282246310005';
    const result = getCreditCardType(testAmexCard);
    expect(result).toBe('AMEX');
  });

  it('Could get Amex Card test 2', () => {
    const testAmexCard: string = '379229523512312';
    const result = getCreditCardType(testAmexCard);
    expect(result).toBe('AMEX');
  });

  it('Could get Master Card test ', () => {
    expect(getCreditCardType('5105105105105100')).toBe('MasterCard');
    expect(getCreditCardType('5105105105105106')).toBe('MasterCard');
  });

  it('Could get Discover Card', () => {
    expect(getCreditCardType('6011111111111117')).toBe('Discover');
  });

  it('Could handle unknown', () => {
    expect(getCreditCardType('123123213213')).toBe('Unknown');
    expect(getCreditCardType('fadfafdsaf')).toBe('Unknown');
    expect(getCreditCardType('9111111111111111')).toBe('Unknown');
  });
});
