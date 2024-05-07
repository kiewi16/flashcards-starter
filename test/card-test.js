const chai = require('chai');
const expect = chai.expect;
const { createCard, evaluateGuess, createDeck } = require('../src/card');

describe('card', function() {
  it('should be a function', function() {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    
    expect(card.id).to.equal(1);
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });  
});

describe('guess', function() {
  it('should be a function', function() {
    expect(evaluateGuess).to.be.a('function');
  });

  it('should return "Correct!" if player enters a correct answer', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object'); 
    const correctAnswer = card.correctAnswer; 
    const guess = 'object'; 
    const feedback = evaluateGuess(guess, correctAnswer);
    
    expect(feedback).to.equal("Correct!")
  });

  it('should return "Incorrect!" if player enters an incorrect answer', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object'); 
    const correctAnswer = card.correctAnswer; 
    const guess = 'potato'; 
    const feedback = evaluateGuess(guess, correctAnswer);
    
    expect(feedback).to.equal("Incorrect!")
  });

});

describe('deck', function () {
  it('should be a function', function() {
    expect(createDeck).to.be.a('function');
  });

  it('should create a deck with cards', function() {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const card3 = createCard(3, "What type of prototype method di;rectly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    const deck = createDeck([card1, card2, card3]);

    expect(deck).to.have.lengthOf(3); 
    
    expect(deck[0]).to.have.property('id', 1);
    expect(deck[0]).to.have.property('question', 'What allows you to define a set of related information using key-value pairs?');
    expect(deck[0]).to.have.property('answers').that.deep.equals(['object', 'array', 'function']);
    expect(deck[0]).to.have.property('correctAnswer', "object");

    expect(deck[1]).to.have.property('id', 2);
    expect(deck[1]).to.have.property('question', "What is a comma-separated list of related values?");
    expect(deck[1]).to.have.property('answers').that.deep.equals(["array", "object", "function"]);
    expect(deck[1]).to.have.property('correctAnswer', "array");
    
    expect(deck[2]).to.have.property('id', 3);
    expect(deck[2]).to.have.property('question',"What type of prototype method di;rectly modifies the existing array?");
    expect(deck[2]).to.have.property('answers').that.deep.equals(["mutator method", "accessor method", "iteration method"]);
    expect(deck[2]).to.have.property('correctAnswer', "mutator method");
    
  });
})

module.exports = { createCard, evaluateGuess, createDeck };