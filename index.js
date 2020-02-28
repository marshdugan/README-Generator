const fs = require("fs");
const inquirer = require("inquirer");
const apiCall = require("./utils/api.js");
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
        choices: ["MIT", "APACHE-2.0", "GPL-3.0", "BSD-3-Clause", "None"]
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
    //Call function with filename and data from prompt
    writeToFile("Profile.md", response);
});

function writeToFile(fileName, data) {
    //First api call to get data from github
    apiCall.getUser(data.username).then(function(gitHubData) {
        //Second api call to get the list of licenses
        apiCall.getLicenses().then(function(objLicense) {
            //Searches through licenses
            for (let i = 0; i < objLicense.data.length; i++) {
                //When license === input license
                if (objLicense.data[i].spdx_id === data.license) {
                    //Call the generate function to return the formatted code
                    let readmeData = generate(data, gitHubData.data, objLicense.data[i]);
                    //Write the readme data to a file
                    fs.writeFile(fileName, readmeData, error => error ? console.log(error) : console.log("Alt README created"));
                    //We are still in the for loop so break
                    break;
                }
            }
        })
    });
    
}
