var timeText = document.getElementById('time-left');
timeText.innerHTML =
    timeToString(chrome.extension.getBackgroundPage().timeLeft);

setInterval(function() {
  timeText.innerHTML =
      timeToString(chrome.extension.getBackgroundPage().timeLeft);
}, 1000);

function timeToString(ms) {
  var min = Math.floor(ms / (60 * 1000));
  var sec = Math.floor((ms % (60 * 1000)) / 1000);
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  return min + ":" + sec;
}

document.getElementById('start-button').addEventListener("click", function() {
  chrome.extension.getBackgroundPage().startTimer();
});

document.getElementById('stop-button').addEventListener("click", function() {
  timeText.innerHTML =
      timeToString(chrome.extension.getBackgroundPage().interval);
  chrome.extension.getBackgroundPage().stopTimer();
});
