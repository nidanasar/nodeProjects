#! /usr/bin/env node
import inquirer from "inquirer";
import {differenceInSeconds} from "date-fns";

const response= await inquirer.prompt([{
    name:"userInput",
    type:"number",
    message:"Please enter Digits",
    validate:(input)=>{
if (isNaN(input)){
    return "Please rnter valid Number"
}else if (input > 60){
    return "Seconds must be under 60"
}else{return true;}
}

}]);

let res1=response.userInput;

function startTime(value:number){
    const initailTime= new Date().setSeconds(new Date().getSeconds()+value);
    const intervalTime=new Date(initailTime)
setInterval((()=>{
    const currentTime=new Date()
    const timeOff=differenceInSeconds(intervalTime,currentTime);

if (timeOff<=0){
    console.log("TIMER HAS BEEN EXPIRE.");
    process.exit();
}
const min=Math.floor((timeOff%(3600*24))/3600);
const sec=Math.floor(timeOff%60)
console.log(`${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`);
}),1000)
}

startTime(res1)