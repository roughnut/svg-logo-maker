const { Triangle, Square, Circle } = require("./shapes");
const SVG = require("./svg");

describe("Shapes", () => {
    // Test to check each of the shapes classes render a string with a given color
    describe("Square", () => {
        it("should return a string with the chosen color", () => {
            const square = new Square();
            const color = "pink";
            square.shapeColor(color);
            expect(square.render()).toContain(`fill="${color}"`);
        });
    });
    describe("Triangle", () => {
        it("should return a string with the chosen color", () => {
            const triangle = new Triangle();
            const color = "lightcoral";
            triangle.shapeColor(color);
            expect(triangle.render()).toContain(`fill="${color}"`);
        });
    });
    describe("Circle", () => {
        it("should return a string with the chosen color", () => {
            const circle = new Circle();
            const color = "purple";
            circle.shapeColor(color);
            expect(circle.render()).toContain(`fill="${color}"`);
        });
    });
});