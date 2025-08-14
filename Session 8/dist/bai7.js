"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function flatten(arr) {
    return arr.reduce((acc, curr) => acc.concat(curr), []);
}
console.log(flatten([[1, 2], [3, 4], [5, 6]]));
console.log(flatten([['apple', 'banana'], ['cherry'], ['date', 'elderberry']]));
