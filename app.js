window.onload = function () {
  var minutes = 00;
  var seconds = 00;
  var tens = 00;
  var appenTens = document.getElementById("tens");
  var appenSeconds = document.getElementById("seconds");
  var appenMinutes = document.getElementById("minutes");
  var buttonStart = document.getElementById("button-start");
  var buttonPause = document.getElementById("button-stop");
  var buttonReset = document.getElementById("button-reset");
  var Interval;

  buttonStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  }


  buttonPause.onclick = function () {
    clearInterval(Interval);
  }


  buttonReset.onclick = function () {
    clearInterval(Interval);
    minutes = "00";
    seconds = "00";
    tens = "00";
    appenTens.innerHTML = tens;
    appenSeconds.innerHTML = seconds;
    appenMinutes.innerHTML = minutes;
  }


  function startTimer() {
    tens++;

    if (tens <= 9) {
      appenTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      appenTens.innerHTML = tens;
    }

    if (tens > 99) {
      seconds++;
      appenSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appenTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appenSeconds.innerHTML = seconds;
    }

    if (seconds > 59) {
      minutes++;
      appenMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      appenSeconds.innerHTML = "0" + 0;
    }

    if (minutes > 9) {
      appenMinutes.innerHTML = minutes;
    }
  }
}
