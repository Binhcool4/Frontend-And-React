function processInput(input: string | number | boolean): void {
  if (typeof input === "string") {
    if (/^\d+$/.test(input)) {
      const num = Number(input);
      console.log(num ** 2);
    } else {
      const letterMatches = input.match(/[a-zA-Z]/g);
      const letterCount = letterMatches ? letterMatches.length : 0;
      console.log(`${letterCount} ký tự chữ cái`);
    }
  }
  else if (typeof input === "number") {
    if (input < 2 || !Number.isInteger(input)) {
      console.log("Không phải số nguyên tố");
      return;
    }
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(input); i++) {
      if (input % i === 0) {
        isPrime = false;
        break;
      }
    }

    console.log(isPrime ? "Là số nguyên tố" : "Không phải số nguyên tố");
  }
  else if (typeof input === "boolean") {
    if (input) {
      console.log("Giá trị là true - tiến hành xử lý");
    } else {
      console.log("Giá trị là false - dừng xử lý");
    }
  }
}
processInput("123");    
processInput("abc123!");  
processInput(7);         
processInput(10);       
processInput(true);     
processInput(false);      