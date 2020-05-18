const http = require('http')


const server = http.createServer((req, res)=>{
  res.writeHead(400,
    {
      'Content-Type': 'application/json',
      'X-Powered-By': 'Node.js'
    }
  )
  res.end(
    JSON.stringify( {
      success: false,
      error: 'Email missing',
      data: null
    })
  )
})

const PORT = 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))



