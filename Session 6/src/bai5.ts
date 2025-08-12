interface ChangeSpeed {
    speedUp(amount: number): void;
    slowDown(amount: number): void;
    stop(): void;
}

class Vehicle implements ChangeSpeed {
    private speed: number;

    constructor() {
        this.speed = 0;
    }

    speedUp(amount: number): void {
        this.speed += amount;
        console.log(`Tăng ${amount} km/h. Tốc độ hiện tại: ${this.speed} km/h`);
    }

    slowDown(amount: number): void {
        this.speed -= amount;
        if (this.speed < 0){
            this.speed = 0;
        }
        console.log(`Giảm ${amount} km/h. Tốc độ hiện tại: ${this.speed} km/h`);
    }

    stop(): void {
        this.speed = 0;
        console.log("Phương tiện đã dừng. Tốc độ hiện tại: 0 km/h");
    }
}

const myVehicle = new Vehicle();

myVehicle.speedUp(50);
myVehicle.slowDown(20);
myVehicle.stop();
