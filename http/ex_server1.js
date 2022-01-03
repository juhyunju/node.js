const http = require('http');

http.createServer((req,res) => {
  res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
  res.write('<h1> hi </h1>');
  res.write('<p> 하이하이 </p>')
  res.end('<p> hihihihihihihi </p>');
})

.listen(8080,() => {
  console.log('8080 포트에서 대기 중')
})