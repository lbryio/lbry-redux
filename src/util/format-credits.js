export function formatCredits(amount, precision) {
  if (Number.isNaN(parseFloat(amount))) return '0';
  return parseFloat(amount)
    .toFixed(precision || 1)
    .replace(/\.?0+$/, '');
}

export function formatBigNumberCredits(amount, precision) {
  const actualAmount = parseFloat(amount);
  if (Number.isNaN(actualAmount) || actualAmount < 1000) {
    return formatCredits(amount, precision);
  }

  if (actualAmount > 1000000) {
    return formatCredits(actualAmount / 1000000, precision) + 'M';
  }

  if (actualAmount > 1000) {
    return formatCredits(actualAmount / 1000, precision) + 'K';
  }
}

export function formatFullPrice(amount, precision = 1) {
  let formated = '';

  const quantity = amount.toString().split('.');
  const fraction = quantity[1];

  if (fraction) {
    const decimals = fraction.split('');
    const first = decimals.filter(number => number !== '0')[0];
    const index = decimals.indexOf(first);

    // Set format fraction
    formated = `.${fraction.substring(0, index + precision)}`;
  }

  return parseFloat(quantity[0] + formated);
}

export function creditsToString(amount) {
  const creditString = parseFloat(amount).toFixed(8);
  return creditString;
}
