// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      name: "username",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
    {
      type: "input",
      name: "project",
      message: "What is your project's name?",
    },
    {
      type: "input",
      name: "description",
      message: "Please write a short description of your project:",
    },
    {
      type: "list",
      name: "license",
      message: "Which license does your project need?",
      choices: ["MIT", "APACHE 2.0", "GPL 3.8", "BSD 3", "None"],
    },
    {
      type: "input",
      name: "installation",
      message: "What command should be run to install dependencies?",
    },
    {
      type: "input",
      name: "testing",
      message: "What command should be run to run tests?",
    },
    {
      type: "input",
      name: "info",
      message: "What does the user need to know about using the repository?",
    },
    {
      type: "input",
      name: "contribution",
      message:
        "What does the user need to know about contributing to the repository?",
    },
  ])
  .then((data) => {
    const generateREADME = (data) => {
      return `# ${data.project}

## Description
${data.description}

## Table of Contents
[Installation](#installation)    
[Usage](#usage)  
[License](#license)  
[Contributing](#contributing)  
[Tests](#tests)  
[Questions](#questions)

## Installation
To install the necessary dependencies run the following command: ${data.installation}

## Usage
${data.info}

## License
This project is licensed under the ${data.license} license.

## Contributing
${data.contribution}

## Tests
To run tests, run the following command: ${data.testing}

## Questions
If you have any questions about the repository, you can contact me at ${data.email}. You can view more of my work on GitHub [${data.username}].`;
    };
    fs.writeFile("README.md", generateREADME(data), (error) => {
      error ? console.log(error) : console.log("Generating README...");
    });
  });

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
