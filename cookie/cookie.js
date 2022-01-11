const http = require('http')

const server = http.createServer((req,res) => {
    console.log(req.url, req.headers.cookie)
    res.writeHead(200,{'Set-Cookie': 'mycookie=test'})
    res.end('Hello Cokie')
})

server.listen(8080)

server.on('listening', () => {
    console.log('8080 서버에서 실행중')
}) 