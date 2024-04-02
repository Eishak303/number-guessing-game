#!/usr/bin/env node1qas
import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1) ;

console.log("wellcome to number guessing game")
const answers = await inquirer.prompt ([
    {
        name : "userGuessNumber",
        type : "number",
        message:  "please guess a number between 1-6:",
     },
]);

if (answers.userGuessNumber === randomNumber) {
    console.log("congratulation! you guessed right number")
} else {
    console.log("You guessed wrong number");
}
 