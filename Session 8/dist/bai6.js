"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findElement(arr, value) {
    return arr.find(item => item === value);
}
console.log(findElement([1, 2, 3, 4], 3));
