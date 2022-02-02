const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = this.returnCurrentCard();
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    this.currentCard = this.deck.cards[0];
    return this.currentCard;
  }

  takeTurn(guess) {
    const newTurn = new Turn(guess, this.currentCard);
    this.turns += 1;
    if(newTurn.evaluateGuess()) {
      this.deck.cards.push(this.deck.cards.shift());
      this.returnCurrentCard();
      return newTurn.giveFeedback();
    } else {
      this.incorrectGuesses.push(this.currentCard.id)
      this.deck.cards.push(this.deck.cards.shift());
      this.returnCurrentCard();
      return newTurn.giveFeedback();
    }
  }

  calculatePercentCorrect() {
    let numCorrect = this.deck.cards.length - this.incorrectGuesses.length;
    return Math.trunc((numCorrect/this.deck.cards.length) * 100);
  }

  endRound() {
    if(this.turns === this.deck.cards.length) {
      return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
    }
  }
}

module.exports = Round;
