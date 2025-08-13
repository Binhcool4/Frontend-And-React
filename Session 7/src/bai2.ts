class Vehicle{
    protected name: string;
    protected speed: number;
    protected id: number;
    constructor(name: string, speed: number, id: number) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown() :number {
        return this.speed -= 10
    }
    speedUp(): number{
        return this.speed += 10
    }
    showSpeed(): void {
        console.log(`tốc độ hiện tại:${this.speed}`);
    }
}
class Bicycle extends Vehicle {
    private gear: number;
    constructor(name: string, speed: number, id: number, gear: number) {
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo():void {
        console.log(`Tên phương tiện: ${this.name} - Tốc độ phương tiện: ${this.speed} km/h - Mã định danh: ${this.id} - Số bánh răng xe: ${this.gear}`);
        
    }
}
let bicy = new Bicycle("xe the thao", 500, 100, 2);
bicy.showInfo();
bicy.slowDown();
bicy.showInfo();