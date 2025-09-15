// Hàm myForEach hoạt động như forEach
function myForEach<T>(arr: T[], callback: (item: T, index: number, array: T[]) => void): void {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

const numbers: number[] = [1, 2, 3, 4, 5, 6];
myForEach(numbers, (item, index, array) => {
    console.log(`Vị trí: ${index} | Phần tử: ${item} | Mảng:`, array);
});
