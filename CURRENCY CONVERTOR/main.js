#! /usr/bin/env node
import inquirer from "inquirer";
let currency_value = {
    PKR: 278.49,
    USD: 1,
    YUAN: 7.25
};
let ans = await inquirer.prompt([{
        name: "from",
        message: "converting from",
        type: "list",
        choices: ['PKR', 'USD', 'YUAN']
    },
    {
        name: "to",
        message: "converting to",
        type: "list",
        choices: ['PKR', 'USD', 'YUAN']
    },
    {
        name: "amount",
        message: "converted amout is:",
        type: "number"
    }]);
let convertedAmount = currency_value[ans.to] / currency_value[ans.from] * ans.amount;
let roundAmount = Math.round(convertedAmount);
console.log('converted amount is:', roundAmount);
