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
}

module.exports = Turn;

/*
Your Turn class should meet the following requirements:

evaluateGuess: method that returns a boolean indicating if the user’s guess matches the
correct answer on the card
giveFeedback - method that returns either ‘incorrect!’ or ‘correct!’ based on whether the
guess is correct or not.*/
