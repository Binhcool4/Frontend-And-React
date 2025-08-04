function sum(arr) {
    let total = 0;
    
    for (let num of arr) {
        if (num % 2 === 0) {
            total += num;
        }
    }
    
    return total;
}

let arr = [1, 2, 3, 4, 5, 6];
console.log("Mảng:", arr);
console.log("Tổng các số chẵn:", sum(arr));