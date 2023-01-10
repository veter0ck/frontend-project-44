import getRandomNumber from '../randomNumber.js';
import startGame from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const minRange = 0;
const maxRange = 100;

const isPrimeNumber = (number) => {
  const sqrtNumber = Math.sqrt(number);

  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= sqrtNumber; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(minRange, maxRange);
  const answer = isPrimeNumber(question) ? 'yes' : 'no';
  return [question, answer];
};

const runBrainPrime = () => {
  startGame(gameDescription, getQuestionAndAnswer);
};

export default runBrainPrime;
