#! /usr/bin/env node
import inquirer from "inquirer";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    ;
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([{
        name: "name",
        type: "input",
        message: "Please Enter Your Name"
    }]);
let opponent = await inquirer.prompt([{
        name: "select",
        type: "list",
        message: "Please Select Your Opponent: ",
        choices: ["Alien", "Jhon", "Free fire"]
    }]);
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    // -------------------------ALIEN--------------------------------//
    if (opponent.select == "Alien") {
        let ask = await inquirer.prompt([{
                name: "user",
                type: "list",
                message: "What Would You Like To Do: ",
                choices: ["Attack", "Run Again", "Increase Life.."]
            }]);
        if (ask.user == "Attack") {
            let rendom = Math.floor(Math.random() * 2);
            if (rendom > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("Oops!! Game Over");
                    process.exit();
                }
            }
            if (rendom <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("Congratulations!! You win");
                    process.exit();
                }
            }
        }
        if (ask.user == "Increase Life..") {
            p1.fuelIncrease();
            console.log(`Your Life is Increase ${p1.fuel}`);
        }
        if (ask.user == "Run Again") {
            console.log("You Loose!!!, Better Luck for Next Time.");
            process.exit();
        }
    }
    //-------------------------JHON----------------------------------//
    if (opponent.select == "Jhon") {
        let ask = await inquirer.prompt([{
                name: "user",
                type: "list",
                message: "What Would You Like To Do: ",
                choices: ["Attack", "Run Again", "Increase Life.."]
            }]);
        if (ask.user == "Attack") {
            let rendom = Math.floor(Math.random() * 2);
            if (rendom > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("Oops!! Game Over");
                    process.exit();
                }
            }
            if (rendom <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("Congratulations!! You win");
                    process.exit();
                }
            }
        }
        if (ask.user == "Increase Life..") {
            p1.fuelIncrease();
            console.log(`Your Life is Increase ${p1.fuel}`);
        }
        if (ask.user == "Run Again") {
            console.log("You Loose!!!, Better Luck for Next Time.");
            process.exit();
        }
    }
    //------------------------FREE FIRE------------------------------//
    if (opponent.select == "Free fire") {
        let ask = await inquirer.prompt([{
                name: "user",
                type: "list",
                message: "What Would You Like To Do: ",
                choices: ["Attack", "Run Again", "Increase Life.."]
            }]);
        if (ask.user == "Attack") {
            let rendom = Math.floor(Math.random() * 2);
            if (rendom > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("Oops!! Game Over");
                    process.exit();
                }
            }
            if (rendom <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("Congratulations!! You win");
                    process.exit();
                }
            }
        }
        if (ask.user == "Increase Life..") {
            p1.fuelIncrease();
            console.log(`Your Life is Increase ${p1.fuel}`);
        }
        if (ask.user == "Run Again") {
            console.log("You Loose!!!, Better Luck for Next Time.");
            process.exit();
        }
    }
} while (true);
