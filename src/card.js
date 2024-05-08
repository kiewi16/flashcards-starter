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

module.exports = { 
    createCard, 
    evaluateGuess
}; 