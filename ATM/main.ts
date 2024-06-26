#!/usr/bin/env node
import inquirer from "inquirer"


let myBalance:number=50000;
let myPin:number=6789;
let pinResult= await inquirer.prompt([
    {
        name:"pin",
        message:"please enter your correct PIN number",
        type:"number"

}
]);
if(pinResult.pin===myPin){
    console.log("your PIN number is correct!!")

    let operation1=await inquirer.prompt([{
        name:"operation",
        message:"please select the service you may require",
        type:"list",
        choices:["withdraw","check balance","fast cash"]

    }]);

    if(operation1.operation==="withdraw"){
    let amountAns= await inquirer .prompt([{
        name:"amount",
        message:"please enter you amount",
        type:"number"

    }])
    
    if(amountAns.amount>myBalance){
    console.error('SORRY! Insuffiant balance for the requested amount')
    }else { myBalance-=amountAns.amount
    console.log("your remaining balance is :"+ myBalance);
 
    }}

    else if(operation1.operation==="check balance"){
        console.log(`your balance is ${myBalance}`)
    }
    else if(operation1.operation==="fast cash"){
        const fastCashAmount=5000;
        if (fastCashAmount>myBalance){
            console.error("sorry! in suffiant balance for the fast cash amount."); 
        
    }else {myBalance-= fastCashAmount;
        console.log(`you have withdrw ${fastCashAmount}`);
        console.log(`your remainig balance is ${myBalance}`)
}}}

else{
    console.log("incorrect PIN number!!")
};