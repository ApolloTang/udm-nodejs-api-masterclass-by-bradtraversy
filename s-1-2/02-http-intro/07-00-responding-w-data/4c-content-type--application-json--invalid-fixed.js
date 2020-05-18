const http = require('http')

const server = http.createServer((req, res)=>{
  res.setHeader('Content-Type', 'application/json')
  res.end(
    JSON.stringify( {
      "foo":"foo"
    })
  )
})

const PORT = 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))



