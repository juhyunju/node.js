const http = require('http')

const server = http.createServer((request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8' }) // 한글 타입
  response.write('<h1>헬로우 노드!</h1>') // 글 안에 html 태그 가능
  response.end('<p>헬로우 메타캠프11!</p>') //요청하고 end로 응답 받고 
})

  .listen(3000, () => {
    console.log('포트 3000번으로 실행하고 있음!')
  })

  // 서버 여러대 가능

  const server1 = http.createServer((request, response) => {
    response.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8' }) // 한글 타입
    response.write('<h1>서버 여러대 가능스!</h1>') // 글 안에 html 태그 가능
    response.end('<p>배가 아프다</p>') //요청하고 end로 응답 받고 
  })
  
    .listen(3001, () => {
      console.log('포트 3001번으로 실행하고 있음!')
    })


// 이벤트 리스너 방식 //
//server.listen(3000) // 포트 지정 3000  
// server.on('listening', () => {
//   console.log('3000번 포트에서 실행하고있음')
// })

// server.on('error',(err) =>{
//   console.error(err)
// })
