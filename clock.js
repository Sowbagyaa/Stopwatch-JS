window.onload = function () {

  var seconds = 00;
  var tens = 00;
  var mins = 00;
  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")
  var appendMinutes = document.getElementById("minutes")
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var displayStatus = document.getElementById("display");
  var Interval;


  buttonStart.onclick = function () {

    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
    document.getElementById("display").style.display = "block"
    document.getElementById("display").innerHTML = "Stopwatch Started"
    document.getElementById("body").style.backgroundColor = "DarkSlateGray"
  }

  buttonStop.addEventListener("click", function () {
    clearInterval(Interval);
    var displayText = displayStatus.innerHTML;

    if (displayText == "" || displayText == "Stopwatch is now Reset!") {
      document.getElementById("display").style.display = "block"
      document.getElementById("display").innerHTML = "Stopwatch is not running"

    }
    if (displayText == "Stopwatch Started") {
      document.getElementById("display").style.display = "block"
      document.getElementById("display").innerHTML = "Stopwatch Stopped"

    }
    document.getElementById("body").style.backgroundColor = "LightSteelBlue"


  });


  buttonReset.onclick = function () {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    mins = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
    document.getElementById("display").innerHTML = "Stopwatch is now Reset!"
    document.getElementById("body").style.backgroundColor = "black"
    // document.getElementById("container").style.boxShadow = " 4px 4px 8px white"
  }



  function startTimer() {
    tens++;

    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      appendTens.innerHTML = tens;

    }

    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
    if (seconds > 60) {
      mins++;
      appendMinutes.innerHTML = "0" + mins;
      seconds = 0;
      appendMinutes.innerHTML = "0" + 0;
    }

  }



}


