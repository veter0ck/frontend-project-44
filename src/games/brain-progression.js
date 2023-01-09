import getRandomNumber from '../randomNumber.js';
import startGame from '../index.js'

const gameDescription = 'What number is missing in the progression?';

const generationProgression = (stepOfProgression, lengthOfProgression) => {
  const progression = [];
  progression[0] = getRandomNumber(0, 10);

  for (let elementNumber = 1; elementNumber < lengthOfProgression; elementNumber += 1) {
    progression[elementNumber] = progression[elementNumber - 1] + stepOfProgression;    
  }
  return progression;
};

const hidingElementOfProgression = (stepOfProgression, lengthOfProgression) => {
  const progressionWithHiddenElement = generationProgression(stepOfProgression, lengthOfProgression);
  const selectForHiding = getRandomNumber(0, lengthOfProgression);
  const hiddenElement = progressionWithHiddenElement[selectForHiding];
  progressionWithHiddenElement[selectForHiding] = '..';
  const shortProgression = progressionWithHiddenElement.join(' ');
  return [hiddenElement, shortProgression];
};

const getQuestionAndAnswer = () => {
  const stepOfProgression = getRandomNumber(0, 10);
  const lengthOfProgression = getRandomNumber(5, 10);
  const [hiddenElement, shortProgression] = hidingElementOfProgression(stepOfProgression, lengthOfProgression);
  const question = `${shortProgression}`;
  const answer = `${hiddenElement}`;
  generationProgression(stepOfProgression, lengthOfProgression);
  hidingElementOfProgression(stepOfProgression, lengthOfProgression);
  return [question, answer];
};

const runBrainProgression = () => {
  startGame(gameDescription, getQuestionAndAnswer);
}

export default runBrainProgression;