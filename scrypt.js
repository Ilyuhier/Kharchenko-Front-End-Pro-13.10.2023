//Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (конкатенація);

let first_line = prompt('write first line',);
let second_line = prompt('write second line',);
let third_line = prompt('write third line',);
alert(first_line + ' ' + second_line + ' ' + third_line);

//Розбити за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл.

//перший спосіб

const numberToString = 52135;
const string = String(numberToString);  //перетворюємо тип number на string
const digits = string.split('');  //розділяємо рядок на окремі символи
const result = digits.join(' ');  //об'єднуємо символи, розділяючи їх пробілами

alert(result); 

//другий спосіб

const number = 65453;
let n1 = number%10;   //отримуємо остачею перше число
let n2 = ((number-n1)%100)/10;    //відіймаємо остачу, отримуємо нову, прибираємо нулі
let n3 = ((number-n1-n2*10)%1000)/100;     //повторюємо каскадом і надалі
let n4 = ((number-n1-n2*10-n3*100)%10000)/1000;
let n5 = ((number-n1-n2*10-n3*100-n4*1000)%100000)/10000;

alert (`${n5} ${n4} ${n3} ${n2} ${n1}`);