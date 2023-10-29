// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

const array = [1, 2, 3, 4, 5, 6, 7];
const element = Number(prompt('Який елемент ви хочете видалити?'))
removeElement(array, element );
console.log(array);

function removeElement(array, item){
  array.splice(array.indexOf(item), 1 );
}