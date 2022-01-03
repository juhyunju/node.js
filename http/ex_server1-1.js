const http = require('http')

const server = http.createServer((req,res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'})
  res.write('<h1>콜백 함수 대신 listening 이벤트 리스너를 사용</h1>')
  res.end('<p>listening 이벤트 리스너 연습</p>')
})
server.listen(8081)

server.on('listening', () => {
  console.log('8081번 포트에서 서버 대기중')
})
server.on('error',(error) => {
  console.error(error)
})