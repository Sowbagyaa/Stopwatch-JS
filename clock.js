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
    document.getElementById("body").style.backgroundColor = "plum"
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
    document.getElementById("body").style.backgroundColor = "cadetBlue"
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

function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

function validateForm() {
  var name = document.Registration.name.value;
  var state = document.Registration.state.value;
  var gender = document.Registration.gender.value;
  var mobile = document.Registration.mobile.value;
  var email = document.Registration.email.value;



  var nameErr = emailErr = mobileErr = stateErr = genderErr = true;

  if (name == "") {
    printError("nameErr", "*Name is Required");
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(name) === false) {
      printError("nameErr", "Please enter a valid name");
    } else {
      printError("nameErr", "");
      nameErr = false;
    }
  }

  if (email == "") {
    printError("emailErr", "*Email ID is required");
  } else {
    var regex = /^\S+@\S+\.\S+$/;
    if (regex.test(email) === false) {
      printError("emailErr", "Please enter a valid email address");
    } else {
      printError("emailErr", "");
      emailErr = false;
    }
  }

  if (mobile == "") {
    printError("mobileErr", "*Phone Number is required");
  } else {
    var regex = /^[1-9]\d{9}$/;
    if (regex.test(mobile) === false) {
      printError("mobileErr", "Please enter a valid 10 digit mobile number");
    } else {
      printError("mobileErr", "");
      mobileErr = false;
    }
  }

  if (state == "Select") {
    printError("stateErr", "*Please select your state");
  } else {
    printError("stateErr", "");
    stateErr = false;
  }

  if (gender == "") {
    printError("genderErr", "*Gender is required");
  } else {
    printError("genderErr", "");
    genderErr = false;
  }

  if ((nameErr || emailErr || mobileErr || stateErr || genderErr) == true) {
    return false;
  } else {
    var dataPreview = "You've entered the following details: \n" +
      "Full Name: " + name + "\n" +
      "Gender: " + gender + "\n";
    "Mobile Number: " + mobile + "\n" +
      "Email Address: " + email + "\n" +
      "state: " + country + "\n";

    window.alert(dataPreview);
  }
};


