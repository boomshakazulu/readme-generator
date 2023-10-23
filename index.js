// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require("./utils/generateMarkdown")
const renderLicenseBadge = require("./utils/generateMarkdown")
const badges = require("./utils/")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the application title?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'What is a brief description of the app?',
        name: 'description',
      },
      {
        type: 'input',
        message: 'how do you install the app?',
        name: 'install',
      },
      {
        type: 'input',
        message: 'how do you use the app?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'who contributed to the project?',
        name: 'credit',
      },
      {
        type: 'input',
        message: 'what are the test instruction?',
        name: 'test',
      },
      {
        type: 'list',
        message: 'which liscence will you use?',
        choices: ["MIT","GNU","Apache","GPL","none"],
        name: 'license',
      },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
async function init() {
  const response = await inquirer.prompt(questions)
 console.log(response)
  response.license =renderLicenseBadge(response.license)
  let readMeData = generateMarkdown(response);
}

// Function call to initialize app
init();
