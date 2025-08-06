function removeChar(input: string) {
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