const string = 'inverter'


function reverse(string) {
  const reverseArray = [];
  [...string].forEach(char => reverseArray.unshift(char))
  return reverseArray.join().replaceAll(',', '')
}
console.log(reverse(string)) // retrevni