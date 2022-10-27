// Function to change players names
function editNames() {
  let player1 = prompt ("Enter your firstname")
  if (player1 != "") {
    document.getElementById ("name-0").innerHTML = player1;}
    else {
    document.getElementById ("name-0").innerHTML = "Player 1"}

  let player2 = prompt ("Enter your firstname")
  if (player2 != "") {
    document.getElementById ("name-1").innerHTML = player2;}
    else {
    document.getElementById ("name-1").innerHTML = "Player 2"}

  if (player1 === null) {
    document.getElementById ("name-0").innerHTML = "Player 1"}

  if (player2 === null) {
    document.getElementById ("name-1").innerHTML = "Player 2"}
      
}
var scores, roundScore, activePlayer, gamePlaying;

scores = [0, 0];
activePlayer = 0;
roundScore = 0;
gamePlaying = true; 

// Function to roll the dice
function rollDice() {
  const sound = new Audio('rollingdice.mp3');
  sound.play();
  sound.duration = 1;

  if(gamePlaying) {
    var dice = Math.floor(Math.random() * 6) + 1;
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    if (dice != 1) {
      //Add score
      roundScore += dice;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
     nextPlayer();
    }
}    
};

// Function to hold the current score
function holdScore() {
if (gamePlaying) {
  scores[activePlayer] += roundScore;
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

  // Check if player won the game
  if (scores[activePlayer] >= 100) {
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;
    } else {
    nextPlayer();
    }
  }
};

//Next player
function nextPlayer() {

activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
roundScore = 0;

document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.player-0-panel').classList.toggle('active');
document.querySelector('.player-1-panel').classList.toggle('active');
}