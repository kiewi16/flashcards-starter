function createCard(id, question, answers, correctAnswer) {
    const card = {
        id: id,
        question: question,
        answers: answers,
        correctAnswer: correctAnswer,
    }
return card;
};

function evaluateGuess(guess, correctAnswer) {
  if(guess === correctAnswer) {
    return "Correct!"
  } else if(guess !== correctAnswer) {
    return "Incorrect!"
  }
}; 

module.exports = { 
    createCard, 
    evaluateGuess,
}; 