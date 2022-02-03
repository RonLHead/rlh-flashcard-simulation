const chai = require("chai");
const expect = chai.expect;

const Deck = require("../src/Deck");
const Card = require("../src/Card");
const Round = require("../src/Round");
const Game = require("../src/Game");

const game = new Game();

describe("Game", function () {
  it("should be a function", function () {
    expect(Game).to.be.a("function");
  });

  it("should instantiate a Game object", function () {
    expect(game).to.be.an.instanceof(Game);
  });

  it("should keep track of the current round", function () {
    expect(game.currentRound).to.equal("");
  });

  it("should be able to start a Game", function () {
    game.start();
    expect(game.currentRound).to.be.an.instanceof(Round);
  });
});
