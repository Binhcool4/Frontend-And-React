"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    id;
    age;
    email;
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
    printInfo() {
        console.log(`ID: ${this.id}, Tuổi: ${this.age}, Email: ${this.email}`);
    }
}
const studentList = [];
studentList.push(new Student(1, 20, "student1@example.com"));
studentList.push(new Student(2, 22, "student2@example.com"));
studentList.push(new Student(3, 19, "student3@example.com"));
for (const student of studentList) {
    student.printInfo();
}
