#! /usr/bin/env node

import inquiere from "inquirer";

const Quiz:{
    quistion_1: string;
    quistion_2: string;
    quistion_3: string;
    quistion_4: string;
    quistion_5: string;
}= await inquiere.prompt([{
     name: "quistion_1",
     type:"list",
     message:"Q1: Ankara is the capital of which country?",
     choices:["Turkey","Iran","saudia"]
},
{   name: "quistion_2",
    type:"list",
    message:"Q2: The world Biggest Airport by Passenger traffic is ",
    choices:["Atlanta Airport-USA","Hethrow Airport-LONDON","Karachi Airport-PAK"]
    
},
{
    name: "quistion_3",
    type:"list",
    message:"Q3: The world Biggest Airport by Size is ",
    choices:["Atlanta Airport-USA","King Fahad Airport-Dammam","Karachi Airport-PAK"]
    
},
{
    name: "quistion_4",
    type:"list",
    message:"Q4: Lufthansa Airline belongs to...? ",
    choices:["Germany","Canada","Malysia"]
}

]);

let score:number=0;

switch(Quiz.quistion_1){
    case "Turkey":
    console.log("Ans1: Correct Answer.");
    ++score;
break;
default:console.log("Ans1: Incorrect Answer.")

}

switch(Quiz.quistion_2){
    case "Atlanta Airport-USA":
    console.log("Ans2: Correct Answer.");
    ++score;
break;
default:console.log("Ans2: Incorrect Answer.")

}

switch(Quiz.quistion_3){
    case "King Fahad Airport-Dammam":
    console.log("Ans3: Correct Answer.");
    ++score;
break;
default:console.log("Ans3: Incorrect Answer.")

}

switch(Quiz.quistion_4){
    case "Germany":
    console.log("Ans4 Correct Answer.");
    ++score;
break;
default:console.log("Ans4: Incorrect Answer.")

}

console.log(`total Score: ${score}`);
