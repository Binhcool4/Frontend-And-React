class Rectangle {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    public getWidth(): number {
        return this.width;
    }

    public setWidth(width: number): void {
        this.width = width;
    }

    public getHeight(): number {
        return this.height;
    }

    public setHeight(height: number): void {
        this.height = height;
    }

    public getArea(): number {
        return this.width * this.height;
    }

    public getPerimeter(): number {
        return 2 * (this.width + this.height);
    }

    public display(): void {
        console.log(`Chiều rộng: ${this.width} | Chiều dài: ${this.height} | Diện tích: ${this.getArea()} | Chu vi: ${this.getPerimeter()}`);
    }
}

const rec = new Rectangle(10, 30);
rec.display();

rec.setWidth(20);
rec.setHeight(40);

console.log("\nSau khi cập nhật:");
rec.display();
