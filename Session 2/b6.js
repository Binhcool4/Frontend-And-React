function checkEndString(str, endStr) {
    str = str.toLowerCase();
    endStr = endStr.toLowerCase();

    if (typeof str !== 'string' || typeof endStr !== 'string') {
        return false;
    }
    return str.endsWith(endStr);
}

console.log(checkEndString('Hello World!', 'Hello'));
console.log(checkEndString('Hi There!', 'There!'));