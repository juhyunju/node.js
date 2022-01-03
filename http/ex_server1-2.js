const http = require('http')

http.createServer((req,res) => {
  res.writeHead(200,{ 'Content-Type' : 'text/html; charset=utf-8'})
  res.write('<h1> 한 번에 여러 서버 실행</h1>')
  res.end('<p> 한 번에 여러 서버 실행 연습</p>')
})
.listen(8080, () => {
  console.log('8080 포트에서 서버 대기중')
})

const server = http.createServer((req,res) => {
  res.writeHead(200,{ 'Content-Type' : 'text/html; charset=utf-8'})
  res.write('<h1> 이건 listening 이벤트 리스너를 사용해서 실행</h1>')
  res.end('<p> 한 번에 여러 서버 실행 연습2</p>')
})
server.listen(8081)
server.on('listening', () => {
  console.log('8081 포트에서 서버 대기중')
})
server.on('error', (error) => {
  console.error(error)
})

const server2 = http.createServer((req,res) => {
  res.writeHead(200,{ 'Content-Type' : 'text/html; charset=utf-8'})
  res.write('<h1>서버 하나 더만들어보자</h1>')
  res.write('<p> 서버 하나 더만들기 연습</p>')
})
server2.listen(8082)
server2.on('listening', () => {
  console.log('8082 포트에서 서버 대기중')
})
server2.on('error',(error) => {
  console.error(error)
})