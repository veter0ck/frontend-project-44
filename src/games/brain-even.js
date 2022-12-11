import readlineSync from 'readline-sync';
import greeting from './cli.js';
import randomNumber from './src/randomNumber.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;





const countOfRound = 3;

/*const brainEven = () => {  
  const userName = greeting();
  console.log('');

  for (let i = 0; i < countOfRound; i += 1) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if ((number % 2 === 0 && userAnswer === 'yes') || (number % 2 !== 0 && userAnswer === 'no')) {
      console.log('Correct!');
    } else if (number % 2 === 0 && userAnswer === 'no') {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      console.log(`Let's try again, ${userName}!`);
      return;
    } else if (number % 2 !== 0 && userAnswer === 'yes') {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};*/



export default brainEven;