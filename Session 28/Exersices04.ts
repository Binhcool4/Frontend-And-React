function displayNumbers(
    callback: (num: number) => void,
    delay: number
): void {
    let current = 1;
    function printNext() {
        callback(current);
        current++;
        setTimeout(printNext, delay);
    }
    printNext();
}

displayNumbers((num) => {
    console.log(`Số thứ tự: ${num}`);
}, 1000);