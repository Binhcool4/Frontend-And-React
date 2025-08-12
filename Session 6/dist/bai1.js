"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shape {
    name;
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Rectangle extends Shape {
    width;
    height;
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        console.log(`${this.name} co chieu rong ${this.width} va chieu cao ${this.height}`);
    }
}
const rec = new Rectangle("Hinh chu nhat", 20, 30);
console.log(rec.getName());
rec.getSize();
