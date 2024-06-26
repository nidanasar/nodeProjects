#! /usr/bin/env node

import inquirer from "inquirer"

let user_words= await inquirer.prompt([{
    name:"paragraph",
    message:"please enter your paragraph here.",
    type:"input"
}]); 

let trimmedParagraph=user_words.paragraph.trim();
let wordsCount=trimmedParagraph.split(" ").length;
let characterCount=trimmedParagraph.split(" ").join("").length;

console.log(`your sentence has ${wordsCount} words and ${characterCount} charactars.`)