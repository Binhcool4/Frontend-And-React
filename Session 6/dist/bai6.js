"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student1 {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
let allStudents1 = [];
class Classroom1 {
    students = [];
    showStudents() {
        console.log("Danh sách học sinh trong lớp:");
        this.students.forEach((student, index) => {
            console.log(`${index + 1}. ID: ${student.getId()}, Name: ${student.getName()}`);
        });
    }
    addStudent(student) {
        this.students.push(student);
    }
    filterStudent(id) {
        return this.students.filter(student => student.getId() === id);
    }
    addStudentInClass(studentId) {
        const index = allStudents1.findIndex(student => student.getId() === studentId);
        if (index !== -1 && allStudents1[index] !== undefined) {
            this.students.push(allStudents1[index]);
            allStudents1.splice(index, 1);
        }
        else {
            console.log(`Không tìm thấy học sinh có ID: ${studentId}`);
        }
    }
}
allStudents1.push(new Student1(1, "Huy"), new Student1(2, "Lan"), new Student1(3, "Minh"), new Student1(4, "An"), new Student1(5, "Trang"), new Student1(6, "Nam"));
const classA = new Classroom1();
const classB = new Classroom1();
classA.addStudentInClass(1);
classA.addStudentInClass(2);
classA.addStudentInClass(3);
classB.addStudentInClass(4);
classB.addStudentInClass(5);
classB.addStudentInClass(6);
console.log("=== Lớp A ===");
classA.showStudents();
console.log("=== Lớp B ===");
classB.showStudents();
