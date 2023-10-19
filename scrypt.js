let numOrStr = prompt('input number or string');
console.log(numOrStr);

if (numOrStr === null) {
  console.log('ви скасували');
} else {
  switch (true) {
    case numOrStr.trim() === '':
      console.log('Empty String');
      break;
    case isNaN(Number(numOrStr)):
      console.log('number is Ba_NaN');
      break;
    default:
      console.log('OK!');
  }
}
