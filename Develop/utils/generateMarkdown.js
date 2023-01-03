// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
} else {
    return '';
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `https://opensource.org/licenses/${license}`
} else {
    return '';
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  } else {
    return `## License`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}
 

  ## Description
  ${data.description}
  
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
  

  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}
  The license this project is under is ${data.license}. For more information, please click the link below:

  ${renderLicenseLink(data.license)}
  
  ## Contribution
  ${data.contribution}
  
  ## Tests
  ${data.test}
  
  ## Questions
  Any Questions? You can email me at ${data.email}
  Or, reach out to me on GitHub at https://github/${data.username}
`;
}

module.exports = generateMarkdown;
