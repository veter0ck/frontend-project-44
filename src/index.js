import readlineSync from 'readline-sync';
import greeting from './cli.js';

const startGame = (gameRules, newRound) => {
  const userName = greeting();
  console.log(gameRules);
  const countOfRound = 3;

  for (let currentRound = 0; currentRound < countOfRound; currentRound += 1) {
    const [question, answer] = newRound();
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