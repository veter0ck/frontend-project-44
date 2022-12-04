#!/usr/bin/env node
import readName from '../src/cli';

console.log('Welcome to the Brain Games!');
console.log(`May I have your name? ${readName}`);
console.log(`Hello, ${readName}`);
