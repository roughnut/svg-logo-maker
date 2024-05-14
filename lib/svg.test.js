// Require SVG and Shapes class modules
const SVG = require("./svg");
const { Triangle, Square, Circle } = require("./shapes");

// Test suite for SVG class
describe("SVG", () => {
  // Test to check the SVG render method returns a string with of the chosen shape type
  describe("render triangle", () => {
    it("should return a string with the chosen shape type - triangle is of polygon type", () => {
      const svg = new SVG();
      const triangle = new Triangle();
      svg.createShape(triangle);
      expect(svg.render()).toContain("polygon");
    });
  });
  describe("render square", () => {
    it("should return a string with the chosen shape type - square is of rect type", () => {
      const svg = new SVG();
      const square = new Square();
      svg.createShape(square);
      expect(svg.render()).toContain("rect");
    });
  });
    describe("render circle", () => {
        it("should return a string with the chosen shape type - circle is of circle type", () => {
        const svg = new SVG();
        const circle = new Circle();
        svg.createShape(circle);
        expect(svg.render()).toContain("circle");
        });
    });
});
