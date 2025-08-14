"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findFirstEven(arr) {
    return arr.find(item => typeof item === "number" && item % 2 === 0);
}
console.log(findFirstEven([1, 3, 5, 8, 11, 2]));
