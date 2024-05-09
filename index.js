// Packages required for application
const inquirer = require("inquirer");
// color-name validates a color name string
const colorNames = require("color-name");
// hex-color-regex validates a hex color string
const hexRegex = require("hex-color-regex");

// Inquirer questions array
const questions = [
  {
      type: 'input',
      message: 'Enter up to 3 characters to display on your logo:',
      name: 'logoChars',
      // Check the input is not more than 3 characters
      validate: function (input) {
          if (input.length > 3) {
              return 'Please enter up to 3 characters only';
          }
          return true;
      }
  },
  {
    type: "input",
    message: "Enter the color of your logo",
    name: "logoColor",
    validate: function (input) {
        // Remove spaces using regex and convert to lowercase
        const noSpacesColor = input.replace(/\s+/g, "")
        .toLowerCase();
        // Check if the color is valid using the color modules
      if (colorNames[noSpacesColor] || hexRegex().test(noSpacesColor)) {
        return true;
      }
      return "Please enter a valid color name";
    },
    // Filter the input for use in the colorNames object
    filter: function (input) {
      return input.replace(/\s+/g, "").toLowerCase();
    },
  },
];

// Function to initialise the app
function init() {
  console.log("Welcome to the SVG logo maker. Let's create your logo!");
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);    
  });
}

// Shape happens!
init();
