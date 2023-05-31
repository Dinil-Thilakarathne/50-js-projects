const calculateTip = () => {
    const billAmount = document.getElementById('billAmount').value;
    const tipPercentage = document.getElementById('tipPercentage').value;

    const tipAmount = billAmount * tipPercentage;
    const totalAmount = parseFloat(billAmount) + parseFloat(tipAmount);

    document.getElementById('totalAmount').textContent = `${totalAmount.toFixed(2)}`;
}

document.getElementById('calculateBtn').addEventListener('click', calculateTip);
