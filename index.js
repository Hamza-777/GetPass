#!/usr/bin/env node
const program = require('commander');
const chalk = require('chalk');
const clipboardy = require('clipboardy');
const log = console.log;
const createPassword = require('./utils/createPassword');
const savePassword = require('./utils/savePassword');

program.version('1.0.0').description('A password generator');

program
    .option('-l, --length <length>', 'length of password', '7')
    .option('-s, --save', 'save the password to passwords.txt')
    .option('-nn, --no-numbers', 'exclude numbers')
    .option('-ns, --no-symbols', 'exclude symbols')
    .parse();

const {length, save, numbers, symbols} = program.opts();

// get generated password
const generatedPassword = createPassword(length, numbers, symbols);

// save to file
if(save) {
    savePassword(generatedPassword);
}

// copy to clipboard
clipboardy.writeSync(generatedPassword);

// output generated password
log(chalk.red('Generated Password: ') + chalk.bold(generatedPassword));
log(chalk.blue('Password copied to clipboard'));