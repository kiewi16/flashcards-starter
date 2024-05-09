const chai = require('chai');
const expect = chai.expect;
const { createCard } = require('../src/card');
const { createDeck } = require('../src/deck');
const { createRound, takeTurn, calculatePercentCorrect, endRound } = require('../src/round');

describe('round', function() {
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
      expect(round.currentCard).to.equal(deck[0]);
      expect(round.turns).to.equal(0); 
      expect(round.incorrectGuesses).to.deep.equal([]);
    });
  }); 
  
  describe('take turn', function() {
    it('should be a function', function() {
      expect(takeTurn).to.be.a('function');
    });
  
    it('should increase the turns count regardless if the player makes an incorrect or correct guess', function() {
      const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
      const card3 = createCard(3, "What type of prototype method di;rectly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
      const cards = [card1, card2, card3];
      const deck = createDeck(cards);
      const round = createRound(deck);
      
      const incorrectGuess = 'potato';
      takeTurn(incorrectGuess, round);
      expect(round.turns).to.equal(1); 
  
      const correctGuess = 'array';
      takeTurn(correctGuess, round);
      expect(round.turns).to.equal(2)
    });

    it('should update the current card with the next card', function() {
      const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
      const card3 = createCard(3, "What type of prototype method di;rectly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
      const cards = [card1, card2, card3];
      const deck = createDeck(cards);
      const round = createRound(deck);

      const incorrectGuess = 'potato';
      takeTurn(incorrectGuess, round);
      expect(round.currentCard).to.deep.equal(deck[1]);

      const correctGuess = 'array';
      takeTurn(correctGuess, round);
      expect(round.currentCard).to.deep.equal(deck[2])
  
    }); 
  
    it('should add guess via the card/s id to incorrectGuesses if the player makes an incorrect guess', function(){
      const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
      const card3 = createCard(3, "What type of prototype method di;rectly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
      const cards = [card1, card2, card3];
      const deck = createDeck(cards);
      const round = createRound(deck);
      
      const incorrectGuess = 'potato';
      takeTurn(incorrectGuess, round);
      expect(round.incorrectGuesses).to.deep.equal([card1.id]);
  
    });
  
    it('should not add guess to incorrectGuesses if the player makes a correct guess', function(){
      const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
      const card3 = createCard(3, "What type of prototype method di;rectly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
      const cards = [card1, card2, card3];
      const deck = createDeck(cards);
      const round = createRound(deck);
      
      const correctGuess = 'object';
      takeTurn(correctGuess, round);
      expect(round.incorrectGuesses).to.not.deep.equal([round.currentCard.id]);
    });
  
    it('should return feedback based on the player/s guess', function() {
      const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
      const card3 = createCard(3, "What type of prototype method di;rectly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
      const cards = [card1, card2, card3];
      const deck = createDeck(cards);
      const round = createRound(deck);
      const correctGuess = 'object';
      const incorrectGuess = 'potato';
  
      const correctFeedback = takeTurn(correctGuess, round);
      expect(correctFeedback).to.equal("Correct!");

      const incorrectFeedback = takeTurn(incorrectGuess, round);
      expect(incorrectFeedback).to.equal("Incorrect!");
    });
  });
  
  describe('calculate percent correct', function() {
    it('should be a function', function() {
      expect(calculatePercentCorrect).to.be.a('function');
    });
  
    it('should calculate and return the perecentage of correct guesses', function(){
      const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
      const card3 = createCard(3, "What type of prototype method di;rectly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
      const cards = [card1, card2, card3];
      const deck = createDeck(cards);    
      const round = createRound(deck);

      const correctGuess = 'object';
      const incorrectGuess = 'potato';
      const correctGuess2 = "mutator method"; 
  
      takeTurn(correctGuess, round);
      takeTurn(incorrectGuess, round);
      takeTurn(correctGuess2, round);
   
      const percentCorrect = calculatePercentCorrect(round);
  
      expect(percentCorrect).to.be.a('number')
      expect(percentCorrect).to.equal(66)

    });
  });
  
  describe('end the round', function() {
    it('should be a function', function() {
      expect(endRound).to.be.a('function');
    });
    it('should return "**Round over!** You answered % of questions correctly!', function () {
      const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
      const card3 = createCard(3, "What type of prototype method di;rectly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
      const cards = [card1, card2, card3];
      const deck = createDeck(cards);    
      const round = createRound(deck);
      const guess = 'potato';
      takeTurn(guess, round); 
      const expectedMessage = `**Round Over!** You answered 0% of questions correctly!`
      const finalMessage = endRound(round)
     
      expect(finalMessage).to.equal(expectedMessage)
    });
  }); 