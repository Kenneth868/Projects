var health = 600;
var oxygen = 600;
var myTimer;
var myTimerOxygen;
var myTimerHealth;
var duration = 300; //5 mins
var oxygenTanksComplete = false; //boolean to switch to true when oxygen tanks are fixed
var heatReflectorsComplete = false; //boolean to switch to true when heat reflectors are fixed
var broken1 = false;
var broken2 = false;
var broken3 = false;
var broken4 = false;
var broken5 = false;

/*Game page functions*/
/*Health bar functions*/
function damage() {
  if(health > 6){
    health = health-60; //this value is 10% of the max value
    sessionStorage.setItem('remainingHealth', health); //health remaining
    document.getElementById('health').innerHTML = health/6 + "%";
    document.getElementById('healthbar').style.height=health;
  }
  else{
    alert('Your health has reached 0%, and you have died.');
    window.location = "../endPage/endPage.html";
    return;
  }
}

function heal() {
  if(health < 600){
    health = health+60;
    sessionStorage.setItem('remainingHealth', health); //health remaining
    document.getElementById('health').innerHTML = health/6 + "%";
    document.getElementById('healthbar').style.height=health;
  }
  else{
    alert('You are already at 100% health.')
    return;
  }
}

function updateHealth(x) {
  if (health+x >= 0){ //prevents user taking damage that would put them below 0%
    //health + x means the value they enter + health cannot be lower than 6
    //this will not be used to heal the user - validation for damage is the only necessity
    health = health+x;
    sessionStorage.setItem('remainingHealth', health); //health remaining
    document.getElementById('health').innerHTML = health/6 + "%";
    document.getElementById('healthbar').style.height=health;
  }
  else{
    return;
  }
}
/*Enemy health function for initial scene*/
  var enemyHealth =250;

  function enemyDamage(y){
    if(enemyHealth+y >= 0){
    enemyHealth = enemyHealth+y;
    document.getElementById('enemyHealth').innerHTML = enemyHealth/2.5 + "%";
    document.getElementById('enemyHpBar').style.width=enemyHealth;
  }else{
    return;
  }
  }

/*Oxygen bar functions*/
function decreaseo2() {
  if (oxygen >= 6){
    oxygen = oxygen-30; //this value is 5% of the max value
    sessionStorage.setItem('remainingOxygen', oxygen);
    document.getElementById('oxygen').innerHTML = oxygen/6 + "%";
    document.getElementById('oxygenbar').style.height=oxygen;
  }
  else{
    alert('Your oxygen level has reached 0%! You will start taking damage unless you get oxygen!')
    return;
  }
}

function increaseo2() {
  if(oxygen < 600){
    oxygen = oxygen+30;
    sessionStorage.setItem('remainingOxygen', oxygen);
    document.getElementById('oxygen').innerHTML = oxygen/6 + "%";
    document.getElementById('oxygenbar').style.height=oxygen;
  }
  else{
    alert('Oxygen level cant go above 100%')
    return;
  }
}

function oxygenDecay(){
  myTimerOxygen = setInterval('oxygenCountdown()', 800);
}

function oxygenCountdown(){
  if(oxygen >= 6){
  oxygen-= 6;
  sessionStorage.setItem('remainingOxygen', oxygen);
  document.getElementById('oxygen').innerHTML = oxygen/6 + "%";
  document.getElementById('oxygenbar').style.height = oxygen;
}
else{
  return;
  }
}

function healthDecay(){ //health falls IF oxygen level is 0%
    myTimerHealth = setInterval('healthCountdown()', 1400);
}

function healthCountdown(){
  if (oxygen <= 0 && health >= 6){
  health-= 6;
  sessionStorage.setItem('remainingHealth', health); //health remaining
  document.getElementById('health').innerHTML = health/6 + "%";
  document.getElementById('healthbar').style.height =health;
}else if(health<=6){
  redirect();
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

function startTimer() { //when player presses start game button//when game
  myTimer = setInterval('countdown()', 1000);
}

function stopTimer() {
    clearInterval(myTimer);
    clearInterval(myTimerHealth);
    clearInterval(myTimerOxygen);
  }

function countdown() {
  if (duration > 0){
    duration--;
    sessionStorage.setItem('remainingTime', duration); //duration remaining
    document.getElementById('timer').innerHTML = duration;
  }
  else{
    window.location = "../endPage/endPage.html";
  }
}

//Hide and show functions to display and remove/hide the different options the user will select

  function  hideDialogue1(){
    var link = document.getElementById('dialogue1');
    link.style.display = 'none';
  }

  function showLeftResult(){
    var leftResult = document.getElementById('leftResult_Dialogue1');
    leftResult.style.display = 'block';
  }

  function showRightResult(){
    var rightResult = document.getElementById('rightResult_Dialogue1');
    rightResult.style.display = 'block';
  }

  function hideLeftResultDialogue(){
    var leftResultDialogue = document.getElementById('leftResult_Dialogue1');
    leftResultDialogue.style.display = 'none';
  }

  function hideRightResultDialogue(){
    var rightResultDialogue = document.getElementById('rightResult_Dialogue1');
    rightResultDialogue.style.display = 'none';
  }

  function showWaitResult(){
    var wait_Result = document.getElementById('waitResult');
    wait_Result.style.display = 'block';
    oxygenDecay();
    mapHallway();
  }

  function showDoorResult(){
    var door_Result = document.getElementById('dmgDoorResult');
    door_Result.style.display = 'block';
    oxygenDecay();
    mapHallway();
  }

  function showTankResult(){
    var tank_Result = document.getElementById('dmgTankResult');
    tank_Result.style.display = 'block';
    oxygenDecay();
    mapHallway();
  }

  function showWindowResult(){
    var window_Result = document.getElementById('dmgWindowResult');
    window_Result.style.display = 'block';
    oxygenDecay();
    mapHallway();
  }

  function hideWaitResult(){
    var hideWait_Result = document.getElementById('waitResult');
    hideWait_Result.style.display = 'none';
  }

  function hideDmgDoorResult(){
    var hideDoor_Result = document.getElementById('dmgDoorResult');
    hideDoor_Result.style.display = 'none';
  }

  function hideDmgTankResult(){
    var hideTank_Result = document.getElementById('dmgTankResult');
    hideTank_Result.style.display = 'none';
  }

  function hideDmgWindowResult(){
    var hideWindow_Result = document.getElementById('dmgWindowResult');
    hideWindow_Result.style.display = 'none';
  }

  function showOxygenTanks(){
    var oxygenTanks = document.getElementById('checkOxygenTanks');
    oxygenTanks.style.display = 'block';
  }

  function showHeatReflectors(){
    var heatReflectors = document.getElementById('checkHeatReflectors');
    heatReflectors.style.display = 'block';
  }

  function showLoudSound(){
    var loudSound = document.getElementById('checkLoudSound');
    loudSound.style.display = 'block';
  }

  function hideCheckLoudSound(){
    var checkLoudSound = document.getElementById('checkLoudSound');
    checkLoudSound.style.display = 'none';
  }

  function hideCheckOxygen(){
    var checkOxygen = document.getElementById('checkOxygenTanks');
    checkOxygen.style.display = 'none';
  }

  function hideCheckReflectors(){
    var checkHeatReflectors = document.getElementById('checkHeatReflectors');
    checkHeatReflectors.style.display = 'none';
  }

  function showVentMaze(){
    var maze = document.getElementById('ventMaze');
    maze.style.display = 'block';
    showVentImage();
  }

  function goBack(){ //show go back
    var back = document.getElementById('goBackDialogue');
    back.style.display = 'block';
  }

  function showPreventOxygenCheck(){
    var prevent = document.getElementById('preventOxygenCheck');
    prevent.style.display = 'block';
  }

  function hidePreventOxygenCheck(){
    var prevent = document.getElementById('preventOxygenCheck');
    prevent.style.display = 'none';
  }

  function showDoorLocked(){
    var lockedDoor = document.getElementById('doorLocked');
    lockedDoor.style.display = 'block';
  }

  function hideDoorLocked(){
    var lockedDoor = document.getElementById('doorLocked');
    lockedDoor.style.display = 'none';
  }

  function hideGoBack(){
    var back = document.getElementById('goBackDialogue');
    back.style.display = 'none';
  }

  function hideVentMaze(){
    var maze = document.getElementById('ventMaze');
    maze.style.display = 'none';
  }

  function showVentDirection1(){
    var direction1 = document.getElementById('ventDirection1_West');
    direction1.style.display = 'block';
  }

  function hideVentDirection1(){
    var direction1 = document.getElementById('ventDirection1_West');
    direction1.style.display = 'none';
  }

  function showVentDirection2South(){
    var direction2 = document.getElementById('ventDirection2_South');
    direction2.style.display = 'block';
  }

  function hideDirection2South(){
    var direction2South = document.getElementById('ventDirection2_South');
    direction2South.style.display = 'none';
  }

  function showDirection3South(){
    var direction3South = document.getElementById('ventDirection3_South');
    direction3South.style.display = 'block';
  }

  function showDirection3East(){
    var direction3East = document.getElementById('ventDirection3_East');
    direction3East.style.display = 'block';
  }

  function hideDirection3South(){
    var direction3South = document.getElementById('ventDirection3_South');
    direction3South.style.display = 'none';
  }

  function hideDirection3East(){
    var direction3East = document.getElementById('ventDirection3_East');
    direction3East.style.display = 'none';
  }

  function showDirection4South(){
    var direction4South = document.getElementById('ventDirection4_South');
    direction4South.style.display = 'block';
  }

  function showDirection4West(){
    var direction4West = document.getElementById('ventDirection4_West');
    direction4West.style.display = 'block';
  }

  function showDirection5North(){
    var direction5North = document.getElementById('ventDirection5_North');
    direction5North.style.display = 'block';
  }

  function showDirection5East(){
    var direction5East = document.getElementById('ventDirection5_East');
    direction5East.style.display = 'block';
  }

  function hideDirection4South(){
    var direction4South = document.getElementById('ventDirection4_South');
    direction4South.style.display = 'none';
  }

  function hideDirection4West(){
    var direction4West = document.getElementById('ventDirection4_West');
    direction4West.style.display = 'none';
  }

  function showPasswordRoom(){
    var passowrdRoom = document.getElementById('passwordRoom');
    passwordRoom.style.display = 'block';
    mapPWRoom();
  }

  function hidePasswordRoom(){
    var passowrdRoom = document.getElementById('passwordRoom');
    passwordRoom.style.display = 'none';
  }

  function leaveVent(){ //show vent_left
    var leaveVent = document.getElementById('vent_Left');
    leaveVent.style.display = 'block';
  }

  function hideDirection5East(){
    var direction5East = document.getElementById('ventDirection5_East');
    direction5East.style.display = 'none';
  }

  function hideDirection5North(){
    var direction5North = document.getElementById('ventDirection5_North');
    direction5North.style.display = 'none';
  }

  function showDirection6North(){
    var direction6North = document.getElementById('ventDirection6_North_Death');
    direction6North.style.display = 'block';
    redirect();
  }

  function showEnterPassword(){
    var password = document.getElementById('enterPassword');
    password.style.display = 'block';
    mapReflectors();
  }

  function showInitialHeatReflectors(){
    var heatImage = document.getElementById('initialHeatReflectors');
    heatImage.style.display = 'block';
}

  function enterPassword(){
    var password = prompt('Enter the password', '');
    if(password == 'Password123'){
      document.getElementById("enterPassword").innerHTML = password;
      hideEnterPassword();
      //showCorrectPassword();
      showInitialHeatReflectors()
      showOutside();
    }else{
      alert('Wrong Password');
      hideEnterPassword();
      goBack();
    }
  }

  function hideEnterPassword(){
    var password = document.getElementById('enterPassword');
    password.style.display = 'none';
  }

  function showCorrectPassword(){
    var display = document.getElementById('correctPassword');
    display.style.display = 'block';
  }

  function hideVentLeft(){
    var ventleft = document.getElementById('vent_Left');
    ventleft.style.display = 'none';
  }

  function showFixOxygenTanks(){
    var oxygentanks = document.getElementById('fixOxygenTanks');
    oxygentanks.style.display = 'block';

    // document.getElementById('oxygenBg').src="/Website CSC1030/gamePage/images/oxygenbg.png";
    // document.getElementById('oxygenBg').alt="http://www.freepik.com Designed by vectorpocket / Freepik";

    mapOxygen();

    //showMathsQuiz();
  }

  // function showMathsQuiz(){
  //   var mathsquiz = document.getElementById('mathsQuiz');
  //   mathsquiz.style.display = 'block';
  // }

  function removeEnemyShip(){
    document.getElementById('enemyHeader').style.display = 'none';
    document.getElementById('enemyHpBar').style.display = 'none';
    document.getElementById('enemyHpStatus').style.display = 'none';
    document.getElementById('enemyHealth').style.display = 'none';
    document.getElementById('enemyShip').style.display = 'none';
  }

  //oxygen room javascript

  var difficulty;
  var err = new Audio();
  err.src = "sounds/error.wav";

  var beep = new Audio();
  beep.src = "sounds/beep.wav";

  function lookAroundOxygen() {
      document.getElementById('desc').innerHTML='In the room you see the oxygen management terminal and a spare oxygen tank in the corner.';
  	  document.getElementById('lookAroundO2').className='taskCompleted';
      document.getElementById('pickUpTank').className='promptDiscovered';
    	document.getElementById('checkTerminal').className='promptDiscovered';
  }

  function returnHallway() {
    mapHallway();
  }

  function showOxygenRoom() {
    document.getElementById("oxygenBg").classList.remove("hideMe");
    document.getElementById("oxygenBg").classList.add("showMe");
  }

  function hideOxygenRoom() {
    document.getElementById("oxygenBg").classList.remove("showMe");
    document.getElementById("oxygenBg").classList.add("hideMe");
  }

  function showHallway() {
    document.getElementById("hallway").classList.remove("hideMe");
    document.getElementById("hallway").classList.add("showMe");
  }

  function hideHallway() {
    document.getElementById("hallway").classList.remove("showMe");
    document.getElementById("hallway").classList.add("hideMe");
  }

  function pickUpTank() {
    	document.getElementById('o2tankInv').className='itemAcquired';
      document.getElementById('pickUpTank').className='taskCompleted';
  }
  function checkTerminal() {
    	document.getElementById('desc').innerHTML='By checking the terminal you can see that the oxygen management system needs to be reset. <br> You will need to reinstall the oxygen tank and bypass the software.'
    	document.getElementById('repairOxygen').className='promptDiscovered';
      document.getElementById('checkTerminal').className='taskCompleted';
      document.getElementById('task2').className='taskDiscovered';
  }
  function repairOxygen() {

      var haveOxygenTank = document.getElementById('o2tankInv').classList.contains('itemAcquired');

      if(haveOxygenTank)
      {
        document.getElementById('oxygenBg').className='hideMe';
        document.getElementById('mathsQuiz').style.display='initial';
        document.getElementById('repairOxygen').className='taskCompleted';
      }
      else document.getElementById('desc').innerHTML='<strong>ERROR</strong>:You need the oxygen tank to continue.';
  }

  function startQuiz() {
      var difficultySelect = document.getElementById('difficulty');

      var difficultyGame= "";
      for(var i=0; i< difficultySelect.length; i++) {
          if(difficultySelect[i].selected) {
            difficultyGame = difficultySelect[i].value;
          break;
      }
   }

      document.getElementById('mathIntro').className='hideMe';
      document.getElementById('mathGame').style.display='initial';

      switch(difficultyGame) {
        case 'easy': difficulty=1; break;
        case 'medium': difficulty=1.5; break;
        case 'hard': difficulty=2; break;
      }
  }

  function chooseCorrect1() {
      document.getElementById('question1').innerHTML="Correct! <br> What is the pH value of pure water?"
      document.getElementById('answers1').classList.add('hideMe');
      document.getElementById('answers2').classList.remove('hideMe')
      // document.getElementById('answers2').classList.add('showMe');
  }

  function chooseCorrect2() {
      document.getElementById('question1').innerHTML="Correct again! One more to go!<br> What is the ....?";
      document.getElementById('answers2').classList.remove('showMe');
      document.getElementById('answers2').classList.add('hideMe');
      document.getElementById("answers3").classList.add('showMe');

  }

  function chooseCorrect3() {
      document.getElementById('desc').innerHTML="Congratulations, the oxygen management system has been repaired!";
      document.getElementById('task2').classList.remove("taskDiscovered");
      document.getElementById('task2').classList.add("taskCompleted");
      document.getElementById('oxygenBg').classList.remove("hideMe");
      document.getElementById('mathsQuiz').style.display="none";
      oxygenTanksComplete = true;
  }

  function chooseIncorrect() {
      decreaseo2();

  }
  function decreaseo2() {
    if (oxygen >= 6){
      oxygen = oxygen-30*(difficulty); //this value is 5% of the max value
      sessionStorage.setItem('remainingOxygen', oxygen);
      document.getElementById('oxygen').innerHTML = oxygen/6 + "%";
      document.getElementById('oxygenbar').style.height=oxygen;
    }
    else{
      alert('Your oxygen level has reached 0%! You will start taking damage unless you get oxygen!')
      return;
    }
  }

  function playError() {
    err.play();
  }

  function playBeep() {
    beep.play();
  }

  //Hide and show functions to display and remove/hide the different options the user will select

  // hides the first text screen once the open hatch button is pressed
  function  hideOutside(){
      var os = document.getElementById('outside');
      os.style.display = 'none';
  }
  // shows the second text screen when the hatch has been opened
  function showOpenHatch(){
      var oh = document.getElementById('openHatch');
      oh.style.display = 'initial';
  }
  // hides the second text screen
  function hideOpenHatch(){
      var hoh = document.getElementById('openHatch');
      hoh.style.display = 'none';
  }
  // shows the text screen once the wires have been fixed
  function showWiringFixed(){
      var oh = document.getElementById('fixed');
      oh.style.display = 'initial';
  }
                  //IMAGES
  // hides wiring image before and after challenge
  function hideWiringImage(){
      var hwImage = document.getElementById('wiringImg');
      hwImage.style.display = 'none';
  }
  function showWiringImage(){
      var swImage = document.getElementById('wiringImg');
      swImage.style.display = 'initial';
  }
  function showSuccessImage(){
      var swImage = document.getElementById('successImg');
      swImage.style.display = 'initial';
  }
  function hideSuccesImage(){
    var hsi = document.getElementById('successImg');
    hsi.style.display = 'none';
  }
  function showButtonImage(){
    var sbiImage = document.getElementById('buttonImg');
    sbiImage.style.display = 'initial';
  }
  function hideButtonImage(){
    var hbiImage = document.getElementById('buttonImg');
    hbiImage.style.display = 'none';
  }
  function showSpaceExplosion(){
    var speImage = document.getElementById('shipExplosion');
    speImage.style.display = 'initial';
  }
  function hidePressHatchImage(){
    var hphImage = document.getElementById('pressHatch');
    hphImage.style.display = 'none';
  }

  // broken buttons game
  function hideBrokenButton1(){
      var bb = document.getElementById('broken1');
      bb.style.display = 'none'
      broken1 = true;
  }
  function hideBrokenButton2(){
      var bb = document.getElementById('broken2');
      bb.style.display = 'none'
      broken2 = true;
  }
  function hideBrokenButton3(){
      var bb = document.getElementById('broken3');
      bb.style.display = 'none'
      broken3 = true;
  }
  function hideBrokenButton4(){
      var bb = document.getElementById('broken4');
      bb.style.display = 'none'
      broken4 = true;
  }
  function hideBrokenButton5(){
      var bb = document.getElementById('broken5');
      bb.style.display = 'none'
      broken5 = true;
  }

  // show & hide text >>
  function showTextTwo(){
    var textTwo = document.getElementById('text2');
    textTwo.style.display = 'initial';
  }
  function showTextThree(){
    var textThree = document.getElementById('text3');
    textThree.style.display = 'initial';
  }
  function showTextFour(){
    var textFour = document.getElementById('text4');
    textFour.style.display = 'initial';
  }
  function showTextFive(){
    var textFour = document.getElementById('text5');
    textFour.style.display = 'initial';
  }
  // the two buttons that will be an option to get back into the ship
  function showReleaseButton1(){
    var bgi = document.getElementById('buttonGetInside1');
    bgi.style.display = 'initial';
  }
  function showReleaseButton2(){
    var bgitwo = document.getElementById('buttonGetInside2');
    bgitwo.style.display = 'initial';
  }
  // hide fixed screen
  function hideFixedScreen(){
    var hf = document.getElementById('fixed');
    hf.style.display = 'none';
    heatReflectorsComplete = true;
  }
  // shows destroyed screen
  function showDestroyedMessage(){
    var dead = document.getElementById('destroyed');
    dead.style.display = 'initial';
  }
  function showBackInsideShip(){
    var bis = document.getElementById('inside');
    bis.style.display = 'initial';
  }

  function showOutside(){
    var outside = document.getElementById('outside');
    outside.style.display = 'block';
    var initialHeatReflectors = document.getElementById('initialHeatReflectors');
    initialHeatReflectors.style.display = 'block';
  }

  function hideFixOxygen(){
     var fixoxygen = document.getElementById('fixOxygenTanks');
     fixoxygen.style.display = 'none';
     var optionsOxygen = document.getElementById('optionsOxygen');
     optionsOxygen.style.display = 'none';
     var oxygenbg = document.getElementById('oxygenBg');
     oxygenbg.style.display = 'none';
   }

  function returnHallway(){
    if(heatReflectorsComplete == true && oxygenTanksComplete == true){
    hideFixOxygen();
    hideHallway();
    showSuccessScreen();
      //show congratulations page with button to end page
    }else if(oxygenTanksComplete == false){
      alert("You should fix the oxygen tank before doing that.");
    }else if(heatReflectorsComplete == false){
      showOutside();
      hideFixOxygen();
    }
  }

    function investigateShip(){
      if(heatReflectorsComplete == true && oxygenTanksComplete == true){
      hideInside();
      showSuccessScreen();
      hideOxygenRoom();
      hideHallway();
        //show congratulations page with button to end page
      }else if(oxygenTanksComplete == false){
        showFixOxygenTanks();
        hideInside();
        showOxygenRoom();
      }else if(heatReflectorsComplete == false){
        alert("You should fix the heat reflectors before doing that.")
      }
    }

    function hideInside(){
      var inside = document.getElementById('inside');
      inside.style.display = 'none';
    }

    function showSuccessScreen(){
      var success = document.getElementById('successScreen');
      success.style.display = 'block';
      redirect();
    }

    function redirect(){
      setTimeout('redirectPage()', 7000); //redirects to endpage after 2 seconds of success page
    }

    function redirectPage() {
      window.location = "../endPage/endPage.html";
    }

    function showVentImage(){
      var ventimg = document.getElementById('ventilation');
      ventimg.style.display = 'block';
    }

    function hideVentImage(){
      var ventimg = document.getElementById('ventilation');
      ventimg.style.display = 'none';
    }

    function mapLoad(){
      document.getElementById("shipPlan").src="images/map_cockpit.png"
    }

    function mapPWRoom() {
      document.getElementById("shipPlan").src="images/map_passwordRoom.png"
    }

    function mapHallway() {
      document.getElementById("shipPlan").src="images/map_hallway.png"
    }

    function mapCockpit() {
      document.getElementById("shipPlan").src="images/map_cockpit.png"
    }

    function mapOxygen() {
      document.getElementById("shipPlan").src="images/map_oxygen.png"
    }

    function mapReflectors() {
      document.getElementById("shipPlan").src="images/map_reflector.png"
    }

    function mapExterior() {
      document.getElementById("shipPlan").src="images/map_exterior.png"
    }

    // damage from cargo door opening
    function damageCargoDoor() {
      if(health > 6){
        health -= health //this value is 100% of the max value
        sessionStorage.setItem('remainingHealth', health); //health remaining
        document.getElementById('health').innerHTML = health/6 + "%";
        document.getElementById('healthbar').style.height=health;
        redirect();
      }
      else{
        alert('Your health has reached 0%, and you have died.');
        return;
      }
    }

    //change background image

    function enemyDefeated() {
      document.getElementById('enemyShip').className = "promptHidden";
    }
