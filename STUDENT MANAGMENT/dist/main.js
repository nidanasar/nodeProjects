#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class student {
    static counter = 1000;
    id;
    name;
    course;
    balance;
    constructor(name) {
        this.id = student.counter++;
        this.name = name;
        this.course = [];
        this.balance = 100;
    }
    enrollCourse(course) {
        this.course.push(course);
    }
    viewBalance() {
        console.log(`balance for ${this.name}: $${this.balance}`);
    }
    payFee(amount) {
        this.balance -= amount;
        console.log(`$${amount} tution fee paid succesfully for:${this.name}`);
        console.log(`Remainaig Balance:$${this.balance}`);
    }
    studentStatus() {
        console.log(`id: ${this.id}`);
        console.log(`name: ${this.name}`);
        console.log(`course: ${this.course}`);
        console.log(`balance: $${this.balance}`);
    }
}
class studentManager {
    students;
    constructor() {
        this.students = [];
    }
    newstudent(name) {
        let Student = new student(name);
        this.students.push(Student);
        console.log(`student: ${name} added successfully. student iD: ${Student.id}`);
    }
    // find student method
    findstudent(studentID) {
        return this.students.find(std => std.id === studentID);
    }
    enrollCourse(studentID, course) {
        let studentt = this.findstudent(studentID);
        if (studentt) {
            studentt.enrollCourse(course);
            console.log(`${studentt.name} enrolled in ${course} successfully.`);
        }
    }
    viewStudentBalance(studentID) {
        let student = this.findstudent(studentID);
        if (student) {
            student.viewBalance();
        }
        else {
            console.log("Invalid ID");
        }
    }
    payStudentFee(studentID, amount) {
        let student = this.findstudent(studentID);
        if (student) {
            student.payFee(amount);
        }
        else {
            console.log("Invalid ID.");
        }
    }
    showStudentStatus(studentID) {
        let student = this.findstudent(studentID);
        if (student) {
            student.studentStatus();
        }
    }
}
// main function
async function main() {
    console.log(chalk.greenBright.bold("welcome to STUDENT MANAGMENT"));
    console.log("-".repeat(30));
    let studentM = new studentManager();
    while (true) {
        let choice = await inquirer.prompt([{
                name: "choice1",
                type: "list",
                message: "please select an option",
                choices: [
                    "Add Student",
                    "Enroll Student",
                    "View Student Balance",
                    "Pay Fee",
                    "Show Status",
                    "Exit",
                ]
            }]);
        switch (choice.choice1) {
            case "Add Student":
                let nameInput = await inquirer.prompt([{
                        name: "name",
                        type: "input",
                        message: "Enter a Student Name",
                    }]);
                studentM.newstudent(nameInput.name);
                break;
            case "Enroll Student":
                let courseInput = await inquirer.prompt([{
                        name: "student_ID",
                        type: "number",
                        message: "Enter a Student ID."
                    },
                    { name: "course",
                        type: "input",
                        message: "Enter a Course Name"
                    }]);
                studentM.enrollCourse(courseInput.student_ID, courseInput.course);
                break;
            case "View Student Balance":
                let balanceInput = await inquirer.prompt([{
                        name: "student_id",
                        type: "number",
                        message: "Enter a Student ID"
                    }]);
                studentM.viewStudentBalance(balanceInput.student_id);
                break;
            case "Pay Fee":
                let payfeeInput = await inquirer.prompt([{
                        name: "student_id",
                        type: "number",
                        message: "please enter a student ID"
                    },
                    {
                        name: "amount",
                        type: "number",
                        message: "please entrer a amount to pay."
                    }]);
                studentM.payStudentFee(payfeeInput.student_id, payfeeInput.amount);
                break;
            case "Show Status":
                let showStatusInput = await inquirer.prompt([{
                        name: "student_id",
                        type: "number",
                        message: "please enter a student ID"
                    }]);
                studentM.showStudentStatus(showStatusInput.student_id);
                break;
            case "Exit":
                console.log("exiting....");
                console.log(chalk.greenBright("THANK YOU FOR USING!!"));
                process.exit();
        }
    }
}
main();
