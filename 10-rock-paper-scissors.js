// LOAD UP
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
  } ;

displayScoreElement();
    
console.log(`Welcome back, here's the score:
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
console.log('-');

let playerMove = '';
let computerMove = '';
let result = '';
let randomNumber = Math.random();

// PLAYER MOVE

function playGame(playerMove) {
  pickComputerMove();
  if (playerMove === '✌🏽') {
    if (computerMove === '👊🏽') {
      result = 'You Lose :(';
    } 
    else if (computerMove === '✋🏽') {
      result = 'You Win! :)';
    } 
    else if (computerMove === '✌🏽') {
      result = 'Tie! :/';
    }
  } 
  else if (playerMove === '✋🏽') {
    if (computerMove === '✌🏽') {
      result = 'You Lose :(';
    } 
    else if (computerMove === '👊🏽') {
      result = 'You Win! :)';
    } 
    else if (computerMove === '✋🏽') {
      result = 'Tie! :/';
    }
  }  
  else if (playerMove === '👊🏽') {
    if (computerMove === '✋🏽') {
      result = 'You Lose :(';
    } 
    else if (computerMove === '✌🏽') {
      result = 'You Win! :)';
    } 
    else if (computerMove === '👊🏽') {
      result = 'Tie! :/';
    }
  }

// COMPUTER MOVE

  function pickComputerMove () {
    computerMove = '';
    result = '';
    randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = '👊🏽';  
    } 
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = '✋🏽';
    } 
    else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = '✌🏽';
    }        
    return computerMove;
  };

// RESULT

  if (result === 'You Win! :)') {
    score.wins += 1;
  }
  else if (result === 'You Lose :(') {
    score.losses += 1;
  }
  else if (result === 'Tie! :/') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  displayScoreElement();   
  displayResultElement();  
  // displayMovesElement();
  document.querySelector('.js-moves')
    .innerHTML = `<p class="js-moves">You <span class="moves">${playerMove} ${computerMove}</span> Computer</p>`;

  console.log(`You chose ${playerMove}. The Computer chose ${computerMove}! ${result}
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
  console.log ('-');
};

// RESET SCORE

function resetGame() {
  score = {
  wins: 0,
  losses: 0,
  ties: 0
  }
  // alert(`Score has been reset!
// Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
  console.log(`Score has been reset!
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
  console.log('-');
  localStorage.removeItem('score');
  displayScoreElement();
};

// FUNCTIONS

function displayScoreElement () {
  document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
};

function displayMovesElement () {

  document.querySelector('.js-moves')
    .innerHTML = `<p class="js-moves">You <span class="moves">👊🏽 👊🏽</span> Computer</p>`;
};

function displayResultElement () {
  document.querySelector('.js-result')
    .innerHTML = `${result}`
};