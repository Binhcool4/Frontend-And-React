"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    name;
    year;
    company;
    id;
    constructor(id, name, year, company) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }
    printInfo() {
        console.log(`ID: ${this.id}, Tên: ${this.name}, Năm sản xuất: ${this.year}, Hãng xe: ${this.company}`);
    }
}
const v1 = new Vehicle(1, "Supra", 2021, "Toyata");
v1.printInfo();
console.log(v1.name);
