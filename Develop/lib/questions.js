//import fs from 'fs'
const fs = require ('fs')
const util = require('util')
//import util from 'util'
//import Mod from '../utils/generateMarkdown'
const Mod = require('../utils/generateMarkdown')

const makeAsync = util.promisify(fs.writeFile);

var inquirer = require("inquirer");
inquirer
  .prompt([
    /* Passing questions for command-line prompt here in object */
    {
      name: "Blue_title",
      message: "Whats the Head Title of Repository?",
      type: "input",
    },
    {
      name: "email",
      message: "What is your email?",
      type: "input",
    },
    {
      name: "author",
      message: "?",
      type: "input",
    },
    {
      name: "motivation",
      choices: "What was your motivation?",
      type: "input",
    },
    {
      name: "description",
      message: "Describe why did you build this project?",
      type: "input",
    },
    {
      name: "solve",
      message: " What problem does it solve?",
      type: "input",
    },
    {
      name: "learn",
      message: " What did you learn?",
      type: "input",
    },
    {
      name: "installations",
      message:
        "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
      type: "input",
    },
    {
      name: "usage",
      message:
        "Provide instructions and examples for use. Include screenshots as needed.To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax: ```md ![alt text](assets/images/screenshot.png)```",
      type: "input",
    },
    {
      name: "credits",
      message:
        "List your collaborators, if any, with links to their GitHub profiles.If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.If you followed tutorials, include links to those here as well.",
      type: "input",
    },
    {
      name: "license",

      message:
        "The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).",
      choices: [
        "MIT License i",
        "GNU GPLv3 ",
        "usage information",
        "Mozilla Public License 2.0",
        " Apache License 2.0",
      ],
      type: "list",
    },
    {
      name: "badges",
      message: "Display badges here?",
      type: "input",
    },
    {
      name: "contribution",
      message: "Who all created this project?",
      type: "input",
    },
    {
      name: "questions",
      message: "Reached me here for more questions?",
      type: "input",
    },
  ])
  .then((answers) => {
    makeAsync("ReadMe2.md", Mod.generateMarkdown(answers))
      .then(() => {
        console.log("successfully created reaadme file");
      })
      .catch((err) => console.log("There eas an error"));
    // Use user feedback for... whatever!!
    // {{input}}
    console.log(answers);
  })
  .catch((error) => {
    console.log(error);
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
