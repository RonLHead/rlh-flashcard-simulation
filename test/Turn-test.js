const chai = require("chai");
const expect = chai.expect;

const Turn = require("../src/Turn");
const Card = require("../src/Card");

const card = new Card(
  1,
  "What allows you to define a set of related information using key-value pairs?",
  ["object", "array", "function"],
  "object"
);
const turn = new Turn("object", card);

describe("Turn", function () {
  it("should be a function", function () {
    expect(Turn).to.be.a("function");
  });

  it("should be an instance of Turn", function () {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it("should take a user's guess to the question", function () {
    expect(turn.guess).to.equal("object");
  });

  it("should return the user's guess", function () {
    expect(turn.returnGuess()).to.equal("object");
  });

  it("should return the card", function () {
    expect(turn.returnCard()).to.equal(card);
  });

  it("should evaluate the user's guess if it's true", function () {
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it("should evaluate the user's guess if it's false", function () {
    const turn = new Turn("array", card);
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it("should give feedback if guess is incorrect", function () {
    const turn = new Turn("array", card);
    expect(turn.giveFeedback()).to.equal("incorrect!");
  });

  it("should give feedback if guess is correct", function () {
    expect(turn.giveFeedback()).to.equal("correct!");
  });
});
