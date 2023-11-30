// На сторінці є дві кнопки. - переадресовується на інший сайт (за раніше введеним посиланням). 
// Реалізувати перевірку на http/https. Якщо протокол не вказаний - додаємо


const http = document.querySelector('#http');
http.addEventListener('click', httpCheck);
const https = document.querySelector('#https');
https.addEventListener('click', httpsCheck);
const httpUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
const httpsUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
function httpCheck() {
  const urlArray = Array.from(httpUrl)
  if (urlArray[0] === 'h' && urlArray[1] === 't' && urlArray[2] === 't' && urlArray[3] === 'p' && urlArray[4] === ':'){
    window.open(httpUrl);
  } else {
    alert('Це не http протокол')
  }
}
function httpsCheck() {
  window.open(httpsUrl);
  const urlArray = Array.from(httpsUrl)
  if (urlArray[0] === 'h' && urlArray[1] === 't' && urlArray[2] === 't' && urlArray[3] === 'p' && urlArray[4] === 's' && urlArray[5] === ':'){
    window.open(httpsUrl);
  } else {
    alert('Це не https протокол')
  }
} 



