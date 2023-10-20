// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the application title?',
        name: 'title',
      },
      {
            type: 'input',
            message: 'What is a description of the app?',
            name: 'description',
      },
      {
        type: 'input',
        message: 'how do you install the app?',
        name: 'install',
      },
      {
        type: 'input',
        message: 'who contributed to the project?',
        name: 'contribute',
      },
      {
        type: 'input',
        message: 'what are the test instruction?',
        name: 'test',
      },
      {
        type: 'list',
        message: 'which liscence will you use?',
        choices: [""],
        name: 'license',
      },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
