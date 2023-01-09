import getRandomNumber from '../randomNumber.js';
import startGame from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const minStep = 1;
const maxStep = 10;
const minLength = 5;
const maxLength = 10;
const minStart = 0;
const maxStart = 100;
const minIndex = 0;

const generationProgression = (startOfProgression, stepOfProgression, lengthOfProgression) => {
  const progression = [];
  for (let elementNumber = 0; elementNumber < lengthOfProgression; elementNumber += 1) {
    progression[elementNumber] = startOfProgression + (stepOfProgression * elementNumber);
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const stepOfProgression = getRandomNumber(minStep, maxStep);
  const lengthOfProgression = getRandomNumber(minLength, maxLength);
  const startOfProgression = getRandomNumber(minStart, maxStart);

  const progression = generationProgression(startOfProgression, stepOfProgression, lengthOfProgression);

  const hiddenIndex = getRandomNumber(minIndex, progression.length - 1);
  const answer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

const runBrainProgression = () => {
  startGame(gameDescription, getQuestionAndAnswer);
};

export default runBrainProgression;
