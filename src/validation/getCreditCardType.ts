const discoverCard: Card = {
  regex: /^6011[0-9]{12}$/,
  name: 'Discover'
};
const amexCard: Card = {
  regex: /^3[47][0-9]{13}$/,
  name: 'AMEX'
};

const visaCard: Card = {
  regex: /^4[0-9]{12}|4[0-9]{15}$/,
  name: 'Visa'
};

const masterCard: Card = {
  regex: /^5[1-5][0-9]{14}$/,
  name: 'MasterCard'
};

const cards: Card[] = [discoverCard, amexCard, visaCard, masterCard];

const getCCName = (cardNumber: string, card: Card): string => {
  if (cardNumber.match(card.regex)) {
    return card.name;
  }
  return '';
};

export default function getCreditCardType(cardNumber: string): string {
  const creditCardNames = cards.map((c) => getCCName(cardNumber, c)).filter(c => c);

  if (creditCardNames.length === 0) {
    return 'Unknown';
  }

  return creditCardNames[0];
}
