let hours = 0;
let minutes = 0;
let seconds = 0;
let timer;

function startTimer() {
  // Start the timer by setting an interval that calls the updateTimer function every second
  timer = setInterval(updateTimer, 1000);
}
function stopTimer() {
    // Stop the timer by clearing the interval
    clearInterval(timer);
}
function resetTimer() {
    // Reset the timer by changing values
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById("hours").textContent = padTime(hours);
    document.getElementById("minutes").textContent = padTime(minutes);
    document.getElementById("seconds").textContent = padTime(seconds);

    // Stop the timer by clearing the interval
    clearInterval(timer);
}

function updateTimer() {
  // Increment the seconds
  seconds++;

  // Check if seconds reach 60, if so, reset seconds and increment minutes
  if (seconds === 60) {
    seconds = 0;
    minutes++;

    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  // Update the HTML elements with the updated time values
  document.getElementById("hours").textContent = padTime(hours);
  document.getElementById("minutes").textContent = padTime(minutes);
  document.getElementById("seconds").textContent = padTime(seconds);
}

function padTime(time) {
  // Pad the time values with leading zeros if necessary (e.g., 1 becomes 01)
  return time.toString().padStart(2, "0");
}
