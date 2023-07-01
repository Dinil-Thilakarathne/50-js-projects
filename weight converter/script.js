const convertBtn = document.getElementById('convertBtn');
const amountInput = document.getElementById('amount');
const baseweightSelect = document.getElementById('baseWeight');
const targetweightSelect = document.getElementById('targetWeight');
const conversionResult = document.getElementById('conversionResult');

convertBtn.addEventListener('click', () => {
  const amount = parseFloat(amountInput.value);
  const baseweight = baseweightSelect.value;
  const targetweight = targetweightSelect.value;

  if (isNaN(amount) || amount <= 0) {
    alert('Invalid amount. Please enter a positive number.');
    conversionResult.style.color = 'red';
    conversionResult.textContent = 'Invalid amount. Please enter a positive number.'
    return;
    }

  conversionResult.style.color = 'inherit';
  

  const conversionRate = getConversionRate(baseweight, targetweight);
  const convertedAmount = amount * conversionRate;

  conversionResult.textContent = `${amount} ${baseweight} = ${convertedAmount} ${targetweight}`;
});

function getConversionRate(baseweight, targetLenth) {
  const exchangeRates = {
    t: {
      kg: 1000,
      g: 1000000,
      mg: 1000000000
    },
    kg: {
      t: 0.001,
      g: 1000,
      mg: 1000000
    },
    g: {
        t: 0.000001,
        kg: 0.001,
        mg: 1000
    },
    mg: {
        t: 0.000000001,
        kg: 0.000001,
        g: 0.001
    }
  };

  return exchangeRates[baseweight][targetLenth];
}
