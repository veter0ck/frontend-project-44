import readlineSync from 'readline-sync';

const brain_even = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random * 100);
    const userAnswer = readlineSync.question('Question: ');
    if (number % 2 === 0 && userAnswer === 'yes') {
      console.log('Correct!');
    } else if (number % 2 !== 0 && userAnswer === 'no') {
      console.log('Correct!');
    } else {
      console.log('Not correct!');
      console.log('Congratulations, you lost!');
    }
  }
};
