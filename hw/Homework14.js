// Написати функцію, яка приймає 1 параметр. з тим, 
// що передали перший раз і т. д. Все це із замиканнями, наприклад:

// sum(3) = 3 

// sum(5) = 8

// sum(20) = 28


function createSum() {
  let sumOfNumbers = 0;
  
  return function (number) {
     sumOfNumbers += number;
     return console.log(`sum(${number}) = ${sumOfNumbers}`);
  };
}

const sum = createSum();

sum(5)
sum(6)
sum(7)