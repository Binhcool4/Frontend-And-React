class Vehicle {
    name: string;
    year: number;
    company: string;
    constructor( name: string, year: number, company: string){
        this.name = name;
        this.year = year;
        this.company = company;
    }

    display(): void{
        console.log(`Ten phuong tien: ${this.name} | Nam san xuat: ${this.year} | Hang: ${this.company}`);
    }
}

const car1 = new Vehicle("Toyota Supra", 1976, "Toyota");
const car2 = new Vehicle("Ford Everest", 2016, "Ford");
car1.display();
car2.display();