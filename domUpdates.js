let game;

const domUpdates = {
  hideStartMenu() {
    startContainer.classList.add('hide');
    gamePrompt.classList.add('show');
    currentRoundNumber.classList.add('animateRoundNumber');
    categoryDisplay.classList.add('animateCategorydisplay');
    playerOneName.classList.add('animatePlayerName');

    game = new Game;
    game.startGame();

    updatePlayerNames();
    // addAnimation();
    console.log(puzzle.currentPuzzle.correct_answer);
    showBoard();

  },

  displayCategory() {
    let category = puzzle.currentPuzzle.category;
    categoryDisplay.innerText = category;
  },

  displaySpinValue() {
    let wheelValue = wheel.generateRandomValue();
    console.log('5-generateRandomvalue', wheelValue);
    if (typeof wheelValue === 'number' ) {
      gamePrompt.innerHTML = 
        `YOU LANDED ON 
        <span>$${wheelValue}</span>
        now guess a consonant`;
    } else if (wheelValue === 'LOSE A TURN') { 
      // need a function to change player turn
      gamePrompt.innerHTML = 
        `YOU LANDED ON 
        <span>${wheelValue}</span>
         next player's turn`;
      round.switchPlayer();
    } else {
      // need a function to change player turn and player score
      gamePrompt.innerHTML = 
        `YOU LANDED ON 
        <span>${wheelValue}</span>
         your score is reset and now it's next player's turn`;
      round.switchPlayer();
    };
  },

  changePlayerPrompt(lettersArray) {
    if (puzzle.guessedLetters.length > 0) {
      gamePrompt.innerHTML = 
        `NICE WORK! SPIN, BUY A VOWEL,
         OR SOLVE THE PUZZLE`;
    } else {
      gamePrompt.innerHTML =
        `NOPE, NEXT PLAYER...`;
    };
  },

  solvePuzzleFail() {
    gamePrompt.innerHTML = 
      `NOPE, WRONG ANSWER!
       NEXT PLAYER...`;
  },

  disableConsonant(event) {
    if (event.target.classList.contains('consonant')) { 
      event.target.classList.add('change-opacity');
    }
    let letter = event.target.innerHTML;
    console.log('buyvowel2', 'disableletter', letter)
    puzzle.checkGuessedLetter(letter);
    puzzle.checkGuessedLettersArray();
  },

  disableVowel(event) {
    console.log('hi')
    if (event.target.classList.contains('vowel')) { 
      event.target.classList.add('change-opacity');
      console.log(game.players[round.currPlayer])
      game.players[round.currPlayer].buyVowel();
      displayScore(game.players[round.currPlayer].score)
    }

  },


  displayBuyVowel() {
    vowels.classList.add('showVowels');
    // player.buyVowel()
    console.log('buyvowel1', 'displayvowels')

  },

  displayIncorrectGuess() {
    gamePrompt.innerHTML = '<p><span class="player-prompt">INCORRECT! </span>NEXT PLAYER\'S TURN - <span>SPIN, BUY A VOWEL, OR SOLVE THE PUZZLE</span></p> '
  },

  displayGuessedLetter(event) {
    let guessedLetter = event.target.id;
    let boxes = document.querySelectorAll('.box')
    let splitArray = puzzle.splitAnswer(puzzle.currentPuzzle.correct_answer)
    splitArray.forEach((letter, i) => {
      if (guessedLetter === letter) {
    boxes[i].innerText = letter

      }
    })
  },

  displaySolvePuzzle() {
    solvePuzzle.classList.add('show-solve-puzzle-container');
  },


  hideSolvePuzzle() {
    solvePuzzle.classList.remove('show-solve-puzzle-container');
    let playerGuess = document.querySelector('.solve-puzzle-input').value;
    puzzle.checkSolvePuzzle(playerGuess)
  },

  
};

function changePlayerAnimation(currentPlayer) {
    if (currentPlayer === 1) {
      playerOneName.classList.remove('animatePlayerName');
      playerThreeName.classList.remove('animatePlayerName');
      let playerNum = playerTwoName;
      addNameAnimation(playerNum)
    } else if (currentPlayer === 2) {
      playerOneName.classList.remove('animatePlayerName');
      playerTwoName.classList.remove('animatePlayerName');
      let playerNum = playerThreeName;
      addNameAnimation(playerNum)
    } else {
      playerTwoName.classList.remove('animatePlayerName');
      playerThreeName.classList.remove('animatePlayerName');
      let playerNum = playerOneName;
      addNameAnimation(playerNum)
    }
  }


function updatePlayerNames() {
  playerOneName.innerText = nameOneInput.value || "PLAYER 1";
  playerTwoName.innerText = nameTwoInput.value || "PLAYER 2";
  playerThreeName.innerText = nameThreeInput.value || "PLAYER 3";
};



function addNameAnimation(playerNum) {
  playerNum.classList.add('animatePlayerName');
}


function showBoard() {
  var boxes = document.querySelectorAll('.box');
    for (var i = 0; i < puzzle.currentPuzzle.correct_answer.length; i++ ) {
      console.log(boxes[i]);
      if (puzzle.currentPuzzle.correct_answer.charAt(i) !== ' ') {
        boxes[i].classList.add('addWhite');
      }
    }
  }

  function displayScore(score) {
    console.log(game.players[round.currPlayer])
    if (round.currPlayer === 0) {
      playerOneScore.innerText = `$${score}`;
    } else if (round.currPlayer === 1) {
      playerTwoScore.innerText = `$${score}`;
    } else {
      playerThreeScore.innerText = `$${score}`;
    }
  }





if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}