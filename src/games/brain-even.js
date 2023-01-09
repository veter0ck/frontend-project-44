import randomNumber from '../randomNumber.js';
import startGame from '../index.js'

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = randomNumber(1, 100);
  const answer = isEven(question)? 'yes' : 'no';
  return [question, answer];
};

const runBrainEven = () => {
  startGame(gameDescription, getQuestionAndAnswer);
}

export default runBrainEven;