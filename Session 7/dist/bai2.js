"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    name;
    speed;
    id;
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown() {
        return this.speed -= 10;
    }
    speedUp() {
        return this.speed += 10;
    }
    showSpeed() {
        console.log(`tốc độ hiện tại:${this.speed}`);
    }
}
class Bicycle extends Vehicle {
    gear;
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo() {
        console.log(`Tên phương tiện: ${this.name} - Tốc độ phương tiện: ${this.speed} km/h - Mã định danh: ${this.id} - Số bánh răng xe: ${this.gear}`);
    }
}
let bicy = new Bicycle("xe the thao", 500, 100, 2);
bicy.showInfo();
bicy.slowDown();
bicy.showInfo();
