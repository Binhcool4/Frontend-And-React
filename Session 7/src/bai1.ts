class Employee {
    public name: string;
    protected company: string;
    private phone: string;

    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    public printInfo(): void {
        console.log(`Tên: ${this.name}`);
        console.log(`Công ty: ${this.company}`);
        console.log(`Số điện thoại: ${this.phone}`);
    }
}

class Manager extends Employee {
    private teamSize: number;

    constructor(name: string, company: string, phone: string, teamSize: number) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }

    public override printInfo(): void {
        super.printInfo();
        console.log(`Số lượng thành viên: ${this.teamSize}`);
    }
}

const emp = new Employee("Nguyễn Văn A", "ABC Corp", "0123456789");
console.log("=== Thông tin nhân viên ===");
emp.printInfo();

const mgr = new Manager("Trần Thị B", "XYZ Ltd", "0987654321", 5);
console.log("\n=== Thông tin quản lý ===");
mgr.printInfo();