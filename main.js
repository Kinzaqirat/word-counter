#! /usr/bin/env node
// import inquirer for getting input from user
import inquirer from "inquirer";
// code for show output
const answers = await inquirer.prompt([{
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count words."
    }]);
// adding trim for remove spaces and split to cound words
const words = answers.Sentence.trim().split(" ");
// print it and add lenght for count lenght
console.log(`Your sentence has ${words.length} words.`);
