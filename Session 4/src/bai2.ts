let score: number[] = [8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3];
let sum = 0;
for (let s of score) {
    sum += s;
}
let average = sum / score.length;
console.log(`Diem trung binh: ${average.toFixed(2)}`);
