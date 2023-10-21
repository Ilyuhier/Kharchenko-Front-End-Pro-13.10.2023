// Вивести на сторінку в один рядок через кому числа від 10 до 20

const Numbers = [];
for (let i = 10; i < 21; i++) {
  Numbers.push(i)
}
console.log(Numbers);

// Вивести квадрати чисел від 10 до 20

const Numbers = [];

for (let i = 10; i < 21; i++) {
  Numbers.push(i*i);
}
console.log(Numbers);

// Вивести таблицю множення на 7

let i = 0;
while (i<11) {
	console.log(`7*${i}=${i*7}`);
  i++
}

// Знайти суму всіх цілих чисел від 1 до 15.

let i = 0;
let summ = 0;
do{
	i++;
	summ= summ+i;
}while (i<15);
console.log(summ);

// Знайти добуток усіх цілих чисел від 15 до 35

let product = 1;
for (let i = 15; i < 36; i++) {
  product=product*i;
}
console.log(product);

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

let summ = 0;
for (let i = 1; i < 500; i++) {
  summ=summ+i;
}
const ArithmeticMean = summ/500;
console.log(ArithmeticMean);

// Вивести суму лише парних чисел в діапазоні від 30 до 80

let summ = 0;
let i= 30
do {
	summ=summ+i;
	i=i+2;
} while (i <= 80);
console.log(summ);

// Вивести всі числа в діапазоні від 100 до 200 кратні 3

let summ = 0;
let i= 100;
i = i+2;
while (i < 200){
	summ=summ+i;
	i=i+3;
}
console.log(summ);

// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

let number = Number(prompt());
for (let i = 1; i<=number; i++ ){
  let Remainder = number % i;
  if ( Remainder === 0 ) {
     console.log(i)
  }
}

// Визначити кількість його парних дільників

let number = Number(prompt());
for (let i = 1; i<=number; i++ ){
  let Remainder = number % i;
  if ( Remainder === 0 ) {
  	let RemainderDivisor = i % 2;
  	if ( RemainderDivisor === 0) {
         console.log(i);
    }
  }
}

// Знайти суму його парних дільників.

let number = Number(prompt());
let summ = 0;
for (let i = 1; i<=number; i++ ){
  let Remainder = number % i;
  if ( Remainder === 0 ) {
  	let RemainderDivisor = i % 2;
  	if ( RemainderDivisor === 0) {
         summ = summ +i;
    }
  }
}
console.log(summ);

// Надрукувати повну таблицю множення від 1 до 10.

let FirstMultiplier = 1;
do {
	let SecondMultiplier = 1;
	while (SecondMultiplier <=10){
  	let product = FirstMultiplier*SecondMultiplier;
    console.log(`${FirstMultiplier}*${SecondMultiplier}=${product}`);
    SecondMultiplier++;
  }
  FirstMultiplier++;
} while (FirstMultiplier <= 10);