"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    speed;
    constructor() {
        this.speed = 0;
    }
    speedUp(amount) {
        this.speed += amount;
        console.log(`Tăng ${amount} km/h. Tốc độ hiện tại: ${this.speed} km/h`);
    }
    slowDown(amount) {
        this.speed -= amount;
        if (this.speed < 0) {
            this.speed = 0;
        }
        console.log(`Giảm ${amount} km/h. Tốc độ hiện tại: ${this.speed} km/h`);
    }
    stop() {
        this.speed = 0;
        console.log("Phương tiện đã dừng. Tốc độ hiện tại: 0 km/h");
    }
}
const myVehicle = new Vehicle();
myVehicle.speedUp(50);
myVehicle.slowDown(20);
myVehicle.stop();
