function add1(a: number, b: number): number {
    return a + b;
}

function subtract1(a: number, b: number): number {
    return a - b;
}

function multiply1(a: number, b: number): number {
    return a * b;
}

function divide1(a: number, b: number): number | string {
    if (b === 0) return "Không hợp lệ";
    return a / b;
}
console.log(add1(10, 5));
console.log(subtract1(20, 4));
console.log(multiply1(3, 2));
console.log(divide1(10, 0));
console.log(divide1(30, 5));