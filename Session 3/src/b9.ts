function parseNum(val: string | number): number | null {
  let num = Number(val);
  return isNaN(num) ? null : num;
}

function plus(a: string | number, b: string | number): number | string {
  let A = parseNum(a);
  let B = parseNum(b);
  if (A === null || B === null){
    return "khong hop le";
  }
  return A + B;
}

function sub(a: string | number, b: string | number): number | string {
  let A = parseNum(a);
  let B = parseNum(b);
  if (A === null || B === null){
    return "khong hop le";
  }
  return A - B;
}

function mul(a: string | number, b: string | number): number | string {
  let A = parseNum(a);
  let B = parseNum(b);
  if (A === null || B === null){
    return "khong hop le";
  }
  return A * B;
}

function div(a: string | number, b: string | number): number | string {
  let A = parseNum(a);
  let B = parseNum(b);
  if (A === null || B === null){
    return "khong hop le";
  }
  if (B === 0) return "khong chia cho 0";
  return A / B;
}

function power(a: string | number, b: string | number): number | string {
  let A = parseNum(a);
  let B = parseNum(b);
  if (A === null || B === null){
    return "khong hop le";
  }
  return Math.pow(A, B);
}

function sprt(a: string | number, b: string | number): number | string {
  let A = parseNum(a);
  let B = parseNum(b);
  if (A === null || B === null || B === 0){
    return "khong hop le";
  }
  return Math.pow(A, 1 / B);
}

function factorial(a: string | number): number | string {
  let A = parseNum(a);
  if (A === null || A < 0 || !Number.isInteger(A)){
    return "khong hop le";
  }
  let result = 1;
  for (let i = 2; i <= A; i++) {
    result *= i;
  }
  return result;
}

function handle(check: string): void {
  const num1 = (document.getElementById("num1") as HTMLInputElement).value;
  const num2 = (document.getElementById("num2") as HTMLInputElement).value;
  const result = document.getElementById("result") as HTMLElement;

  let a = parseNum(num1);
  let b = parseNum(num2);
  let c: number | string = "ket qua";

  if (check === "!") {
    if (a === null) {
      result.textContent = "Khong hop le";
      return;
    }
    c = factorial(a);
  } else {
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
(window as any).handle = handle;