#!/usr/bin/env node

import inquirer from "inquirer";

let todo_list:string[]=[];

let while_condition:boolean=true;

while(while_condition=== true){

let option=await inquirer.prompt([{

    
        name: "user",
        message: "please select an option",
        type:"list",
        choices:["add","remove","edit"]
    
}]);

if (option.user==="add"){
let ans= await inquirer.prompt([{
        name:"user_ans",
        message:"please write something to add.",
        type:"input"
}])

if(ans.user_ans !==""){
 todo_list.push(ans.user_ans);
 console.log(todo_list)
}
else{
    console.log("please write something to add.")         
}
}
else if (option.user==="remove"){
let remove= await inquirer.prompt([{
    name:"removeItem",
    message:" please select item to remove.",
    type:"list",
    choices:todo_list
}]);
let index_remove=todo_list.indexOf(remove.removeItem);
if(index_remove>=0){
todo_list.splice(index_remove,1);
console.log('you removed:',remove.removeItem);
console.log(todo_list)
};

}else if (option.user==="edit"){
    if (todo_list.length===0){
        console.log("no item to edit");
    }
    let edit= await inquirer.prompt([{
        name:"edititem",
        message:"please select an item for edit",
        type:"list",
        choices:todo_list
    }]);
    let index_edit=todo_list.indexOf(edit.edititem)
    let new_value=await inquirer.prompt([{
        name:"newvalue",
        message:"please enter the new value",
        type:"input"
    }]);
    if(index_edit>=0 && new_value.newvalue!==""){
        todo_list[index_edit]=new_value.newvalue;
        console.log('you edited:', edit.edititem);
        console.log(todo_list);
    }
}else{ console.log("invalisd new value")};

let user_ans=await inquirer.prompt([{
    name:"confermatoin",
    message:"do you want to continue!",
    type:"confirm",
    default:true
}])
if(user_ans.confermatoin===false){
while_condition=false;
}
}
console.log("thankyou for using.")