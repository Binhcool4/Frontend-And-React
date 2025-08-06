"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parseNum(val) {
    let num = Number(val);
    return isNaN(num) ? null : num;
}
function plus(a, b) {
    let A = parseNum(a);
    let B = parseNum(b);
    if (A === null || B === null) {
        return "khong hop le";
    }
    return A + B;
}
function sub(a, b) {
    let A = parseNum(a);
    let B = parseNum(b);
    if (A === null || B === null) {
        return "khong hop le";
    }
    return A - B;
}
function mul(a, b) {
    let A = parseNum(a);
    let B = parseNum(b);
    if (A === null || B === null) {
        return "khong hop le";
    }
    return A * B;
}
function div(a, b) {
    let A = parseNum(a);
    let B = parseNum(b);
    if (A === null || B === null) {
        return "khong hop le";
    }
    if (B === 0)
        return "khong chia cho 0";
    return A / B;
}
function power(a, b) {
    let A = parseNum(a);
    let B = parseNum(b);
    if (A === null || B === null) {
        return "khong hop le";
    }
    return Math.pow(A, B);
}
function sprt(a, b) {
    let A = parseNum(a);
    let B = parseNum(b);
    if (A === null || B === null || B === 0) {
        return "khong hop le";
    }
    return Math.pow(A, 1 / B);
}
function factorial(a) {
    let A = parseNum(a);
    if (A === null || A < 0 || !Number.isInteger(A)) {
        return "khong hop le";
    }
    let result = 1;
    for (let i = 2; i <= A; i++) {
        result *= i;
    }
    return result;
}
function handle(check) {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const result = document.getElementById("result");
    let a = parseNum(num1);
    let b = parseNum(num2);
    let c = "ket qua";
    if (check === "!") {
        if (a === null) {
            result.textContent = "Khong hop le";
            return;
        }
        c = factorial(a);
    }
    else {
        if (a === null || b === null) {
            result.textContent = "Khong hop le";
            return;
        }
        switch (check) {
            case "+":
                c = plus(a, b);
                break;
            case "-":
                c = sub(a, b);
                break;
            case "*":
                c = mul(a, b);
                break;
            case "/":
                c = div(a, b);
                break;
            case "^":
                c = power(a, b);
                break;
            case "√":
                c = sprt(a, b);
                break;
            default:
                c = "Phep tinh khong ho tro";
        }
    }
    result.textContent = "Kết quả: " + c;
}
console.log('handle function is loaded');
window.handle = handle;
//# sourceMappingURL=b9.js.map