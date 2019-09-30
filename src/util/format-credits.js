function numberWithCommas(x) {
  var parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}

export function formatCredits(amount, precision, shortFormat = false) {
  let actualAmount = parseFloat(amount),
    suffix = '';
  if (Number.isNaN(actualAmount)) return '0';

  if (shortFormat) {
    if (actualAmount >= 1000000 && precision <= 7) {
      actualAmount = actualAmount / 1000000;
      suffix = 'M';
    } else if (actualAmount >= 1000 && precision <= 4) {
      actualAmount = actualAmount / 1000;
      suffix = 'K';
    }
  }

  return numberWithCommas(actualAmount.toFixed(precision || 1).replace(/\.?0+$/, '')) + suffix;
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
