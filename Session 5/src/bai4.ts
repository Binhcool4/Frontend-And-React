class Vehicle {
    public name: string;
    protected year: number;
    private company: string;
    readonly id: number;

    constructor(id: number, name: string, year: number, company: string) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }

    public printInfo(): void {
        console.log(`ID: ${this.id}, Tên: ${this.name}, Năm sản xuất: ${this.year}, Hãng xe: ${this.company}`);
    }
}
const v1 = new Vehicle(1, "Supra", 2021, "Toyata");
v1.printInfo();
console.log(v1.name);