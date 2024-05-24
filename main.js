#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const Persons = new Person();
const begin = async (Persons) => {
    do {
        console.log(chalk.bgBlue.bold("Welcome to Rockford Cambridge School"));
        const ask = await inquirer.prompt([
            {
                name: "select",
                type: "list",
                message: "Please select from given list from whom you want to contact",
                choices: ["Admin", "Faculty Staff", "Students", "Exit"]
            }
        ]);
        if (ask.select == "Admin") {
            console.log(chalk.bgBlueBright.bold("For Admissions and further information please visit to admission department office # 121 2nd floor main admin building"));
        }
        else if (ask.select == "Faculty Staff") {
            console.log(chalk.bgCyan.bold("For any query regarding studies you may visit faculty staff room during office hours on working days"));
        }
        else if (ask.select == "Students") {
            const ans = await inquirer.prompt([
                {
                    name: "student",
                    type: "input",
                    message: "Please enter student name you want to contact",
                }
            ]);
            const student = Persons.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                Persons.addStudent(name);
                console.log(chalk.bgCyanBright.bold(`Hi I am ${name.name} how may I assist you?`));
                console.log(chalk.bgGray.bold("New student added successfully"));
                console.log(chalk.bgMagentaBright.bold("Current student list"));
                console.log(Persons.students);
            }
            else {
                console.log(chalk.bgMagenta.bold(`Hi I am ${student.name} please feel free to ask any question regarding school and studies I am here for your assistance will happy to guide you.`));
                console.log(chalk.bgYellow.bold("Existing student list"));
                console.log(Persons.students);
            }
        }
        else if (ask.select == "Exit") {
            console.log(chalk.bgRed.bold("Exiting from Rockford Cambridge School Application"));
            process.exit();
        }
    } while (true);
};
begin(Persons);
