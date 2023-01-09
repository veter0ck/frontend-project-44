import getRandomNumber from '../randomNumber.js';
import startGame from '../index.js'

const gameDescription = 'Find the greatest common divisor of given numbers.';

const minRange = 0;
const maxRange = 10;

const searchGcd = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }
  return searchGcd(secondNumber, firstNumber % secondNumber);
};

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(minRange, maxRange);
  const secondNumber = getRandomNumber(minRange, maxRange);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = String(searchGcd(firstNumber, secondNumber));
  return [question, answer];
};

const runBrainGcd = () => {
  startGame(gameDescription, getQuestionAndAnswer);
}

export default runBrainGcd;