// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseType = license.license; 
  let yourLicense = ''
  if(licenseType === 'MIT') {
    yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licenseType === 'GPLv3') {
    yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (licenseType === 'GPL') {
    yourLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
  } else {
    license.license = "N/A"
  }
  return yourLicense;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = license.link;
  if ((license === null))
  { return []; }
  else {
    return license.link; 
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let section = license.section;
  if (license === null) {
    return [];
  } else {
    return license.section;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Blue_title} 
##Description
${data.description}${data.learn} ${data.motivation} ${data.solve} 
## Table of Contents:
* [Installation](#installation)
* [Usage](#License)
* [Credits](#credits)
* [License](#license)
* [Questions](#questions)
### Installation:
In order to install the necessary dependencies, open the console and run thr following:
\`\`\`${data.installations}\`\`\`
### Usage:
Provide instructions and examples for use. Include screenshots as needed.
${data.usage}
### License:
This project is Licensed under:
${data.license}
### Features
If your project has a lot of features, list them here.
### How to Contribute:
${data.contribution}
### Tests:
In order to test open the console and run the following:
\`\`\`${data.test}\`\`\`
### Credits
List your collaborators, if any, with links to their GitHub profiles.
${data.credits}
### Author
The author name is
${data.author}
### Questions:
If you have any questions contact me on [GitHub](https://github.com/${data.username}) or contact
${data.author} at ${data.email}
`;
}
let Mod = { generateMarkdown };

module.exports = Mod
///export {generateMarkdown}