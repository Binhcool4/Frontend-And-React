function processArray(
    arr: number[],
    callback: (item: number, index: number) => void
): void {
    arr.forEach((item, index) => {
        setTimeout(() => {
            callback(item, index);
        }, 1000 * index);
    });
}

processArray([1, 2, 3, 4, 5], (item) => {
    console.log(`Phần tử thứ: ${item}`);
});