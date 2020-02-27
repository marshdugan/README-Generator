const apiCall = require("./utils/api.js");

function generateMarkdown(data) {
  return `
# ${data.projectName}

# ${data.description}

# ${data.projectName}

# Table of Contents

  1. [Installation](#Installation)
  1. [Usage](#Usage)
  1. [License](#License)
  1. [Contributing](#Contributing)
  1. [Tests](#Tests)
  1. [Questions](#Questions)

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

`;
}

module.exports = generateMarkdown;
