#! /usr/bin/env node
import inquirer from "inquirer";
const guessednumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userguessedNumber",
        type: "number",
        message: "Please Guess A Number Between(1-10): ",
    },
]);
if (answer.userguessedNumber == guessednumber) {
    console.log("Congratulations! You Guessed The Right Number");
}
else {
    console.log("Sorry You Guessed A Wrong Number");
}
