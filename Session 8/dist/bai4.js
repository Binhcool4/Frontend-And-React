"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
const person = { name: "Binh", age: 22 };
const job = { title: "Developer", salary: 1000 };
const merged = mergeObjects(person, job);
console.log(merged);
