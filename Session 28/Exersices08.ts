const numbers: number[] = [1, 2, 2, 3, 4, 5, 6];
function myFilter<T>(arr: T[], value: T, callback: (result: T[], array: T[]) => void): void {
    const found: T[] = arr.filter(item => item === value);
    callback(found, arr);
}

function callback(result: number[]) {
    console.log(result);
}
myFilter(numbers, 2, callback);
myFilter(numbers, 10, callback);