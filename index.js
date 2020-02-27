const fs = require("fs");
const apiCall = require("./utils/api.js");
const inquirer = require("inquirer");
const generate = require("./utils/generateMarkdown.js");

const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your project's name?",
        name: "projectName"
    },
    {
        type: "input",
        message: "Please write a short description of your project",
        name: "description"
    },
    {
        type: "list",
        message: "What kind of license should your project have?",
        default: "Use arrow keys",
        name: "license",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        default: "npm i",
        name: "dependencies"
    },
    {
        type: "input",
        message: "What command should be run to test?",
        default: "npm test",
        name: "test"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usingRepo"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing the repo?",
        name: "contributingRepo"
    }
];

inquirer.prompt(questions).then(function(response) {
    apiCall.getUser(response.username);
    writeToFile("Profile.txt", response);
});

function writeToFile(fileName, data) {
    generate(data);
}

// function init() {

// }

// init();
