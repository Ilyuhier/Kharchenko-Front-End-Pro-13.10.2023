// Створити програму для відображення результатів голосування. З наступними умовами:

// Як варіанти відповіді - смайлики. За замовчуванням, 5шт.
// Виведення даних - смайлики в один рядок, під ними - кількість тих, хто проголосував за кожен смайл.
// При натисканні на смайл - під ним змінюється значення лічильника.
// Реалізувати таким чином, щоб додавання нових варіантів відповіді не вело до додавання нових функцій.
const buttons = document.querySelector('tr');
const buttonsArray = Array.from(buttons.children)
const counters = document.querySelector('.counters');
const countersArray = Array.from(counters.children)
buttons.addEventListener('click', count);
function count(event){
  switch(event.target.outerText){
    case buttonsArray[0].outerText :
      countersArray[0].textContent ++ ;
      break;
    case buttonsArray[1].outerText :
      countersArray[1].textContent ++ ;
      break;
    case buttonsArray[2].outerText :
      countersArray[2].textContent ++ ;
      break
    case buttonsArray[3].outerText :
      countersArray[3].textContent ++ ;
      break;
    case buttonsArray[4].outerText :
      countersArray[4].textContent ++ ;
      break;
  }
}