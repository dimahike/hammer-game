var holeHumber = ["hole1", "hole2", "hole3", "hole4", "hole5", "hole6"];
var hitMoles = 0;
var randomChosenHole;

// Beginning of Game
function startGame() {
sequence();
}

// Random sequence of holes

function sequence() {

  $("#score").text("Score: " + hitMoles);
  var randomHole = Math.floor(Math.random() * 6);
  randomChosenHole = holeHumber[randomHole];

  animateMole(randomChosenHole);
  playSoundOfMole(randomChosenHole);
  click(randomChosenHole)

}

// Working hole for hitting

function click(shouldClickHole) {
  $("." + shouldClickHole).click(function() {
    var audio = new Audio("sound/hit.mp3");
    audio.play();
  //   var clicks = 0;
  // if (clicks < 1) {
  //   playSoundOfHit();
  //   clicks++;
  // }

  })
}

// Animate Moles

function animateMole(currentHole) {
  $("." + currentHole).prepend('<img id="imageMole" src="img/mole.png" />')
  setTimeout(function() {
    $("#imageMole").remove();
  },2000);
};

// Sound of hitting moles

// function playSoundOfHit() {
//   var audio = new Audio("sound/hit.mp3");
//   audio.play();
// };

// Sound of show up Moles

function playSoundOfMole() {
  var audio = new Audio("sound/mole.mp3");
  audio.play();
};
