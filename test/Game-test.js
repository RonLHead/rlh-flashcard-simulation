const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');

describe('Game', function() {

  it('should be a function', function() {
    const game = new Game();
    expect(Game).to.be.a('function');
  });

  it('should instantiate a Game object', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  })
});
