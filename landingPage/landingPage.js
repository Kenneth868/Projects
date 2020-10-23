/*Landing Page Javascript*/
function setFromValue() {
//validate name
var name = document.getElementById('username').value;
if(name==""){
  document.getElementById('nameError').innerHTML = 'Please enter a value';
  document.getElementById('username').className = 'error';
} else if (name.length < 2) {
    document.getElementById('nameError').innerHTML = 'Name must be greater than one character long';
    document.getElementById('username').className = 'error';
} else {
    document.getElementById('nameError').innerHTML = '';
    document.getElementById('username').className = 'regular';
    sessionStorage.setItem('usernameValue', name);
}

var gender = document.getElementById('gender').value;
sessionStorage.setItem('genderValue', gender);

var age = document.getElementById('age').value;
if(age == ""){
  document.getElementById('ageError').innerHTML = 'Please enter a value';
  document.getElementById('age').className = 'error';
} else if (age <= 7){
  document.getElementById('ageError').innerHTML = 'This game is for ages 7+';
  document.getElementById('age').className = 'error';
} else if (age >= 110){
  document.getElementById('ageError').innerHTML = 'Please enter an age below 110';
  document.getElementById('age').className = 'error';
} else {
  document.getElementById('ageError').innerHTML = '';
  document.getElementById('age').className = 'regular';
  sessionStorage.setItem('ageValue', age);
}

var color = document.getElementById('colours').value;
if(color == "Red" || color == "red"){
  sessionStorage.setItem('colorValue', color);
}else if(color == "Blue" || color == "blue"){
  sessionStorage.setItem('colorValue', color);
}else if(color == "Green" || color == "green"){
  sessionStorage.setItem('colorValue', color);
}else if(color == "Pink" || color == "pink"){
  sessionStorage.setItem('colorValue', color);
}else if (color == "" || color == "white" || color == "White"){
  sessionStorage.setItem('colorValue', color);
}else {
  document.getElementById('colorError').innerHTML = 'Please select <span style="color: red;">Red</span>, <span style="color: blue;">Blue</span>, <span style="color: green;">Green</span>, <span style="color: pink;">Pink</span> or <span style="color: white;">White</span>';
  document.getElementById('suitColor').className = 'error';
  }
}

function startGame(){
  if (document.getElementById('username').className == 'error' || document.getElementById('age').className == 'error' || document.getElementById('gender').value == ''){
    document.getElementById('startGame').style.display = 'none';
  }else{
    document.getElementById('startGame').style.display = 'block';
  }
}

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

  function setSuit() {
    var colours = document.getElementById('colours');
    var suitImg = document.getElementById('suitImg');
    var selSuit;

    var i;
    for (i=0; i<colours.length; i++) {
      if(colours[i].selected === true) {
        selSuit = colours[i].value;
      }

      switch (selSuit) {
        case 'white':
          suitImg.src = 'images/spaceSuitWhite.png';
          suitImg.alt = 'White Space Suit';
          break;
        case 'red':
          suitImg.src = 'images/spaceSuitRed.png';
          suitImg.alt = 'Red Space Suit';
          break;
        case 'green':
          suitImg.src = 'images/spaceSuitGreen.png';
          suitImg.alt = 'Green Space Suit';
          break;
        case 'blue':
          suitImg.src = 'images/spaceSuitBlue.png';
          suitImg.alt = 'Blue Space Suit';
          break;
        case 'pink':
          suitImg.src = 'images/spaceSuitPink.png';
          suitImg.alt = 'Pink Space Suit';
          break;

      }
    }
  }
