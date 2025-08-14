function findFirstEven<T>(arr: T[]): T | undefined {
    return arr.find(item => typeof item === "number" && item % 2 === 0);
}
console.log(findFirstEven([1, 3, 5, 8, 11,2]));