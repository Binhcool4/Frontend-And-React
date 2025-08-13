"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(`Tên động vật: ${this.name}`);
    }
}
class Cat extends Animal {
    makeNoise() {
        console.log("meo meo");
    }
}
class Dog extends Animal {
    makeNoise() {
        console.log("gâu gâu");
    }
}
const myCat = new Cat("Miu Miu");
const myDog = new Dog("Cậu Vàng");
myCat.printName();
myCat.makeNoise();
myDog.printName();
myDog.makeNoise();
