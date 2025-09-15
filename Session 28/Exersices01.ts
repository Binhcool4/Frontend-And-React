function calculate(a: number, b: number, callback: (result: number) => void): void {
  const sum = a + b;
  callback(sum);
}
calculate(3, 4, (result) => {
  console.log("Tổng là:", result);
});