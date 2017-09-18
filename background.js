var interval = 20 * 60 * 1000;

var timeLeft = interval;

var timer;

startTimer();

function startTimer() {
  clearInterval(timer);
  timerLeft = interval;
  timer = setInterval(function() {
    timeLeft -= 1000;

    if (timeLeft <= 0) {
      alert('Rest your eyes');
      timeLeft = interval;
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
  timeLeft = interval;
}
