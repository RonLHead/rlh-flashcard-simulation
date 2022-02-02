const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Deck = require('./Deck');
const Card = require('./Card');
const Turn = require('./Turn');
const Round = require('./Round');

class Game {
  constructor() {
    this.currentRound = '';
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    const gameCards = Object.setPrototypeOf(prototypeQuestions, Card.prototype);
    // console.log(gameCards)
    const gameDeck = new Deck(gameCards)
    // console.log(gameDeck)
    const gameRound = new Round(gameDeck);
    // console.log(gameRound)
    this.printMessage(gameDeck, gameRound)
  }
}

module.exports = Game;
