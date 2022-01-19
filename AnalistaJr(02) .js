const FIBONACCI = [0, 1]

function isNumberinFibbonacci(number) {
  while (FIBONACCI[FIBONACCI.length - 1] < number) {
    const nextNumber = FIBONACCI[FIBONACCI.length - 1] + FIBONACCI[FIBONACCI.length - 2]
    FIBONACCI.push(nextNumber)
  }
  return FIBONACCI.includes(number)
}

console.log(isNumberinFibbonacci(34)) // true
console.log(isNumberinFibbonacci(35)) // false
