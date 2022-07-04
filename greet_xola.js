
//  module.exports = function greet(name){

//     return "Hello, " + name;
//  }
 
// const chalk = require('chalk');
// //import the greet module that is in the current folder
// const greet = require('./greet');

// const styledMessage = chalk.bgGreen.black(greet('Xola'));
// console.log(styledMessage)

import chalk from 'chalk';

import greet from './greet.js';

//const greet = require('./greet.js');

//const error = chalk.bold.red;
//const warning = chalk.hex('#FFA500'); // Orange color

 const styledMessage = chalk.bgGreen.black(greet('Xola'));
 console.log(styledMessage)


//console.log(chalk.blue('Hello world!'));
