const http = require('http')


const server = http.createServer((req, res)=>{
  res.writeHead(404,
    {
      'Content-Type': 'application/json',
      'X-Powered-By': 'Node.js'
    }
  )
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



