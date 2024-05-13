// class constructor for an SVG element 300x200 px
class SVG {
    constructor() {
        this.width = 300;
        this.height = 200;
        this.shape = '';
        this.text = '';
    }

    render() {
        return `<svg width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">
        ${this.shape}
        ${this.text}
        </svg>`;
    }

    createShape(shape) {
        this.shape = shape.render();
    }

    // Use switch statement to determine the y position of the text based on the shape
    createText(logoChars, textColor, logoShape) {
        switch (logoShape) {
            case 'triangle':
                this.text = `<text x="150" y="135" text-anchor="middle" fill="${textColor}" font-size="45">${logoChars.toUpperCase()}</text>`;
                break;
            case 'circle':
                this.text = `<text x="150" y="115" text-anchor="middle" fill="${textColor}" font-size="45">${logoChars.toUpperCase()}</text>`;
                break;
            case 'square':
                this.text = `<text x="150" y="110" text-anchor="middle" fill="${textColor}" font-size="45">${logoChars.toUpperCase()}</text>`;
                break;
        }
    }
}

module.exports = SVG;