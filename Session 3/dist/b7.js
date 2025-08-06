"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function removeChar(input) {
    let result = "";
    let seenChars = "";
    for (let char of input) {
        if (!seenChars.includes(char)) {
            seenChars += char;
            result += char;
        }
    }
    return result;
}
console.log(removeChar("hello world"));
//# sourceMappingURL=b7.js.map