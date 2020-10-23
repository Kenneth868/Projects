
function setSize(fSize) {
    var x = document.getElementsByClassName('wrapper');
    for (var i=0; i<x.length; i++) {
        x[i].className = fSize + ' wrapper';
    }

        sessionStorage.setItem('fontSize',fSize);
}

function loadFromSession() {
    if (sessionStorage.getItem('fontSize')===null) {
        sessionStorage.setItem('fontSize','normal');
    } else {
        setSize(sessionStorage.getItem('fontSize'));
    }
}

function clearSession() {
    sessionStorage.clear();
    location.reload();
}

function getVariables(){
  document.getElementById('getUsername').innerHTML = sessionStorage.getItem('usernameValue');

  document.getElementById('getGender').innerHTML = sessionStorage.getItem('genderValue');

  document.getElementById('getAge').innerHTML = sessionStorage.getItem('ageValue');

  document.getElementById('getColor').innerHTML = sessionStorage.getItem('colorValue');

  document.getElementById('getSpacesuit').innerHTML = sessionStorage.getItem('suitValue');

  document.getElementById('getTime').innerHTML = sessionStorage.getItem('remainingTime');

  document.getElementById('getHealth').innerHTML = sessionStorage.getItem('remainingHealth');

  document.getElementById('getOxygen').innerHTML = sessionStorage.getItem('remainingOxygen');

  var percentHP = document.getElementById('getHealth').innerHTML = sessionStorage.getItem('remainingHealth');
  percentHP = percentHP / 6 + '%';
  document.getElementById('healthPercent').innerHTML = percentHP;


  var percentO2 = document.getElementById('getOxygen').innerHTML = sessionStorage.getItem('remainingOxygen');
  percentO2 = percentO2 / 6 + '%';
  document.getElementById('oxygenPercent').innerHTML = percentO2;

  var time = sessionStorage.getItem('remainingTime');
  time = parseInt(time);
  var health = sessionStorage.getItem('remainingHealth');
  health = parseInt(health);
  var oxygen = sessionStorage.getItem('remainingOxygen');
  oxygen = parseInt(oxygen);

  var finalScore = time + health + oxygen;
  document.getElementById('finalScore').innerHTML = finalScore;
}

function close_window() {
  if (confirm("Close Window?")) {
    window.open('','_parent','');
    close();
  }
}
