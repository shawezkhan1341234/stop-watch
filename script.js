// Variables to store time values
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

// Variable to store the interval ID
let intervalId;

// Function to update the timer
function updateTimer() {
  milliseconds += 10;

  if (milliseconds === 1000) {
    milliseconds = 0;
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
  }

  // Format the time values as strings with leading zeros
  const formattedTime = `${(minutes < 10 ? '0' : '')}${minutes}:${(seconds < 10 ? '0' : '')}${seconds}:${(milliseconds < 100 ? '0' : '')}${milliseconds}`;
  document.getElementById('timer').textContent = formattedTime;
}

// Start the stopwatch
function startTimer() {
  intervalId = setInterval(updateTimer, 10);
  document.getElementById('startBtn').disabled = true;
}

// Stop the stopwatch
function stopTimer() {
  clearInterval(intervalId);
  document.getElementById('startBtn').disabled = false;
}

// Reset the stopwatch
function resetTimer() {
  clearInterval(intervalId);
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  document.getElementById('timer').textContent = '00:00:00';
  document.getElementById('startBtn').disabled = false;
}

// Attach event listeners to the buttons
document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('stopBtn').addEventListener('click', stopTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);
