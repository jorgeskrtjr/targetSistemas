function fibonacci(num) {
    let a = 0, b = 1, c;
    if (num === 0) return true;
    while (b <= num) {
      if (b === num) return true; 
      c = a + b;
      a = b;
      b = c;
    }
    return false; 
  }
  
  if (fibonacci(num)) {
    console.log(`${num} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`${num} não pertence à sequência de Fibonacci.`);
  }