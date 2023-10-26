// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,
// 4,-54,76,-4,12,-35,4,47] 

const numbers = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
const positiveNumbers =[];
const negativeNumbers =[];
const oddPositiveNumbers =[];
const evenPositiveNumbers =[];

let minNumber = 0;
let maxNumber = 0;

// Знайти суму та кількість позитивних елементів.

numbers.forEach((number) => {
  if(number > 0){
    positiveNumbers.push(number);
  }
})
console.log(`Positive Numbers length ${positiveNumbers.length}`)
console.log(`Positive Numbers summ ${positiveNumbers.reduce((accumulator, positiveNumber) => accumulator + positiveNumber, 0)}`);

// Знайти мінімальний елемент масиву та його порядковий номер.

numbers.forEach((number) => {
  if(minNumber > number){
    minNumber = number;
  }
})
console.log(`Minimum Number ${minNumber}`);
console.log(`Index of Minimum Number ${numbers.indexOf(minNumber)}`);

// Знайти максимальний елемент масиву та його порядковий номер.

numbers.forEach((number) => {
  if(maxNumber < number){
    maxNumber = number;
  }
})
console.log(`Maximum Number ${maxNumber}`);
console.log(`Index of Maximum Number ${numbers.indexOf(maxNumber)}`);

// Визначити кількість негативних елементів.

numbers.forEach((number) => {
  if(number < 0){
    negativeNumbers.push(number);
  }
})
console.log(`Negative Numbers length ${negativeNumbers.length}`);

// Знайти кількість непарних позитивних елементів.

positiveNumbers.forEach((positiveNumber) => {
  if(positiveNumber % 2 !== 0){
    oddPositiveNumbers.push(positiveNumber);
  }
})
console.log(`Odd Positive Numbers length ${oddPositiveNumbers.length}`);

// Знайти кількість парних позитивних елементів.

positiveNumbers.forEach((positiveNumber) => {
  if(positiveNumber % 2 === 0){
    evenPositiveNumbers.push(positiveNumber);
  }
})
console.log(`Even Positive Numbers length ${evenPositiveNumbers.length}`);

// Знайти суму парних позитивних елементів.

console.log(`Even Positive Numbers summ ${evenPositiveNumbers.reduce((accumulator, evenPositiveNumber) => accumulator + evenPositiveNumber, 0)}`);

// Знайти суму непарних позитивних елементів.

console.log(`Odd Positive Numbers summ ${oddPositiveNumbers.reduce((accumulator, oddPositiveNumber) => accumulator + oddPositiveNumber, 0)}`);

// Знайти добуток позитивних елементів.

console.log(`Positive Numbers product ${positiveNumbers.reduce((accumulator, positiveNumber) => accumulator * positiveNumber, 1)}`);

// Знайти найбільший серед елементів масиву, остальні обнулити.

numbers.splice(0, numbers.length, maxNumber)
console.log(`numbers ${numbers}`);
