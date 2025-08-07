interface Student {
    name: string,
    age: number,
    email: string
}

let student: Student = {
    name: "Quoc Binh",
    age: 19,
    email: "binh@gmail.com"
};

console.log(`Tên tôi là ${student.name}, tôi ${student.age} tuổi và email của tôi là ${student.email}.`);