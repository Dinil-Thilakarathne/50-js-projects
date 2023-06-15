let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let timer;

function startTimer() {
  // Start the timer by setting an interval that calls the updateTimer function every second
  timer = setInterval(updateTimer, 10);
}
function stopTimer() {
    // Stop the timer by clearing the interval
    clearInterval(timer);
}
function resetTimer() {
    // Reset the timer by changing values
    minutes = 0;
    seconds = 0;
    miliseconds = 0;
    document.getElementById("minutes").textContent = padTime(minutes);
    document.getElementById("seconds").textContent = padTime(seconds);
    document.getElementById("miliseconds").textContent = padTime(miliseconds);

    // Stop the timer by clearing the interval
    clearInterval(timer);
}

function updateTimer() {
  // Increment the seconds
  miliseconds++;

  // Check if seconds reach 60, if so, reset seconds and increment minutes
  if (miliseconds === 100) {
    miliseconds = 0;
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
  }
  // Update the HTML elements with the updated time values
  document.getElementById("minutes").textContent = padTime(minutes);
  document.getElementById("seconds").textContent = padTime(seconds);
  document.getElementById("miliseconds").textContent = padTime(miliseconds);
}

function padTime(time) {
  // Pad the time values with leading zeros if necessary (e.g., 1 becomes 01)
  return time.toString().padStart(2, "0");
}
