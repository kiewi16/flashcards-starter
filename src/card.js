// const { evaluateGuess } = require("../test/card-test");

function createCard(id, question, answers, correctAnswer) {
    const card = {
        id: id,
        question: question,
        answers: answers,
        correctAnswer: correctAnswer,
    }
return card;
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
        currentCard: deck[0],
        turns: 0,
        incorrectGuesses: [], 
    }
    return round; 
};

function takeTurn(guess, round) {
    const feedback = evaluateGuess(guess, round.currentCard)
    if (feedback !== "Correct!") {
        round.incorrectGuesses.push(round.currentCard.id);
    }
    round.turns += 1;
    round.currentCard = round.deck[round.turns];
    console.log(`You got this question ${feedback}`)
    return round; 
};

function calculatePercentCorrect(round) {
    const percentCorrect = ((round.turns - round.incorrectGuesses.length) / round.turns) * 100;
    return percentCorrect; 
};

function endRound(percentCorrect) {
    const finalMessage = `**Round over!** You answered ${percentCorrect}% of questions correctly!`; 
    return finalMessage;
}; 

module.exports = { 
    createCard, 
    evaluateGuess, 
    createDeck, 
    countCards, 
    createRound, 
    takeTurn, 
    calculatePercentCorrect,
    endRound, 
}; 