class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = this.deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    this.currentCard = this.deck.cards[this.turns];
    return this.currentCard;
  }

  nextCard() {
    // this.deck.cards.push(this.deck.cards.shift());
  }

  takeTurn(guess) {
    this.turns ++;
    if(guess === this.currentCard.correctAnswer) {
      // this.nextCard();
      this.returnCurrentCard();
      return 'correct!';
    } else {
      this.incorrectGuesses.push(this.currentCard.id)
      // this.nextCard();
      this.returnCurrentCard();
      return 'incorrect!'
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
