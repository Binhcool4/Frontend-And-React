"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Student extends Person {
    id;
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfor() {
        console.log(`Mã sinh viên: ${this.id} - Tên sinh viên: ${this.name}`);
    }
}
class Teacher extends Person {
    subject;
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfor() {
        console.log(`Tên giảng viên: ${this.name} - Môn học dạy: ${this.subject}`);
    }
}
let student = new Student("Binh", 1);
let teacher = new Teacher("An", "React.js");
student.displayInfor();
teacher.displayInfor();
