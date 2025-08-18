"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function wrapInArray(value) {
    return [value];
}
console.log(wrapInArray(5));
console.log(wrapInArray("hello"));
console.log(wrapInArray({ a: 1 }));
