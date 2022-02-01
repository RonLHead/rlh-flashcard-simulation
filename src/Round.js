class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = this.deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    this.currentCard = this.deck.cards[0];
    return this.currentCard;
  }

  takeTurn(guess) {
    this.turns += 1;
    if(guess === this.currentCard.correctAnswer) {
      this.deck.cards.shift();
      return 'correct!';
    } else {
      this.deck.cards.shift();
      return 'incorrect!'
    }
  }
}

module.exports = Round;
