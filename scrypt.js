let xIn = prompt('Введіть 1 число',); //вводимо перше число
let yIn = prompt('Введіть 2 число',); //вводимо друге число
let x = Number(xIn);  //перетворюємо їх
let y = Number(yIn);
let plus = x+y;  //робимо всі обрахунки
let minus = x-y;
let multiply = x*y;
let divide = x/y;

alert (`Користувач ввів ${x} і ${y}:

${x}+${y}=${plus}
${x}-${y}=${minus}
${x}*${y}=${multiply}
${x}/${y}=${divide}`); //виводимо результат