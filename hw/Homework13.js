// 1. Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

const array = [1, 5, 6, 'bukwi', 46, 46, true, 646, 525, 'hello world!', 51, 70, null, 58, 30, undefined];
const averageNumber = numbersAverage(array);
console.log(`Середнє арифметичне числових елементів = ${averageNumber}`)

function numbersAverage(array){
  const arrayNumbers = array.filter((element) => typeof element === 'number')
  const average = arrayNumbers.reduce((acc, item) => acc + item, 0) / arrayNumbers.length;
  return average;
}

// 2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
// Вивести результат математичної дії, вказаної в змінній znak.
// Обидва числа і знак виходять від користувача.

const math = prompt('введіть вираз, по прикладу x + y', '2 + 2')
const mathArray = math.split(' ');
const firstNumber = Number(mathArray[0])
const operator = mathArray[1]
const secondNumber = Number(mathArray[2])
const result = doMath(firstNumber, operator, secondNumber)
console.log(result)

function doMath(x, znak, y){
  let z = 0;
  if (znak === '+'){
     z = x + y;
  } else if (znak === '-'){
     z = x - y;
  } else if (znak === '*'){
     z = x * y;
  }  else if (znak === '/'){
     z = x / y;
  } else if (znak === '%'){
     z = x % y;
  } else if (znak === '^'){
     z = x ** y;
  } else{
     z =`wrong arguments`;
  }
  return z;
}

// 3. Написати функцію заповнення даними користувача двомірного масиву. 
// Довжину основного масиву і внутрішніх масивів задає користувач. 
// Значення всіх елементів всіх масивів задає користувач.

const mainArray = [];
arrayFilling(mainArray)
console.log(mainArray)

function arrayFilling(array){
  const arrayLength = Number(prompt('Оберіть довжину основного масиву', 5));
  for (let i = 0; i < arrayLength; i++) {
    const subArrayLength = Number(prompt(`Оберіть довжину внутрішнього масиву ${i+1}`, 3));
    const subArray = [];
    for(let  i =0; i< subArrayLength; i++){
      subArray.push(prompt(`Введіть елемент ${i+1} підмасиву`));
    }
    array.push(subArray);
  }
}

// 4. Створити функцію, яка прибирає з рядка всі символи, 
// які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' 
// поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

const inputString = prompt('Введіть вхідний рядок', 'Hello world');
const symbolsToDelete = prompt('Введіть символи для видалення', 'lo');
deleteSymbols(inputString, symbolsToDelete)

function deleteSymbols(string, symbols){
  const symbolsArray = symbols.split('')
  let newString = string;
  for (let i=0; i<symbolsArray.length;i++){
    symbol = symbolsArray[i]
    const stringArray = newString.split(symbol)
    newString = stringArray.join('')
  }
  console.log(newString)
}