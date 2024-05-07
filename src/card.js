// const { evaluateGuess } = require("../test/card-test");

function createCard(id, question, answers, correctAnswer) {
    const card = {
        id: id,
        question: question,
        answers: answers,
        correctAnswer: correctAnswer,
    }
return card
};

function evaluateGuess(guess, card) {
  if(guess === card.correctAnswer) {
    return "Correct!"
  } else {return "Incorrect!"}
}; 

function createDeck(cards) {
    const deck = cards
    return deck;
};

function countCards(deck) {
    return deck.length; 
};

function createRound(deck) {
    const round = {
        deck: deck, 
        currentCard: 1,
        turns: 0,
        incorrectGuesses: [], 
    }
    return round 
}

module.exports = { createCard, evaluateGuess, createDeck, countCards, createRound }; 