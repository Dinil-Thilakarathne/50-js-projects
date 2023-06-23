const convertBtn = document.getElementById('convertBtn');
const amountInput = document.getElementById('amount');
const baseLengthSelect = document.getElementById('baseLength');
const targetLengthSelect = document.getElementById('targetLength');
const conversionResult = document.getElementById('conversionResult');

convertBtn.addEventListener('click', () => {
  const amount = parseFloat(amountInput.value);
  const baseLength = baseLengthSelect.value;
  const targetlength = targetLengthSelect.value;

  if (isNaN(amount) || amount <= 0) {
    alert('Invalid amount. Please enter a positive number.');
    conversionResult.style.color = 'red';
    conversionResult.textContent = 'Invalid amount. Please enter a positive number.'
    return;
    }

  conversionResult.style.color = 'inherit';
  

  const conversionRate = getConversionRate(baseLength, targetlength);
  const convertedAmount = amount * conversionRate;

  conversionResult.textContent = `${amount} ${baseLength} = ${convertedAmount} ${targetlength}`;
});

function getConversionRate(baseLength, targetLenth) {
  const exchangeRates = {
    km: {
      m: 1000,
      cm: 100000,
      mm: 1000000
    },
    m: {
      km: 0.001,
      cm: 100,
      mm: 1000
    },
    cm: {
        km: 0.00001,
        m: 0.01,
        mm: 10
    },
    mm: {
        km: 0.0000001,
        m: 0.001,
        cm: 0.1
    }
  };

  return exchangeRates[baseLength][targetLenth];
}
