// Використовуючи API https://jsonplaceholder.typicode.com/ зробити пошук поста за ід.
// Ід має бути введений в інпут (валідація: ід від 1 до 100) Якщо знайдено пост, 
// то вивести на сторінку блок з постом і зробити кнопку для отримання комкоментарів до посту.
// Зробити завдання використовуючи проміси, перехопити помилки.

const button = document.querySelector('button')
button.addEventListener('click',fetchData)

async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const formId = document.querySelector('input')
    const id = Number(formId.value);
    const data = await response.json();
    console.log(data);
    const div = document.querySelector('div')
    div.children[0].innerText=data[id].title
    div.children[1].innerText=data[id].body
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}