function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) throw new Error("Không thể chia cho 0");
  return a / b;
}

function power(base: number, exponent: number): number {
  return Math.pow(base, exponent);
}

function sqrt(base: number, root: number): number {
  if (root === 0) throw new Error("Căn bậc 0 không xác định");
  return Math.pow(base, 1 / root);
}

function factorial(n: number): number {
  if (n < 0) throw new Error("Không tính giai thừa số âm");
  if (!Number.isInteger(n)) throw new Error("Giai thừa chỉ áp dụng cho số nguyên");
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}

function handleOperation(op: string): void {
  const input1 = (document.getElementById("input1") as HTMLInputElement).value.trim();
  const input2 = (document.getElementById("input2") as HTMLInputElement).value.trim();
  const resultEl = document.getElementById("result") as HTMLElement;

  let a = Number(input1);
  let b = Number(input2);

  if (op !== "factorial" && (isNaN(a) || isNaN(b))) {
    resultEl.textContent = "Vui lòng nhập hai số hợp lệ.";
    return;
  }

  if (op === "factorial" && isNaN(a)) {
    resultEl.textContent = "Vui lòng nhập số hợp lệ cho giai thừa.";
    return;
  }

  try {
    let result: number;

    switch (op) {
      case "add":
        result = add(a, b);
        break;
      case "subtract":
        result = subtract(a, b);
        break;
      case "multiply":
        result = multiply(a, b);
        break;
      case "divide":
        result = divide(a, b);
        break;
      case "power":
        result = power(a, b);
        break;
      case "sqrt":
        result = sqrt(a, b);
        break;
      case "factorial":
        result = factorial(a);
        break;
      default:
        resultEl.textContent = "Phép toán không hợp lệ.";
        return;
    }

    resultEl.textContent = `Kết quả: ${result}`;
  } catch (err) {
    resultEl.textContent = (err as Error).message;
  }
}