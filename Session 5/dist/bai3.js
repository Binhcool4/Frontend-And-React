"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    name;
    company;
    phone;
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`Tên: ${this.name}, Công ty: ${this.company}, Số điện thoại: ${this.phone}`);
    }
}
const emp = new Employee("Binh", "cong ty a", "123456789");
emp.printInfo();
