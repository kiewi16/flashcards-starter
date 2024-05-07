// const { evaluateGuess } = require("../test/card-test");

function createCard(id, question, answers, correctAnswer) {
    let card = {
        id: id,
        question: question,
        answers: answers,
        correctAnswer: correctAnswer,
    }
return card
}

function evaluateGuess(card) {
    for(let i = 0; i < card.answers.length; i++) {
        if(card.answers[i] === card.correctAnswer) {
            return "Correct!"
        } else {return "Incorrect!"}
    }
}; 

module.exports = { createCard, evaluateGuess }; 