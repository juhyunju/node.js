const http = require('http')
const fs = require('fs').promises

const server = http.createServer(async(req,res) => {
  try{
    throw new Error('에러메세지: 돌아가') // 에러메세지 던짐
    const data = await fs.readFile('./index.html')
    res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
    res.end(data)
  }catch(err){
    console.error(err)
    res.writeHead(500,{'Content-Type': 'text/html; charset=utf-8'})
    res.end(`<p> ${err.message}</p>`)
  }
})

server.listen(3000)

server.on('listening',() => {
  console.log('서버 3000번 데스')
})
