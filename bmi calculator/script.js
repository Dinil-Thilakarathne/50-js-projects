document.getElementById('calculateBtn').addEventListener('click', calculateBMI);

function calculateBMI() {
  const weightInput = document.getElementById('weight');
  const heightInput = document.getElementById('height');
  const resultDiv = document.getElementById('result');

  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value) / 100; // Convert height to meters

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    resultDiv.textContent = 'Please enter valid values.';
    resultDiv.style.color = '#f00';
    return;
  }

  const bmi = weight / (height * height);
  const bmiRounded = bmi.toFixed(2);

  let category;
  if (bmi < 18.5) {
    category = 'Underweight';
  } else if (bmi < 25) {
    category = 'Normal weight';
  } else if (bmi < 30) {
    category = 'Overweight';
  } else {
    category = 'Obese';
  }

  resultDiv.innerHTML = 
  `Your BMI is <span> ${bmiRounded}</span>.<br> Category: <span> ${category} </span>`;
  resultDiv.style.color = '#000';
  const resultSpan = resultDiv.querySelectorAll('span');
  resultSpan.forEach((item) => {

    if (bmi < 18.5) {
        item.style.color = 'red';
      } else if (bmi < 25) {
        item.style.color = 'rgba(0,213,255,1)';
      } else {
        item.style.color = 'red';
      }
  })
}
