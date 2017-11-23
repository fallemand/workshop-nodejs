const React = require('react');
const Intl = require('intl');

function formatMoney(price, locale, currency_id, grouping){
  const Locale = new Intl.NumberFormat(locale,
    {
      style: 'currency',
      currency: currency_id,
      currencyDisplay: 'symbol',
      useGrouping: grouping,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  let formattedMoney = Locale.format(price);
  return '<span class="currency-symbol">' + formattedMoney[0] + '</span>' +
    '<span class="amount">' + formattedMoney.slice(1,-3) + '</span>' +
    '<sup class="fractional">' + formattedMoney.substr(-2,2) + '</sup>' ;
}

module.exports = formatMoney;
