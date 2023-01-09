import getRandomNumber from '../randomNumber.js';
import startGame from '../index.js'

const gameDescription = 'Find the greatest common divisor of given numbers.';

const searchGcd = (firstNumber, secondNumber) => {
  while (firstNumber != 0 && secondNumber != 0) {
    if (firstNumber > secondNumber) {
      firstNumber = firstNumber % secondNumber;
    } else {
      secondNumber = secondNumber % firstNumber;
    }
  }
  return firstNumber + secondNumber;
};

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(0, 10);
  const secondNumber = getRandomNumber(0, 10);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = String(searchGcd(firstNumber, secondNumber));
  return [question, answer];
};

const runBrainGcd = () => {
  startGame(gameDescription, getQuestionAndAnswer);
}

export default runBrainGcd;