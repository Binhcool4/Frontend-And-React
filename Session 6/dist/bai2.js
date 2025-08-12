"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Job {
    type;
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log(`Loại công việc: ${this.type}`);
    }
}
class ParttimeJob extends Job {
    workingHour;
    constructor(workingHour) {
        super("Part-time");
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return 30000 * this.workingHour;
    }
}
// Lớp FulltimeJob kế thừa Job
class FulltimeJob extends Job {
    constructor() {
        super("Full-time");
    }
    calculateSalary() {
        return 10000000;
    }
}
const partTime = new ParttimeJob(80);
const fullTime = new FulltimeJob();
partTime.printType();
console.log(`Lương: ${partTime.calculateSalary().toLocaleString()} VND`);
fullTime.printType();
console.log(`Lương: ${fullTime.calculateSalary().toLocaleString()} VND`);
