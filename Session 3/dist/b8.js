"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add1(a, b) {
    return a + b;
}
function subtract1(a, b) {
    return a - b;
}
function multiply1(a, b) {
    return a * b;
}
function divide1(a, b) {
    if (b === 0)
        return "Không hợp lệ";
    return a / b;
}
console.log(add1(10, 5));
console.log(subtract1(20, 4));
console.log(multiply1(3, 2));
console.log(divide1(10, 0));
console.log(divide1(30, 5));
//# sourceMappingURL=b8.js.map