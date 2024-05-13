class Shape {
    constructor() {
        this.color = '';
    }

    shapeColor (color) {
        this.color = color;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="50" y="0" width="200" height="200" fill="${this.color}"/>`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150,0 50,200 250,200" fill="${this.color}"/>`
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="100" fill="${this.color}"/>`
    }
}

module.exports = { Square, Triangle, Circle };