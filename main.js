var totalSeconds = 300;

function setTimer() {

  seconds = Math.abs(totalSeconds);

  var hours = Math.floor(seconds / 3600);
  seconds = seconds - (hours * 3600);
  if (hours < 10) {
    hours = '0' + hours;
  }

  var minutes = Math.floor(seconds / 60);
  seconds = seconds - (minutes * 60);
  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  timer = document.querySelector('#timer h2');
  timer.innerHTML = hours + ':' + minutes + ':' + seconds;

  totalSeconds--;

  if (totalSeconds < 0) {
    timer.classList.remove('text-info');
    timer.classList.add('text-danger');
  }

}

setInterval(setTimer, 1000);

setTimer();



