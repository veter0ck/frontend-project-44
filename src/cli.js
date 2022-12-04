// import readlineSync from 'readline-sync';

const readlineSync = require('readline-sync');

const readName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

export default readName;
