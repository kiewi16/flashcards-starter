const { evaluateGuess } = require('../src/card')

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
    const correctAnswer = round.currentCard.correctAnswer
    const feedback = (evaluateGuess(guess, correctAnswer))
    
    if (feedback === "Incorrect!") {
        round.incorrectGuesses.push(round.currentCard.id)
    }
    round.turns += 1
    round.currentCard = round.deck[round.turns]
    return feedback
} 

function calculatePercentCorrect(round) {
    const totalRounds = round.turns;
    const numOfIncorrectGuesses = round.incorrectGuesses.length;
    const percentCorrect = Math.floor(((totalRounds - numOfIncorrectGuesses) / totalRounds) * 100);
    return percentCorrect; 
};

function endRound(round) {
  const percentage = calculatePercentCorrect(round)
  const endMessage = `**Round Over!** You answered ${percentage}% of questions correctly!`
  console.log(endMessage)
  return endMessage
}; 

module.exports = {
    createRound, 
    takeTurn, 
    calculatePercentCorrect,
    endRound, 
};