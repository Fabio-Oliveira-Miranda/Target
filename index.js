// ---------------------- Exercise 1 ------------------------------//

const INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
  K += 1
  SOMA += K
}

console.log('Soma = ' + SOMA) // Soma = 91

// ---------------------- Exercise 2 ------------------------------//


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

// ---------------------- Exercise 3 ------------------------------//

const data = require('./dados.json')
// console.log(data)

const lowerBilling = data.reduce((lower, billing) => {
  if (billing.valor == 0) return lower
  if (billing.valor < lower) lower = billing.valor
  return lower
}, Infinity)
console.log(lowerBilling) // 373.7838

const higherBilling = data.reduce((lower, billing) => {
  if (billing.valor > lower) lower = billing.valor
  return lower
}, 0)
console.log(higherBilling) // 48924.2448

// ---------------------- Exercise 4 ------------------------------//

const billings = [
  {
    name: 'SP',
    value: 67836.43
  },
  {
    name: 'RJ',
    value: 36678.66
  },
  {
    name: 'MG',
    value: 29229.88
  },
  {
    name: 'ES',
    value: 27165.48
  },
  {
    name: 'Outros',
    value: 19849.53
  },

]

const total = billings.reduce((acc, state) => acc + state.value, 0)
console.log(total) // 180759.98

function percentualParticipation(stateName) {
  const stateBilling = billings.find(state => state.name == stateName)
  return (stateBilling.value * 100 / total).toFixed(2)
}
console.log(percentualParticipation('MG')) // 16.17

// ---------------------- Exercise 5 ------------------------------//

const string = 'inverter'


function reverse(string) {
  const reverseArray = [];
  [...string].forEach(char => reverseArray.unshift(char))
  return reverseArray.join().replaceAll(',', '')
}
console.log(reverse(string)) // retrevni