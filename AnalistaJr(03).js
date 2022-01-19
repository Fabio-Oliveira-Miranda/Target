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