class Student {
    id: number;
    age: number;
    email: string;

    constructor(id: number, age: number, email: string) {
        this.id = id;
        this.age = age;
        this.email = email;
    }

    printInfo(): void {
        console.log(`ID: ${this.id}, Tuổi: ${this.age}, Email: ${this.email}`);
    }
}
const studentList: Student[] = [];

studentList.push(new Student(1, 20, "student1@example.com"));
studentList.push(new Student(2, 22, "student2@example.com"));
studentList.push(new Student(3, 19, "student3@example.com"));

for (const student of studentList) {
    student.printInfo();
}