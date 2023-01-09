import getRandomNumber from '../randomNumber.js';
import startGame from '../index.js'

const gameDescription = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const operatorSelection = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return 'Unknown operator';
  }
};

const getQuestionAndAnswer = () => {
  const operator = operators[getRandomNumber(0, 2)];
  const firstNumber = getRandomNumber(0, 10);
  const secondNumber = getRandomNumber(0, 10);
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const answer = String(operatorSelection(firstNumber, secondNumber, operator));
  return [question, answer];
};

const runBrainCalc = () => {
  startGame(gameDescription, getQuestionAndAnswer);
}

export default runBrainCalc;