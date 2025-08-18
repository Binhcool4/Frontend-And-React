"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
const objA = { name: "Alice", age: 25 };
const objB = { job: "Developer", country: "VN" };
const merged = mergeObjects(objA, objB);
console.log(merged);
