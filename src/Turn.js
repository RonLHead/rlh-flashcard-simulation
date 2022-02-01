class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }

  returnGuess() {
    return this.guess;
  }
}

module.exports = Turn;

/*
Your Turn class should meet the following requirements:

returnGuess: method that returns the guess
returnCard: method that returns the Card
evaluateGuess: method that returns a boolean indicating if the user’s guess matches the
correct answer on the card
giveFeedback - method that returns either ‘incorrect!’ or ‘correct!’ based on whether the
guess is correct or not.*/
