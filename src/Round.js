const Turn = require('./Turn')

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = this.returnCurrentCard();
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    this.currentCard = this.deck.cards[this.turns];
    return this.currentCard;
  }

  takeTurn(guess) {
    this.turns++;
    const newTurn = new Turn(guess, this.currentCard);
    if (guess === this.currentCard.correctAnswer) {
      this.returnCurrentCard();
      return newTurn.giveFeedback();
    } else {
      this.incorrectGuesses.push(this.currentCard.id);
      this.returnCurrentCard();
      return newTurn.giveFeedback();
    }
  }

  calculatePercentCorrect() {
    let numCorrect = this.deck.cards.length - this.incorrectGuesses.length;
    return Math.trunc((numCorrect / this.deck.cards.length) * 100);
  }

  endRound() {
    if (this.turns === this.deck.cards.length) {
      return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
    }
  }
}

module.exports = Round;
