const http = require('http')


const server = http.createServer((req, res)=>{
  res.setHeader('Content-Type', 'text/html')
  res.write('<h1>hello</h1>')
  res.write('<h2>bye</h2>')
  res.end()
})

const PORT = 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
