let puzzle;
let wheel;

class Round {
	constructor(currWheel) {
		this.currWheel = currWheel;
		this.currPlayer = 0;
	}

	startRound() {
		puzzle = new Puzzle();
		wheel = new Wheel();

		puzzle.getCategory();
		domUpdates.displayCategory();
		this.currWheel = wheel.randomizeWheel(wheel.valuesArray);
		console.log('3-randomizeWheel', this.currWheel)
		puzzle.splitAnswer(puzzle.currentPuzzle.correct_answer)
		console.log('4-splitanswer', puzzle.currAnswer)
		//call reset player turn
	}

	switchPlayer() {
		console.log('switchPlayer1', this.currPlayer)
		if (game.players[this.currPlayer] + 1) {
			this.currPlayer++;
			changePlayerAnimation(round.currPlayer)
			console.log('switchPlayer2', this.currPlayer);
		} else {
			this.currPlayer = 0;
		}
	}

	updateGrandTotal(){
		//add winner's score to total
	}

	resetPlayerTurn(){
		//start at player one again
		//call reset player score
	}

	resetPlayerScore() {
		//put round score back to zero
	}

}

if (typeof module !== 'undefined') {
  module.exports = Round;
}