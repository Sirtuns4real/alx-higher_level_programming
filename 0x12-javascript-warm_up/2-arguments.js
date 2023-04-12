#!/usr/bin/node
const myArgument = process.argv.length;
console.log(myArgument === 2 ? 'No argument' : myArgument === 3 ? 'Argument found' : 'Arguments found');
