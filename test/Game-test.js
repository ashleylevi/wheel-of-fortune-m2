const { expect } = require('chai');
const Game = require('../Game.js');
const Puzzle = require('../Puzzle.js');
const Round = require('../Round.js');

describe('Game', function() {
	let game;

	beforeEach(() => {
		game = new Game();
	});

  it('should return true', function() {
  expect(true).to.equal(true);
  });

  it('should check length of the array', () => {
		let round = new Round();
		let puzzle = new Puzzle();
		puzzle.guessedLetters = [];

		game.switchPlayer();
		expect(game.currPlayer).to.equal(game.players[1])
	});

});