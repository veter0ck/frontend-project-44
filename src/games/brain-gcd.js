import getRandomNumber from '../randomNumber.js';
import startGame from '../index.js'

const gameDescription = 'Find the greatest common divisor of given numbers.';

const minRange = 0;
const maxRange = 10;

const searchGcd = (firstNumber, secondNumber) => {
  while (firstNumber !== 0 && secondNumber !== 0) {
    if (firstNumber > secondNumber) {
      firstNumber = firstNumber % secondNumber;
    } else {
      secondNumber = secondNumber % firstNumber;
    }
  }
  return firstNumber + secondNumber;
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