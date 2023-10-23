// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license==="MIT"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }else if(license==="GNU GPLv3"){
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }else if(license==="Apache"){
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }else if(license==="GNU AGPLv3"){
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
  }else{
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license==="MIT"){
    return"(https://choosealicense.com/licenses/mit/)"
  }else if(license==="GNU GPLv3"){
    return"(https://choosealicense.com/licenses/gpl-3.0/)"
  }else if(license==="Apache"){
    return"(https://choosealicense.com/licenses/apache-2.0/)"
  }else if(license==="GNU AGPLv3"){
    return"(https://choosealicense.com/licenses/agpl-3.0/)"
  }else{
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license.license==="none"){
    return ""
  }else{return`

  ## License
  License used for this project - ${license.license}.
  ${license.license} information [${license.licenseURL}]${license.licenseURL}
  * For more information on license types, please reference this website
  for additional licensing information - [https: //choosealicense.com/](https://choosealicense.com/).

---

`
  }

  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${data.badge}
  
---

## Description

  ${data.description}

---
## Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Credits](#credits)
4. [Tests](#tests)
  
---

## Installation:

  ${data.install}
  
---

## Usage

  ${data.usage}

---
${data.licenseSection}
## Contributing:
  
  To contribute to this application, create a pull request.
  Here are the steps needed for doing that:
  - Fork the repo
  - Create a feature branch (git checkout -b NAME-HERE)
  - Commit your new feature (git commit -m 'Add some feature')
  - Push your branch (git push)
  - Create a new Pull Request

  Following a code review, your feature will be merged.


---

## Tests:

  ${data.test}

---

## Credits

  ${data.credit}

---

## Questions

  Contact me by email or on Github:<br>
  [https://github.com/](https://github.com/${data.github})<br>
  [${data.email}](${data.email})
`;
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection
}