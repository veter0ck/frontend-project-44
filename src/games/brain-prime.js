import getRandomNumber from '../randomNumber.js';
import startGame from '../index.js'

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (number) => {
  const sqrtNumber = Math.sqrt(number);
  let isPrime = true;
  for (let i = 2; i <= sqrtNumber; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(0, 100);
  const answer = isPrimeNumber(question)? 'yes' : 'no';
  return [question, answer];
};

const runBrainPrime = () => {
  startGame(gameDescription, getQuestionAndAnswer);
}

export default runBrainPrime;