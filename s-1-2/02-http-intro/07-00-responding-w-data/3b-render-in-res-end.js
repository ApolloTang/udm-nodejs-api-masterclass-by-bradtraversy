const http = require('http')


const server = http.createServer((req, res)=>{
  res.setHeader('Content-Type', 'text/html')
  res.end('<h1>hello</h1><h2>bye</h2>')
})

const PORT = 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
