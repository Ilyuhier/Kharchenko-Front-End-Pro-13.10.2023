// На сторінці є дві кнопки. - переадресовується на інший сайт (за раніше введеним посиланням). 
// Реалізувати перевірку на http/https. Якщо протокол не вказаний - додаємо


const http = document.querySelector('#http');
http.addEventListener('click', httpCheck);
const https = document.querySelector('#https');
https.addEventListener('click', httpsCheck);
let httpUrl = 'youtube.com/watch?v=dQw4w9WgXcQ';
let httpsUrl = 'youtube.com/watch?v=dQw4w9WgXcQ';
function httpCheck() {
  const urlArray = Array.from(httpUrl)
  if (urlArray[0] === 'h' && urlArray[1] === 't' && urlArray[2] === 't' && urlArray[3] === 'p' && urlArray[4] === ':'){
    window.open(httpUrl);
  } else {
    alert('додано http протокол')
    const httpProtocol = ['h','t','t','p',':','/','/'];
    urlArray.forEach(element => {
      httpProtocol.push(element);
    });
    httpUrl = httpProtocol.join('');
    window.open(httpUrl);
  }
}
function httpsCheck() {
  window.open(httpsUrl);
  const urlArray = Array.from(httpsUrl)
  if (urlArray[0] === 'h' && urlArray[1] === 't' && urlArray[2] === 't' && urlArray[3] === 'p' && urlArray[4] === 's' && urlArray[5] === ':'){
    window.open(httpsUrl);
  } else {
    alert('Додано https протокол')
    const httpsProtocol = ['h','t','t','p','s',':','/','/'];
    urlArray.forEach(element => {
      httpsProtocol.push(element);
    });
    httpsUrl = httpsProtocol.join('')
    window.open(httpsUrl);
  }
} 



