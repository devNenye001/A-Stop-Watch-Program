// STOPWATCH PROGRAM

// Declaring the variables
const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

// START BUTTON FUNCTION
function start() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 100);
    isRunning = true;
  }
}

// STOP BUTTON FUNCTION
function stop() {
  if (isRunning) {
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
  }
}

// RESET BUTTON FUNCTION
function reset() {
  clearInterval(timer);
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  display.textContent = "00:00.00";
}

// UPDATE TIME FUNCTION
function update() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  let minutes = Math.floor(elapsedTime / (1000 * 60));
  let seconds = Math.floor((elapsedTime / 1000) % 60);
  let milliseconds = Math.floor((elapsedTime % 1000) / 10);

  // string formatting
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  milliseconds = String(milliseconds).padStart(2, "0");

  // Update display
  display.textContent = `${minutes}:${seconds}.${milliseconds}`;
}