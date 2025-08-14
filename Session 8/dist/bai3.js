"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reverseArray(arr) {
    return arr.slice().reverse();
}
let numbers = [1, 2, 3, 4];
let reversedNumbers = reverseArray(numbers);
console.log(reversedNumbers);
let strings = ["apple", "banana", "cherry"];
let reversedStrings = reverseArray(strings);
console.log(reversedStrings);
