// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. span>

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const keyLength = Number(prompt('З кількох символів має складатись ключ?'));
const key = generateKey(keyLength, characters);
console.log(key); // eg599gb60q926j8i

function generateKey(length, characters){
  const arrayOfCharacters = characters.split('');
  const arrayKey = [];
  for( let i=1; i<=length; i++){
    const keyItem = Math.floor(Math.random()* (characters.length - 0 ))+0;
    arrayKey.push(characters[keyItem]);
  }
  return arrayKey.join('');
}