// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
console.log("Please answer the following questions to generate a README for your project")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a project name.');
                return false;
            
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a short description of your project. What was your motivation? What problem does it solve?',
        validate: userDescription => {
            if (userDescription) {
                return true;
            } else {
                console.log('Please enter a few words about your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide any installation or system requirements for your project.',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please provide installation information. If none, type N/A.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide details on how your project should be used.',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('How should people use your project?');
                return false;
            }
        }
    }, 
    {
        type: 'list',
        name: 'license',
        message: 'Please choose the license for your project.',
        choices: ['MIT', 'ISC', 'Unlicense', 'None'],
      
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can others contribute to your project?',
        validate: contributionInst => {
            if (contributionInst) {
                return true;
            } else {
                console.log('Please let people know how or if they can contribute.');
                return false;
            }
        }
    }, 
    {
        type: 'input',
        name: 'test',
        message: 'How can another user test your project?',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Are there any ways to test your project?');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please provide your GitHub username.');
                return false;
            }
        }
    }, 
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please provide an email address.');
                return false;
            }
        }
    },   
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log('Success! You have just created a high quality README!');
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
}

// Function call to initialize app
init();
