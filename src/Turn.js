class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    if(this.guess === this.card.correctAnswer) {
      return true;
    } else return false;
  }

  giveFeedback() {
    if(!this.evaluateGuess()) {
      return 'incorrect!';
    } else return 'correct!';
  }
}

module.exports = Turn;

/*
Your Turn class should meet the following requirements:


giveFeedback - method that returns either ‘incorrect!’ or ‘correct!’ based on whether the
guess is correct or not.*/
