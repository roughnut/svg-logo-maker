// Packages required for application
const inquirer = require("inquirer");
// color-name validates a color name string
const colorNames = require("color-name");
// hex-color-regex validates a hex color string
const hexRegex = require("hex-color-regex");
// destructure writefile method from fs promises
const { writeFile } = require("fs/promises");

// Import the SVG and shapes classes
const SVG = require("./lib/svg");
const { Square, Triangle, Circle } = require("./lib/shapes");

// Inquirer questions array
const questions = [
  {
    type: "input",
    message: "Enter up to 3 text characters to display on your logo:",
    name: "logoChars",
    // Check the input is not more than 3 characters
    validate: function (input) {
      if (input.length > 3) {
        return "Please enter up to 3 characters only";
      }
      return true;
    },
  },
  {
    type: "input",
    message: (answers) => `Please select a colour for your ${answers.logoChars.toUpperCase()} text`,
    name: "textColor",
    validate: function (input) {
      // Remove spaces using regex and convert to lowercase
      const noSpacesColor = input.replace(/\s+/g, "").toLowerCase();
      // Check if the color is valid using the color modules
      if (colorNames[noSpacesColor] || hexRegex().test(noSpacesColor)) {
        return true;
      }
      return "Please enter a valid colour name";
    },
    // Filter the input for use in the colorNames object
    filter: function (input) {
      return input.replace(/\s+/g, "").toLowerCase();
    },
  },
  {
    type: "list",
    message: "Please choose a logo shape",
    name: "logoShape",
    choices: ["square", "triangle", "circle"],
  },
  {
    type: "input",
    message: (answers) => `Please enter a colour for your ${answers.logoShape}`,
    name: "shapeColor",
    validate: function (input) {
      // Remove spaces using regex and convert to lowercase
      const noSpacesColor = input.replace(/\s+/g, "").toLowerCase();
      // Check if the color is valid using the color modules
      if (colorNames[noSpacesColor] || hexRegex().test(noSpacesColor)) {
        return true;
      }
      return "Please enter a valid colour name";
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
  inquirer.prompt(questions)
  .then((answers) => {
    console.log(answers);    
    // destructuring the answers object
    const { logoChars, textColor, logoShape, shapeColor } = answers;
    let newShape;
    // Create a new shape based on the user's choice
    switch (logoShape) {
      case "square":
        newShape = new Square();
        break;
      case "triangle":
        newShape = new Triangle();
        break;
      case "circle":
        newShape = new Circle();
        break;
    }
    // Set the shape color based on the user's choice
    newShape.shapeColor(shapeColor);
    // Create a newLogo SVG object
    const newLogo = new SVG();
    // Set the type of shape and its text
    newLogo.createShape(newShape);
    newLogo.createText(logoChars, textColor, logoShape);
    // Write the new logo to a file
    return writeFile("logo.svg", newLogo.render());
  })
  .then(() => console.log("Shape happens! Generated logo.svg"))
  .catch((err) => console.error('Error: ', err));
}

// Shape happens!
init();
