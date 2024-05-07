const chai = require('chai');
const expect = chai.expect;
const { createCard, evaluateGuess, createDeck, countCards, createRound } = require('../src/card');

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

  it('should return "Correct!" if player enters a correct guess', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object'); 
    const guess = 'object'; 
    const feedback = evaluateGuess(guess, card);
    
    expect(feedback).to.equal("Correct!")
  });

  it('should return "Incorrect!" if player enters an incorrect guess', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object'); 
    const guess = 'potato'; 
    const feedback = evaluateGuess(guess, card);
    
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
    const cards = [card1, card2, card3];
    const deck = createDeck(cards);

    expect(deck).to.have.lengthOf(3); 
    
    expect(deck[0]).to.have.property('id', 1);
    expect(deck[0]).to.have.property('question', 'What allows you to define a set of related information using key-value pairs?');
    expect(deck[0]).to.have.property('answers').to.deep.equal(['object', 'array', 'function']);
    expect(deck[0]).to.have.property('correctAnswer', "object");

    expect(deck[1]).to.have.property('id', 2);
    expect(deck[1]).to.have.property('question', "What is a comma-separated list of related values?");
    expect(deck[1]).to.have.property('answers').to.deep.equal(["array", "object", "function"]);
    expect(deck[1]).to.have.property('correctAnswer', "array");
    
    expect(deck[2]).to.have.property('id', 3);
    expect(deck[2]).to.have.property('question',"What type of prototype method di;rectly modifies the existing array?");
    expect(deck[2]).to.have.property('answers').to.deep.equal(["mutator method", "accessor method", "iteration method"]);
    expect(deck[2]).to.have.property('correctAnswer', "mutator method");
    
  });

  it('should count how many cards are in the deck', function() {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const card3 = createCard(3, "What type of prototype method di;rectly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    const cards = [card1, card2, card3];
    const deck = createDeck(cards);
    const numOfCards = countCards(deck); 

    expect(numOfCards).to.equal(3);
  });
});

describe('round', function () {
  it('should be a function', function() {
    expect(createRound).to.be.a('function');
  });

  it('should create a round and its properties', function() {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const card3 = createCard(3, "What type of prototype method di;rectly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    const cards = [card1, card2, card3];
    const deck = createDeck(cards);
    const round = createRound(deck);

    expect(round.deck).to.deep.equal(deck);
    expect(round.currentCard).to.equal(1);
    expect(round.turns).to.equal(0); 
    expect(round.incorrectGuesses).to.deep.equal([]);
  });
}); 

describe('take turn', function () {
  it.skip('should be a function', function() {
    expect(takeTurn).to.be.a('function');
  });

  it.skip('should increase the turns count regardless if the player makes an incorrect or correct guess', function() {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const card3 = createCard(3, "What type of prototype method di;rectly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    const cards = [card1, card2, card3];
    const deck = createDeck(cards);
    const round = createRound(deck);
    const guess = 'potato'
    const turn = takeTurn(guess, round)

    expect(round.turns).to.equal(1)
  });


  it.skip('should update the current card with the next card', function() {

  }); 
  it.skip('should add guess via the card/s id to incorrectGuesses if the player makes an incorrect guess');
  it.skip('should not add guess to incorrectGuesses if the player makes a correct guess');
  it.skip('should return "Incorrect!" if player enters an incorrect guess');
  it.skip('should return "Correct!" if player enters a correct guess'); 
});

describe('calculate percent correct', function () {
  it.skip('should be a function', function() {
    expect(calculatePercentCorrect).to.be.a('function');
  });
  it.skip('should calculate and return the perecentage of correct guesses');
});

describe('end the round', function () {
  it.skip('should be a function', function() {
    expect(endRound).to.be.a('function');
  });
  it.skip('should return "**Round over!** You answered % of questions correctly!') // need to update %
}); 

module.exports = { createCard, evaluateGuess, createDeck, countCards, createRound };