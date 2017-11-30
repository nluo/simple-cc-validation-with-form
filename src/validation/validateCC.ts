
export const reverseDoubleEveryOtherDigits = (cardNumber: string) => {
  const cardDigits: string[] = cardNumber.split('');
  const transformCardDigits = cardDigits.reverse().map((d, i) => {
    if (i % 2 === 0) {
      return d;
    }
    return (Number(d) * 2).toString();
  }).reverse();

  return transformCardDigits;
};

export const transformAndSumDigits = (transformCardDigits: string[]): number => {
  return transformCardDigits.map(d => {
    if (Number(d) > 9) {
      return d.split('');
    }
    return d;
  }).reduce((previousVal, currentVal) => [...previousVal, ...currentVal], [] as any)
    .reduce((acc, curr) => acc + Number(curr), 0);
};

export const validate = (sum: number): boolean => sum % 10 === 0;

export default function (cardNumber: string): boolean {
  return validate(transformAndSumDigits(reverseDoubleEveryOtherDigits(cardNumber)));
}
