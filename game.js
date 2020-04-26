var holeHumber = ["hole1", "hole2", "hole3", "hole4", "hole5", "hole6"];
var hitMoles = 0;
var randomChosenHole;


// Beginning of Game
function startGame() {

  $(".btn").hide();
  //remove a score after a loop of the game
  $("h2").remove();
  //add a score before a loop of the game
  $("#score").prepend("<h2>Score: " + hitMoles + "</h2>")
  sequence();

}


// Random sequence of holes
function sequence() {

  //the loop for random sequence of holes
  // "b" - acceleration  for the appearance of moles
  for (var i = 1, b = 1; b > 0.1; i = i + b) {

    setDelay(i);
    var coefficient = 0.009; // acceleration coefficient for the appearance of moles
    b = b - coefficient;
    console.log(b);
    console.log(i);
  };

};


//  Delay actions for the loop of random sequence of holes
function setDelay(i) {

  // random sequence of holes with an animate and sound of moles
  setTimeout(function() {
    var randomHole = Math.floor(Math.random() * 6);
    randomChosenHole = holeHumber[randomHole];
    animateMole(randomChosenHole);
    playSoundOfMole(randomChosenHole);
    click();
  }, i * 3000);

  // after the last appearance of moles for the restart of a game
  setTimeout(function() {
    startAgain();
    $("img").remove();
    var lastAction = 55.458; // i(the bigger var i) + var coefficient(acceleration coefficient for the appearance of moles)
  }, 55.458 * 3000);

};


// Click hitting of moles
function click() {

  $("img").click(function() {
    var audio = new Audio("sound/hit.mp3");
    audio.play();
    $("img").remove();
    hitMoles++;
    $("h2").html("Score: " + hitMoles);
  });

};


// Animate Moles
function animateMole(currentHole) {
  $("#imageMole").remove();
  $("." + currentHole).prepend('<img id="imageMole" src="img/mole.png" />')
};


// Sound of show up Moles
function playSoundOfMole() {
  var audio = new Audio("sound/mole.mp3");
  audio.play();
};


// Restart the game
function startAgain() {
  hitMoles = 0;
  $(".btn").show();
  $(".btn").html("Start Again");
};
