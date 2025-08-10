"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    setWidth(width) {
        this.width = width;
    }
    getHeight() {
        return this.height;
    }
    setHeight(height) {
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
    display() {
        console.log(`Chiều rộng: ${this.width} | Chiều dài: ${this.height} | Diện tích: ${this.getArea()} | Chu vi: ${this.getPerimeter()}`);
    }
}
const rec = new Rectangle(10, 30);
rec.display();
rec.setWidth(20);
rec.setHeight(40);
console.log("\nSau khi cập nhật:");
rec.display();
