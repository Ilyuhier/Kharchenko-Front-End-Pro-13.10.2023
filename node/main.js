const http = require('node:http');

const hostname = '127.0.0.1';
const port = 4047;

const fs = require('fs')

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  const url = req.url;
  
  if(url ==='/hello'){
    res.end('Hello, World!\n');
  }
  else if(url ==='/bye'){
    res.end('Bye, World!\n');
  }
  else if(url ==='/show'){
    const data = fs.readFileSync('main.txt','utf8')
    res.write(data)
    res.end()
  } 
    else {
    res.end('boring Url\n try hello, bye or show')
  }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});