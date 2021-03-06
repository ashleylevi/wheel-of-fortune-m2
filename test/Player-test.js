const { expect } = require('chai');
global.Game = require('../Game.js');
const Player = require('../Player.js');
const Wheel = require('../Wheel.js');
global.data = require('../library.js');
const Puzzle = require('../Puzzle.js');


describe('Player', function() {

  it('should have a default score of 0', function() {
    var wheel = new Wheel();
    var puzzle = new Puzzle();
    var player = new Player;
    expect(player.score).to.equal(0);
  });

  it('should update score based on the length of the lettersArray', () => {
    var wheel = new Wheel();
    var puzzle = new Puzzle();
    var player = new Player;
    var wheelValue = wheel.currWheelValue = 400;
    var guessedLetter = puzzle.guessedLetters = ['M'];
    player.updatePlayerScore(wheelValue, guessedLetter)
    expect(player.score).to.equal(400);
  });

  it('should update player\'s score after buying a vowel', () => {
    var player = new Player();
    player.score = 600;
    player.buyVowel();
    expect(player.score).to.equal(500);

  });

  it('should update player grand total at solve puzzle', () => {
    var game = new Game();
    var player = new Player();
    player.score = 200;
    player.grandTotal = 800;
    player.updateGrandTotal() 
    expect(player.grandTotal).to.equal(1000)

  });


});

if (typeof module !== 'undefined') {
  module.exports = Player;
}