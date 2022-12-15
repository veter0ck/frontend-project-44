import randomNumber from '../randomNumber.js';
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
  return String(firstNumber + secondNumber);
};

const getQuestionAndAnswer = () => {
  const firstNumber = randomNumber(0, 10);
  const secondNumber = randomNumber(0, 10);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = searchGcd(firstNumber, secondNumber);
  return [question, answer];
};

const brainGcd = () => {
  startGame(gameDescription, getQuestionAndAnswer);
}

export default brainGcd;