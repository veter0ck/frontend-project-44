import readlineSync from 'readline-sync';
import runGreeting from './cli.js';

const startGame = (gameDescription, generateNewRound) => {
  const userName = runGreeting();
  console.log(gameDescription);
  const countOfRound = 3;

  for (let currentRound = 0; currentRound < countOfRound; currentRound += 1) {
    const [question, answer] = generateNewRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== answer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;