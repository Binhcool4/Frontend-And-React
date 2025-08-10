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
        console.log(`Tên: ${this.name}, Công ty: ${this.company}, Số điện thoại: ${this.phone}`);
    }
}
const emp = new Employee("Binh", "cong ty a", "123456789");
emp.printInfo();