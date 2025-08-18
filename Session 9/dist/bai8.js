"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createObject(keys, values) {
    const result = {};
    keys.forEach((key, index) => {
        if (index < values.length) {
            result[key] = values[index];
        }
    });
    return result;
}
const keys = ["id", "name", "email"];
const values = [1, "Alice", "alice@example.com"];
const obj = createObject(keys, values);
console.log(obj);
