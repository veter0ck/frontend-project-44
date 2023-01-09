import getRandomNumber from '../randomNumber.js';
import startGame from '../index.js';

const gameDescription = 'What is the result of the expression?';

const operators = ['+', '-', '*'];
const minRange = 0;
const maxRange = 10;
const minIndex = 0;

const operatorSelection = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error(`Unknown operator: '${operator}'`);
  }
};

const getQuestionAndAnswer = () => {
  const operator = operators[getRandomNumber(minIndex, operators.length - 1)];
  const firstNumber = getRandomNumber(minRange, maxRange);
  const secondNumber = getRandomNumber(minRange, maxRange);
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const answer = String(operatorSelection(firstNumber, secondNumber, operator));
  return [question, answer];
};

const runBrainCalc = () => {
  startGame(gameDescription, getQuestionAndAnswer);
};

export default runBrainCalc;
