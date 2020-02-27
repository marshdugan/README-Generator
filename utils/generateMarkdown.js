const apiCall = require("./api.js");


function generateMarkdown(data) {
  return `
# ${data.projectName}

# Description

${data.description}

# Table of Contents

  * [Installation](#Installation)

  * [Usage](#Usage)

  * [License](#License)

  * [Contributing](#Contributing)

  * [Tests](#Tests)
  
  * [Questions](#Questions)

# Installation
  To install necessary dependencies, run the following command:
  
  ${data.dependencies}
  

# Usage
  ${data.usingRepo}

# License
  This project is licensed under the ${data.license} license.

# Contributing
  ${data.contributingRepo}

# Tests
  To run tests, run the following command:
  
  ${data.test}
  

# Questions
  ${console.log(apiCall.getUser(data.username))}
  ${apiCall.getUser(data.username)}

  If you have any questions about the repo, open an issue or contact [${data.username}](https://api.github.com/users/${data.username})

`;
}

module.exports = generateMarkdown;
