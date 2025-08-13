abstract class Person{
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    abstract displayInfor():void
}
class Student extends Person {
    id: number;
    constructor(name: string, id: number) {
        super(name);
        this.id = id;
    }
    displayInfor(): void {
        console.log(`Mã sinh viên: ${this.id} - Tên sinh viên: ${this.name}`);
    }
}
class Teacher extends Person{
    subject: string;
    constructor(name: string, subject: string) {
        super(name);
        this.subject = subject;
    }
    displayInfor(): void {
        console.log(`Tên giảng viên: ${this.name} - Môn học dạy: ${this.subject}`);
    }
}
let student = new Student("Binh", 1);
let teacher = new Teacher("An", "React.js");
student.displayInfor();
teacher.displayInfor();