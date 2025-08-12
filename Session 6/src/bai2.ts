abstract class Job {
    type: string;

    constructor(type: string) {
        this.type = type;
    }

    printType(): void {
        console.log(`Loại công việc: ${this.type}`);
    }

    abstract calculateSalary(): number;
}

class ParttimeJob extends Job {
    workingHour: number;

    constructor(workingHour: number) {
        super("Part-time");
        this.workingHour = workingHour;
    }

    calculateSalary(): number {
        return 30000 * this.workingHour;
    }
}

// Lớp FulltimeJob kế thừa Job
class FulltimeJob extends Job {
    constructor() {
        super("Full-time");
    }

    calculateSalary(): number {
        return 10000000;
    }
}

const partTime = new ParttimeJob(80);
const fullTime = new FulltimeJob();

partTime.printType();
console.log(`Lương: ${partTime.calculateSalary().toLocaleString()} VND`);

fullTime.printType();
console.log(`Lương: ${fullTime.calculateSalary().toLocaleString()} VND`);
