"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Circle {
    radius;
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
console.log("=== Hinh tron ===");
console.log("Dien tich:", circle.calculateArea());
console.log("Chu vi:", circle.calculatePerimeter());
console.log("\n=== Hinh chu nhat ===");
console.log("Dien tich:", rectangle.calculateArea());
console.log("Chu vi:", rectangle.calculatePerimeter());
