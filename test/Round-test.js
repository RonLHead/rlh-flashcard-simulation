const chai = require("chai");
const expect = chai.expect;

const Deck = require("../src/Deck");
const Card = require("../src/Card");
const Round = require("../src/Round");

const card1 = new Card(
  1,
  "What is Robbie's favorite animal",
  ["sea otter", "pug", "capybara"],
  "sea otter"
);
const card2 = new Card(
  14,
  "What organ is Khalid missing?",
  ["spleen", "appendix", "gallbladder"],
  "gallbladder"
);
const card3 = new Card(
  12,
  "What is Travis's favorite stress reliever?",
  ["listening to music", "watching Netflix", "playing with bubble wrap"],
  "playing with bubble wrap"
);
const deck = new Deck([card1, card2, card3]);
const round = new Round(deck);

describe("Round", function () {
  it("should be a function", function () {
    expect(Round).to.be.a("function");
  });

  it("should be an instance of Round", function () {
    expect(round).to.be.an.instanceof(Round);
  });

  it("should take a Deck of Cards", function () {
    expect(round.deck).to.equal(deck);
  });

  it("should have the first Card of the Deck be the current Card", function () {
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it("should keep track of turns", function () {
    expect(round.turns).to.equal(0);
  });

  it("should keep track of incorrect guesses", function () {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it("should return current Card being played", function () {
    expect(round.currentCard).to.equal(card1);
  });

  it("should take a turn", function () {
    round.takeTurn("");
    round.takeTurn("");
    expect(round.turns).to.equal(2);
  });

  it("should evalulate a correct guess", function () {

  it("should evalulate an incorrect guess", function () {
    const round = new Round(deck);
    expect(round.takeTurn("pug")).to.equal("incorrect!");
    expect(round.turns).to.equal(1);
  });

  it("should move to the next Card in the Deck after a turn", function () {
    const round = new Round(deck);
    expect(round.takeTurn("capybara")).to.equal("incorrect!");
    expect(round.turns).to.equal(1);
    expect(round.returnCurrentCard()).to.equal(card2);
  });

  it("should return the incorrect guesses", function () {
    round.takeTurn("capybara");
    expect(round.incorrectGuesses[0]).to.equal(1);
  });

  it("should calculate the percentage of correct guesses", function () {
    const round = new Round(deck);
    round.takeTurn("sea otter");
    round.takeTurn("gallbladder");
    round.takeTurn("watching Netflix");
    expect(round.calculatePercentCorrect()).to.deep.equal(66);
  });

  it("should end a Round", function () {
    const round = new Round(deck);
    round.takeTurn("sea otter");
    round.takeTurn("gallbladder");
    round.takeTurn("watching Netflix");
    expect(round.endRound()).to.equal(
      "** Round over! ** You answered 66% of the questions correctly!"
    );
  });
});