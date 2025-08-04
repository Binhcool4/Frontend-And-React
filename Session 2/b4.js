function checkElement (arr, element) {
    let check = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
            check = true;
        }
    }
    if (check === false) {
        return false;
    }
}

console.log(checkElement([1, 2, 3, 4, 5], 3));
console.log(checkElement([1, 2, 3, 4, 5], 6));