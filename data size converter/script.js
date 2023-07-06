const convertBtn = document.getElementById('convertBtn');
const amountInput = document.getElementById('amount');
const baseDataSelect = document.getElementById('baseData');
const targetDataSelect = document.getElementById('targetData');
const conversionResult = document.getElementById('conversionResult');

convertBtn.addEventListener('click', () => {
  const amount = parseFloat(amountInput.value);
  const baseData = baseDataSelect.value;
  const targetData = targetDataSelect.value;

  if (isNaN(amount) || amount <= 0) {
    alert('Invalid amount. Please enter a positive number.');
    conversionResult.style.color = 'red';
    conversionResult.textContent = 'Invalid amount. Please enter a positive number.'
    return;
    }

  conversionResult.style.color = 'inherit';
  

  const conversionRate = getConversionRate(baseData, targetData);
  const convertedAmount = amount * conversionRate;

  conversionResult.textContent = `${amount} ${baseData} = ${convertedAmount} ${targetData}`;
});

function getConversionRate(baseData, targetData) {
  const exchangeRates = {
    TB: {
      GB: 1000,
      MB: 1000000,
      KB: 1000000000
    },
    GB: {
      TB: 0.001,
      MB: 1000,
      KB: 1000000
    },
    MB: {
        TB: 0.000001,
        GB: 0.001,
        KB: 1000
    },
    KB: {
        TB: 0.000000001,
        GB: 0.000001,
        MB: 0.001
    }
  };

  return exchangeRates[baseData][targetData];
}
