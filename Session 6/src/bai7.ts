class Student {
    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    setName(newName: string): void {
        this.name = newName;
    }
}

let allStudents: Student[] = [];

class Classroom {
    students: Student[] = [];

    showStudents(): void {
        console.log("Danh sách học sinh trong lớp:");
        this.students.forEach((student, index) => {
            console.log(`${index + 1}. ID: ${student.getId()}, Name: ${student.getName()}`);
        });
    }

    addStudent(student: Student): void {
        this.students.push(student);
    }

    filterStudent(id: number): Student[] {
        return this.students.filter(student => student.getId() === id);
    }

    addStudentInClass(studentId: number): void {
        const student = allStudents.find(s => s.getId() === studentId);
        if (student) {
            this.students.push(student);
            allStudents = allStudents.filter(s => s.getId() !== studentId);
        } else {
            console.log(`Không tìm thấy học sinh có ID: ${studentId}`);
        }
    }

    removeStudent(studentId: number): void {
        const index = this.students.findIndex(s => s.getId() === studentId);
        if (index !== -1 && this.students[index] != undefined) {
            allStudents.push(this.students[index]);
            this.students.splice(index, 1);
            console.log(`Đã xóa học sinh ID ${studentId} khỏi lớp và đưa vào danh sách allStudents.`);
        } else {
            console.log(`Không tìm thấy học sinh có ID: ${studentId} trong lớp.`);
        }
    }

    editStudent(studentId: number, newName: string): void {
        const student = this.students.find(s => s.getId() === studentId);
        if (student) {
            student.setName(newName);
            console.log(`Đã cập nhật tên học sinh ID ${studentId} thành "${newName}".`);
        } else {
            console.log(`Không tìm thấy học sinh có ID: ${studentId} trong lớp.`);
        }
    }
}

allStudents.push(
    new Student(1, "Huy"),
    new Student(2, "Lan"),
    new Student(3, "Minh"),
    new Student(4, "An"),
    new Student(5, "Trang"),
    new Student(6, "Nam")
);

const classC = new Classroom();
const classD = new Classroom();

classC.addStudentInClass(1);
classC.addStudentInClass(2);
classC.addStudentInClass(3);

classD.addStudentInClass(4);
classD.addStudentInClass(5);
classD.addStudentInClass(6);

console.log("=== Lớp C ban đầu ===");
classC.showStudents();
classC.removeStudent(2);

console.log("\n=== Lớp C sau khi xóa ID 2 ===");
classC.showStudents();

classC.editStudent(3, "Trang");
console.log("\n=== Lớp C sau khi sửa tên ID 3 ===");
classC.showStudents();