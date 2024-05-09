const chai = require('chai');
const expect = chai.expect;
const { createCard, evaluateGuess } = require('../src/card');

describe('create card', function() {
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

describe('evaluate guess', function() {
  it('should be a function', function() {
    expect(evaluateGuess).to.be.a('function');
  });

  it('should return "Correct!" if player enters a correct guess', function() {
    const correctGuessFeedback = evaluateGuess('correctAnswer', 'correctAnswer')
    expect(correctGuessFeedback).to.equal('Correct!')
  })
});

  it('should return "Incorrect!" if player enters an incorrect guess', function() {
    const incorrectGuessFeedback = evaluateGuess('wrongAnswer', 'correctAnswer');
    expect(incorrectGuessFeedback).to.equal("Incorrect!")
  });
