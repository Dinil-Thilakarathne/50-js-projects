let timerInterval;
let minutes = 25;
let seconds = 0;

const timerDisplay = document.querySelector('.timer');
const startButton = document.querySelector('#startBtn');
const resetButton = document.querySelector('#resetBtn');

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
  // Disable the start button during the timer
  startButton.disabled = true;

  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  if (seconds === 0) {
    if (minutes === 0) {
      // Timer is finished
      clearInterval(timerInterval);
      timerDisplay.textContent = '00:00';
      startButton.disabled = false;
      return;
    }
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }

  // Update the timer display
  timerDisplay.textContent = `${padTime(minutes)}:${padTime(seconds)}`;
}

function resetTimer() {
  // Clear the interval and reset the timer values
  clearInterval(timerInterval);
  minutes = 25;
  seconds = 0;
  timerDisplay.textContent = `${padTime(minutes)}:${padTime(seconds)}`;
  startButton.disabled = false;
}

function padTime(time) {
  // Pad the time values with leading zeros if necessary (e.g., 1 becomes 01)
  return time.toString().padStart(2, '0');
}
