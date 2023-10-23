// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require("./utils/generateMarkdown").generateMarkdown
const renderLicenseBadge = require("./utils/generateMarkdown").renderLicenseBadge
const renderLicenseLink= require("./utils/generateMarkdown").renderLicenseLink
const renderLicenseSection = require("./utils/generateMarkdown").renderLicenseSection
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
        choices: ["MIT","GNU GPLv3","Apache","GNU AGPLv3","none"],
        name: 'license',
      },
      {
        type: 'input',
        message: 'what is your github username?',
        name: 'github',
      },
      {
        type: 'input',
        message: 'what is your email?',
        name: 'email',
      },
      

];

// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFile("README.md", data, err => {
    if (err) {
      console.error(err);
    }
  });
}

// TODO: Create a function to initialize app
async function init() {
  const response = await inquirer.prompt(questions)
  response.badge =renderLicenseBadge(response.license)
  response.licenseURL=renderLicenseLink(response.license)
  response.licenseSection=renderLicenseSection(response)
  const readMeData = generateMarkdown(response);
  writeToFile(readMeData)
}

// Function call to initialize app
init();
