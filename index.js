#! /usr/bin/env node
import inquirer from "inquirer";
const Randomenumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: "Please Select a number between 1-10:",
    },
]);
if (answers.UserGuessedNumber === Randomenumber) {
    console.log("Congratulations! You guessed the right number");
}
else {
    console.log("Oops! You guessed the wrong number");
}
