const compose = require('lodash.compose');

export const reverseDoubleEveryOtherDigits = (cardNumber: string) => {
  const cardDigits: string[] = cardNumber.split('');
  return cardDigits.reverse().map((d, i) => {
    if (i % 2 === 0) {
      return d;
    }
    return (Number(d) * 2).toString();
  }).reverse();
};

export const transformAndSumDigits = (transformCardDigits: string[]): number => {
  return transformCardDigits.map(d => {
    if (Number(d) > 9) {
      return d.split('');
    }
    return d;
  }).reduce((previousVal, currentVal: string[]) => [...previousVal, ...currentVal], [] as any)
    .reduce((previousVal: number, currentVal: string) => previousVal + Number(currentVal), 0);
};

export const validate = (sum: number): boolean => sum % 10 === 0;

const validateCC = (cardNumber: string) => 
compose(validate, transformAndSumDigits, reverseDoubleEveryOtherDigits)(cardNumber);

export default validateCC;
