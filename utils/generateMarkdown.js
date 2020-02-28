function generateMarkdown(data, gitHubData, gitHubLicense) {
  return `# ${data.projectName}
  [![GitHub license](https://img.shields.io/badge/license-${gitHubLicense.spdx_id}-blue)](${gitHubData.html_url})

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
  ~~~
  ${data.dependencies}
  ~~~

# Usage
  ${data.usingRepo}

# License
  This project is licensed under the ${data.license} license.

# Contributing
  ${data.contributingRepo}

# Tests
  To run tests, run the following command:
  ~~~
  ${data.test}
  ~~~

# Questions
  <img src="${gitHubData.avatar_url}" alt="avatar" style="border-radius: 16px" width="30"/>

  If you have any questions about the repo, open an issue or contact [${data.username}](https://api.github.com/users/${data.username}) or send me an email at ${gitHubData.email};

`;
}

module.exports = generateMarkdown;
