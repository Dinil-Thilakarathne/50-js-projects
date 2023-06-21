const convertBtn = document.getElementById('convertBtn');
const amountInput = document.getElementById('amount');
const baseCurrencySelect = document.getElementById('baseCurrency');
const targetCurrencySelect = document.getElementById('targetCurrency');
const conversionResult = document.getElementById('conversionResult');

convertBtn.addEventListener('click', () => {
  const amount = parseFloat(amountInput.value);
  const baseCurrency = baseCurrencySelect.value;
  const targetCurrency = targetCurrencySelect.value;

  if (isNaN(amount) || amount <= 0) {
    alert('Invalid amount. Please enter a positive number.');
    conversionResult.style.color = 'red'
    conversionResult.textContent = 'Invalid amount. Please enter a positive number.'
    return;
  }

  if (!['USD', 'LKR', 'INR'].includes(baseCurrency) || !['USD', 'LKR', 'INR'].includes(targetCurrency)) {
    alert('Invalid currency type. Please select from USD, LKR, or INR.');
    return;
  }

  const conversionRate = getConversionRate(baseCurrency, targetCurrency);
  const convertedAmount = amount * conversionRate;

  conversionResult.textContent = `${amount} ${baseCurrency} = ${convertedAmount.toFixed(2)} ${targetCurrency}`;
});

function getConversionRate(baseCurrency, targetCurrency) {
  const exchangeRates = {
    USD: {
      LKR: 307.98,
      INR: 81.99
    },
    LKR: {
      USD: 0.0032,
      INR: 0.27
    },
    INR: {
      USD: 0.012,
      LKR: 3.76
    }
  };

  return exchangeRates[baseCurrency][targetCurrency];
}
