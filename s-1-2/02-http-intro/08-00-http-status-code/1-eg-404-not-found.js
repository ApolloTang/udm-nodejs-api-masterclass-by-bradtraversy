const http = require('http')

const server = http.createServer((req, res)=>{
  res.statusCode = 404
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('X-Powered-By', 'Node.js')
  res.end(
    JSON.stringify( {
      success: false,
      error: 'Not Found',
      data: null
    })
  )
})

const PORT = 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))



