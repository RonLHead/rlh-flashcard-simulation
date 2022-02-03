const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Deck = require('./Deck');
const Card = require('./Card');
// const Turn = require('./Turn');
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
    const gameCards = prototypeQuestions.map(function (cardDetails) {
      return new Card(cardDetails.id, cardDetails.question, cardDetails.answers, cardDetails.correctAnswer);
    });
    const gameDeck = new Deck(gameCards)
    const gameRound = new Round(gameDeck);
    this.currentRound = gameRound;
    this.printMessage(gameDeck, gameRound);
    this.printQuestion(gameRound)
  }
}

module.exports = Game;
