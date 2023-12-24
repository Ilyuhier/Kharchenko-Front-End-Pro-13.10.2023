// Створити масив, довжину та елементи якого задає користувач.

// Відсортувати масив за зростанням.

// Видалити елементи з масиву з 2 по 4 (включно!).

// У міру змін виводити вміст масиву на сторінку.

const numbers = [];

for (let i=0; i>=0; i++){
  let element = prompt('Бажаєте додати елемент до масиву?','Елемент масиву');
  if (element === null){
    alert('Ви закінчили наповнювати масив')
    break;
  } else if (isNaN(element)){
    alert('Треба вводити числа');
  } else {
    numbers.push(Number(element));
    console.log(numbers);
  }
}
const newNumbers =[];
const numberLength = numbers.length;
for (let i = 0; i < numberLength; i++){

  let biggestNumber = numbers[0];
  numbers.forEach((number) => {
    if(biggestNumber < number){
      biggestNumber = number;
    }
  })

  newNumbers.unshift(biggestNumber )
  console.log(`newNumbers = ${newNumbers}`);
  let numberIndex = numbers.indexOf(biggestNumber);
  numbers.splice(numberIndex,1);
  console.log(`numbers = ${numbers}`);
}
newNumbers.splice(1, 3);
console.log(`newNumbers = ${newNumbers}`);
