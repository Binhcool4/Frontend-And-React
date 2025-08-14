"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function partialUpdate(obj, updates) {
    return { ...obj, ...updates };
}
console.log(partialUpdate({ name: 'Alice', age: 30, job: 'Developer' }, { age: 31 }));
console.log(partialUpdate({ name: 'Alice', age: 30, job: 'Developer' }, { name: 'Bob', job: 'Designer' }));
