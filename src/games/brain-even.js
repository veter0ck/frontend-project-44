import getRandomNumber from '../randomNumber.js';
import startGame from '../index.js'

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const minRange = 1;
const maxRange = 100;

const isEven = (num) => num % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(minRange, maxRange);
  const answer = isEven(question)? 'yes' : 'no';
  return [question, answer];
};

const runBrainEven = () => {
  startGame(gameDescription, getQuestionAndAnswer);
}

export default runBrainEven;