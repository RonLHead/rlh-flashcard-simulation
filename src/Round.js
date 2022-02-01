class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    this.turns += 1;
    if(guess === this.currentCard.correctAnswer) {
      return 'correct!';
    } else return 'incorrect!'
  }
}

module.exports = Round;
