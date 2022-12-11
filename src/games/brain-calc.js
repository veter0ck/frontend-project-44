import randomNumber from '../randomNumber.js';
import startGame from '../index.js'

const gameDescription = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const operatorSelection = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return String(firstNumber + secondNumber);
    case '-':
      return String(firstNumber - secondNumber);
    case '*':
      return String(firstNumber * secondNumber);
    default:
      return 'Unknown operator';
  }
};

const getQuestionAndAnswer = () => {
  const operator = operators[randomNumber(0, 2)];
  const firstNumber = randomNumber(0, 10);
  const secondNumber = randomNumber(0, 10);
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const answer = operatorSelection(firstNumber, secondNumber, operator);
  return [question, answer];
};

const brainCalc = () => {
  startGame(gameDescription, getQuestionAndAnswer);
}

export default brainCalc;