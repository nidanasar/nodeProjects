#! /usr/bin/env node
import inquirer from "inquirer";
const rendomNumber = Math.floor(Math.random() * 6 + 1);
const guessNumber = await inquirer.prompt([{
        name: 'userGuessNumber',
        type: 'number',
        message: 'please guess the correct number between 1 - 6'
    }]);
if (guessNumber.userGuessNumber === rendomNumber) {
    console.log('congratulations! you choose a correct number');
}
else {
    console.log('oops! you choose a worng number');
}
