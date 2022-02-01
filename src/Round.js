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
      this.deck.cards.push(this.deck.cards.shift());
      this.returnCurrentCard();
      return 'correct!';
    } else {
      this.incorrectGuesses.push(this.currentCard.id)
      this.deck.cards.push(this.deck.cards.shift());
      this.returnCurrentCard();
      return 'incorrect!'
    }
  }

  calculatePercentCorrect() {
    let numCorrect = this.deck.cards.length - this.incorrectGuesses.length;
    return numCorrect/this.deck.cards.length
  }
}

module.exports = Round;
